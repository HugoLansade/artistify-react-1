import axios from "axios";
import React, { Component } from "react";
// custom tools
import APIHandler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";
import Artist from "./Artist";
import { Link } from 'react-router-dom';

export default class Artists extends Component {
state= {
  artists: [],
}
// fetchArtists = async () => {
  
//   try{
//     const res= await APIHandler.get("/artists");
//     console.log('hey youuu laaaaaaaa')
//     console.log(res) //on stocke dans res la promesse de ça
//     this.setState({artists: res})
//   }
//  catch (err) {
//    console.error(err)
//  }
// }


fetchArtists = () => {  
  // APIHandler.get("/api/artists")
  axios.get('http://localhost:5000/api/artists')
  .then(({ data }) => {
    console.log('***********', data)
    this.setState({
      artists: data,
    });
    console.log('hey youuu')

  })
  .catch((err) => {
    console.error(err);
  });
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
        {!artists ? (<p>Wesh il y a pas d'artistes! Mais c'est toi l'artiste! </p>) :
          (<>
          <ul>
          {artists.map((artist, index) => {
              return <li><Link to={"/artists/" + artist._id}>{artist.name} </Link></li> 

            })}
          </ul>
            

            <h1 className="title diy"> </h1>

            <LabPreview name="artists" />
          </>)
        }

        


      </React.Fragment>
    );
  }
}
