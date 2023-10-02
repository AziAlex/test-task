import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ITable} from "../../shared/types/table";

import styles from "./styles.module.scss"
import {useDispatch} from "react-redux";
import {removeTableAction} from "../../app/redux/actions/tableAction";

const TableItem: FC<ITable> = ({id, title}) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.item}>
      <Link to={`/project/${id}`}>{title}</Link>
      {id && <span onClick={() => dispatch(removeTableAction(id))}/>}
    </li>
  )
}

export default TableItem;