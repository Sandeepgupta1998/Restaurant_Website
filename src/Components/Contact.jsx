import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
        <h1 className='heading'>
            <span>Contact </span>  us
        </h1>

        <div className='row'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31567977.16284299!2d36.899261978418465!3d15.019724379987112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014890c45ee7%3A0xc85acca8473f2d03!2sMcdonald&#39;s!5e0!3m2!1sen!2sin!4v1682399246322!5m2!1sen!2sin" width="700" height="500"   loading="lazy" ></iframe>


        
           <form >
            <h3>get in touch</h3>
            <div className='inputBox'>
                <span className="fas fa-user"></span>
                <input type="text" placeholder='name' />
            </div>
            <div className='inputBox'>
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder='email' />
            </div>
            <div className='inputBox'>
                <span className="fas fa-phone"></span>
                <input type="number" placeholder='number' />
            </div>
            <input type="submit" value="contact now" className='btn' />
           </form>
        </div>
    </section>
    </>
  )
}

export default Contact
