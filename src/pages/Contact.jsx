import React, { useState } from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import style from './Contact.module.scss'
import { data, social } from '../constants/constants'
import Sidebar from '../components/sideBar/Sidebae'


const Contact = () => {
    const [showSide,setShowSide] =useState(false)
    return (
        <div className={style.container}>
            <Header setShowSide={setShowSide} showSide={showSide}/>
            <Sidebar showSide={showSide}/>
            <Navbar/>
            <section className={style.profile_details}>
                <div>
                    <img className={style.profile_pic} src={require('../asset/images/Avatar.png')}/>
                </div>
                <div className={style.social}>
                    <div >
                        {social.map((elm,key)=>
                            <img className={style.link} src={elm.src} key={key}/>
                        )}
                    </div>
                    <button className={style.save_btn}> <img src={require('../asset/images/socialicon/save.png')}/>Save Contact</button>
                </div>
            </section>
            <section>
                <h4 className={style.userName}>Jese Leos</h4>
                <p className={style.greyText}>CEO</p>
                <p className={style.discription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.....</p>
            </section>
            <section>
            {data.map((prop,key)=>
                <ul key={key}>
                    <li className={style.listItem}>
                        <div className={style.logo}>
                            <img src={prop.src} />
                        </div>
                        <div className={key >= 3 ? style.title :style.title+' '+ style.blue}>
                            {prop.title}
                        </div>
                        <div className={style.feature}>
                            {prop.feature}
                        </div>
                    </li>
                </ul>
            )}
            </section>
        </div>
    )
}

export default Contact