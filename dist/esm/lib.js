function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function parse_option(value, default_value) {
  return typeof value !== 'undefined' ? value : default_value;
}
/**
 * @param {!number} count
 * @returns {Array<Object>}
 */

function create_object_array(count) {
  var array = new Array(count);

  for (var i = 0; i < count; i++) {
    array[i] = create_object();
  }

  return array;
}
/**
 * @param {!Object} obj
 * @returns {Array<string>}
 */

function get_keys(obj) {
  return Object.keys(obj);
}
function create_object() {
  return Object.create(null);
}
function concat(arrays) {
  return [].concat.apply([], arrays);
}
function sort_by_length_down(a, b) {
  return b.length - a.length;
}
function is_array(val) {
  return val.constructor === Array;
}
function is_string(val) {
  return typeof val === 'string';
}
function is_object(val) {
  return _typeof(val) === 'object';
}
function is_function(val) {
  return typeof val === 'function';
}

/**
 * @param {!string} str
 * @param {boolean|Array<string|RegExp>=} normalize
 * @param {boolean|string|RegExp=} split
 * @param {boolean=} _collapse
 * @returns {string|Array<string>}
 * @this IndexInterface
 */

function pipeline(str, normalize, split, _collapse) {
  if (str) {
    if (normalize) {
      str = replace(str, normalize);
    }

    if (this.matcher) {
      str = replace(str, this.matcher);
    }

    if (this.stemmer && str.length > 1) {
      str = replace(str, this.stemmer);
    }

    if (_collapse && str.length > 1) {
      str = collapse(str);
    }

    if (split || split === '') {
      var words = str.split(split);
      return this.filter ? filter(words, this.filter) : words;
    }
  }

  return str;
}
var regex_whitespace = /(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u086F\u0888\u088F-\u0897\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF3-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D64\u0D65\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1716-\u171E\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u17EF\u17FA-\u180A\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA828-\uA82B\uA82D-\uA82F\uA836-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE7-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF55-\uDF6F\uDF86-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC51\uDC76-\uDC7E\uDCBB-\uDCC1\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC6D-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE97-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/;
/**
 * @param {!string} str
 * @param {boolean|Array<string|RegExp>=} normalize
 * @param {boolean|string|RegExp=} split
 * @param {boolean=} _collapse
 * @returns {string|Array<string>}
 */
// FlexSearch.prototype.pipeline = function(str, normalize, split, _collapse){
//
//     if(str){
//
//         if(normalize && str){
//
//             str = replace(str, /** @type {Array<string|RegExp>} */ (normalize));
//         }
//
//         if(str && this.matcher){
//
//             str = replace(str, this.matcher);
//         }
//
//         if(this.stemmer && str.length > 1){
//
//             str = replace(str, this.stemmer);
//         }
//
//         if(_collapse && str.length > 1){
//
//             str = collapse(str);
//         }
//
//         if(str){
//
//             if(split || (split === "")){
//
//                 const words = str.split(/** @type {string|RegExp} */ (split));
//
//                 return this.filter ? filter(words, this.filter) : words;
//             }
//         }
//     }
//
//     return str;
// };
// export function pipeline(str, normalize, matcher, stemmer, split, _filter, _collapse){
//
//     if(str){
//
//         if(normalize && str){
//
//             str = replace(str, normalize);
//         }
//
//         if(matcher && str){
//
//             str = replace(str, matcher);
//         }
//
//         if(stemmer && str.length > 1){
//
//             str = replace(str, stemmer);
//         }
//
//         if(_collapse && str.length > 1){
//
//             str = collapse(str);
//         }
//
//         if(str){
//
//             if(split !== false){
//
//                 str = str.split(split);
//
//                 if(_filter){
//
//                     str = filter(str, _filter);
//                 }
//             }
//         }
//     }
//
//     return str;
// }

/**
 * @param {Array<string>} words
 * @returns {Object<string, string>}
 */

function init_filter(words) {
  var filter = create_object();

  for (var i = 0, length = words.length; i < length; i++) {
    filter[words[i]] = 1;
  }

  return filter;
}
/**
 * @param {!Object<string, string>} obj
 * @param {boolean} is_stemmer
 * @returns {Array}
 */

function init_stemmer_or_matcher(obj, is_stemmer) {
  var keys = get_keys(obj);
  var length = keys.length;
  var _final = [];
  var removal = '',
      count = 0;

  for (var i = 0, key, tmp; i < length; i++) {
    key = keys[i];
    tmp = obj[key];

    if (tmp) {
      _final[count++] = regex(is_stemmer ? '(?!\\b)' + key + '(\\b|_)' : key);
      _final[count++] = tmp;
    } else {
      removal += (removal ? '|' : '') + key;
    }
  }

  if (removal) {
    _final[count++] = regex(is_stemmer ? '(?!\\b)(' + removal + ')(\\b|_)' : '(' + removal + ')');
    _final[count] = '';
  }

  return _final;
}
/**
 * @param {!string} str
 * @param {Array} regexp
 * @returns {string}
 */

function replace(str, regexp) {
  for (var i = 0, len = regexp.length; i < len; i += 2) {
    str = str.replace(regexp[i], regexp[i + 1]);

    if (!str) {
      break;
    }
  }

  return str;
}
/**
 * @param {!string} str
 * @returns {RegExp}
 */

function regex(str) {
  return new RegExp(str, 'g');
}
/**
 * Regex: replace(/(?:(\w)(?:\1)*)/g, "$1")
 * @param {!string} string
 * @returns {string}
 */

function collapse(string) {
  var _final2 = '',
      prev = '';

  for (var i = 0, len = string.length, _char; i < len; i++) {
    if ((_char = string[i]) !== prev) {
      _final2 += prev = _char;
    }
  }

  return _final2;
} // TODO using fast-swap

function filter(words, map) {
  var length = words.length;
  var filtered = [];

  for (var i = 0, count = 0; i < length; i++) {
    var word = words[i];

    if (word && !map[word]) {
      filtered[count++] = word;
    }
  }

  return filtered;
} // const chars = {a:1, e:1, i:1, o:1, u:1, y:1};
//
// function collapse_repeating_chars(string){
//
//     let collapsed_string = "",
//         char_prev = "",
//         char_next = "";
//
//     for(let i = 0; i < string.length; i++){
//
//         const char = string[i];
//
//         if(char !== char_prev){
//
//             if(i && (char === "h")){
//
//                 if((chars[char_prev] && chars[char_next]) || (char_prev === " ")){
//
//                     collapsed_string += char;
//                 }
//             }
//             else{
//
//                 collapsed_string += char;
//             }
//         }
//
//         char_next = (
//
//             (i === (string.length - 1)) ?
//
//                 ""
//             :
//                 string[i + 1]
//         );
//
//         char_prev = char;
//     }
//
//     return collapsed_string;
// }

/**
 * @this IndexInterface
 */

function encode(str) {
  return pipeline.call(this,
  /* string: */
  ('' + str).toLowerCase(),
  /* normalize: */
  false,
  /* split: */
  regex_whitespace,
  /* collapse: */
  false);
}

//import { promise as Promise } from "./polyfill.js";
function apply_async (prototype) {
  register(prototype, 'add');
  register(prototype, 'append');
  register(prototype, 'search');
  register(prototype, 'update');
  register(prototype, 'remove');
}

function register(prototype, key) {
  prototype[key + 'Async'] = function () {
    /** @type {IndexInterface|DocumentInterface} */
    var self = this;
    var args = arguments;
    var arg = args[args.length - 1];
    var callback;

    if (is_function(arg)) {
      callback = arg;
      delete args[args.length - 1];
    }

    var promise = new Promise(function (resolve) {
      setTimeout(function () {
        self.async = true;
        var res = self[key].apply(self, args);
        self.async = false;
        resolve(res);
      });
    });

    if (callback) {
      promise.then(callback);
      return this;
    } else {
      return promise;
    }
  };
}

/**
 * Implementation based on Array.indexOf() provides better performance,
 * but it needs at least one word in the query which is less frequent.
 * Also on large indexes it does not scale well performance-wise.
 * This strategy also lacks of suggestion capabilities (matching & sorting).
 *
 * @param arrays
 * @param limit
 * @param offset
 * @param {boolean|Array=} suggest
 * @returns {Array}
 */
// export function intersect(arrays, limit, offset, suggest) {
//
//     const length = arrays.length;
//     let result = [];
//     let check;
//
//     // determine shortest array and collect results
//     // from the sparse relevance arrays
//
//     let smallest_size;
//     let smallest_arr;
//     let smallest_index;
//
//     for(let x = 0; x < length; x++){
//
//         const arr = arrays[x];
//         const len = arr.length;
//
//         let size = 0;
//
//         for(let y = 0, tmp; y < len; y++){
//
//             tmp = arr[y];
//
//             if(tmp){
//
//                 size += tmp.length;
//             }
//         }
//
//         if(!smallest_size || (size < smallest_size)){
//
//             smallest_size = size;
//             smallest_arr = arr;
//             smallest_index = x;
//         }
//     }
//
//     smallest_arr = smallest_arr.length === 1 ?
//
//         smallest_arr[0]
//     :
//         concat(smallest_arr);
//
//     if(suggest){
//
//         suggest = [smallest_arr];
//         check = create_object();
//     }
//
//     let size = 0;
//     let steps = 0;
//
//     // process terms in reversed order often results in better performance.
//     // the outer loop must be the words array, using the
//     // smallest array here disables the "fast fail" optimization.
//
//     for(let x = length - 1; x >= 0; x--){
//
//         if(x !== smallest_index){
//
//             steps++;
//
//             const word_arr = arrays[x];
//             const word_arr_len = word_arr.length;
//             const new_arr = [];
//
//             let count = 0;
//
//             for(let z = 0, id; z < smallest_arr.length; z++){
//
//                 id = smallest_arr[z];
//
//                 let found;
//
//                 // process relevance in forward order (direction is
//                 // important for adding IDs during the last round)
//
//                 for(let y = 0; y < word_arr_len; y++){
//
//                     const arr = word_arr[y];
//
//                     if(arr.length){
//
//                         found = arr.indexOf(id) !== -1;
//
//                         if(found){
//
//                             // check if in last round
//
//                             if(steps === length - 1){
//
//                                 if(offset){
//
//                                     offset--;
//                                 }
//                                 else{
//
//                                     result[size++] = id;
//
//                                     if(size === limit){
//
//                                         // fast path "end reached"
//
//                                         return result;
//                                     }
//                                 }
//
//                                 if(suggest){
//
//                                     check[id] = 1;
//                                 }
//                             }
//
//                             break;
//                         }
//                     }
//                 }
//
//                 if(found){
//
//                     new_arr[count++] = id;
//                 }
//             }
//
//             if(suggest){
//
//                 suggest[steps] = new_arr;
//             }
//             else if(!count){
//
//                 return [];
//             }
//
//             smallest_arr = new_arr;
//         }
//     }
//
//     if(suggest){
//
//         // needs to iterate in reverse direction
//
//         for(let x = suggest.length - 1, arr, len; x >= 0; x--){
//
//             arr = suggest[x];
//             len = arr && arr.length;
//
//             if(len){
//
//                 for(let y = 0, id; y < len; y++){
//
//                     id = arr[y];
//
//                     if(!check[id]){
//
//                         check[id] = 1;
//
//                         if(offset){
//
//                             offset--;
//                         }
//                         else{
//
//                             result[size++] = id;
//
//                             if(size === limit){
//
//                                 // fast path "end reached"
//
//                                 return result;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//
//     return result;
// }

/**
 * Implementation based on Object[key] provides better suggestions
 * capabilities and has less performance scaling issues on large indexes.
 *
 * @param arrays
 * @param limit
 * @param offset
 * @param {boolean|Array=} suggest
 * @returns {Array}
 */

function intersect(arrays, limit, offset, suggest) {
  var length = arrays.length;
  var result = [];
  var check;
  var check_suggest;
  var size = 0;

  if (suggest) {
    suggest = [];
  } // process terms in reversed order often has advantage for the fast path "end reached".
  // also a reversed order prioritize the order of words from a query.


  for (var x = length - 1; x >= 0; x--) {
    var word_arr = arrays[x];
    var word_arr_len = word_arr.length;
    var check_new = create_object();
    var found = !check; // process relevance in forward order (direction is
    // important for adding IDs during the last round)

    for (var y = 0; y < word_arr_len; y++) {
      var arr = word_arr[y];
      var arr_len = arr.length;

      if (arr_len) {
        // loop through IDs
        for (var z = 0, check_idx, id; z < arr_len; z++) {
          id = arr[z];

          if (check) {
            if (check[id]) {
              // check if in last round
              if (!x) {
                if (offset) {
                  offset--;
                } else {
                  result[size++] = id;

                  if (size === limit) {
                    // fast path "end reached"
                    return result;
                  }
                }
              }

              if (x || suggest) {
                check_new[id] = 1;
              }

              found = true;
            }

            if (suggest) {
              check_idx = check_suggest[id];
              check_suggest[id] = check_idx ? ++check_idx : check_idx = 1; // do not adding IDs which are already included in the result (saves one loop)
              // the first intersection match has the check index 2, so shift by -2

              if (check_idx < length) {
                var tmp = suggest[check_idx - 2] || (suggest[check_idx - 2] = []);
                tmp[tmp.length] = id;
              }
            }
          } else {
            // pre-fill in first round
            check_new[id] = 1;
          }
        }
      }
    }

    if (suggest) {
      // re-use the first pre-filled check for suggestions
      check || (check_suggest = check_new);
    } else if (!found) {
      return [];
    }

    check = check_new;
  }

  if (suggest) {
    // needs to iterate in reverse direction
    for (var _x = suggest.length - 1, _arr, len; _x >= 0; _x--) {
      _arr = suggest[_x];
      len = _arr.length;

      for (var _y = 0, _id; _y < len; _y++) {
        _id = _arr[_y];

        if (!check[_id]) {
          if (offset) {
            offset--;
          } else {
            result[size++] = _id;

            if (size === limit) {
              // fast path "end reached"
              return result;
            }
          }

          check[_id] = 1;
        }
      }
    }
  }

  return result;
}
/**
 * @param mandatory
 * @param arrays
 * @returns {Array}
 */

function intersect_union(mandatory, arrays) {
  var check = create_object();
  var union = create_object();
  var result = [];

  for (var x = 0; x < mandatory.length; x++) {
    check[mandatory[x]] = 1;
  }

  for (var _x2 = 0, arr; _x2 < arrays.length; _x2++) {
    arr = arrays[_x2];

    for (var y = 0, id; y < arr.length; y++) {
      id = arr[y];

      if (check[id]) {
        if (!union[id]) {
          union[id] = 1;
          result[result.length] = id;
        }
      }
    }
  }

  return result;
}

/**
 * @param {boolean|number=} limit
 * @constructor
 */

function CacheClass(limit) {
  /** @private */
  this.limit = limit !== true && limit;
  /** @private */

  this.cache = create_object();
  /** @private */

  this.queue = []; //this.clear();
}
/**
 * @param {string|Object} query
 * @param {number|Object=} limit
 * @param {Object=} options
 * @this {IndexInterface}
 * @returns {Array<number|string>}
 */

function searchCache(query, limit, options) {
  if (is_object(query)) {
    query = query.query;
  }

  var cache = this.cache.get(query);

  if (!cache) {
    cache = this.search(query, limit, options);
    this.cache.set(query, cache);
  }

  return cache;
} // CacheClass.prototype.clear = function(){
//
//     /** @private */
//     this.cache = create_object();
//
//     /** @private */
//     this.queue = [];
// };

CacheClass.prototype.set = function (key, value) {
  if (!this.cache[key]) {
    // it is just a shame that native function array.shift() performs so bad
    // const length = this.queue.length;
    //
    // this.queue[length] = key;
    //
    // if(length === this.limit){
    //
    //     delete this.cache[this.queue.shift()];
    // }
    // the same bad performance
    // this.queue.unshift(key);
    //
    // if(this.queue.length === this.limit){
    //
    //     this.queue.pop();
    // }
    // fast implementation variant
    // let length = this.queue.length;
    //
    // if(length === this.limit){
    //
    //     length--;
    //
    //     delete this.cache[this.queue[0]];
    //
    //     for(let x = 0; x < length; x++){
    //
    //         this.queue[x] = this.queue[x + 1];
    //     }
    // }
    //
    // this.queue[length] = key;
    // current fastest implementation variant
    // theoretically that should not perform better compared to the example above
    var length = this.queue.length;

    if (length === this.limit) {
      delete this.cache[this.queue[length - 1]];
    } else {
      length++;
    }

    for (var x = length - 1; x > 0; x--) {
      this.queue[x] = this.queue[x - 1];
    }

    this.queue[0] = key;
  }

  this.cache[key] = value;
};

CacheClass.prototype.get = function (key) {
  var cache = this.cache[key];

  if (this.limit && cache) {
    // probably the indexOf() method performs faster when matched content is on front (left-to-right)
    // using lastIndexOf() does not help, it performs almost slower
    var pos = this.queue.indexOf(key); // if(pos < this.queue.length - 1){
    //
    //     const tmp = this.queue[pos];
    //     this.queue[pos] = this.queue[pos + 1];
    //     this.queue[pos + 1] = tmp;
    // }

    if (pos) {
      var tmp = this.queue[pos - 1];
      this.queue[pos - 1] = this.queue[pos];
      this.queue[pos] = tmp;
    }
  }

  return cache;
};

CacheClass.prototype.del = function (id) {
  for (var i = 0, item, key; i < this.queue.length; i++) {
    key = this.queue[i];
    item = this.cache[key];

    if (item.indexOf(id) !== -1) {
      this.queue.splice(i--, 1);
      delete this.cache[key];
    }
  }
};

/**
 * @constructor
 * @param {Object=} options
 * @return {Index}
 */

var Index = /*#__PURE__*/function () {
  function Index() {
    var _options$context, _options$context2, _options$context3, _options$context4, _options$context5;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Index);

    this.encode = encode;
    this.register = create_object();
    this.resolution = options.resolution || 9;
    this.tokenize = options.tokenize || 'strict';
    this.depth = options === null || options === void 0 ? void 0 : (_options$context = options.context) === null || _options$context === void 0 ? void 0 : _options$context.depth;
    this.bidirectional = parse_option(options === null || options === void 0 ? void 0 : (_options$context2 = options.context) === null || _options$context2 === void 0 ? void 0 : _options$context2.bidirectional, true);
    this.optimize = parse_option(options.optimize, true);
    this.minlength = options.minlength || 1;
    this.boost = options.boost; // when not using the memory strategy the score array should not pre-allocated to its full length

    this.map = this.optimize ? create_object_array((options === null || options === void 0 ? void 0 : (_options$context3 = options.context) === null || _options$context3 === void 0 ? void 0 : _options$context3.resolution) || 9) : create_object();
    this.resolution_ctx = (options === null || options === void 0 ? void 0 : (_options$context4 = options.context) === null || _options$context4 === void 0 ? void 0 : _options$context4.resolution) || 1;
    this.ctx = this.optimize ? create_object_array((options === null || options === void 0 ? void 0 : (_options$context5 = options.context) === null || _options$context5 === void 0 ? void 0 : _options$context5.resolution) || 1) : create_object();
    this.rtl = options.rtl;
    this.matcher = options.matcher && init_stemmer_or_matcher(options.matcher, false);
    this.stemmer = options.stemmer && init_stemmer_or_matcher(options.stemmer, true);
    this.filter = options.filter && init_filter(options.filter);
    this.cache = options.cache && new CacheClass(options.cache);
  } //Index.prototype.pipeline = pipeline;

  /**
   * @param {!number|string} id
   * @param {!string} content
   */


  _createClass(Index, [{
    key: "append",
    value: function append(id, content) {
      return this.add(id, content, true);
    }
    /**
     * @param {!number|string} id
     * @param {!string} content
     * @param {boolean=} _append
     * @param {boolean=} _skip_update
     */

  }, {
    key: "add",
    value: function add(id, content, _append, _skip_update) {
      if (content && (id || id === 0)) {
        if (!_skip_update && !_append && this.register[id]) {
          return this.update(id, content);
        }

        content = this.encode(content);
        var length = content.length;

        if (length) {
          // check context dupes to skip all contextual redundancy along a document
          var dupes_ctx = create_object();
          var dupes = create_object();
          var depth = this.depth;
          var resolution = this.resolution;

          for (var i = 0; i < length; i++) {
            var term = content[this.rtl ? length - 1 - i : i];
            var term_length = term.length; // skip dupes will break the context chain

            if (term && term_length >= this.minlength && (depth || !dupes[term])) {
              var score = get_score(resolution, length, i);
              var token = '';

              switch (this.tokenize) {
                case 'full':
                  if (term_length > 3) {
                    for (var x = 0; x < term_length; x++) {
                      for (var y = term_length; y > x; y--) {
                        if (y - x >= this.minlength) {
                          var partial_score = get_score(resolution, length, i, term_length, x);
                          token = term.substring(x, y);
                          this.push_index(dupes, token, partial_score, id, _append);
                        }
                      }
                    }

                    break;
                  }

                // fallthrough to next case when term length < 4

                case 'reverse':
                  // skip last round (this token exist already in "forward")
                  if (term_length > 2) {
                    for (var _x = term_length - 1; _x > 0; _x--) {
                      token = term[_x] + token;

                      if (token.length >= this.minlength) {
                        var _partial_score = get_score(resolution, length, i, term_length, _x);

                        this.push_index(dupes, token, _partial_score, id, _append);
                      }
                    }

                    token = '';
                  }

                // fallthrough to next case to apply forward also

                case 'forward':
                  if (term_length > 1) {
                    for (var _x2 = 0; _x2 < term_length; _x2++) {
                      token += term[_x2];

                      if (token.length >= this.minlength) {
                        this.push_index(dupes, token, score, id, _append);
                      }
                    }

                    break;
                  }

                // fallthrough to next case when token has a length of 1

                default:
                  // case "strict":
                  if (this.boost) {
                    score = Math.min(score / this.boost(content, term, i) | 0, resolution - 1);
                  }

                  this.push_index(dupes, term, score, id, _append); // context is just supported by tokenizer "strict"

                  if (depth) {
                    if (length > 1 && i < length - 1) {
                      // check inner dupes to skip repeating words in the current context
                      var dupes_inner = create_object();
                      var _resolution = this.resolution_ctx;
                      var keyword = term;
                      var size = Math.min(depth + 1, length - i);
                      dupes_inner[keyword] = 1;

                      for (var _x3 = 1; _x3 < size; _x3++) {
                        term = content[this.rtl ? length - 1 - i - _x3 : i + _x3];

                        if (term && term.length >= this.minlength && !dupes_inner[term]) {
                          dupes_inner[term] = 1;
                          var context_score = get_score(_resolution + (length / 2 > _resolution ? 0 : 1), length, i, size - 1, _x3 - 1);
                          var swap = this.bidirectional && term > keyword;
                          this.push_index(dupes_ctx, swap ? keyword : term, context_score, id, _append, swap ? term : keyword);
                        }
                      }
                    }
                  }

              }
            }
          }
        }
      }

      return this;
    }
    /**
     * @private
     * @param dupes
     * @param value
     * @param score
     * @param id
     * @param {boolean=} append
     * @param {string=} keyword
     */

  }, {
    key: "push_index",
    value: function push_index(dupes, value, score, id, append, keyword) {
      var arr = keyword ? this.ctx : this.map;

      if (!dupes[value] || keyword && !dupes[value][keyword]) {
        if (this.optimize) {
          arr = arr[score];
        }

        if (keyword) {
          dupes = dupes[value] || (dupes[value] = create_object());
          dupes[keyword] = 1;
          arr = arr[keyword] || (arr[keyword] = create_object());
        } else {
          dupes[value] = 1;
        }

        arr = arr[value] || (arr[value] = []);

        if (!this.optimize) {
          arr = arr[score] || (arr[score] = []);
        }

        if (!append || arr.indexOf(id) === -1) {
          var _this$register;

          arr[arr.length] = id;
          (_this$register = this.register)[id] || (_this$register[id] = []);
          this.register[id].push(arr);
        }
      }
    }
    /**
     * @param {string|Object} query
     * @param {number|Object=} limit
     * @param {Object=} options
     * @returns {Array<number|string>}
     */

  }, {
    key: "search",
    value: function search(query, limit, options) {
      if (!options) {
        if (!limit && is_object(query)) {
          options = query;
          query = options.query;
        } else if (is_object(limit)) {
          options = limit;
        }
      }

      var result = [];
      var length;
      var context,
          suggest,
          offset = 0;

      if (options) {
        limit = options.limit;
        offset = options.offset || 0;
        context = options.context;
        suggest = options.suggest;
      }

      if (query) {
        query = this.encode(query);
        length = query.length; // TODO: solve this in one single loop below

        if (length > 1) {
          var dupes = create_object();
          var query_new = [];

          for (var i = 0, count = 0, term; i < length; i++) {
            term = query[i];

            if (term && term.length >= this.minlength && !dupes[term]) {
              // this fast path just could applied when not in memory-optimized mode
              if (!this.optimize && !suggest && !this.map[term]) {
                // fast path "not found"
                return result;
              } else {
                query_new[count++] = term;
                dupes[term] = 1;
              }
            }
          }

          query = query_new;
          length = query.length;
        }
      }

      if (!length) {
        return result;
      }

      limit || (limit = 100);
      var depth = this.depth && length > 1 && context !== false;
      var index = 0,
          keyword;

      if (depth) {
        keyword = query[0];
        index = 1;
      } else {
        if (length > 1) {
          query.sort(sort_by_length_down);
        }
      }

      for (var arr, _term; index < length; index++) {
        _term = query[index]; // console.log(keyword);
        // console.log(term);
        // console.log("");

        if (depth) {
          arr = this.add_result(result, suggest, limit, offset, length === 2, _term, keyword); // console.log(arr);
          // console.log(result);
          // when suggestion enabled just forward keyword if term was found
          // as long as the result is empty forward the pointer also

          if (!suggest || arr !== false || !result.length) {
            keyword = _term;
          }
        } else {
          arr = this.add_result(result, suggest, limit, offset, length === 1, _term);
        }

        if (arr) {
          return arr;
        } // apply suggestions on last loop or fallback


        if (suggest && index === length - 1) {
          var _length = result.length;

          if (!_length) {
            if (depth) {
              // fallback to non-contextual search when no result was found
              depth = 0;
              index = -1;
              continue;
            }

            return result;
          } else if (_length === 1) {
            // fast path optimization
            return single_result(result[0], limit, offset);
          }
        }
      }

      return intersect(result, limit, offset, suggest);
    }
    /**
     * Returns an array when the result is done (to stop the process immediately),
     * returns false when suggestions is enabled and no result was found,
     * or returns nothing when a set was pushed successfully to the results
     *
     * @private
     * @param {Array} result
     * @param {Array} suggest
     * @param {number} limit
     * @param {number} offset
     * @param {boolean} single_term
     * @param {string} term
     * @param {string=} keyword
     * @return {Array<Array<string|number>>|boolean|undefined}
     */

  }, {
    key: "add_result",
    value: function add_result(result, suggest, limit, offset, single_term, term, keyword) {
      var word_arr = [];
      var arr = keyword ? this.ctx : this.map;

      if (!this.optimize) {
        arr = get_array(arr, term, keyword, this.bidirectional);
      }

      if (arr) {
        var count = 0;
        var arr_len = Math.min(arr.length, keyword ? this.resolution_ctx : this.resolution); // relevance:

        for (var x = 0, size = 0, tmp, len; x < arr_len; x++) {
          tmp = arr[x];

          if (tmp) {
            if (this.optimize) {
              tmp = get_array(tmp, term, keyword, this.bidirectional);
            }

            if (offset) {
              if (tmp && single_term) {
                len = tmp.length;

                if (len <= offset) {
                  offset -= len;
                  tmp = null;
                } else {
                  tmp = tmp.slice(offset);
                  offset = 0;
                }
              }
            }

            if (tmp) {
              // keep score (sparse array):
              //word_arr[x] = tmp;
              // simplified score order:
              word_arr[count++] = tmp;

              if (single_term) {
                size += tmp.length;

                if (size >= limit) {
                  // fast path optimization
                  break;
                }
              }
            }
          }
        }

        if (count) {
          if (single_term) {
            // fast path optimization
            // offset was already applied at this point
            return single_result(word_arr, limit, 0);
          }

          result[result.length] = word_arr;
          return;
        }
      } // return an empty array will stop the loop,
      // to prevent stop when using suggestions return a false value


      return !suggest && word_arr;
    }
  }, {
    key: "contain",
    value: function contain(id) {
      return !!this.register[id];
    }
  }, {
    key: "update",
    value: function update(id, content) {
      return this.remove(id).add(id, content);
    }
    /**
     * @param {boolean=} _skip_deletion
     */

  }, {
    key: "remove",
    value: function remove(id, _skip_deletion) {
      var refs = this.register[id];

      if (refs) {
        remove_index(this.map, id, this.resolution, this.optimize);

        if (this.depth) {
          remove_index(this.ctx, id, this.resolution_ctx, this.optimize);
        }

        _skip_deletion || delete this.register[id];

        if (this.cache) {
          this.cache.del(id);
        }
      }

      return this;
    }
    /**
     * Convert `this` into an exportable object
     */

  }, {
    key: "serialize",
    value: function serialize() {
      return {
        reg: this.register,
        opt: this.optimize,
        map: this.map,
        ctx: this.ctx,
        tok: this.tokenize
      };
    }
    /**
     * Given a string load an Index object from it
     * @param {string} str the serialized Index object
     */

  }], [{
    key: "deserialize",
    value: function deserialize(obj, params) {
      // TODO add extra parameter for index initialization?
      var result = new Index(params);
      result.optimize = obj.opt;
      result.register = obj.reg;
      result.map = obj.map;
      result.ctx = obj.ctx;
      result.tokenize = obj.tok;
      return result;
    }
  }]);

  return Index;
}();
/**
 * @param {number} resolution
 * @param {number} length
 * @param {number} i
 * @param {number=} term_length
 * @param {number=} x
 * @returns {number}
 */

function get_score(resolution, length, i, term_length, x) {
  // console.log("resolution", resolution);
  // console.log("length", length);
  // console.log("term_length", term_length);
  // console.log("i", i);
  // console.log("x", x);
  // console.log((resolution - 1) / (length + (term_length || 0)) * (i + (x || 0)) + 1);
  // the first resolution slot is reserved for the best match,
  // when a query matches the first word(s).
  // also to stretch score to the whole range of resolution, the
  // calculation is shift by one and cut the floating point.
  // this needs the resolution "1" to be handled additionally.
  // do not stretch the resolution more than the term length will
  // improve performance and memory, also it improves scoring in
  // most cases between a short document and a long document
  return i && resolution > 1 ? length + (term_length || 0) <= resolution ? i + (x || 0) : (resolution - 1) / (length + (term_length || 0)) * (i + (x || 0)) + 1 | 0 : 0;
}

function single_result(result, limit, offset) {
  if (result.length === 1) {
    result = result[0];
  } else {
    result = concat(result);
  }

  return offset || result.length > limit ? result.slice(offset, offset + limit) : result;
}

function get_array(arr, term, keyword, bidirectional) {
  if (keyword) {
    // the frequency of the starting letter is slightly less
    // on the last half of the alphabet (m-z) in almost every latin language,
    // so we sort downwards (https://en.wikipedia.org/wiki/Letter_frequency)
    var swap = bidirectional && term > keyword;
    arr = arr[swap ? term : keyword];
    arr = arr && arr[swap ? keyword : term];
  } else {
    arr = arr[term];
  }

  return arr;
}
/**
 * @param map
 * @param id
 * @param res
 * @param optimize
 * @param {number=} resolution
 * @return {number}
 */


function remove_index(map, id, res, optimize, resolution) {
  var count = 0;

  if (is_array(map)) {
    // the first array is the score array in both strategies
    if (!resolution) {
      resolution = Math.min(map.length, res);

      for (var x = 0, arr; x < resolution; x++) {
        arr = map[x];

        if (arr) {
          count = remove_index(arr, id, res, optimize, resolution);

          if (!optimize && !count) {
            // when not memory optimized the score index should removed
            delete map[x];
          }
        }
      }
    } else {
      var pos = map.indexOf(id);

      if (pos !== -1) {
        // fast path, when length is 1 or lower then the whole field gets deleted
        if (map.length > 1) {
          map.splice(pos, 1);
          count++;
        }
      } else {
        count++;
      }
    }
  } else {
    for (var key in map) {
      count = remove_index(map[key], id, res, optimize, resolution);

      if (!count) {
        delete map[key];
      }
    }
  }

  return count;
} // TODO bring all these functions into this file


Index.prototype.searchCache = searchCache;
apply_async(Index.prototype);

/**
 * @constructor
 * @implements DocumentInterface
 * @param {Object=} options
 * @return {Document}
 */

var Document = /*#__PURE__*/function () {
  function Document(options) {
    _classCallCheck(this, Document);

    var document = options.document || options.doc || options;
    var opt;
    this.tree = [];
    this.field = [];
    this.marker = [];
    this.register = create_object();
    this.key = (opt = document.key || document.id) && parse_tree(opt, this.marker) || 'id';
    this.storetree = (opt = document.store) && opt !== true && [];
    this.store = opt && create_object();
    this.tag = (opt = document.tag) && parse_tree(opt, this.marker);
    this.tagindex = opt && create_object();
    this.cache = (opt = options.cache) && new CacheClass(opt); // do not apply cache again for the indexes

    options.cache = false;
    this.worker = options.worker; // this switch is used by recall of promise callbacks

    this.async = false;
    this.index = this.parse_descriptor(options, document);
  }
  /**
   *
   * @param id
   * @param content
   * @param {boolean=} _append
   * @returns {Document|Promise}
   */


  _createClass(Document, [{
    key: "add",
    value: function add(id, content, _append) {
      if (is_object(id)) {
        content = id;
        id = parse_simple(content, this.key);
      }

      if (content && (id || id === 0)) {
        if (!_append && this.register[id]) {
          return this.update(id, content);
        }

        for (var i = 0, tree, field; i < this.field.length; i++) {
          field = this.field[i];
          tree = this.tree[i];

          if (is_string(tree)) {
            tree = [tree];
          }

          add_index(content, tree, this.marker, 0, this.index[field], id, tree[0], _append);
        }

        if (this.tag) {
          var tag = parse_simple(content, this.tag);
          var dupes = create_object();

          if (is_string(tag)) {
            tag = [tag];
          }

          for (var _i = 0, key, arr; _i < tag.length; _i++) {
            key = tag[_i];

            if (!dupes[key]) {
              dupes[key] = 1;
              arr = this.tagindex[key] || (this.tagindex[key] = []);

              if (!_append || arr.indexOf(id) === -1) {
                arr[arr.length] = id;
              }
            }
          }
        } // TODO: how to handle store when appending contents?


        if (this.store && (!_append || !this.store[id])) {
          var store;

          if (this.storetree) {
            store = create_object();

            for (var _i2 = 0, _tree; _i2 < this.storetree.length; _i2++) {
              _tree = this.storetree[_i2];

              if (is_string(_tree)) {
                store[_tree] = content[_tree];
              } else {
                store_value(content, store, _tree, 0, _tree[0]);
              }
            }
          }

          this.store[id] = store || content;
        }
      }

      return this;
    }
  }, {
    key: "append",
    value: function append(id, content) {
      return this.add(id, content, true);
    }
  }, {
    key: "update",
    value: function update(id, content) {
      return this.remove(id).add(id, content);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      if (is_object(id)) {
        id = parse_simple(id, this.key);
      }

      if (this.register[id]) {
        for (var i = 0; i < this.field.length; i++) {
          // workers does not share the register
          this.index[this.field[i]].remove(id, !this.worker);
        }

        if (this.tag) {
          for (var key in this.tagindex) {
            var tag = this.tagindex[key];
            var pos = tag.indexOf(id);

            if (pos !== -1) {
              if (tag.length > 1) {
                tag.splice(pos, 1);
              } else {
                delete this.tagindex[key];
              }
            }
          }
        }

        if (this.store) {
          delete this.store[id];
        }

        delete this.register[id];
      }

      return this;
    }
    /**
     * @param {!string|Object} query
     * @param {number|Object=} limit
     * @param {Object=} options
     * @param {Array<Array>=} _resolve For internal use only.
     * @returns {Promise|Array}
     */

  }, {
    key: "search",
    value: function search(query, limit, options, _resolve) {
      if (!options) {
        if (!limit && is_object(query)) {
          options = query;
          query = options.query;
        } else if (is_object(limit)) {
          options = limit;
          limit = 0;
        }
      }

      var result = [],
          result_field = [];
      var pluck, enrich;
      var field,
          tag,
          bool,
          offset,
          count = 0;

      if (options) {
        if (is_array(options)) {
          field = options;
          options = null;
        } else {
          pluck = options.pluck;
          field = pluck || options.index || options.field
          /*|| (is_string(options) && [options])*/
          ;
          tag = options.tag;
          enrich = this.store && options.enrich;
          bool = options.bool === 'and';
          limit = options.limit || 100;
          offset = options.offset || 0;

          if (tag) {
            if (is_string(tag)) {
              tag = [tag];
            } // when tags is used and no query was set,
            // then just return the tag indexes


            if (!query) {
              for (var i = 0, res; i < tag.length; i++) {
                res = get_tag.call(this, tag[i], limit, offset, enrich);

                if (res) {
                  result[result.length] = res;
                  count++;
                }
              }

              return count ? result : [];
            }
          }

          if (is_string(field)) {
            field = [field];
          }
        }
      }

      field || (field = this.field);
      bool = bool && (field.length > 1 || tag && tag.length > 1);
      var promises = !_resolve && (this.worker || this.async) && []; // TODO solve this in one loop below

      for (var _i3 = 0, _res, key, len; _i3 < field.length; _i3++) {
        var opt = void 0;
        key = field[_i3];

        if (!is_string(key)) {
          opt = key;
          key = key.field;
        }

        if (promises) {
          promises[_i3] = this.index[key].searchAsync(query, limit, opt || options); // just collect and continue

          continue;
        } else if (_resolve) {
          _res = _resolve[_i3];
        } else {
          // inherit options also when search? it is just for laziness, Object.assign() has a cost
          _res = this.index[key].search(query, limit, opt || options);
        }

        len = _res && _res.length;

        if (tag && len) {
          var arr = [];
          var _count = 0;

          if (bool) {
            // prepare for intersection
            arr[0] = [_res];
          }

          for (var y = 0, _key, _res2; y < tag.length; y++) {
            _key = tag[y];
            _res2 = this.tagindex[_key];
            len = _res2 && _res2.length;

            if (len) {
              _count++;
              arr[arr.length] = bool ? [_res2] : _res2;
            }
          }

          if (_count) {
            if (bool) {
              _res = intersect(arr, limit || 100, offset || 0);
            } else {
              _res = intersect_union(_res, arr);
            }

            len = _res.length;
          }
        }

        if (len) {
          result_field[count] = key;
          result[count++] = _res;
        } else if (bool) {
          return [];
        }
      }

      if (promises) {
        var self = this; // anyone knows a better workaround of optionally having async promises?
        // the promise.all() needs to be wrapped into additional promise,
        // otherwise the recursive callback wouldn't run before return

        return new Promise(function (resolve) {
          Promise.all(promises).then(function (result) {
            resolve(self.search(query, limit, options, result));
          });
        });
      }

      if (!count) {
        // fast path "not found"
        return [];
      }

      if (pluck && (!enrich || !this.store)) {
        // fast path optimization
        return result[0];
      }

      for (var _i4 = 0, _res3; _i4 < result_field.length; _i4++) {
        _res3 = result[_i4];

        if (_res3.length) {
          if (enrich) {
            _res3 = apply_enrich.call(this, _res3);
          }
        }

        if (pluck) {
          return _res3;
        }

        result[_i4] = {
          'field': result_field[_i4],
          'result': _res3
        };
      }

      return result;
    }
  }, {
    key: "contain",
    value: function contain(id) {
      return !!this.register[id];
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.store[id];
    }
  }, {
    key: "set",
    value: function set(id, data) {
      this.store[id] = data;
      return this;
    }
    /**
     * Serialize `this` into an exportable object
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var result = {
        tag: this.tagIndex,
        reg: this.register,
        store: this.store,
        field: this.field,
        index: {}
      };
      Object.entries(this.index).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            index = _ref2[1];

        result.index[key] = index.serialize();
      });
      return result;
    }
    /**
     * Create a `Document` from a serialized object
     */

  }, {
    key: "parse_descriptor",
    value: // Helper methods
    function parse_descriptor(options, document) {
      var index = create_object();
      var field = document.index || document.field || document;

      if (is_string(field)) {
        field = [field];
      }

      for (var i = 0, key, opt; i < field.length; i++) {
        key = field[i];

        if (!is_string(key)) {
          opt = key;
          key = key.field;
        }

        opt = is_object(opt) ? Object.assign({}, options, opt) : options;

        if (!this.worker) {
          index[key] = new Index(opt);
          index[key].register = this.register;
        }

        this.tree[i] = parse_tree(key, this.marker);
        this.field[i] = key;
      }

      if (this.storetree) {
        var store = document.store;

        if (is_string(store)) {
          store = [store];
        }

        for (var _i5 = 0; _i5 < store.length; _i5++) {
          this.storetree[_i5] = parse_tree(store[_i5], this.marker);
        }
      }

      return index;
    }
  }], [{
    key: "deserialize",
    value: function deserialize(obj, params) {
      // TODO add properties here?
      var result = new Document(params);
      result.tagIndex = obj.tag;
      result.register = obj.reg;
      result.store = obj.store;
      result.field = obj.field;
      Object.entries(obj.index).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            exportedIndex = _ref4[1];

        result.index[key] = Index.deserialize(exportedIndex);
        result.index[key].register = obj.reg;
      });
      return result;
    }
  }]);

  return Document;
}();

function parse_tree(key, marker) {
  var tree = key.split(':');
  var count = 0;

  for (var i = 0; i < tree.length; i++) {
    key = tree[i];

    if (key.indexOf('[]') >= 0) {
      key = key.substring(0, key.length - 2);

      if (key) {
        marker[count] = true;
      }
    }

    if (key) {
      tree[count++] = key;
    }
  }

  if (count < tree.length) {
    tree.length = count;
  }

  return count > 1 ? tree : tree[0];
}

function parse_simple(obj, tree) {
  if (is_string(tree)) {
    obj = obj[tree];
  } else {
    for (var i = 0; obj && i < tree.length; i++) {
      obj = obj[tree[i]];
    }
  }

  return obj;
}

function store_value(obj, store, tree, pos, key) {
  obj = obj[key]; // reached target field

  if (pos === tree.length - 1) {
    // store target value
    store[key] = obj;
  } else if (obj) {
    if (is_array(obj)) {
      store = store[key] = new Array(obj.length);

      for (var i = 0; i < obj.length; i++) {
        // do not increase pos (an array is not a field)
        store_value(obj, store, tree, pos, i);
      }
    } else {
      store = store[key] || (store[key] = create_object());
      key = tree[++pos];
      store_value(obj, store, tree, pos, key);
    }
  }
}

function add_index(obj, tree, marker, pos, index, id, key, _append) {
  obj = obj[key];

  if (obj) {
    // reached target field
    if (pos === tree.length - 1) {
      // handle target value
      if (is_array(obj)) {
        // append array contents so each entry gets a new scoring context
        if (marker[pos]) {
          for (var i = 0; i < obj.length; i++) {
            index.add(id, obj[i],
            /* append: */
            true,
            /* skip update: */
            true);
          }

          return;
        } // or join array contents and use one scoring context


        obj = obj.join(' ');
      }

      index.add(id, obj, _append,
      /* skip_update: */
      true);
    } else {
      if (is_array(obj)) {
        for (var _i6 = 0; _i6 < obj.length; _i6++) {
          // do not increase index, an array is not a field
          add_index(obj, tree, marker, pos, index, id, _i6, _append);
        }
      } else {
        key = tree[++pos];
        add_index(obj, tree, marker, pos, index, id, key, _append);
      }
    }
  }
}
/**
 * @this Document
 */


function get_tag(key, limit, offset, enrich) {
  var res = this.tagindex[key];
  var len = res && res.length - offset;

  if (len && len > 0) {
    if (len > limit || offset) {
      res = res.slice(offset, offset + limit);
    }

    if (enrich) {
      res = apply_enrich.call(this, res);
    }

    return {
      'tag': key,
      'result': res
    };
  }
}
/**
 * @this Document
 */


function apply_enrich(res) {
  var arr = new Array(res.length);

  for (var x = 0, id; x < res.length; x++) {
    id = res[x];
    arr[x] = {
      'id': id,
      'doc': this.store[id]
    };
  }

  return arr;
} // TODO move all of this into this file


Document.prototype.searchCache = searchCache;
apply_async(Document.prototype);

export { Document, Index };
//# sourceMappingURL=lib.js.map
