const axios = require("axios").default;

exports.get = async (url, headers) => {
  return await axios.get(url, headers);
};
