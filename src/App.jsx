import { useEffect } from 'react'
import './App.css'
import Header from './components/header'
import { hiddenMenu } from './logic/mobile-menu'
import { darkTheme, lightTheme } from './logic/changeTheme'

export default function App() {

  useEffect(() => {
    const sun = document.getElementById('sun')
    const sun2 = document.getElementById('sun2')
    sun.className = 'bx bx-sun theme-selected'
    sun2.className = 'bx bx-sun theme-selected'
  }, [])

  return (
    <div className='container'>
      <Header />
      <main>
        <section className='homepage'>
          <p id='text'>😎  SIMPLE WAY TO COMMUNICATE</p>
          <h1 id='h1'>Actions for Accessibility in Design</h1>
          <h2>The fasted way to build and deploy website with reusable components.</h2>
          <div className='btn'>
            <button className='btn-get-started'>GET STARTED</button>
            <button className='btn-get-demo'>Get live demo</button>
          </div>
          <div className='checks'>
            <div>
              <span><i className='bx bxs-check-circle'></i></span>
              <p>No credit card required</p>
            </div>
            <div>
              <span><i className='bx bxs-check-circle'></i></span>
              <p>No software install</p>
            </div>
          </div>
        </section>
        <img src="/hero-image-simple-homepage.png" alt="hero image simple homepage" className='hero-image' />
      </main>
      <div id='menu'>
        <div className='close-menu'>
          <button onClick={() => hiddenMenu()}>
            <i id='close' className='bx bx-x' ></i>
          </button>
        </div>
        <nav className='mobile-navbar'>
          <ul>
            <li><a href="#" id='selected2'>About Us</a></li>
            <li><a href="#" id='no-selected'>Products</a></li>
            <li><a href="#" id='no-selected'>Resource</a></li>
            <li><a href="#" id='no-selected'>Contact</a></li>
            <li id='mobile-theme'>
              <button onClick={() => darkTheme()}>
                <i id="moon" className="bx bxs-moon" ></i>
              </button>
              <button onClick={() => lightTheme()}>
                <i id="sun" className="bx bx-sun" ></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
