import React from 'react';
import './global.css';
import './font.css';
import './Interface/Browser.css'
import { Taskbar, Desktop } from './Interface/Interface';

function App() {
  return (
    <body>
      <Desktop />
      <Taskbar />
    </body>
  );
}

export default App;