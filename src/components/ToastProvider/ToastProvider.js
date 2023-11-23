import React, { Children } from 'react';
import useKeydown from '../../hooks/use-keydown';

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

  const handleEscape = React.useCallback(()=>{
    setToasts([]);
  }, []);
  useKeydown('Escape', handleEscape);


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
