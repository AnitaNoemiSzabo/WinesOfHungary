import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

 constructor(props) {
    super(props);
    this.state = {

      wineShow: false,
      // wine_name: "",   
      // wine_region: "winelist.wine_region",
      // wine_category: "",
      // winery: "",
      // grape: "",
      // price: "",
      // Image: "",
      winelist: []    //JUST AN ARRAY FOR THE WINELIST. THE OTHER NO NEED
    };
  }

    componentDidMount() {
      this.getRegionlist();
    }

  
  getWinelist= () => {
    fetch(`/winelist`)
      .then(response => response.json())
      .then(response => {
        this.setState({ winelist: response });
      });
  };
  
//TO CONNECT ONCLICK TO THIS FUNCTION
  getWinelistByRegion= (id) => {
    fetch(`/regionlist/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ winelist: response });
      });
  };
 

//name can be different
  handleClick(e){
    // e.preventdefault();
    this.setState({
      wineShow: !this.state.wineShow
    });           
  }
  

// renderFeturedItem(){
//   return this.props.winelist.map(winelist =>{
//     return (
//       <div className="detailedInfo" key = {winelist.wine_name} onClick={() =>{handleClick(winelist)}}>
//         <p>Wine region: {winelist.wine_region} </p>
//         <p> Winery: {winelist.winery} </p>
//         <p>Grape: {winelist.grape}</p>
//         <p>Type: {winelist.wine_category}  </p>
//         <p> Price: EUR {winelist.price}.00</p>
//       </div>
//           );
//         });
//       }


  render() {
    return (
      <div className="App">
        <h1>Wine List</h1>
        <div>
          <h3>List of Wines</h3>
          <br/>
          <ul>
            {this.state.winelist.map((winelist,id) => {
            return (
              <li key ={id}>
              <span onClick={() => this.getWinelist(winelist.id)}>
              <div>
                <img onClick={(e) => this.handleClick()} src={winelist.Image} width="150px" height = "100px" alt = {winelist.wine_name}/>
                <h4 onClick={(e) => this.handleClick()} >{winelist.wine_name} </h4>
              </div>
              <div className={this.state.wineShow ? "wineShow" : "wineHidden"}>
                <p>Wine region: {winelist.wine_region} </p>
                <p> Winery: {winelist.winery} </p>
                <p>Grape: {winelist.grape}</p>
                <p>Type: {winelist.wine_category}  </p>
                <p> Price: EUR {winelist.price}.00</p>
                <br/>
              </div>
              </span>
              </li>
              );
            }
          )}
          </ul>
        </div>
      </div>
    );
  }
}


