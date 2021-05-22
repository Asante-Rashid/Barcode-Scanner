import axios from "axios";

export default {

  getHistory: function() {
    return axios.get("/api/history");
  },
 
  getItem: function(id) {
    return axios.get("/api/history/" + id);
  },
  
  deleteItem: function(id) {
    return axios.delete("/api/history/" + id);
  },
  
  saveItem: function(barcodeData) {
    return axios.post("/api/history", barcodeData);
  },

  googleSearch: function(query) {
    return axios.get("/api/google", { params: { q: query } });
  }
};
