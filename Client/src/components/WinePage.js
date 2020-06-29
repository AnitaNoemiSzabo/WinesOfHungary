import React, { Component } from 'react'
import './WinePage.css'

export default class WinePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wineShow: false,
          winelist: [],  
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
  
  getWinelistByRegion= (id) => {
    fetch(`/winelist/regionlist/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ winelist: response });
      });
  };


// DO I NEED?
  geFeaturedDescription= (id) => {
    const data = {winelist: id};
  fetch(`/winelist/${id}`)
    .then(response => response.json())
    .then(response=> {
      this.props.filterWinelist(response);
    });
};



  //  filterWinelist (filteredWines) {
  //     this.setState({
  //         winelist: filteredWines
  //     });
  // }

  handleClick(e){
      this.setState({
      wineShow: !this.state.wineShow
    });           
  }


//   getWinesByRegion= (id) => {
//     const data = {regionlist: regionlistdata};
//   fetch(`/winelist/regionlist/${id}`)   
//     .then(response => response.json())
//     .then(data => {
//       this.props.filterWinelist(data);
//     });
// };

  getWinesByRegion= id => {
  fetch(`/winelist/regionlist/${id}`)
    .then(res => res.json())
    .then(res => {
      this.setState({ winelist: res});
    });
};


  handleDropdown(e) {
      this.filterWinelist(e.target.value);
  }

 
  render() {
    return (
      <div>
        <h2>Wine List</h2>
          <br/>
          <br/>
          <div>
          <h6>Select your preferred region:</h6>

         </div>
           <form className="winefilter">
            <select onChange={this.handleDropdown.bind(this)}>
                <option name="balaton">Balaton</option>
                <option name="sopron">Sopron</option>
                <option name="tokajHegyalja">Tokaj – Hegyalja</option>
                <option name="eger">Eger</option>
                <option name="villány">Villány</option>
                <option name="pannonhalma">Pannonhalma</option>
                <option name="szekszárd">Szekszárd</option>
            </select>
        </form>     
        <br/>
        <br/>
        <div>
        <ul>
          {this.state.winelist.map((winelist,id) => {
          return (
            <li key ={winelist.id}>
            <span onClick={() => this.getWinelist(winelist.id)}>
            <div>
              <img className ="zoom" onClick={(e) => this.handleClick()} src={winelist.Image} width="150px" height = "180px" alt = {winelist.wine_name}/>
                <br/>
                <br/>
              <h4 onClick={(e) => this.handleClick()} >{winelist.wine_name} </h4>
                <br/>
                <br/>
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