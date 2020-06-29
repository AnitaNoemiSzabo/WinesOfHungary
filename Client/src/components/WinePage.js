import React, { Component } from 'react'
import './WinePage.css'

export default class WinePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // wineShow: false,
          winelist: [],  
          showWine: []

        };
      }

componentDidMount() {
    this.getWinelist();
  }

  getWinelist= () => {
    fetch(`/winelist`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ winelist: response });
      });
  };
  
  // getWinelistByRegion= (id) => {
  //   fetch(`/winelist/regionlist/${id}`)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ winelist: response });
  //     });
  // };


// DO I NEED?
  geFeaturedDescription= (id) => {
    const data = {winelist: id};
  fetch(`/winelist/${id}`)
    .then(response => response.json())
    .then(response=> {
      this.props.filterWinelist(response);
    });
};




  handleClick(e){
   // wineShow: !this.state.wineShow
      
   for (let i=0 ;i<this.state.winelist.length; i++){
    this.state.showWine[i] = false;
  }
      
    let wineShow = [...this.state.showWine];
      // wineShow.forEach(element => false);

      // showWine[...this.state,showWine]

      wineShow[e.target.name-1]=  true;
      console.log(e.target.name-1)
        this.setState({
        showWine: wineShow
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

//   getWinesByRegion= id => {
//   fetch(`/winelist/regionlist/${id}`)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({ winelist: res});
//     });
// };



filterWinelist (filteredWines) {
  this.setState({
      winelist: filteredWines
  });
}

//TO ISSUE THE QUERY
  handleDropdown(e) {
      //get the id of the regionn(e.target.name)
      //query to database to get the filtered list of wines pass the id as a parameter (e.target.name)
    //send the response of the query to this.filter.winelist OR INSTEAD MODIFY 

    //   fetch(`/winelist`)  TO CHANGE THE PARAMETER
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log(response);
    //       this.setState({ winelist: response });
    //     });


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
                <option name="balaton">Balaton</option>  //TO WRITE REGION ID!! (1,...)
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
            <li key ={winelist.ID}>
            {/* <span onClick={() => this.getWinelist(winelist.id)}> */}
            <div>
              <img className ="zoom" onClick={(e) => this.handleClick(e)} name={winelist.ID} src={winelist.Image} width="150px" height = "180px" alt = {winelist.wine_name}/>
                <br/>
                <br/>
              {/* <h4 onClick={(e) => this.handleClick()} >{winelist.wine_name} </h4> */}
                <br/>
                <br/>
            </div>
            {/* <div className={this.state.wineShow ? "wineShow" : "wineHidden"}> */}
            <div className={this.state.showWine[winelist.ID-1] ? "wineShow" : "wineHidden"}>
              <p>Wine region: {winelist.wine_region} </p>
              <p> Winery: {winelist.winery} </p>
              <p>Grape: {winelist.grape}</p>
              <p>Type: {winelist.wine_category}  </p>
              <p> Price: EUR {winelist.price}.00</p>
                <br/>
            </div>
            {/* </span> */}
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