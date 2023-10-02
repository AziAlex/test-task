import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {combineReducers} from "redux";
import columnReducer from "./reducers/columnReducer";
import tablesReducer from "./reducers/tableReducer";
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  columns: columnReducer,
  tables: tablesReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer