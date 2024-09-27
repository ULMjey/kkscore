ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11237427.951072, 1503628.472390, 11271193.530258, 1526277.811515]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: "พานทอง_ตำบล",
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
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "พานทอง",
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> พานทอง'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: "พานทอง_แพ้",
                interactive: false,
    title: 'พานทอง_แพ้<br />\
    <img src="styles/legend/__4_0.png" /> 0 - 11<br />\
    <img src="styles/legend/__4_1.png" /> 11 - 21<br />\
    <img src="styles/legend/__4_2.png" /> 21 - 31<br />\
    <img src="styles/legend/__4_3.png" /> 31 - 41<br />\
    <img src="styles/legend/__4_4.png" /> 41 - 51<br />\
    <img src="styles/legend/__4_5.png" /> 51 - 61<br />\
    <img src="styles/legend/__4_6.png" /> 61 - 71<br />\
    <img src="styles/legend/__4_7.png" /> 71 - 81<br />\
    <img src="styles/legend/__4_8.png" /> 81 - 91<br />\
    <img src="styles/legend/__4_9.png" /> 91 - 100<br />'
        });
var format___5 = new ol.format.GeoJSON();
var features___5 = format___5.readFeatures(json___5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___5.addFeatures(features___5);
var lyr___5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___5, 
                style: style___5,
                popuplayertitle: "พานทอง_ชนะ",
                interactive: false,
    title: 'พานทอง_ชนะ<br />\
    <img src="styles/legend/__5_0.png" /> 0 - 11<br />\
    <img src="styles/legend/__5_1.png" /> 11 - 21<br />\
    <img src="styles/legend/__5_2.png" /> 21 - 31<br />\
    <img src="styles/legend/__5_3.png" /> 31 - 41<br />\
    <img src="styles/legend/__5_4.png" /> 41 - 51<br />\
    <img src="styles/legend/__5_5.png" /> 51 - 61<br />\
    <img src="styles/legend/__5_6.png" /> 61 - 71<br />\
    <img src="styles/legend/__5_7.png" /> 71 - 81<br />\
    <img src="styles/legend/__5_8.png" /> 81 - 91<br />\
    <img src="styles/legend/__5_9.png" /> 91 - 100<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr___2.setVisible(true);lyr__3.setVisible(true);lyr___4.setVisible(true);lyr___5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr___2,lyr__3,lyr___4,lyr___5];
lyr___2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'P_NAME_T', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'A_NAME_T', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'T_NAME_T', 'T_NAME_E': 'T_NAME_E', });
lyr__3.set('fieldAliases', {'AP_IDN': 'AP_IDN', 'AP_CODE': 'AP_CODE', 'AP_TN': 'AP_TN', 'AP_EN': 'AP_EN', 'PV_IDN': 'PV_IDN', 'PV_CODE': 'PV_CODE', 'PV_TN': 'PV_TN', 'PV_EN': 'PV_EN', 'RE_NESDB': 'RE_NESDB', 'RE_ROYIN': 'RE_ROYIN', 'AreaShape': 'AreaShape', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr___4.set('fieldAliases', {'เขต�': 'เขต�', 'อำเ�': 'อำเ�', 'ตำบ�': 'ตำบ�', 'หมู�': 'หมู�', 'หน่�': 'หน่�', 'สถา�': 'สถา�', 'ผู้�': 'ผู้�', 'ผู��_1': 'ผู��_1', 'ก้า�': 'ก้า�', 'เพื�': 'เพื�', 'รวม�': 'รวม�', 'พลั�': 'พลั�', 'ประ�': 'ประ�', 'ภูม�': 'ภูม�', 'ไทย�': 'ไทย�', 'อื่�': 'อื่�', 'พรร�': 'พรร�', 'lat': 'lat', 'lon': 'lon', 'รว��_1': 'รว��_1', 'per': 'per', });
lyr___5.set('fieldAliases', {'เขต�': 'เขต�', 'อำเ�': 'อำเ�', 'ตำบ�': 'ตำบ�', 'หมู�': 'หมู�', 'หน่�': 'หน่�', 'สถา�': 'สถา�', 'ผู้�': 'ผู้�', 'ผู��_1': 'ผู��_1', 'ก้า�': 'ก้า�', 'เพื�': 'เพื�', 'รวม�': 'รวม�', 'พลั�': 'พลั�', 'ประ�': 'ประ�', 'ภูม�': 'ภูม�', 'ไทย�': 'ไทย�', 'อื่�': 'อื่�', 'พรร�': 'พรร�', 'lat': 'lat', 'lon': 'lon', 'รว��_1': 'รว��_1', 'per': 'per', });
lyr___2.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', });
lyr__3.set('fieldImages', {'AP_IDN': 'Range', 'AP_CODE': 'TextEdit', 'AP_TN': 'TextEdit', 'AP_EN': 'TextEdit', 'PV_IDN': 'Range', 'PV_CODE': 'TextEdit', 'PV_TN': 'TextEdit', 'PV_EN': 'TextEdit', 'RE_NESDB': 'TextEdit', 'RE_ROYIN': 'TextEdit', 'AreaShape': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr___4.set('fieldImages', {'เขต�': 'TextEdit', 'อำเ�': 'TextEdit', 'ตำบ�': 'TextEdit', 'หมู�': 'TextEdit', 'หน่�': 'TextEdit', 'สถา�': 'TextEdit', 'ผู้�': 'TextEdit', 'ผู��_1': 'TextEdit', 'ก้า�': 'TextEdit', 'เพื�': 'TextEdit', 'รวม�': 'TextEdit', 'พลั�': 'TextEdit', 'ประ�': 'TextEdit', 'ภูม�': 'TextEdit', 'ไทย�': 'TextEdit', 'อื่�': 'TextEdit', 'พรร�': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'รว��_1': 'TextEdit', 'per': 'TextEdit', });
lyr___5.set('fieldImages', {'เขต�': 'TextEdit', 'อำเ�': 'TextEdit', 'ตำบ�': 'TextEdit', 'หมู�': 'TextEdit', 'หน่�': 'TextEdit', 'สถา�': 'TextEdit', 'ผู้�': 'TextEdit', 'ผู��_1': 'TextEdit', 'ก้า�': 'TextEdit', 'เพื�': 'TextEdit', 'รวม�': 'TextEdit', 'พลั�': 'TextEdit', 'ประ�': 'TextEdit', 'ภูม�': 'TextEdit', 'ไทย�': 'TextEdit', 'อื่�': 'TextEdit', 'พรร�': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'รว��_1': 'TextEdit', 'per': 'TextEdit', });
lyr___2.set('fieldLabels', {'OBJECTID': 'no label', 'P_CODE': 'no label', 'A_CODE': 'no label', 'T_CODE': 'no label', 'P_NAME_T': 'no label', 'P_NAME_E': 'no label', 'A_NAME_T': 'no label', 'A_NAME_E': 'no label', 'T_NAME_T': 'no label', 'T_NAME_E': 'no label', });
lyr__3.set('fieldLabels', {'AP_IDN': 'no label', 'AP_CODE': 'no label', 'AP_TN': 'no label', 'AP_EN': 'no label', 'PV_IDN': 'no label', 'PV_CODE': 'no label', 'PV_TN': 'no label', 'PV_EN': 'no label', 'RE_NESDB': 'no label', 'RE_ROYIN': 'no label', 'AreaShape': 'no label', 'ADMIN_TYPE': 'no label', });
lyr___4.set('fieldLabels', {'เขต�': 'no label', 'อำเ�': 'no label', 'ตำบ�': 'no label', 'หมู�': 'no label', 'หน่�': 'no label', 'สถา�': 'no label', 'ผู้�': 'no label', 'ผู��_1': 'no label', 'ก้า�': 'no label', 'เพื�': 'no label', 'รวม�': 'no label', 'พลั�': 'no label', 'ประ�': 'no label', 'ภูม�': 'no label', 'ไทย�': 'no label', 'อื่�': 'no label', 'พรร�': 'no label', 'lat': 'no label', 'lon': 'no label', 'รว��_1': 'no label', 'per': 'no label', });
lyr___5.set('fieldLabels', {'เขต�': 'no label', 'อำเ�': 'no label', 'ตำบ�': 'no label', 'หมู�': 'no label', 'หน่�': 'no label', 'สถา�': 'no label', 'ผู้�': 'no label', 'ผู��_1': 'no label', 'ก้า�': 'no label', 'เพื�': 'no label', 'รวม�': 'no label', 'พลั�': 'no label', 'ประ�': 'no label', 'ภูม�': 'no label', 'ไทย�': 'no label', 'อื่�': 'no label', 'พรร�': 'no label', 'lat': 'no label', 'lon': 'no label', 'รว��_1': 'no label', 'per': 'no label', });
lyr___5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});