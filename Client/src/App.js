import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = { 
      winelist: [],
      showWine: [],
      showRegion: []
    };
  }

  componentDidMount() {
    this.getWinelist();
  }
  
  getWinelist= () => {
    fetch(`winelist/winelist-with-region`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ winelist: response });
      });
  };


  handleClick(e){
    for (let i=0 ;i < this.state.winelist.length; i++){
     this.state.showWine[i] = false;
   }
      let wineShow = [...this.state.showWine];
      wineShow[e.target.name-1]=  true;
         this.setState({
         showWine: wineShow
     });           
   }
 
     
render() {
  return (
    <div class="backgroundColor">
      <div class="header">
      <h1>Hungarian Wines</h1>
    </div>
      <article  className="regionContainer">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2018/01/UNESCO-sites-920x609.jpg" width="250px" height = "300px" alt = "Tokaj – Hegyalja"/>
            </div>
            <div class="flip-card-back">
              <h5>Tokaj – Hegyalja</h5>
              <p>Birthplace of Tokaji Aszú, this legendary sweet wine region in north-eastern Hungary is named after the town of Tokaj, its former commercial centre. Its a relatively small region of around 5,500 hectares of vineyards which encompasses 27 towns and villages. Its winemaking culture and traditions are honoured by its inclusion in the UNESCO World Heritage since 2002. </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i.pinimg.com/originals/c5/91/25/c59125a931d848f2f1028c4d0824a21e.jpg" width="250px" height = "300px" alt = "Eger"/>
            </div>
            <div class="flip-card-back">
              <h5>Eger</h5>
              <p>Eger is one of Hungary’s most renowned historical wine regions. It lies in the foothills of the Bükk mountains. Most of its 5,618 hectares of vineyards are located around 160 to 180 meters above sea level.  Eger is best known for this legendary wine, Egri Bikavér, which is otherwise known in the Anglo-Saxon world as Bull’s Blood. </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/ae/01.jpg" width="250px" height = "300px" alt = "Eger"/>
            </div>
            <div class="flip-card-back">
              <h5>Balaton</h5>
              <p>Balaton wine region consists of six regions spread around Lake Balaton. The wine production was started at the beginning of the 1st century by the Romans. The region is known for its specific white wines showing local particularities; its most widely grown variety is olaszrizling.  </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://www.aok.pte.hu/docs/felvi/image/villany.jpg" width="250px" height = "300px" alt = "Eger"/>
            </div>
            <div class="flip-card-back">
              <h5>Villány</h5>
              <p>Villány is the southernmost wine region in Hungary known for its sub-Mediterranean climate and it is one of Hungary's most popular red wine regions. It stretches around 25 kilometers across the south-facing slopes of the Villány Hills. Its highest hill is  444 meters above sea level. The region has 2,476 hectares of planted vineyards, and boasts important historic vineyards. </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i2.wp.com/www.hungarianwines.eu/wp-content/uploads/2017/01/IMG_8234_ps_nn.jpg?fit=1600%2C1067&ssl=1" width="250px" height = "300px" alt = "Eger"/>
            </div>
            <div class="flip-card-back">
              <h5>Sopron</h5>
              <p>Sopron is a wine region in the extreme northwest corner of Hungary. It focuses mainly on red wine production, with vineyards planted mostly with local star Kékfrankos the Bordeaux wine grapes Cabernet Sauvignon, Cabernet Franc and Merlot, and Burgundy's Pinot Noir. </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i2.wp.com/www.iwinetc.com/wp-content/uploads/2018/01/pannonhalma-wine-region.jpg?fit=768%2C0&ssl=1" width="250px" height = "300px" alt = "Eger"/>
            </div>
            <div class="flip-card-back">
              <h5>Pannonhalma</h5>
              <p>The Pannonhalma hills are the smallest wine- region in Hungary although it has the longest wine-making tradition. Grapevines have been grown on the eastern; and south-eastern slopes of Pannonhalma hills since Roman times. The registered vine-yards consist of 650 hectares cultivated by about 500 wine-growers. </p>
            </div>
          </div>
        </div>       
      </article>
      
      <div>
        <ul>
        {this.state.winelist.map((winelist,id) => {
      
      return (
        <li key ={winelist.ID}>
          <div class="flex-container">
            <div>
              <h4>{winelist.Wine} </h4>
              <br/>
              <img onClick={(e) => this.handleClick(e)} name={winelist.ID} src={winelist.Image} width="150px" height = "180px" alt = {winelist.Wine}/>
              <br/>
              <br/>
            </div>
            <div className={this.state.showWine[winelist.ID-1] ? "wineShow" : "wineHidden"}>
              <p><b>Wine region:</b> {winelist.Region} </p>
              <p><b> Winery:</b> {winelist.Winery} </p>
              <p><b>Grape:</b>{winelist.Grape}</p>
              <p><b>Type:</b> {winelist.Category}  </p>
              <p><b> Price:</b> EUR {winelist.Price}.00</p>
            </div>
          </div>
        </li>
         );}
        )}
        </ul>
      </div>
     </div>
    );
  }
} 
