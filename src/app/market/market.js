import React from 'react';
import {useCoins} from "../../../hooks/useCoins";
import Link from "next/link";

const Market = () => {
    const {useGetAllCoins} = useCoins()
    const {data: coins, isLoading, isError, isSuccess} = useGetAllCoins()
    console.log('coins:', coins);

    return (
        <div>
            <div className="font-bold text-3xl ml-28">
                Market Update
            </div>
            {isLoading && (
                <>
                </>
            )}
            {isSuccess && (
                <>
                    <div className="mt-16">
                        <div className="flex justify-between p-4 rounded-t-lg bg-gradient-to-r from-blue-700 to-purple-900 ml-24 text-white mr-20">
                            <div className="flex items-start text-2xl font-bold">
                                Coin
                            </div>
                            <div className="text-2xl font-bold ml-32">
                                Price
                            </div>
                            <div className="text-2xl font-bold">
                                24h Change
                            </div>
                        </div>
                        {isSuccess && (
                          <>
                              {/*{coins.map((coin, index) => (*/}
                              {/*    <div key={index} className="">*/}
                              {/*        <Link legacyBehavior={true} href="">*/}
                              {/*            <a>*/}
                              {/*                <div className="flex justify-between">*/}
                              {/*                    <div className="flex items-start text-2xl font-bold ml-28">*/}
                              {/*                        {coin.symbol}*/}
                              {/*                    </div>*/}
                              {/*                    <div className="text-2xl font-bold">*/}
                              {/*                        {coin.current_price}*/}
                              {/*                    </div>*/}
                              {/*                    <div className="text-2xl font-bold mr-24">*/}
                              {/*                        {parseFloat(coin.price_change_percentage_24h).toFixed(2)}*/}
                              {/*                    </div>*/}
                              {/*                </div>*/}
                              {/*            </a>*/}
                              {/*        </Link>*/}
                              {/*    </div>*/}
                              {/*))}*/}
                          </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Market;