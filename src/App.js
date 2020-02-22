import React from 'react';
import './App.css';
import { Screen } from './Screen.js';
import Button from "react-bootstrap/Button";
import { LogoHeader } from "./LogoHeader";
import gift1 from "./assets/gift1.PNG";
import gift2 from "./assets/gift2.PNG";
import gift3 from "./assets/gift3.PNG";
import confetti from "./assets/confetti.jpg";


function App() {
    console.log('app');

    return <Main/>
}

export default App;

export class Main extends React.Component{
  constructor(props){
    super(props);
    this.mode = "Light";
    this.changePage = this.changePage.bind(this);
    this.darkMode = this.darkMode.bind(this);
      this.state = {page:'home', pageContent:(
        <div className="home-page">
            {/*<LogoHeader/>*/}
        {/*<img src={gift1} alt="bow"/>*/}
        {/*<img src={gift2} alt="bow"/>*/}
        {/*<img src={gift3} alt="bow"/>*/}
        <img className="img-background" src={confetti} alt="confetti"/>
        <div><p className="main-heading">Gift Organized</p><div className="sub-heading"><p >Keep all those loose documents together</p>
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
