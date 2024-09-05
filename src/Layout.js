import React from 'react';

const LayoutMain = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutMain;
