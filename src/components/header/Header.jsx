import React, { useState } from 'react'
import style from './Header.module.scss'

const Header = ({showSide,setShowSide}) => {
    const [darkTheme,setDarkTheme]=useState(false)
    const [showtheme,setshowtheme]=useState(false)
    const handeltheme = (flag)=>{
        if(flag ==2){
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#fff'
            return
        }
        document.body.style.backgroundColor = ''
        document.body.style.color = ''
    }
    return (
        <>
            <header  className={style.wrp}>
                <div className={style.container}>
                    <img className={style.imageLogo} src={require('../../asset/images/logo.png')}/>
                    <div className={style.actionContainer}>
                        <p className={style.theme_text}>Theme</p>
                        <img className={style.actionImage} onClick={()=>setshowtheme(state=>!state)} src={require('../../asset/images/settingIcon.png')}/>
                        {/* <img className={style.actionImage} src={require('../../asset/images/x.png')}/> */}
                        <div className={style.collaps_icon}>
                            <div onClick={()=>{setShowSide(state=>!state)}} className={!showSide ? style.menu_icon : style.show+' '+style.menu_icon}>
                                <span className={style.bar1}></span>
                                <span className={style.bar2}></span>
                                <span className={style.bar2_1}></span>
                                <span className={style.bar3}></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div 
                    className={showtheme ? style.themeContainer+' '+style.showTheme : style.themeContainer}
                >
                   <img onClick={()=>handeltheme(1)} src={require('../../asset/images/sun.png')}/> 
                   <img onClick={()=>handeltheme(2)}  src={require('../../asset/images/moon.png')}/> 
                </div>
            </header>

        </>
    )
}

export default Header