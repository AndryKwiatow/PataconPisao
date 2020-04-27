const foods = [
    {
        image: 'assets/images/pescadomediterraneo.png',
        name: 'Pescado Mediterraneo',
        price: 14000,
        description: 'Nuestra especialidad, pescado Mediterraneo. con especias y sabores unicos que lo hacen algo diferente.'
    },
    {
        image: 'assets/images/carne.png',
        name: 'Carne Argentina',
        price: 9000,
        description: 'Delicioso churrasco Argentino, con receta de la casa.'
    },
    {
        image: 'assets/images/pasta.png',
        name: 'Pasta Italiana',
        price: 12000,
        description: 'La especialidad espaquetis con verduras frescas y sason Italiano.'
    },
    {
        image: 'assets/images/bedidas.png',
        name: 'Malteadas',
        price: 10500,
        description: 'Deliciosas Malteadas de frutas frescas y mezcla de sabores divertidos.'
    },
    {
        image: 'assets/images/cervezas.png',
        name: 'Cervezas',
        price: 8500,
        description: 'Cervezas importadas y naciones de las mejores marcas.'
    },
    {
        image: 'assets/images/vinos.png',
        name: 'Vinos',
        price: 30500,
        description: 'Vinos de las mejores paises y de gran variedad, para acompañar las comidas.'
    }
];
var order = [];

function Mask(value){
    console.log(value);
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
(function($) {
    "use strict";
    jQuery(document).ready(function() {
        // Navigation for Mobile Device
        $('.custom-navbar').on('click', function(){
            $('.main-menu ul').slideToggle(500);
        });
        $(window).on('resize', function(){
            if ( $(window).width() > 767 ) {
                $('.main-menu ul').removeAttr('style');
            }
        });

        // Employee Slider
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // Nice Select
        $('select').niceSelect();

        // Date Picker
        jQuery('#datepicker').datetimepicker({
            timepicker:false,
            format:'d.m.Y',
        });

        // Time Picker
        jQuery('#datepicker2').datetimepicker({
            datepicker:false,
            format:'H:i'
        });

        // Google Map
        if ( $('#mapBox').length ){
            var $lat = $('#mapBox').data('lat');
            var $lon = $('#mapBox').data('lon');
            var $zoom = $('#mapBox').data('zoom');
            var $marker = $('#mapBox').data('marker');
            var $info = $('#mapBox').data('info');
            var $markerLat = $('#mapBox').data('mlat');
            var $markerLon = $('#mapBox').data('mlon');
            var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "color": "#808080"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": 1.8
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d7d7d7"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ebebeb"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#a7a7a7"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#efefef"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#696969"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#737373"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    }
                ]
            });
        }

        foods.map((item, index) => {
            $('#menu-list').append(`
                <div class="food-card col-md-4 my-3 col-sm-6">
                    <div class="single-food">
                        <div class="food-img">
                            <img src="${item.image}" class="img-fluid" alt="">
                        </div>
                        <div class="food-content">
                            <div class="d-flex justify-content-between">
                                <h5>${item.name}</h5>
                                <span class="style-change">$${Mask(item.price.toString())}</span>
                            </div>
                            <p class="pt-3">${item.description}</p>
                        </div>
                        <button type="button" onclick="savePurchase(${index}, this)" class="btn btn-secondary w-100">Comprar</button>
                    </div>
                </div>
            `)
        })

    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
		$('.preloader').fadeOut(500);
    });
})(jQuery);

function isVisible($el) {
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elTop = $el.offset().top;
    var elBottom = elTop + $el.height();
    return ((winBottom <= elBottom) && (winTop >= elTop));
}

function savePurchase(index, element){
    let prev = parseInt(jQuery('#items').text());
    let current = prev + 1;
    $('#items').text(current);
    jQuery(element).removeClass('btn-secondary');
    jQuery(element).addClass('btn-primary');

    order.push(foods[index])
}

function showSell(){
    $('#sellingProducts').empty();
    $('#sellingTotal').empty();
    var menuBottom = $('.header-area').innerHeight();
    $('#sellingDetail').css("top", menuBottom);
    $('#sellingDetail').show();

    let subtotal = 0;
    let vat; 
    let total;
    order.map((item) => {
        subtotal+= item.price;
        console.log(subtotal)
        $('#sellingProducts').append(`
        <div class="col-12 my-3 pl-5">
            <div class="col d-inline">
                <img src="${item.image}" width="120" height="120" class="img-fluid" alt="">
            </div>
            <div class="col-5 d-inline-block">
                    <h5>${item.name}</h5>
                </div>
            <div class="col-4 d-inline-block text-right">
                <span class="style-change">$${Mask(item.price.toString())}</span>
            </div>
        </div>
        <hr class="w-75">
        `)
    });

    vat = Math.round(subtotal * 0.19);
    total = subtotal + vat;

    $('#sellingTotal').append(`
        <div class="col-8"></div>
        <div class="col-3 my-3 mr-4 text-right">
            <h6 class="text-secondary">Subtotal: ${Mask(subtotal.toString())}</h6>
            <h6 class="text-secondary">IVA: ${Mask(vat.toString())}</h6>
            <h5 class="text-primary">Total: ${Mask(total.toString())}</h5>
        </div>
    `)
}

function closeCart(){
    $('#sellingDetail').hide();
}