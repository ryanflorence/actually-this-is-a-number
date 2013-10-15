module.exports = function(str) {
  var n = str.replace(/,/g, '');
  var parser = n.indexOf('.') ? parseFloat : parseInt;
  return parser(n, 10);
};

