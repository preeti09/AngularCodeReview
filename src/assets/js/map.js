var geojsondata = [];
var mymap;
var render_polygon_ids = [];
var intid = '';
var Popup;
var globalData = [];
var globalShapeData = [];
var shapeDatafile;
var count = 0;
var shpfile;
var lnth;
var lati;
var longi;

function test1() {
  
  var loc = getParams(window.location.href).location;
   lati = loc.split(',')[0];
   longi = loc.split(',')[1];

  mymap = L.map('mapid').setView([lati, longi], 18);

  L.tileLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 24,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(mymap);

  var button = L.easyButton({
    states: [{
      icon: 'fa-arrows-alt',              
      title: 'Set Bound',    
      onClick: function (btn, map) {     
        map.setView([lati, longi], 18);
      }
    }]
  });

  //stateChangingButton.addTo(YOUR_LEAFLET_MAP);


  mymap.zoomControl.setPosition('bottomright');
  button.options.position = 'bottomright';
  button.addTo(mymap);
  Popup = L.popup();
  var mappage = getParams(window.location.href);

  mymap.on('moveend', function () {
    FilterData(globalData);
  });


  LoadFile(mappage.id, mymap);
  createLegend();
  


  function LoadFile(id, mymap) {
    $('#loader').show();
    var post_process = $.post("https://api-dot-ezy-geospatial.appspot.com/user/LoadFile", {
      id: id
    }, function (data) {

      var data = JSON.parse(data);
      $.post("https://api-dot-ezy-geospatial.appspot.com/user/getStatusViaPlotId", {
        cemid: mappage.id
      }, function (getStatus) {

        lnth = data.length;
        for (var index = 0; index < data.length; index++) {
          var url = data[index].url;
          $.getJSON(url, function (json) {
            var jsondata = json.features;
            var h = JSON.parse(getStatus);
            var gst = [];
            
            for (var i in h) {
              gst[h[i].plot_id] = h[i].status;
            }

            for (var k = 0; jsondata.length > k; k++) {
              
              jsondata[k].properties.status = gst[jsondata[k].properties.plotid];
              
              if (jsondata[k].properties.status == undefined) {
                globalShapeData.push(jsondata[k]);
              }
              
              geojsondata[jsondata[k].properties.plotid] = jsondata[k];
              globalData.push(jsondata[k]);
            }
            
            FilterData(jsondata);
            closeLoader(count++);
          });
        }
      });
    });
  }

  function FilterData(globalData) {

    if (shpfile !== undefined) {
      shpfile.clearLayers();
    }
    if (mymap.getZoom() >= 20) {
      shapeDatafile.clearLayers();
      shpfile = new L.geoJSON(globalData, {
        filter: function (feature, layer) {
          if (mymap.getBounds()._northEast.lng > feature.geometry.coordinates[0][0][0][0] && mymap.getBounds()._northEast.lat > feature.geometry.coordinates[0][0][0][1] && mymap.getBounds()._southWest.lng < feature.geometry.coordinates[0][0][0][0] && mymap.getBounds()._southWest.lat < feature.geometry.coordinates[0][0][0][1]) {
            return true;
          }
        },
        onEachFeature: onEachFeature,
        style: style,
      });
      shpfile.addTo(mymap);

    } else if (mymap.getZoom() >= 16 && mymap.getZoom() <= 20) {
      if (shapeDatafile) {
        shapeDatafile.clearLayers();
        MakePolygon(2);
      }
    }
  }
}

function createLegend() {

  var legend = L.control({
      position: 'topright'
  });

  legend.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'info legend'),
      
      grades = [1, 2, 3, 4, 5],
      lable = ["Vacant", "Reserved", "Occupied", "Interest", "Unavailable"];
    div.innerHTML +='<div id="toggle" ><i class="fa fa-chevron-left" aria-hidden="true"></i></div>';
    
    function getColor(d) {

      return d == 1 ? '#008000' :
        d == 2 ? '#ffe500' :
        d == 3 ? '#000fff' :
        d == 4 ? '#00ffff' :
        d == 5 ? '#D63E1E' :
        '#ffffff';
    }
    
    for (var i = 0; i < grades.length; i++) {
      
      div.innerHTML += '<div  style="background:#fff;" class="legend1"><label class="leaflet-panel-layers-title"><i class="leaflet-panel-layers-icon"><i style="background:' + getColor(grades[i]) + ';color: #ffffff;padding: 4px;"></i></i><span class="">' + lable[i] + '</span></label></br></div>';

    }
    return div;
  };

  legend.addTo(mymap);
  var showLegend = true;
  $('#toggle').on('click', function (e) {
    if (showLegend === true) {
      $('.legend1').hide();
      $('#toggle').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
      showLegend = false;
    } else {
      $('.legend1').show();
      $('#toggle').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
      showLegend = true;
    }
  })
}


function MakePolygon(i) {
  shapeDatafile = new L.geoJSON(globalShapeData);
  shapeDatafile.addTo(mymap);
  if (i == 1) {
    mymap.fitBounds(shapeDatafile.getBounds());
  }
}

function closeLoader(len) {
  if (parseInt(len + 1) === parseInt(lnth)) {
    $('#loader').hide();
    MakePolygon(1);

  }
};

function style(feature) {
  if (feature.properties.status == '1') {
    var strokeColor = '#008000';
    var opacity = 0.50;
  } else if (feature.properties.status == '2') {
    var strokeColor = '#ffe500';
    var opacity = 0.50;
  } else if (feature.properties.status == '3') {
    var strokeColor = '#000fff';
    var opacity = 0.50;
  } else if (feature.properties.status == '4') {
    var strokeColor = '#00ffff';
    var opacity = 0.50;
  } else {
    var strokeColor = '#ffffff';
    var opacity = 0;
  }
  return {
    opacity: opacity,
    fillOpacity: opacity,
    color: strokeColor
  }
};

function onEachFeature(feature, layer) {
  var mappage = getParams(window.location.href);
  geojsondata[feature.properties.plotid] = layer;

  layer.on('click', function (layer) {

    if (layer.target.feature.properties.plotid) {
      var html = "<div id='carouselExampleControls' class='carousel slide' data-interval='false' data-ride='carousel'> <div class='carousel-inner'>";
      $.post("https://api-dot-ezy-geospatial.appspot.com/user/AllgetPersonData", {
        status: layer.target.feature.properties.status,
        plot_id: layer.target.feature.properties.plotid,
        cemid: mappage.id
      }, function (plotData) {


        var latlng = layer.latlng ? layer.latlng : layer.target.getCenter();

        var obj = JSON.parse(plotData);
        if (typeof obj == 'object') {
          for (var j = 0; j < obj.length; j++) {
            var count = j + 1;
            var active = (obj[j].id == intid) ? 'active' : '';
            var sta = (layer.target.feature.properties.status == 1) ? 'Vacant' : (layer.target.feature.properties.status == 2) ? 'Reserved' : 'Occupied';


            if (j == 0 && (intid == '' || intid == null)) {
              html += "<div class='carousel-item active'> <table class='table' style='white-space:none'> <thead>";
              html += (parseInt(layer.target.feature.properties.status) !== 2) ? "<th>Record</th><th>" + count + " of " + obj.length + "</th>" : "<th>Status</th><th>" + sta + "</th>";

              html += "</tr> </thead> <tbody> <tr> <td>ID</td> <td>" + layer.target.feature.properties.plotid + "</td> </tr> <tr> <td>First Name</td><td>" + obj[j].first_name + "</td> </tr> <tr> <td>Surname</td><td>" + obj[j].surname + "</td> </tr>";


              html += (parseInt(layer.target.feature.properties.status) !== 2) ? "<tr><td>Date of Birth</td><td>" + obj[j].dob + "</td> </tr><tr> <td>Date of Death</td> <td>" + obj[j].dod + "</td> </tr><tr> <td>Age</td><td>" + obj[j].age + "</td> </tr>" : '';

              if (obj.length > 0 && sessionStorage['cemetery_id'] !== undefined) {
                var ssn = sessionStorage['cemetery_id'];
                var cid = mappage.id;
                html += (parseInt(ssn) == parseInt(cid)) ? "<tr><td style='' align='center' colspan='2'>" + '<center><a href="/plot-details?id=' + feature.properties.plotid + '&location=' + lati + ',' + longi + '&cid=' + cid + '"><button type="button" class="btn btn-secondary btn-second">View</button></a></center>' + "</td></tr>" : '';
              }
              html += "</tbody></table></div>";

            } else {

              html += "<div class='carousel-item " + active + "' > <table class='table' style='white-space:none'> <thead> <th>Record</th><th>" + count + " of " + obj.length + "</th> </tr> </thead> <tbody> <tr> <td>ID</td> <td>" + layer.target.feature.properties.plotid + "</td> </tr> <tr> <td>First Name</td><td>" + obj[j].first_name + "</td> </tr> <tr> <td>Surname</td><td>" + obj[j].surname + "</td> </tr>";

              html += (parseInt(layer.target.feature.properties.status) !== 2) ? "<tr><td>Date of Birth</td><td>" + obj[j].dob + "</td> </tr><tr> <td>Date of Death</td> <td>" + obj[j].dod + "</td> </tr><tr> <td>Age</td><td>" + obj[j].age + "</td> </tr>" : '';

              if (obj.length > 0 && sessionStorage['cemetery_id'] !== undefined) {
                var ssn = sessionStorage['cemetery_id'];
                var cid = mappage.id;
                html += (parseInt(ssn) == parseInt(cid)) ? "<tr><td style='' align='center' colspan='2'>" + '<center><a href="/plot-details?id=' + feature.properties.plotid + '&location=' + lati + ',' + longi + '&cid=' + cid + '&interId=' + obj[j].id + '"><button type="button" class="btn btn-secondary btn-second">View</button></a></center>' + "</td></tr>" : '';


              }
              html += "</tbody> </table> </div>";
            }
          }

          intid = '';
          if (obj.length > 1) {
            html += "</div><a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev' style=' left: -26px;'> <span class='carousel-control-prev-icon' aria-hidden='true' style='background-color: rgba(0,0,0,0.9);'></span> <span class='sr-only'>Previous</span> </a> <a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next' style=' right: -25px;'> <span class='carousel-control-next-icon' aria-hidden='true' style=' background-color: rgba(0,0,0,0.9);'></span> <span class='sr-only'>Next</span> </a></div>";
          }

          Popup.setLatLng(latlng);
          Popup.setContent(html);
          Popup.openOn(mymap);

        } else if (obj == false) {
          var sta = (layer.target.feature.properties.status == 1) ? 'Vacant' : (layer.target.feature.properties.status == 2) ? 'Reserved' : 'Occupied';


          if (sessionStorage['cemetery_id'] !== undefined) {
            var ssn = sessionStorage['cemetery_id'];
            var cid = mappage.id;

            html += (parseInt(ssn) == parseInt(cid)) ? "<div class='carousel-item active'> <table class='table' style='white-space:none'> <tbody><th>Status</th><th>" + sta + "</th> <tr> <td>ID</td> <td>" + layer.target.feature.properties.plotid + "</td> </tr><tr><td style='' align='center' colspan='2'>" + '<center><a href="/plot-details?id=' + feature.properties.plotid + '&location=' + lati + ',' + longi + '&cid=' + cid + '"><button type="button" class="btn btn-secondary">View</button></a></center>' + "</td></tr></tbody> </table> </div></div></div>" : '';

          } else {

            html += "<div class='carousel-item active'> <table class='table' style='white-space:none'> <tbody> <th>Status</th><th>" + sta + "</th> <tr> <td>ID</td> <td>" + layer.target.feature.properties.plotid + "</td> </tr></tbody> </table> </div></div></div>";

          }
          Popup.setLatLng(latlng);
          Popup.setContent(html);
          Popup.openOn(mymap);

        } else {

          var sta = (layer.target.feature.properties.status == 1) ? 'Vacant' : (layer.target.feature.properties.status == 2) ? 'Reserved' : 'Occupied';


          if (sessionStorage['cemetery_id'] !== undefined) {
            var ssn = sessionStorage['cemetery_id'];
            var cid = mappage.id;

            html += (parseInt(ssn) == parseInt(cid)) ? "<div class='carousel-item active'> <table class='table' style='white-space:none'> <tbody><th>Status</th><th>" + sta + "</th>  <tr>  <td>ID</td> <td>" + layer.target.feature.properties.plotid + "</td> </tr><tr><td style='' align='center' colspan='2'>" + '<center><a href="/plot-details?id=' + feature.properties.plotid + '&location=' + lati + ',' + longi + '&cid=' + cid + '"><button type="button" class="btn btn-secondary">View</button></a></center>' + "</td></tr></tbody> </table> </div></div></div>" : '';
          }
          //layer.setPopupContent(html); 
          Popup.setLatLng(latlng);

          Popup.setContent(html);
          Popup.openOn(mymap);

        }
      });
    }
    return html;
  });
}

function doSetTimeout(i) {
  setTimeout(function () {
    geojsondata[i].fire('click');
  }, 500);
}

function test2(plotid, id) {
  intid = id;

  if (geojsondata[plotid] !== undefined){
  var lat = (geojsondata[plotid] && geojsondata[plotid].geometry) ? geojsondata[plotid].geometry.coordinates[0][0][0][1] : geojsondata[plotid]._latlngs[0][0][0].lat;
 
  var lng = (geojsondata[plotid] && geojsondata[plotid].geometry) ? geojsondata[plotid].geometry.coordinates[0][0][0][0] : geojsondata[plotid]._latlngs[0][0][0].lng;
 
  mymap.setView([lat,lng], 23);
  doSetTimeout(plotid);
 }else {
   alert('No data found with this selection.')
 }
} 

function dropdown() {

    $(".ddown").css({
      'width': ($(".homeSearch").width() + 'px')
    });

    $('.dropdown-toggle').click(function () {
      $('.dropdown-menu').slideToggle("fast");
    })
    $('.ddown li label').click(function () {

      $('.dropdown-menu').slideUp("fast");
    });


    $('.FloatBtn').click(function () {
      $(this).parent().toggleClass('closepopup');
    })

    $('body').css('overflow', 'hidden');

    var headerHeight = $('.header').height()
    var winHeight = $(window).height()
    $('.listing-maps').height(winHeight - headerHeight);

    $(window).resize(function(){
      var headerHeight = $('.header').height()
      var winHeight = $(window).height()
      $('.listing-maps').height(winHeight - headerHeight);
    })

}

function getParams(url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  var vars = url.split('=');
  return params;
};

export {
  test1,
  test2,
  dropdown
};
