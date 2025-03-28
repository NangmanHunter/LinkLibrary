


$.get(`../${fileName}.cList`,function(text) {
    let h=``;
    text=text.trim();
    let linesArr = text.split("\n");
    linesArr.forEach(function(item) {


        let itemURL;
        itemURL=item.replace(/%/g,`％`);
        itemURL=itemURL.replace(/\?/g,`%3F`);
        itemURL=itemURL.replace(/(?!\/\()\//g,`／`);


        if(fileName=="법령_약칭"){
            item=`<a href="https://www.law.go.kr/법령/${itemURL}" target="_blank">${item}</a>`;
        }
        else if(fileName=="법령_연혁"){
            item=`<a href="https://www.law.go.kr/법령/${itemURL}" target="_blank">${item}</a>`;
        }







        else if(fileName=="판례_대법원"){
            item=`<a href="https://www.law.go.kr/판례/${itemURL}" target="_blank">${item}</a>`;
        }
        else if(fileName=="판례_대법원_사건번호"){
            item=`<a href="https://www.law.go.kr/판례/(${itemURL})" target="_blank">${item}</a>`;
        }


        else if(fileName=="헌재결정례"){
            item=`<a href="https://www.law.go.kr/${fileName}/(${itemURL})" target="_blank">${item}</a>`;
        }
        else if(fileName=="법령해석례"){
            item=`<a href="https://www.law.go.kr/${fileName}/(${itemURL})" target="_blank">${item}</a>`;
        }



        else if (fileName.includes("법령_신구법비교")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 
        else if (fileName.includes("법령_제개정문")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 
        else if (fileName.includes("법령_3단비교")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 



        else if (fileName.includes("중앙부처1차해석_")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${itemURL}" target="_blank">${item}</a>`;
        }
        else if (fileName.includes("학칙공단_")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[0]}/${itemURL}" target="_blank">${item}</a>`;
        }
        
        

        else if (fileName.includes("위원회_")) {
            let fileNameArr=fileName.split("_")
            item=`<a href="https://www.law.go.kr/${fileNameArr[1]}/${itemURL}" target="_blank">${item}</a>`;
        } 
        else if (fileName.includes("법령_용어")) {
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





