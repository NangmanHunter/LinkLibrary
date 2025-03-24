function navFileName(fileName) {
    return fileName.split('.').slice(0, -1).join('.');
}


$.get("../..", function(data) {
    let d=$(data)
    let s=``;
    d.find('.name').each(function() {
        let t=$(this).text()
        if(t==`..`){ return }
        t=navFileName(t)
        if(t==``){ return }
        

        let tText=t.replace(/\d{2}/g,``);

        t=`<a href="${t}.html">${tText}</a>`
        s+=`<li>${t}</li>`



    });
    s=`<ul>${s}</ul>`
    $(`#nav`).html(s)
});
