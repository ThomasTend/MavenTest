webpackJsonp([8],{0:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=s(1),r=n(i),l=s(32),o=n(l),a=s(952),c=n(a);window.sonarqube.appStarted.then(function(e){var t=document.querySelector(e.el);o["default"].render(r["default"].createElement(c["default"],null),t)})},257:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var n=t.join(".");return w[n]||n}function r(e){for(var t=w[e],s=arguments.length,n=Array(s>1?s-1:0),i=1;i<s;i++)n[i-1]=arguments[i];return t?n.reduce(function(e,t,s){return e.replace("{"+s+"}",t)},t):e+"."+n.join(".")}function l(){return window.navigator.languages?window.navigator.languages[0]:window.navigator.language}function o(e){var t=window.baseUrl+"/api/l10n/index?"+(0,g.stringify)(e);return fetch(t,{credentials:"same-origin"}).then(function(e){switch(e.status){case 200:return e.json();case 304:return JSON.parse(localStorage.getItem("l10n.bundle"));case 401:return window.location=window.baseUrl+"/sessions/new?return_to="+encodeURIComponent(window.location.pathname+window.location.search+window.location.hash),{};default:throw new Error("Unexpected status code: "+e.status)}})}function a(){var e=localStorage.getItem("l10n.bundle");if(!e)return!1;try{var t=JSON.parse(e);return null!=t&&"object"===("undefined"==typeof t?"undefined":m(t))}catch(s){return!1}}function c(){var e=l(),t=localStorage.getItem("l10n.locale");t!==e&&localStorage.removeItem("l10n.timestamp");var s=localStorage.getItem("l10n.timestamp"),n={locale:e};return null!==s&&a()&&(n.ts=s),o(n).then(function(t){try{var s=(0,y["default"])().format("YYYY-MM-DDTHH:mm:ssZZ");localStorage.setItem("l10n.timestamp",s),localStorage.setItem("l10n.locale",e),localStorage.setItem("l10n.bundle",JSON.stringify(t))}catch(n){}w=t})}function u(e){w=e}function d(){window.t=i,window.tp=r,window.requestMessages=c}function p(e){var t="dashboard."+e+".name",s=i(t);return s!==t?s:e}function h(e){var t="metric."+e.key+".name",s=i(t);return s!==t?s:e.name}function f(e){var t="metric_domain."+e,s=i(t);return s!==t?s:e}Object.defineProperty(t,"__esModule",{value:!0});var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.translate=i,t.translateWithParameters=r,t.requestMessages=c,t.resetBundle=u,t.installGlobal=d,t.getLocalizedDashboardName=p,t.getLocalizedMetricName=h,t.getLocalizedMetricDomain=f;var g=s(258),v=s(261),y=n(v),w={}},258:function(e,t,s){"use strict";t.decode=t.parse=s(259),t.encode=t.stringify=s(260)},259:function(e,t){"use strict";function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var r={};if("string"!=typeof e||0===e.length)return r;var l=/\+/g;e=e.split(t);var o=1e3;i&&"number"==typeof i.maxKeys&&(o=i.maxKeys);var a=e.length;o>0&&a>o&&(a=o);for(var c=0;c<a;++c){var u,d,p,h,f=e[c].replace(l,"%20"),m=f.indexOf(n);m>=0?(u=f.substr(0,m),d=f.substr(m+1)):(u=f,d=""),p=decodeURIComponent(u),h=decodeURIComponent(d),s(r,p)?Array.isArray(r[p])?r[p].push(h):r[p]=[r[p],h]:r[p]=h}return r}},260:function(e,t){"use strict";var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(i){var r=encodeURIComponent(s(i))+n;return Array.isArray(e[i])?e[i].map(function(e){return r+encodeURIComponent(s(e))}).join(t):r+encodeURIComponent(s(e[i]))}).join(t):i?encodeURIComponent(s(i))+n+encodeURIComponent(s(e)):""}},386:function(e,t,s){var n;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function i(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e+=" "+s;else if(Array.isArray(s))e+=" "+i.apply(null,s);else if("object"===n)for(var l in s)r.call(s,l)&&s[l]&&(e+=" "+l)}}return e.substr(1)}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(n=function(){return i}.call(t,s,t,e),!(void 0!==n&&(e.exports=n)))}()},417:function(e,t){"use strict";e.exports=function(){var e=Array.prototype.slice.call(arguments,0,-1);return window.t.apply(this,e)}},497:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(353),r=n(i),l=s(395),o=n(l),a="modal";t["default"]=o["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var e=this;this.$el.detach().appendTo((0,r["default"])("body")),(0,r["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return e.destroy(),!1}),this.show(),this.options.large&&this.$el.addClass("modal-large")},show:function(){var e=this;setTimeout(function(){e.$el.addClass("in"),(0,r["default"])("."+e.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,r["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(e){e.preventDefault(),this.destroy()},renderOverlay:function(){var e=(0,r["default"])("."+this.overlayClassName);0===e.length&&(0,r["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,r["default"])("body"))},removeOverlay:function(){(0,r["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var e=this;(0,r["default"])("body").on("click."+a,function(){(0,r["default"])("body").off("click."+a),e.destroy()})}})},952:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(353),r=n(i),l=s(1),o=n(l),a=s(953),c=n(a),u=s(257);t["default"]=o["default"].createClass({displayName:"main",getInitialState:function(){return{ready:!1,permissions:[]}},componentDidMount:function(){this.requestPermissions()},requestPermissions:function(){var e=this,t=window.baseUrl+"/api/permissions/search_global_permissions";r["default"].get(t).done(function(t){e.setState({ready:!0,permissions:t.permissions})})},renderSpinner:function(){return this.state.ready?null:o["default"].createElement("i",{className:"spinner"})},render:function(){return o["default"].createElement("div",{className:"page"},o["default"].createElement("header",{id:"global-permissions-header",className:"page-header"},o["default"].createElement("h1",{className:"page-title"},(0,u.translate)("global_permissions.page")),this.renderSpinner(),o["default"].createElement("p",{className:"page-description"},(0,u.translate)("global_permissions.page.description"))),o["default"].createElement(c["default"],{ready:this.state.ready,permissions:this.state.permissions}))}})},953:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(386),r=n(i),l=s(1),o=n(l),a=s(954),c=n(a);t["default"]=o["default"].createClass({displayName:"permissions-list",propTypes:{permissions:o["default"].PropTypes.arrayOf(o["default"].PropTypes.object).isRequired},renderPermissions:function(){var e=this;return this.props.permissions.map(function(t){return o["default"].createElement(c["default"],{key:t.key,permission:t,project:e.props.project})})},render:function(){var e=(0,r["default"])({"new-loading":!this.props.ready});return o["default"].createElement("ul",{id:"global-permissions-list",className:e},this.renderPermissions())}})},954:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(353),r=n(i),l=s(1),o=n(l),a=s(955),c=n(a),u=s(962),d=n(u),p=3;t["default"]=o["default"].createClass({displayName:"permission",propTypes:{permission:o["default"].PropTypes.object.isRequired},getInitialState:function(){return{}},componentDidMount:function(){this.requestUsers(),this.requestGroups()},requestUsers:function(){var e=this,t=window.baseUrl+"/api/permissions/users",s={permission:this.props.permission.key,ps:p};this.props.project&&(s.projectId=this.props.project),r["default"].get(t,s).done(function(t){return e.setState({users:t.users,totalUsers:t.paging&&t.paging.total})})},requestGroups:function(){var e=this,t=window.baseUrl+"/api/permissions/groups",s={permission:this.props.permission.key,ps:p};this.props.project&&(s.projectId=this.props.project),r["default"].get(t,s).done(function(t){return e.setState({groups:t.groups,totalGroups:t.paging&&t.paging.total})})},render:function(){return o["default"].createElement("li",{className:"panel panel-vertical","data-id":this.props.permission.key},o["default"].createElement("h3",null,this.props.permission.name),o["default"].createElement("p",{className:"spacer-top",dangerouslySetInnerHTML:{__html:this.props.permission.description}}),o["default"].createElement("ul",{className:"list-inline spacer-top"},o["default"].createElement(c["default"],{permission:this.props.permission,project:this.props.project,max:p,items:this.state.users,total:this.state.totalUsers||this.props.permission.usersCount,refresh:this.requestUsers}),o["default"].createElement(d["default"],{permission:this.props.permission,project:this.props.project,max:p,items:this.state.groups,total:this.state.totalGroups||this.props.permission.groupsCount,refresh:this.requestGroups})))}})},955:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),r=n(i),l=s(956),o=n(l),a=s(957),c=n(a);t["default"]=r["default"].createClass({displayName:"permission-users",mixins:[o["default"]],renderUpdateLink:function(){return r["default"].createElement("a",{onClick:this.updateUsers,className:"icon-bullet-list",title:"Update Users","data-toggle":"tooltip",href:"#"})},renderItem:function(e){return e.name},renderTitle:function(){return"Users"},updateUsers:function(e){e.preventDefault(),new c["default"]({permission:this.props.permission.key,project:this.props.project,refresh:this.props.refresh}).render()}})},956:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),r=n(i);t["default"]={propTypes:{permission:r["default"].PropTypes.object.isRequired,max:r["default"].PropTypes.number.isRequired,items:r["default"].PropTypes.array,total:r["default"].PropTypes.number,refresh:r["default"].PropTypes.func.isRequired},renderNotDisplayed:function(){var e=this.props.total-this.props.max;return e>0?r["default"].createElement("span",{className:"note spacer-right",href:"#"},"and ",e," more"):null},renderItems:function(){var e=this,t=this.props.items.map(function(t){return r["default"].createElement("li",{key:t.name,className:"spacer-left little-spacer-bottom"},e.renderItem(t))});return r["default"].createElement("ul",{className:"overflow-hidden bordered-left"},t,r["default"].createElement("li",{className:"spacer-left little-spacer-bottom"},this.renderNotDisplayed(),this.renderUpdateLink()))},renderCount:function(){return r["default"].createElement("ul",{className:"overflow-hidden bordered-left"},r["default"].createElement("li",{className:"spacer-left little-spacer-bottom"},r["default"].createElement("span",{className:"spacer-right"},this.props.total),this.renderUpdateLink()))},render:function(){return r["default"].createElement("li",{className:"abs-width-400"},r["default"].createElement("div",{className:"pull-left spacer-right"},r["default"].createElement("strong",null,this.renderTitle())),this.props.items?this.renderItems():this.renderCount())}}},957:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var s=window.baseUrl+"/api/permissions/users?ps=100&permission="+e;return t&&(s=s+"&projectId="+t),s}function r(e,t){var s={permission:e};return t&&(s.projectId=t),s}Object.defineProperty(t,"__esModule",{value:!0});var l=s(497),o=n(l),a=s(958),c=n(a);s(959),t["default"]=o["default"].extend({template:c["default"],onRender:function(){o["default"].prototype.onRender.apply(this,arguments),new window.SelectList({el:this.$("#global-permissions-users"),width:"100%",readOnly:!1,focusSearch:!1,format:function(e){return e.name+'<br><span class="note">'+e.login+"</span>"},queryParam:"q",searchUrl:i(this.options.permission,this.options.project),selectUrl:window.baseUrl+"/api/permissions/add_user",deselectUrl:window.baseUrl+"/api/permissions/remove_user",extra:r(this.options.permission,this.options.project),selectParameter:"login",selectParameterValue:"login",parse:function(e){return this.more=!1,e.users}})},onDestroy:function(){this.options.refresh(),o["default"].prototype.onDestroy.apply(this,arguments)}})},958:function(e,t,s){var n=s(408);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){return'<div class="modal-head">\n  <h2>Update Users</h2>\n</div>\n<div class="modal-body">\n  <div class="js-modal-messages"></div>\n  <div id="global-permissions-users"></div>\n</div>\n<div class="modal-foot">\n  <a href="#" class="js-modal-close" id="global-permissions-users-done">Done</a>\n</div>\n'},useData:!0})},959:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=s(353),r=n(i),l=s(249),o=n(l),a=s(392),c=n(a),u=s(257),d=s(960),p=n(d),h=s(961),f=n(h),m=null,g=c["default"].Collection.extend({initialize:function(e){this.options=e},parse:function(e){return this.options.parse.call(this,e)},fetch:function(e){var t=r["default"].extend({page:1,pageSize:100},e.data||{}),s=r["default"].extend({},e,{data:t});this.settings={url:s.url,data:t},c["default"].Collection.prototype.fetch.call(this,s)},fetchNextPage:function(e){if(this.more){var t=this.settings.data.page+1,s=r["default"].extend(this.settings,e);s.data.page=t,s.remove=!1,this.fetch(s)}else e.error()}}),v=c["default"].View.extend({tagName:"li",template:p["default"],events:{"change .select-list-list-checkbox":"toggle"},initialize:function(e){this.listenTo(this.model,"change",this.render),this.settings=e.settings},render:function(){this.$el.html(this.template(this.settings.format(this.model.toJSON()))),this.$("input").prop("name",this.model.get("name")),this.$el.toggleClass("selected",this.model.get("selected")),this.$(".select-list-list-checkbox").prop("title",this.model.get("selected")?this.settings.tooltips.deselect:this.settings.tooltips.select).prop("checked",this.model.get("selected")),this.settings.readOnly&&this.$(".select-list-list-checkbox").prop("disabled",!0)},remove:function(e){if(e){var t=this;t.$el.addClass(this.model.get("selected")?"added":"removed"),setTimeout(function(){c["default"].View.prototype.remove.call(t,arguments)},500)}else c["default"].View.prototype.remove.call(this,arguments)},toggle:function(){var e=this.model.get("selected"),t=this,s=e?this.settings.deselectUrl:this.settings.selectUrl,n=r["default"].extend({},this.settings.extra||{});n[this.settings.selectParameter]=this.model.get(this.settings.selectParameterValue),t.$el.addClass("progress"),r["default"].ajax({url:s,data:n,type:"POST",statusCode:{400:null,403:null,500:null}}).done(function(){t.model.set("selected",!e)}).fail(function(e){t.render(),m(e)}).always(function(){t.$el.removeClass("progress")})}}),y=c["default"].View.extend({template:f["default"],events:{"click .select-list-control-button[name=selected]":"showSelected","click .select-list-control-button[name=deselected]":"showDeselected","click .select-list-control-button[name=all]":"showAll"},initialize:function(e){this.listenTo(this.collection,"add",this.renderListItem),this.listenTo(this.collection,"reset",this.renderList),this.listenTo(this.collection,"remove",this.removeModel),this.listenTo(this.collection,"change:selected",this.confirmFilter),this.settings=e.settings;var t=this;this.showFetchSpinner=function(){t.$listContainer.addClass("loading")},this.hideFetchSpinner=function(){t.$listContainer.removeClass("loading")};var s=function(){t.showFetchSpinner(),t.collection.fetchNextPage({success:function(){t.hideFetchSpinner()},error:function(){t.hideFetchSpinner()}})};this.onScroll=o["default"].throttle(s,1e3)},render:function(){var e=this,t=function(){e.search()};this.$el.html(this.template(this.settings.labels)).width(this.settings.width),this.$listContainer=this.$(".select-list-list-container"),this.settings.readOnly?this.$listContainer.addClass("select-list-list-container-readonly"):this.$listContainer.height(this.settings.height).css("overflow","auto").on("scroll",function(){e.scroll()}),this.$list=this.$(".select-list-list");var s=this.$(".select-list-search-control input").on("keyup",o["default"].debounce(t,250)).on("search",o["default"].debounce(t,250));this.settings.focusSearch&&setTimeout(function(){s.focus()},250),this.listItemViews=[],m=function(t){var s=(0,u.translate)("default_error_message");null!=t&&null!=t.responseJSON&&null!=t.responseJSON.errors&&(s=o["default"].pluck(t.responseJSON.errors,"msg").join(". ")),e.$el.prevAll(".alert").remove(),(0,r["default"])("<div>").addClass("alert alert-danger").text(s).insertBefore(e.$el)},this.settings.readOnly&&this.$(".select-list-control").remove()},renderList:function(){this.listItemViews.forEach(function(e){e.remove()}),this.listItemViews=[],this.collection.length>0?this.collection.each(this.renderListItem,this):this.settings.readOnly&&this.renderEmpty(),this.$listContainer.scrollTop(0)},renderListItem:function(e){var t=new v({model:e,settings:this.settings});this.listItemViews.push(t),this.$list.append(t.el),t.render()},renderEmpty:function(){this.$list.append('<li class="empty-message">'+this.settings.labels.noResults+"</li>")},confirmFilter:function(e){"all"!==this.currentFilter&&this.collection.remove(e)},removeModel:function(e,t,s){this.listItemViews[s.index].remove(!0),this.listItemViews.splice(s.index,1)},filterBySelection:function(e){var t=this;e=this.currentFilter=e||this.currentFilter,null!=e&&(this.$(".select-list-check-control").toggleClass("disabled",!1),this.$(".select-list-search-control").toggleClass("disabled",!0),this.$(".select-list-search-control input").val(""),this.$(".select-list-control-button").removeClass("active").filter("[name="+e+"]").addClass("active"),this.showFetchSpinner(),this.collection.fetch({url:this.settings.searchUrl,reset:!0,data:{selected:e},success:function(){t.hideFetchSpinner()},error:m}))},showSelected:function(){this.filterBySelection("selected")},showDeselected:function(){this.filterBySelection("deselected")},showAll:function(){this.filterBySelection("all")},search:function(){var e=this.$(".select-list-search-control input").val(),t=e.length>0,s=this,n={};this.$(".select-list-check-control").toggleClass("disabled",t),this.$(".select-list-search-control").toggleClass("disabled",!t),t?(this.showFetchSpinner(),this.currentFilter="all",n[this.settings.queryParam]=e,n.selected="all",this.collection.fetch({data:n,url:this.settings.searchUrl,reset:!0,success:function(){s.hideFetchSpinner()},error:m})):this.filterBySelection()},searchByQuery:function(e){this.$(".select-list-search-control input").val(e),this.search()},clearSearch:function(){this.filterBySelection()},scroll:function(){var e=this.$listContainer.scrollTop()>=this.$list[0].scrollHeight-this.$listContainer.outerHeight();e&&this.collection.more&&this.onScroll()}});window.SelectList=function(e){return this.settings=r["default"].extend(window.SelectList.defaults,e),this.collection=new g({parse:this.settings.parse}),this.view=new y({el:this.settings.el,collection:this.collection,settings:this.settings}),this.view.render(),this.filter("selected"),this},window.SelectList.prototype.filter=function(e){return this.view.filterBySelection(e),this},window.SelectList.prototype.search=function(e){return this.view.searchByQuery(e),this},window.SelectList.defaults={width:"50%",height:400,readOnly:!1,focusSearch:!0,format:function(e){return e.value},parse:function(e){return this.more=e.more,e.results},queryParam:"query",labels:{selected:"Selected",deselected:"Deselected",all:"All",noResults:""},tooltips:{select:"Click this to select item",deselect:"Click this to deselect item"},errorMessage:"Something gone wrong, try to reload the page and try again."}},960:function(e,t,s){var n=s(408);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,r=this.lambda,l='<input class="select-list-list-checkbox" type="checkbox">\n<div class="select-list-list-item">';return i=r(e,e),null!=i&&(l+=i),l+"</div>\n"},useData:!0})},961:function(e,t,s){var n=s(408);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var r=this.lambda,l=this.escapeExpression;return'<div class="select-list-container">\n  <div class="select-list-control">\n    <div class="select-list-check-control">\n      <a class="select-list-control-button" name="selected">'+l(r(null!=e?e.selected:e,e))+'</a><a class="select-list-control-button" name="deselected">'+l(r(null!=e?e.deselected:e,e))+'</a><a class="select-list-control-button" name="all">'+l(r(null!=e?e.all:e,e))+'</a>\n    </div>\n    <div class="select-list-search-control">\n      <form class="search-box">\n        <span class="search-box-submit button-clean"><i class="icon-search"></i></span>\n        <input class="search-box-input" type="search" name="q" placeholder="'+l(s(417).call(e,"search_verb",{name:"t",hash:{},data:i}))+'" maxlength="100" autocomplete="off">\n      </form>\n    </div>\n  </div>\n  <div class="select-list-list-container">\n    <ul class="select-list-list"></ul>\n  </div>\n</div>\n'},useData:!0})},962:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),r=n(i),l=s(956),o=n(l),a=s(963),c=n(a);t["default"]=r["default"].createClass({displayName:"permission-groups",mixins:[o["default"]],renderUpdateLink:function(){return r["default"].createElement("a",{onClick:this.updateGroups,className:"icon-bullet-list",title:"Update Groups","data-toggle":"tooltip",href:"#"})},renderItem:function(e){return e.name},renderTitle:function(){return"Groups"},updateGroups:function(e){e.preventDefault(),new c["default"]({permission:this.props.permission.key,project:this.props.project,refresh:this.props.refresh}).render()}})},963:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var s=window.baseUrl+"/api/permissions/groups?ps=100&permission="+e;return t&&(s=s+"&projectId="+t),s}function r(e,t){var s={permission:e};return t&&(s.projectId=t),s}Object.defineProperty(t,"__esModule",{value:!0});var l=s(497),o=n(l),a=s(964),c=n(a);s(959),t["default"]=o["default"].extend({template:c["default"],onRender:function(){o["default"].prototype.onRender.apply(this,arguments),new window.SelectList({el:this.$("#global-permissions-groups"),width:"100%",readOnly:!1,focusSearch:!1,format:function(e){return e.name},queryParam:"q",searchUrl:i(this.options.permission,this.options.project),selectUrl:window.baseUrl+"/api/permissions/add_group",deselectUrl:window.baseUrl+"/api/permissions/remove_group",extra:r(this.options.permission,this.options.project),selectParameter:"groupName",selectParameterValue:"name",parse:function(e){return this.more=!1,e.groups}})},onDestroy:function(){this.options.refresh(),o["default"].prototype.onDestroy.apply(this,arguments)}})},964:function(e,t,s){var n=s(408);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){return'<div class="modal-head">\n  <h2>Update Groups</h2>\n</div>\n<div class="modal-body">\n  <div class="js-modal-messages"></div>\n  <div id="global-permissions-groups"></div>\n</div>\n<div class="modal-foot">\n  <a href="#" class="js-modal-close" id="global-permissions-groups-done">Done</a>\n</div>\n'},useData:!0})}});