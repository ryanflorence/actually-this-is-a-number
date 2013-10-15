module.exports = function(str) {
  return parseFloat(str.replace(/,/g, ''));
};

