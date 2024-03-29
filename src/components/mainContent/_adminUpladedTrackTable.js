import React, {Component} from "react"
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         details: [
            {name: 'Song Name',  artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", amount:"$20", plays: "3.4k", region: "Adelaide, Astralia" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", amount:"$20", plays: "3.4k", region: "Adelaide, Astralia" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", amount:"$20", plays: "3.4k", region: "Adelaide, Astralia"},
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", amount:"$20", plays: "3.4k", region: "Adelaide, Astralia" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", amount:"$20", plays: "3.4k", region: "Adelaide, Astralia" }
            
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.details[0])
      return header.map((key, index) => {
         return <th className="tableTitle" key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.details.map((detail, index) => {
         const playTime=<span class="darkBtn">3:50</span>
         const { name, artist, uploaded, plays, amount, region } = detail 
         return (
            <tr className="otherInfo">
               <td ><span className="artistBold">{name} {playTime}</span></td>
             
               <td><span className="artistBold">{artist}</span></td>
               <td>{uploaded}</td>
               <td>{amount}</td>
               <td>{plays}</td>
               <td>{region}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <table className='infoTable'>
               <tbody>
                  <tr className="detailsTitle">{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;