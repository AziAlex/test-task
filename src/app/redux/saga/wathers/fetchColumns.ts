import axios, {AxiosResponse} from "axios";
import {IColumns} from "../../../../shared/types/table";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {ColumnActionTypes, IFetchColumnAction} from "../../models/column";
import {fetchColumnErrorAction, fetchColumnSuccessAction} from "../../actions/columnfetchAction";

const getColumn = (param: string) => {
  return axios.get<IColumns>(`http://localhost:3001/tableColumns/${param}`)
}

function* fetchColumnSaga(action: IFetchColumnAction): Generator<unknown, any, AxiosResponse<IColumns>> {
  try {
    const {data} = yield call(getColumn, action.param)
    yield put(fetchColumnSuccessAction(data))
  } catch (e: any) {
    yield put(fetchColumnErrorAction(e.message))
  }
}

function* watchFetchColumn(): Generator {
  yield all([takeLatest(ColumnActionTypes.FETCH_COLUMN, fetchColumnSaga)])
}

export default watchFetchColumn