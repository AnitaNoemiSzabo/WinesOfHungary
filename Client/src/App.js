import React, { Component } from 'react'
import WinePage from "./components/WinePage";
import RegionPage from "./components/RegionPage";
import './App.css'

export default class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      RegionPage: true,
      winelist: [],   
      regionlist: []
    };
  }


  changeUser(isRegion) {
    this.setState({ RegionPage: isRegion });
  }
    

  render() {
    return (
      <div>
        <h1>Wine Time</h1>
         <button onClick ={() => this.changeUser(true)} className={this.state.RegionPage ?
         "button-clicked" : "button-unclicked"}>Regions</button>
         <button onClick ={() => this.changeUser(false)} className={!this.state.RegionPage ?
         "button-clicked" : "button-unclicked"}>Wines</button>

         {this.state.RegionPage ? <RegionPage/> : <WinePage/>}
      </div>    
    );
  }
}

