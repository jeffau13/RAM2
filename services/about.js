const client = require("./contentful").client;

const getAbout = query => {
  query = query || {};
  query.content_type = "about";
  return client.getEntries(query);
};

module.exports = {
  getAbout
};
