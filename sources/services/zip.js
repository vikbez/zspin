'use strict';

app.factory('zip', ['zspin', 'fs',
  function (zspin, fs) {
    console.log('zip - init');
    var AdmZip = require('adm-zip');

    var service = function(filepath) {
      // filepath = fs.join(zspin.dataPath, filepath);
      var zip = AdmZip(filepath);
      return {
        getEntry: zip.getEntry.bind(zip),
        getEntries: zip.getEntries.bind(zip),

        readFile: function () {
          // zip.readFile(function () {
          //   console.log('ho !');
          // });
        }

      };

      // console.log('pat2h', filepath);
      // return new AdmZip(filepath);
    };
    console.log('zip - ready');
    return service;
  }
]);
