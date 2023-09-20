import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';
import { loginUser, logoutUser } from '../../../api';
import { BsPerson, BsLock, BsTruck, BsTicketPerforated } from 'react-icons/bs'; // مثال على استيراد أيقونات BsPerson و BsLock
import { FiLogOut } from 'react-icons/fi'; // مثال على استيراد أيقونة FiLogOut


export default function UserForm(props) {
  const { active, toggleForms, toggleResetForm } = props;
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  
  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await loginUser(userData);
      let statusCode = 200;
      if (response.status === statusCode) {
        // قم بتحديث حالة تسجيل الدخول بنجاح
        setLoggedIn(true);
        // حفظ حالة تسجيل الدخول في localStorage
        localStorage.setItem('loggedIn', 'true');
        alert('تم تسجيل الدخول بنجاح');
      } else {
        alert('فشل تسجيل الدخول');
      }
    } catch (error) {
      console.error('حدث خطأ أثناء تسجيل الدخول', error);
    }
  };
  
  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      let statusCode = 200;
      if (response.status === statusCode) {
        // قم بتحديث حالة تسجيل الدخول بنجاح
        setLoggedIn(false);
        // حذف حالة تسجيل الدخول من localStorage
        localStorage.removeItem('loggedIn');
        alert('تم تسجيل الخروج بنجاح');
      }
    } catch (error) {
      console.error('حدث خطأ أثناء تسجيل الخروج', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {!loggedIn ? (
        <form className={`user-form ${active ? 'active' : ''}`}>
          <h3>login now</h3>
          <div className="box">
            <input
              type="email"
              placeholder="your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p>
            forgot your password
            {' '}
            <a href="#" onClick={toggleResetForm}>click here</a>
          </p>
          <p>
            Create account
            {' '}
            <a href="#" onClick={toggleForms}>click here</a>
          </p>
          <p>
            <button type="button" className="btn" onClick={handleLogin}>
              login now
            </button>
          </p>
        </form>
      ) : (
        <div className="menu">
        <h3>
          <label>Hi, first_name</label>
          <div></div>
        </h3>
        <hr />
        <ul>
          <li>
            <BsPerson className="icons-size" />
            <a href="{% url 'profile' %}">My Profile</a>
          </li>
            <li>
            <BsLock className="icons-size" />
            <a href="{% url 'password_change' %}">Change Password</a>
          </li>
          <li>
            <BsTruck className="icons-size" />
            <a href="{% url 'profile' %}">Track all transfers</a>
          </li>
          <li>
            <BsTicketPerforated className="icons-size" />
            <a href="{% url 'profile' %}">Track all transfers</a>
          </li>
          <li>
            <FiLogOut className="icons-size" />
            <a href="#" onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
}

UserForm.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleForms: PropTypes.func.isRequired,
  toggleResetForm: PropTypes.func.isRequired,
};
