var wms_layers = [];


        var lyr_Googlemap_0 = new ol.layer.Tile({
            'title': 'Google map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_River_1 = new ol.format.GeoJSON();
var features_River_1 = format_River_1.readFeatures(json_River_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_1.addFeatures(features_River_1);
var lyr_River_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_1, 
                style: style_River_1,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_1.png" /> River'
            });
var format_LuChinhVu2_2 = new ol.format.GeoJSON();
var features_LuChinhVu2_2 = format_LuChinhVu2_2.readFeatures(json_LuChinhVu2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuChinhVu2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuChinhVu2_2.addFeatures(features_LuChinhVu2_2);
var lyr_LuChinhVu2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuChinhVu2_2, 
                style: style_LuChinhVu2_2,
                popuplayertitle: 'LuChinhVu2%',
                interactive: true,
                title: '<img src="styles/legend/LuChinhVu2_2.png" /> LuChinhVu2%'
            });
var format_LuChinhVu10_3 = new ol.format.GeoJSON();
var features_LuChinhVu10_3 = format_LuChinhVu10_3.readFeatures(json_LuChinhVu10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuChinhVu10_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuChinhVu10_3.addFeatures(features_LuChinhVu10_3);
var lyr_LuChinhVu10_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuChinhVu10_3, 
                style: style_LuChinhVu10_3,
                popuplayertitle: 'LuChinhVu10%',
                interactive: true,
                title: '<img src="styles/legend/LuChinhVu10_3.png" /> LuChinhVu10%'
            });
var format_HeThu10_4 = new ol.format.GeoJSON();
var features_HeThu10_4 = format_HeThu10_4.readFeatures(json_HeThu10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeThu10_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeThu10_4.addFeatures(features_HeThu10_4);
var lyr_HeThu10_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeThu10_4, 
                style: style_HeThu10_4,
                popuplayertitle: 'HeThu10%',
                interactive: true,
                title: '<img src="styles/legend/HeThu10_4.png" /> HeThu10%'
            });
var format_Mucnuoc_5 = new ol.format.GeoJSON();
var features_Mucnuoc_5 = format_Mucnuoc_5.readFeatures(json_Mucnuoc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mucnuoc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mucnuoc_5.addFeatures(features_Mucnuoc_5);
var lyr_Mucnuoc_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mucnuoc_5, 
                style: style_Mucnuoc_5,
                popuplayertitle: 'Mucnuoc',
                interactive: true,
                title: '<img src="styles/legend/Mucnuoc_5.png" /> Mucnuoc'
            });
var format_MuaMN_6 = new ol.format.GeoJSON();
var features_MuaMN_6 = format_MuaMN_6.readFeatures(json_MuaMN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuaMN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuaMN_6.addFeatures(features_MuaMN_6);
var lyr_MuaMN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MuaMN_6, 
                style: style_MuaMN_6,
                popuplayertitle: 'Mua&MN',
                interactive: true,
                title: '<img src="styles/legend/MuaMN_6.png" /> Mua&MN'
            });
var format_Rainstations_7 = new ol.format.GeoJSON();
var features_Rainstations_7 = format_Rainstations_7.readFeatures(json_Rainstations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rainstations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rainstations_7.addFeatures(features_Rainstations_7);
var lyr_Rainstations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rainstations_7, 
                style: style_Rainstations_7,
                popuplayertitle: 'Rainstations',
                interactive: true,
                title: '<img src="styles/legend/Rainstations_7.png" /> Rainstations'
            });
var format_VNrain_8 = new ol.format.GeoJSON();
var features_VNrain_8 = format_VNrain_8.readFeatures(json_VNrain_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNrain_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNrain_8.addFeatures(features_VNrain_8);
var lyr_VNrain_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VNrain_8, 
                style: style_VNrain_8,
                popuplayertitle: 'VNrain',
                interactive: true,
                title: '<img src="styles/legend/VNrain_8.png" /> VNrain'
            });
var format_Trmtruynthng_9 = new ol.format.GeoJSON();
var features_Trmtruynthng_9 = format_Trmtruynthng_9.readFeatures(json_Trmtruynthng_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trmtruynthng_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trmtruynthng_9.addFeatures(features_Trmtruynthng_9);
var lyr_Trmtruynthng_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trmtruynthng_9, 
                style: style_Trmtruynthng_9,
                popuplayertitle: 'Trạm truyền thống',
                interactive: true,
                title: '<img src="styles/legend/Trmtruynthng_9.png" /> Trạm truyền thống'
            });

lyr_Googlemap_0.setVisible(true);lyr_River_1.setVisible(true);lyr_LuChinhVu2_2.setVisible(true);lyr_LuChinhVu10_3.setVisible(true);lyr_HeThu10_4.setVisible(true);lyr_Mucnuoc_5.setVisible(true);lyr_MuaMN_6.setVisible(true);lyr_Rainstations_7.setVisible(true);lyr_VNrain_8.setVisible(true);lyr_Trmtruynthng_9.setVisible(true);
var layersList = [lyr_Googlemap_0,lyr_River_1,lyr_LuChinhVu2_2,lyr_LuChinhVu10_3,lyr_HeThu10_4,lyr_Mucnuoc_5,lyr_MuaMN_6,lyr_Rainstations_7,lyr_VNrain_8,lyr_Trmtruynthng_9];
lyr_River_1.set('fieldAliases', {'RiverName': 'RiverName', 'PA8': 'PA8', 'Mota': 'Mota', 'Giaidoan': 'Giaidoan', 'PAtongthe': 'PAtongthe', 'Giaidoan1': 'Giaidoan1', 'Dautu': 'Dautu', });
lyr_LuChinhVu2_2.set('fieldAliases', {'raster_val': 'raster_val', });
lyr_LuChinhVu10_3.set('fieldAliases', {'raster_val': 'raster_val', });
lyr_HeThu10_4.set('fieldAliases', {'raster_val': 'raster_val', });
lyr_Mucnuoc_5.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_MuaMN_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_Rainstations_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_VNrain_8.set('fieldAliases', {'TT': 'TT', 'TenTram': 'TenTram', 'Ten': 'Ten', 'lat': 'lat', 'long': 'long', 'Muagio2020': 'Muagio2020', });
lyr_Trmtruynthng_9.set('fieldAliases', {'OID_': 'OID_', 'NAME': 'NAME', 'FOLDERPATH': 'FOLDERPATH', 'X': 'X', 'Y': 'Y', 'Muagio2020': 'Muagio2020', 'Muagio2010': 'Muagio2010', });
lyr_River_1.set('fieldImages', {'RiverName': 'TextEdit', 'PA8': 'TextEdit', 'Mota': 'TextEdit', 'Giaidoan': 'TextEdit', 'PAtongthe': 'TextEdit', 'Giaidoan1': 'TextEdit', 'Dautu': 'TextEdit', });
lyr_LuChinhVu2_2.set('fieldImages', {'raster_val': 'TextEdit', });
lyr_LuChinhVu10_3.set('fieldImages', {'raster_val': 'TextEdit', });
lyr_HeThu10_4.set('fieldImages', {'raster_val': 'TextEdit', });
lyr_Mucnuoc_5.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_MuaMN_6.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Rainstations_7.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_VNrain_8.set('fieldImages', {'TT': 'TextEdit', 'TenTram': 'TextEdit', 'Ten': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Muagio2020': 'TextEdit', });
lyr_Trmtruynthng_9.set('fieldImages', {'OID_': 'TextEdit', 'NAME': 'TextEdit', 'FOLDERPATH': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Muagio2020': 'TextEdit', 'Muagio2010': 'TextEdit', });
lyr_River_1.set('fieldLabels', {'RiverName': 'no label', 'PA8': 'no label', 'Mota': 'no label', 'Giaidoan': 'no label', 'PAtongthe': 'no label', 'Giaidoan1': 'no label', 'Dautu': 'no label', });
lyr_LuChinhVu2_2.set('fieldLabels', {'raster_val': 'no label', });
lyr_LuChinhVu10_3.set('fieldLabels', {'raster_val': 'no label', });
lyr_HeThu10_4.set('fieldLabels', {'raster_val': 'no label', });
lyr_Mucnuoc_5.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MuaMN_6.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Rainstations_7.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_VNrain_8.set('fieldLabels', {'TT': 'no label', 'TenTram': 'no label', 'Ten': 'no label', 'lat': 'no label', 'long': 'no label', 'Muagio2020': 'no label', });
lyr_Trmtruynthng_9.set('fieldLabels', {'OID_': 'no label', 'NAME': 'no label', 'FOLDERPATH': 'no label', 'X': 'no label', 'Y': 'no label', 'Muagio2020': 'no label', 'Muagio2010': 'no label', });
lyr_Trmtruynthng_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});