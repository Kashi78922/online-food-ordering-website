const mobile=document.querySelector('menu-toggle');
const mobileLink=document.querySelector('.sidebar');
mobile.addEventListener("click",function(){
    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');
    
})

mobile.addEventListener("click",function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 &&menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle('active');
    
    }
})

varstop=100;
var stopFilter=60;
var scrolling=true;
$(".back").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"-=" + step+"px"
    });
});
$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"+=" + step+"px"
    })
})

(".back-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"-=" + stepFilter+"px"
    })
});
(".next-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"+=" + stepFilter+"px"
    })
})