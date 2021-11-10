import axios from "axios";
import React, { Component } from "react";

export default class FormUpdate extends Component {
  state = {
    _id: null,
    name: "mumu",
    style: "",
    rates: 0,
    description: "",
    isBand: "",
    date: "", //ne pas oublier que c'est dans rates avec author
    author: "", //ne pas oublier que c'est dans rates avec date
    picture: React.createRef(),
  };

  componentDidMount() {
    this.fetchUpdate();
  }

  //   componentDidUpdate() {
  //     // console.log(this.props.id !== this.state._id);
  //     if (this.props.id !== this.state._id) this.fetchCat();
  //   }

  fetchUpdate = () => {
    console.log("this.props.match.params");

    console.log(this.props.match.params);
    axios
      .get("http://localhost:5000/api/artists/" + this.props.match.params.id)
      .then((res) => {
        const { name, _id, rates, isBand, style } = res.data;
        this.setState({
          _id,
          name,
          rates,
          isBand,
          style,
        });
        console.log("this.state");
        console.log(this.state);
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const {name,description} = this.state;
    const file = this.state.picture.current.files[0];

    const uploadData = new FormData();

    uploadData.append("name", name); // create a key [name] on the formDate
    uploadData.append("description", description);  // create a key [color] on the formDate
    uploadData.append("picture", file);
    console.log(uploadData);
    try {
       await axios.patch(
        `http://localhost:5000/api/artists/` + this.props.match.params.id,
        uploadData
      );
      // this.setState({...res.data});
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
   
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log("ca change ? : ", this.state.name);
    return this.state.isLoading ? (
      <p>...loading</p>
    ) : (
      <form>
        <h1>Update an artist</h1>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          name="rates"
          type="number"
          placeholder="rates"
          value={this.state.rates}
          onChange={this.handleChange}
        />

        <input ref={this.state.picture} name="picture" type="file" />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
