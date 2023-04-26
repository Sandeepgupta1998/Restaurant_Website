import React from 'react'
import ProductData from '../Data.jsx/ProductData'

const Products = () => {
  return (
    <>
    <section className="products" id="products">
        <h1 className='heading'>
            our <span>product</span>
        </h1>

        <div className="box-container">
            {
                ProductData.map((item ,index)=>{
                    return(
                        <>
                        <div className="box" key={index}>
                            <div className="icons">
                                <a href="" className="fas fa-shopping-cart"></a>
                                <a href="" className="fas fa-heart"></a>
                                <a href="" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="content"><h3>fresh coffee</h3>
                            <div className="stars">

                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star-half-alt'></i>
                                
                                </div>
                                <div className="price">
                                    {item.price}
                                </div>
                                
                                </div>
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

export default Products
