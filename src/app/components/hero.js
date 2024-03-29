'use client'
import React, {useState} from 'react';
import Image from "next/image";
import bitcoin from '../../../public/crypto.svg'
import ethereum from '../../../public/ethereum.svg'
import arrow from '../../../public/arrow_down.svg'
import styles from '../heroSection/hero.module.css';
import {useCoins} from "../../../hooks/useCoins";
import Loading from "@/app/components/loading";
import Error from "@/app/components/error";

const Hero = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {useGetCoinList} = useCoins()
    const {data: coins, isLoading, isError, isSuccess} = useGetCoinList(currentPage)
    return (
        <div className="bg-gradient-to-b from-indigo-900 to-black h-full flex-center text-white">
            <>
                <div>
                    <div className="flex-column sm:pt-10">
                        <div className="flex">
                            <div className={`mt-20 hidden xl:block ${styles.floatingImage}`}>
                                <Image src={bitcoin} alt="" className="w-36 h-36"/>
                            </div>
                            <div
                                className="sm:text-[120px] text-6xl mt-12 space-x-6 font-mono font-bold leading-tight tracking-tight text-center">
                                TRACK AND TRADE
                            </div>
                            <div className={`mt-20 hidden xl:block ${styles.floatingImage}`}>
                                <Image src={ethereum} alt="" className="w-36 h-36"/>
                            </div>
                        </div>
                        <div>
                            <div
                                className="sm:text-[120px] sm:ml-8 sm:mr-8 text-6xl space-x-6 font-mono font-bold leading-tight tracking-tight text-center bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent">CRYPTO
                                CURRENCIES
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-24 sm:hidden">
                        <a href="#market">
                            <button
                                className="flex justify-center items-center btn-lg sm:btn-sm md:btn-md lg:btn-lg bg-purple-600 text-white font-bold text-lg cursor-pointer bg-gradient-to-r from-blue-800 to-purple-500 rounded-full">See
                                prices<span><Image src={arrow} alt="" className="ml-3"/></span></button>
                        </a>
                    </div>
                    {isLoading && <Loading/>}
                    {isError && (
                        <div className="sm:ml-10 sm:mr-10 sm:mt-0 mt-6 ml-4 mr-4">
                            <Error/>
                        </div>
                    )
                    }
                    {isSuccess && (
                        <div className="hidden sm:block">
                            <div
                                className="flex flex-wrap justify-center items-center sm:mt-16 pb-32 sm:ml-20 sm:mr-20">
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={coins[0].image} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {coins[0].name}
                                        <div
                                            className={`ml-2 ${coins[0].price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {coins[0].price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {coins[0].current_price.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={coins[1].image} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {coins[1].name}
                                        <div
                                            className={`ml-2 ${coins[1].price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {coins[1].price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {coins[1].current_price.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={coins[2].image} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {coins[2].name}
                                        <div
                                            className={`ml-2 ${coins[2].price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {coins[2].price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {coins[2].current_price.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={coins[3].image} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {coins[3].name}
                                        <div
                                            className={`ml-2 ${coins[3].price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {coins[3].price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {coins[3].current_price.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
        </div>
    );
};

export default Hero;