import React from 'react';
import {useCoins} from "../../../hooks/useCoins";
import bitcoin from '../../../public/crypto.png'

const Market = () => {
    const {useGetBitCoin} = useCoins()
    const {useGetEthereum} = useCoins()
    const {useGetTether} = useCoins()
    const {useGetBNB} = useCoins()
    const {useGetSol} = useCoins()
    const {useGetXRP} = useCoins()
    const {data: btc, isLoading, isErrorBtc, isSuccess: isSuccessBtc} = useGetBitCoin()
    const {data: eth, isSuccess: isSuccessEth, isErrorEth} = useGetEthereum()
    const {data: te, isSuccess: isSuccessTe, isErrorTe} = useGetTether()
    const {data: bnb, isSuccess: isSuccessBnb, isErrorBnb} = useGetBNB()
    const {data: sol, isSuccess: isSuccessSol, isErrorSol} = useGetSol()
    const {data: xrp, isSuccess: isSuccessXrp, isErrorXrp} = useGetXRP()

    return (
        <div className="bg-black text-white">
            <div className="font-bold text-3xl ml-28 sm:pt-16">
                Market Update
            </div>
            {isErrorBtc && isErrorEth && isErrorTe(
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
                {isSuccessBtc && isSuccessEth && isSuccessTe && isSuccessBnb && isSuccessSol && isSuccessXrp && (
                    <>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={btc.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {btc.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {btc.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${btc.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {btc.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {btc.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={eth.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {eth.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {eth.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${eth.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {eth.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {eth.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={te.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {te.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {te.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${te.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {te.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {te.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={bnb.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {bnb.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {bnb.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${bnb.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {bnb.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {bnb.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={sol.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {sol.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {sol.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${sol.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {sol.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {sol.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 pb-4 text-2xl font-bold border-b-2 ml-24 mr-20">
                            <div className="flex w-1/4">
                                <img src={xrp.image.small} alt=""/>
                                <div className="flex justify-center items-center ml-4">
                                    {xrp.name}
                                </div>
                            </div>
                            <div className="text-end text-2xl font-bold mt-2 w-1/4">
                                $ {xrp.market_data.current_price.usd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                            </div>
                            <div
                                className={`mt-2 w-1/4 text-end ${xrp.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {xrp.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                            </div>
                            <div className="mt-2 w-1/4 text-end mr-2">
                                $ {xrp.market_data.market_cap.usd.toLocaleString()}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Market;