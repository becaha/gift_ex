import React from 'react';
import './App.css';
import { LogoHeader } from './LogoHeader.js';
import { Sidebar } from './Sidebar.js';
import {Router} from "./Router.js";

function App() {
  return (
      <div>
          <LogoHeader/>
              <Sidebar/>
              {/*<GroupExchange/>*/}
              {/*<Router/>*/}
      </div>
  );
}

export default App;
