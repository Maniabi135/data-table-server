const getDateFormat = (days = 1, isOld = false) => {
  const date = new Date().getTime() + days * 86400000;
  return isOld ? new Date().getTime() - days * 86400000 : date;
};

const salesData = [
  {
    serialCode: 12,
    name: "DELUXE COOKED HAM",
    price: 50,
    productId: "102",
    status: "delivered",
    catId: "A1",
    productDate: getDateFormat(1, true)
  },
  {
    serialCode: 212,
    name: "DELUXE LOW-SODIUM WHOLE HAM",
    price: 60,
    productId: "105",
    catId: "A2",
    status: "delivered",
    productDate: getDateFormat(15, true)
  },
  {
    serialCode: 123,
    name: "GAS STOVE",
    price: 500,
    productId: "1082",
    status: "dispatch",
    catId: "A3",
    productDate: getDateFormat(7, true)
  },
  {
    serialCode: 333,
    name: "VEGTABLES",
    price: 800,
    productId: "1095",
    status: "dispatch",
    catId: "",
    productDate: getDateFormat(16, true)
  },
  {
    serialCode: 434,
    name: "SMOKED VIRGINA HAM",
    price: 70,
    productId: "156",
    status: "arrived",
    catId: "2",
    productDate: getDateFormat(32)
  },
  {
    serialCode: 434,
    name: "HONEY MAPLE HAM",
    price: 80,
    productId: "150",
    status: "arrived",
    catId: "A4",
    productDate: getDateFormat(22)
  },
  {
    serialCode: 44,
    name: "HONEY MAPLE HAM 1/2",
    price: 40,
    productId: "151",
    status: "ordered",
    catId: "",
    productDate: getDateFormat(7)
  },
  {
    serialCode: 32,
    name: "BAVARIAN SMOKED HAM",
    price: 90,
    productId: "166",
    status: "delivered",
    catId: "A5",
    productDate: getDateFormat(8, true)
  },
  {
    serialCode: 89,
    name: "BLACK FOREST BEECHWOOD HAM L/S",
    price: 50,
    productId: "11005",
    status: "ordered",
    catId: "A22",
    productDate: getDateFormat(17)
  },
  {
    serialCode: 8,
    name: "TAVERN SMOKED HAM",
    price: 55,
    productId: "158",
    status: "ordered",
    catId: "B2",
    productDate: getDateFormat(45)
  },
  {
    serialCode: 40,
    name: "ROSEMARY HAM",
    price: 51,
    productId: "173",
    status: "ordered",
    catId: "C2",
    productDate: getDateFormat(6)
  },
  {
    serialCode: 345,
    name: "PESTO PARMESAN HAM",
    price: 100,
    productId: "189",
    catId: "C12",
    status: "ordered",
    productDate: getDateFormat(34)
  },
  {
    serialCode: 787,
    name: "DELI SWEET SLICE SMOKED HAM",
    price: 49,
    productId: "11018",
    catId: "R2",
    status: "ordered",
    productDate: getDateFormat(5)
  },
  {
    serialCode: 777,
    name: "HABANERO HAM ",
    price: 515,
    productId: "11044",
    status: "ordered",
    catId: "R92",
    productDate: getDateFormat(2)
  },
  {
    serialCode: 3,
    name: "ITALIAN RSTD HAM (PROSC COTTO)",
    price: 579,
    productId: "11022",
    catId: "",
    status: "ordered",
    productDate: getDateFormat(8)
  },
  {
    serialCode: 1,
    name: "SUNDAY HOT HAM (SWEET SLICE)",
    price: 39,
    productId: "11018",
    catId: "",
    status: "shipped",
    productDate: getDateFormat(4)
  },
  {
    serialCode: 91,
    name: "DELUXE ROAST BEEF TOP-ROUND",
    price: 69,
    productId: "235",
    catId: "T12",
    status: "ordered",
    productDate: getDateFormat(7)
  },
  {
    serialCode: 72,
    name: "LONDONPORT ROAST BEEF",
    price: 69,
    productId: "915",
    catId: "B42",
    status: "delivered",
    productDate: getDateFormat(13, true)
  },
  {
    serialCode: 25,
    name: "APPLE 11 PRO",
    catId: "",
    price: 140,
    productId: "1222",
    status: "shipped",
    productDate: getDateFormat(9, true)
  },
  {
    serialCode: 105,
    name: "ONE PLUS 9",
    price: 339,
    productId: "1118",
    catId: "",
    status: "cancelled",
    productDate: getDateFormat(6, true)
  },
  {
    serialCode: 876,
    name: "OFFICE CHAIR",
    price: 500,
    productId: "2235",
    catId: "",
    status: "ordered",
    productDate: getDateFormat(0)
  },
  {
    serialCode: 10,
    name: "TYRE 100R",
    price: 39,
    productId: "1908",
    catId: "Z2",
    status: "delivered",
    productDate: getDateFormat(2, true)
  }
];

module.exports = salesData;
