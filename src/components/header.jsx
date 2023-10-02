import { lightTheme, darkTheme } from '../logic/changeTheme'
import { showMenu } from '../logic/mobile-menu'

export default function Header() {

    return (
        <header>
            <div className="logo">
                <img src="/alarado-icon-homepage.svg" alt="Alarado homepage logo" />
            </div>
            <nav>
                <ul className="navbar">
                    <li>
                        <a href="#" id='selected'>About us</a>
                    </li>
                    <li>
                        <a href="#" id='no-selected'>Product</a>
                    </li>
                    <li>
                        <a href="#" id='no-selected'>Resource</a>
                    </li>
                    <li>
                        <a href="#" id='no-selected'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="theme">
                <button onClick={() => darkTheme()}>
                    <i id="moon2" className="bx bxs-moon" ></i>
                </button>
                <button onClick={() => lightTheme()}>
                    <i id="sun2" className="bx bx-sun" ></i>
                </button>
            </div>
            <div className='menu-mobile'>
                <button onClick={() => showMenu()}>
                    <i className='bx bx-menu'></i>
                </button>
            </div>
        </header>
    )
}
