// RegistrationForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RegistrationForm.css';
import { registerUser } from '../../../api';

export default function RegistrationForm(props) {
  const { active, toggleForms } = props;
  const [username, setUsername] = useState(''); // حالة المستخدم
  const [email, setEmail] = useState(''); // حالة البريد الإلكتروني
  const [password, setPassword] = useState(''); // حالة كلمة المرور
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // بناء كائن البيانات من حالات المتغيرات
      const userData = { username, email, password };

      // إرسال البيانات إلى وظيفة registerUser للتسجيل
      const response = await registerUser(userData);

      // يمكنك إجراء الإجراءات المناسبة بناءً على الاستجابة هنا (على سبيل المثال، تسجيل المستخدم الناجح).
      alert('تم التسجيل بنجاح', response);

    } catch (error) {
      // يمكنك معالجة الأخطاء هنا (على سبيل المثال، عرض رسالة خطأ).
      alert('حدث خطأ أثناء التسجيل', error);
    }
  };

  return (
    <form method='POST' className={`Registration-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3>Registration now</h3>
      <div className="box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="box">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="box">
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p>
        I have an account{' '}
        <a href="#" onClick={toggleForms}>
          Login
        </a>
      </p>
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}

RegistrationForm.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleForms: PropTypes.func.isRequired,
};
