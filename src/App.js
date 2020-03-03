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
      activityLists: {"Sarah Jones":["Tesla Model X","IPhone 11","ITunes Gift Card","Smart LED Bulbs - Alexa connectable","Fully Automatic Cat Feeder","Roomba","good smelling candles","Elegent couch cushions","Apple wireless charger","Blackout Curtains for a standard sized window"],
          "Mike Jones":["Red Scarf","Cuff Links","20oz Hip Flask","Small Oak Barrel","Top Hat", "Television", "Teddy bear"],
            "Mo Jones": ["Christmas tree", "Christmas lights", "T-shirts", "Yoga ball", "Gym pass", "Candy", "In-n-out", "Gift cards"]}
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
        console.log("dark");
      require('./DarkApp.css');
    }
    else {
        console.log("light");
      require('./LightMode.css');
    }
    return (
      <div>{this.state.pageContent}</div>
    )

  }
}
