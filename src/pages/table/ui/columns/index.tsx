import React, {FC} from 'react';

import styles from "./styles.module.scss"
import {IColumn, ITask} from "../../lib/constants";
import {Draggable, Droppable} from "react-beautiful-dnd";
import Task from "../task";

interface IProps {
  tasks: ITask[]
  column: IColumn
  index: number
}

const Column: FC<IProps> = ({column, tasks, index}) => {

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
    <div
      className={styles.column}
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <h3{...provided.dragHandleProps}>{column.title}</h3>
      <Droppable droppableId={column.id} type="task">
        {(provided) => (
          <div
            className={styles.tasks}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task index={index} task={task} key={task.id}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
      )}
    </Draggable>
  );
};

export default Column;