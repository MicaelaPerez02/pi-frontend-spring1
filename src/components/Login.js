import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login-Register.css";
import HeaderLogin from "./Header-Login";
import "../styles/Header.css";
import Footer from "./Footer";

function Login() {
    return (
        <>
       <HeaderLogin/>
        <div className="login">
        
            <form className="form_container">
                <h1 className="title">Iniciar sesión</h1>
                <form className="input_container">
                    <h5 className="text">Correo electronico</h5>
                    <input type="email" name="email" placeholder="Email" />
                    <h5 className="text">Contraseña</h5>
                    <input type="password" name="password" placeholder="Password" />
                </form>
                <button className="btn_singIn">Ingresar</button>
               <hr/>
                <p className="text_register">
                    ¿Aún no tenes cuenta?{" "}
                    <Link to="/register" className="btn_register_link">
                        Registrate
                    </Link>
                </p>
            </form>
        </div>
        <Footer/>
        </>
    );
}

export default Login;
