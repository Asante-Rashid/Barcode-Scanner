import axios from "axios";

export default {

  // getBarcode: function () {

  //   const options = {
  //     method: 'GET',
  //     url: 'https://amazon-price1.p.rapidapi.com/search',
  //     params: { marketplace: 'US', keywords: '<REQUIRED>' },
  //     headers: {
  //       'x-rapidapi-key': '68d6bc81admsh2342c8a64a17778p12e320jsn798741eef2da',
  //       'x-rapidapi-host': 'amazon-price1.p.rapidapi.com'
  //     }
  //   },

  //   return axios.get(options)
  // },

  getHistory: function () {
    return axios.get("/api/history");
  },

  getItem: function (id) {
    return axios.get("/api/history/" + id);
  },

  deleteItem: function (id) {
    return axios.delete("/api/history/" + id);
  },

  saveItem: function (barcodeData) {
    return axios.post("/api/history", barcodeData);
  },

  googleSearch: function(query) {
    return axios.get("/api/google", { params: { q: query } });
  }
};

