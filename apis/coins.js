import {axiosInstance} from "../utils/axiosInstance";

export const getBitCoinDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/bitcoin')
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getEthereumDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/ethereum')
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getTetherDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/tether')
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getBNBDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/binancecoin')
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getSolanaDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/solana')
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getXRPDetail = async () => {
    try {
        const res = await axiosInstance.get('coins/ripple')
        return res.data;
    } catch (e) {
        throw e;
    }
}

