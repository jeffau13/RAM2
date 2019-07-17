const client = require('./contentful').client;

const getTutorials = query => {
  query = query || {};
  query.content_type = 'tutorials';
  return client.getEntries(query);
};

module.exports = {
  getTutorials
};
