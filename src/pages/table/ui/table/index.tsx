import React, {FC} from 'react';
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";
import {IColumns} from "../../lib/types";
import styles from "../../styles.module.scss";
import Column from "../columns";

interface IProps {
  table: IColumns
  setTable: (table: IColumns) => void
}

const Table: FC<IProps> = ({table, setTable}) => {
  const onDragEnd = (result: DropResult) => {
    const {destination, source, draggableId, type} = result;

    if (!destination) return;

    const newState = {...table}; // Копируем исходное состояние

    if (type === 'column') {
      // Перемещение колонок
      const newColumnOrder = Array.from(table.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      newState.columnOrder = newColumnOrder;
    } else {
      // Перемещение задач между колонками
      const start = newState.columns[source.droppableId];
      const finish = newState.columns[destination.droppableId];

      if (start === finish) {
        // Перемещение задач внутри одной колонки
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        newState.columns[start.id].taskIds = newTaskIds;
      } else {
        // Перемещение задач между разными колонками
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        newState.columns[start.id].taskIds = startTaskIds;
        newState.columns[finish.id].taskIds = finishTaskIds;
      }
    }

    setTable(newState);
  };

  return (
    <div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="All-columns" direction="horizontal" type="column">
          {(provided) => (
            <div
              className={styles.container}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {table.columnOrder.map((columnId, index) => {
                const column = table.columns[columnId];
                const tasks = column.taskIds.map((taskId) => table.tasks[taskId]);

                return <Column key={column.id} index={index} column={column} tasks={tasks}/>
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Table;