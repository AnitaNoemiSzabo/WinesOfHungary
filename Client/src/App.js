import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wine_name: "",   
      wine_region: "",
      wine_category: "",
      winery: "",
      grape: "",
      price: "",
      winelist: []    //JUST AN ARRAY FOR THE WINELIST. THE OTHER NO NEED
    };
  }


 
    componentDidMount() {
      this.getWinelist();
    }
  
    getWinelist= () => {
      fetch(`/winelist`)
        .then(response => response.json())
        .then(response => {
          this.setState({ winelist: response });
        });
    };
  



    render() {

      return (
        <div className="App">
          <h1>Wine List</h1>
          <div>
            <h3>List of Wines</h3>
            <ul>
            {this.state.winelist.map((winelist,id) => {
              return (

              
              <li>
                {winelist.wine_name}


              </li>
            );
          }
            )};

            </ul>
            {/* <ul>
              {this.state.winelist.map((winelist,id) => {
                  <li key={id}>
                <span onClick={() => this.getWinelist(winelist.id)}> 
                  {winelist.wine_name} {winelist.wine_region} {winelist.wine_category} 
                  {winelist.winery} {winelist.grape} {winelist.price} 
                </span> 
              </li>      
               }
              )}
            </ul>          */}
          </div>
        </div>
      );
    }
  
}
