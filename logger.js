let res = {};
let req = {};

exports.mwlog = (request, response, next) => {
  res = request;
  req = response;
  next();
};

exports.log = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (data) {
    console.log("Response JSON:", data);
    originalSend.apply(res, arguments);
  };
  next();
};

exports.myTime = (req, res, time) => {
  console.log("Time of life: ", time);
};
