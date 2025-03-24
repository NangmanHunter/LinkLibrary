fileNameText=fileName.replace(/\d{2}/,``);
fileNameText=fileNameText.replace(/-[\wㄱ-힣]+/,``);


$.get(`../../${fileName}.txt`,function(text) {
    let h=``;
    text=text.trim();
    let linesArr = text.split("\n");
    linesArr.forEach(function(item) {
        item=`<a href="https://www.law.go.kr/${fileNameText}/${item}" target="_blank">${item}</a>`;
        item=`<li>${item}</li>`;
        h+=item;
    });
    h=`<ul>${h}</ul>`
    $(`#div`).html(h)
});


/* 
fileName    ▶01법령
fileNameText▶법령
*/


