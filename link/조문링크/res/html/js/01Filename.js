
let fileName;
fileName = window.location.pathname.split("/").pop();
fileName = decodeURIComponent(fileName)
fileName = fileName.replaceAll(`.html`, ``)
