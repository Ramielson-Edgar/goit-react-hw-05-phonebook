import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import Appearances from '../Filter/FilterAppearances.module.css';

const Filter = ({ value, handleChangeFilter, contacts }) => {
  return (
    <>
      {contacts.length > 0 && (
        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={Appearances}
          unmountOnExit
        >
          <div className={s.wrapper}>
            <p className={s.subtitle}>Find contacts by name</p>
            <input
              className={s.filter}
              type="text"
              name="name"
              value={value}
              onChange={e => handleChangeFilter(e.target.value)}
            />
          </div>
        </CSSTransition>
      )}
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func,
};

export default Filter;
