$("h6.iconDesign").click(function(){
    $("p.hideDesign").toggle()
})
$("h6.iconDevelopment").click(function(){
    $("p.hideDevelopment").toggle()
})
$("h6.iconProduct").click(function(){
    $("p.hideProduct").toggle()

    event.preventDefault();
})