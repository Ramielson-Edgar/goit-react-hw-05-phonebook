import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './ContactList.module.css';
import slide from '../ContactList/item.module.css';
import IconButtonDelete from '../IconButton/IconButton';
import { ReactComponent as IconDelete } from '../IconButton/svg/Delete.svg';

const ContactList = ({ contacts, onRemove }) => {
  console.log(contacts.length);
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) =>
        contacts.length === 4 ? null : (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={slide}
            unmountOnExit
          >
            <li key={id} className={s.item}>
              <strong>{name}</strong>
              <p>{number}</p>
              <IconButtonDelete
                id={id}
                onRemove={onRemove}
                arial-lable="delete-contacts"
              >
                <IconDelete width="16" height="16" fill="white" />
              </IconButtonDelete>
            </li>
          </CSSTransition>
        ),
      )}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;
