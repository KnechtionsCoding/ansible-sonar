webpackJsonp([18],{1652:function(e,t,n){"use strict";function r(e){var t=e.user;return a.a.createElement("div",{className:"account-body account-container"},a.a.createElement(s.a,{title:n.i(f.translate)("my_account.security")}),a.a.createElement(u.a,{user:t}),t.local&&h,t.local&&a.a.createElement(c.a,{user:t}))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n.n(o),i=n(22),s=n.n(i),l=n(8),c=(n.n(l),n(1925)),u=n(1926),f=n(2),d=n(7),h=a.a.createElement("hr",{className:"account-separator"});t.default=n.i(l.connect)(function(e){return{user:n.i(d.getCurrentUser)(e)}})(r)},1730:function(e,t,n){"use strict";function r(e){var t={login:e};return n.i(i.getJSON)("/api/user_tokens/search",t).then(function(e){return e.userTokens})}function o(e,t){var r={name:e};return t&&(r.login=t),n.i(i.postJSON)("/api/user_tokens/generate",r).catch(s.a)}function a(e,t){var r={name:e};return t&&(r.login=t),n.i(i.post)("/api/user_tokens/revoke",r).catch(s.a)}t.a=r,t.b=o,t.c=a;var i=n(20),s=n(326)},1738:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1771),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(t){r(this,e),this.resolveOptions(t),this.initSelection()}return e.prototype.resolveOptions=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},e.prototype.initSelection=function(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},e.prototype.selectFake=function(){var e=this;this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=i.default(this.fakeElem),this.copyText()},e.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},e.prototype.selectTarget=function(){this.selectedText=i.default(this.target),this.copyText()},e.prototype.copyText=function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)},e.prototype.handleResult=function(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},e.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},e.prototype.destroy=function(){this.removeFake()},o(e,[{key:"action",set:function(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function(){return this._target}}]),e}();t.default=s,e.exports=t.default},1739:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.__esModule=!0;var s=n(1738),l=r(s),c=n(1772),u=r(c),f=n(1748),d=r(f),h=function(e){function t(n,r){o(this,t),e.call(this),this.resolveOptions(r),this.listenClick(n)}return a(t,e),t.prototype.resolveOptions=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},t.prototype.listenClick=function(e){var t=this;this.listener=d.default(e,"click",function(e){return t.onClick(e)})},t.prototype.onClick=function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(t),target:this.target(t),text:this.text(t),trigger:t,emitter:this})},t.prototype.defaultAction=function(e){return i("action",e)},t.prototype.defaultTarget=function(e){var t=i("target",e);if(t)return document.querySelector(t)},t.prototype.defaultText=function(e){return i("text",e)},t.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},t}(u.default);t.default=h,e.exports=t.default},1744:function(e,t){function n(e,t){for(;e&&e.nodeType!==r;){if(e.matches(t))return e;e=e.parentNode}}var r=9;if(Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=n},1745:function(e,t,n){function r(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function o(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}var a=n(1744);e.exports=r},1747:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},1748:function(e,t,n){function r(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!s.string(t))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(e))return o(e,t,n);if(s.nodeList(e))return a(e,t,n);if(s.string(e))return i(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function a(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function i(e,t,n){return l(document.body,e,t,n)}var s=n(1747),l=n(1745);e.exports=r},1771:function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r),t=n.toString()}return t}e.exports=n},1772:function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function r(){o.off(e,r),t.apply(n,arguments)}var o=this;return r._=t,this.on(e,r,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var a=0,i=r.length;a<i;a++)r[a].fn!==t&&r[a].fn._!==t&&o.push(r[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},1925:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=n(166),c=n(2),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=s.a.createElement("em",{className:"mandatory"},"*"),d=s.a.createElement("em",{className:"mandatory"},"*"),h=s.a.createElement("em",{className:"mandatory"},"*"),p=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={success:!1,errors:null},i=n,o(a,i)}return a(t,e),u(t,[{key:"handleSuccessfulChange",value:function(){this.refs.oldPassword.value="",this.refs.password.value="",this.refs.passwordConfirmation.value="",this.setState({success:!0,errors:null})}},{key:"handleFailedChange",value:function(e){var t=this;e.response.json().then(function(e){t.refs.oldPassword.focus(),t.setErrors(e.errors.map(function(e){return e.msg}))})}},{key:"setErrors",value:function(e){this.setState({success:!1,errors:e})}},{key:"handleChangePassword",value:function(e){e.preventDefault();var t=this.props.user,r=this.refs.oldPassword.value,o=this.refs.password.value;o!==this.refs.passwordConfirmation.value?(this.refs.password.focus(),this.setErrors([n.i(c.translate)("user.password_doesnt_match_confirmation")])):n.i(l.e)(t.login,o,r).then(this.handleSuccessfulChange.bind(this)).catch(this.handleFailedChange.bind(this))}},{key:"render",value:function(){var e=this.state,t=e.success,r=e.errors;return s.a.createElement("section",null,s.a.createElement("h2",{className:"spacer-bottom"},n.i(c.translate)("my_profile.password.title")),s.a.createElement("form",{onSubmit:this.handleChangePassword.bind(this)},t&&s.a.createElement("div",{className:"alert alert-success"},n.i(c.translate)("my_profile.password.changed")),r&&r.map(function(e,t){return s.a.createElement("div",{key:t,className:"alert alert-danger"},e)}),s.a.createElement("div",{className:"modal-field"},s.a.createElement("label",{htmlFor:"old_password"},n.i(c.translate)("my_profile.password.old"),f),s.a.createElement("input",{ref:"oldPassword",autoComplete:"off",id:"old_password",name:"old_password",required:!0,type:"password"})),s.a.createElement("div",{className:"modal-field"},s.a.createElement("label",{htmlFor:"password"},n.i(c.translate)("my_profile.password.new"),d),s.a.createElement("input",{ref:"password",autoComplete:"off",id:"password",name:"password",required:!0,type:"password"})),s.a.createElement("div",{className:"modal-field"},s.a.createElement("label",{htmlFor:"password_confirmation"},n.i(c.translate)("my_profile.password.confirm"),h),s.a.createElement("input",{ref:"passwordConfirmation",autoComplete:"off",id:"password_confirmation",name:"password_confirmation",required:!0,type:"password"})),s.a.createElement("div",{className:"modal-field"},s.a.createElement("button",{id:"change-password",type:"submit"},n.i(c.translate)("my_profile.password.submit")))))}}]),t}(i.Component);t.a=p},1926:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(17),s=n.n(i),l=n(0),c=n.n(l),u=n(1938),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){this.renderView()}},{key:"componentWillUnmount",value:function(){this.destroyView()}},{key:"destroyView",value:function(){this.destroyView&&this.tokensView.destroy()}},{key:"renderView",value:function(){var e=new s.a.Model({id:this.props.user.login});this.tokensView=new u.a({el:this.refs.container,model:e}).render()}},{key:"render",value:function(){return c.a.createElement("div",{ref:"container"})}}]),t}(l.Component);t.a=d},1938:function(e,t,n){"use strict";var r=n(11),o=n.n(r),a=n(13),i=n.n(a),s=n(1739),l=n.n(s),c=n(2267),u=n.n(c),f=n(1730);t.a=i.a.ItemView.extend({template:u.a,events:function(){return{"submit .js-generate-token-form":"onGenerateTokenFormSubmit","submit .js-revoke-token-form":"onRevokeTokenFormSubmit"}},initialize:function(){this.tokens=null,this.newToken=null,this.errors=[],this.requestTokens()},requestTokens:function(){var e=this;return n.i(f.a)(this.model.id).then(function(t){e.tokens=t,e.render()})},onGenerateTokenFormSubmit:function(e){var t=this;e.preventDefault(),this.errors=[],this.newToken=null;var r=this.$(".js-generate-token-form input").val();n.i(f.b)(r,this.model.id).then(function(e){t.newToken=e,t.requestTokens()},function(){})},onRevokeTokenFormSubmit:function(e){e.preventDefault();var t=o()(e.currentTarget).data("token"),r=this.tokens.find(function(e){return e.name===""+t});r&&(r.deleting?n.i(f.c)(t,this.model.id).then(this.requestTokens.bind(this),function(){}):(r.deleting=!0,this.render()))},onRender:function(){var e=this.$(".js-copy-to-clipboard");if(e.length){new l.a(e.get(0)).on("success",function(){e.tooltip({title:"Copied!",placement:"bottom",trigger:"manual"}).tooltip("show"),setTimeout(function(){return e.tooltip("hide")},1e3)})}this.newToken=null},serializeData:function(){return Object.assign({},i.a.ItemView.prototype.serializeData.apply(this,arguments),{tokens:this.tokens,newToken:this.newToken,errors:this.errors})}})},2267:function(e,t,n){function r(e){return e&&(e.__esModule?e.default:e)}var o=n(5);e.exports=(o.default||o).template({1:function(e,t,n,r){var o,a='  <table class="data">\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th class="text-right">Created</th>\n      <th>&nbsp;</th>\n    </tr>\n    </thead>\n    <tbody>\n';return o=t.each.call(e,null!=e?e.tokens:e,{name:"each",hash:{},fn:this.program(2,r),inverse:this.program(7,r),data:r}),null!=o&&(a+=o),a+"    </tbody>\n  </table>\n"},2:function(e,t,o,a){var i,s=this.lambda,l=this.escapeExpression,c='      <tr>\n        <td>\n          <div title="'+l(s(null!=e?e.name:e,e))+'">\n            '+l(r(n(657)).call(e,null!=e?e.name:e,{name:"limitString",hash:{},data:a}))+'\n          </div>\n        </td>\n        <td class="thin nowrap text-right">\n          '+l(r(n(328)).call(e,null!=e?e.createdAt:e,{name:"d",hash:{},data:a}))+'\n        </td>\n        <td class="thin nowrap text-right">\n          <div class="big-spacer-left">\n            <form class="js-revoke-token-form" data-token="'+l(s(null!=e?e.name:e,e))+'">\n';return i=t.if.call(e,null!=e?e.deleting:e,{name:"if",hash:{},fn:this.program(3,a),inverse:this.program(5,a),data:a}),null!=i&&(c+=i),c+"            </form>\n          </div>\n        </td>\n      </tr>\n"},3:function(e,t,n,r){return'                <button class="button-red active input-small">Sure?</button>\n'},5:function(e,t,n,r){return'                <button class="button-red input-small">Revoke</button>\n'},7:function(e,t,n,r){return'      <tr>\n        <td colspan="3">\n          <span class="note">No tokens</span>\n        </td>\n      </tr>\n'},9:function(e,t,n,r){var o=this.lambda;return'  <div class="alert alert-danger">'+(0,this.escapeExpression)(o(null!=e?e.msg:e,e))+"</div>\n"},11:function(e,t,o,a){var i,s=this.escapeExpression,l=this.lambda;return'  <div class="panel panel-white big-spacer-top">\n    <div class="alert alert-warning">\n      New token "'+s(r(n(657)).call(e,null!=(i=null!=e?e.newToken:e)?i.name:i,{name:"limitString",hash:{},data:a}))+'" has been created. Make sure you copy it now, you won’t be able to see it\n      again!\n    </div>\n\n    <table class="data">\n      <tr>\n\n        <td class="thin">\n          <button class="js-copy-to-clipboard" data-clipboard-text="'+s(l(null!=(i=null!=e?e.newToken:e)?i.token:i,e))+'">Copy</button>\n        </td>\n        <td class="nowrap">\n          <div class="monospaced text-success">'+s(l(null!=(i=null!=e?e.newToken:e)?i.token:i,e))+"</div>\n        </td>\n      </tr>\n    </table>\n  </div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,a){var i,s=this.escapeExpression,l='<h2 class="spacer-bottom">Tokens</h2>\n\n<div class="big-spacer-bottom big-spacer-right markdown">\n  <p>'+s(r(n(1)).call(e,"my_account.tokens_description",{name:"t",hash:{},data:a}))+"</p>\n</div>\n\n";return i=r(n(49)).call(e,null!=e?e.tokens:e,{name:"notNull",hash:{},fn:this.program(1,a),inverse:this.noop,data:a}),null!=i&&(l+=i),l+="\n",i=t.each.call(e,null!=e?e.errors:e,{name:"each",hash:{},fn:this.program(9,a),inverse:this.noop,data:a}),null!=i&&(l+=i),l+='\n<form class="js-generate-token-form spacer-top panel bg-muted">\n  <label>Generate New Token:</label>\n  <input type="text" required maxlength="100" placeholder="Enter Token Name">\n  <button>Generate</button>\n</form>\n\n',i=t.if.call(e,null!=e?e.newToken:e,{name:"if",hash:{},fn:this.program(11,a),inverse:this.noop,data:a}),null!=i&&(l+=i),l},useData:!0})}});
//# sourceMappingURL=18.4ed9515a.chunk.js.map