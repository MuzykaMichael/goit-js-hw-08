var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,u,f,l=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,u=setTimeout(x,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-l>=i}function x(){var e=d();if(j(e))return S(e);u=setTimeout(x,function(e){var n=t-(e-f);return g?m(n,i-(e-l)):n}(e))}function S(e){return u=void 0,y&&r?b(e):(r=o=void 0,a)}function h(){var e=d(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return T(f);if(g)return u=setTimeout(x,t),b(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:S(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),emailInput:document.querySelector("input"),messageTextarea:document.querySelector("textarea")},b=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};y.emailInput.value=b.email,y.messageTextarea.value=b.message,y.form.addEventListener("input",t((function(e){"INPUT"===e.target.nodeName&&(b.email=e.target.value);"TEXTAREA"===e.target.nodeName&&(b.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Всі поля повинні бути заповнені!");{const r={email:t.value,message:n.value};console.log(r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}}));
//# sourceMappingURL=03-feedback.4b878165.js.map
