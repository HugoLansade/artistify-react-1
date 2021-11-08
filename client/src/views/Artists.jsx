import axios from "axios";
import React, { Component } from "react";
// custom tools
import APIHandler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";

export default class Artists extends Component {
state= {
  artists: [],
}


fetchArtists = async () => {
  
  try{
    const res= await APIHandler.get("api/artists");
    console.log('hey youuu')
    console.log(res) //on stocke dans res la promesse de ça
    this.setState({artists: res})
  }
 catch (err) {
   console.error(err)
 }
}



      

componentDidMount() {
  console.log('hey')
  this.fetchArtists();
}

  render() {
    const { artists } = this.state;
    console.log('>>>>>>>>>>>>>', artists)
    return (
      
      <React.Fragment>

        <h1 className="title diy">artis</h1>

        <LabPreview name="artists"/>

      </React.Fragment>
    );
  }
}
