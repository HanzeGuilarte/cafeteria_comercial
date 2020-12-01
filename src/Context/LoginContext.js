import React,{createContext,useState,useEffect} from 'react';
import Axios from 'axios';

const LoginContext = createContext();

export default function LoginProvider({children}) {
    const [ password, setPassword ] = React.useState('');
    const [ nombre, setUserName ] = React.useState('');
   
	const handleChange = (event) => {
		const value = event.target.value;
		if (event.target.name === 'password') setPassword(value);
		if (event.target.name === 'username') setUserName(value);
    };
    const login = async function() {
		let res = await Axios.post('http://localhost:3000/api/v1/inventario/usuario/login', {
			nombre: nombre,
			password: password
		});
		console.log(res);
	};
    
    return (
        <LoginContext.Provider
        value={{
            password,
            nombre,
            handleChange,
            login,
        }}
      >
        {children}
      </LoginContext.Provider>
    )
}

export  {LoginContext, LoginProvider}