import React,{createContext,useState,useEffect} from 'react';
import Axios from 'axios';

const TurnoContext = createContext();

export default function TurnoProvider({children}) {

    const [userList, setUserList]=useState([]);

    useEffect(() => {
        async function fetchMyAPI() { 
        let response = await Axios.get("http://localhost:3000/api/v1/inventario/usuario/") ;
        setUserList(response.data.lista);
        }
        fetchMyAPI();
       }, []);

    return (
        <TurnoContext.Provider
        value={{
            userList
        }}
      >
        {children}
      </TurnoContext.Provider>
    )
}

export  {TurnoContext, TurnoProvider}
