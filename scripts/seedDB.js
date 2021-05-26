const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactbarcodelist"
);

const barcodeSeed = [
  {
    Name: "Nitril Gloves",
    UPC: "829576021062",
    ASIN:
      "0000001",
      // Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.localhealthrx.com%2Fproduct%2Fnitrile-gloves-100ct%2F&psig=AOvVaw2YYcl_U3ooJ8OYCsbAdONY&ust=1622069048866000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODGsp305fACFQAAAAAdAAAAABAF",
      Description: "rubber gloves"
  },
  {
    Name: "Minute Maid Lemonade",
    UPC: "02500005381",
    ASIN:
      "0000002",
      // Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.localhealthrx.com%2Fproduct%2Fnitrile-gloves-100ct%2F&psig=AOvVaw2YYcl_U3ooJ8OYCsbAdONY&ust=1622069048866000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODGsp305fACFQAAAAAdAAAAABAF",
      Description: "2L lemonade made from 	&ldquo;real&rdquo; lemmons"
  },
  {
    Name: "AMD Ryzen 3600X",
    UPC: "730143309912",
    ASIN:
      "0000003",
      // Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.localhealthrx.com%2Fproduct%2Fnitrile-gloves-100ct%2F&psig=AOvVaw2YYcl_U3ooJ8OYCsbAdONY&ust=1622069048866000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODGsp305fACFQAAAAAdAAAAABAF",
      Description: "3rd Gen processor with heat sink fan included"
  },
  {
    Name: "Adictivo Tequila",
    UPC: "7500462214333",
    ASIN:
      "0000004",
      // Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.localhealthrx.com%2Fproduct%2Fnitrile-gloves-100ct%2F&psig=AOvVaw2YYcl_U3ooJ8OYCsbAdONY&ust=1622069048866000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODGsp305fACFQAAAAAdAAAAABAF",
      Description: "Extra anejo, 100% de agave tequila "
  }
 
];

db.Scan
  .remove({})
  .then(() => db.Scan.collection.insertMany(barcodeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
