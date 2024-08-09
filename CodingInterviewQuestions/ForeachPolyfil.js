// Creating a polyfill for Array.prototype.forEach in JavaScript is a great exercise to understand how this method works. The forEach method iterates over each element in an array and executes a provided function once for each element.

//     Here's a basic polyfill for Array.prototype.forEach:


    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
          // Check if callback is a function
          if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }
      
          // Get the array that forEach was called on
          var array = Object(this);
          var length = array.length >>> 0; // Convert to unsigned 32-bit integer
      
          // Iterate over the array
          for (var i = 0; i < length; i++) {
            // Check if the index exists in the array (to handle sparse arrays)
            if (i in array) {
              // Call the callback with the current element, index, and array
              callback.call(thisArg, array[i], i, array);
            }
          }
        };
      }
      