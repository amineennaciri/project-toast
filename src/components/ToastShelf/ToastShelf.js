import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToastPopUp}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((el,index)=>{
        <li key={index} className={styles.toastWrapper}>
        <Toast variant={el.variant} setToastPopUp={setToastPopUp}>{el.message}</Toast>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
