interface IObjectKeyString<T> {
  [key: string]: T
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface ITask {
  id: string;
  content: string;
}

export interface IColumns {
  tasks: IObjectKeyString<ITask>
  columns: IObjectKeyString<IColumn>
  columnOrder: string[];
}