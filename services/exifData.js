var ExifImage = require('exif').ExifImage;
var Q = require('Q');

exports.getExif = function(imagePath){
	var deferred = Q.defer();
	try {
	    new ExifImage({ image : imagePath }, function (error, exifData) {
	        if (error){
	            console.log('Error: '+error.message);
				deferred.reject(error.message);
			}
	        else{
				deferred.resolve(exifData); 
			}
	    });
	} catch (error) {
	    console.log('Error: ' + error.message);
		deferred.reject(error.message);
	}
	return deferred.promise;
};