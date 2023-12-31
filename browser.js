window.ALY = module.exports = require('./lib/core');
require('./lib/http/xhr');
require('./lib/services/dataworks');
ALY.DATAWORKS = ALY.Service.defineService('dataworks', ['2020-05-18']);
