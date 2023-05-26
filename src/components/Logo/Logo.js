import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="center ma4 mt0">
            <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} glareEnable={true} scale={1.3} className="Tilt br2 shadow-2" options={{ max : 25}} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop: '20px'}} alt="logo" src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;