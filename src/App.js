import React from 'react';
import './App.css';
import { Screen } from './Screen.js';
import Button from "react-bootstrap/Button";
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
            <div className="main-heading"><p>GiftEx</p>
                <div className="sub-heading"><p >You focus on the gift, and we'll take care of the exchange</p>
                    <div className="btns-login">
                        <Button className="btn-login" onClick={this.changePage}>LOG IN</Button>or
                        <Button className="btn-login" onClick={this.darkMode}>LOG IN in Dark Mode</Button>
                    </div>
                </div>
            </div>
            <img className="img-background" src={confetti} alt="confetti"/>
        </div>),
      members:['Sarah Jones', 'Mike Jones', 'Mo Jones'],
        groupName:"Jones Family",
      activityLists: {"Sarah Jones":["Tesla Model X","IPhone 11","ITunes Gift Card","Roomba","Apple wireless charger"],"Mike Jones":["Red Scarf","Cuff Links","20oz Hip Flask","Small Oak Barrel","Top Hat"]}
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
