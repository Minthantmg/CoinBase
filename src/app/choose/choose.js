import React from 'react';
import Image from "next/image";
import wallet from '../../../public/wallet.svg'
import pen from '../../../public/pens.svg'
import bookmark from '../../../public/bookmark.svg'
import phone from '../../../public/phone.svg'
import money from '../../../public/money.svg'
import layer from '../../../public/layer.svg'

const Choose = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex justify-center items-center text-4xl pt-4 pb-6 sm:text-7xl sm:pt-10 sm:mb-16 font-bold">
                    WHY <span className="ml-3 bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent">CHOOSE US</span>
            </div>
            <div className="sm:flex sm:justify-center sm:items-center pb-10">
                <div className="sm:mr-28 mt-6 md:ml-10">
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={wallet} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">CONNECT YOUR WALLET</div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            Use Trust Wallet, Metamask or to connect to the app.
                        </div>
                    </div>
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl mt-6">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={pen} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">SELECT YOUR QUANTITY</div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            Upload your crypto and set a title, description and price.
                        </div>
                    </div>
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl mt-6">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={bookmark} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">CONFIRM TRANSACTION</div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            Earn by selling your crypto on our marketplace.
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <img src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png"
                         alt="" width={350} height={350}/>
                </div>
                <div className="sm:ml-28 mt-6 md:mr-10">
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={phone} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">RECEIVE YOUR OWN NFTS</div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            Invest all your crypto at one place on one platform.
                        </div>
                    </div>
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl mt-6">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={money} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">TAKE A MARKET TO SELL
                                </div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            Discover, collect the right crypto collections to buy.
                        </div>
                    </div>
                    <div className="ml-3 sm:ml-0 bg-gray-900 p-6 w-[350px] rounded-xl mt-6">
                        <div>
                            <div className="flex">
                                <div className="p-4 bg-red-500 rounded-xl bg-gradient-to-b from-purple-600 to-blue-500">
                                    <Image src={layer} alt="" />
                                </div>
                                <div className="ml-6 text-xl font-bold">DRIVE YOUR COLLECTION</div>
                            </div>
                        </div>
                        <div className="ml-20 mt-2">
                            We make it easy to Discover, Invest and manage.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;