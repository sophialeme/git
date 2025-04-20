import React from 'react'
import './Header.css'

function Header(){
    return (
        <>
           <header className="header">
             <div className="img">
                <img className="logo" src="https://img.icons8.com/?size=100&id=DMouakoWuTB6&format=png&color=000000"/>
             </div>
             <div>
                 <ul className="ul">
                    <li>Luz & Sombra</li>
                    <li>Fotografias</li>
                 </ul>
              </div>
           </header>
        </>
    )
}
export default Header