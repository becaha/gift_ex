import React from 'react';
import './App.css';
import { LogoHeader } from './LogoHeader.js';
import { Screen } from './Screen.js';
import Button from "react-bootstrap/Button";


function App() {
    console.log('app');

    return <Main/>
}

export default App;

export class Main extends React.Component{
  constructor(props){
    super(props);
    const mainheading = {
      fontSize:'40px',
      font: "Maiandra GD",
      color: '#116661',
      textAlign:'center',
      margin: '30px'
    }
    const subheading={
      fontSize:'15px',
      font: "Maiandra GD",
      color: '#116661',
      textAlign:'center'
    }
    this.mode = "Light";
    this.changePage = this.changePage.bind(this);
    this.darkMode = this.darkMode.bind(this);
      this.state = {page:'home', pageContent:(
        <div><LogoHeader/>
        <div><p style={mainheading}>Gift Organized</p><div style = {subheading}><p >Keep All those loose documents together</p>
            <Button className="btn-login" onClick={this.changePage}>LOG IN</Button>or
            <Button className="btn-login" onClick={this.darkMode}>LOG IN in Dark Mode</Button>
        </div></div></div>),
      members:['Sarah Jones', 'Mike Jones', 'Mo Jones'],
        groupName:"Jones Family",
      activityLists: {"Sarah Jones":["Tesla Model X","IPhone 11"],"Mike Jones":["Red Scarf","Cuff Links"]}
    };
  }

  changePage(){
    this.setState({pageContent:(<div>
        <LogoHeader/>
        <Screen groupName={this.state.groupName} members={this.state.members} giftLists={this.state.activityLists}/>
      </div>)});
  }

  darkMode() {
      this.mode = 'Dark';
      this.changePage();
  }

  render(){
      console.log("app render");
    if(this.mode === 'Dark') {
      require('./DarkApp.css');
    }
    else {
      require('./LightMode.css');
    }
    return (
      <div>{this.state.pageContent}</div>
    )

  }
}
