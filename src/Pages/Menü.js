import React from 'react'
import { MenuList } from '../Helper/MenüList'
import { Image } from '@mui/icons-material'
function Menü() {
  return (
    <div className='Menu'>
        <h1 className='MenuTittle'>Hamburgerlerimiz</h1>
    <div className='MenuList'>
        {
        MenüList.map((menuItem,key)=>{
            return
            <div className='MenuItem'>
                <div ><img src={ImageItem.image} ></img></div>,
                <div className=''>{menuItem.name}</div>
                <div className=''>{menuItem.price}TL </div>
            </div>
               
            
        })}</div>

    </div>
  )
}

export default Menü