import {useQuery} from "@tanstack/react-query";
import {getAllCoins} from "../apis/coins";

const useGetAllCoins = () => {
    return useQuery({
        queryKey: ['get', 'ticker'],
        queryFn: () => getAllCoins()
    })
}

export const useCoins = () => {
    return {
        useGetAllCoins
    }
}