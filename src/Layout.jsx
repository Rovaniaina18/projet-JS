import React from 'react';
import {Link} from 'react-router-dom';
import IMAGE from './Assets/img';

function Layout({children}) {
  return (
    <body>
        <div className="sidebar">
            <div className="logo">
                <center>
                    <img src={IMAGE.imgAdmin} className='admin'/>
                </center>    
            </div>
            <h4> <center>Admin  Lyrous</center></h4>
            <ul className="menu">
                <div className="bord">

                </div>
                <li className='active'>
                    <Link to="/Dasbord">
                        <i className=''>
                        <img src={IMAGE.imgHome} className='bordd'  />
                        </i>
                        <span>Tableau de bord</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Etablissement"> 
                        <i className=''>
                        <img src={IMAGE.imgCept} className='bordd'  />
                        </i>
                        <span>Client</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Produit">
                        <i className=''>
                        <img src={IMAGE.imgCep} className='bordd'  />
                        </i>
                        <span>Produit</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Commande">
                        <i className=''>
                        <img src={IMAGE.imgComm} className='conng'  />
                        </i>
                        <span>Commande</span>
                    </Link>
                </li>
                <li className='logout'>
                    <Link to="/Login">
                        <i className=''>
                        <img src={IMAGE.imgLogin} className='bordd'  />
                        </i>
                        <span>Deconnecter</span>
                    </Link>
                </li>
            </ul>
        </div>    
        <div>{children}</div>
        
    </body>
  )
}

export default Layout