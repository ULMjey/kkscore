var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> พานทอง'
            });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___2, 
                style: style___2,
                interactive: false,
                title: '<img src="styles/legend/__2.png" /> พานทอง_ตำบล'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: false,
    title: 'พานทอง-แพ้<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 21<br />\
    <img src="styles/legend/_3_1.png" /> 21 - 41<br />\
    <img src="styles/legend/_3_2.png" /> 41 - 61<br />\
    <img src="styles/legend/_3_3.png" /> 61 - 81<br />\
    <img src="styles/legend/_3_4.png" /> 81 - 100<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: false,
    title: 'พานทอง-ชนะ<br />\
    <img src="styles/legend/_4_0.png" /> 0 - 21<br />\
    <img src="styles/legend/_4_1.png" /> 21 - 41<br />\
    <img src="styles/legend/_4_2.png" /> 41 - 61<br />\
    <img src="styles/legend/_4_3.png" /> 61 - 81<br />\
    <img src="styles/legend/_4_4.png" /> 81 - 100<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr___2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr___2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'AP_IDN': 'AP_IDN', 'AP_CODE': 'AP_CODE', 'AP_TN': 'AP_TN', 'AP_EN': 'AP_EN', 'PV_IDN': 'PV_IDN', 'PV_CODE': 'PV_CODE', 'PV_TN': 'PV_TN', 'PV_EN': 'PV_EN', 'RE_NESDB': 'RE_NESDB', 'RE_ROYIN': 'RE_ROYIN', 'AreaShape': 'AreaShape', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr___2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'P_NAME_T', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'A_NAME_T', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'T_NAME_T', 'T_NAME_E': 'T_NAME_E', });
lyr__3.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'ผู_12': 'ผู_12', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'รวม': 'รวม', 'พรร': 'พรร', 'lat': 'lat', 'lon': 'lon', 'kk_win': 'kk_win', 'kk_per': 'kk_per', });
lyr__4.set('fieldAliases', {'เขต': 'เขต', 'อำเ': 'อำเ', 'ตำบ': 'ตำบ', 'หมู': 'หมู', 'หน่': 'หน่', 'สถา': 'สถา', 'ผู้': 'ผู้', 'ผู_1': 'ผู_1', 'ก้า': 'ก้า', 'เพื': 'เพื', 'ผู_12': 'ผู_12', 'พลั': 'พลั', 'ประ': 'ประ', 'ภูม': 'ภูม', 'ไทย': 'ไทย', 'อื่': 'อื่', 'รวม': 'รวม', 'พรร': 'พรร', 'lat': 'lat', 'lon': 'lon', 'kk_win': 'kk_win', 'kk_per': 'kk_per', });
lyr__1.set('fieldImages', {'AP_IDN': 'Range', 'AP_CODE': 'TextEdit', 'AP_TN': 'TextEdit', 'AP_EN': 'TextEdit', 'PV_IDN': 'Range', 'PV_CODE': 'TextEdit', 'PV_TN': 'TextEdit', 'PV_EN': 'TextEdit', 'RE_NESDB': 'TextEdit', 'RE_ROYIN': 'TextEdit', 'AreaShape': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr___2.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', });
lyr__3.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'ผู_12': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'รวม': 'TextEdit', 'พรร': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'kk_win': 'TextEdit', 'kk_per': 'TextEdit', });
lyr__4.set('fieldImages', {'เขต': 'TextEdit', 'อำเ': 'TextEdit', 'ตำบ': 'TextEdit', 'หมู': 'TextEdit', 'หน่': 'TextEdit', 'สถา': 'TextEdit', 'ผู้': 'TextEdit', 'ผู_1': 'TextEdit', 'ก้า': 'TextEdit', 'เพื': 'TextEdit', 'ผู_12': 'TextEdit', 'พลั': 'TextEdit', 'ประ': 'TextEdit', 'ภูม': 'TextEdit', 'ไทย': 'TextEdit', 'อื่': 'TextEdit', 'รวม': 'TextEdit', 'พรร': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'kk_win': 'TextEdit', 'kk_per': 'TextEdit', });
lyr__1.set('fieldLabels', {'AP_IDN': 'no label', 'AP_CODE': 'no label', 'AP_TN': 'no label', 'AP_EN': 'no label', 'PV_IDN': 'no label', 'PV_CODE': 'no label', 'PV_TN': 'no label', 'PV_EN': 'no label', 'RE_NESDB': 'no label', 'RE_ROYIN': 'no label', 'AreaShape': 'no label', 'ADMIN_TYPE': 'no label', });
lyr___2.set('fieldLabels', {'OBJECTID': 'no label', 'P_CODE': 'no label', 'A_CODE': 'no label', 'T_CODE': 'no label', 'P_NAME_T': 'no label', 'P_NAME_E': 'no label', 'A_NAME_T': 'no label', 'A_NAME_E': 'no label', 'T_NAME_T': 'no label', 'T_NAME_E': 'no label', });
lyr__3.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'ผู_12': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'รวม': 'no label', 'พรร': 'no label', 'lat': 'no label', 'lon': 'no label', 'kk_win': 'no label', 'kk_per': 'no label', });
lyr__4.set('fieldLabels', {'เขต': 'no label', 'อำเ': 'no label', 'ตำบ': 'no label', 'หมู': 'no label', 'หน่': 'no label', 'สถา': 'no label', 'ผู้': 'no label', 'ผู_1': 'no label', 'ก้า': 'no label', 'เพื': 'no label', 'ผู_12': 'no label', 'พลั': 'no label', 'ประ': 'no label', 'ภูม': 'no label', 'ไทย': 'no label', 'อื่': 'no label', 'รวม': 'no label', 'พรร': 'no label', 'lat': 'no label', 'lon': 'no label', 'kk_win': 'no label', 'kk_per': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});