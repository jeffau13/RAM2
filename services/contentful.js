const contentful = require('contentful');

const client = contentful.createClient({
  accessToken: process.env.ACCESS_TOKEN,
  space: process.env.SPACE_ID
});

// For testing if connected successfully
// client.sync({ initial: true }).then(res => {
//   // console.log(res.entries);
//   // console.log(res.assets);
// });

exports.client = client;
