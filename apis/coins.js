import {axiosInstance} from "../utils/axiosInstance";

export const getCoinsList = async (page) => {
    try {
        const res = await axiosInstance.get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`)
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getCoinDetailById = async (id) => {
    try {
        const res = await axiosInstance.get(`coins/${id}`);
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const getAllCoin = async () => {
    try {
        const res = await axiosInstance.get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
        console.log(res.data)
        return res.data;
    } catch (e) {
        throw e;
    }
};
