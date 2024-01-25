import React from 'react';
import Image from "next/image";
import bitcoin from '../../../public/crypto.svg'
import ethereum from '../../../public/ethereum.svg'
import styles from './hero.module.css';
import {useCoins} from "../../../hooks/useCoins";

const Hero = () => {
    const {useGetBitCoin} = useCoins()
    const {useGetEthereum} = useCoins()
    const {useGetTether} = useCoins()
    const {useGetBNB} = useCoins()
    const {data: btc, isLoading, isError, isSuccess: isSuccessBtc} = useGetBitCoin()
    const {data: eth, isSuccess: isSuccessEth} = useGetEthereum()
    const {data: te, isSuccess: isSuccessTe} = useGetTether()
    const {data: bnb, isSuccess: isSuccessBnb} = useGetBNB()
    return (
        <div className="bg-gradient-to-b from-indigo-900 to-black h-screen flex items-center justify-center text-white">
            {isSuccessBtc && isSuccessEth && isSuccessTe && isSuccessBnb && (
                <>
                    <div>
                        <div className="flex flex-col justify-center items-center sm:pt-10">
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
                        <div>
                            <div
                                className="flex flex-wrap justify-center items-center sm:mt-16 pb-32 sm:ml-20 sm:mr-20">
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={btc.image.large} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {btc.name}
                                        <div
                                            className={`ml-2 ${btc.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {btc.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {btc.market_data.current_price.usd.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={eth.image.large} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {eth.name}
                                        <div
                                            className={`ml-2 ${eth.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {eth.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {eth.market_data.current_price.usd.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={te.image.large} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {te.name}
                                        <div
                                            className={`ml-2 ${te.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {te.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {te.market_data.current_price.usd.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex flex-col items-center">
                                    <div>
                                        <img src={bnb.image.large} alt="" className="w-32 h-32"/>
                                    </div>
                                    <div className="flex text-center text-xl font-bold mt-4">
                                        {bnb.name}
                                        <div
                                            className={`ml-2 ${bnb.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {bnb.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">
                                        $ {bnb.market_data.current_price.usd.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;