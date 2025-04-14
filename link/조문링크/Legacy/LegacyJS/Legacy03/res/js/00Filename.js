
let fileName;
fileName = window.location.pathname.split("/").pop();
fileName = decodeURIComponent(fileName)
fileName = fileName.replaceAll(`.html`, ``)
fileName = fileName.replaceAll(/\d{2}$/g, ``)
console.log("현재 파일 이름:", fileName);
