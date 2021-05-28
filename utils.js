const Utils = {};

Utils.getMinValue = (data = [], key = "price") => {
  return data.reduce(
    (min, item) => (item[key] < min ? item[key] : min),
    data[0][key]
  );
};

Utils.getMaxValue = (data = [], key = "price") => {
  return data.reduce(
    (min, item) => (item[key] > min ? item[key] : min),
    data[0][key]
  );
};

Utils.convertToDateFormat = (milsec = new Date()) => {
  const date = new Date(milsec);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month > 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  }`;
};

Utils.getHeaderBody = data => {
  let dom = "";
  const headers = Object.keys(data[0]) || [];
  if (headers.length) {
    for (key of headers) {
      dom += `<div class="tableCont"><div class="tableHeader">${key}</div>`;
      for (item of data) {
        dom += `<div class="tableColumn">${item[key] || "--"}</div>`;
      }
      dom += `</div>`;
    }
  }
  return dom;
};

Utils.createTable = (data = []) => {
  let dom = "";
  if (data.length) {
    dom += `<div class="tableViewSection">
    ${Utils.getHeaderBody(data)}</div>
    </div>
  </div></div>`;
  } else {
    dom += `<div class="noDataFound">No data found</div>`;
  }
  return dom;
};

module.exports = Utils;
