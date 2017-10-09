leaflet-polygon-fillPattern
===========================

Extend the Polygon Object to fill SVG Path element with an image pattern.

Check out the [demo](http://lwsu.github.io/leaflet-polygon-fillPattern/example/).


### Requirements
- Leaflet 1+ (Leaflet 0.7 or earlier, check out [here](https://github.com/lwsu/leaflet-polygon-fillPattern/tree/v0.7))


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
