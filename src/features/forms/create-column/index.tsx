import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Button from "../../../shared/ui/button";
import Input from "../../../shared/ui/inputs/input";
import {IColumns} from "../../../shared/types/table";
import Teaxtarea from "../../../shared/ui/inputs/teaxtarea";
import {updateColumnAction} from "../../../app/redux/actions/columnfetchAction";
import {RootState} from "../../../app/redux";

import styles from "./styles.module.scss"

interface IProps {
  columnId?: string
  setActive: (active: boolean) => void
  type: "input" | "textarea"
}

const CreateColumnForm: FC<IProps> = ({setActive, type, columnId = ""}) => {
  const [name, setName] = useState("")
  const {table} = useSelector((state: RootState) => state.columns)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!name.length || !table) return

    const newState: IColumns = {...table}

    if (type === "textarea") {
      const newTaskId = table.tasks ? `task-${Object.keys(table.tasks).length + 1}` : `task-0`

      if (table.tasks) {
        newState.tasks[newTaskId] = {
          id: newTaskId,
          content: name
        }
      } else {
        newState.tasks = {
          [newTaskId]: {
            id: newTaskId,
            content: name
          }
        }
      }

      newState.columns[columnId].taskIds.push(newTaskId)
    } else {
      const newColumnId = table.columns ? `column-${table.columnOrder.length + 1}` : `column-0`

      if (table.columns) {
        newState.columns[newColumnId] = {
          id: newColumnId,
          title: name,
          taskIds: []
        }
      } else {
        newState.columns = {
          [newColumnId]: {
            id: newColumnId,
            title: name,
            taskIds: []
          }
        }
      }

      newState.columnOrder.push(newColumnId)
    }

    dispatch(updateColumnAction(newState))
    setName("")
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      {type === "input" ? (
        <Input
          value={name}
          placeholder="Enter column title"
          onChange={(e) => setName(e.target.value)}
        />) : (
        <Teaxtarea
          value={name}
          placeholder="Enter task title"
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <div>
        <Button onClick={handleSubmit} name={`Create element`}/>
        <span onClick={() => setActive(false)}/>
      </div>
    </form>
  );
}

export default CreateColumnForm;