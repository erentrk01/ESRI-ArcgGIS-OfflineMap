(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/UnknownLayer":"N1SI"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{N1SI:function(e,n,o){var r,t;r=[o.dj.c(e.i),n,o("zOht"),o("ma1f"),o("EUqE"),o("qMld"),o("afW+"),o("Vx27"),o("0RER"),o("QJ8R")],void 0===(t=function(e,n,o,r,t,i,p,a,s,u){return function(e){function n(n){var o=e.call(this,n)||this;return o.resourceInfo=null,o.type="unknown",o}return o.__extends(n,e),n.prototype.initialize=function(){var e=this;this.addResolvingPromise(i.create((function(n,o){p.schedule((function(){var n=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),t="Unknown layer type";n&&(t+=" "+n),o(new r("layer:unknown-layer-type",t,{layerType:n}))}))})))},n.prototype.read=function(n,o){e.prototype.read.call(this,{resourceInfo:n},o)},n.prototype.write=function(){return null},o.__decorate([a.property({readOnly:!0})],n.prototype,"resourceInfo",void 0),o.__decorate([a.property({type:["show","hide"]})],n.prototype,"listMode",void 0),o.__decorate([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],n.prototype,"type",void 0),o.__decorate([a.subclass("esri.layers.UnknownLayer")],n)}(u.PortalLayer(t.MultiOriginJSONMixin(s)))}.apply(null,r))||(e.exports=t)}}]);