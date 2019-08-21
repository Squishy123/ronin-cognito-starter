//combine all parsed into params
function combineParsed(req, res, next) {
  req.params = Object.assign(req.params, req.body, req.query);
  req.payload = {};
  req.scope = {};
}

export default combineParsed;
