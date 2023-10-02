import axios, {AxiosResponse} from "axios";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {ITable} from "../../../../shared/types/table";
import {TableActionTypes} from "../../models/table";
import {fetchTableErrorAction, fetchTableSuccessAction} from "../../actions/tableAction";

const getTable = () => {
  return axios.get<ITable[]>(`http://localhost:3001/tables`)
}

function* fetchTableSaga(): Generator<unknown, any, AxiosResponse<ITable[]>> {
  try {
    const {data} = yield call(getTable)
    yield put(fetchTableSuccessAction(data))
  } catch (e: any) {
    yield put(fetchTableErrorAction(e.message))
  }
}

function* watchFetchTable(): Generator {
  yield all([takeLatest(TableActionTypes.FETCH_TABLE, fetchTableSaga)])
}

export default watchFetchTable