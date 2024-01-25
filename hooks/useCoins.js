import {useQuery} from "@tanstack/react-query";
import {
    getBitCoinDetail,
    getBNBDetail,
    getEthereumDetail,
    getSolanaDetail,
    getTetherDetail,
    getXRPDetail
} from "../apis/coins";

const useGetBitCoin = () => {
    return useQuery({
        queryKey: ['get', 'ticker'],
        queryFn: () => getBitCoinDetail(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

const useGetEthereum = () => {
    return useQuery({
        queryKey: ['get', 'ethereum'],
        queryFn: () => getEthereumDetail(),
        staleTime: 180000,
        cacheTime: 60000,
    })
}

const useGetTether = () => {
    return useQuery({
        queryKey: ['get', 'tether'],
        queryFn: () => getTetherDetail(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

const useGetBNB = () => {
    return useQuery({
        queryKey: ['get', 'bnb'],
        queryFn: () => getBNBDetail(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

const useGetSol = () => {
    return useQuery({
        queryKey: ['get', 'solana'],
        queryFn: () => getSolanaDetail(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

const useGetXRP = () => {
    return useQuery({
        queryKey: ['get', 'xrp'],
        queryFn: () => getXRPDetail(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

export const useCoins = () => {
    return {
        useGetBitCoin,
        useGetEthereum,
        useGetTether,
        useGetBNB,
        useGetSol,
        useGetXRP,
    }
}