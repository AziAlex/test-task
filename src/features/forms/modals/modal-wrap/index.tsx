import React, {FC} from 'react';

import styles from "./styles.module.scss"

interface IProps {
  children: React.ReactNode
  setShowModal: (showModal: boolean) => void
}

const ModalWrap: FC<IProps> = ({children, setShowModal}) => (
  <div
    className={styles.modalWrap}
    onClick={() => setShowModal(false)}
  >
    {children}
  </div>
);

export default ModalWrap;