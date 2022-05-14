
$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if(y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
