import React, {FC, memo, useState} from 'react';

import CreateColumnForm from "../../../forms/create-column";

import styles from "./styles.module.scss"

interface IProps {
  index?: string
}

const CreateElement: FC<IProps> = ({index}) => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      {!active ? (
        <h3 onClick={() => setActive(true)}><span/>Create new {!index ? "column" : "task"}</h3>
      ) : index ? (
        <CreateColumnForm columnId={index} type="textarea" setActive={setActive}/>
      ) : (
        <CreateColumnForm type="input" setActive={setActive}/>
      )}
    </div>
  );
};

export default memo(CreateElement);