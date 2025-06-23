const dotenv = require('dotenv');//calls an object
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

module.exports = {
    PORT : process.env.PORT,
}
