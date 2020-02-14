import React from 'react';
import './App.css';
import { LogoHeader } from './LogoHeader.js';
import { Screen } from './Screen.js';

function App() {
    console.log('app');
    const members = ['Sarah Jones', 'Mike Jones', 'Mo Jones'];
    const groupName = 'Jones Family';
    return (
      <div>
          <LogoHeader/>
              <Screen groupName={groupName} members={members}/>
      </div>
    );
}

export default App;
