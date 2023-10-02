import React, {FC} from 'react';
import {Draggable} from "react-beautiful-dnd";

import DeleteElement from "../../features/table/ui/delete-elemnt";
import {ITask} from "../../shared/types/table";

import styles from "./styles.module.scss"

interface IProps {
  index: number
  task: ITask
  columnId: string
}

const Task: FC<IProps> = ({task, index, columnId}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{task.content}</p>
          <div className={styles.delete}>
            <DeleteElement columnId={columnId} id={task.id} type="task"/>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task