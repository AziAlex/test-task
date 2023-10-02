import {all, fork} from "redux-saga/effects";

import watchFetchColumn from "./wathers/fetchColumns";
import watchUpdateColumn from "./wathers/updateColumns";
import watchFetchTable from "./wathers/fetchTables";
import watchAddTable from "./wathers/addTable";
import watchRemoveTable from "./wathers/removeTable";

export function* rootSaga() {
  yield all([
    fork(watchUpdateColumn),
    fork(watchFetchColumn),
    fork(watchFetchTable),
    fork(watchAddTable),
    fork(watchRemoveTable)
  ])
}