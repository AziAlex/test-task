import React, {FC} from 'react';
import Cross from "../../../../shared/ui/cross";

import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../app/redux";
import {IColumns} from "../../../../shared/types/table";
import {updateColumnAction} from "../../../../app/redux/actions/columnfetchAction";

interface IProps {
  id: string
  type: "column" | "task"
  columnId?: string
}

const DeleteElement: FC<IProps> = ({type, id, columnId}) => {
  const {table} = useSelector((state: RootState) => state.columns)
  const dispatch = useDispatch()

  const deleteElement = () => {
    if (!table) return

    const newState: IColumns = {...table};

    if (type === "column") {
      newState.columnOrder = newState.columnOrder.filter(item => item !== id)
      delete newState.columns[id]
    } else {
      if (!columnId) return;
      newState.columns[columnId].taskIds = newState.columns[columnId].taskIds.filter(task => task !== id)
      delete newState.tasks[id]
    }
    dispatch(updateColumnAction(newState))
  }

  return (
    <div
      className={styles.delete}
      onClick={deleteElement}
    >
      <Cross/>
    </div>
  );
};

export default DeleteElement;