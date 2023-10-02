import {ITableState, TableActionTypes, TTableAction} from "../models/table";

const initialState: ITableState = {
  tables: null,
  loading: false,
  error: null
}

export default (state = initialState, action: TTableAction): ITableState => {
  switch (action.type) {
    case TableActionTypes.FETCH_TABLE:
      return {...state, loading: true};
    case TableActionTypes.FETCH_TABLE_SUCCESS:
      return {...state, loading: false, tables: action.payload};
    case TableActionTypes.FETCH_TABLE_ERROR:
      return {...state, loading: false, error: action.payload};
    case TableActionTypes.ADD_TABLE:
      return {...state, tables: state.tables ? [...state.tables, action.payload[0]] : action.payload};
    case TableActionTypes.REMOVE_TABLE:
      return {...state, tables: state.tables ? state.tables.filter(table => table.id !== action.payload) : []};
    default:
      return {...state};
  }
}