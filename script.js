
const allTitle = document.querySelectorAll('article .title');


allTitle.forEach(function(title){
    title.addEventListener('click', function(){
        //console.log("btn was clicked");

        let content = title.nextElementSibling;
        //console.log(content);

        if(content.style.display !== "block"){
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    })
})