// custom tools
import axios from "axios";

import LabPreview from "../components/preview/LabPreview";
// styles
import "./../styles/artist.css";
import "./../styles/comment.css";
import "./../styles/star.css";
import React, { Component } from "react";


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

        {/* <a href={} >Wikipedia page</a> */}

        {/* <h1 className="title diy">D.I.Y (Stars)</h1>
      <p>
        The Stars component allow the end-users to rate an artist/album.
        <br />
        The black stars represent the average rate for a given resource.
        <br />
        The yellow stars represent the logged in user rate.
        <br />
        Bonus: make it modular to rate labels/styles as well.
      </p>

      <hr />

      <h1 className="title diy">D.I.Y (Discography)</h1>
      <p>
        Code a Discography component displaying all the albums related to the
        current artist if any, <br />else display the appropriate message.
        <br />
      </p>
      <hr />

      <h1 className="title diy">D.I.Y (Comments)</h1>
      <p>
        Import a custom {`<Comments />`} allowing the end-users to post comments
        related to the current artist.
        <br />
      </p> */}

        <LabPreview name="artist" />
      </>) }
      </>
    );
  }
}
