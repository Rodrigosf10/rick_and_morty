/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _consulta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta */ \"./src/consulta.js\");\n\nvar rick = new _consulta__WEBPACK_IMPORTED_MODULE_0__.Consulta();\nrick.personajes();\nrick.episodios();\nrick.localizaciones();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/consulta.js":
/*!*************************!*\
  !*** ./src/consulta.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Consulta\": () => (/* binding */ Consulta)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// link de la api: \"https://rickandmortyapi.com/api\"\n// Realizar la exportacion\nvar Consulta = /*#__PURE__*/function () {\n  // Metodo Controlador\n  function Consulta() {\n    _classCallCheck(this, Consulta);\n  }\n\n  _createClass(Consulta, [{\n    key: \"personajes\",\n    value: function personajes() {\n      fetch(\"https://rickandmortyapi.com/api/character\") //recibe un parametro una URL\n      .then(function (respuesta) {\n        return respuesta.json();\n      }) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON\n      .then(function (respuesta) {\n        //SE RECIBEN LOS DATOS EN FORMATO JSON\n        console.log(respuesta); //SE MUESTRAN LOS DATOS OBTENIDOS\n\n        var results = respuesta.results; //se obtinen los personajes\n\n        var personajes = \"\";\n        var contador = 0;\n        results.map(function (personaje) {\n          //se recorre el arreglo de personajes\n          var created = personaje.created,\n              gender = personaje.gender,\n              id = personaje.id,\n              image = personaje.image,\n              location = personaje.location,\n              name = personaje.name,\n              origin = personaje.origin,\n              species = personaje.species,\n              status = personaje.status,\n              url = personaje.url;\n          if (contador < 20) personajes += \"\\n                        <div class=\\\"col-md-4\\\">\\n                        <p></p>\\n                            <div class=\\\"card-container\\\" style=\\\"box-shadow: 0 0 30px #4f9;\\\">\\n                                <div class=\\\"card border-primary\\\">\\n                                    <div class=\\\"front\\\" style=\\\"\\\">\\n                                        <div class=\\\"cover\\\">\\n                                            <img class=\\\"rounded-top\\\" src=\\\"public/img/portal.jpg\\\"/>\\n                                        </div>\\n                                        <div class=\\\"user\\\">\\n                                            <img class=\\\"img-fluid\\\" src=\\\"\".concat(image, \"\\\"/>\\n                                        </div>\\n                                        <div class=\\\"content\\\">\\n                                            <div class=\\\"main\\\">\\n                                                <h5 class=\\\"text-center\\\"><b>\").concat(id, \". \").concat(name, \"</b></h5>\\n                                                <br>\\n                                                <p class=\\\"profession\\\">\\n                                                    <u><b>A character from the series: Rick and Morty</b></u> <br>\\n                                                    The science is your only and true friend <br>\\n                                                    Life is unfair and sucks <br>\\n                                                    Nothing is real\\n                                                </p>\\n                                            </div>\\n                                            <div class=\\\"footer\\\">\\n                                                <div class=\\\"rating\\\">\\n                                                    <img class=\\\"img-fluid\\\" src=\\\"public/img/adultswim.png\\\" style=\\\"width: 130px; height: 25px;\\\">\\n                                                </div>\\n                                            </div>\\n                                        </div>\\n                                    </div>\\n                                    <div class=\\\"back\\\">\\n                                        <div class=\\\"header\\\">\\n                                            <h3 class=\\\"text-center\\\"><b>Ficha del Personaje</b></h3>\\n                                            <hr>\\n                                        </div>\\n                                        <div class=\\\"content\\\">\\n                                            <div class=\\\"main\\\">\\n                                                <p style=\\\"font-size: 18px;\\\">\\n                                                    <b>Creaci\\xF3n: </b>\").concat(created, \" <br>\\n                                                    <b>Genero: </b>\").concat(gender, \" <br>\\n                                                    <b>Localizaci\\xF3n: </b>\").concat(location.name, \" <br>\\n                                                    <b>Origen: </b>\").concat(origin.name, \" <br>\\n                                                    <b>Especie: </b>\").concat(species, \" <br>\\n                                                    <b>Estado: </b>\").concat(status, \"\\n                                                </p>\\n                                            </div>\\n                                        </div>\\n                                        <div class=\\\"footer\\\">\\n                                            <a href=\\\"\").concat(url, \"\\\" class=\\\"btn btn-sm btn-primary\\\">Ver m\\xE1s sobre el personaje</a>\\n                                        </div>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \");\n          contador++;\n        });\n        $(\"#personajes\").html(personajes);\n      })[\"catch\"](function (error) {\n        //SE ATRAPA UN ERROR EN CASO DE EXISTIR\n        console.log(error); //SE MUESTRA EL ERROR\n      });\n    }\n  }, {\n    key: \"episodios\",\n    value: function episodios() {\n      fetch(\"https://rickandmortyapi.com/api/episode\").then(function (respuesta2) {\n        return respuesta2.json();\n      }).then(function (respuesta2) {\n        console.log(respuesta2);\n        var results = respuesta2.results;\n        var episodios = \"\";\n        var contador2 = 0;\n        results.map(function (episodio) {\n          var id = episodio.id,\n              name = episodio.name,\n              air_date = episodio.air_date,\n              episode = episodio.episode,\n              characters = episodio.characters,\n              url = episodio.url,\n              created = episodio.created;\n          if (contador2 < 11) episodios += \"\\n                        <br>\\n                        <div class=\\\"col-xs-8 col-xs-offset-2 slide-row\\\">\\n                            <div class=\\\"slide-content\\\" style=\\\"color: white;\\\">\\n                                <h2>Episodio N\\xB0 \".concat(id, \": \").concat(name, \"</h2>\\n                                <p>\\n                                    <b>Creaci\\xF3n: </b>\").concat(created, \" <br>\\n                                    <b>Episodio: </b>\").concat(episode, \" <br>\\n                                    <b>Fecha de emisi\\xF3n al aire: </b>\").concat(air_date, \" <br>\\n                                    <b>Canal original:</b> Adult Swim. <br> \\n                                    <b>Streaming:</b> HBO Max.\\n                                </p>\\n                                <p></p>\\n                            </div>\\n                            <div class=\\\"slide-footer text-end\\\" style=\\\"background-color: black;\\\">\\n                                <span class=\\\"pull-right buttons\\\">\\n                                    <a class=\\\"btn btn-sm btn-success\\\" href=\\\"\").concat(url, \"\\\" >Ver m\\xE1s datos del episodio</a>\\n                                </span>\\n                            </div>\\n                        </div>\\n                        \");\n          contador2++;\n        });\n        $(\"#episodios\").html(episodios);\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: \"localizaciones\",\n    value: function localizaciones() {\n      fetch(\"https://rickandmortyapi.com/api/location\").then(function (respuesta3) {\n        return respuesta3.json();\n      }).then(function (respuesta3) {\n        console.log(respuesta3);\n        var results = respuesta3.results;\n        var localizaciones = \"\";\n        var contador3 = 0;\n        results.map(function (localizacion) {\n          var id = localizacion.id,\n              name = localizacion.name,\n              type = localizacion.type,\n              dimension = localizacion.dimension,\n              residents = localizacion.residents,\n              url = localizacion.url,\n              created = localizacion.created;\n          if (contador3 < 12) localizaciones += \"\\n                            <div class=\\\"col-md-6\\\">\\n                                <div class=\\\"card border border-primary rounded\\\" style=\\\"box-shadow: 0 0 30px #4f9;\\\">\\n                                    <h5 class=\\\"card-header text-center\\\">Localizacion \".concat(id, \": \").concat(name, \"</h5>\\n                                    <div class=\\\"card-body rounded-bottom\\\" style=\\\"background-color: #000000; color: white;\\\">\\n                                        <p class=\\\"card-text\\\">\\n                                            <b>Creacion: </b>\").concat(created, \" <br>\\n                                            <b>Tipo: </b>\").concat(type, \" <br>\\n                                            <b>Dimension: </b>\").concat(dimension, \" <br>\\n                                            \\n                                        </p>\\n                                        <a class=\\\"btn btn-primary\\\" href=\\\"\").concat(url, \"\\\" style=\\\"margin-left: 25%;\\\">Ver m\\xE1s acerca del planeta</a>\\n                                    </div>\\n                                </div>\\n                                <br>\\n                            </div>\\n                            <br>\");\n          contador3++;\n        });\n        $(\"#localizaciones\").html(localizaciones);\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    }\n    /* consulta() {\r\n        fetch(\"https://rickandmortyapi.com/api\")\r\n            .then((respuesta) => {\r\n                if (respuesta.status == 200) {\r\n                    console.log(\"Funcionamiento correcto\");\r\n                    console.log(respuesta.json());\r\n                }\r\n                if (respuesta.status == 404) {\r\n                    console.log(\"No se encontro la pagina\");\r\n                }\r\n                if (respuesta.status == 500) {\r\n                    console.log(\"Error del Servidor\");\r\n                }\r\n            })\r\n            .catch();\r\n    }*/\n\n  }]);\n\n  return Consulta;\n}(); // Episodios, Localizaciones\n\n//# sourceURL=webpack:///./src/consulta.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;