'use client'
import React from 'react';
import {useParams, useRouter} from "next/navigation";
import {useCoins} from "../../../../hooks/useCoins";
import Loading from "@/app/components/loading";

const Page = () => {
    const {id} = useParams();
    const {useGetCoinById} = useCoins()
    const {data:coin,isLoading,isSuccess} = useGetCoinById(id)
    const router = useRouter()

    const redirectToMain = () => {
        router.push('/')
    }

    return (
        <div className="bg-gradient-to-b from-indigo-900 to-black h-full sm:h-screen flex items-center justify-center text-white">
            {isLoading && (
                <div className="bg-gradient-to-b from-indigo-900 to-black w-full h-screen flex justify-center items-center">
                    <Loading />
                </div>
            )}
            {isSuccess && (
                <div className="w-full h-full sm:flex flex-col">
                   <div className="sm:flex sm:justify-center sm:items-center sm:ml-36 sm:mt-44 sm:mr-32">
                       <div className="sm:w-1/3 sm:border-r-2 mt-10 sm:mt-0 border-b-2 sm:border-b-0 ml-6 mr-6 sm:ml-0 sm:mr-0">
                           <div>
                               <div className="flex justify-center items-center">
                                   <img src={coin.image.large} alt="" className=""/>
                               </div>
                               <div>
                                   <div className="text-center text-3xl font-bold mt-10 sm:mt-4">
                                       {coin.name}
                                   </div>
                               </div>
                               <div className="text-center mt-6 sm:mt-4 text-xl pb-4 sm:pb-0">
                                   Rank:<span className="ml-2">{coin.market_cap_rank}</span>
                               </div>
                           </div>
                       </div>
                       <div className="sm:w-2/3 ml-2 mt-10 sm:mt-0">
                           <div className="sm:flex sm:justify-between">
                               <div className="text-lg sm:ml-4 text-center">
                                   24h Change: <span className={`${coin.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</span>
                               </div>
                               <div className="text-lg text-center">
                                   Price : <span className="text-green-500">$ {coin.market_data.current_price.usd.toLocaleString(undefined, {
                                   minimumFractionDigits: 2,
                                   maximumFractionDigits: 2
                               })}</span>
                               </div>
                               <div className="text-lg text-center">
                                   Symbol: <span className="ml-2">{coin.symbol}</span>
                               </div>
                           </div>
                           <div className="max-h-[250px] mt-8 overflow-y-auto p-4">
                               <div
                                   dangerouslySetInnerHTML={{
                                       __html: coin.description.en.replace(/<a/g, '<a style="color: #66fab7;"'),
                                   }}
                               />
                           </div>
                       </div>
                   </div>
                    <div className="flex justify-center items-center mt-20 pb-20 sm:pb-0">
                        <button className="cursor-pointer bg-gradient-to-r from-blue-800 to-purple-500 px-4 py-3 rounded-xl" onClick={redirectToMain}>back to main Page</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;