// custom tools
import axios from "axios";

import LabPreview from "../components/preview/LabPreview";
// styles
import "./../styles/artist.css";
import "./../styles/comment.css";
import "./../styles/star.css";
import React, { Component } from "react";
import Comments from "../components/Comments/Comments"


export default class Artists extends Component {
  state = {
    artist: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/artists/" + this.props.match.params.id
      );
      this.setState({
        artist: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {artist} = this.state
    return (
      <>
      {!artist ? (<p>Wesh y'a Rien gros</p>) :(<>
        <h1>{artist.name}</h1>
        <h1 className="title diy">{}</h1>
        <p>Description :  {artist.description}</p>
        <p>Style : {artist.style.name}</p>

        <br />
        <p>
          This component import child components: {`<Stars />`},{" "}
          {`<Comments />`} and {`<Discography />`}
        </p>

       

        
      </>) }
        <div>
          <Comments/>
        </div>
      
      </>
    );
  }
}
