import React, {FC} from 'react';

import styles from "./styles.module.scss"

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  name: string
}

const Index: FC<IProps> = ({name, ...props}) => (
  <button
    {...props}
    className={styles.button}
  >
    {name}
  </button>
);

export default Index;