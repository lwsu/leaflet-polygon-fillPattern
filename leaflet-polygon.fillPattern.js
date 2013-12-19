/**
 *  Extend the Polygon Object to set an image to fill the path in SVG
 *  exp:
 *    L.Polygon(points, {fill: 'url(image.gif)'});
 *  Author: lanwei@cloudybay.com.tw
 */

if (L.Browser.svg) {
    L.Polygon.prototype._updateStyle = function () {
        L.Path.prototype._updateStyle.call(this);

        if (typeof(this.options.fill) == "string" &&
                this.options.fill.match(/^url\(/)) {
            if (!this._defs)
            {
                this._defs = this._createElement('defs');
                this._container.appendChild(this._defs);
            }
            var _img_url = this.options.fill.substring(4, this.options.fill.length-1);
            var _ref_id = _img_url + (Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17));
            _ref_id += new Date().getUTCMilliseconds();
            var _p = document.getElementById(_ref_id);
            if (!_p)
            {
                var _im = new Image();
                _im.src = _img_url;

                _p = this._createElement('pattern');
                _p.setAttribute('id', _ref_id);
                _p.setAttribute('x', '0');
                _p.setAttribute('y', '0');
                _p.setAttribute('patternUnits', 'userSpaceOnUse');
                _p.setAttribute('width', '24');
                _p.setAttribute('height', '24');
                this._defs.appendChild(_p);

                var _img = this._createElement('image');
                _img.setAttribute('x', '0');
                _img.setAttribute('y', '0');
                _img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _img_url);
                _img.setAttribute('width', '24');
                _img.setAttribute('height', '24');
                _p.appendChild(_img);

                _im.onload = function() {
                    _p.setAttribute('width', _im.width);
                    _p.setAttribute('height', _im.height);
                    _img.setAttribute('width', _im.width);
                    _img.setAttribute('height', _im.height);
                };
            }
            this._path.setAttribute('fill', "url(#"+_ref_id+")");
        }
    };
}
