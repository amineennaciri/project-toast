import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from './../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message,setMessage] = React.useState('');
  const [variant,setVariant] = React.useState('notice');
  const [toastPopUp,setToastPopUp] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastPopUp && <Toast message={message} variant={variant}
      setToastPopUp={setToastPopUp}/>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
            
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput}
              value={message}
              onChange={(event)=>setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((el,index)=>(
              
              <label htmlFor={`variant-${el}`} key={index}>
              <input
                id={`variant-${el}`}
                type="radio"
                name="variant"
                value={el}
                key={index}
                checked={el === variant}
                onChange={event => {
                  setVariant(event.target.value);
                }}
              />
              {el}
            </label>
           
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={()=>setToastPopUp(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
