import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPen, faEdit} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'



export default class TabAdmin extends Component {
  state = {
    artists: [],
  };

  

  fetchArtists = () => {
    // APIHandler.get("/api/artists")
    axios
      .get("http://localhost:5000/api/artists")
      .then(({ data }) => {
        console.log("***********", data);
        this.setState({
          artists: data,
        });
        console.log('mise a jour :',this.state.artists)
      })
      .catch((err) => {
        console.error(err);
      });
  };







  componentDidMount() {
    console.log("hey");
    this.fetchArtists();
  }

  handleUpdate = async (id) => {

  }

  handleDelete= async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/artists/${id}`);
      this.fetchArtists();
    } catch (err) {
      console.error(err);
    }
  };


  render() {
    const page = this.props.match.params.type;
    console.log(page === "albums");
    const { artists } = this.state;
    // console.log('artists', artists);
   


    if(artists){
        if (page === "artists") {
            return (
              <>
                <h1>{page}</h1>
      
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Style</th>
                      <th>Rate</th>
                      <th>Edit</th>
                      <th>Trash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artists.map((artist, index) => {
                      return (
                      <tr key={index}>
                        <td>{artist.name}</td>
                        <td>{artist.style.name}</td>
                        <td>{artist.rates}*</td>
                        {/* <td><FontAwesomeIcon className="is-clickable fa-lg" icon={faPen} onClick={() => this.handleUpdate(artist._id, "update")}/> </td> */}
                        <td><Link to={"/artist/update/" + artist._id}> <FontAwesomeIcon className="is-clickable fa-lg" icon={faPen}/></Link></td>
                        
                        <td><FontAwesomeIcon className="is-clickable fa-lg" icon={faTrash} onClick={() => this.handleDelete(artist._id)}/> </td> 
                      </tr>
                      )                 
                    })}
                  </tbody>
                </table>
              </>
            );
          } else if (page === "albums") {
            return <h1>{page}</h1>;
          } else if (page === "labels") {
            return <h1>{page}</h1>;
          } else if (page === "styles") {
            return <h1>{page}</h1>;
          } else {
            return <h1>ERROR : {page}</h1>;
          }
    } else {
        return (
            <>
                <img src="https://i1.sndcdn.com/avatars-000068398495-2zor9f-t500x500.jpg" alt="r"/> 
                <p>Cé mwa lartiste</p>
            </>
        )
    }
 
  }
}

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
