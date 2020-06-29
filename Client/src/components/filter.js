// import React, { Component } from 'react'
// import "./filter.css"


// export default class filter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     getWinesByRegion= (id) => {
//         const data = {regionlist: id};
//       fetch(`/winelist/regionlist/${id}`)
//         .then(response => response.json())
//         .then(data=> {
//           this.props.filterWinelist(data);
//         });
//     };


//     handleDropdown(e) {
//         this.filterWinelist(e.target.value);
//     }


//     renderFilteredPage() {
//         return (
//           <div>
//             <form className="winefilter">
//                 <select onChange={this.handleDropdown.bind(this)}>
//                     <option name="balaton">Balaton</option>
//                     <option name="sopron">Sopron</option>
//                     <option name="tokajHegyalja">Tokaj – Hegyalja</option>
//                     <option name="eger">Eger</option>
//                     <option name="villány">Villány</option>
//                     <option name="pannonhalma">Pannonhalma</option>
//                     <option name="zzekszárd">Szekszárd</option>
//                 </select>
//             </form>     
//           </div>
//         );
//     }
// }
