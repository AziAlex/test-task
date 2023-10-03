interface IObjectKeyString<T> {
  [key: string]: T
}

export interface ITable {
  id?: number;
  title: string;
}

export interface IColumn {
  _id?: string;
  id: string;
  title: string;
  taskIds: string[];
}

export interface ITask {
  id: string;
  content: string;
}

export interface IColumns {
  id?: number;
  tasks: IObjectKeyString<ITask>
  columns: IObjectKeyString<IColumn>
  columnOrder: string[];
}