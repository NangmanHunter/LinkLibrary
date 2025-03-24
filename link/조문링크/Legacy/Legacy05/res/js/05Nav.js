function navFileName(fileName) {
    return fileName.split('.').slice(0, -1).join('.');
}


$.get("res/text/목록", function(data) {
    let d=$(data)
    let s=``;
    d.find('.name').each(function() {
        let t=$(this).text()
        if(t==`..`){ return }
        t=navFileName(t)
        if(t==``){ return }
        
        t=`<a href="${t}.html">${t}</a>`
        s+=`<li>${t}</li>`
    });
    s=`<ul>${s}</ul>`
    $(`#nav`).html(s)
});
