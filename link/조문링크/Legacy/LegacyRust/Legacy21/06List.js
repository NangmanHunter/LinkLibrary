import init, { get_filtered_lines } from "./pkg/my_project.js";

function cList(data){
    let section;
    section=document.getElementById("div");
    section.innerHTML=data;
}



fetch(`../${fileName}.cList`)
.then(response => response.text())
.then(response => {

    // response=response
    //         .split("\r\n")
    //         .filter(line => line.trim() !== "");

    async function run() {
        await init(); 
    
        response = get_filtered_lines(response);


        

        let s=``;
        response.forEach((item, index)=>{
    
    
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
                let lastIndex = item.lastIndexOf("/");
                let itemPart1 = item.substring(0, lastIndex);  
                let itemPart2 = item.substring(lastIndex + 1);
    
                itemPart2=itemPart2.split(",");
                itemPart2[0]=`${itemPart2[0]}👉`
                itemPart2[0]=itemPart2[0].replace(`(`,``);
                
                itemPart2[1]=itemPart2[1].replace(`\r`,``);
                itemPart2[1]=itemPart2[1].replace(`)`,`👉`);
                
    
                item=`<a href="https://www.law.go.kr/판례/${itemURL}" target="_blank">${itemPart2[1]}${itemPart2[0]}${itemPart1}</a>`;
                
            }
            else if(fileName=="판례_대법원_URL"){
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
    
    
    
            
            item=`<li>${item}</li>`
            s+=item;
    
        })
        s=`<ul>${s}</ul>`
    
        cList(s);

        
        
    }
    run();    



   


})





