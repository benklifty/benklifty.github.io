
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleMaps_0": {
            "type": "raster",
            "tiles": ["https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "MergedPaths_1": {
            "type": "geojson",
            "data": json_MergedPaths_1
        }
                    ,
        "OutputOrigins_2": {
            "type": "geojson",
            "data": json_OutputOrigins_2
        }
                    ,
        "OutputDestinations_3": {
            "type": "geojson",
            "data": json_OutputDestinations_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleMaps_0_0",
            "type": "raster",
            "source": "GoogleMaps_0"
        },
        {
            "id": "lyr_MergedPaths_1_0",
            "type": "line",
            "source": "MergedPaths_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#067c00'}
        }
,
        {
            "id": "lyr_OutputOrigins_2_0",
            "type": "circle",
            "source": "OutputOrigins_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#3ae420', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_OutputDestinations_3_0",
            "type": "circle",
            "source": "OutputDestinations_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#2525e0', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}