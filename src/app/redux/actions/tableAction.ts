import {ITable} from "../../../shared/types/table";
import {
  IFetchTableAction,
  IFetchTableErrorAction,
  IFetchTableSuccessAction,
  IAddTableAction,
  TableActionTypes, IRemoveTableAction
} from "../models/table";

export const fetchTableAction = (): IFetchTableAction => ({
  type: TableActionTypes.FETCH_TABLE
})

export const fetchTableSuccessAction = (payload: ITable[]): IFetchTableSuccessAction => ({
  type: TableActionTypes.FETCH_TABLE_SUCCESS,
  payload
})

export const fetchTableErrorAction = (payload: string): IFetchTableErrorAction => ({
  type: TableActionTypes.FETCH_TABLE_ERROR,
  payload
})

export const addTableAction = (payload: ITable[]): IAddTableAction => ({
  type: TableActionTypes.ADD_TABLE,
  payload
})

export const removeTableAction = (payload: number): IRemoveTableAction => ({
  type: TableActionTypes.REMOVE_TABLE,
  payload
})