import React from 'react';
import PropTypes from 'prop-types';
import './RestPasswordFrom.css';

export default function RestPasswordFrom(props) {
  const { active, toggleForms } = props; // استخدم toggleForms للتبديل بين النموذجين

  return (
    <form className={`RestPasswordFrom-form ${active ? 'active' : ''}`}>
      <h3>Registration now</h3>
      <div className="box">
        <input type="email" placeholder="your email" />
      </div>
      <p>
        I have an account{' '}
        <a href="#" onClick={toggleForms}>
          Login
        </a>
      </p>
      <button type="submit" className="btn">
        Send Rest Password
      </button>
    </form>
  );
}

RestPasswordFrom.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleForms: PropTypes.func.isRequired, // دالة للتبديل بين النموذجين
};
