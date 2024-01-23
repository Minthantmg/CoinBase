import React from 'react';
import Image from "next/image";
import bitcoin from '../../../public/crypto.svg'
import ethereum from '../../../public/ethereum.svg'
import styles from './hero.module.css';

const Hero = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex">
                        <div className={`mt-20 hidden xl:block ${styles.floatingImage}`}>
                            <Image src={bitcoin} alt="" className="w-36 h-36"/>
                        </div>
                        <div className="sm:text-[130px] text-6xl mt-12 space-x-6 font-mono font-bold leading-tight text-center">
                            TRACK AND TRADE
                        </div>
                        <div className={`mt-20 hidden xl:block ${styles.floatingImage}`}>
                            <Image src={ethereum} alt="" className="w-36 h-36"/>
                        </div>
                    </div>
                    <div>
                        <div
                            className="sm:text-[130px] text-6xl space-x-6 font-mono font-bold leading-tight text-center bg-gradient-to-r from-blue-700 to-purple-900 bg-clip-text text-transparent">CRYPTO
                            CURRENCIES
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center items-center mt-4 pb-32 sm:ml-20 sm:mr-20">
                        <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                            <div>
                                <Image src={bitcoin} alt="" className="w-52 h-52"/>
                            </div>
                            <div className="text-center text-xl font-bold">
                                Bitcoin <span className="text-green-500 ml-2">0.62%</span>
                            </div>
                            <div className="text-center text-xl font-bold">
                                $ 42,941.00
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                            <div>
                                <Image src={bitcoin} alt="" className="w-52 h-52"/>
                            </div>
                            <div className="text-center text-xl font-bold">
                                Bitcoin <span className="text-green-500 ml-2">0.62%</span>
                            </div>
                            <div className="text-center text-xl font-bold">
                                $ 42,941.00
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                            <div>
                                <Image src={bitcoin} alt="" className="w-52 h-52"/>
                            </div>
                            <div className="text-center text-xl font-bold">
                                Bitcoin <span className="text-green-500 ml-2">0.62%</span>
                            </div>
                            <div className="text-center text-xl font-bold">
                                $ 42,941.00
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                            <div>
                                <Image src={bitcoin} alt="" className="w-52 h-52"/>
                            </div>
                            <div className="text-center text-xl font-bold">
                                Bitcoin <span className="text-green-500 ml-2">0.62%</span>
                            </div>
                            <div className="text-center text-xl font-bold">
                                $ 42,941.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;