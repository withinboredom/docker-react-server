//import {start} from `react-server-cli`;
var serv = require('react-server-cli');

serv.start(`./routes.js`, {
  port: 3000,
  jsPort: 3001,
  hot: true,
  minify: false,
  compileOnly: false,
  jsUrl: process.env.public_url,
  longTermCaching: false
});