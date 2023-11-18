import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <section className="foter">
        <footer data-aos="fade-down" data-aos-delay="500">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-5 footer-top-data d-flex gap-30 align-items-center">
                <img src='./img/newsletter.png' alt="newsletter" />
                <h4 className="mb-0 text-white">Sign Up For Table</h4>
              </div>
              <div className="col-7">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-1"
                    placeholder="Your Email Adress"
                    aria-label="Your Email Adress"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-btn p-2" id="basic-addon2">
                    Enter
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
    
    <div className="row align-items-center">
      <div className="col-4">
        <h4 className='text-white mb-4'>Contact Us</h4>
        <div>
          <address className='text-white fs-6'>
            Http: 333 Near Peshawer, <br /> Kheshgi Nowshera <br/> PinCode: 24120            
          </address>
          <a href="tel: +923471936923" className='mt-4 text-white d-block mb-2'>03471936923</a>
          <a href="email: mixstudio@gmail.com" className='mt-4 text-white d-block mb-0'>Mixstudio@gmail.com</a>
          <div className="social-icons d-flex gap-30 align-items-center mt-4">
            <a className='text-white' href="#"><BsLinkedin className='fs-4' /></a>
            <a className='text-white' href="#"><BsInstagram className='fs-4' /></a>
            <a className='text-white' href="#"><BsGithub className='fs-4' /></a>
            <a className='text-white' href="#"><BsYoutube className='fs-4' /></a>
          </div>
        </div>
        </div>
      <div className="col-3">
        <h4 className='text-white mb-4'>Information</h4>
        <div className='footer-link d-flex flex-column'>
          <Link to='/' className='text-white py-2 mb-1'>Home</Link>
          <Link to='/about' className='text-white py-2 mb-1'>About</Link>
          <Link to='/blog' className='text-white py-2 mb-1'>Blogs</Link>
        
          <Link to='/team' className='text-white py-2 mb-1'>Team</Link>
          <Link to='/contact' className='text-white py-2 mb-1'>Contact</Link>
        </div>
        </div>   
      <div className="col-3">
        <h4 className='text-white mb-4'>Account</h4>
        <div className='footer-link d-flex flex-column'>
          <Link to='/tab-1' className='text-white py-2 mb-1'>Table-1</Link>
          <Link to='/tab-2' className='text-white py-2 mb-1'>Table-2</Link>
          <Link to='/tab-3' className='text-white py-2 mb-1'>Table-3</Link>
          <Link to='/tab-4' className='text-white py-2 mb-1'>Table-4</Link>
          <Link to='/tab-5' className='text-white py-2 mb-1'>Table-5</Link>
        </div>
        </div>   
      <div className="col-2">
        <h4 className='text-white mb-4'>Quick Link</h4>
        <div className='footer-link d-flex flex-column'>
          <Link to='/tab-6' className='text-white py-2 mb-1'>Table-6</Link>
          <Link to='/tab-7' className='text-white py-2 mb-1'>Table-7</Link>
          <Link to='/tab-8' className='text-white py-2 mb-1'>Table-8</Link>
          <Link to='/tab-9' className='text-white py-2 mb-1'>Table-9</Link>
          <Link className='text-white py-2 mb-1'>Thanks For Searching</Link>
        </div>
        </div>
        </div>
  
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
 