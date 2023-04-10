import React from 'react'
import style from './navbar.module.scss'
import { navdata } from '../../constants/constants'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul className={style.container}>
                {/* <li><img src={}/> Prospect </li>
                <li>Company</li>
                <li>Find Similar</li> */}
                {navdata.map((elm,key)=>
                    <li  key={key}>
                        <NavLink 
                            to={elm.path} 
                            className={({isActive})=>!isActive ? style.navLink :`${style.navLink} ${style.active}` }
                            >
                            <img src={elm.src}/> {elm.title} 
                        </NavLink> 
                    </li>
                )

                }
            </ul>
        </nav>
    )
}

export default Navbar