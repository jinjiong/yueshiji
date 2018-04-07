$(function(){
    var first = 0;
    var t_first=0;
    $('#dowebok').fullpage({
        'navigation': true,
        'afterRender':function(){
            $('body').show();
            var swiper = new Swiper('.container_1', {
                pagination: '.container_1 .swiper-pagination',
                loop: true,
                paginationClickable: true
                // effect: 'fade'
            })
            if ($(window).width()<1024) {
                var swiper_2 = new Swiper('.container_2', {
                    pagination: '.container_2 .swiper-pagination',
                    paginationClickable: true,
                    loop: true
                    // autoplay: 3000
                });
            }
            


             if ($(window).width()<768) {
                var swiper_3 = new Swiper('.container_3', {
                    pagination: '.container_3 .swiper-pagination',
                    paginationClickable: true,
                    slidesPerView: 1,
                    spaceBetween: 40
                    // autoplay: 2500,
                });
                $('.tab-box span').click(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                    var index = $(this).index();
                    $('.all-news .tab-news').eq(index).addClass('active').siblings().removeClass('active');
                    if (t_first==0) {
                         var swiper_4 = new Swiper('.container_4', {
                            pagination: '.container_4 .swiper-pagination',
                            paginationClickable: true,
                            slidesPerView:1,
                            spaceBetween: 40
                        });
                         t_first=1;
                    }
                   
                })
             }else{
                var swiper_3 = new Swiper('.container_3', {
                    pagination: '.container_3 .swiper-pagination',
                    paginationClickable: true,
                    slidesPerView: 3,
                    spaceBetween: 40
                    // autoplay: 2500,
                });
                $('.tab-box span').click(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                    var index = $(this).index();
                    $('.all-news .tab-news').eq(index).addClass('active').siblings().removeClass('active');
                    var swiper_4 = new Swiper('.container_4', {
                        pagination: '.container_4.swiper-pagination',
                        paginationClickable: true,
                        slidesPerView: 3,
                        spaceBetween: 40
                    });
                })
            }
            app();

        },
        'afterLoad':function(index,nextIndex,direction){
                if (nextIndex==4) {
                    if (first==0) {
                        if ($(window).width()>1024) {
                            var swiper_2 = new Swiper('.container_2', {
                                pagination: '.container_2 .swiper-pagination',
                                paginationClickable: true,
                                autoplay: 3500,
                                loop: true
                            });
                            
                        }
                        
                        first =1;
                    }
                    
                }
            
        },
        'scrollingSpeed':500
    });
});
$(document).ready(function() {
  $('.drawer').drawer();
});
$('#scene').parallax();