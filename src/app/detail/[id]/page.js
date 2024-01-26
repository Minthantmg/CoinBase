'use client'
import React from 'react';
import {useParams, useRouter} from "next/navigation";
import {useCoins} from "../../../../hooks/useCoins";

const Page = () => {
    const {id} = useParams();
    const {useGetCoinById} = useCoins()
    const {data:coin,isLoading,isSuccess} = useGetCoinById(id)
    const router = useRouter()

    const redirectToMain = () => {
        router.push('/')
    }

    return (
        <div className="bg-gradient-to-b from-indigo-900 to-black h-screen flex items-center justify-center text-white">
            {isSuccess && (
                <div className="w-full h-full">
                   <div className="flex justify-center items-center ml-36 mt-44 mr-32">
                       <div className="w-1/3 border-r-2">
                           <div>
                               <div className="flex justify-center items-center">
                                   <img src={coin.image.large} alt=""/>
                               </div>
                               <div>
                                   <div className="text-center mt-4 text-3xl font-bold">
                                       {coin.name}
                                   </div>
                               </div>
                               <div className="text-center mt-2 text-xl">
                                   Rank:<span className="ml-2">{coin.market_cap_rank}</span>
                               </div>
                           </div>
                       </div>
                       <div className="w-2/3 ml-2">
                           <div className="flex justify-between">
                               <div className="text-lg ml-4">
                                   24h Change: <span className={`${coin.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</span>
                               </div>
                               <div className="text-lg">
                                   Price : <span className="text-green-500">$ {coin.market_data.current_price.usd.toLocaleString(undefined, {
                                   minimumFractionDigits: 2,
                                   maximumFractionDigits: 2
                               })}</span>
                               </div>
                               <div className="text-lg">
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
                    <div className="flex justify-center items-center mt-20">
                        <button className="cursor-pointer bg-gradient-to-r from-blue-800 to-purple-500 px-4 py-3 rounded-xl" onClick={redirectToMain}>back to main Page</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;