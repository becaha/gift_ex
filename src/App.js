import React from 'react';
import './App.css';
import { LogoHeader } from './LogoHeader.js';
import { Sidebar } from './Sidebar.js';
import {GroupExchange} from "./GroupExchange";

function App() {
  return (
      <div>
          <LogoHeader/>
          <div className="screen">
              <Sidebar/>
              <GroupExchange/>
          </div>
      </div>
  );
}

export default App;
