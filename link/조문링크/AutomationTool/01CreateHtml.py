def readerHtml():
    htmlForm_path=r"C:\github-nangmanhunter\LinkLibrary\link\조문링크\AutomationTool\00HtmlForm.html"
    with open(htmlForm_path, "r", encoding="utf-8") as file:
        html = file.read()
        print(".html 읽어오기")
    return html


def createHtml(html,fileName):
    html_content=html
    file_path = rf"C:\github-nangmanhunter\LinkLibrary\link\조문링크\res\html\{fileName}.html"  
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(html_content)
    print(f".html이 {file_path}에 생성되었습니다.")


fileExtension=".cList"
def fileList():
    import os
    folder_path = r"C:\github-nangmanhunter\LinkLibrary\link\조문링크\res"
    fileList = os.listdir(folder_path)
    fileList= [file for file in fileList if file.endswith(fileExtension)]
    fileList= [file.replace(fileExtension, "") for file in fileList]
    return fileList




html = readerHtml()
fileList=fileList()
for fileName in fileList:
    createHtml(html,fileName)








