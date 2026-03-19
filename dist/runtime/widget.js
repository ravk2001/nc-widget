System.register(["jimu-core","jimu-ui","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/NC-widget/src/runtime/widget.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.SERVICE_URL = 'https://services.nconemap.gov/secure/rest/services/NC1Map_Parcels/MapServer/1';
        this.GP_SERVICE_URL = 'https://gis.drmp.com/arcgis/rest/services/Parcel_Export_NC/GPServer/GeoJSON%20to%20SHP%20or%20KML';
        this.GP_INPUT_PARAM = 'input_geojson';
        this.GP_ZONE_PARAM = 'state_plane_zone';
        this.GP_FORMAT_PARAM = 'export_format';
        this.GP_OUTPUT_PARAM = 'output_file';
        this.zoneOptions = [
            { value: '2264', label: 'North Carolina', epsg: 'EPSG:2264' }
        ];
        this.activeViewChangeHandler = (jmv) => {
            this.setState({ activeView: jmv }, () => {
                this.refreshSelection();
            });
        };
        this.handleCrsChange = (value) => {
            const option = this.zoneOptions.find(o => o.value === value);
            if (option)
                this.setState({ selectedCrs: value, selectedZone: option.label });
        };
        this.handleFileNameChange = (event) => {
            this.setState({ fileName: event.target.value });
        };
        this.state = {
            selectedCrs: '2264',
            selectedZone: 'North Carolina',
            selectedFormat: 'shp',
            selectedFeatures: [],
            isExporting: false,
            exportMessage: '',
            exportError: '',
            exportSuccess: false,
            isLoading: false,
            activeView: null,
            jobProgress: 0,
            downloadUrl: '',
            fileName: 'north_carolina_parcels',
            showSaveDialog: false
        };
    }
    refreshSelection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.setState({ isLoading: true });
                const dataSources = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSources();
                let allSelectedIds = [];
                for (const dsId in dataSources) {
                    const ds = dataSources[dsId];
                    if (ds.type === 'FEATURE_LAYER') {
                        const featureDs = ds;
                        const ids = (featureDs.getSelectedRecordIds() || [])
                            .map(id => parseInt(id.toString()))
                            .filter(id => !isNaN(id));
                        allSelectedIds = [...allSelectedIds, ...ids];
                    }
                }
                if (allSelectedIds.length === 0) {
                    this.setState({ selectedFeatures: [], isLoading: false });
                    return;
                }
                const uniqueIds = [...new Set(allSelectedIds)];
                const features = [];
                const chunks = this.chunkArray(uniqueIds, 100);
                for (const chunk of chunks) {
                    const url = `${this.SERVICE_URL}/query?where=objectid IN (${chunk.join(',')})&outFields=*&returnGeometry=true&outSR=2264&f=json`;
                    const response = yield fetch(url);
                    const data = yield response.json();
                    if (data.features) {
                        data.features.forEach((feat) => {
                            var _a;
                            if ((_a = feat.geometry) === null || _a === void 0 ? void 0 : _a.rings) {
                                features.push({
                                    geometry: feat.geometry,
                                    attributes: feat.attributes
                                });
                            }
                        });
                    }
                }
                this.setState({
                    selectedFeatures: features,
                    isLoading: false
                });
            }
            catch (error) {
                console.error('Refresh error:', error);
                this.setState({ isLoading: false });
            }
        });
    }
    chunkArray(arr, size) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }
    downloadFile(url, fileName, format) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(url);
                const blob = yield response.blob();
                const extension = format === 'shp' ? '.zip' : '.kmz';
                const fullFileName = fileName.endsWith(extension) ? fileName : fileName + extension;
                (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, fullFileName);
                this.setState({
                    downloadUrl: url,
                    exportSuccess: true,
                    exportMessage: `✅ File saved as: ${fullFileName}`
                });
            }
            catch (error) {
                console.error('Download failed:', error);
                this.setState({
                    exportError: `Download failed: ${error.message}`
                });
            }
        });
    }
    exportToGPService(features, zone, format) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                this.setState({ exportMessage: '📦 Preparing...', jobProgress: 10 });
                const geojson = {
                    type: 'FeatureCollection',
                    properties: {
                        filename: this.state.fileName || 'north_carolina_parcels'
                    },
                    features: features.map(f => ({
                        type: 'Feature',
                        geometry: { type: 'Polygon', coordinates: f.geometry.rings },
                        properties: f.attributes
                    }))
                };
                const formData = new FormData();
                formData.append('f', 'json');
                formData.append(this.GP_INPUT_PARAM, JSON.stringify(geojson));
                formData.append(this.GP_ZONE_PARAM, zone);
                formData.append(this.GP_FORMAT_PARAM, format === 'shp' ? 'Shapefile (ZIP)' : 'KML');
                this.setState({ exportMessage: '⏳ Submitting...', jobProgress: 30 });
                const submitResponse = yield fetch(`${this.GP_SERVICE_URL}/submitJob`, { method: 'POST', body: formData });
                const submitResult = yield submitResponse.json();
                if (submitResult.jobId) {
                    const jobId = submitResult.jobId;
                    const jobUrl = `${this.GP_SERVICE_URL}/jobs/${jobId}`;
                    this.setState({ exportMessage: '⚙️ Processing...', jobProgress: 50 });
                    let jobStatus = 'esriJobSubmitted';
                    let attempts = 0;
                    while (jobStatus !== 'esriJobSucceeded' && attempts < 30) {
                        yield this.sleep(1500);
                        const statusResponse = yield fetch(`${jobUrl}?f=json`);
                        const statusResult = yield statusResponse.json();
                        jobStatus = statusResult.jobStatus;
                        this.setState({ jobProgress: Math.min(50 + attempts * 2, 90) });
                        if (jobStatus === 'esriJobFailed') {
                            const errors = ((_b = (_a = statusResult.messages) === null || _a === void 0 ? void 0 : _a.filter((m) => m.type === 'esriJobMessageTypeError')) === null || _b === void 0 ? void 0 : _b.map((m) => m.description).join(', ')) || 'Unknown error';
                            throw new Error(errors);
                        }
                        attempts++;
                    }
                    if (jobStatus === 'esriJobSucceeded') {
                        this.setState({ exportMessage: '📥 Downloading...', jobProgress: 95 });
                        const resultUrl = `${jobUrl}/results/${this.GP_OUTPUT_PARAM}?f=json`;
                        const resultResponse = yield fetch(resultUrl);
                        const resultData = yield resultResponse.json();
                        if ((_c = resultData.value) === null || _c === void 0 ? void 0 : _c.url) {
                            yield this.downloadFile(resultData.value.url, this.state.fileName, format);
                            this.setState({ jobProgress: 100 });
                        }
                    }
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    exportFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({
                isExporting: true,
                exportMessage: '',
                exportError: '',
                exportSuccess: false,
                jobProgress: 0,
                downloadUrl: ''
            });
            try {
                const { selectedZone, selectedFormat, selectedFeatures, fileName } = this.state;
                if (selectedFeatures.length === 0)
                    throw new Error('No parcels selected.');
                if (!fileName.trim())
                    throw new Error('Please enter a file name.');
                yield this.exportToGPService(selectedFeatures, selectedZone, selectedFormat);
            }
            catch (error) {
                this.setState({ exportError: `Export failed: ${error.message}` });
            }
            finally {
                this.setState({ isExporting: false });
            }
        });
    }
    render() {
        var _a;
        const { selectedFeatures, isExporting, exportMessage, exportError, exportSuccess, selectedFormat, isLoading, jobProgress, downloadUrl, fileName } = this.state;
        const selectedOption = this.zoneOptions.find(o => o.value === this.state.selectedCrs);
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const baseWidth = 1920;
        const baseHeight = 1080;
        const widthScale = Math.min(vw / baseWidth, 1.5);
        const heightScale = Math.min(vh / baseHeight, 1.5);
        const scale = Math.min(widthScale, heightScale, 1.2);
        const isPhone = vw < 600;
        const isTablet = vw >= 600 && vw < 1024;
        const isDesktop = vw >= 1024;
        const isShortScreen = vh < 700;
        const sizeMultiplier = isPhone ? 0.85 : isDesktop ? scale : 1;
        const widgetWidth = isPhone ? '100%' : isTablet ? '80%' : 'min(600px, 40vw)';
        const colors = {
            background: '#1a1a1a',
            surface: '#2d2d2d',
            border: '#404040',
            text: '#e0e0e0',
            textSecondary: '#b0b0b0',
            textMuted: '#8a8a8a',
            primary: '#2b7a9c',
            primaryLight: '#3a9bc2',
            success: '#2c7a4d',
            error: '#b34a4a',
            cardBg: '#252525',
            stepBadge: '#2b7a9c'
        };
        const sizes = {
            containerPadding: `${isPhone ? 8 : isShortScreen ? 10 : 16 * sizeMultiplier}px`,
            containerMaxWidth: widgetWidth,
            headerIconSize: `${isPhone ? 28 : isShortScreen ? 30 : 36 * sizeMultiplier}px`,
            headerIconFont: `${isPhone ? 14 : isShortScreen ? 15 : 18 * sizeMultiplier}px`,
            headerTitleSize: `${isPhone ? 18 : isShortScreen ? 20 : 24 * sizeMultiplier}px`,
            headerSubSize: `${isPhone ? 10 : isShortScreen ? 11 : 13 * sizeMultiplier}px`,
            headerMargin: `${isPhone ? 8 : isShortScreen ? 10 : 16 * sizeMultiplier}px`,
            circleSize: `${isPhone ? 24 : isShortScreen ? 26 : 32 * sizeMultiplier}px`,
            circleFont: `${isPhone ? 13 : isShortScreen ? 14 : 16 * sizeMultiplier}px`,
            cardPadding: `${isPhone ? 8 : isShortScreen ? 10 : 14 * sizeMultiplier}px`,
            cardMargin: `${isPhone ? 6 : isShortScreen ? 8 : 12 * sizeMultiplier}px`,
            leftMargin: `${isPhone ? 28 : isShortScreen ? 32 : 42 * sizeMultiplier}px`,
            stepTitleSize: `${isPhone ? 13 : isShortScreen ? 14 : 16 * sizeMultiplier}px`,
            bodyTextSize: `${isPhone ? 12 : isShortScreen ? 13 : 14 * sizeMultiplier}px`,
            smallTextSize: `${isPhone ? 10 : isShortScreen ? 11 : 12 * sizeMultiplier}px`,
            tinyTextSize: `${isPhone ? 8 : isShortScreen ? 9 : 10 * sizeMultiplier}px`,
            selectHeight: `${isPhone ? 28 : isShortScreen ? 30 : 36 * sizeMultiplier}px`,
            selectFont: `${isPhone ? 11 : isShortScreen ? 12 : 13 * sizeMultiplier}px`,
            buttonHeight: `${isPhone ? 30 : isShortScreen ? 32 : 40 * sizeMultiplier}px`,
            buttonFont: `${isPhone ? 12 : isShortScreen ? 13 : 15 * sizeMultiplier}px`,
            inputHeight: `${isPhone ? 28 : isShortScreen ? 30 : 36 * sizeMultiplier}px`,
            inputFont: `${isPhone ? 11 : isShortScreen ? 12 : 13 * sizeMultiplier}px`,
            formatCardIconSize: `${isPhone ? 16 : isShortScreen ? 18 : 22 * sizeMultiplier}px`,
            formatCardTitleSize: `${isPhone ? 11 : isShortScreen ? 12 : 14 * sizeMultiplier}px`,
            formatCardDescSize: `${isPhone ? 8 : isShortScreen ? 9 : 10 * sizeMultiplier}px`,
            formatCardPadding: `${isPhone ? 6 : isShortScreen ? 8 : 12 * sizeMultiplier}px`,
            formatCardGap: `${isPhone ? 6 : isShortScreen ? 8 : 12 * sizeMultiplier}px`,
            badgeSize: `${isPhone ? 8 : isShortScreen ? 9 : 10 * sizeMultiplier}px`,
            badgePadding: `${isPhone ? 2 : isShortScreen ? 3 : 4 * sizeMultiplier}px ${isPhone ? 6 : isShortScreen ? 8 : 10 * sizeMultiplier}px`,
            progressHeight: `${isPhone ? 4 : isShortScreen ? 5 : 6 * sizeMultiplier}px`,
            footerPadding: `${isPhone ? 4 : isShortScreen ? 6 : 8 * sizeMultiplier}px`,
            footerFont: `${isPhone ? 7 : isShortScreen ? 8 : 9 * sizeMultiplier}px`,
            footerMediumFont: `${isPhone ? 10 : isShortScreen ? 11 : 12 * sizeMultiplier}px`
        };
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                padding: sizes.containerPadding,
                width: '100%',
                maxWidth: sizes.containerMaxWidth,
                margin: '0 auto',
                backgroundColor: colors.background,
                color: colors.text,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                overflowY: 'auto',
                overflowX: 'hidden',
                transition: 'all 0.2s ease'
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: sizes.headerMargin, flexShrink: 0 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                        width: sizes.headerIconSize,
                        height: sizes.headerIconSize,
                        backgroundColor: colors.primary,
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: isPhone ? '8px' : '12px',
                        color: 'white',
                        fontSize: sizes.headerIconFont,
                        fontWeight: 'bold',
                        flexShrink: 0
                    } }, "NC"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { minWidth: 0 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h2", { style: {
                            margin: 0,
                            color: colors.primary,
                            fontSize: sizes.headerTitleSize,
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        } }, "North Carolina Parcels Export"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: {
                            margin: '2px 0 0 0',
                            color: colors.textSecondary,
                            fontSize: sizes.headerSubSize,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        } }, "Shapefile \u2022 KMZ"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Card, { style: { marginBottom: sizes.cardMargin, backgroundColor: colors.cardBg, borderRadius: '8px', flexShrink: 0 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.CardBody, { style: { padding: sizes.cardPadding } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: isPhone ? '4px' : '8px' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                width: sizes.circleSize,
                                height: sizes.circleSize,
                                backgroundColor: colors.stepBadge,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '10px',
                                color: 'white',
                                fontSize: sizes.circleFont,
                                fontWeight: 'bold',
                                flexShrink: 0
                            } }, "1"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: 600, fontSize: sizes.stepTitleSize } }, "Select")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: colors.surface,
                            padding: isPhone ? '6px' : '10px',
                            borderRadius: '6px',
                            marginLeft: sizes.leftMargin
                        } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', minWidth: 0, flex: '1 1 auto' } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                    width: isPhone ? '18px' : '24px',
                                    height: isPhone ? '18px' : '24px',
                                    borderRadius: '12px',
                                    backgroundColor: selectedFeatures.length > 0 ? colors.success : colors.textMuted,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '8px',
                                    color: 'white',
                                    fontSize: isPhone ? '10px' : '13px',
                                    flexShrink: 0
                                } }, "\u2713"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                    fontWeight: 600,
                                    fontSize: sizes.bodyTextSize,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                } },
                                selectedFeatures.length,
                                " ",
                                selectedFeatures.length === 1 ? 'Parcel' : 'Parcels')),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", onClick: () => this.refreshSelection(), disabled: isLoading, style: {
                                backgroundColor: colors.primary,
                                border: 'none',
                                padding: isPhone ? '2px 8px' : '2px 12px',
                                fontSize: sizes.smallTextSize,
                                height: isPhone ? '22px' : '26px',
                                flexShrink: 0,
                                marginLeft: '8px'
                            } }, isLoading ? '...' : 'Refresh')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Card, { style: { marginBottom: sizes.cardMargin, backgroundColor: colors.cardBg, borderRadius: '8px', flexShrink: 0 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.CardBody, { style: { padding: sizes.cardPadding } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: isPhone ? '8px' : '12px' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                width: sizes.circleSize,
                                height: sizes.circleSize,
                                backgroundColor: colors.stepBadge,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '10px',
                                color: 'white',
                                fontSize: sizes.circleFont,
                                fontWeight: 'bold',
                                flexShrink: 0
                            } }, "2"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: 600, fontSize: sizes.stepTitleSize } }, "Configure")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginLeft: sizes.leftMargin } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: isPhone ? '8px' : '16px' } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                    display: 'block',
                                    marginBottom: '4px',
                                    fontSize: sizes.smallTextSize,
                                    fontWeight: 600,
                                    color: colors.textSecondary
                                } }, "\uD83D\uDCC4 File Name"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: fileName, onChange: this.handleFileNameChange, placeholder: "Enter file name (e.g., my_parcels)", style: {
                                    width: '100%',
                                    backgroundColor: colors.surface,
                                    color: colors.text,
                                    border: `1px solid ${colors.border}`,
                                    height: sizes.inputHeight,
                                    fontSize: sizes.inputFont,
                                    padding: '0 8px',
                                    borderRadius: '6px'
                                }, disabled: isExporting }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginTop: '4px', fontSize: sizes.tinyTextSize, color: colors.textMuted } },
                                "File will be saved as: ",
                                fileName || 'north_carolina_parcels',
                                selectedFormat === 'shp' ? '.zip' : '.kmz')),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: isPhone ? '8px' : '16px' } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                    display: 'block',
                                    marginBottom: '4px',
                                    fontSize: sizes.smallTextSize,
                                    fontWeight: 600,
                                    color: colors.textSecondary
                                } }, "\uD83D\uDCCD State Plane"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: this.state.selectedCrs, onChange: (e) => this.handleCrsChange(e.target.value), style: {
                                    width: '100%',
                                    backgroundColor: colors.surface,
                                    color: colors.text,
                                    border: `1px solid ${colors.border}`,
                                    height: sizes.selectHeight,
                                    fontSize: sizes.selectFont
                                }, disabled: isExporting }, this.zoneOptions.map(o => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: o.value, value: o.value, style: { backgroundColor: colors.surface, color: colors.text } }, o.label)))),
                            selectedOption && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                    marginTop: '4px',
                                    fontSize: sizes.tinyTextSize,
                                    color: colors.primaryLight,
                                    backgroundColor: `${colors.primary}20`,
                                    padding: isPhone ? '2px 8px' : '3px 10px',
                                    borderRadius: '12px',
                                    display: 'inline-block'
                                } }, selectedOption.epsg))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                    display: 'block',
                                    marginBottom: '6px',
                                    fontSize: sizes.smallTextSize,
                                    fontWeight: 600,
                                    color: colors.textSecondary
                                } }, "\uD83D\uDCE6 Format"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', gap: sizes.formatCardGap } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: () => !isExporting && this.setState({ selectedFormat: 'shp' }), style: {
                                        flex: '1 1 0',
                                        minWidth: 0,
                                        padding: sizes.formatCardPadding,
                                        border: selectedFormat === 'shp' ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`,
                                        borderRadius: '8px',
                                        backgroundColor: selectedFormat === 'shp' ? `${colors.primary}20` : colors.surface,
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'all 0.2s'
                                    } },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: '4px' } },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: sizes.formatCardIconSize, marginRight: '6px', flexShrink: 0 } }, "\uD83D\uDCC1"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                                fontWeight: 700,
                                                fontSize: sizes.formatCardTitleSize,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            } }, "SHP")),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                            fontSize: sizes.formatCardDescSize,
                                            color: colors.textMuted,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        } }, ".shp .shx .dbf .prj .cpg"),
                                    selectedFormat === 'shp' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                            position: 'absolute',
                                            top: isPhone ? '-6px' : '-8px',
                                            right: isPhone ? '-6px' : '-8px',
                                            backgroundColor: colors.success,
                                            color: 'white',
                                            fontSize: sizes.badgeSize,
                                            fontWeight: 600,
                                            padding: sizes.badgePadding,
                                            borderRadius: '14px',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                            border: `2px solid ${colors.cardBg}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            whiteSpace: 'nowrap'
                                        } },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: isPhone ? '10px' : '12px' } }, "\u2713"),
                                        "Selected"))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: () => !isExporting && this.setState({ selectedFormat: 'kmz' }), style: {
                                        flex: '1 1 0',
                                        minWidth: 0,
                                        padding: sizes.formatCardPadding,
                                        border: selectedFormat === 'kmz' ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`,
                                        borderRadius: '8px',
                                        backgroundColor: selectedFormat === 'kmz' ? `${colors.primary}20` : colors.surface,
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'all 0.2s'
                                    } },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: '4px' } },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: sizes.formatCardIconSize, marginRight: '6px', flexShrink: 0 } }, "\uD83C\uDF0D"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                                fontWeight: 700,
                                                fontSize: sizes.formatCardTitleSize,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            } }, "KMZ")),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                            fontSize: sizes.formatCardDescSize,
                                            color: colors.textMuted,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        } }, "Google Earth"),
                                    selectedFormat === 'kmz' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                            position: 'absolute',
                                            top: isPhone ? '-6px' : '-8px',
                                            right: isPhone ? '-6px' : '-8px',
                                            backgroundColor: colors.success,
                                            color: 'white',
                                            fontSize: sizes.badgeSize,
                                            fontWeight: 600,
                                            padding: sizes.badgePadding,
                                            borderRadius: '14px',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                            border: `2px solid ${colors.cardBg}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            whiteSpace: 'nowrap'
                                        } },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: isPhone ? '10px' : '12px' } }, "\u2713"),
                                        "Selected")))))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Card, { style: { marginBottom: sizes.cardMargin, backgroundColor: colors.cardBg, borderRadius: '8px', flexShrink: 0 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.CardBody, { style: { padding: sizes.cardPadding } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: isPhone ? '8px' : '12px' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                width: sizes.circleSize,
                                height: sizes.circleSize,
                                backgroundColor: colors.stepBadge,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '10px',
                                color: 'white',
                                fontSize: sizes.circleFont,
                                fontWeight: 'bold',
                                flexShrink: 0
                            } }, "3"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: 600, fontSize: sizes.stepTitleSize } }, "Export")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginLeft: sizes.leftMargin } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", onClick: () => this.exportFeatures(), disabled: isExporting || selectedFeatures.length === 0 || isLoading || !fileName.trim(), style: {
                                width: '100%',
                                height: sizes.buttonHeight,
                                fontSize: sizes.buttonFont,
                                fontWeight: 700,
                                backgroundColor: colors.primary,
                                border: 'none',
                                borderRadius: '6px',
                                marginBottom: '10px',
                                letterSpacing: '0.5px'
                            } }, isExporting ? 'PROCESSING' : `EXPORT ${selectedFormat === 'shp' ? 'SHP' : 'KMZ'}`),
                        isExporting && jobProgress > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '10px' } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Progress, { value: jobProgress, style: {
                                    height: sizes.progressHeight,
                                    borderRadius: '3px',
                                    backgroundColor: colors.surface
                                } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: '4px',
                                    fontSize: sizes.tinyTextSize
                                } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: colors.primaryLight } }, exportMessage),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: 600 } },
                                    jobProgress,
                                    "%")))),
                        exportSuccess && downloadUrl && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                backgroundColor: `${colors.success}20`,
                                padding: isPhone ? '8px' : '10px',
                                borderRadius: '6px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                border: `1px solid ${colors.success}`
                            } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: isPhone ? 'wrap' : 'nowrap'
                                } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                        fontSize: sizes.smallTextSize,
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    } }, exportMessage),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: sizes.tinyTextSize, color: colors.textSecondary } }, "Auto-saved to downloads")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", onClick: () => window.open(downloadUrl, '_blank'), style: {
                                    backgroundColor: colors.success,
                                    border: 'none',
                                    padding: isPhone ? '4px 8px' : '4px 12px',
                                    fontSize: sizes.smallTextSize,
                                    height: isPhone ? '28px' : '32px',
                                    width: '100%',
                                    fontWeight: 600
                                } }, "\uD83D\uDCE5 Download Again if Needed"))),
                        exportError && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "error", withIcon: true, text: exportError, style: {
                                marginTop: '6px',
                                fontSize: sizes.smallTextSize,
                                padding: isPhone ? '6px' : '8px',
                                backgroundColor: `${colors.error}20`,
                                border: `1px solid ${colors.error}`,
                                color: colors.text,
                                borderRadius: '6px'
                            } }))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                    marginTop: 'auto',
                    paddingTop: sizes.footerPadding,
                    fontSize: sizes.footerFont,
                    color: colors.textMuted,
                    textAlign: 'center',
                    borderTop: `1px solid ${colors.border}`,
                    flexShrink: 0
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { margin: '2px 0 0 0' } }, "Developed by the DRMP"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: {
                        margin: '4px 0 0 0',
                        fontSize: sizes.footerMediumFont,
                        fontWeight: 500,
                        color: colors.textSecondary
                    } }, "Geospatial Services Division")),
            isExporting && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null)));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9OQy13aWRnZXQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrR0FBZSxHQUFHLElBQXFDLENBQUMsaUNBQU8sRUFBRSxvQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBLGtHQUFDLENBQUMsS0FBSyxFQUE2RSxDQUFDLGtCQUFrQixhQUFhLGdCQUFnQiwrQkFBK0IsV0FBVyw0RkFBNEYsV0FBVyxrRUFBa0UsNERBQTRELFlBQVksSUFBSSxrQkFBa0IseUJBQXlCLDBEQUEwRCxrQkFBa0Isc0JBQXNCLHlDQUF5QyxVQUFVLGNBQWMseUJBQXlCLG9CQUFvQixJQUFJLFNBQVMsVUFBVSxvQ0FBb0MsY0FBYyxJQUFJLHlDQUF5QyxTQUFTLDBDQUEwQywwRkFBMEYsMkhBQTJILHFCQUFNLEVBQUUscUJBQU0sVUFBVSxxQkFBTSxDQUFDLHFCQUFNLHdNQUF3TSw4REFBOEQsdURBQXVELGlOQUFpTiwwQkFBMEIsNEJBQTRCLEtBQUssS0FBSyxnREFBZ0QsbUZBQW1GLHNCQUFzQixLQUFLLGtDQUFrQyxpREFBaUQsS0FBSyxHQUFHLG1CQUFtQiw4SEFBOEgsb0lBQW9JLGlEQUFpRCxxQkFBcUIsdUJBQXVCLGVBQWUsMEJBQTBCLEdBQUcsd0JBQXdCLHlDQUF5QyxvQkFBb0IsS0FBSyxnREFBZ0QsNERBQTRELHFCQUFxQixPQUFPLEVBQUUsb0JBQW9CLEtBQTBCLHFCQUFxQjs7QUFFaHBGOzs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7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QUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxjQUFjLElBQUk7WUFDL0UsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxJQUFJO1lBQzdFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsSUFBSTtZQUMzRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxjQUFjLElBQUk7WUFDMUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxJQUFJO1lBQzFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsSUFBSTtZQUMxRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxjQUFjLElBQUk7WUFDeEUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxJQUFJO1lBQzFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsSUFBSTtZQUM3RSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxjQUFjLElBQUk7WUFDNUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxJQUFJO1lBQzdFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsSUFBSTtZQUMxRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxjQUFjLElBQUk7WUFDNUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxJQUFJO1lBQzFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsSUFBSTtZQUM1RSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENB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LFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVTtvQkFDMUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUN2QixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsU0FBUyxFQUFFLGFBQWEsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDdkMsVUFBVSxFQUFFLENBQUM7aUJBQ2Q7Z0JBRUQsa0VBQUcsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSw0QkFBMkI7Z0JBQzVELGtFQUNFLEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUUsV0FBVzt3QkFDbkIsUUFBUSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7d0JBQ2hDLFVBQVUsRUFBRSxHQUFHO3dCQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYTtxQkFDNUIsbUNBR0MsQ0FDQTtZQUVMLFdBQVcsSUFBSSwyREFBQyw0Q0FBTyxPQUFHLENBQ3ZCLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL05DLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0O2Qub3BlbihcIkdFVFwiLGEpLGQucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGQub25sb2FkPWZ1bmN0aW9uKCl7ZyhkLnJlc3BvbnNlLGIsYyl9LGQub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZC5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYubmF2aWdhdG9yJiYvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGVXZWJLaXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGc9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUmJiFhP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYixkLGUsZyl7aWYoZz1nfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZyYmKGcuZG9jdW1lbnQudGl0bGU9Zy5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBiKXJldHVybiBjKGIsZCxlKTt2YXIgaD1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09Yi50eXBlLGk9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaj0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGp8fGgmJml8fGEpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGs9bmV3IEZpbGVSZWFkZXI7ay5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1rLnJlc3VsdDthPWo/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZz9nLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGc9bnVsbH0say5yZWFkQXNEYXRhVVJMKGIpfWVsc2V7dmFyIGw9Zi5VUkx8fGYud2Via2l0VVJMLG09bC5jcmVhdGVPYmplY3RVUkwoYik7Zz9nLmxvY2F0aW9uPW06bG9jYXRpb24uaHJlZj1tLGc9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZXZva2VPYmplY3RVUkwobSl9LDRFNCl9fSk7Zi5zYXZlQXM9Zy5zYXZlQXM9ZyxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9Zyl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VNYW5hZ2VyLCBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QsIEFsZXJ0LCBMb2FkaW5nLCBDYXJkLCBDYXJkQm9keSwgUHJvZ3Jlc3MsIFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmludGVyZmFjZSBGZWF0dXJlRGF0YSB7XHJcbiAgZ2VvbWV0cnk6IGFueTtcclxuICBhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2lkZ2V0U3RhdGUge1xyXG4gIHNlbGVjdGVkQ3JzOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRab25lOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRGb3JtYXQ6ICdzaHAnIHwgJ2tteic7XHJcbiAgc2VsZWN0ZWRGZWF0dXJlczogRmVhdHVyZURhdGFbXTtcclxuICBpc0V4cG9ydGluZzogYm9vbGVhbjtcclxuICBleHBvcnRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgZXhwb3J0RXJyb3I6IHN0cmluZztcclxuICBleHBvcnRTdWNjZXNzOiBib29sZWFuO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBhY3RpdmVWaWV3OiBKaW11TWFwVmlldyB8IG51bGw7XHJcbiAgam9iUHJvZ3Jlc3M6IG51bWJlcjtcclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgc2hvd1NhdmVEaWFsb2c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LCBXaWRnZXRTdGF0ZT4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5uY29uZW1hcC5nb3Yvc2VjdXJlL3Jlc3Qvc2VydmljZXMvTkMxTWFwX1BhcmNlbHMvTWFwU2VydmVyLzEnO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9naXMuZHJtcC5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvUGFyY2VsX0V4cG9ydF9OQy9HUFNlcnZlci9HZW9KU09OJTIwdG8lMjBTSFAlMjBvciUyMEtNTCc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBHUF9JTlBVVF9QQVJBTSA9ICdpbnB1dF9nZW9qc29uJztcclxuICBwcml2YXRlIHJlYWRvbmx5IEdQX1pPTkVfUEFSQU0gPSAnc3RhdGVfcGxhbmVfem9uZSc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBHUF9GT1JNQVRfUEFSQU0gPSAnZXhwb3J0X2Zvcm1hdCc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBHUF9PVVRQVVRfUEFSQU0gPSAnb3V0cHV0X2ZpbGUnO1xyXG5cclxucHJpdmF0ZSByZWFkb25seSB6b25lT3B0aW9ucyA9IFtcclxuICB7IHZhbHVlOiAnMjI2NCcsIGxhYmVsOiAnTm9ydGggQ2Fyb2xpbmEnLCBlcHNnOiAnRVBTRzoyMjY0JyB9XHJcbl07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWxlY3RlZENyczogJzIyNjQnLFxyXG4gICAgICBzZWxlY3RlZFpvbmU6ICdOb3J0aCBDYXJvbGluYScsXHJcbiAgICAgIHNlbGVjdGVkRm9ybWF0OiAnc2hwJyxcclxuICAgICAgc2VsZWN0ZWRGZWF0dXJlczogW10sXHJcbiAgICAgIGlzRXhwb3J0aW5nOiBmYWxzZSxcclxuICAgICAgZXhwb3J0TWVzc2FnZTogJycsXHJcbiAgICAgIGV4cG9ydEVycm9yOiAnJyxcclxuICAgICAgZXhwb3J0U3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZVZpZXc6IG51bGwsXHJcbiAgICAgIGpvYlByb2dyZXNzOiAwLFxyXG4gICAgICBkb3dubG9hZFVybDogJycsXHJcbiAgICAgIGZpbGVOYW1lOiAnbm9ydGhfY2Fyb2xpbmFfcGFyY2VscycsXHJcbiAgICAgIHNob3dTYXZlRGlhbG9nOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVWaWV3OiBqbXYgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIHJlZnJlc2hTZWxlY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YVNvdXJjZXMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2VzKCk7XHJcbiAgICAgIGxldCBhbGxTZWxlY3RlZElkczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgZHNJZCBpbiBkYXRhU291cmNlcykge1xyXG4gICAgICAgIGNvbnN0IGRzID0gZGF0YVNvdXJjZXNbZHNJZF07XHJcbiAgICAgICAgaWYgKGRzLnR5cGUgPT09ICdGRUFUVVJFX0xBWUVSJykge1xyXG4gICAgICAgICAgY29uc3QgZmVhdHVyZURzID0gZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZTtcclxuICAgICAgICAgIGNvbnN0IGlkcyA9IChmZWF0dXJlRHMuZ2V0U2VsZWN0ZWRSZWNvcmRJZHMoKSB8fCBbXSlcclxuICAgICAgICAgICAgLm1hcChpZCA9PiBwYXJzZUludChpZC50b1N0cmluZygpKSlcclxuICAgICAgICAgICAgLmZpbHRlcihpZCA9PiAhaXNOYU4oaWQpKTtcclxuICAgICAgICAgIGFsbFNlbGVjdGVkSWRzID0gWy4uLmFsbFNlbGVjdGVkSWRzLCAuLi5pZHNdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFsbFNlbGVjdGVkSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZlYXR1cmVzOiBbXSwgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVuaXF1ZUlkcyA9IFsuLi5uZXcgU2V0KGFsbFNlbGVjdGVkSWRzKV07XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVzOiBGZWF0dXJlRGF0YVtdID0gW107XHJcbiAgICAgIGNvbnN0IGNodW5rcyA9IHRoaXMuY2h1bmtBcnJheSh1bmlxdWVJZHMsIDEwMCk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuU0VSVklDRV9VUkx9L3F1ZXJ5P3doZXJlPW9iamVjdGlkIElOICgke2NodW5rLmpvaW4oJywnKX0pJm91dEZpZWxkcz0qJnJldHVybkdlb21ldHJ5PXRydWUmb3V0U1I9MjI2NCZmPWpzb25gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xyXG4gICAgICAgICAgZGF0YS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlYXQuZ2VvbWV0cnk/LnJpbmdzKSB7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogZmVhdC5nZW9tZXRyeSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZlYXQuYXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZXM6IGZlYXR1cmVzLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdSZWZyZXNoIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNodW5rQXJyYXk8VD4oYXJyOiBUW10sIHNpemU6IG51bWJlcik6IFRbXVtdIHtcclxuICAgIGNvbnN0IGNodW5rczogVFtdW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSBzaXplKSB7XHJcbiAgICAgIGNodW5rcy5wdXNoKGFyci5zbGljZShpLCBpICsgc2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNodW5rcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZG93bmxvYWRGaWxlKHVybDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBmb3JtYXQ6ICdzaHAnIHwgJ2tteicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuXHJcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZvcm1hdCA9PT0gJ3NocCcgPyAnLnppcCcgOiAnLmtteic7XHJcbiAgICAgIGNvbnN0IGZ1bGxGaWxlTmFtZSA9IGZpbGVOYW1lLmVuZHNXaXRoKGV4dGVuc2lvbikgPyBmaWxlTmFtZSA6IGZpbGVOYW1lICsgZXh0ZW5zaW9uO1xyXG5cclxuICAgICAgc2F2ZUFzKGJsb2IsIGZ1bGxGaWxlTmFtZSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkb3dubG9hZFVybDogdXJsLFxyXG4gICAgICAgIGV4cG9ydFN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZXhwb3J0TWVzc2FnZTogYOKchSBGaWxlIHNhdmVkIGFzOiAke2Z1bGxGaWxlTmFtZX1gXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRG93bmxvYWQgZmFpbGVkOicsIGVycm9yKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZXhwb3J0RXJyb3I6IGBEb3dubG9hZCBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBleHBvcnRUb0dQU2VydmljZShmZWF0dXJlczogRmVhdHVyZURhdGFbXSwgem9uZTogc3RyaW5nLCBmb3JtYXQ6ICdzaHAnIHwgJ2tteicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBvcnRNZXNzYWdlOiAn8J+TpiBQcmVwYXJpbmcuLi4nLCBqb2JQcm9ncmVzczogMTAgfSk7XHJcblxyXG4gICAgICBjb25zdCBnZW9qc29uID0ge1xyXG4gICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgZmlsZW5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUgfHwgJ25vcnRoX2Nhcm9saW5hX3BhcmNlbHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMubWFwKGYgPT4gKHtcclxuICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdQb2x5Z29uJywgY29vcmRpbmF0ZXM6IGYuZ2VvbWV0cnkucmluZ3MgfSxcclxuICAgICAgICAgIHByb3BlcnRpZXM6IGYuYXR0cmlidXRlc1xyXG4gICAgICAgIH0pKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmJywgJ2pzb24nKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKHRoaXMuR1BfSU5QVVRfUEFSQU0sIEpTT04uc3RyaW5naWZ5KGdlb2pzb24pKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKHRoaXMuR1BfWk9ORV9QQVJBTSwgem9uZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0aGlzLkdQX0ZPUk1BVF9QQVJBTSwgZm9ybWF0ID09PSAnc2hwJyA/ICdTaGFwZWZpbGUgKFpJUCknIDogJ0tNTCcpO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cG9ydE1lc3NhZ2U6ICfij7MgU3VibWl0dGluZy4uLicsIGpvYlByb2dyZXNzOiAzMCB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHN1Ym1pdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vc3VibWl0Sm9iYCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEgfSk7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdFJlc3VsdCA9IGF3YWl0IHN1Ym1pdFJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChzdWJtaXRSZXN1bHQuam9iSWQpIHtcclxuICAgICAgICBjb25zdCBqb2JJZCA9IHN1Ym1pdFJlc3VsdC5qb2JJZDtcclxuICAgICAgICBjb25zdCBqb2JVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9qb2JzLyR7am9iSWR9YDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cG9ydE1lc3NhZ2U6ICfimpnvuI8gUHJvY2Vzc2luZy4uLicsIGpvYlByb2dyZXNzOiA1MCB9KTtcclxuXHJcbiAgICAgICAgbGV0IGpvYlN0YXR1cyA9ICdlc3JpSm9iU3VibWl0dGVkJztcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoam9iU3RhdHVzICE9PSAnZXNyaUpvYlN1Y2NlZWRlZCcgJiYgYXR0ZW1wdHMgPCAzMCkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgxNTAwKTtcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7am9iVXJsfT9mPWpzb25gKTtcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3VsdCA9IGF3YWl0IHN0YXR1c1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGpvYlN0YXR1cyA9IHN0YXR1c1Jlc3VsdC5qb2JTdGF0dXM7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgam9iUHJvZ3Jlc3M6IE1hdGgubWluKDUwICsgYXR0ZW1wdHMgKiAyLCA5MCkgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKGpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHN0YXR1c1Jlc3VsdC5tZXNzYWdlc1xyXG4gICAgICAgICAgICAgID8uZmlsdGVyKChtOiBhbnkpID0+IG0udHlwZSA9PT0gJ2VzcmlKb2JNZXNzYWdlVHlwZUVycm9yJylcclxuICAgICAgICAgICAgICA/Lm1hcCgobTogYW55KSA9PiBtLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAgIC5qb2luKCcsICcpIHx8ICdVbmtub3duIGVycm9yJztcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwb3J0TWVzc2FnZTogJ/Cfk6UgRG93bmxvYWRpbmcuLi4nLCBqb2JQcm9ncmVzczogOTUgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gYCR7am9iVXJsfS9yZXN1bHRzLyR7dGhpcy5HUF9PVVRQVVRfUEFSQU19P2Y9anNvbmA7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc3VsdFVybCk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHREYXRhID0gYXdhaXQgcmVzdWx0UmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgIGlmIChyZXN1bHREYXRhLnZhbHVlPy51cmwpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kb3dubG9hZEZpbGUocmVzdWx0RGF0YS52YWx1ZS51cmwsIHRoaXMuc3RhdGUuZmlsZU5hbWUsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqb2JQcm9ncmVzczogMTAwIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNsZWVwKG1zOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGV4cG9ydEZlYXR1cmVzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRXhwb3J0aW5nOiB0cnVlLFxyXG4gICAgICBleHBvcnRNZXNzYWdlOiAnJyxcclxuICAgICAgZXhwb3J0RXJyb3I6ICcnLFxyXG4gICAgICBleHBvcnRTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgam9iUHJvZ3Jlc3M6IDAsXHJcbiAgICAgIGRvd25sb2FkVXJsOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBzZWxlY3RlZFpvbmUsIHNlbGVjdGVkRm9ybWF0LCBzZWxlY3RlZEZlYXR1cmVzLCBmaWxlTmFtZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgaWYgKHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHBhcmNlbHMgc2VsZWN0ZWQuJyk7XHJcbiAgICAgIGlmICghZmlsZU5hbWUudHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIGZpbGUgbmFtZS4nKTtcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMuZXhwb3J0VG9HUFNlcnZpY2Uoc2VsZWN0ZWRGZWF0dXJlcywgc2VsZWN0ZWRab25lLCBzZWxlY3RlZEZvcm1hdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwb3J0RXJyb3I6IGBFeHBvcnQgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cG9ydGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDcnNDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy56b25lT3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpO1xyXG4gICAgaWYgKG9wdGlvbikgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ3JzOiB2YWx1ZSwgc2VsZWN0ZWRab25lOiBvcHRpb24ubGFiZWwgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRmlsZU5hbWVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlbGVjdGVkRmVhdHVyZXMsXHJcbiAgICAgIGlzRXhwb3J0aW5nLFxyXG4gICAgICBleHBvcnRNZXNzYWdlLFxyXG4gICAgICBleHBvcnRFcnJvcixcclxuICAgICAgZXhwb3J0U3VjY2VzcyxcclxuICAgICAgc2VsZWN0ZWRGb3JtYXQsXHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgICAgam9iUHJvZ3Jlc3MsXHJcbiAgICAgIGRvd25sb2FkVXJsLFxyXG4gICAgICBmaWxlTmFtZVxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnpvbmVPcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ3JzKTtcclxuXHJcbiAgICBjb25zdCB2dyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCAwLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuICAgIGNvbnN0IHZoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcblxyXG4gICAgY29uc3QgYmFzZVdpZHRoID0gMTkyMDtcclxuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMDgwO1xyXG4gICAgY29uc3Qgd2lkdGhTY2FsZSA9IE1hdGgubWluKHZ3IC8gYmFzZVdpZHRoLCAxLjUpO1xyXG4gICAgY29uc3QgaGVpZ2h0U2NhbGUgPSBNYXRoLm1pbih2aCAvIGJhc2VIZWlnaHQsIDEuNSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKHdpZHRoU2NhbGUsIGhlaWdodFNjYWxlLCAxLjIpO1xyXG5cclxuICAgIGNvbnN0IGlzUGhvbmUgPSB2dyA8IDYwMDtcclxuICAgIGNvbnN0IGlzVGFibGV0ID0gdncgPj0gNjAwICYmIHZ3IDwgMTAyNDtcclxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHZ3ID49IDEwMjQ7XHJcbiAgICBjb25zdCBpc1Nob3J0U2NyZWVuID0gdmggPCA3MDA7XHJcblxyXG4gICAgY29uc3Qgc2l6ZU11bHRpcGxpZXIgPSBpc1Bob25lID8gMC44NSA6IGlzRGVza3RvcCA/IHNjYWxlIDogMTtcclxuICAgIGNvbnN0IHdpZGdldFdpZHRoID0gaXNQaG9uZSA/ICcxMDAlJyA6IGlzVGFibGV0ID8gJzgwJScgOiAnbWluKDYwMHB4LCA0MHZ3KSc7XHJcblxyXG4gICAgY29uc3QgY29sb3JzID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAnIzFhMWExYScsXHJcbiAgICAgIHN1cmZhY2U6ICcjMmQyZDJkJyxcclxuICAgICAgYm9yZGVyOiAnIzQwNDA0MCcsXHJcbiAgICAgIHRleHQ6ICcjZTBlMGUwJyxcclxuICAgICAgdGV4dFNlY29uZGFyeTogJyNiMGIwYjAnLFxyXG4gICAgICB0ZXh0TXV0ZWQ6ICcjOGE4YThhJyxcclxuICAgICAgcHJpbWFyeTogJyMyYjdhOWMnLFxyXG4gICAgICBwcmltYXJ5TGlnaHQ6ICcjM2E5YmMyJyxcclxuICAgICAgc3VjY2VzczogJyMyYzdhNGQnLFxyXG4gICAgICBlcnJvcjogJyNiMzRhNGEnLFxyXG4gICAgICBjYXJkQmc6ICcjMjUyNTI1JyxcclxuICAgICAgc3RlcEJhZGdlOiAnIzJiN2E5YydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGAke2lzUGhvbmUgPyA4IDogaXNTaG9ydFNjcmVlbiA/IDEwIDogMTYgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGNvbnRhaW5lck1heFdpZHRoOiB3aWRnZXRXaWR0aCxcclxuICAgICAgaGVhZGVySWNvblNpemU6IGAke2lzUGhvbmUgPyAyOCA6IGlzU2hvcnRTY3JlZW4gPyAzMCA6IDM2ICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBoZWFkZXJJY29uRm9udDogYCR7aXNQaG9uZSA/IDE0IDogaXNTaG9ydFNjcmVlbiA/IDE1IDogMTggKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGhlYWRlclRpdGxlU2l6ZTogYCR7aXNQaG9uZSA/IDE4IDogaXNTaG9ydFNjcmVlbiA/IDIwIDogMjQgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGhlYWRlclN1YlNpemU6IGAke2lzUGhvbmUgPyAxMCA6IGlzU2hvcnRTY3JlZW4gPyAxMSA6IDEzICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBoZWFkZXJNYXJnaW46IGAke2lzUGhvbmUgPyA4IDogaXNTaG9ydFNjcmVlbiA/IDEwIDogMTYgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGNpcmNsZVNpemU6IGAke2lzUGhvbmUgPyAyNCA6IGlzU2hvcnRTY3JlZW4gPyAyNiA6IDMyICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBjaXJjbGVGb250OiBgJHtpc1Bob25lID8gMTMgOiBpc1Nob3J0U2NyZWVuID8gMTQgOiAxNiAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgY2FyZFBhZGRpbmc6IGAke2lzUGhvbmUgPyA4IDogaXNTaG9ydFNjcmVlbiA/IDEwIDogMTQgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGNhcmRNYXJnaW46IGAke2lzUGhvbmUgPyA2IDogaXNTaG9ydFNjcmVlbiA/IDggOiAxMiAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgbGVmdE1hcmdpbjogYCR7aXNQaG9uZSA/IDI4IDogaXNTaG9ydFNjcmVlbiA/IDMyIDogNDIgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIHN0ZXBUaXRsZVNpemU6IGAke2lzUGhvbmUgPyAxMyA6IGlzU2hvcnRTY3JlZW4gPyAxNCA6IDE2ICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBib2R5VGV4dFNpemU6IGAke2lzUGhvbmUgPyAxMiA6IGlzU2hvcnRTY3JlZW4gPyAxMyA6IDE0ICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBzbWFsbFRleHRTaXplOiBgJHtpc1Bob25lID8gMTAgOiBpc1Nob3J0U2NyZWVuID8gMTEgOiAxMiAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgdGlueVRleHRTaXplOiBgJHtpc1Bob25lID8gOCA6IGlzU2hvcnRTY3JlZW4gPyA5IDogMTAgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIHNlbGVjdEhlaWdodDogYCR7aXNQaG9uZSA/IDI4IDogaXNTaG9ydFNjcmVlbiA/IDMwIDogMzYgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIHNlbGVjdEZvbnQ6IGAke2lzUGhvbmUgPyAxMSA6IGlzU2hvcnRTY3JlZW4gPyAxMiA6IDEzICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBidXR0b25IZWlnaHQ6IGAke2lzUGhvbmUgPyAzMCA6IGlzU2hvcnRTY3JlZW4gPyAzMiA6IDQwICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBidXR0b25Gb250OiBgJHtpc1Bob25lID8gMTIgOiBpc1Nob3J0U2NyZWVuID8gMTMgOiAxNSAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgaW5wdXRIZWlnaHQ6IGAke2lzUGhvbmUgPyAyOCA6IGlzU2hvcnRTY3JlZW4gPyAzMCA6IDM2ICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBpbnB1dEZvbnQ6IGAke2lzUGhvbmUgPyAxMSA6IGlzU2hvcnRTY3JlZW4gPyAxMiA6IDEzICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBmb3JtYXRDYXJkSWNvblNpemU6IGAke2lzUGhvbmUgPyAxNiA6IGlzU2hvcnRTY3JlZW4gPyAxOCA6IDIyICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBmb3JtYXRDYXJkVGl0bGVTaXplOiBgJHtpc1Bob25lID8gMTEgOiBpc1Nob3J0U2NyZWVuID8gMTIgOiAxNCAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgZm9ybWF0Q2FyZERlc2NTaXplOiBgJHtpc1Bob25lID8gOCA6IGlzU2hvcnRTY3JlZW4gPyA5IDogMTAgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGZvcm1hdENhcmRQYWRkaW5nOiBgJHtpc1Bob25lID8gNiA6IGlzU2hvcnRTY3JlZW4gPyA4IDogMTIgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGZvcm1hdENhcmRHYXA6IGAke2lzUGhvbmUgPyA2IDogaXNTaG9ydFNjcmVlbiA/IDggOiAxMiAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgYmFkZ2VTaXplOiBgJHtpc1Bob25lID8gOCA6IGlzU2hvcnRTY3JlZW4gPyA5IDogMTAgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGJhZGdlUGFkZGluZzogYCR7aXNQaG9uZSA/IDIgOiBpc1Nob3J0U2NyZWVuID8gMyA6IDQgKiBzaXplTXVsdGlwbGllcn1weCAke2lzUGhvbmUgPyA2IDogaXNTaG9ydFNjcmVlbiA/IDggOiAxMCAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgcHJvZ3Jlc3NIZWlnaHQ6IGAke2lzUGhvbmUgPyA0IDogaXNTaG9ydFNjcmVlbiA/IDUgOiA2ICogc2l6ZU11bHRpcGxpZXJ9cHhgLFxyXG4gICAgICBmb290ZXJQYWRkaW5nOiBgJHtpc1Bob25lID8gNCA6IGlzU2hvcnRTY3JlZW4gPyA2IDogOCAqIHNpemVNdWx0aXBsaWVyfXB4YCxcclxuICAgICAgZm9vdGVyRm9udDogYCR7aXNQaG9uZSA/IDcgOiBpc1Nob3J0U2NyZWVuID8gOCA6IDkgKiBzaXplTXVsdGlwbGllcn1weGAsXHJcbiAgICAgIGZvb3Rlck1lZGl1bUZvbnQ6IGAke2lzUGhvbmUgPyAxMCA6IGlzU2hvcnRTY3JlZW4gPyAxMSA6IDEyICogc2l6ZU11bHRpcGxpZXJ9cHhgXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogc2l6ZXMuY29udGFpbmVyUGFkZGluZyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBtYXhXaWR0aDogc2l6ZXMuY29udGFpbmVyTWF4V2lkdGgsXHJcbiAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuYmFja2dyb3VuZCxcclxuICAgICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycyBlYXNlJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiBzaXplcy5oZWFkZXJNYXJnaW4sIGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IHNpemVzLmhlYWRlckljb25TaXplLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogc2l6ZXMuaGVhZGVySWNvblNpemUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucHJpbWFyeSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGlzUGhvbmUgPyAnOHB4JyA6ICcxMnB4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuaGVhZGVySWNvbkZvbnQsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTkNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5XaWR0aDogMCB9fT5cclxuICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeSxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5oZWFkZXJUaXRsZVNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOb3J0aCBDYXJvbGluYSBQYXJjZWxzIEV4cG9ydFxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcycHggMCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0U2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLmhlYWRlclN1YlNpemUsXHJcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaGFwZWZpbGUg4oCiIEtNWlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBzaXplcy5jYXJkTWFyZ2luLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jYXJkQmcsIGJvcmRlclJhZGl1czogJzhweCcsIGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogc2l6ZXMuY2FyZFBhZGRpbmcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiBpc1Bob25lID8gJzRweCcgOiAnOHB4JyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZXMuY2lyY2xlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplcy5jaXJjbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5zdGVwQmFkZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5jaXJjbGVGb250LFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IHNpemVzLnN0ZXBUaXRsZVNpemUgfX0+U2VsZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5zdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogaXNQaG9uZSA/ICc2cHgnIDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHNpemVzLmxlZnRNYXJnaW5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtaW5XaWR0aDogMCwgZmxleDogJzEgMSBhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNQaG9uZSA/ICcxOHB4JyA6ICcyNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzUGhvbmUgPyAnMThweCcgOiAnMjRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aCA+IDAgPyBjb2xvcnMuc3VjY2VzcyA6IGNvbG9ycy50ZXh0TXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGlzUGhvbmUgPyAnMTBweCcgOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDinJNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLmJvZHlUZXh0U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aH0ge3NlbGVjdGVkRmVhdHVyZXMubGVuZ3RoID09PSAxID8gJ1BhcmNlbCcgOiAnUGFyY2Vscyd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVmcmVzaFNlbGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBpc1Bob25lID8gJzJweCA4cHgnIDogJzJweCAxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLnNtYWxsVGV4dFNpemUsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaXNQaG9uZSA/ICcyMnB4JyA6ICcyNnB4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICcuLi4nIDogJ1JlZnJlc2gnfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHNpemVzLmNhcmRNYXJnaW4sIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNhcmRCZywgYm9yZGVyUmFkaXVzOiAnOHB4JywgZmxleFNocmluazogMCB9fT5cclxuICAgICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiBzaXplcy5jYXJkUGFkZGluZyB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IGlzUGhvbmUgPyAnOHB4JyA6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZXMuY2lyY2xlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplcy5jaXJjbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5zdGVwQmFkZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5jaXJjbGVGb250LFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IHNpemVzLnN0ZXBUaXRsZVNpemUgfX0+Q29uZmlndXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBzaXplcy5sZWZ0TWFyZ2luIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBpc1Bob25lID8gJzhweCcgOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLnNtYWxsVGV4dFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dFNlY29uZGFyeVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDwn5OEIEZpbGUgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlTmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmaWxlIG5hbWUgKGUuZy4sIG15X3BhcmNlbHMpXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnN1cmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemVzLmlucHV0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5pbnB1dEZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4cG9ydGluZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzRweCcsIGZvbnRTaXplOiBzaXplcy50aW55VGV4dFNpemUsIGNvbG9yOiBjb2xvcnMudGV4dE11dGVkIH19PlxyXG4gICAgICAgICAgICAgICAgICBGaWxlIHdpbGwgYmUgc2F2ZWQgYXM6IHtmaWxlTmFtZSB8fCAnbm9ydGhfY2Fyb2xpbmFfcGFyY2Vscyd9XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZvcm1hdCA9PT0gJ3NocCcgPyAnLnppcCcgOiAnLmtteid9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGlzUGhvbmUgPyAnOHB4JyA6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuc21hbGxUZXh0U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0U2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIPCfk40gU3RhdGUgUGxhbmVcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ3JzfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ3JzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnN1cmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemVzLnNlbGVjdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuc2VsZWN0Rm9udFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHBvcnRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnpvbmVPcHRpb25zLm1hcChvID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17by52YWx1ZX0gdmFsdWU9e28udmFsdWV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLnN1cmZhY2UsIGNvbG9yOiBjb2xvcnMudGV4dCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkT3B0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLnRpbnlUZXh0U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcnMucHJpbWFyeX0yMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBpc1Bob25lID8gJzJweCA4cHgnIDogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkT3B0aW9uLmVwc2d9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuc21hbGxUZXh0U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0U2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIPCfk6YgRm9ybWF0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogc2l6ZXMuZm9ybWF0Q2FyZEdhcCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0V4cG9ydGluZyAmJiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGb3JtYXQ6ICdzaHAnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMSAxIDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBzaXplcy5mb3JtYXRDYXJkUGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc2VsZWN0ZWRGb3JtYXQgPT09ICdzaHAnID8gYDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fWAgOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRGb3JtYXQgPT09ICdzaHAnID8gYCR7Y29sb3JzLnByaW1hcnl9MjBgIDogY29sb3JzLnN1cmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogc2l6ZXMuZm9ybWF0Q2FyZEljb25TaXplLCBtYXJnaW5SaWdodDogJzZweCcsIGZsZXhTaHJpbms6IDAgfX0+8J+TgTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5mb3JtYXRDYXJkVGl0bGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU0hQXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLmZvcm1hdENhcmREZXNjU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0TXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2hwIC5zaHggLmRiZiAucHJqIC5jcGdcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGb3JtYXQgPT09ICdzaHAnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGlzUGhvbmUgPyAnLTZweCcgOiAnLThweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGlzUGhvbmUgPyAnLTZweCcgOiAnLThweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuYmFkZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBzaXplcy5iYWRnZVBhZGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmNhcmRCZ31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBpc1Bob25lID8gJzEwcHgnIDogJzEycHgnIH19PuKckzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0V4cG9ydGluZyAmJiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGb3JtYXQ6ICdrbXonIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMSAxIDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBzaXplcy5mb3JtYXRDYXJkUGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc2VsZWN0ZWRGb3JtYXQgPT09ICdrbXonID8gYDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fWAgOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRGb3JtYXQgPT09ICdrbXonID8gYCR7Y29sb3JzLnByaW1hcnl9MjBgIDogY29sb3JzLnN1cmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogc2l6ZXMuZm9ybWF0Q2FyZEljb25TaXplLCBtYXJnaW5SaWdodDogJzZweCcsIGZsZXhTaHJpbms6IDAgfX0+8J+MjTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5mb3JtYXRDYXJkVGl0bGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS01aXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLmZvcm1hdENhcmREZXNjU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0TXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgRWFydGhcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGb3JtYXQgPT09ICdrbXonICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGlzUGhvbmUgPyAnLTZweCcgOiAnLThweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGlzUGhvbmUgPyAnLTZweCcgOiAnLThweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuYmFkZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBzaXplcy5iYWRnZVBhZGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmNhcmRCZ31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBpc1Bob25lID8gJzEwcHgnIDogJzEycHgnIH19PuKckzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogc2l6ZXMuY2FyZE1hcmdpbiwgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY2FyZEJnLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IHNpemVzLmNhcmRQYWRkaW5nIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogaXNQaG9uZSA/ICc4cHgnIDogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplcy5jaXJjbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemVzLmNpcmNsZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnN0ZXBCYWRnZSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLmNpcmNsZUZvbnQsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogc2l6ZXMuc3RlcFRpdGxlU2l6ZSB9fT5FeHBvcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IHNpemVzLmxlZnRNYXJnaW4gfX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5leHBvcnRGZWF0dXJlcygpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRXhwb3J0aW5nIHx8IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoID09PSAwIHx8IGlzTG9hZGluZyB8fCAhZmlsZU5hbWUudHJpbSgpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplcy5idXR0b25IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5idXR0b25Gb250LFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuNXB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNFeHBvcnRpbmcgPyAnUFJPQ0VTU0lORycgOiBgRVhQT1JUICR7c2VsZWN0ZWRGb3JtYXQgPT09ICdzaHAnID8gJ1NIUCcgOiAnS01aJ31gfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICB7aXNFeHBvcnRpbmcgJiYgam9iUHJvZ3Jlc3MgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtqb2JQcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplcy5wcm9ncmVzc0hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5zdXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy50aW55VGV4dFNpemVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5wcmltYXJ5TGlnaHQgfX0+e2V4cG9ydE1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57am9iUHJvZ3Jlc3N9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZXhwb3J0U3VjY2VzcyAmJiBkb3dubG9hZFVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcnMuc3VjY2Vzc30yMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogaXNQaG9uZSA/ICc4cHgnIDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLnN1Y2Nlc3N9YFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBpc1Bob25lID8gJ3dyYXAnIDogJ25vd3JhcCdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzaXplcy5zbWFsbFRleHRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXhwb3J0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IHNpemVzLnRpbnlUZXh0U2l6ZSwgY29sb3I6IGNvbG9ycy50ZXh0U2Vjb25kYXJ5IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQXV0by1zYXZlZCB0byBkb3dubG9hZHNcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oZG93bmxvYWRVcmwsICdfYmxhbmsnKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogaXNQaG9uZSA/ICc0cHggOHB4JyA6ICc0cHggMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuc21hbGxUZXh0U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXNQaG9uZSA/ICcyOHB4JyA6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg8J+TpSBEb3dubG9hZCBBZ2FpbiBpZiBOZWVkZWRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZXhwb3J0RXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2V4cG9ydEVycm9yfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNpemVzLnNtYWxsVGV4dFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogaXNQaG9uZSA/ICc2cHgnIDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcnMuZXJyb3J9MjBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5lcnJvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBzaXplcy5mb290ZXJQYWRkaW5nLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuZm9vdGVyRm9udCxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0TXV0ZWQsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke2NvbG9ycy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICcycHggMCAwIDAnIH19PkRldmVsb3BlZCBieSB0aGUgRFJNUDwvcD5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnNHB4IDAgMCAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZXMuZm9vdGVyTWVkaXVtRm9udCxcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0U2Vjb25kYXJ5XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdlb3NwYXRpYWwgU2VydmljZXMgRGl2aXNpb25cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2lzRXhwb3J0aW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==