const client = require('./contentful').client;

const getProjects = query => {
  query = query || {};
  query.content_type = 'photoGallery';
  return client.getEntries(query);
};

module.exports = {
  getProjects
};
