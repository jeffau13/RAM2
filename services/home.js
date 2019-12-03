const client = require("./contentful").client;

const getHome = query => {
  query = query || {};
  query.content_type = "home";
  return client.getEntries(query);
};

module.exports = {
  getHome
};
