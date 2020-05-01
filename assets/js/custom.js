$(document).ready(function(){
/*================== Sticky-header =====================*/	
	

/*================== File-Upload =====================*/	
//jQuery("div#myId").dropzone({ url: "/file/post" });


	
	});

/*================== Dynamic-height =====================*/		
/* 	
  $(document).ready(function(){
       
        var    dheight = $('html').height(),
            cbody = $('.form-wrapper').height(),
            wheight = $(window).height(),
            cheight = wheight - dheight + cbody;
           
        if (wheight > dheight){
            $('.form-wrapper').height(cheight);
        }
       
        $(window).resize(function(){
            wheight = $(window).height();
            noscroll();
            changepush();
        });

        function noscroll(){
           if (wheight > dheight) {
                $('html').addClass('noscroll');
           }

            else if (wheight <= dheight) {
                $('html').removeClass('noscroll');
            }
           
            else {}

        }

        function changepush(){
           if (wheight > dheight) {
                   $('.form-wrapper').height(wheight-dheight+cbody);
           }
           
        }

});		
 */