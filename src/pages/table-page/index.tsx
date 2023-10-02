import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Table from "../../features/table";
import {RootState} from "../../app/redux";
import {fetchColumnAction} from "../../app/redux/actions/columnfetchAction";

const TablePage = () => {
  const {table, loading, error} = useSelector((state: RootState) => state.columns)
  const param = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchColumnAction(param.id as string))
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {table && <Table table={table}/>}
    </>
  )
};

export default TablePage;
