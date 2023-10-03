import axios, {AxiosResponse} from "axios";
import {IColumns} from "../../../../shared/types/table";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {fetchColumnErrorAction} from "../../actions/columnfetchAction";
import {ColumnActionTypes, IUpdateColumnAction} from "../../models/column";
import {API_URL} from "../../../../shared/constants.ts/config";

function* updateTableSaga(action: IUpdateColumnAction): Generator<unknown, any, AxiosResponse<IColumns>> {
  try {
    yield call(axios.put, `${API_URL}/tableColumns/${action.payload.id}`, action.payload)
  } catch (e: any) {
    yield put(fetchColumnErrorAction(e.message))
  }
}

function* watchUpdateTable(): Generator {
  yield all([takeLatest(ColumnActionTypes.UPDATE_COLUMN, updateTableSaga)])
}

export default watchUpdateTable

