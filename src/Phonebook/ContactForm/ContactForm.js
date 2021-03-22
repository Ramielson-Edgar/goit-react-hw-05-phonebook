import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';
import slideLogo from '../ContactForm/logoSlide.module.css';

class ContactForm extends Component {
  static id = shortid.generate();

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.addcontact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={slideLogo}
          unmountOnExit
        >
          <div>
            <h1 className="logo">Phonebook</h1>
          </div>
        </CSSTransition>

        <div className={s.wrapper}>
          <div className={s.inputContainer}>
            <h1 className={s.hedaline}>Welcome</h1>
            <form className={s.form} onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={this.handleChange}
                id={this.id}
                className={s.inputName}
              />

              <input
                type="text"
                name="number"
                placeholder="+38(097) 9732 656 "
                value={number}
                onChange={this.handleChange}
                id={this.id}
                className={s.inputNumber}
              />
              <button className={s.btn} type="submit">
                Add contact
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.oneOf(['name', 'number']),
  name: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
  id: PropTypes.string,
};

export default ContactForm;
