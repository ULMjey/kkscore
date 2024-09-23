var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: "พานทอง_ตำบล",
                interactive: false,
                title: '<img src="styles/legend/__1.png" /> พานทอง_ตำบล'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "พานทอง-แพ้",
                interactive: false,
    title: 'พานทอง-แพ้<br />\
    <img src="styles/legend/_2_0.png" /> 13.4 - 18.3<br />\
    <img src="styles/legend/_2_1.png" /> 18.3 - 21.3<br />\
    <img src="styles/legend/_2_2.png" /> 21.3 - 23.9<br />\
    <img src="styles/legend/_2_3.png" /> 23.9 - 27.6<br />\
    <img src="styles/legend/_2_4.png" /> 27.6 - 40.6<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "พานทอง-ชนะ",
                interactive: false,
    title: 'พานทอง-ชนะ<br />\
    <img src="styles/legend/_3_0.png" /> 27.1 - 29.9<br />\
    <img src="styles/legend/_3_1.png" /> 29.9 - 32.4<br />\
    <img src="styles/legend/_3_2.png" /> 32.4 - 35.1<br />\
    <img src="styles/legend/_3_3.png" /> 35.1 - 41<br />\
    <img src="styles/legend/_3_4.png" /> 41 - 47.4<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr___1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr___1,lyr__2,lyr__3];
lyr___1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'P_NAME_T', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'A_NAME_T', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'T_NAME_T', 'T_NAME_E': 'T_NAME_E', });
lyr__2.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'ผู_12': 'ผู_12', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'รวม': 'รวม', 'พรร': 'พรร', 'lat': 'lat', 'lon': 'lon', 'kk_win': 'kk_win', 'kk_per': 'kk_per', });
lyr__3.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'ผู_12': 'ผู_12', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'รวม': 'รวม', 'พรร': 'พรร', 'lat': 'lat', 'lon': 'lon', 'kk_win': 'kk_win', 'kk_per': 'kk_per', });
lyr___1.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', });
lyr__2.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'ผู_12': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'รวม': 'TextEdit', 'พรร': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'kk_win': 'TextEdit', 'kk_per': 'TextEdit', });
lyr__3.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'ผู_12': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'รวม': 'TextEdit', 'พรร': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'kk_win': 'TextEdit', 'kk_per': 'TextEdit', });
lyr___1.set('fieldLabels', {'OBJECTID': 'no label', 'P_CODE': 'no label', 'A_CODE': 'no label', 'T_CODE': 'no label', 'P_NAME_T': 'no label', 'P_NAME_E': 'no label', 'A_NAME_T': 'no label', 'A_NAME_E': 'no label', 'T_NAME_T': 'no label', 'T_NAME_E': 'no label', });
lyr__2.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'ผู_12': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'รวม': 'no label', 'พรร': 'no label', 'lat': 'no label', 'lon': 'no label', 'kk_win': 'no label', 'kk_per': 'no label', });
lyr__3.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'ผู_12': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'รวม': 'no label', 'พรร': 'no label', 'lat': 'no label', 'lon': 'no label', 'kk_win': 'no label', 'kk_per': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});