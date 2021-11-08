// custom tools

import LabPreview from "../components/preview/LabPreview";
// styles
import "./../styles/artist.css";
import "./../styles/comment.css";
import "./../styles/star.css";



export default function Artists() {

  return (
    <>
      <h1 className="title diy">D.I.Y (Artist)</h1>
      <p>
        Use the image below to code the {`<Artist />`} component.
        <br />
        This component import child components: {`<Stars />`}, {`<Comments />`}{" "}
        and {`<Discography />`}
      </p>

      <h1 className="title diy">D.I.Y (Stars)</h1>
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
      </p>

      <LabPreview name="artist"/>

     
    </>
  );
}
