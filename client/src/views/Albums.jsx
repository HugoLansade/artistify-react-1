import React, { Component } from "react";
// custom tools
import axios from "axios";
import handler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/card.css";
import "../styles/icon-favorite.css";
import { Link } from 'react-router-dom';


export default class Albums extends Component {

  state = {
    albums:[],
  }

  fetchAlbums = () => {
    // APIHandler.get("/api/albums")
    axios.get('http://localhost:5000/api/albums')
      .then(({ data }) => {
        console.log('***********', data)
        this.setState({
          albums: data,
        });
        console.log('hey youuu')

      })
      .catch((err) => {
        console.error(err);
      });
  }
  

  componentDidMount() {
    console.log('hey')
    this.fetchAlbums();
  }


  render() {
    const { albums } = this.state;
    return (
      <React.Fragment>
      {
        !albums ? (<p>Wesh il y a pas d'albums! Mais c'est toi l'album! </p>) : (
          <ul>
            {albums.map((album,index)=> {
              return <li> <Link to={"/albums/"+ album._id} key={index}>{album.title}</Link></li>
            })}

          </ul>
        )
      }
        <h1 className="title diy">D.I.Y (Albums)</h1>
        <LabPreview name="albums" />
      </React.Fragment>
    );
  }
}
