ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [34.869497, -111.760186],
            zoom: 9.3,
            controls: ['fullscreenControl', 'zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

        }, {
            iconLayout: 'default#image',
            iconImageHref: '',
            iconImageSize: [80, 104],
            iconImageOffset: [-30, -68]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([34.869497, -111.760186], {

        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/icon-map-marker.svg',
            iconImageSize: [27, 27],
            iconImageOffset: [-20, 0],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
