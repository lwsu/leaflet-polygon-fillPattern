leaflet-polygon-fillPattern
===========================

Extend the Polygon Object to fill SVG Path element with an image pattern.

Check out the [demo](http://lwsu.github.io/leaflet-polygon-fillPattern/example/).

### Usage example

```javascript
var poly1 = [
    [24, 121],
    [24.5, 121],
    [24.5, 121.9],
    [24, 121.9]
];
L.polygon(poly1, {fill:'url(image.gif)'}).addTo(map);
```

