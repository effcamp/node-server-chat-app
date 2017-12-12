const moment = require('moment');

const generateMessage = (from, text) => ({
  from,
  text,
  createdAt: moment().valueOf()
});

const generateLocationMessage = (from, lat, lng) => ({
  from,
  url: `https://google.com/maps?q=${lat},${lng}`,
  createdAt: moment().valueOf()
});
module.exports = { generateMessage, generateLocationMessage };
