import React, {FC} from 'react';
import {ITask} from "../../lib/types";
import {Draggable} from "react-beautiful-dnd";
import styles from "./styles.module.scss"

interface IProps {
  index: number
  task: ITask
}

const Task: FC<IProps> = ({task, index}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.id}
        </div>
      )}
    </Draggable>
  );
};

export default Task