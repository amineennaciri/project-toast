import React, { Children } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
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
  React.useEffect(()=>{
    function handleKeyDown(event) {
      if(event.code ==='Escape'){
        setToast([]);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  function createToast(message,variant){
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToast);
  }
  function dismissToast(id){
    const nextToast = toasts.filter((toast) => {
      return toast.id != idTargeted;
    });
    setToasts(nextToast);
  }

  return <ToastContext.Provider value={{toasts, createToast , dismissToast}}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
