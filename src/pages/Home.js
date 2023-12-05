// import { Fragment } from 'react';

import './Home.css';
import Lottie from 'react-lottie';
import animationData from '../lottie/coderAnime.json'

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        // rendererSettings: {
        //     preserveAspectRatio
        // }
    }
    return(
        <div>
            <div className='home'>
                <div className='navBar'>
                    <div className='logo'>Kamal</div>
                    <div className='nav_btns'>
                        <a href='/'>Home</a>
                        <a href='/'>Skills</a>
                        <a href='/'>Contact</a>
                    </div>
                </div>
                <header className='hero'>
                    <div className='hero_image'>
                        <Lottie 
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />
                    </div>
                    <div className='hero_text'>
                        <h1></h1>
                        <p></p>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Home;
