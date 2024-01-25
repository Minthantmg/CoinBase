import {useQuery} from "@tanstack/react-query";
import {
    getCoinsList,
} from "../apis/coins";

const useGetCoinList = () => {
    return useQuery({
        queryKey: ['get', 'ticker'],
        queryFn: () => getCoinsList(),
        staleTime: 60000,
        cacheTime: 60000,
    })
}

export const useCoins = () => {
    return {
        useGetCoinList,
    }
}