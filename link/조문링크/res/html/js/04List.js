


$.get(`../${fileName}.cList`,function(text) {
    let h=``;
    text=text.trim();
    let linesArr = text.split("\n");
    linesArr.forEach(function(item) {


        let itemURL;
        itemURL=item.replace(/%/g,`％`);
        itemURL=itemURL.replace(/\?/g,`%3F`);
        itemURL=itemURL.replace(/(?!\/\()\//g,`／`);


        if(fileName=="법령약칭"){
            item=`<a href="https://www.law.go.kr/법령/${itemURL}" target="_blank">${item}</a>`;
        }
        else if(fileName=="판례_대법원"){
            item=`<a href="https://www.law.go.kr/판례/(${itemURL})" target="_blank">${item}</a>`;
        }
        else if(fileName=="헌재결정례"){
            item=`<a href="https://www.law.go.kr/${fileName}/(${itemURL})" target="_blank">${item}</a>`;
        }
        else if(fileName=="법령해석례"){

           
            item=`<a href="https://www.law.go.kr/${fileName}/(${itemURL})" target="_blank">${item}</a>`;
        }
        else if (fileName.includes("법령_")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 
        else if (fileName.includes("위원회_")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 



        else{
            item=`<a href="https://www.law.go.kr/${fileName}/${itemURL}" target="_blank">${item}</a>`;
        }
        

        item=`<li>${item}</li>`;
        h+=item;
    });
    h=`<ul>${h}</ul>`
    $(`#div`).html(h)
});





