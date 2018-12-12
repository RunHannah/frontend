webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DataLoader.jsx":
/*!***********************************!*\
  !*** ./components/DataLoader.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _charts_Marey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/Marey */ "./components/charts/Marey.jsx");
var _jsxFileName = "/home/cts/repos/hackforla/metro/frontend/components/DataLoader.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DataLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(DataLoader, _Component);

  function DataLoader(props) {
    var _this;

    _classCallCheck(this, DataLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataLoader).call(this, props));
    _this.state = {
      schedule: null,
      trips: null
    };
    return _this;
  }

  _createClass(DataLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.all([axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://s3-us-west-1.amazonaws.com/h4la-metro-performance/sample_schedule.json'), axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://s3-us-west-1.amazonaws.com/h4la-metro-performance/sample_trips.json')]).then(axios__WEBPACK_IMPORTED_MODULE_2___default.a.spread(function (schedule, actual) {
        var scheduleJSON = JSON.parse(schedule.data);
        var actualJSON = JSON.parse(actual.data);

        _this2.setState({
          schedule: scheduleJSON,
          trips: actualJSON
        });

        var firstDate = JSON.parse(schedule);
        console.log(firstDate);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          schedule = _this$state.schedule,
          trips = _this$state.trips;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-935262511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.state && schedule && trips && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-935262511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-935262511" + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-935262511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Date: "), "Tuesday, October 30, 2018 (vertical axes showing incorrect times due to timezone error)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_Marey__WEBPACK_IMPORTED_MODULE_3__["default"], {
        schedule: schedule,
        trips: trips,
        dates: {
          min: '2018-10-29 23:00:00',
          max: '2018-10-30 02:00:00'
        },
        size: [300, 600],
        direction: "804 - Azusa / Citrus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "935262511",
        css: ".date.jsx-935262511{font-weight:200;padding:0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N0cy9yZXBvcy9oYWNrZm9ybGEvbWV0cm8vZnJvbnRlbmQvY29tcG9uZW50cy9EYXRhTG9hZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFcsQUFHK0IsZ0JBQ0EsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2N0cy9yZXBvcy9oYWNrZm9ybGEvbWV0cm8vZnJvbnRlbmQvY29tcG9uZW50cy9EYXRhTG9hZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE1hcmV5IGZyb20gJy4vY2hhcnRzL01hcmV5JztcblxuY2xhc3MgRGF0YUxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNjaGVkdWxlOiBudWxsLCB0cmlwczogbnVsbCB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuYWxsKFtcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9oNGxhLW1ldHJvLXBlcmZvcm1hbmNlL3NhbXBsZV9zY2hlZHVsZS5qc29uJyksXG4gICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vaDRsYS1tZXRyby1wZXJmb3JtYW5jZS9zYW1wbGVfdHJpcHMuanNvbicpXSlcbiAgICAgIC50aGVuKGF4aW9zLnNwcmVhZCgoc2NoZWR1bGUsIGFjdHVhbCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlZHVsZUpTT04gPSBKU09OLnBhcnNlKHNjaGVkdWxlLmRhdGEpO1xuICAgICAgICBjb25zdCBhY3R1YWxKU09OID0gSlNPTi5wYXJzZShhY3R1YWwuZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY2hlZHVsZTogc2NoZWR1bGVKU09OLCB0cmlwczogYWN0dWFsSlNPTiB9KTtcbiAgICAgICAgY29uc3QgZmlyc3REYXRlID0gSlNPTi5wYXJzZShzY2hlZHVsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0RGF0ZSk7XG4gICAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY2hlZHVsZSwgdHJpcHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZVxuICAgICAgICAmJiBzY2hlZHVsZVxuICAgICAgICAmJiB0cmlwc1xuICAgICAgICAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICA8Yj5EYXRlOiA8L2I+XG4gICAgICAgICAgICAgIFR1ZXNkYXksIE9jdG9iZXIgMzAsIDIwMThcbiAgICAgICAgICAgICAgKHZlcnRpY2FsIGF4ZXMgc2hvd2luZyBpbmNvcnJlY3QgdGltZXMgZHVlIHRvIHRpbWV6b25lIGVycm9yKVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TWFyZXlcbiAgICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxuICAgICAgICAgICAgICB0cmlwcz17dHJpcHN9XG4gICAgICAgICAgICAgIGRhdGVzPXt7IG1pbjogJzIwMTgtMTAtMjkgMjM6MDA6MDAnLCBtYXg6ICcyMDE4LTEwLTMwIDAyOjAwOjAwJyB9fVxuICAgICAgICAgICAgICBzaXplPXtbMzAwLCA2MDBdfVxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCI4MDQgLSBBenVzYSAvIENpdHJ1c1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMb2FkZXI7XG4iXX0= */\n/*@ sourceURL=/home/cts/repos/hackforla/metro/frontend/components/DataLoader.jsx */",
        __self: this
      }));
    }
  }]);

  return DataLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DataLoader);

/***/ })

})
//# sourceMappingURL=index.js.33cae80ff02804d37e33.hot-update.js.map