$(document).ready(function() {
  
var myCenter=new google.maps.LatLng(<%=@lat%>,<%=@long%>);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<%=@text%>"
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
});
