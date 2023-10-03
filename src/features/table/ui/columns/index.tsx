import React, {FC} from 'react';

import styles from "./styles.module.scss"
import {IColumn, ITask} from "../../../../shared/types/table";
import {Draggable, Droppable} from "react-beautiful-dnd";
import Task from "../../../../enteties/table-task";
import CreateElement from "../create-element";
import DeleteElement from "../delete-elemnt";

interface IProps {
  tasks: ITask[]
  column: IColumn
  index: number
}

const Column: FC<IProps> = ({column, tasks, index}) => (
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
                <Task columnId={column.id} index={index} task={task} key={index}/>
              ))}
              {provided.placeholder}
              <CreateElement index={column.id}/>
            </div>
          )}
        </Droppable>
        <div className={styles.delete}>
          <DeleteElement id={column.id} type="column"/>
        </div>
      </div>
    )}
  </Draggable>
)

export default Column;