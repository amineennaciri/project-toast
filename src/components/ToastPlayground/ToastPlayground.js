import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message,setMessage] = React.useState('');
  const [variant,setVariant] = React.useState(VARIANT_OPTIONS[0]);
  //const [toastPopUp,setToastPopUp] = React.useState(false);
  const [toasts, setToasts] = React.useState([{
    id: crypto.randomUUID(),
    message: 'Oh no!',
    variant: 'error',
  },
  {
    id: crypto.randomUUID(),
    message: 'Logged in!',
    variant: 'success',
  }
]);

  function handleCreateToast(event){
    event.preventDefault();//prevent the form submission to refresh the page
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToast);
    setMessage('');//reset message
    setVariant(VARIANT_OPTIONS[0]);//reset variant
  }
  
  function handleDismiss(idTargeted){
    const nextToast = toasts.filter((toast) => {
      return toast.id != idTargeted;
    });
    setToasts(nextToast);
  }

  return (
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf toasts={toasts} handleDismiss={handleDismiss}/>

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
