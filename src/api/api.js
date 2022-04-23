// Подключаем необходимые библиотеки
const axios = require('axios');

// Параметры конфига
const { requestUrl, noToken } = require('../../config.js');

// Класс API
class API {

    constructor(params = {}) {

        this.token = params.token;
        if(!this.token) throw new Error(`Black Coin Api Error\n\nError code - ${noToken.code}\nError message - ${noToken.message}`);

    };

    getBalance = async () => {

        let data = await axios.get(`${requestUrl}/balance`, {
            headers: { 'Authorization': `Bearer ${this.token}` }
        }).then((data) => {
            return Math.floor(data.data.balance);
        }).catch((err) => {
            return false;
        });
        return data;

    };

    getTransHistory = async (params = {}) => {

        let data = await axios.get(`${requestUrl}/transactions?${params.type ? `type=${params.type}&` : 'type=all&'}${params.after_id ? `after_id=${params.after_id}&` : 'after_id=0&'}${params.limit ? `limit=${params.limit}&` : 'limit=20&'}`, {
            headers: { 'Authorization': `Bearer ${this.token}` }
        }).then((data) => {
            return data.data;
        }).catch((err) => {
            return false;
        });
        return data;

    };

    sendCoins = async (amount, recipient_id) => {

        let data = await axios.post(`${requestUrl}/send_coins`, {
            amount: amount,
            recipient_id: recipient_id
        }, {
            headers: { 'Authorization': `Bearer ${this.token}` }
        }).then((data) => {
            return true;
        }).catch((err) => {
            return false;
        });
        return data;

    };

};

// Экспортируем
module.exports = API;