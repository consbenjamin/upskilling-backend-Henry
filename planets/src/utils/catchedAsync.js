//funciones de orden superior
//catchedAsync seria un trycatch

module.exports = (fn) => (req, res, next) => 
  fn(req, res).catch((err) => next(err));
