const errorCatcher = (router) => {
  return (req, res, next) => {
    router(req, res, next).catch((error) => next(error));
  };
};
module.exports = errorCatcher;
