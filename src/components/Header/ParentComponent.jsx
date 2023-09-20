import React, { useState } from 'react';
import UserForm from './UserForm';
import RestPasswordFrom from './RestPasswordFrom';
import RegistrationForm from './RegistrationForm';


function ParentComponent(props) {
  const [activeForm, setActiveForm] = useState('user'); // حالة لتحديد النموذج النشط
  const { active } = props;
  const toggleForms = () => {
    setActiveForm(activeForm === 'user' ? 'registration' : 'user'); // تبديل النموذج النشط
  };
  const toggleResetForm = () => {
    setActiveForm('reset');
  };

  return (
    <div className={`user ${active ? 'active' : ''}`}>
      {activeForm === 'user' ? (
        <UserForm active={true} toggleForms={toggleForms} toggleResetForm={toggleResetForm} />
      ) : activeForm === 'reset' ? (
        <RestPasswordFrom active={true} toggleForms={toggleForms} />
      ) : (
        <RegistrationForm active={true} toggleForms={toggleForms} />
      )}
    </div>
  );
}

export default ParentComponent;
