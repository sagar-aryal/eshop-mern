const successResponse = (res, status, message, data) => {
  return res.status(status).json({ message, data });
};

const errorResponse = (res, status, message, error) => {
  return res.status(status).json({ message, error });
};

module.exports = { successResponse, errorResponse };
