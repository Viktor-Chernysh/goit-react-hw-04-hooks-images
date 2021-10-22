import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ toggleModal, children }) {
  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     toggleModal();
  //   }
  // };
  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    });
    return () => {
      window.removeEventListener('keydown', e => {
        if (e.code === 'Escape') {
          toggleModal();
        }
      });
    };
  }, [toggleModal]);

  return createPortal(
    <div className={s.Overlay} onClick={onOverlayClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}
