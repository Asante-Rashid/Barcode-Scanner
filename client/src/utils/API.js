import axios from "axios";

export default {

  getBarcode: function (keywords) {
    return axios.get("http://amazon-price1.p.rapidapi.com/search?marketplace=US&keywords=" + keywords + "&rapidapi-key=68d6bc81admsh2342c8a64a17778p12e320jsn798741eef2da")
  },

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
  }
};

