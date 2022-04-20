

;(function($){
	$(function(){
       
        if( $("div.property-price-info").length){


                var sliderElement = $("#pricingRange");
                var handle = $( "#custom-handle" );
                var netPrice = $("#netPrice");

                var progresSliderElement = $("#progressRange");
                var progressRangehandle = $("#progressRangehandle");

            // Traditional Agent Commission slider function
            $(function() {
                progresSliderElement.slider({
                      range: "min",
                      step: .25,
                      min: 0,
                      max: 10,
                      value: 7,
                      create: function() {
                          progressRangehandle.text( progresSliderElement.slider( "value") + "%" );

                      },
                      slide: function( event, ui ) {
                        progressRangehandle.text( ui.value + "%");
                      },
                    change: function(){
                        var propertyPrice = $("#pricingRange").slider("value")
                        var tacPrcnt = $("#progressRange").slider( "value") / 100
                        var taCommission = tacPrcnt  * propertyPrice
                        var pfcPrcnt = 1.5 / 100
                        var pfCommision = pfcPrcnt * propertyPrice
                        var savePrice = Math.floor(taCommission -  pfCommision)
                        
                        netPrice.text( "R" +  addCommas(savePrice))
                        
                    }
                });
       
                // Property price slider                 
                sliderElement.slider({
                    range: "max",
                    step: 50000,
                    min: 1000000,
                    max: 10000000,
                    value: 1000000,
                    create: function() {
                      handle.text("R" + addCommas(sliderElement.slider( "value" )) );

                    },
                    slide: function( event, ui ) {

                    //$("#minRange").text( "R" + addCommas(ui.value) );
                    handle.text( "R" + addCommas(ui.value) );
                        
                        
                        
                        
                        
                          
                       /* var handle = $( '.ui-slider-handle' ),
                            handleWidth = handle.width(),
                            position = handle.position(),
                            marginLeft;

                        handle.text(ui.value + ' years');
                        if(ui.value == 4)
                        marginLeft = -handleWidth/2-10;
                        else if(ui.value == 5)
                        marginLeft = -handleWidth-20;
                        else
                        marginLeft = 0;
                        handle.css('margin-left',marginLeft+'px');
                        
                        */
                        


                    },
                    change: function(){
                        var propertyPrice = $("#pricingRange").slider("value")
                        var tacPrcnt = $("#progressRange").slider( "value") / 100
                        var taCommission = tacPrcnt  * propertyPrice
                        var pfcPrcnt = 1.5 / 100
                        var pfCommision = pfcPrcnt * propertyPrice
        
                        var savePrice = Math.floor(taCommission -  pfCommision)
                        netPrice.text( "R" +  addCommas(savePrice))
                        
                    }
                });
                //$("#minRange").text("R" + addCommas(sliderElement.slider("value")) ); 
                $("#minRange").text("R" + addCommas(sliderElement.slider("value")) ); 
                
                
                var propertyPrice = $("#pricingRange").slider("value")
                var tacPrcnt = $("#progressRange").slider( "value") / 100
                var taCommission = tacPrcnt  * propertyPrice
                var pfcPrcnt = 1.5 / 100
                var pfCommision = pfcPrcnt * propertyPrice

                var savePrice = Math.floor(taCommission -  pfCommision)
                netPrice.text( "R" +  addCommas(savePrice))

                // Create thousand separator coma
                function addCommas(nStr){
                    nStr += '';
                    x = nStr.split('.');
                    x1 = x[0];
                    x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1)) {
                        x1 = x1.replace(rgx, '$1' + ',' + '$2');
                    }
                    return x1 + x2;
                }
                
            });

        }




	})// End ready function.
    
})(jQuery)
