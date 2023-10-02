import React, {FC, useState} from 'react';
import Input from "../../../shared/ui/inputs/input";
import Button from "../../../shared/ui/button";

import styles from "./styles.module.scss"
import {useDispatch} from "react-redux";
import {addTableAction} from "../../../app/redux/actions/tableAction";

interface IProps {
  id: number
  setShowModal: (showModal: boolean) => void
}

const CreateTableForm: FC<IProps> = ({id, setShowModal}) => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()


  const createTable = () => {
    if (!title.length) return
    dispatch(addTableAction([{id, title}]))

    setTimeout(() => {
      setShowModal(false)
    }, 100)
  }

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        value={title}
        placeholder="Enter name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={createTable} name="Create new table"/>
    </form>
  );
};

export default CreateTableForm;