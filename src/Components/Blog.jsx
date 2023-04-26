import React from 'react'
import BlogData from '../Data.jsx/BlogData'

const Blog = () => {
  return (
    <section className="blogs" id="blob">
        <h1 className='heading' key={'heading'}>
            our <span>blog</span>
        </h1>
        <div className="box-container" key={'box-container'}>
            {
                BlogData.map((item ,index)=>{

                    return(
                        <>
                        <div className="box" key={index}>
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className='content'>
                                <a href="#" className='title'>
                                    {item.title}
                                </a>
                                <span> by {item.admin} on {item.date}</span>

                                <p>{item.desc}</p>
                                <button className="btn">read more</button>
                            </div>
                        </div>

                        </>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Blog
