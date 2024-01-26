import React from 'react';
import {useCoins} from "../../../hooks/useCoins";
import bitcoin from '../../../public/crypto.png'
import Link from "next/link";
import {useRouter} from "next/navigation";

const Market = () => {
    const {useGetCoinList} = useCoins()
    const {data: coins, isLoading, isError, isSuccess} = useGetCoinList()
    const router = useRouter()

    const gotoAllCoinList = () =>{
        router.push('/coin_list')
    }

    return (
        <div className="bg-black text-white">
            <div className="font-bold text-3xl ml-28 sm:pt-16">
                Market Update
            </div>
            {isError && (
                <>
                    <div>
                        Loading...
                    </div>
                </>
            )}
            {isLoading && (
                <>
                    <div>
                        Loading...
                    </div>
                </>
            )}
            <div className="">
                <div
                    className="mt-16 flex justify-between p-4 rounded-t-lg bg-gradient-to-r from-blue-700 to-purple-900 ml-24 text-white mr-20">
                    <div className="flex items-start text-2xl font-bold w-1/4">
                        Coin
                    </div>
                    <div className="text-2xl font-bold text-end mr-2 w-1/4">
                        Price
                    </div>
                    <div className="text-2xl font-bold text-end w-1/4">
                        24h Change
                    </div>
                    <div className="text-2xl font-bold w-1/4 text-end">
                        Market Cap
                    </div>
                </div>
                {isSuccess && (
                    <>
                        {coins.map((coin, index) => ( // slice the first 10 coins
                            <div key={index} >
                                <Link legacyBehavior={true} href={`/detail/${coin.id}`}>
                                    <a>
                                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                                            <div className="flex w-1/4">
                                                <img src={coin.image} alt="" className="w-12 h-12"/>
                                                <div className="flex justify-center items-center ml-4">
                                                    {coin.name}
                                                </div>
                                            </div>
                                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                                $ {coin.current_price.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}
                                            </div>
                                            <div
                                                className={`mt-2 w-1/4 text-end ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </div>
                                            <div className="mt-2 w-1/4 text-end mr-2">
                                                $ {coin.market_cap.toLocaleString()}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                        <div className="flex justify-center items-center mt-6">
                            <button onClick={gotoAllCoinList} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold text-lg py-4 px-6 rounded-full cursor-pointer bg-gradient-to-r from-blue-800 to-purple-500 text-white">Explore more</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Market;