import React from 'react';
import bitcoin from '../../../public/crypto.svg'
import ethereum from '../../../public/ethereum.svg'
import Image from "next/image";
import styles from '../heroSection/hero.module.css';
const Join = () => {
    return (
        <div className="w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex">
                    <div className={`hidden sm:block ${styles.floatingImage}`}>
                        <Image src={bitcoin} alt="" className="w-28 h-28 mr-10"/>
                    </div>
                    <div className="sm:text-8xl text-5xl text-center font-bold">
                        <div>
                            JOIN US VIA
                        </div>
                        <div>
                            DISCORD
                        </div>
                    </div>
                    <div className={`hidden sm:block ${styles.floatingImage}`}>
                        <Image src={ethereum} alt="" className="w-28 h-28 ml-10"/>
                    </div>
                </div>
                <div className="mt-6 sm:text-3xl text-xl text-center font-sans">
                    Invest and manage all your crypto at one place.
                </div>
                <div className="sm:mt-20 mt-16 bg-purple-600 px-10 py-6 rounded-full text-white font-bold text-xl cursor-pointer">
                    <button>Join via Discord</button>
                </div>
            </div>
        </div>
    );
};

export default Join;