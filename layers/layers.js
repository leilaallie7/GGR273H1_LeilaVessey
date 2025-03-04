ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-329009.650585, 49.000076, 1335295.795688, 6659287.192815]);
var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: true,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_Water_1 = new ol.format.GeoJSON();
var features_Water_1 = format_Water_1.readFeatures(json_Water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_1.addFeatures(features_Water_1);
var lyr_Water_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_1, 
                style: style_Water_1,
                popuplayertitle: "Water",
                interactive: true,
                title: '<img src="styles/legend/Water_1.png" /> Water'
            });
var format_FishStocking2024_2 = new ol.format.GeoJSON();
var features_FishStocking2024_2 = format_FishStocking2024_2.readFeatures(json_FishStocking2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStocking2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_2.addFeatures(features_FishStocking2024_2);
var lyr_FishStocking2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_2, 
                style: style_FishStocking2024_2,
                popuplayertitle: "Fish Stocking (2024)",
                interactive: true,
    title: 'Fish Stocking (2024)<br />\
    <img src="styles/legend/FishStocking2024_2_0.png" /> 0 - 1255<br />\
    <img src="styles/legend/FishStocking2024_2_1.png" /> 1256 - 5500<br />\
    <img src="styles/legend/FishStocking2024_2_2.png" /> 5501 - 20000<br />\
    <img src="styles/legend/FishStocking2024_2_3.png" /> 20001 - 40000<br />\
    <img src="styles/legend/FishStocking2024_2_4.png" /> 40001 - 110000<br />'
        });

lyr_Alberta_0.setVisible(true);lyr_Water_1.setVisible(true);lyr_FishStocking2024_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_Water_1,lyr_FishStocking2024_2];
lyr_Alberta_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_Water_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'fid': 'fid', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStocking2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'MAP AUTH_1': 'MAP AUTH_1', 'Author': 'Author', 'Comma': 'Comma', 'Stocking': 'Stocking', 'Stocking N': 'Stocking N', });
lyr_Alberta_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_Water_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', 'fid': 'TextEdit', 'PRUID_2': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStocking2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'MAP AUTH_1': 'TextEdit', 'Author': 'TextEdit', 'Comma': 'TextEdit', 'Stocking': '', 'Stocking N': '', });
lyr_Alberta_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'header label - visible with data', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_Water_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'fid': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStocking2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'hidden field', 'MAP AUTH_1': 'hidden field', 'Author': 'header label - always visible', 'Comma': 'hidden field', 'Stocking': 'hidden field', 'Stocking N': 'inline label - always visible', });
lyr_FishStocking2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});