import React from 'react';
import Image from "next/image";
import bitcoin from '../../../public/crypto.svg'
import ethereum from '../../../public/ethereum.svg'
import styles from './hero.module.css';
const Hero = () => {
    return (
        <div>
            <div className="absolute flex justify-center items-center">
                <div className={`relative -mt-28 -mr-36 ml-24 ${styles.floatingImage}`}>
                    <Image src={bitcoin} alt=""/>
                </div>
                <div className="text-[110px] mt-12 space-x-6 font-mono font-bold leading-tight text-center">
                    TRACK AND TRADE <span className=" bg-gradient-to-r from-blue-700 to-purple-900 bg-clip-text text-transparent">CRYPTO CURRENCIES</span>
                </div>
                <div className={`relative -mt-28 -ml-36 mr-28 ${styles.floatingImage}`}>
                    <Image src={ethereum} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;