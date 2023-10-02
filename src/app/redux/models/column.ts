import {IColumns} from "../../../shared/types/table";

export interface IColumnState {
  table: IColumns | null
  loading: boolean
  error: null | string
}

export enum ColumnActionTypes {
  FETCH_COLUMN = "FETCH_COLUMN",
  FETCH_COLUMN_SUCCESS = "FETCH_COLUMN_SUCCESS",
  FETCH_COLUMN_ERROR = "FETCH_COLUMN_ERROR",
  UPDATE_COLUMN = "UPDATE_COLUMN"
}

export interface IFetchColumnAction {
  type: ColumnActionTypes.FETCH_COLUMN
  param: string
}

export interface IFetchColumnSuccessAction {
  type: ColumnActionTypes.FETCH_COLUMN_SUCCESS,
  payload: IColumns
}

export interface IFetchColumnErrorAction {
  type: ColumnActionTypes.FETCH_COLUMN_ERROR,
  payload: string
}

export interface IUpdateColumnAction {
  type: ColumnActionTypes.UPDATE_COLUMN,
  payload: IColumns
}

export type TColumnAction =
  IFetchColumnAction
  | IFetchColumnSuccessAction
  | IFetchColumnErrorAction
  | IUpdateColumnAction

