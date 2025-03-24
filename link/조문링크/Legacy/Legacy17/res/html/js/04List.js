


$.get(`../../${fileName}.cList`,function(text) {
    let h=``;
    text=text.trim();
    let linesArr = text.split("\n");
    linesArr.forEach(function(item) {



        if(fileName=="법령약칭"){
            item=`<a href="https://www.law.go.kr/법령/${item}" target="_blank">${item}</a>`;
        }
        else if(fileName=="판례-대법원"){
            item=`<a href="https://www.law.go.kr/판례/(${item})" target="_blank">${item}</a>`;
        }
        else if(fileName=="헌재결정례"){
            item=`<a href="https://www.law.go.kr/${fileName}/(${item})" target="_blank">${item}</a>`;
        }
        else{
            item=`<a href="https://www.law.go.kr/${fileName}/${item}" target="_blank">${item}</a>`;
        }
        

        item=`<li>${item}</li>`;
        h+=item;
    });
    h=`<ul>${h}</ul>`
    $(`#div`).html(h)
});





