import React, {useState} from 'react';
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import {IColumns, initialItems} from "./lib/constants";
import Column from "./ui/columns";
import styles from "./styles.module.scss"

const Table = () => {
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result: DropResult) => {
    const {destination, source, draggableId, type} = result

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(items.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState: IColumns = {
        ...items,
        columnOrder: newColumnOrder,
      }
      setItems(newState)
      return
    }

    const start = items.columns[source.droppableId];
    const finish = items.columns[destination.droppableId];

    if (start === finish) {
      const newTaskId = Array.from(start.taskIds);
      newTaskId.splice(source.index, 1);
      newTaskId.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskId,
      }

      const newState: IColumns = {
        ...items,
        columns: {
          ...items.columns,
          [newColumn.id]: newColumn
        }
      }
      setItems(newState)
      return;
    }

    const startTaskId = Array.from(start.taskIds);
    startTaskId.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskId,
    }

    const finishTaskId = Array.from(finish.taskIds);
    finishTaskId.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskId,
    }

    const newState: IColumns = {
      ...items,
      columns: {
        ...items.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }
    setItems(newState)
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
              {items.columnOrder.map((columnId, index) => {
                const column = items.columns[columnId];
                const tasks = column.taskIds.map((taskId) => items.tasks[taskId]);

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
