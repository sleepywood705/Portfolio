import React from 'react';
import './global.css';
import './font.css';
import './Interface/Browser.css'
import { Desktop } from './Interface/Interface';
import { Taskbar } from './Interface/Taskbar'


function App() {
  return (
    <body>
      <Desktop />
      <Taskbar />
    </body>
  );
}

export default App;