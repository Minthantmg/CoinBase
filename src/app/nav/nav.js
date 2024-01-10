import React from 'react';
import Image from "next/image";
import github from '../../../public/github.svg'
import linkedin from '../../../public/linkedin.svg'

const Nav = () => {
    return (
        <div className="flex justify-around items-center mt-4 pb-4">
            <div>
               <div className="font-mono text-3xl font-bold">
                   COINBASE
               </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="mr-6 font-bold">
                    Home
                </div>
                <div className="mr-6 font-bold">
                    Market
                </div>
                <div className="mr-6 font-bold">
                    Choose Us
                </div>
                <div className="font-bold">
                    Join
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <Image src={linkedin} alt="" className="w-7 h-7"/>
                </div>
                <div>
                    <Image src={github} alt="" className="w-7 h-7 ml-4"/>
                </div>
            </div>
        </div>
    );
};

export default Nav;