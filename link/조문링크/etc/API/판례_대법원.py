'''
API
- http://www.law.go.kr/DRF/lawSearch.do?OC=djwlfdls1&target=prec&type=JSON&curt=대법원

법원명
ㄴ아직
ㄴ작업중인듯.
ㄴ대법원, 서울고등법원, 광주지법, 인천지방법원
ㄴ이정도밖에없음.
ㄴ좀더기다릴것.
ㄴㄱㄱ.
ㄴ일단되는것만ㄱㄱ.


'''

import requests
import json
import os


target='prec'
curt='대법원'
outerKey='PrecSearch'
innerKey='prec'

item2_key1='사건명'
item2_key2='사건번호'
item2_key3='선고일자'



current_file = os.path.basename(__file__)
current_file = os.path.splitext(current_file)[0]
def down(data):

    file_path = rf"C:\github-nangmanhunter\LinkLibrary\link\조문링크\etc\json\{current_file}.json"  
    with open(file_path, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)
    print(f"JSON 데이터가 {file_path}에 저장되었습니다.")




def downList(data):
    urlList=''
    for item  in data:

        if innerKey in item[outerKey]:
            for item2 in item[outerKey][innerKey]:

                item2[item2_key3]=item2[item2_key3].replace('.','')
                t=f"{item2[item2_key1]}/({item2[item2_key2]},{item2[item2_key3]})"

                t=t.replace('/()','')
                if t=='': 
                    urlList += f""
                else :
                    urlList += f"{t}\n"

    file_path = rf"C:\github-nangmanhunter\LinkLibrary\link\조문링크\res\{current_file}.cList"  
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(urlList)
    print(f"cList 데이터가 {file_path}에 저장되었습니다.")



def createHtml():
    html_content='''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link id="favicon" rel="icon" href="">
    <title></title>

    <link rel="stylesheet" href="css/01Base.css">
    <link rel="stylesheet" href="css/02darkmode.css">
    <link rel="stylesheet" href="css/02darkmode-anchor.css">
    <link rel="stylesheet" href="css/03Main.css">
    
</head>
<body>

    <main id="main">
        <nav id="nav"></nav>
        <section>
            <h1 id="h1"></h1>
            <div id="div"></div>
        </section>
    </main>

    <footer id="footer"></footer>



    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/00Filename.js"></script>
    <script src="js/01Favicon.js"></script>
    <script src="js/02Title.js"></script>
    <script src="js/03Header.js"></script>
    <script src="js/04List.js"></script>
    <script src="js/05Nav.js"></script>
    <script src="js/06Footer.js"></script>
</body>
</html>
'''
    file_path = rf"C:\github-nangmanhunter\LinkLibrary\link\조문링크\res\html\{current_file}.html"  
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(html_content)
    print(f"cList 데이터가 {file_path}에 저장되었습니다.")







dataList=[]
total=0
pageMax=1

urlOrigin=f"https://www.law.go.kr/DRF/lawSearch.do?OC=djwlfdls1&target={target}&curt={curt}&type=JSON&display=100"
url = f"{urlOrigin}&page=1"
response = requests.get(url)
if response.status_code == 200:
    try:
        data = response.json()  
        total=data[outerKey]['totalCnt']
        total=int(total)
        pageMax=total//100+1
    except ValueError:
        print("응답을 JSON으로 변환할 수 없습니다.")
else:
    print(f"오류 발생! 상태 코드: {response.status_code}")




page=1
while(page<=pageMax):
    url = f"{urlOrigin}&page={page}"
    response = requests.get(url)
    
    print(f"page:{page}")

    if response.status_code == 200:
        if response.text: 
            try:
                if response.text!='':
                    data = response.json()  
                    dataList.append(data)
                   
            except ValueError:
                print("응답을 JSON으로 변환할 수 없습니다.")
    else:
        print(f"오류 발생! 상태 코드: {response.status_code}")

    page+=1
    

down(dataList)
downList(dataList)
createHtml()




'''

'''