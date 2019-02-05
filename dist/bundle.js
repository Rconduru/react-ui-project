'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Alert_Alert__3rCmp {\n  width: 100%;\n  height: auto;\n  border: 1px solid midnightblue;\n  padding: 10px;\n  background-color: lightcoral;\n}\n";
var styles = {"Alert":"Alert_Alert__3rCmp"};
styleInject(css);

var AlertComponent = function AlertComponent(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'this is an alert' : _ref$message;
  return React.createElement("div", {
    className: styles.Alert
  }, React.createElement("span", null, message));
};

exports.Alert = AlertComponent;
