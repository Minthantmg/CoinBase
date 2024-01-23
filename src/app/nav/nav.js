'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import github from '../../../public/github.svg';
import linkedin from '../../../public/linkedin.svg';
import hamburger from '../../../public/hamburger.svg';
import close from '../../../public/close.svg';
import {useRouter} from 'next/navigation';
import styles from './nav.module.css';
import Hero from "@/app/heroSection/hero";
import Market from "@/app/market/market";
import Choose from "@/app/choose/choose";
import Join from "@/app/join/join";
import Footer from "@/app/footer/footer";

const Nav = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const gotoLinkedin = () => {
        router.push('https://www.linkedin.com/in/min-thant-2620411b3/');
    };

    const gotoGithub = () => {
        router.push('https://github.com/Minthantmg');
    };

    const handleMenuClick = (event) => {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {menuOpen ? (
                <div className={`popup-menu ${styles.slideIn}`}>
                    <div className="bg-white p-4 flex-col items-center justify-center">
                        <div className="mb-4 flex justify-end mr-2 mt-1">
                            <Image src={close} alt="" onClick={closeMobileMenu}/>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-60">
                            <a href="" className="mb-4 font-bold text-xl" onClick={closeMobileMenu}>
                                Home
                            </a>
                            <a href="" className="mb-4 font-bold text-xl" onClick={closeMobileMenu}>
                                Market
                            </a>
                            <a href="" className="mb-4 font-bold text-xl" onClick={closeMobileMenu}>
                                Choose Us
                            </a>
                            <a href="" className="mb-4 font-bold text-xl" onClick={closeMobileMenu}>
                                Join
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-around sm:justify-between items-center mt-8 pb-8">
                        <div>
                            <div className="font-mono text-3xl font-bold sm:ml-28">COINBASE</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="mr-10 font-bold text-xl hidden lg:block">
                                <a href="#hero">Home</a></div>
                            <div className="mr-10 font-bold text-xl hidden lg:block">
                                Market
                            </div>
                            <div className="mr-10 font-bold text-xl hidden lg:block"><a href="#choose">Choose Us</a>
                            </div>
                            <div className="font-bold hidden text-xl lg:block"><a href="#join">Join</a></div>
                        </div>
                        <div className="flex items-center justify-center sm:mr-28">
                            <div>
                                <Image src={linkedin} alt="" className="w-7 h-7 cursor-pointer" onClick={gotoLinkedin}/>
                            </div>
                            <div>
                                <Image src={github} alt="" className="w-7 h-7 ml-4 cursor-pointer"
                                       onClick={gotoGithub}/>
                            </div>
                            <div>
                                <Image
                                    src={hamburger}
                                    alt=""
                                    className="w-7 h-7 lg:hidden block ml-4"
                                    onClick={handleMenuClick}
                                />
                            </div>
                        </div>
                    </div>
                    <section id="hero">
                        <Hero/>
                    </section>
                    {/*<Market />*/}
                    <section id="choose">
                        <Choose/>
                    </section>
                    <section id="join">
                        <Join />
                    </section>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Nav;
