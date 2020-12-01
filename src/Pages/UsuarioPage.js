import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function UsuarioPage() {

const [userList, setUserList]=useState([]);

 const deleteUser = (id) => {
    Axios.delete(`http://localhost:3000/api/v1/inventario/usuario/${id}`)
};

useEffect(() => {
    async function fetchMyAPI() { 
    let response = await Axios.get("http://localhost:3000/api/v1/inventario/usuario/") ;
    setUserList(response.data.lista);
    }
    fetchMyAPI();
   }, []);

  

    return (
        <div>
        <h1>Users</h1>
      {userList.map((val,key) => {
        return <div key = {key}>
          <h1 onClick={() => deleteUser(val._id)}> {val.nombre}</h1> 
        </div>     
      })} 
        </div>
    )
}
