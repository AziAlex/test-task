import {ColumnActionTypes, IColumnState, TColumnAction} from "../models/column";

const initialState: IColumnState = {
  table: null,
  loading: false,
  error: null
}

export default (state = initialState, action: TColumnAction): IColumnState => {
  switch (action.type) {
    case ColumnActionTypes.FETCH_COLUMN:
      return {...state, loading: true};
    case ColumnActionTypes.FETCH_COLUMN_SUCCESS:
      return {...state, loading: false, table: action.payload};
    case ColumnActionTypes.FETCH_COLUMN_ERROR:
      return {...state, loading: false, error: action.payload};
    case ColumnActionTypes.UPDATE_COLUMN:
      return {...state, table: action.payload};
    default:
      return {...state};
  }
}