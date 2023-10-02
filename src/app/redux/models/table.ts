import {ITable} from "../../../shared/types/table";

export interface ITableState {
  tables: ITable[] | null
  loading: boolean
  error: null | string
}

export enum TableActionTypes {
  FETCH_TABLE = "FETCH_TABLE",
  FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS",
  FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR",
  ADD_TABLE = "ADD_TABLE",
  REMOVE_TABLE = "REMOVE_TABLE"
}

export interface IFetchTableAction {
  type: TableActionTypes.FETCH_TABLE
}

export interface IFetchTableSuccessAction {
  type: TableActionTypes.FETCH_TABLE_SUCCESS,
  payload: ITable[]
}

export interface IFetchTableErrorAction {
  type: TableActionTypes.FETCH_TABLE_ERROR,
  payload: string
}

export interface IAddTableAction {
  type: TableActionTypes.ADD_TABLE,
  payload: ITable[]
}

export interface IRemoveTableAction {
  type: TableActionTypes.REMOVE_TABLE,
  payload: number
}

export type TTableAction =
  IFetchTableAction
  | IFetchTableSuccessAction
  | IFetchTableErrorAction
  | IAddTableAction
  | IRemoveTableAction

