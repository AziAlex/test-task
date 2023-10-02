import React, {useEffect, useState} from 'react';
import TableItem from "../../enteties/table-item";

import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchTableAction} from "../../app/redux/actions/tableAction";
import {RootState} from "../../app/redux";
import ModalWrap from "../../features/forms/modals/modal-wrap";
import CreateTableForm from "../../features/forms/create-table";

const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  const {tables, loading, error} = useSelector((state: RootState) => state.tables)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTableAction())
  }, []);

  return (
    <div className={styles.wrap}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {tables && (
        <ul>
          {tables.map((table) => (
            <TableItem key={table.id} {...table}/>
          ))}
          <li>
            <button onClick={() => setShowModal(true)}>Создать доску</button>
          </li>
        </ul>
      )}
      {showModal && (
        <ModalWrap setShowModal={setShowModal}>
          <CreateTableForm setShowModal={setShowModal} id={tables?.length || 0}/>
        </ModalWrap>
      )}
    </div>
  );
};

export default Projects;