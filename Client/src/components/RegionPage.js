import React, { Component } from 'react'
import './RegionPage.css'

export default class RegionPage extends Component {
constructor(props) {
    super(props);
    this.state = {
    regionShow: false,
    regionlist: []
    };
  }

// componentDidMount() {
//     this.getRegionlist();
//   }

  getRegionlist= () => {
    fetch(`winelist/regionlist`)
      .then(response => response.json())
      .then(response => {
        this.setState({ regionlist: response });
      });
  };


  handleClick(e){
    this.setState({
    regionShow: !this.state.regionShow
  });           
}

render() {
    return (
    <div>
        <h2>Region List</h2>
        <br/>
    <div>
        <ul>
        {this.state.regionlist.map((regionlist,id) => {
        
        return (
            <li key ={id}>
                <span onClick={() => this.getRegionlist(regionlist.id)}>
                    <div>
                        <img className ="zoom"  onClick={(e) => this.handleClick()} src={regionlist.region_image} width="250px" height = "200px" alt = {regionlist.region_description}/>
                        <br/>
                        <br/>
                        <h4 onClick={(e) => this.handleClick()} >{regionlist.wine_region} </h4>
                    </div>
                    <div className={this.state.regionshow ? "regionShow" : "regionHidden"}>
                        <p>{regionlist.region_description}</p>
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
    
