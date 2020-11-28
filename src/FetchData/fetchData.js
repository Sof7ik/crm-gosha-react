// import {useCallback, useState} from "react";

// const FetchData = async () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const baseURL = 'http://f0490278.xsph.ru/api/';
//
//     const request = useCallback(async (url = '', method = 'GET', headers= {}, body = null) => {
//         setIsLoading(true);
//
//         try {
//             const response = await fetch (baseURL + url, {
//                 method: method,
//                 headers: headers,
//                 body: body
//             });
//
//             if (!response.ok)
//             {
//                 console.warn(response.statusText);
//             }
//
//             setIsLoading(false);
//
//             return response.json();
//
//         } catch (e) {
//             setIsLoading(false);
//             throw new Error(e);
//         }
//     }, [])
//
//     return {isLoading, request}
//
// }
//
// export const getBloggers = async () => {
//     return (await FetchData()).request('bloggers');
// }
//
// export const getBrands = async () => {
//     return (await FetchData()).request('brands');
// }
//
// export const getUsers = async () => {
//     return (await FetchData()).request('users');
// }
//
// export const getExactBlogger = async (bloggerId = 0) => {
//     return (await FetchData()).request(`bloggers/${bloggerId}`);
// }
//
// export const getGoodsFromBrand = async (brandId = 0) => {
//     return (await FetchData()).request(`/brands/${brandId}`);
// }
//
// export const getExactGoods = async (goodsId = 0) => {
//     return (await FetchData()).request(`/goods/${goodsId}`);
// }
//
// export const getExactUser = async (userId) => {
//     return (await FetchData()).request(`/users/${userId}`);
// }

export default class FetchData {

    baseUrl = 'http://f0490278.xsph.ru/api/';
    isLoading = false;

    getResource = async (url, method = 'GET', body = null, headers = {}) => {
        this.isLoading = true;

        const res = await fetch(url, {
            'method': method,
            'headers': headers,
            'body': body
        });

        if (!res.ok)
        {
            this.isLoading = false;
            throw new Error(`Произошла ошибка ${res.status} - ${res.statusText} `);
        }

        this.isLoading = false;
        // console.log(res.text());
        return await res.json();
    }

    getBloggers = async () => {
        return await this.getResource(`${this.baseUrl}bloggers`);
    }

    getBrands = async () => {
        return await this.getResource(`${this.baseUrl}brands`);
    }

    getUsers = async () => {
        return await this.getResource(`${this.baseUrl}users`);
    }

    getExactBlogger = async (bloggerId = 0) => {
        return await this.getResource(`${this.baseUrl}bloggers/${bloggerId}`);
    }

    getGoodsFromBrand = async (brandId = 0) => {
        return await this.getResource(`${this.baseUrl}/brands/${brandId}`);
    }

    getExactGoods = async (goodsId = 0) => {
        return await this.getResource(`${this.baseUrl}/goods/${goodsId}`);
    }

    getExactUser = async (userId) => {
        return await this.getResource(`${this.baseUrl}users/${userId}`);
    }
}