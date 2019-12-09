

$("img.iconDesign").click(function(){
    $("p.hideDesign").toggle()
    $("img.iconDesign").hide()

})

$("p.hideDesign").click(function(){
    $("img.iconDesign").show();
    $("p.hideDesign").hide()
})
$("img.iconDevelopment").click(function(){
    $("p.hideDevelopment").toggle()
    $("img.iconDevelopment").hide()
})
$("p.hideDevelopment").click(function(){
    $("img.iconDevelopment").show();
    $("p.hideDevelopment").hide()
})
$("img.iconProduct").click(function(){
    $("p.hideProduct").toggle();
    $("img.iconProduct").hide()
})
$("p.hideProduct").click(function(){
    $("img.iconProduct").show();
    $("p.hideProduct").hide()
})

    $("form.news").submit(function(){
        alert("We have received your message and thankyou for contacting us ")
   

    
})
