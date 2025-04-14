


$.get(`../../${fileName}.cList`,function(text) {
    let h=``;
    text=text.trim();
    let linesArr = text.split("\n");
    linesArr.forEach(function(item) {
        item=`<a href="https://www.law.go.kr/${fileName}/${item}" target="_blank">${item}</a>`;
        item=`<li>${item}</li>`;
        h+=item;
    });
    h=`<ul>${h}</ul>`
    $(`#div`).html(h)
});


/* 
fileName▶법령
*/


