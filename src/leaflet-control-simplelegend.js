L.Control.SimpleLegend = L.Control.extend({
    options: {
        position: 'bottomright',
        legendTitle: 'Legend'
    },

    initialize: function(options) {
        if (options.imgUrl) {
            this._legendImgUrl = options.imgUrl;
        }
        this._legendTitle = this.options.legendTitle;
        if (options.title) {
            this._legendTitle = options.title;
        }
        this._visible = false;
        L.Control.prototype.initialize.call(this, options);
    },

    onAdd: function(map) {
        var className = 'leaflet-control-simplelegend';

        this._container = L.DomUtil.create('div', className);
        var container = this._container;

// <img class="leaflet-control-simplelegend-img hidden" style="max-width: 280px !important;
//                                                      " src="https://www.baidu.com/img/bdlogo.png">
        this._legendImg = L.DomUtil.create('img', 'leaflet-control-simplelegend-img', container);
        this._legendLabel = L.DomUtil.create('h4', 'leaflet-control-simplelegend-label', container);
        L.DomUtil.get(this._legendLabel).innerHTML = '<strong>' + this._legendTitle + '</strong>';
        L.DomUtil.get(this._legendImg).src = this._legendImgUrl;

        L.DomUtil.addClass(this._legendImg, 'hidden');

        L.DomEvent.addListener(container, 'click', function() {
            console.log('Legend clicked');
            this._visible = !this._visible;
            if (this._visible) {
                L.DomUtil.addClass(this._legendLabel, 'hidden');
                L.DomUtil.removeClass(this._legendImg, 'hidden');
            } else {
                L.DomUtil.addClass(this._legendImg, 'hidden');
                L.DomUtil.removeClass(this._legendLabel, 'hidden');
            }

        }, this);

        return container;
    },

    onRemove: function(map) {

    },

    showLegend: function() {
        L.DomUtil.removeClass(this._container, 'hidden');
    },

    hideLegend: function() {
            L.DomUtil.addClass(this._container, 'hidden');
    }
        //,

    // removeLegend : function (argument) {

    // }
});
