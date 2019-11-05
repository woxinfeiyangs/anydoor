const {createGzip, createDeflate} = require('zlib');

module.exports = (rs, req, res) => {
  const acceptEncoding = req.headers['accept-encoding'];
  if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|de)\b/)) {
    return rs;
  } else if (acceptEncoding.match(/\b(gzip)\b/)) {
    res.setHeader('Content-Encoding', 'gzip');
    return rs.pipe(createGzip());
  } else if (acceptEncoding.match(/\b(deflate)\b/)) {
    rs.setHeader('Content-Encoding', 'deflate');
    return rs.pipe(createDeflate());
  }
};
