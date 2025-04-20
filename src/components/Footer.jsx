import React from 'react'
import './Footer.css'

function Footer(){
    return (
        <>
           <footer className="footer">
             <div className="img">
                 <img className="logo" src="https://img.icons8.com/?size=100&id=DMouakoWuTB6&format=png&color=000000"/>
             </div>
             <div className="sociais2">
                <div>
                  <ul className="ul2">
                     <li>Nos siga nas redes sociais</li>
                  </ul>
             </div>
             <div className="sociais">
                 <div className="img">
                     <img className="logo" src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF"/>
             </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"/>
        </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"/>
        </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=aL0F8ToUoPjC&format=png&color=FFFFFF"/>
                     </div>
                   </div>
                 </div>
                 <div>
                     <ul className="ul2">
                         <li> 872 Morada Feliz - Cidade das Flores</li>
                         <li>MG / 39567 - 123</li>
                     </ul>
                 </div>
            </footer>
        </>
    )
}
export default Footer