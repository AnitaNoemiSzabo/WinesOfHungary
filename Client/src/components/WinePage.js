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
  

//   getWinelistByRegion= (id) => {
//     fetch(`/winelist/regionlist/${id}`)
//       .then(response => response.json())
//       .then(response => {
//         this.setState({ winelist: response });
//       });
//   };
 

  getWinelistByRegion= (id) => {
      const data = {regionlist: id};
    fetch(`/winelist/regionlist/${id}`)
      .then(response => response.json())
      .then(response=> {
        this.props.filterWinelist(response);
      });
  };

  handleDropdown(e) {
      this.filterWinelist(e.target.value);
  }

    filterWinelist (filteredWines) {
        this.setState({
            winelist: filteredWines
        });
    }

  handleClick(e){
      this.setState({
      wineShow: !this.state.wineShow
    });           
  }
  

  render() {
    return (
      <div>
        <h2>Wine List</h2>
        <br/>
        <div>
            {/* <Filter filterWinelist={filteredWines => this.filterWinelist(filteredWines)}/>  */}
            <h6>Select your preferred region:</h6>
            <form className="winefilter">
                <select onChange={this.handleDropdown.bind(this)}>
                    <option name="region1">Balaton</option>
                    <option name="region2">Sopron</option>
                    <option name="region2">Tokaj – Hegyalja</option>
                    <option name="region2">Eger</option>
                    <option name="region2">Villány</option>
                    <option name="region2">Pannonhalma</option>
                    <option name="region2">Szekszárd</option>
                </select>
            </form>
        </div>
        <br/>
        <br/>
        <div>
          <ul>
            {this.state.winelist.map((winelist,id) => {

            return (
              <li key ={id}>
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

