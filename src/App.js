import React from 'react';
import './App.css';
import { LogoHeader } from './LogoHeader.js';
import { Screen } from './Screen.js';

function App() {
    const members = ['Sarah Jones', 'Mike Jones', 'Mo Jones'];
    return (
      <div>
          <LogoHeader/>
              <Screen members={members}/>
      </div>
    );
}

export default App;
