import {axiosInstance} from "../utils/axiosInstance";

export const getAllCoins = async () => {
    try {
        const res = await axiosInstance.get('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        return res
    } catch (e) {
        throw e;
    }
}
