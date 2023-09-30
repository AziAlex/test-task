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

export const initialItems: IColumns = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Task 1'},
    'task-2': {id: 'task-2', content: 'Task 2'},
    'task-3': {id: 'task-3', content: 'Task 3'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Queue',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Development',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};