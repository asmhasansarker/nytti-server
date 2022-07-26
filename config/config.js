require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/TestNytti",
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bnvlz.mongodb.net/${process.env.DB_NAME}`,
  },
};

module.exports = dev;
