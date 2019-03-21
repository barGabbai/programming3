var afula = new google.maps.LatLng(32.613694, 35.288597);
var negev = new google.maps.LatLng(31.509624, 34.594491);
var efrat = new google.maps.LatLng(31.653772, 35.149955);
var aco = new google.maps.LatLng(32.931828, 35.074868);
var yokneam = new google.maps.LatLng(32.655756, 35.103909);
var tirat = new google.maps.LatLng(32.759003, 34.974669);
var rishon = new google.maps.LatLng(31.961561, 34.796747);
var netanya = new google.maps.LatLng(32.329199, 34.855069);
var jerusalem = new google.maps.LatLng(31.782376, 35.224532);
var beerSheva = new google.maps.LatLng(31.251381, 34.801676);
var beitJan = new google.maps.LatLng(32.966471, 35.379108);
var eilat = new google.maps.LatLng(29.552454, 34.952009);
var hedera = new google.maps.LatLng(32.440673, 34.917905);
var pardesHana = new google.maps.LatLng(32.474405, 34.987621);
var holon = new google.maps.LatLng(32.023000, 34.779605);
var bneiShimon = new google.maps.LatLng(31.353014, 34.788727);
var umElFahem = new google.maps.LatLng(32.517642, 35.150778);
var rehovot = new google.maps.LatLng(31.895197, 34.803995);

function initMap() {


    var mapOptions = {
        center: negev,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: afula,
        animation: google.maps.Animation.DROP

    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "חטיבה תשע 15, עפולה<br/>04-6484284"
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker);
    }); 

    google.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close(map, marker);
    });


    var marker2 = new google.maps.Marker({
        position: negev,
        animation: google.maps.Animation.DROP

    });

    marker2.setMap(map);


    var infowindow2 = new google.maps.InfoWindow({
        content: "מכללת ספיר, שער הנגב<br/>052-2298136"
    });

    google.maps.event.addListener(marker2, 'mouseover', function () {
        infowindow2.open(map, marker2);
    });

    google.maps.event.addListener(marker2, 'mouseout', function () {
        infowindow2.close(map, marker2);
    });



    var marker3 = new google.maps.Marker({
        position: efrat,
        animation: google.maps.Animation.DROP

    });

    marker3.setMap(map);



    var infowindow3 = new google.maps.InfoWindow({
        content: "פיטום הקטורת 1 ב', אפרת<br/>054-7230075"
    });

    google.maps.event.addListener(marker3, 'mouseover', function () {
        infowindow3.open(map, marker3);
    });

    google.maps.event.addListener(marker3, 'mouseout', function () {
        infowindow3.close(map, marker3);
    });


    var marker4 = new google.maps.Marker({
        position: aco,
        animation: google.maps.Animation.DROP

    });

    marker4.setMap(map);


    var infowindow4 = new google.maps.InfoWindow({
        content: "הרצוג 9, עכו<br/>04-9917477"
    });

    google.maps.event.addListener(marker4, 'mouseover', function () {
        infowindow4.open(map, marker4);
    });

    google.maps.event.addListener(marker4, 'mouseout', function () {
        infowindow4.close(map, marker4);
    });


    var marker5 = new google.maps.Marker({
        position: yokneam,
        animation: google.maps.Animation.DROP

    });

    marker5.setMap(map);


    var infowindow5 = new google.maps.InfoWindow({
        content: "הצאלים 1, יוקנעם<br/>04-9591236"
    });

    google.maps.event.addListener(marker5, 'mouseover', function () {
        infowindow5.open(map, marker5);
    });

    google.maps.event.addListener(marker5, 'mouseout', function () {
        infowindow5.close(map, marker5);
    });


    var marker6 = new google.maps.Marker({
        position: tirat,
        animation: google.maps.Animation.DROP

    });

    marker6.setMap(map);


    var infowindow6 = new google.maps.InfoWindow({
        content: "עזרא לניארדו 1, טירת כרמל<br/>04-8581406"
    });

    google.maps.event.addListener(marker6, 'mouseover', function () {
        infowindow6.open(map, marker6);
    });

    google.maps.event.addListener(marker6, 'mouseout', function () {
        infowindow6.close(map, marker6);
    });


    var marker7 = new google.maps.Marker({
        position: rishon,
        animation: google.maps.Animation.DROP

    });

    marker7.setMap(map);

    var infowindow7 = new google.maps.InfoWindow({
        content: "יבניאלי 4, ראשון לציון<br/>03-6042598"
    });

    google.maps.event.addListener(marker7, 'mouseover', function () {
        infowindow7.open(map, marker7);
    });

    google.maps.event.addListener(marker7, 'mouseout', function () {
        infowindow7.close(map, marker7);
    });

    var marker8 = new google.maps.Marker({
        position: netanya,
        animation: google.maps.Animation.DROP

    });

    marker8.setMap(map);


    var infowindow8 = new google.maps.InfoWindow({
        content: "שטמפפר 4, נתניה,<br/>09-8321460"
    });

    google.maps.event.addListener(marker8, 'mouseover', function () {
        infowindow8.open(map, marker8);
    });

    google.maps.event.addListener(marker8, 'mouseout', function () {
        infowindow8.close(map, marker8);
    });


    var marker9 = new google.maps.Marker({
        position: jerusalem,
        animation: google.maps.Animation.DROP

    });

    marker9.setMap(map);


    var infowindow9 = new google.maps.InfoWindow({
        content: "שבטי ישראל 22, ירושלים<br/>*8162"
    });

    google.maps.event.addListener(marker9, 'mouseover', function () {
        infowindow9.open(map, marker9);
    });

    google.maps.event.addListener(marker9, 'mouseout', function () {
        infowindow9.close(map, marker9);
    });


    var marker10 = new google.maps.Marker({
        position: beerSheva,
        animation: google.maps.Animation.DROP

    });

    marker10.setMap(map);


    var infowindow10 = new google.maps.InfoWindow({
        content: "השלום 16, באר שבע<br/>08-6650840"
    });

    google.maps.event.addListener(marker10, 'mouseover', function () {
        infowindow10.open(map, marker10);
    });

    google.maps.event.addListener(marker10, 'mouseout', function () {
        infowindow10.close(map, marker10);
    });


    var marker11 = new google.maps.Marker({
        position: beitJan,
        animation: google.maps.Animation.DROP

    });

    marker11.setMap(map);


    var infowindow11 = new google.maps.InfoWindow({
        content: "בניין מועצה מקומית, בית ג'ן<br/>052-9252808"
    });

    google.maps.event.addListener(marker11, 'mouseover', function () {
        infowindow11.open(map, marker11);
    });

    google.maps.event.addListener(marker11, 'mouseout', function () {
        infowindow11.close(map, marker11);
    });


    var marker12 = new google.maps.Marker({
        position: eilat,
        animation: google.maps.Animation.DROP

    });

    marker12.setMap(map);


    var infowindow12 = new google.maps.InfoWindow({
        content: "דרך יותם 4, אילת<br/>054-8169529"
    });

    google.maps.event.addListener(marker12, 'mouseover', function () {
        infowindow12.open(map, marker12);
    });

    google.maps.event.addListener(marker12, 'mouseout', function () {
        infowindow12.close(map, marker12);
    });


    var marker13 = new google.maps.Marker({
        position: hedera,
        animation: google.maps.Animation.DROP

    });

    marker13.setMap(map);


    var infowindow13 = new google.maps.InfoWindow({
        content: "הנשיא 15, חדרה<br/>04-6331787"
    });

    google.maps.event.addListener(marker13, 'mouseover', function () {
        infowindow13.open(map, marker13);
    });

    google.maps.event.addListener(marker13, 'mouseout', function () {
        infowindow13.close(map, marker13);
    });


    var marker14 = new google.maps.Marker({
        position: pardesHana,
        animation: google.maps.Animation.DROP

    });

    marker14.setMap(map);


    var infowindow14 = new google.maps.InfoWindow({
        content: "כורש 7, פרס חנה-כרכור<br/>077-5524074"
    });

    google.maps.event.addListener(marker14, 'mouseover', function () {
        infowindow14.open(map, marker14);
    });

    google.maps.event.addListener(marker14, 'mouseout', function () {
        infowindow14.close(map, marker14);
    });


    var marker15 = new google.maps.Marker({
        position: holon,
        animation: google.maps.Animation.DROP

    });

    marker15.setMap(map);


    var infowindow15 = new google.maps.InfoWindow({
        content: "אליעזר בן יהודה 18, קומה 4, חולון<br/>03-6366090"
    });

    google.maps.event.addListener(marker15, 'mouseover', function () {
        infowindow15.open(map, marker15);
    });

    google.maps.event.addListener(marker15, 'mouseout', function () {
        infowindow15.close(map, marker15);
    });


    var marker16 = new google.maps.Marker({
        position: bneiShimon,
        animation: google.maps.Animation.DROP

    });

    marker16.setMap(map);


    var infowindow16 = new google.maps.InfoWindow({
        content: "מועצה אזורית בני שמעון"
    });

    google.maps.event.addListener(marker16, 'mouseover', function () {
        infowindow16.open(map, marker16);
    });

    google.maps.event.addListener(marker16, 'mouseout', function () {
        infowindow16.close(map, marker16);
    });


    var marker17 = new google.maps.Marker({
        position: umElFahem,
        animation: google.maps.Animation.DROP

    });

    marker17.setMap(map);


    var infowindow17 = new google.maps.InfoWindow({
        content: "מרכז ריאן, שכונת אלדהר, אום אל פחם<br/>04-7703250"
    });

    google.maps.event.addListener(marker17, 'mouseover', function () {
        infowindow17.open(map, marker17);
    });

    google.maps.event.addListener(marker17, 'mouseout', function () {
        infowindow17.close(map, marker17);
    });


    var marker18 = new google.maps.Marker({
        position: rehovot,
        animation: google.maps.Animation.DROP

    });

    marker18.setMap(map);

    var infowindow18 = new google.maps.InfoWindow({
        content: "רמז 80, רחובות<br/>08-9314806"
    });

    google.maps.event.addListener(marker18, 'mouseover', function () {
        infowindow18.open(map, marker18);
    });

    google.maps.event.addListener(marker18, 'mouseout', function () {
        infowindow18.close(map, marker18);
    });


}
google.maps.event.addDomListener(window, 'load', initMap);
