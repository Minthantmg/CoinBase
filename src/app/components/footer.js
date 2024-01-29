import React from 'react';
import Image from "next/image";
import crypto from '../../../public/c1.png'
import crypto_two from '../../../public/c2.png'
import facebook from '../../../public/facebook.svg'
import twitter from '../../../public/twitterx.svg'
import discord from '../../../public/discord.svg'
import youtube from '../../../public/youtube.svg'

const Footer = () => {
    return (
        <div>
            <div className="bg-black flex justify-around">
                <div className="hidden sm:block">
                    <Image src={crypto} alt="" className="w-80 h-80 mr-20"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex mt-10 sm:mt-0">
                        <div>
                            <Image src={twitter} alt="" className="w-10 h-10 mr-6 ml-6 sm:ml-0 cursor-pointer"/>
                        </div>
                        <div>
                            <Image src={discord} alt="" className="w-10 h-10 mr-6 cursor-pointer"/>
                        </div>
                        <div>
                            <Image src={facebook} alt="" className="w-10 h-10 mr-6 cursor-pointer"/>
                        </div>
                        <div>
                            <Image src={youtube} alt="" className="w-10 h-10 mr-6 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex text-white text-sm sm:text-lg  mt-6 ml-8 sm:ml-0 mb-16 sm:mb-0">
                        <div className="cursor-pointer font-mono leading-tight hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
                            Privacy
                        </div>
                        <div className="ml-6 mr-6 cursor-pointer font-mono leading-tight hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
                            Terms of Use
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <Image src={crypto_two} alt="" className="w-80 h-80 ml-20"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;