const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactbarcodelist"
);

const barcodeSeed = [
  {
    Name: "Nitril Gloves - 30ct - Smartly",
    UPC: "829576021062",
    ASIN:
      "0000001",
      Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSH65z1ZJUKurLS044eTbp2BpOFgR_kliQhvZ7VNrlMCCZooOkMV9CUvWOLt1XvFQzdoJHO38XnKaZL6UzzpawCFFouxjr28g&usqp=CAY",
      Description: "Smartly · Nitrile · Latex-free"
  },
  {
    Name: "Minute Maid Lemonade - 67.6 fl oz",
    UPC: "025000053818",
    ASIN:
      "0000002",
      Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRy6H9cbwRsGE0kOLRvWYXwGtfjVetDX3-X_pKErQI1BKDgIo6m_gnAMHNNiopP5qQRZ-Z98K3Mp1-cEmBzNxidntVNbGX16UuoTDtNtA&usqp=CAE",
      Description: "Minute Maid · Lemonade · 67.6 ounce · Caffeine-free · Gluten-free · Kosher Please recycle. 3% lemon juice. Our quality promise assures your satisfaction."
  },
  {
    Name: "AMD Ryzen 3600X",
    UPC: "730143309912",
    ASIN:
      "0000003",
      Image: "data:image/webp;base64,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",
      Description: "Enhance the task execution speed of your desktop computer with this AMD Ryzen 5 3600X six-core processor. "
  },
  {
    Name: "Adictivo Extra Anejo Tequila",
    UPC: "7500462214333",
    ASIN:
      "0000004",
      Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsWhQilX8bjnsi1o2ogjxYfBxGGDt-bLjui11OjY0UIjzlJa5-y4SKLNzcGVNnxd_y742sFhi2Usu0qEZm2SzGt1X5IgEuJ7W6RbTbzDoMi62-Jd379xsHiQ&usqp=CAE",
      Description: "Adictivo Extrra Anejo TequilaWhen friends get together, good times become great times when a bottle of Adictivo Extra Anejo Tequila joins the party."
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
