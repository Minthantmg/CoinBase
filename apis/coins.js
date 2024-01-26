import {axiosInstance} from "../utils/axiosInstance";

export const getCoinsList = async () => {
    try {
        const res = await axiosInstance.get('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en')
        return res.data;
    } catch (e) {
        throw e;
    }
}