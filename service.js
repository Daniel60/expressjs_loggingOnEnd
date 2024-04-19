const myHttps = require("./https.js");

exports.serviceGET = async (req, res) => {
  const url = "https://postman-echo.com/get";
  const headers = {
    test: "test",
  };
  const response1 = await myHttps.get(url, headers);
  console.log("depois primeira chamada");
  const response2 = await myHttps.get(url, headers);
  console.log("depois Segunda chamada");
  return response2;
};
