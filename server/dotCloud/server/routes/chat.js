var commons = require('../commons');

exports.index = function(req, res){
  res.render('chat', {
    title: 'Socket.IO-Client (web)',
    host: commons.host,
    protocol: commons.protocol
  });
};
