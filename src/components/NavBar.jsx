import { useState } from 'react'
import  styles from './NavBar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false)
    };

    return (
        <div className="App">
            <header className="App-header">
                <nav className={`${styles.navbar}`}>
                    <a href='/' className={`${styles.logo}`}>Dev. </a>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <Link to='/' className={`${styles.navLink}`}>Home</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to='/outfit-recommender' className={`${styles.navLink}`}>Recommender</Link>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
};
export default Navbar;
