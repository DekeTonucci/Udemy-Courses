if(process.env.NODE_ENV === 'production') {
  // send production keys
  module.exports = require('./prod');
} else {
  // send development keys
  module.exports = require('./dev');
}