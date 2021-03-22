import React from 'react';
import PropTypes from 'prop-types';
import s from './IconButtonDelete.module.css';

const IconButtonDelete = ({ id, children, onRemove, ...rest }) => {
  return (
    <div>
      <button
        className={s.btn}
        type="delete"
        onClick={() => onRemove(id)}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

IconButtonDelete.defaultProps = {
  addContact: () => null,
  children: null,
};

IconButtonDelete.propTypes = {
  onRemove: PropTypes.func,
  children: PropTypes.node,
  'arial-lable': PropTypes.string.isRequired,
};

export default IconButtonDelete;
