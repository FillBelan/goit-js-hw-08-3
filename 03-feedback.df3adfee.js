!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,a,f,u,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function T(e){return l=e,u=setTimeout(h,t),s?S(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=g();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?v(n,a-(e-l)):n}(e))}function w(e){return u=void 0,p&&o?S(e):(o=i=void 0,f)}function x(){var e=g(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return T(c);if(d)return u=setTimeout(h,t),S(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},x.flush=function(){return void 0===u?f:w(g())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const S={},T={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};T.form.addEventListener("input",e(t)((function(e){const{elements:{email:t,message:n}}=e.currentTarget;S.email=t.value,S.message=n.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),T.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(T.input.value=t.email,T.textarea.value=t.message)}()}();
//# sourceMappingURL=03-feedback.df3adfee.js.map
