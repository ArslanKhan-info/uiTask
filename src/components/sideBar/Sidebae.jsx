import React from 'react'
import style from './Sidebae.module.scss'
const Sidebar = ({showSide}) => {
  return (
    <aside 
        className={showSide ?style.cont+' '+style.show :style.cont}
        >
        This is side bar ....no data to show 
        </aside>
  )
}

export default Sidebar