"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuild_array = rebuild_array;
exports.shuffle_array = shuffle_array;
exports.format_numbered_list = format_numbered_list;
/**
* Removes the first element of an array and returns the remaining elements
* rebuild_array(['a', 'b', 'c']);
* // returns ['b', 'c']
* @param {Array<string>} origin - The array to remove the first element from
* @precondition origin must be an array of strings
* @returns A new array with the first element removed
*/
function rebuild_array(origin) {
    var tmp = [];
    for (var i = 1; i < origin.length; i++) {
        tmp[i - 1] = origin[i];
    }
    return tmp;
}
/**
* Shuffles an array at random using the Fisher-Yates algorithm and returns the shuffled copy
* shuffle_array([1, 2, 3, 4, 5]);
* // returns e.g. [3, 1, 5, 2, 4]
* @param {Array<T>} arr - The array to shuffle
* @precondition arr must be a non-null array
* @returns A new shuffled copy of the input array, original is not modified
*
* OBS this function is not written by us, it is a common shuffle implementation that we borrowed.
*/
function shuffle_array(arr) {
    var _a;
    var a = __spreadArray([], arr, true);
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // Välj en slumpmässig index från 0 till i
        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1]; // Byt plats på elementen på index i och j
    }
    return a;
}
/**
* Formats an array of strings into a numbered list as a single string, used for showing playlists on the page
* format_numbered_list(["Song 1", "Song 2", "Song 3"]);
* // returns "1. Song 1\n2. Song 2\n3. Song 3\n"
* @param {Array<string>} arr - The array to format
* @precondition arr must be a non-null array
* @returns A new formatted string with the songs listed numerically
*/
function format_numbered_list(arr) {
    var tmp = " ";
    for (var i = 0; i < arr.length; i++) {
        tmp += (i + 1) + ". " + arr[i] + '\n';
    }
    return tmp;
}
