import React from 'react'
import MenuData from '../Data.jsx/MenuData'

const Menu = () => {
  return (
    <>
    <section className="menu" id="menu">
        <h1 className='heading'>
            our <span>menu</span>
        </h1>
        <div className="box-container">
            {
                MenuData.map((item ,index)=>{
                    return(
                        <>
                        <div className="box" key={index}>
                            <img src={item.image} alt="" />
                            <h3>{item.food}</h3>
                            <div className="price">{item.price}</div>
                            <a href="" className='btn'>add to cart</a>
                        </div>
                        </>
                    )
                })
            }

        </div>
    </section>
    </>
  )
}

export default Menu
