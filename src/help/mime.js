const path = require('path');

const mimeTypes = {
  "jpg":    "image/jpeg",
  "jpeg":   "image/jpeg",
  "png":    "image/png",
  "gif":    "image/gif",
  "webp":   "image/webp",
  "ico":    "image/x-icon",
  "svg":    "image/svg+xml",
  "xls":    "application/vnd.ms-excel",
  "xlsx":   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "doc":    "application/msword",
  "docx":   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "pptx":   "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "ppt":    "application/vnd.ms-powerpoint",
  "pdf":    "application/pdf",
  "js":     "application/javascript",
  "json":   "application/json",
  "css":    "text/css",
  "html":   "text/html",
  "xhtml":  "application/xhtml+xml",
  "xht":    "application/xhtml+xml",
  "zip":    "application/zip",
  "txt":    "text/plain"
};

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();

  if(!ext) {
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes["txt"]
}
