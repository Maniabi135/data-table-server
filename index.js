const express = require("express");
const app = express();
const cors = require("cors");
const salesData = require("./salesData");
const {
  getMinValue,
  getMaxValue,
  convertToDateFormat,
  createTable
} = require("./utils");
const navSteps = require("./constants");

const port = 4000;

app.use(
  cors(),
  express.json(),
  express.urlencoded({
    extended: true
  })
);

app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello world");
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", false);
  next();
});

// Filter By Data
app.post("/filter", function (req, res) {
  const {
    startDate = "",
    endDate = "",
    status = "all",
    startingPrice = 1,
    endingPrice = 1000,
    currentPage = 0,
    limit = 10
  } = req.body;
  let filteredData = salesData.filter(item => {
    const { status: tabValue, price, productDate } = item;
    if (status !== "all" && status !== tabValue) {
      return false;
    }
    if (price < startingPrice || price > endingPrice) {
      return false;
    }
    if (productDate < startDate || productDate > endDate) {
      return false;
    }
    return item;
  });
  const totalRecord = filteredData.length;
  const htmlTableDom = createTable(filteredData);
  const startIdx = (currentPage - 1) * limit;
  filteredData = filteredData.splice(startIdx, limit);
  res.json({
    data: filteredData,
    pageNo: currentPage,
    pageLimt: limit,
    totalRecord,
    htmlTableDom
  });
});

// Get All Data
app.get("/get", function (req, res) {
  const tempData = [...salesData];
  const data = {
    activeTab: "all",
    navSteps,
    priceRanges: {
      maxValue: getMaxValue(salesData, "price"),
      minValue: getMinValue(salesData, "price"),
      name: "Price Range Filter",
      startRange: 1,
      endRange: 1000,
      id: "orderPriceRange"
    },
    dateRanges: [
      {
        value: convertToDateFormat(getMinValue(salesData, "productDate")),
        name: "Start Date",
        id: "startDate"
      },
      {
        value: convertToDateFormat(getMaxValue(salesData, "productDate")),
        name: "End Date",
        id: "endDate"
      }
    ],
    pageLimt: 10,
    pageNo: 1,
    totalRecord: salesData.length
  };
  data.salesData = tempData.splice(0, data.pageLimt);
  data.htmlTableDom = createTable(salesData);
  res.json(data);
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
