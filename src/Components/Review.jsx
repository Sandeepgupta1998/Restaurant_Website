import React from 'react'
import ReviewData from '../Data.jsx/Review'

const Review = () => {
  return (
    <>
    <section className='review'>
        <h1 className='heading'>customer's <span>
            review</span></h1>

        <div className="box-container">
            {
                ReviewData.map((item ,index)=>{
                    return(
                        <>
                        <div className="box" key={index}>
                            <img  src={item.review_icons} alt="" />
                            <p>{item.review_desc}</p>
                            <img className='user' src={item.review_profile} alt="" />
                            <h3>{item.review_name}</h3>
                            <div className="stars">
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
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

export default Review
