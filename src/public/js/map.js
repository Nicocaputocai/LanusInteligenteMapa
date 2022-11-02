window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.geometry.type != "Polygon") {
  return layer.bindPopup(
    `<h3>${feature.properties.name}</h3><span>Dirección: ${feature.properties.address} ${feature.properties.height}</span>`
  );
 }else if (feature.properties && feature.geometry.type == "Polygon"){
  return layer.bindPopup(
    `<h3>${feature.properties.name}</h3><span>Dirección: ${feature.properties.address}</span>`
  )
 }
}


// var quilmes = L.marker([-34.730302,  -58.268868]).bindPopup('This is Quilmes, CO.'),
//     lomas    = L.marker([-34.7572582, -58.4026638]).bindPopup('This is Lomas, CO.'),
//     avellaneda    = L.marker([-34.6648394, -58.3628061]).bindPopup('This is Avellaneda, CO.')

let polygon_lanus_url = "/data/division_politica.geojson";
let districts_url = "/data/barrios.geojson";
let electorals_circuit_url = "/data/circuitos_electorales.geojson";
let locations_url = "/data/localidades.geojson";
let club_url = "/data/club.geojson";
let education_url ="/data/education.geojson";
let health_url = "/data/health.geojson";
let security_url = "/data/security.geojson";
let transport_url ="/data/transport.geojson";
let municipal_dependence_url ="/data/municipalDep.geojson";
let square_park_url = "/data/square&Park.geojson"

//Si deja de funcionar probar con esto
// async function setMap(healthData) {

async function setMap(arr) {
  //let loader = `<div class="loader-wrapper"></div>`;
  //document.getElementById("map").innerHTML = loader;
  var map = L.map("map", {
    center: [-34.7033363, -58.3953235],
    zoom: 13,
	"tap": false
  });

  var healthIconProvincial = new L.icon({
    iconUrl: "/img/Hospitales.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  var healthIconMunicipal = new L.icon({
    iconUrl: "/img/Centros_de_salud.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  var healthIconPrivate = new L.icon({
    iconUrl: "/img/Clinica_privada.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  var policeIcon = new L.icon({
    iconUrl: "/img/police.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  var bombersIcon = new L.icon({
    iconUrl: "/img/bomber.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  
    var justiceIcon = new L.icon({
    iconUrl: "/img/justice.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
	
	var busIcon = new L.icon({
    iconUrl: "/img/bus.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
	
	var trainIcon = new L.icon({
    iconUrl: "/img/train.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  var districtClubIcon = new L.icon({
    iconUrl: "/img/districtClub.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  var StadiumIcon = new L.icon({
    iconUrl: "/img/stadium.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  var headOfficeIcon = new L.icon({
    iconUrl: "/img/headOffice.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var municipalDependenceIcon = new L.icon({
    iconUrl: "/img/municipalDependence2.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })
  

  var privateOtherEducationIcon = new L.icon({
    iconUrl: "/img/otherEducationPublic.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var publicOtherEducationIcon = new L.icon({
    iconUrl: "/img/otherEducationPrivate.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var privateInitialEducationIcon = new L.icon({
    iconUrl: "/img/privateInitialEducation.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })


  var privatePrimarySchoolIcon = new L.icon({
    iconUrl: "/img/privatePrimarySchool.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var privateHightSchoolIcon = new L.icon({
    iconUrl: "/img/privateHightSchool.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var privateTecnicalSchoolIcon = new L.icon({
    iconUrl: "/img/privateTecnicalSchool.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var privateUniversityIcon = new L.icon({
    iconUrl: "/img/privateUniversity.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var publicInitialEducationIcon = new L.icon({
    iconUrl: "/img/publicInitialEducation.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var publicPrimarySchoolIcon = new L.icon({
    iconUrl: "/img/publicPrimarySchool.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var publicHightSchoolIcon = new L.icon({
    iconUrl: "/img/publicHightSchool.svg",
    iconSize: [80, 40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  
  var publicTecnicalSchoolIcon = new L.icon({
    iconUrl: "/img/publicTecnicalSchool.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var publicUniversityIcon = new L.icon({
    iconUrl: "/img/publicUniversity.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  var squareAndParkIcon = new L.icon({
    iconUrl: "/img/square&Park.svg",
    iconSize: [80, 50],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

  L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = '/img/Logo completo.png';
        img.style.width = '200px';

        return img;
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map);



  L.tileLayer(
    // "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", // Mapbox
    // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', Open Street map pelado
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key={accessToken}', // Stadia Map
    {
      attribution:
        'Map &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, Diseño &copy <a href="https://maiken.com.ar/" target="_blank"> Maiken </a>, Desarrollo &copy <a href="https://www.divisioncode.net.ar/" target="_blank"> The Division Code </a> & &copy <a href="https://desarrolloi.org/" target="_blank"> Desarrollo i </a>',
      maxZoom: 19,
      minZoom: 12,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "sk.eyJ1Ijoibmljb2NhcHV0b2NhaSIsImEiOiJja3RhazVpbzcwMzJhMndvNmZpNGJtbWhrIn0.YV17IMSMs1UQFzyqqhRIdA",
      // accessToken:
      //   "sk.eyJ1Ijoibmljb2NhcHV0b2NhaSIsImEiOiJja3RhazVpbzcwMzJhMndvNmZpNGJtbWhrIn0.YV17IMSMs1UQFzyqqhRIdA",
    }
  ).addTo(map);
  var fClub = fetch(club_url);
  var fEducation = fetch(education_url);
  var fHealth = fetch(health_url);
  var fSecurity = fetch(security_url);
  var fTransport = fetch(transport_url);
  var fPolygonLanus = fetch(polygon_lanus_url);
  var fDistricts = fetch(districts_url);
  var fCircuit = fetch(electorals_circuit_url);
  var fLocations = fetch(locations_url);
  var fMunicDep = fetch(municipal_dependence_url);
  var fsquarePark = fetch(square_park_url)

  var arr = Promise.all([
    fClub,
    fEducation,
    fHealth,
    fSecurity,
    fTransport,
    fPolygonLanus,
    fDistricts,
    fCircuit,
    fLocations,
    fMunicDep,
    fsquarePark
  ])
    .then(async ([fcl, fed, fhe, fse, ftr, fpl, fdt, fci,flo,fmd,fsp]) => {
      var fc = await fcl.json();
      var fe = await fed.json();
      var fh = await fhe.json();
      var fs = await fse.json();
      var ft = await ftr.json();
      var fp = await fpl.json();
      var fd = await fdt.json();
      var fcir = await fci.json();
      var fl = await flo.json();
      var fm = await fmd.json();
      var fsp = await fsp.json();
      return [fc, fe, fh, fs, ft, fp, fd, fcir, fl,fm, fsp];
    })
    .then(
      ([
        clubData,
        educationData,
        healthData,
        securityData,
        transportData,
        polygonData,
        districtData,
        circuitData,
        locationData,
        municipalDependenceData,
        squareParkData
      ]) => {
        var club = L.geoJSON(clubData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.type == "Estadio" ){
              return L.marker(latlng, { icon: StadiumIcon });
            }else if(feature.properties.type == "Sede"){
              return L.marker(latlng, { icon: headOfficeIcon });
            }
          }
        }).addTo(map)

        var initialEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Inicial" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicInitialEducationIcon });
            }else if(feature.properties.dependence == "Inicial" && feature.properties.public == false){
              return L.marker(latlng, { icon: privateInitialEducationIcon });
            }
          }
        })
        var primaryEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Primaria" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicPrimarySchoolIcon });
            }else if(feature.properties.dependence == "Primaria" && feature.properties.public == false){
              return L.marker(latlng, { icon: privatePrimarySchoolIcon });
            }
          }
        })
        var hightSchollEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Secundaria" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicHightSchoolIcon });
            }else if(feature.properties.dependence == "Secundaria" && feature.properties.public == false){
              return L.marker(latlng, { icon: privateHightSchoolIcon });
            }
          }
        })
        var tecnicalHightSchollEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Técnica" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicTecnicalSchoolIcon });
            }else if(feature.properties.dependence == "Técnica" && feature.properties.public == false){
              return L.marker(latlng, { icon: privateTecnicalSchoolIcon });
            }
          }
        })
        var universityEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Universitaria" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicUniversityIcon });
            }else if(feature.properties.dependence == "Universitaria" && feature.properties.public == false){
              return L.marker(latlng, { icon: privateUniversityIcon });
            }
          }
        })

        var otherEducation = L.geoJSON(educationData, {
          onEachFeature: onEachFeature,
          pointToLayer: (feature, latlng) => {
            if(feature.properties.dependence == "Otras" && feature.properties.public == true){
              return L.marker(latlng, { icon: publicOtherEducationIcon });
            }else if(feature.properties.dependence == "Otras" && feature.properties.public == false){
              return L.marker(latlng, { icon: privateOtherEducationIcon });
            }
          }
        })

        // var health= L.geoJSON(healthData, {
        //   data: healthData,
        //   onEachFeature: onEachFeature,
        //   icon: healthIcon
        // }).addTo(map);
        var health = L.geoJSON(healthData, {
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            if (feature.properties.dependence == "Municipal") {
              return L.marker(latlng, { icon: healthIconMunicipal });
            } else if (feature.properties.dependence == "Provincial") {
              return L.marker(latlng, { icon: healthIconProvincial });
            } else {
              return L.marker(latlng, { icon: healthIconPrivate });
            }
          },
        })

        var security = L.geoJSON(securityData, {
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            if (
              feature.properties.tipo == "Comisaría" ||
              feature.properties.tipo == "Comisaria"
            ) {
              return L.marker(latlng, { icon: policeIcon });
            } else if (feature.properties.tipo == "Cuartel de Bomberos") {
              return L.marker(latlng, { icon: bombersIcon });
              }else if (feature.properties.tipo == "Juzgado") {
               return L.marker(latlng,{icon: justiceIcon});
            }
          }
        });

        var transport = L.geoJSON(transportData, {
			//data: transportData,
          	onEachFeature: onEachFeature,
        	pointToLayer: function (feature, latlng) {
            	if (feature.properties.type == "Colectivos") {
              		return L.marker(latlng, { icon: busIcon });
           		} else if (feature.properties.type == "Trenes") {
             		return L.marker(latlng, { icon: trainIcon });
              	}
          	}
        });


        var MunicipalDependence = L.geoJSON(municipalDependenceData, {
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: municipalDependenceIcon });
          }
        })
        
        var squareAndPark = L.geoJSON(squareParkData, {
          data: squareParkData,
          color: "black",
          fillColor: "green",
          fillOpacity: 0.1,
          weight: 1.5,
          onEachFeature:onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(feature.getCenter() ,latlng, { icon: municipalDependenceIcon });
          }
        })
        // var polygonLanus = L.geoJSON(polygonData, {
        //   data: polygonData,
        //   color: "red",
        //   fillColor: "silver",
        //   fillOpacity: 0.3,
        //   weight: 3,
        // }).addTo(map);


        var districtsLanus = L.geoJSON(districtData, {
          data: districtData,
          color: "red",
          fillColor: "silver",
          fillOpacity: 0.3,
          weight: 1,
        })



        // var circuitLanus = L.geoJSON(circuitData, {
        //   data: circuitData,
        //   color: "red",
        //   fillColor: "silver",
        //   fillOpacity: 0.3,
        //   weight: 1,
        // }).addTo(map);

        var LocationsLanus = L.geoJSON(locationData,{
          data: locationData,
          color: "red",
          fillColor: "silver",
          fillOpacity: 0.3,
          weight: 1,
        }).addTo(map)

        var overLayers = {
          Clubes: club,
          "Dependencias Municipales": MunicipalDependence,
          "Educación Inicial": initialEducation,
          "Escuelas Primarias": primaryEducation,
          "Escuelas Secundarias": hightSchollEducation,
          "Escuelas Técnicas": tecnicalHightSchollEducation,
          Universidades: universityEducation,
          "Otros establecimientos educativos": otherEducation,
          "Parques y plazas": squareAndPark,
          Salud: health,
          "Seguridad y Justicia": security,
          Transporte: transport,
        };

        var baseMap = {
          // "Polígono": polygonLanus,
          "Barrios": districtsLanus,
          // "Circuitos Electorales": circuitLanus,
          "Localidades": LocationsLanus
        };
        L.control.layers(overLayers, baseMap).addTo(map);
      }
      
    );

  return arr;
}
window.onload = setMap();
