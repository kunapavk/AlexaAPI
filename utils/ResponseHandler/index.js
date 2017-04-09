module.exports = function(res, message, data = {}) {
  res.json({
    status: `SUCCESS`,
    message,
    data
  });
};
