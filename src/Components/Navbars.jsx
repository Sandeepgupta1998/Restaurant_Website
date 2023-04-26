import React ,{useRef} from 'react'
import CardData from '../Data.jsx/CardData'
CardData

const Navbars = () => {

    const  searchRef=useRef()
    const cartRef = useRef()
    const navbarRef =useRef()
    const searchHandler=()=>{
        searchRef.current.classList.toggle("active")
        cartRef.current.classList.remove("active")
        navbarRef.current.classList.remove("active")

    }

    // Window.addEventListerner("resize" ,()=>{
    //     if(navbarRef.current.classList.contains('active')){
    //         navbarRef.current.classList.toggle('active')

    //     }
    // })
    // body.addEventListener('click',()=>{
    //     cartRef.current.classList.remove("active")
    //     searchRef.current.classList.remove("active")
    //     navbarRef.current.classList.remove("active")

    // })
    const cartHandler=()=>{
        cartRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        navbarRef.current.classList.remove("active")

    }
    const navbarHandler=()=>{
        navbarRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        cartRef.current.classList.remove("active")

    }


  return (
    <>
    <header className='header'>
        <a href="" className='logo'>
            <img src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg?t=st=1682332744~exp=1682333344~hmac=7832fe940f0ab9639bd5105601d6eed697e02afe47ab8525f2bde93c1b75ba3a" alt="" />
        </a>
        <nav className='navbar'>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
           
        </nav>
        <div className="navbar-container " ref={navbarRef}>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </div>
        <div className='icons'>
            <div className="fas fa-search" onClick={searchHandler}></div>
            <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
            <div className="fas fa-bars" id='menu-btn' onClick={navbarHandler} ></div>
        </div>

        <div className='search-form ' ref={searchRef} >
            <input id='search-box' type="text" placeholder='search here...' />
            <label htmlFor="search-box" className='fas fa-search'></label>
        </div>
        <div className='cart-items-container' ref={cartRef}>
            {
                CardData.map((item ,index)=>{
                    return(
                        <>
                        <div className="cart-item" key={index}>
                            <span className="fas fa-times"></span>
                            {item.image1}
                            <div className='content'>
                                <h3>cart item o1</h3>
                            </div>
                            <div className="price">$9.99</div>

                        </div>
                        </>
                    )
                })
            }
            <a href="#" className='btn'>checkout now</a>

        </div>


    </header>
    </>
  )
}

export default Navbars
