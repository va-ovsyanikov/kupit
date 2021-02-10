

$(document).ready(function() {
    
    
    
//    =======rating_reviews=======
    $('.reviews_rating').rating();
//    =============================
    
    
    
    
    
//==========button menu==================
    $('.btn_nav').click(function (){          
        $(this).toggleClass('active');
        $('.device_menu').toggleClass('show_menu'); 
        $('body').toggleClass('body_style'); 

    });
//=============================================


    //   =====================menu mobile============================== 

    $('.sub_menu_btn > a').each(function(){
        $(this).click(function (e){ 
            $(this).next().addClass('sub_menu_show');
            var batton_menu = $('.batton_menu');
            if(batton_menu.is(':visible')){
                $('.batton_menu').hide();
            }else{
                $('.batton_menu').show();   
            }
        });
    });

    $('.sub_menu_sub_btn > a').each(function(){
        $(this).click(function (e){ 
            $(this).next().addClass('sub_menu_sub_show');
        });
    });

    $('.sub_menu_sub_sub_btn > a').each(function(){
        $(this).click(function (e){ 
            $(this).next().addClass('sub_menu_sub_sub_show');
        });
    });





    $('.sub_menu_prev').click(function(){
        $('.sub_menu').removeClass('sub_menu_show');
        $('.batton_menu').show();
    });


    $('.sub_menu_sub_prev').click(function(){
        $('.sub_menu_sub').removeClass('sub_menu_sub_show');
    });


    $('.sub_menu_sub_sub_prev').click(function(){
        $('.sub_menu_sub_sub').removeClass('sub_menu_sub_sub_show');
    });




    $('.sub_menu_close').click(function(){
        $('.btn_nav').removeClass('active');
        $('.batton_menu').show();
        $('.device_menu').removeClass('show_menu'); 
        $('body').removeClass('body_style');
        $('.sub_menu').removeClass('sub_menu_show');
        $('.sub_menu_sub').removeClass('sub_menu_sub_show');
        $('.sub_menu_sub_sub').removeClass('sub_menu_sub_sub_show');

    }); 

    //========================search mobile===============================

    $('.header_midle .search_btn').click(function(){
        var search = $('.header_midle .search_block');
        if(search.is(':hidden')){
            search.show();
        }else{
            search.hide();   
        }
    });
    //=====================================================


    //========================catalog filter===============

    $('.catalog_btn_filter').click(function(){
        $('.catalog_filter').addClass('catalog_filter_show');
        $('body').addClass('body_style');
    });

    $('.catalog_filter_prev').click(function(){
        $('.catalog_filter').removeClass('catalog_filter_show');
        $('body').removeClass('body_style');
    });

    //=====================================================


    //========================catalog filter===============

    $('.catalog_btn_filter').click(function(){
        $('.used_catalog .sidebar').addClass('show_used_catalog');
        $('body').addClass('body_style');
    });

    $('.catalog_filter_prev').click(function(){
        $('.used_catalog .sidebar').removeClass('show_used_catalog');
        $('body').removeClass('body_style');
    });

    //=====================================================


    //    =====================accardion used mobile==========================

    doc_w = $(document).width();
    if(doc_w < 660){
        $( function() {
            $(".used_catalog #accordion").accordion({
                heightStyle: "content",
                collapsible: true,
                active: false,
                icons: {"header": "ui-icon-caret-1-e", "activeHeader": "ui-icon-caret-1-s"}
            });
        });
    }

    //====================================================================






    //    =====================accardion shop mobile==========================

    doc_w = $(document).width();
    if(doc_w < 660){
        $( function() {
            $(".shop_center #accordion").accordion({
                heightStyle: "content",
                collapsible: true,
                active: false,
                icons: {"header": "ui-icon-caret-1-e", "activeHeader": "ui-icon-caret-1-s"}
            });
        });
    }

    //====================================================================



    //    =====================accardion catalog mobile==========================

    doc_w = $(document).width();
    if(doc_w < 660){
        $( function() {
            $(".catalog_filter #accordion").accordion({
                heightStyle: "content",
                collapsible: true,
                active: false
            });
        });
    }

    //    ======================ползунок в каталоге==============
    $('#slider').slider({
        min: 0,
        max: 2000,
        values: [0,2000],
        range: true,
        step: 10,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    })  


    $("input#minCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);	
    });


    $("input#maxCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 2000) { value2 = 2000; $("input#maxCost").val(2000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });


    //    ====================================================================





    //========================catalog h1, used  dropdown mobile===============

    if(doc_w < 480){
        $('.catalog_name h1').click(function(){
            $('.catalog_dropdown').slideToggle();
            $('.catalog_name .catalog_arrow').toggleClass('active');
        });
    }
    //=====================================================




    //======================modall login===================

    $( "#login_tabs" ).tabs();

    $( ".form-item > input" ).focusin(function() {
        if($(this).parents(".form-item").hasClass("active")){
            $(this).parents(".form-item").removeClass("active");
        }
        else{
            $(this).parents(".form-item").addClass("active");
        }
    });

    $( ".form-item > input" ).focusout(function() {
        if($(this).parents(".form-item").hasClass("active")){
            $(this).parents(".form-item").removeClass("active");
        }
        else{
            $(this).parents(".form-item").addClass("active");
        }
    });

    $( ".remember_me input" ).click(function() {
        if($(this).parents(".remember_me").hasClass("active")){
            $(this).parents(".remember_me").removeClass("active");
        }
        else{
            $(this).parents(".remember_me").addClass("active");
        }
    });




    
        $(".openfield" ).click(function() {     
            if($(this).hasClass("active")){
                var m = $(this).prevAll("input[type=text]").val();
                $(this).prevAll("input[type=password]").val(m) ;                                       
                $(this).removeClass("active");
                $(this).prevAll("input[type=text]").css('display', 'none')
                $(this).prevAll("input[type=password]").css('display', 'block')
            }
            else{
                $(this).addClass("active");                                        
                var m = $(this).prevAll("input[type=password]").val();
                $(this).prevAll("input[type=text]").val(m) ; 
                $(this).prevAll("input[type=text]").css('display', 'block') 
                $(this).prevAll("input[type=password]").css('display', 'none')
    
    
            }
        });



    $('.header_top .user_block a, .user_entry').click(function(){
        $('#login').show();
    });


    $('.modall .modallclose').click(function(){
        $('#login').hide();
    });
    //===============================================================


    //========================search mobile===============================

    $('.shop_graph_working > p').click(function(){
        var shop_working = $('.shop_graph_working_content');
        $(this).toggleClass('active');
        if(shop_working.is(':hidden')){
            shop_working.show();
        }else{
            shop_working.hide();   
        }
    });
    //=====================================================




    $('.shop_phone').click(function(){
        $('.shop_phone_content').show(); 
    });




    $(".arrow_back").click(function (){       
        $(this).parent("div").parent("div").parent("div").parent("li").removeClass("active");
        $(this).parent("div").parent("div").parent("li").removeClass("active");                    
    });

    $(".device_menu .wrapp_menu ul li a").click(function (){     
        if($(this).parents("li").hasClass("haschild")){
            event.preventDefault();   
            $(this).parents("li").addClass("active");
        }  
        else{

        }      
    });

    $(".sub_menu ul li a").click(function (){
        $(this).parent("li").addClass("active");

    });
    $(".prev_link").click(function (){
        $(".sub_menu ul li").removeClass("active");         
    });
    $( ".sub_sub_main" ).hover(
        function() {

        }, function() {
            $(".sub_menu ul li").removeClass("active"); 
        }
    );





    /*******************************************/
    $(".catalog_sort > p").click(function (){        
        if($(this).hasClass("active")){
            $(".selector_sort").removeClass('open');
            $(this).removeClass("active");
        }  
        else{
            $(".selector_sort").addClass('open');
            $(this).addClass("active");
        }      
    });
    $(".selector_sort ul li").click(function (){
        var text = $(this).children("p").children("span").text();
        $(".selector_sort").removeClass('open');        
        $(".selector_sort ul li").removeClass("active");
        $(this).addClass("active");
        $(".catalog_sort > p > span").text(text);
        $(".catalog_sort > p").removeClass("active");
    });
    /*******************************************/
    $(".more_products .right").click(function (){        
        if($(this).hasClass("active")){
            $(".selector_paginator").removeClass('open');
            $(this).removeClass("active");
        }  
        else{
            $(".selector_paginator").addClass('open');
            $(this).addClass("active");
        }      
    });
    $(".selector_paginator ul li").click(function (){
        var text = $(this).children("p").children("span").text();
        $(".selector_paginator").removeClass('open');        
        $(".selector_paginator ul li").removeClass("active");
        $(this).addClass("active");
        $(".catalog_paginator > p > span").text(text);
        $(".catalog_paginator > p").removeClass("active");
    });
    /*******************************************/


    //======================modall search===================

    $(".clean_form").click(function (){                                        
        $(this).prevAll("input").val("");    
        document.getElementById("modalsearch").focus();                                     
    });   


    $("#search_tabs").tabs({
        show:{effect:"fade",duration:300},
        hide:{effect:"fade",duration:300},
        create:function(e,ui){
        }
    });
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });



    //    =============== product modal window============
    $('.page_products_more > p').click(function(){
        $('#choices_product').show();
        $('body').addClass('body_style'); 

    });
    $('.modall .modallclose').click(function(){
        $('#choices_product').hide();
        $('body').removeClass('body_style');
    });
    //    ====================================================


    //================show search modal==================
    $('.search_block form .form-item input').focus(function(){
        $('#modal_search').show();
        $('body').addClass('body_style'); 
    });

    $('.modall .modallclose').click(function(){
        $('#modal_search').hide();
        $('body').removeClass('body_style');
    });

    $('.modallclose_mobile').click(function(){
        $('#modal_search').hide();
        $('body').removeClass('body_style');
    });
    //   ===================================================== 




    //========================================================
    $('.all_offers .colum_3 a.in_contact, .best_offers .in_contact').each(function(){

        $(this).click(function(){
            var product_contacts = $(this).next();
            if(product_contacts.is(':hidden')){
                product_contacts.show();
            }else {
                product_contacts.hide();   
            }
        });
    });
    //==============================================================




    //    ====================shop button============

    $('.shop_no').hover(
        function(){
            $('.shop_no_count').show();
            $('.shop_yes_count').hide();
        },
        function(){
            $('.shop_no_count').hide();
            $('.shop_yes_count').show();
        });

    //    ==========================================









    /*******************************************/
    $(".filter_selector > p").click(function (){        
        if($(this).hasClass("active")){
            $(this).nextAll(".filter_selector_list").removeClass('open');
            $(this).removeClass("active");
        }  
        else{
            $(this).nextAll(".filter_selector_list").addClass('open');
            $(this).addClass("active");
        }      
    });
    $(".filter_selector_list ul li").click(function (){
        var text = $(this).children("p").children("span").text();
        $(this).parents(".filter_selector_list").removeClass('open');        
        $(".filter_selector_list ul li").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".filter_selector_list").prevAll("p").children("span").text(text);
        $(".filter_selector > p").removeClass("active");
    });

    /*******************************************/
    $(".button_filter button").click(function (){
        $(".button_filter button").removeClass("active");
        $(this).addClass("active");
    });
    /*******************************************/
    $(".show_more").click(function (){
        var height = $(this).prevAll(".chekbox_filter").children(".items_wrapp").height(); 
        var height2 = $(this).prevAll(".color_chekbox_filter").children(".items_wrapp").height();                
        $(this).prevAll(".chekbox_filter").animate({"max-height": height}, 500 );
        $(this).prevAll(".color_chekbox_filter").animate({"max-height": height2}, 500 );
        $(this).css("display", "none");

    });

    /*******************************************/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    /*******************************************/
}); 

$(document).ready(function() {
    $("a.conf").click(function (){
        $("#conf").css("display", "block");        
    });
});