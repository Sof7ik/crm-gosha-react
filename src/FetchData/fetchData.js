export default class FetchData {

    baseUrl = 'http://f0490278.xsph.ru/api/';
    // baseUrl = 'http://api.crm-gosha-react/api/';
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

    getUserForLogin = async (data) => {

        console.log('data', data);

        return await this.getResource(`${this.baseUrl}users`,
            "POST", JSON.stringify(data), {'Content-Type': 'application/json'});

    }
}