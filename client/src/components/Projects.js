import { useState, useEffect } from 'react';
import darkbackground from '../images/darkbackground.png'
import lightbackground from '../images/lightbackground.png'
import '../Projects.css'

function Projects({ darkMode }) {

    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(false);
        const timeout = setTimeout(() => setShowBanner(true), 50);
        return () => clearTimeout(timeout);
    }, [darkMode]);

    return (
        <>
            <div className="bg-container">
                <div className='bg-header'>
                    <div className='bg'>
                        <img src={darkMode ? lightbackground : darkbackground}
                            alt="background"
                            className={`bg-image ${showBanner ? 'fade-in' : ''}`}
                        />
                        <div className='content'>
                            <h2>projects here</h2>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Projects