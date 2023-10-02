import {
  ColumnActionTypes,
  IFetchColumnAction,
  IFetchColumnErrorAction,
  IFetchColumnSuccessAction,
  IUpdateColumnAction
} from "../models/column";
import {IColumns} from "../../../shared/types/table";

export const fetchColumnAction = (param: string): IFetchColumnAction => ({
  type: ColumnActionTypes.FETCH_COLUMN,
  param: param
})

export const fetchColumnSuccessAction = (payload: IColumns): IFetchColumnSuccessAction => ({
  type: ColumnActionTypes.FETCH_COLUMN_SUCCESS,
  payload
})

export const fetchColumnErrorAction = (payload: string): IFetchColumnErrorAction => ({
  type: ColumnActionTypes.FETCH_COLUMN_ERROR,
  payload
})

export const updateColumnAction = (payload: IColumns): IUpdateColumnAction => ({
  type: ColumnActionTypes.UPDATE_COLUMN,
  payload
})