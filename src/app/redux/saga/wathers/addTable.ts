import axios from "axios";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {IColumns} from "../../../../shared/types/table";
import {IAddTableAction, TableActionTypes} from "../../models/table";
import {fetchTableErrorAction} from "../../actions/tableAction";

const newTableColumn: IColumns = {
  columnOrder: [],
  columns: {},
  tasks: {}
}

function* fetchTableSaga(action: IAddTableAction): Generator {
  try {
    yield call(axios.post, `http://localhost:3001/tables`, action.payload[0]);
    yield call(axios.post, `http://localhost:3001/tableColumns`, newTableColumn);
  } catch (e: any) {
    yield put(fetchTableErrorAction(e.message));
  }
}

function* watchAddTable(): Generator {
  yield all([takeLatest(TableActionTypes.ADD_TABLE, fetchTableSaga)])
}

export default watchAddTable