import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {
    getAllCoin,
    getCoinDetailById,
    getCoinsList,
} from "../apis/coins";

const useGetCoinList = (page) => {
    return useQuery({
        queryKey: ['get', 'ticker',page],
        queryFn: () => getCoinsList(page),
        staleTime: 60000,
        cacheTime: 60000,
        placeholderData: keepPreviousData,
    })
}

const useGetCoinById = (id) => {
    return useQuery({
        queryKey: ['get', 'coin_detail', id],
        queryFn: () => getCoinDetailById(id),
    });
};

const useGetAllCoins = () => {
    return useQuery({
        queryKey: ['get', 'all_coin'],
        queryFn: () => getAllCoin(),
        staleTime: 60000,
        cacheTime: 60000,
    });
};


export const useCoins = () => {
    return {
        useGetCoinList,
        useGetCoinById,
        useGetAllCoins,
    }
}