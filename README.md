## Leaflet Control SimpleLegend

***

This is a simple legend for layer, we can add this legend with a image url.


### Usage

add script and css


```
<link rel="stylesheet" href="src/leaflet-control-simplelegend.css" />
<script src="src/leaflet-control-simplelegend.js"></script>

```

```
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
	map = new L.Map('map', {layers: [osm], center: new L.LatLng(31.29, 120.37), zoom: 12 });

var legendUrl = 'https://www.baidu.com/img/bdlogo.png';
	legend = new L.Control.SimpleLegend({imgUrl:legendUrl});
legend.addTo(map);
```