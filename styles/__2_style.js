var size = 0;
var placement = 'point';

var style___2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
<<<<<<< HEAD
    var labelFont = "15.600000000000001px \'Anakotmai\', sans-serif";
=======
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
>>>>>>> 3babf451a11e0c959dd4d68e8c470d4749bd73e3
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("T_NAME_T") !== null) {
        labelText = String(feature.get("T_NAME_T"));
    }
    var style = [ new ol.style.Style({
<<<<<<< HEAD
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [15.2,7.6], lineCap: 'butt', lineJoin: 'miter', width: 7.6}),
=======
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [1,5], lineCap: 'butt', lineJoin: 'miter', width: 3}),
>>>>>>> 3babf451a11e0c959dd4d68e8c470d4749bd73e3
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
