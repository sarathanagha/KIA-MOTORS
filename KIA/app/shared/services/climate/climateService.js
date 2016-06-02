'use strict';

module.exports = /*@ngInject*/ function() {
	var _unit = 'F';
	var _hexMap = {
        'F' : {'--' : '--', '01' : '--', '02' : 'Low', '03' : 63, '04' : 63, '05' : 64, '06' : 65, '07' : 66, '08' : 67, '09' : 68, '0A' : 69, '0B' : 70, '0C' : 71, '0D' : 72, '0E' : 73, '0F' : 74, '10' : 75, '11' : 76, '12' : 77, '13' : 78, '14' : 79, '15' : 80, '16' : 81, '17' : 82, '18' : 83, '19' : 84, '1A' : 85, '1B' : 86, '1C' : 87, '1D' : 88, '1E' : 89, '1F' : 89, '20' : 'High'},
        'C' : {'--' : '--', '01' : '--', '02' : 'Low', '03' : 17, '04' : 18, '05' : 18, '06' : 19, '07' : 19, '08' : 20, '09' : 20, '0A' : 21, '0B' : 21, '0C' : 22, '0D' : 22, '0E' : 23, '0F' : 23, '10' : 24, '11' : 24, '12' : 25, '13' : 25, '14' : 26, '15' : 26, '16' : 27, '17' : 27, '18' : 28, '19' : 28, '1A' : 29, '1B' : 29, '1C' : 30, '1D' : 30, '1E' : 31, '1F' : 31, '20' : 'High'}
    };

    var _hexArray = 
    [

    ];

    function hexToValue(hex) {
    	var hexy = hex.toString().toUpperCase().replace('H','');
    	return _hexMap[_unit][hexy];
    }

    return {
        hexToValue:hexToValue
    };
};