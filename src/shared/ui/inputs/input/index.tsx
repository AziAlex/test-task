import React, {FC} from 'react';

import styles from "./styles.module.scss"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({...props}) => (
  <input className={styles.input} {...props}/>
);

export default Input;