'use client'
import React, {useState} from 'react';
import {useCoins} from "../../../hooks/useCoins";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Pagination from "@/app/components/pagination";
import Loading from "@/app/components/loading";
import Error from "@/app/components/error";

const Market = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {useGetCoinList} = useCoins()
    const {data: coins, isLoading, isError, isSuccess} = useGetCoinList(currentPage)
    const router = useRouter()

    return (
        <div className="bg-black text-white">
            <div className="font-bold text-3xl sm:ml-28 sm:pt-16 ml-20 pt-16">
                Market Update
            </div>
            <div className="">
                <div
                    className="mt-16 flex justify-between sm:p-4 p-2 rounded-t-lg bg-gradient-to-r from-blue-700 to-purple-900 sm:ml-24 text-white sm:mr-20 ml-4 mr-4">
                    <div className="flex items-start sm:text-2xl font-bold sm:w-1/4 md:w-1/2 md:text-lg sm:ml-0 ml-4">
                        Coin
                    </div>
                    <div className="sm:text-2xl font-bold sm:w-1/4 w-1/3 text-end md:w-1/2 md:text-lg">
                        Price
                    </div>
                    <div className="sm:text-2xl font-bold sm:w-1/4 w-1/3 text-end md:w-1/2 md:text-lg">
                        24h Change
                    </div>
                    <div className="hidden sm:block sm:text-2xl font-bold sm:w-1/4 w-1/3 text-end md:w-1/2 md:text-lg">
                        Market Cap
                    </div>
                </div>
                {isError && (
                    <div className="sm:ml-24 sm:mr-24 sm:mt-6 ml-4 mr-4 mt-6">
                        <Error />
                    </div>
                )}
                {isLoading && <Loading />}
                {isSuccess && (
                    <>
                        {coins.map((coin, index) => ( // slice the first 10 coins
                            <div key={index} >
                                <Link legacyBehavior={true} href={`/detail/${coin.id}`}>
                                    <a>
                                        <div className="flex justify-between sm:mt-4 sm:pb-4 sm:text-2xl font-bold border-b-2 sm:ml-24 sm:mr-20 ml-4 mr-4 mt-4 mb-8">
                                            <div className="flex sm:w-1/4 pb-6 sm:pb-0 w-1/3 md:mt-2 sm:mt-0 mt-0">
                                                <img src={coin.image} alt="" className="w-14 h-14 hidden sm:flex sm:mt-2 mt-0"/>
                                                <div className="flex justify-center items-center ml-4">
                                                    {coin.name}
                                                </div>
                                            </div>
                                            <div className="text-end sm:text-2xl md:mt-6 sm:mt-0 font-bold mt-2 sm:w-1/4 pb-6 sm:pb-6 w-1/3">
                                                $ {coin.current_price.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}
                                            </div>
                                            <div
                                                className={`mt-2 sm:w-1/4 text-end pb-6 sm:pb-0 w-1/3 md:mt-6 sm:mt-0 ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </div>
                                            <div className="hidden sm:block mt-2 sm:w-1/4 text-end mr-2 pb-6 sm:pb-0 md:mt-6 sm:mt-0">
                                                $ {coin.market_cap.toLocaleString()}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                        <Pagination currentPage={currentPage}
                                    onPageChange={(page) => setCurrentPage(page)}/>
                    </>
                )}
            </div>
        </div>
    );
};

export default Market;