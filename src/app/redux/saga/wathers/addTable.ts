import axios from "axios";
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {IAddTableAction, TableActionTypes} from "../../models/table";
import {fetchTableErrorAction} from "../../actions/tableAction";
import {API_URL} from "../../../../shared/constants.ts/config";


function* fetchTableSaga(action: IAddTableAction): Generator {
  try {
    const newTableColumn = {
      id: action.payload[0].id,
      columnOrder: []
    }

    yield call(axios.post, `${API_URL}/tables`, action.payload[0]);
    yield call(axios.post, `${API_URL}/tableColumns`, newTableColumn);
  } catch (e: any) {
    yield put(fetchTableErrorAction(e.message));
  }
}

function* watchAddTable(): Generator {
  yield all([takeLatest(TableActionTypes.ADD_TABLE, fetchTableSaga)])
}

export default watchAddTable