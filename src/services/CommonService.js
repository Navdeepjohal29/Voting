import BigNumber from "big-number";
import moment from "moment";

const convertWithDecimal = (value, decimal) => {
  if (value > 0) {
    if (isInt(value)) {
      value = parseInt(value);
      value = BigNumber(value).multiply(decimal);
    } else {
      value = value * decimal;
      value = toFixed(value);
      value = parseInt(value.toString().split(".")[0]);
      value = toFixed(value);
      value = BigNumber(value);
    }
    return value.toString();
  } else {
    return 0;
  }
};

const toFixed = (x) => {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
};

const isInt = (n) => {
  return n % 1 === 0;
};

const getError = (error) => {
  console.log("error -", error)
  let errorMsg =
    error && error.message ? error.message : "Something went wrong";
  if (errorMsg.indexOf("Internal JSON-RPC error") > -1) {
    let msg = errorMsg.replace("Internal JSON-RPC error.", "");
    msg = JSON.parse(msg);
    return msg.message.split(":")[2];
  } else if (errorMsg.indexOf("INVALID_ARGUMENT") > -1) {
    return errorMsg.split("(")[0];
  } else {
    return errorMsg;
  }
};

const custmizeAddress = (address) => {
  let firstFive = address.substring(0, 5);
  let lastFour = address.substr(address.length - 4);
  return firstFive + "..." + lastFour;
};

const getCoinType = (type) => {
  type = type.toLowerCase();
  type = type === "defi" ? 1 : type === "chain" ? 2 : type === "nft" ? 3 : 0;
  return type;
};


const fixedToDecimal = (value, decimals = 2) => {
  value = value && parseFloat(value) > 0 ? value.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] : 0
  return value;
};

const secondsToDays = (sec) => {
  var seconds = parseInt(sec, 10);
  var days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  var hrs = Math.floor(seconds / 3600);
  seconds -= hrs * 3600;
  var mnts = Math.floor(seconds / 60);
  seconds -= mnts * 60;
  let result = '';
  if (days > 0) {
    result = result + days + " days "
  }
  if (hrs > 0) {
    result = result + hrs + " Hrs "
  }
  if (mnts > 0) {
    result = result + mnts + " Minutes "
  }
  if (seconds > 0) {
    result = result + seconds + " Seconds"
  }
  return result;
};

const calculateTimeLeft = async (timestamp) => {
  let timeleft;
  let data = new Date((timestamp) * 1000);
  let betTime = moment.utc(data);
  let leftDays = moment.duration(moment(betTime).diff(moment()));
  let days = parseInt(leftDays.asDays())
  let hrs = parseInt(leftDays.asHours() % 24)
  let min = parseInt(leftDays.asMinutes()) % 60;
  let sec = parseInt(leftDays.asSeconds()) % 60;
  if (days >= 0 &&
    hrs >= 0 &&
    min >= 0 &&
    sec >= 0) {
    if (days > 0) {
      timeleft = days + " d : " + hrs + "h : " + min + "m : " + sec + "s";
    } else if (hrs > 0) {
      timeleft = hrs + "h : " + min + "m : " + sec + "s";
    } else if (min > 0) {
      timeleft = min + "m : " + sec + "s";
    } else if (sec > 0) {
      timeleft = sec + "s";
    }
  } else {
    timeleft = "Ended"
  }
  return timeleft
}

const getMilliseconds = (value) => {
  let data = 60 * 60 * 24 * value;
  return data;
};

const allowOnlyNumber = (value) => {
  const regex = /^\d*\.?\d{0,18}$/gm;
  var re = new RegExp(regex);
  if (re.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const CommonService = {
  convertWithDecimal,
  toFixed,
  getError,
  custmizeAddress,
  getCoinType,
  fixedToDecimal,
  secondsToDays,
  calculateTimeLeft,
  getMilliseconds,
  allowOnlyNumber
};
