import './App.css';
import React from 'react';
import ProjectTable from './AgGrid';
import LayoutMain from './Layout';
import SidePanel from './LayoutSidePanel';

function App() {
  return (
    <div className="App">
      <SidePanel />
    </div>
  );
}

export default App;
