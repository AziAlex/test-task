import axios from "axios";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {IRemoveTableAction, TableActionTypes} from "../../models/table";
import {fetchTableErrorAction} from "../../actions/tableAction";
import {API_URL} from "../../../../shared/constants.ts/config";

function* removeTableSaga(action: IRemoveTableAction): Generator {
  try {
    yield call(axios.delete, `${API_URL}/tables/${action.payload}`)
    yield call(axios.delete, `${API_URL}/tableColumns/${action.payload}`)
  } catch (e: any) {
    yield put(fetchTableErrorAction(e.message))
  }
}

function* watchRemoveTable(): Generator {
  yield all([takeLatest(TableActionTypes.REMOVE_TABLE, removeTableSaga)])
}

export default watchRemoveTable