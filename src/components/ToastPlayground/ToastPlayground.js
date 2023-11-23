import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message,setMessage] = React.useState('');
  const [variant,setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const {createToast} = React.useContext(ToastContext);
  

  function handleCreateToast(event){
    event.preventDefault();//prevent the form submission to refresh the page
    createToast(message,variant);

    setMessage('');//reset message
    setVariant(VARIANT_OPTIONS[0]);//reset variant
  }

  return (
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf/>

        <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
    </div>
  );
}

export default ToastPlayground;
