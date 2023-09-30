import Table from "./ui/table";
import {useEffect, useState} from "react";
import axios from "axios";
import {IColumns} from "./lib/types";
import {useParams} from "react-router-dom";

const TablePage = () => {
  const [table, setTable] = useState<IColumns | null>(null);
  const param = useParams()

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get<IColumns>(`http://localhost:3001/tableColumns/${param.id}`);
        setTable(data)
      } catch (e) {
        console.log(`роезошла ошибка! Таблица ${param.id} не найдена.`)
      }
    })()
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (table) {
          await axios.put<IColumns>(`http://localhost:3001/tableColumns/${param.id}`, table);
        }
      } catch (e) {
        console.log(`роезошла ошибка! Таблица ${param.id} не обновлена.`)
      }
    })()
  }, [table]);

  if (!table) {
    return <h1>Loading...</h1>;
  }
  return <Table table={table} setTable={setTable}/>
};

export default TablePage;
