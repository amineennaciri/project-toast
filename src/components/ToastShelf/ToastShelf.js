import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts,handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast)=>{
        <li key={toast.id} className={styles.toastWrapper}>
        <Toast id={toast.id} variant={toast.variant} message={toast.message}
        handleDismiss={handleDismiss}/>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
