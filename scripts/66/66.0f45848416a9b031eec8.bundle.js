(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/number":"AcGV","esri/core/libs/quickselect/quickselect":"FT4I","esri/layers/graphics/sources/support/CSVSourceWorker":"P0Wv","esri/core/libs/rbush/rbush":"jEml","esri/layers/graphics/sources/csv/csv":"rAMp"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{AcGV:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("nRUF"),i("+PwV")],void 0===(r=function(e,t,i,n,r){Object.defineProperty(t,"__esModule",{value:!0});var a={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function o(e){e||(e=r.getLocale());var t=e in a;if(!t){var i=e.split("-");i.length>1&&i[0]in a&&(e=i[0],t=!0),t||(e="en")}var n=a[e],o=n[0],l=n[1],s=n[2];return{decimal:o,group:l,pattern:void 0===s?"#,##0.###":s}}t.getCustoms=o,t.format=function(e,t){var r=o((t=i.__assign({},t)).locale);t.customs=r;var a=t.pattern||r.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,i){var r=(i=i||{}).customs.group,a=i.customs.decimal,o=t.split(";"),s=o[0];if(-1!==(t=o[e<0?1:0]||"-"+s).indexOf("%"))e*=100;else if(-1!==t.indexOf("‰"))e*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}var u=l,c=s.match(u);if(!c)throw new Error("unable to find a number expression in pattern: "+t);return!1===i.fractional&&(i.places=0),t.replace(u,function(e,t,i){!0===(i=i||{}).places&&(i.places=0),i.places===1/0&&(i.places=6);var r=t.split("."),a="string"==typeof i.places&&i.places.indexOf(","),o=i.places;a?o=i.places.substring(a+1):o>=0||(o=(r[1]||[]).length),i.round<0||(e=Number(e.toFixed(Number(o))));var l=String(Math.abs(e)).split("."),s=l[1]||"";if(r[1]||i.places){a&&(i.places=i.places.substring(0,a));var u=void 0!==i.places?i.places:r[1]&&r[1].lastIndexOf("0")+1;u>s.length&&(l[1]=n.padEnd(s,Number(u),"0")),o<s.length&&(l[1]=s.substr(0,Number(o)))}else l[1]&&l.pop();var c=r[0].replace(",",""),d=c.indexOf("0");-1!==d&&((d=c.length-d)>l[0].length&&(l[0]=n.padStart(l[0],d,"0")),-1===c.indexOf("#")&&(l[0]=l[0].substr(l[0].length-d)));var f,h,p=r[0].lastIndexOf(",");if(-1!==p){f=r[0].length-p-1;var m=r[0].substr(0,p);-1!==(p=m.lastIndexOf(","))&&(h=m.length-p-1)}for(var g=[],v=l[0];v;){var x=v.length-f;g.push(x>0?v.substr(x):v),v=x>0?v.slice(0,x):"",h&&(f=h,h=void 0)}return l[0]=g.reverse().join(i.group||","),l.join(i.decimal||".")}(e,c[0],{decimal:a,group:r,places:i.places,round:i.round}))}(e,a,t)};var l=/[#0,]*[#0](?:\.0*#*)?/;function s(e){var t=o((e=e||{}).locale),i=e.pattern||t.pattern,r=t.group,a=t.decimal,s=1;if(-1!==i.indexOf("%"))s/=100;else if(-1!==i.indexOf("‰"))s/=1e3;else if(-1!==i.indexOf("¤"))throw new Error("currency notation not supported");var d=i.split(";");return 1===d.length&&d.push("-"+d[0]),{regexp:c(d,(function(t){return(t="(?:"+n.escapeRegExpString(t,".")+")").replace(l,(function(t){var i={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:a,exponent:!1},n=t.split("."),o=e.places;1===n.length&&1!==s&&(n[1]="###"),1===n.length||0===o?i.fractional=!1:(void 0===o&&(o=e.pattern?n[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(i.fractional=!0),!e.places&&o<n[1].length&&(o+=","+n[1].length),i.places=o);var l=n[0].split(",");return l.length>1&&(i.groupSize=l.pop().length,l.length>1&&(i.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var t=u(e),i=c(e.fractional,(function(t){var i="";return t&&0!==e.places&&(i="\\"+e.decimal,e.places===1/0?i="(?:"+i+"\\d+)?":i+="\\d{"+e.places+"}"),i}),!0),n=t+i;return i&&(n="(?:(?:"+n+")|(?:"+i+"))"),n+c(e.exponent,(function(t){return t?"([eE]"+u({signed:e.eSigned})+")":""}))}(i)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:a,factor:s}}function u(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",c(e.signed,(function(e){return e?"[-+]":""}),!0)+c(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=n.escapeRegExpString(t))?t="\\s":" "===t&&(t="\\s\\xa0");var i=e.groupSize,r=e.groupSize2;if(r){var a="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+i+"})";return i-r>0?"(?:"+a+"|(?:0|[1-9]\\d{0,"+(i-1)+"}))":a}return"(?:0|[1-9]\\d{0,"+(i-1)+"}(?:["+t+"]\\d{"+i+"})*)"}),!0)}t.regexp=function(e){return s(e).regexp},t._parseInfo=s,t.parse=function(e,t){var i=s(t),n=new RegExp("^"+i.regexp+"$").exec(e);if(!n)return NaN;var r=n[1];if(!n[1]){if(!n[2])return NaN;r=n[2],i.factor*=-1}return r=r.replace(new RegExp("["+i.group+"\\s\\xa0]","g"),"").replace(i.decimal,"."),Number(r)*i.factor};var c=function(e,t,i){if(!(e instanceof Array))return t(e);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r]));return d(n.join("|"),i)},d=function(e,t){return"("+(t?"?:":"")+e+")"}}.apply(null,n))||(e.exports=r)},FT4I:function(e,t,i){var n;void 0===(n=function(){"use strict";function e(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function t(e,t){return e<t?-1:e>t?1:0}return function(i,n,r,a,o){!function t(i,n,r,a,o){for(;a>r;){if(a-r>600){var l=a-r+1,s=n-r+1,u=Math.log(l),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(l-c)/l)*(s-l/2<0?-1:1);t(i,n,Math.max(r,Math.floor(n-s*c/l+d)),Math.min(a,Math.floor(n+(l-s)*c/l+d)),o)}var f=i[n],h=r,p=a;for(e(i,r,n),o(i[a],f)>0&&e(i,r,a);h<p;){for(e(i,h,p),h++,p--;o(i[h],f)<0;)h++;for(;o(i[p],f)>0;)p--}0===o(i[r],f)?e(i,r,p):e(i,++p,a),p<=n&&(r=p+1),n<=p&&(a=p-1)}}(i,n,r||0,a||i.length-1,o||t)}}.apply(null,[]))||(e.exports=n)},P0Wv:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("TMur"),i("zp6E"),i("ma1f"),i("H1tY"),i("rg9i"),i("AcGV"),i("qMld"),i("jfWY"),i("wIC5"),i("H9Hv"),i("nrlZ"),i("vtMp"),i("/COu"),i("Jvs9"),i("rfv1"),i("Q2Em"),i("ZooB"),i("rAMp"),i("DaHD"),i("I90O")],void 0===(r=function(e,t,i,n,r,a,o,l,s,u,c,d,f,h,p,m,g,v,x,y,_,b,F){Object.defineProperty(t,"__esModule",{value:!0});var w=b.createDrawingInfo("esriGeometryPoint"),I=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"];var N,M,E,T,Y=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,O=[0,0],S=function(e,t){this.x=e,this.y=t},B=(N=s._parseInfo(),M=new RegExp("^"+N.regexp+"$"),E=new RegExp("["+N.group+"\\s\\xa0]","g"),T=N.factor,function(e){var t=M.exec(e);if(N.factor=T,!t)return NaN;var i=t[1];if(!t[1]){if(!t[2])return NaN;i=t[2],N.factor*=-1}return+(i=i.replace(E,"").replace(N.decimal,"."))*N.factor}),D="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},X=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){var n,r,a,o,l;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,u.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=i.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(a=this._queryEngine.timeExtent,o=a.start,l=a.end,r.layerDefinition.timeInfo.timeExtent=[o,l]),[2,r]}}))}))},e.prototype.applyEdits=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){throw new a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._fetch=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!e)throw new a("csv-source:invalid-source","url not defined");return n=c.urlToObject(e),[4,r(n.path,{query:n.query,responseType:"text",signal:t.signal})];case 1:return[2,i.sent().data]}}))}))},e.prototype._parse=function(e,t){void 0===t&&(t={});var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}},n=_.readRows(e),r=n.next().value;if(!r)throw new a("csv","CSV is empty",{csv:e});if(r=r.trim(),!t.columnDelimiter){var o=_.inferDelimiter(r);if(!o)throw new a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=o}var s=r.split(i.columnDelimiter),u=i.layerDefinition={name:"csv",drawingInfo:w,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var c=this._inferLocationInfo(s);if(!t.longitudeField&&!c.longitudeFieldName||!t.latitudeField&&!c.latitudeFieldName)throw new a("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:t.longitudeField||c.longitudeFieldName,latitudeFieldName:t.latitudeField||c.latitudeFieldName}}var d=this._inferFields(n,i.columnDelimiter,s,i.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,h=0,p=t.fields;h<p.length;h++){var m=p[h];f.set(m.name.toLowerCase(),m)}for(var g=0,v=d;g<v.length;g++){m=v[g];var x=f.get(m.name.toLowerCase());if(x){var y=m.name;l.mixin(m,x),m.name=y}}}if(u.fields=d,u.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)}))||(m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1},u.objectIdField=m.name,u.fields.unshift(m)),this._fieldsIndex=new F(u.fields),u.timeInfo){var b=u.timeInfo;if(b.startTimeField){var I=this._fieldsIndex.get(b.startTimeField);I?(b.startTimeField=I.name,I.type="esriFieldTypeDate"):b.startTimeField=null}if(b.endTimeField){var N=this._fieldsIndex.get(b.endTimeField);N?(b.endTimeField=N.name,N.type="esriFieldTypeDate"):b.endTimeField=null}if(b.trackIdField){var M=this._fieldsIndex.get(b.trackIdField);b.trackIdField=M?M.name:null}b.startTimeField||b.endTimeField||(u.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach((function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===t.csvLongitudeFieldNames.indexOf(r)||i||(i=e)})),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){var r=[],a=_.parseRows(e,i,t),o=[];e:for(;o.length<10;){var l=a.next(),s=l.value;if(l.done)break e;o.push(s)}for(var u=function(e){if(e===n.longitudeFieldName||e===n.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=o.map((function(t){return t[e]})),i=c._inferFieldType(t),a={name:e,type:null,alias:e};switch(i){case"integer":a.type="esriFieldTypeInteger";break;case"double":a.type="esriFieldTypeDouble";break;case"date":a.type="esriFieldTypeDate",a.length=36;break;default:a.type="esriFieldTypeString",a.length=255}r.push(a)}},c=this,d=0,f=i;d<f.length;d++)u(f[d]);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var i=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(i.test(e))n=!0;else{var r=B(e);if(!isNaN(r))return/[.,]/.test(e)||!D(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(o("chrome")&&/\d+\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,a=0;!r&&a<=n.length;)r=!Y.test(n[a]),a++;i=!r}}return i},e.prototype._createQueryEngine=function(e,t){for(var i,r=t.locationInfo,a=r.latitudeFieldName,o=r.longitudeFieldName,l=t.layerDefinition,s=l.objectIdField,u=l.fields,c=l.extent,x=l.timeInfo,b=[],F=[],w=new Set,N=new Set,M=[],E=0,T=u;E<T.length;E++){var Y=T[E],D=Y.name,X=Y.type;"esriFieldTypeDate"===X?w.add(D):I.indexOf(X)>-1&&N.add(D),D!==s&&M.push(D)}var j=0,R=_.readRows(e);R.next();var k=_.parseRows(R,M,t.columnDelimiter);e:for(;;){var q=k.next(),P=q.value;if(q.done)break e;var V=this._parseCoordinateValue(P[a]),C=this._parseCoordinateValue(P[o]);if(null!=C&&null!=V&&!isNaN(V)&&!isNaN(C)){for(var A in P[a]=V,P[o]=C,P)if(A!==a&&A!==o)if(w.has(A)){var L=new Date(P[A]);P[A]=this._isValidDate(L,P[A])?L.getTime():null}else if(N.has(A)){var z=B(P[A]);isNaN(z)?P[A]=null:P[A]=z}P[s]=j,j++,b.push(new S(C,V)),F.push(P)}}if(!h.equals({wkid:4326},c.spatialReference))if(h.isWebMercator(c.spatialReference))for(var G=0,J=b;G<J.length;G++){var Q=J[G];i=p.lngLatToXY(Q.x,Q.y,O),Q.x=i[0],Q.y=i[1]}else b=d.projectMany(f.jsonAdapter,b,n.SpatialReference.WGS84,c.spatialReference,null);for(var W=new v.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),$=new y.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:x,objectIdField:s,spatialReference:c.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:W}),Z=[],H=0;H<b.length;H++){var U=b[H],K=U.x,ee=U.y,te=F[H];te[s]=H+1,Z.push(new m.default(new g.default([],[K,ee]),te,null,te[s]))}return W.addMany(Z),$},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=B(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,x.checkProjectionSupport(h.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new a("csv-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=X}.apply(null,n))||(e.exports=r)},jEml:function(e,t,i){var n,r;n=[i("FT4I")],void 0===(r=function(e){"use strict";function t(e,i){if(!(this instanceof t))return new t(e,i);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(e,t,i){if(!i)return t.indexOf(e);for(var n=0;n<t.length;n++)if(i(e,t[n]))return n;return-1}function n(e,t){r(e,0,e.children.length,t,e)}function r(e,t,i,n,r){r||(r=f(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,l=t;l<i;l++)o=e.children[l],a(r,e.leaf?n(o):o);return r}function a(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function o(e,t){return e.minX-t.minX}function l(e,t){return e.minY-t.minY}function s(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function u(e){return e.maxX-e.minX+(e.maxY-e.minY)}function c(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function d(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function f(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function h(t,i,n,r,a){for(var o,l=[i,n];l.length;)(n=l.pop())-(i=l.pop())<=r||(o=i+Math.ceil((n-i)/r/2)*r,e(t,o,i,n,a),l.push(i,o,o,n))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],n=this.toBBox;if(!d(e,t))return i;for(var r,a,o,l,s=[];t;){for(r=0,a=t.children.length;r<a;r++)o=t.children[r],d(e,l=t.leaf?n(o):o)&&(t.leaf?i.push(o):c(e,l)?this._all(o,i):s.push(o));t=s.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!d(e,t))return!1;for(var n,r,a,o,l=[];t;){for(n=0,r=t.children.length;n<r;n++)if(a=t.children[n],d(e,o=t.leaf?i(a):a)){if(t.leaf||c(e,o))return!0;l.push(a)}t=l.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var n=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=f([]),this},remove:function(e,t){if(!e)return this;for(var n,r,a,o,l=this.data,s=this.toBBox(e),u=[],d=[];l||u.length;){if(l||(l=u.pop(),r=u[u.length-1],n=d.pop(),o=!0),l.leaf&&-1!==(a=i(e,l.children,t)))return l.children.splice(a,1),u.push(l),this._condense(u),this;o||l.leaf||!c(l,s)?r?(n++,l=r.children[n],o=!1):l=null:(u.push(l),d.push(n),n=0,r=l,l=l.children[0])}return this},toBBox:function(e){return e},compareMinX:o,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,r){var a,o=i-t+1,l=this._maxEntries;if(o<=l)return n(a=f(e.slice(t,i+1)),this.toBBox),a;r||(r=Math.ceil(Math.log(o)/Math.log(l)),l=Math.ceil(o/Math.pow(l,r-1))),(a=f([])).leaf=!1,a.height=r;var s,u,c,d,p=Math.ceil(o/l),m=p*Math.ceil(Math.sqrt(l));for(h(e,t,i,m,this.compareMinX),s=t;s<=i;s+=m)for(h(e,s,c=Math.min(s+m-1,i),p,this.compareMinY),u=s;u<=c;u+=p)d=Math.min(u+p-1,c),a.children.push(this._build(e,u,d,r-1));return n(a,this.toBBox),a},_chooseSubtree:function(e,t,i,n){for(var r,a,o,l,u,c,d,f,h,p;n.push(t),!t.leaf&&n.length-1!==i;){for(d=f=1/0,r=0,a=t.children.length;r<a;r++)u=s(o=t.children[r]),h=e,p=o,(c=(Math.max(p.maxX,h.maxX)-Math.min(p.minX,h.minX))*(Math.max(p.maxY,h.maxY)-Math.min(p.minY,h.minY))-u)<f?(f=c,d=u<d?u:d,l=o):c===f&&u<d&&(d=u,l=o);t=l||t.children[0]}return t},_insert:function(e,t,i){var n=this.toBBox,r=i?e:n(e),o=[],l=this._chooseSubtree(r,this.data,t,o);for(l.children.push(e),a(l,r);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(r,o,t)},_split:function(e,t){var i=e[t],r=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,r);var o=this._chooseSplitIndex(i,a,r),l=f(i.children.splice(o,i.children.length-o));l.height=i.height,l.leaf=i.leaf,n(i,this.toBBox),n(l,this.toBBox),t?e[t-1].children.push(l):this._splitRoot(i,l)},_splitRoot:function(e,t){this.data=f([e,t]),this.data.height=e.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var n,a,o,l,u,c,d,f,h,p,m,g,v,x;for(c=d=1/0,n=t;n<=i-t;n++)h=a=r(e,0,n,this.toBBox),p=o=r(e,n,i,this.toBBox),void 0,void 0,void 0,void 0,m=Math.max(h.minX,p.minX),g=Math.max(h.minY,p.minY),v=Math.min(h.maxX,p.maxX),x=Math.min(h.maxY,p.maxY),l=Math.max(0,v-m)*Math.max(0,x-g),u=s(a)+s(o),l<c?(c=l,f=n,d=u<d?u:d):l===c&&u<d&&(d=u,f=n);return f},_chooseSplitAxis:function(e,t,i){var n=e.leaf?this.compareMinX:o,r=e.leaf?this.compareMinY:l;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,r)&&e.children.sort(n)},_allDistMargin:function(e,t,i,n){e.children.sort(n);var o,l,s=this.toBBox,c=r(e,0,t,s),d=r(e,i-t,i,s),f=u(c)+u(d);for(o=t;o<i-t;o++)l=e.children[o],a(c,e.leaf?s(l):l),f+=u(c);for(o=i-t-1;o>=t;o--)l=e.children[o],a(d,e.leaf?s(l):l),f+=u(d);return f},_adjustParentBBoxes:function(e,t,i){for(var n=i;n>=0;n--)a(t[n],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)0===e[i].children.length?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():n(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}.apply(null,n))||(e.exports=r)},rAMp:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht")],void 0===(r=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=/^\s*"([\S\s]*)"\s*$/,r=/""/g,a=[","," ",";","|","\t"];function o(e,t){for(var i={},n=e.length,r=0;r<n;r++)i[e[r]]=t[r];return i}function l(e,t,n){var r,a,o;return i.__generator(this,(function(i){switch(i.label){case 0:r=0,i.label=1;case 1:return r<=e.length?(a=e.indexOf(t,r),o=e.substring(r,a>-1?a:void 0),r+=o.length+1,n&&!o.trim()?[3,3]:[4,o]):[3,4];case 2:i.sent(),i.label=3;case 3:return[3,1];case 4:return[2]}}))}function s(e,t){return l(e,t,!1)}function u(e){var t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}t.readRows=function(e){return l(e,"\n",!0)},t.readRowParts=s,t.inferDelimiter=function(e){for(var t=e.trim(),i=0,n="",r=0,o=a;r<o.length;r++){var l=o[r],s=t.split(l).length;s>i&&(i=s,n=l)}return""===n?null:n},t.parseRows=function(e,t,a){var l,c,d,f,h,p,m,g,v,x;return i.__generator(this,(function(i){switch(i.label){case 0:l="",c="",d=0,f=[],i.label=1;case 1:if(h=e.next(),p=h.value,h.done)return[2];for(m=s(p,a);g=m.next(),v=g.value,!g.done;)if(l+=c+v,c="",(d+=u(v))%2==0){if(d>0){if(!(x=n.exec(l)))return f=[],l="",d=0,[3,1];f.push(x[1].replace(r,'"'))}else f.push(l);l="",d=0}else c=a;return 0!==d?[3,3]:[4,o(t,f)];case 2:return i.sent(),f=[],[3,4];case 3:c="\n",i.label=4;case 4:return[3,1];case 5:return[2]}}))}}.apply(null,n))||(e.exports=r)}}]);