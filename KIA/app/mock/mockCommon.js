'use strict';

/*@ngInject*/
angular.module('uvo')
  .run(function($httpBackend) {
    $httpBackend.whenGET(/\/ccw\/carInfo\.do/).respond(function(method,url,data) {
      var returnData =
      {
        'selectedVin':'KNALU4D30E6013409',
        'vehicles':[
          {'vin':'5XYKUCA64EG387574','mdlNm':'SORENTO',
          'mdlYr':'2012','acumTrvgDistMile':392,
          'acumTrvgDist':631,'nextServiceMile':0,
          'vehicleCd':'XM','xrclCd':'STM','originImgFileNm':'Sorento_SatinMetal.PNG',
          'realImgFileNm':'Sorento_SatinMetal.PNG',
          'cgdsCnt':'0','uvoCnt':'0','unreadCnt':'0','dtcCnt':'0',
          'violCnt':'0','poi':'1','apptCnt':'0','securityPin':'Not Available',
          'dtcKh':0,'vehicleStatus':'notexists','vehNick':'Sorento 574 test1',
          'odoUpdate':'Jun 03, 2014 02:11 PM','endDate':1669795200000,
          'endMile':100000,'checkNameNull':'Sorento 574 test1',
          'fuelType':'0','actVin':'N','enrVin':'C','khVehicle':'0',
          'enrVinKh':'0','odometer':'000392','wrrtEndMile':false
          },
          {'vin':'KNALU4D30E6013409','mdlNm':'K900','mdlYr':'2016',
          'acumTrvgDistMile':2864,'acumTrvgDist':4271,'nextServiceMile':0,
          'vehicleCd':'KH','xrclCd':'MBN','realImgFileNm':'failSafe.PNG',
          'cgdsCnt':'0','uvoCnt':'0','unreadCnt':'0','dtcCnt':'0',
          'violCnt':'0','poi':'1','apptCnt':'0','securityPin':'Not Available',
          'dtcKh':0,'vehicleStatus':'notexists','vehNick':'K900 (UVO) Test',
          'odoUpdate':'Apr 10, 2014 03:04 PM','endDate':1672560000000,'endMile':100000,
          'checkNameNull':'K900 (UVO) Test','fuelType':'0','actVin':'N',
          'enrVin':'C','khVehicle':'K900','enrVinKh':'4','odometer':'002864','wrrtEndMile':false
          }]
      };

      var returnData =
      {
        'selectedVin' : '5XXGM4A70EG222761',
        'vehicles' : [{
            'vin' : '5XXGM4A70EG222761',
            'mdlNm' : 'OPTIMA',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 8145,
            'acumTrvgDist' : 13108,
            'nextServiceMile' : 0,
            'vehicleCd' : 'QF',
            'xrclCd' : '3D',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '1',
            'uvoCnt' : '0',
            'unreadCnt' : '1',
            'dtcCnt' : '5',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'lastUpdated' : 1420659038000,
            'securityPin' : '1111',
            'dtcKh' : 0,
            'scheduledInfoTimeStamp' : 1403642963929,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'Tester Responsive',
            'odoUpdate' : 'May 13, 2015 08:46 AM',
            'endDate' : 1672560000000,
            'endMile' : 160935,
            'checkNameNull' : 'Tester Responsive',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '008145',
            'wrrtEndMile' : false
          }, {
            'vin' : '5XXGN4A77EG223113',
            'mdlNm' : 'OPTIMA',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 13932,
            'acumTrvgDist' : 22422,
            'nextServiceMile' : 0,
            'vehicleCd' : '53222',
            'xrclCd' : 'ABP',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '1',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '0000',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'OPTIMA (AVN)',
            'odoUpdate' : 'Apr 14, 2015 08:15 AM',
            'endDate' : 1742972400000,
            'endMile' : 100000,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '013932',
            'wrrtEndMile' : false
          }, {'vin':'5XYKUCA64EG387574','mdlNm':'SORENTO',
          'mdlYr':'2012','acumTrvgDistMile':392,
          'acumTrvgDist':631,'nextServiceMile':0,
          'vehicleCd':'XM','xrclCd':'STM','originImgFileNm':'Sorento_SatinMetal.PNG',
          'realImgFileNm':'Sorento_SatinMetal.PNG',
          'cgdsCnt':'0','uvoCnt':'0','unreadCnt':'0','dtcCnt':'0',
          'violCnt':'0','poi':'1','apptCnt':'0','securityPin':'Not Available',
          'dtcKh':0,'vehicleStatus':'notexists','vehNick':'Sorento 574 test1',
          'odoUpdate':'Jun 03, 2014 02:11 PM','endDate':1669795200000,
          'endMile':100000,'checkNameNull':'Sorento 574 test1',
          'fuelType':'0','actVin':'N','enrVin':'C','khVehicle':'0',
          'enrVinKh':'0','odometer':'000392','wrrtEndMile':false
          },
          {'vin':'KNALU4D30E6013409','mdlNm':'K900','mdlYr':'2016',
          'acumTrvgDistMile':2864,'acumTrvgDist':4271,'nextServiceMile':0,
          'vehicleCd':'KH','xrclCd':'MBN','realImgFileNm':'failSafe.PNG',
          'cgdsCnt':'0','uvoCnt':'0','unreadCnt':'0','dtcCnt':'0',
          'violCnt':'0','poi':'1','apptCnt':'0','securityPin':'Not Available',
          'dtcKh':0,'vehicleStatus':'notexists','vehNick':'K900 (UVO) Test',
          'odoUpdate':'Apr 10, 2014 03:04 PM','endDate':1672560000000,'endMile':100000,
          'checkNameNull':'K900 (UVO) Test','fuelType':'0','actVin':'N',
          'enrVin':'C','khVehicle':'K900','enrVinKh':'4','odometer':'002864','wrrtEndMile':false
          },
          {
            'vin' : '5XYKU4A72EG387877',
            'mdlNm' : 'SORENTO',
            'mdlYr' : '2012',
            'acumTrvgDistMile' : 6721,
            'acumTrvgDist' : 10817,
            'nextServiceMile' : 0,
            'vehicleCd' : 'XM',
            'xrclCd' : 'STM',
            'originImgFileNm' : 'Sorento_SatinMetal.PNG',
            'realImgFileNm' : 'Sorento_SatinMetal.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1593',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'SORENTO 877',
            'odoUpdate' : 'Jun 01, 2015 05:27 AM',
            'endDate' : 1669795200000,
            'endMile' : 100000,
            'checkNameNull' : 'SORENTO 877',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '006721',
            'wrrtEndMile' : false
          }, {
            'vin' : '5XYKU4A78EG359761',
            'mdlNm' : 'SORENTO',
            'mdlYr' : '2013',
            'acumTrvgDistMile' : 10458,
            'acumTrvgDist' : 16831,
            'nextServiceMile' : 0,
            'vehicleCd' : 'XM',
            'xrclCd' : '2Z',
            'originImgFileNm' : 'Sorento_Black.PNG',
            'realImgFileNm' : 'Sorento_Black.PNG',
            'cgdsCnt' : '1',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : 'Not Available',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'SORENTO (UVO)',
            'odoUpdate' : 'Jul 09, 2015 08:45 AM',
            'endDate' : 1665298800000,
            'endMile' : 100000,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '0',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '010458',
            'wrrtEndMile' : false
          }, {
            'vin' : '5XYKUCA65EG360013',
            'mdlNm' : 'SORENTO',
            'mdlYr' : '2013',
            'acumTrvgDistMile' : 621,
            'acumTrvgDist' : 1000,
            'nextServiceMile' : 0,
            'vehicleCd' : 'XM',
            'xrclCd' : '2Z',
            'originImgFileNm' : 'Sorento_Black.PNG',
            'realImgFileNm' : 'Sorento_Black.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : 'Not Available',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'SORENTO (AVN)',
            'odoUpdate' : 'Jul 02, 2015 01:31 AM',
            'endDate' : 1665298800000,
            'endMile' : 100000,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '0',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000621',
            'wrrtEndMile' : false
          }, {
            'vin' : '5XYKW4A77EG361690',
            'mdlNm' : 'SORENTO',
            'mdlYr' : '2013',
            'acumTrvgDistMile' : 8600,
            'acumTrvgDist' : 13841,
            'nextServiceMile' : 0,
            'vehicleCd' : 'XM',
            'xrclCd' : '3D',
            'originImgFileNm' : 'Sorento_BrSilver.PNG',
            'realImgFileNm' : 'Sorento_BrSilver.PNG',
            'cgdsCnt' : '1',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : '690',
            'odoUpdate' : 'Jul 10, 2015 10:57 AM',
            'endDate' : 1665298800000,
            'endMile' : 100000,
            'checkNameNull' : '690',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '008600',
            'wrrtEndMile' : false
          }, {
            'vin' : '5XYKWDA78EG361438',
            'mdlNm' : 'SORENTO',
            'mdlYr' : '2013',
            'acumTrvgDistMile' : 23705,
            'acumTrvgDist' : 38150,
            'nextServiceMile' : 0,
            'vehicleCd' : 'XM',
            'xrclCd' : 'UD',
            'originImgFileNm' : 'Sorento_SnowWhite.PNG',
            'realImgFileNm' : 'Sorento_SnowWhite.PNG',
            'cgdsCnt' : '3',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'uvo2',
            'odoUpdate' : 'Jul 14, 2015 09:46 AM',
            'endDate' : 1665298800000,
            'endMile' : 100000,
            'checkNameNull' : 'uvo2',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '023705',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNADN5A34F6461133',
            'mdlNm' : 'RIO',
            'mdlYr' : '2016',
            'acumTrvgDistMile' : 48,
            'acumTrvgDist' : 78,
            'nextServiceMile' : 0,
            'vehicleCd' : 'UB',
            'xrclCd' : '1',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1234',
            'dtcKh' : 0,
            'scheduledInfoTimeStamp' : 1420653557614,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'UB AVN3.0 1133',
            'odoUpdate' : 'Mar 29, 2015 08:52 PM',
            'endDate' : 1730707200000,
            'endMile' : 100000,
            'checkNameNull' : 'UB AVN3.0 1133',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000048',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNADN5A3XF6461136',
            'mdlNm' : 'RIO',
            'mdlYr' : '2016',
            'acumTrvgDistMile' : 140,
            'acumTrvgDist' : 226,
            'nextServiceMile' : 0,
            'vehicleCd' : 'UB',
            'xrclCd' : 'MU1',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '5',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'lastUpdated' : 1424217211000,
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'UB UVO2 Retro 136',
            'odoUpdate' : 'Mar 29, 2015 08:53 PM',
            'endDate' : 1730185200000,
            'endMile' : 100000,
            'checkNameNull' : 'UB UVO2 Retro 136',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000140',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNALU4D31F6023402',
            'mdlNm' : 'K900',
            'mdlYr' : '2016',
            'acumTrvgDistMile' : 30000,
            'acumTrvgDist' : 200000,
            'nextServiceMile' : 0,
            'vehicleCd' : 'KH',
            'xrclCd' : '3M',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '19',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : 'Not Available',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'test1234',
            'odoUpdate' : 'Jan 20, 2014 08:58 PM',
            'endDate' : 1704096000000,
            'endMile' : 100000,
            'checkNameNull' : 'test1234',
            'fuelType' : '0',
            'actVin' : 'Y',
            'enrVin' : 'C',
            'launchType' : '0',
            'khVehicle' : 'K900',
            'enrVinKh' : '0',
            'odometer' : '030000',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDJP3A55D7000116',
            'mdlNm' : 'SOUL',
            'mdlYr' : '2013',
            'acumTrvgDistMile' : 62160,
            'acumTrvgDist' : 100040,
            'nextServiceMile' : 0,
            'vehicleCd' : 'PS',
            'xrclCd' : 'AV',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '9',
            'uvoCnt' : '0',
            'unreadCnt' : '6',
            'dtcCnt' : '1',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'lastUpdated' : 1417024997000,
            'securityPin' : '0000',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'PS116',
            'odoUpdate' : 'Jun 05, 2014 08:38 AM',
            'endDate' : 1672560000000,
            'endMile' : 100000,
            'checkNameNull' : 'PS116',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '062160',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDJX3A50D7000265',
            'mdlNm' : 'SOUL',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 7002,
            'acumTrvgDist' : 11269,
            'nextServiceMile' : 0,
            'vehicleCd' : 'PS',
            'xrclCd' : 'KU9',
            'originImgFileNm' : 'Soul14_FathomBlue.png',
            'realImgFileNm' : 'Soul14_FathomBlue.png',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '0000',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'SOUL (UVO)',
            'odoUpdate' : 'Nov 04, 2014 09:56 AM',
            'endDate' : 1672560000000,
            'endMile' : 160935,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '007002',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDJX3A59D7000264',
            'mdlNm' : 'SOUL',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 2274,
            'acumTrvgDist' : 3661,
            'nextServiceMile' : 0,
            'vehicleCd' : 'PS',
            'xrclCd' : 'KU9',
            'originImgFileNm' : 'Soul14_FathomBlue.png',
            'realImgFileNm' : 'Soul14_FathomBlue.png',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : 'Not Available',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'ps 264',
            'odoUpdate' : 'Jun 02, 2014 01:47 PM',
            'endDate' : 1672560000000,
            'endMile' : 160935,
            'checkNameNull' : 'ps 264',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '002274',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDMC5C19F6000336',
            'mdlNm' : 'SEDONA',
            'mdlYr' : '2015',
            'acumTrvgDistMile' : 14508,
            'acumTrvgDist' : 23350,
            'nextServiceMile' : 0,
            'vehicleCd' : 'YP',
            'xrclCd' : '3D',
            'originImgFileNm' : '2015_Sedona_EX_BrightSilver.png',
            'realImgFileNm' : '2015_Sedona_EX_BrightSilver.png',
            'cgdsCnt' : '1',
            'uvoCnt' : '0',
            'unreadCnt' : '8',
            'dtcCnt' : '2',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'lastUpdated' : 1434411049000,
            'securityPin' : '1234',
            'dtcKh' : 0,
            'scheduledInfoTimeStamp' : 1420652523457,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'YP avn4 336',
            'odoUpdate' : 'Oct 20, 2014 03:25 PM',
            'endDate' : 1712559600000,
            'endMile' : 100000,
            'checkNameNull' : 'YP avn4 336',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '014508',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDME5C17F6011457',
            'mdlNm' : 'SEDONA',
            'mdlYr' : '2015',
            'acumTrvgDistMile' : 647,
            'acumTrvgDist' : 1041,
            'nextServiceMile' : 0,
            'vehicleCd' : 'YP',
            'xrclCd' : 'EB',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '2',
            'dtcCnt' : '2',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'lastUpdated' : 1433458988000,
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'UVO3 RETRO YP 457',
            'odoUpdate' : 'Jun 04, 2015 04:03 PM',
            'endDate' : 1738051200000,
            'endMile' : 100000,
            'checkNameNull' : 'UVO3 RETRO YP 457',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000647',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDPCCA62E7534268',
            'mdlNm' : 'SPORTAGE',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 3539,
            'acumTrvgDist' : 5696,
            'nextServiceMile' : 0,
            'vehicleCd' : 'SL',
            'xrclCd' : 'E6S',
            'originImgFileNm' : 'sportage_2014_MineralSilver.png',
            'realImgFileNm' : 'sportage_2014_MineralSilver.png',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 's',
            'odoUpdate' : 'Apr 15, 2015 11:14 AM',
            'endDate' : 1672560000000,
            'endMile' : 100000,
            'checkNameNull' : 's',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'A',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '003539',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDPN3AC1G7000276',
            'mdlNm' : 'SPORTAGE',
            'mdlYr' : '2017',
            'acumTrvgDistMile' : 33,
            'acumTrvgDist' : 54,
            'nextServiceMile' : 0,
            'vehicleCd' : 'QL',
            'xrclCd' : 'SWP',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '1234',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'QL UVO3 276',
            'odoUpdate' : 'Jul 10, 2015 05:24 PM',
            'endDate' : 1751353200000,
            'endMile' : 100000,
            'checkNameNull' : 'QL UVO3 276',
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000033',
            'wrrtEndMile' : false
          }, {
            'vin' : 'KNDPN3AC9G7000283',
            'mdlNm' : 'SPORTAGE',
            'mdlYr' : '2017',
            'acumTrvgDistMile' : 84,
            'acumTrvgDist' : 136,
            'nextServiceMile' : 0,
            'vehicleCd' : 'QL',
            'xrclCd' : 'SWP',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '0',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : '0000',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'SPORTAGE (UVO)',
            'odoUpdate' : 'Jul 16, 2015 03:19 PM',
            'endDate' : 1751353200000,
            'endMile' : 100000,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '000084',
            'wrrtEndMile' : false
          }, {
            'vin' : 'MOBISDEALERVIN001',
            'mdlNm' : 'OPTIMA',
            'mdlYr' : '2014',
            'acumTrvgDistMile' : 62135,
            'acumTrvgDist' : 99999,
            'nextServiceMile' : 0,
            'vehicleCd' : 'QF',
            'xrclCd' : '2Z',
            'realImgFileNm' : 'failSafe.PNG',
            'cgdsCnt' : '9',
            'uvoCnt' : '0',
            'unreadCnt' : '0',
            'dtcCnt' : '0',
            'violCnt' : '0',
            'poi' : '8',
            'apptCnt' : '0',
            'securityPin' : 'Not Available',
            'dtcKh' : 0,
            'vehicleStatus' : 'notexists',
            'vehNick' : 'OPTIMA (UVO)',
            'odoUpdate' : 'Apr 16, 2014 10:50 PM',
            'endDate' : 1672560000000,
            'endMile' : 100000,
            'fuelType' : '0',
            'actVin' : 'N',
            'enrVin' : 'C',
            'launchType' : '1',
            'khVehicle' : '0',
            'enrVinKh' : '0',
            'odometer' : '062135',
            'wrrtEndMile' : false
          }
        ]
      }

      var singleVehicle =
      {
        'selectedVin':'KNALU4D30E6013409',
        'vehicles':[
          {'vin':'KNALU4D30E6013409','mdlNm':'K900','mdlYr':'2016',
          'acumTrvgDistMile':2864,'acumTrvgDist':4271,'nextServiceMile':0,
          'vehicleCd':'KH','xrclCd':'MBN','realImgFileNm':'failSafe.PNG',
          'cgdsCnt':'0','uvoCnt':'0','unreadCnt':'0','dtcCnt':'0',
          'violCnt':'0','poi':'1','apptCnt':'0','securityPin':'Not Available',
          'dtcKh':0,'vehicleStatus':'notexists','vehNick':'K900 (UVO) Test',
          'odoUpdate':'Apr 10, 2014 03:04 PM','endDate':1672560000000,'endMile':100000,
          'checkNameNull':'K900 (UVO) Test','fuelType':'0','actVin':'N',
          'enrVin':'C','khVehicle':'K900','enrVinKh':'4','odometer':'002864','wrrtEndMile':false
          }]
      };

      // returnData = singleVehicle;

      return [200, returnData, {}];
    });

    $httpBackend.whenGET(/\/ccw\/com\/notificationsJSON\.do/).respond(function(method,url,data) {
      var returnData = {'awards':1,'speed':1};

      return [200, returnData, {}];
    });

    $httpBackend.whenGET(/\/ccw\/kh\/vehicleStatus\.do/).respond(function(method,url,data) {
      var returnData = {'serviceResponse': {
        'timeStampVO': {
          'year':0,'month':0,'day':0,'hour':0,'minute':0,
          'seconds':0,'unixTimestamp':1429918896
        },
        'latestVehicleStatus': {
            'airCtrlOn':false,'engine':true,'doorLock':true,
            'doorOpen': {
              'frontLeft':0,'frontRight':0,'backLeft':0,'backRight':0
            },
            'trunkOpen':false,
            'airTemp': {
              'value':'01H','unit':1
            },
            'defrost':false,'lowFuelLight':false,'acc':false
            }
        },
        'statuscode':'200','success':true
      };

      return [200, returnData, {}];
    });
});
