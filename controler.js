const service = require("./service");

exports.controlerGet = async (req, res, next) => {
  const response = await service.serviceGET();
  res.json(response.data);
};
