import React from 'react';

import './alert.scss';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type === 'success' ? 'success' : 'error'}`}>
      {message}
    </div>
  );
};

export default Alert;
