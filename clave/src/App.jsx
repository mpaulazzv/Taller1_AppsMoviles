import React from 'react';
import { useState } from 'react';
import './App.css';
import { GiPadlock } from "react-icons/gi";
import { GoInfo } from "react-icons/go";
import Logo from './assets/BanColombiaLogo.png';

let nums = [];
let num = 0;

for( let i = 0; nums.length != 10; i++){
  num = Math.floor(Math.random() * 10);
  if(!nums.includes(num)){
    nums.push(num);
  }
}


function App() {

  const [mostrar, setMostrar] = useState("button");
  const [contra, setContra] = useState("");

  const [conA, setConA] = useState(false);
  const [conB, setConB] = useState(true);
  const [conC, setConC] = useState(false);

  const [opac, setOpac] = useState("opac_B");

  function add( char ){
    if(contra.length < 4){
      setContra(contra.concat(char))
    }
  }

  function ingresar(){
    if(contra.length == 4){
      alert("Bienvenido")
    }else{
      alert("La contraseña debe ser de minimo 4 caracteres")
    }
  }

  function conActive( con ){
    if(con === "A"){
      setConA(true);
      setConB(false);
      setConC(false);
      setOpac("opac_A");
    }else if(con === "B"){
      setConA(false);
      setConB(true);
      setConC(false);
      setOpac("opac_B");
    }else{
      setConA(false);
      setConB(false);
      setConC(true);
      setOpac("opac_C");
    }
  }

  return (
    <div className="contenido">
      <div className="top">
        <a href=""> <img src={Logo} alt="BanColombia"  className='logo'/> </a>
        <p className='titulo_principal'>Sucursal Virtual Personas</p>
      </div>
      <div className="clave">
        <p className='titulo_sesion'>Inicio de sesión</p>
        <div className="claveContenido">
          <div className="credenciales">
            <p className='titulo_clave'> Clave </p>
            <div className="contenido_clave">
              <p className='subtitulo_clave'> Ingresa tu clave </p>
              <div className="caja_clave">
                <GiPadlock className='seguro'/>
                <input type="password" className='caja' disabled value={contra} />
              </div>
              <p className="comentario_clave">Ingresa mediante el teclado virtual la clave que usas en el cajero
                automatico.
              </p>
              <div className="botones_clave">
                <p className='cancelar' onClick={() => {setContra("")}}> Cancelar </p>
                <p className='ingresar' onClick={() => {ingresar()}}> Ingresar </p>
              </div>
            </div>
            <div className="bottom_clave">
              <a href=""> <GoInfo className='info_icon'/> </a>
              <p className='bottom_comentario'>Genera una clave personal</p>
            </div>
          </div>
          <div className="">
            <div className="consola" onMouseEnter={() => {setMostrar("password")}} onMouseLeave={() => {setMostrar("button")}}>
              {
                nums.map((item) =>{
                  return(
                    <input className={"numero " + opac} type={mostrar} value={item} readonly onClick={() => {add(item)}} />
                  )
                })
              }
              <input type='button' className="opc" value={"Borrar"} onClick={() => {setContra(contra.substring(0, contra.length - 1))}}/>
            </div>
            <div className="contraste">
                <p className='contraste_titulo'>Contraste</p>
                <div className="contraste_opciones">
                  <p className={conA ? "contraste_opc opac_A con_active" : "contraste_opc opac_A"} onClick={() => {conActive("A")}}> A </p>
                  <p className={conB ? "contraste_opc opac_B con_active" : "contraste_opc opac_B"} onClick={() => {conActive("B")}}> B </p>
                  <p className={conC ? "contraste_opc opac_C con_active" : "contraste_opc opac_C"} onClick={() => {conActive("C")}}> C </p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <p className='desc_info'>Productos y servicios de Banca, Fiducia, Banca de Inversión, Financiamiento, además del portafolio ofrecido por las entidades del exterior en Panamá, Estados Unidos y Puerto Rico.
        Carrera 48 # 26 - 85 Medellín – Colombia Bogotá +57 (601) 343 0000 Medellín +57 (604) 510 9000 Línea gratuita resto del país: 01 8000 9 12345 Línea ética 01 8000 524499
        </p>
        <p className="bottom">Copyrigth 2024 Bancolombia S.A</p>
      </div>
    </div>
  )
}

export default App
