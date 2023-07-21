import { useState, useEffect } from 'react'
import darkbanner from '../images/darkbanner.png'
import lightbanner from '../images/lightbanner.png'
import Button from 'react-bootstrap/Button'
import '../Home.css'

function Home({ darkMode }) {

    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(false);
        const timeout = setTimeout(() => setShowBanner(true), 50);
        return () => clearTimeout(timeout);
    }, [darkMode]);

    return (
        <>
            <div className="home-container">
                <div className='header'>
                    <div className='header-info'>
                        <img src={darkMode ? lightbanner : darkbanner}
                            alt="banner"
                            className={`banner-image ${showBanner ? 'fade-in' : ''}`}
                        />
                        <div className='content'>
                            <h2>Welcome!</h2>
                            <h3>My name is Halim, I'm a Full Stack Web Developer</h3>
                            <Button variant='dark' href="/projects">Check out my Portfolio</Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home