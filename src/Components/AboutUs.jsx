import React from 'react'

const AboutUs = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>about</span>us
        </h1>
        <div className="row">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFib3V0JTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="content">
                <h3>what make our food special</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita minus consequatur laboriosam ipsa placeat voluptate porro tempore illum autem quaerat sapiente iste. cumque consequuntur saepe praesentium eos voluptatem. Repellat.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita minus consequatur laboriosam ipsa placeat .</p>

                <a href="" className='btn'>learn more</a>
            </div>
        </div>

    </section>
    </>
  )
}

export default AboutUs
