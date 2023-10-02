import React, {FC} from 'react';

import styles from "./styles.module.scss"

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const TextArea: FC<IProps> = ({...props}) => (
  <textarea className={styles.textarea} {...props}/>
);

export default TextArea;