L.mapbox.accessToken = 'pk.eyJ1IjoibmFzaXItMTQyNSIsImEiOiJDd3BsWE1zIn0.N3Q9iu6yZ9DLMEaIJFIXJA';
var map = L.mapbox.map('map', 'nasir-1425.lmddb8dk')
          .setView([37.82677954095475, -122.24126815795897], 12);


 var myLayer = L.mapbox.featureLayer().addTo(map);
 var routeLayer = L.mapbox.featureLayer().addTo(map);



myLayer.on('layeradd', function(e) {
  var marker = e.layer;
  var feature = marker.feature;
  marker.setIcon(L.icon(feature.properties.icon));
});



var geojson = [

 {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-122.27302551269531,37.87187229959465]
    },

    "properties": {
      "title": "current-location",
      "icon": {
          "iconUrl": "http://www.gifandgif.eu/animated_gif/Dots/Animated Gif Dots (13).gif",
          "iconSize": [20, 20], // size of the icon
          "iconAnchor": [13, 13], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
      }
    }
  },


  {
     "type": "Feature",
     "geometry": {
         "type": "Point",
         "coordinates": [-122.27302551269531,37.87187229959465]
     },

     "properties": {
       "title": "Berkeley",
       "icon": {
           "iconUrl": "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Marker-Outside-Pink-icon.png",
           "iconSize": [40, 40], // size of the icon
           "iconAnchor": [20, 35], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
     }
   },


   {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates":  [-122.24126815795897,37.76677954095475]
      },

      "properties": {
        "title": "Alameda",
        "icon": {
            "iconUrl": "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Marker-Outside-Pink-icon.png",
            "iconSize": [40, 40], // size of the icon
            "iconAnchor": [25, 35], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
      }
    }

];
myLayer.setGeoJSON(geojson);



var routegeojson = [
  {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
                [-122.27319717407227,37.8709237444089],
                [-122.27219717407227,37.8609237444089],
                [-122.27096557617189,37.851272354889346],
                [-122.27148056030272,37.847477000246386],
                [-122.2701072692871, 37.841919164198416],
                [-122.26907730102539,37.83771661984572],
                [-122.26598739624023,37.83446287267591],
                [-122.26856231689453,37.82415839321614],
                [-122.27062225341797,37.815615431270395],
                [-122.27491378784181,37.81168262440736],
                [-122.27972030639648,37.80503706092163],
                [-122.27989196777344,37.801646236899785],
                [-122.27371215820312,37.79811961477825],
                [-122.26633071899413,37.79527106630204],
                [-122.25997924804688,37.790523241426946],
                [-122.25053787231444,37.78835270558378],
                [-122.24075317382812,37.78441844686463],
                [-122.23783493041991,37.7791272169824],
                [-122.23302841186523,37.77464972662077],
                [-122.24178314208983,37.766643840752764]
      ]
    },

    "properties": {
      "stroke": "#fa946e",
      "stroke-opacity": 1,
      "stroke-width": 6
    }
  }

];
routeLayer.setGeoJSON(routegeojson);



var currentLocation;
var currentLocIndex = 0;

function setNextLocation() {

  //STEP 1 and 2
  currentLocIndex++;

  if(currentLocIndex < routegeojson[0].geometry.coordinates.length){
    //STEP 3
    currentLocation = routegeojson[0].geometry.coordinates[currentLocIndex];

  }

  geojson[0].geometry.coordinates = currentLocation;
  myLayer.setGeoJSON(geojson);

  repeatLocation();

}


setTimeout(function(){

  setNextLocation();



},3000);


//currentLocation.addTo(map);
//setNextLocation();
function repeatLocation(){

  setTimeout(function(){

    setNextLocation();



  },3000);

}
