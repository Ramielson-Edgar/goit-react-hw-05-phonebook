import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './MyPnotify.module.css';

const MyPnotify = ({ className, hideAlert }) => {
  return (
    <>
      <CSSTransition
        classNames={className}
        in={hideAlert}
        timeout={250}
        unmountOnExit
      >
        <div className={s.wrapper}>
          <div className={s.alertContainer}>
            <p>This contact already exist!</p>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

MyPnotify.propTypes = {};

export default MyPnotify;
