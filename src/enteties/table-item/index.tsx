import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ITable} from "../../shared/types/table";

import styles from "./styles.module.scss"

const TableItem: FC<ITable> = ({id, title}) => (
  <li className={styles.item}>
    <Link to={`/project/${id}`}>{title}</Link>
  </li>
);

export default TableItem;