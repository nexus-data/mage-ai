"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9265],{66909:function(t,e,n){n.d(e,{Eh:function(){return c},t0:function(){return s}});var r=n(38626),i=n(2842),o=n(17679),a=n(61896),l=n(47041),u=n(70515),c=(u.iI,o.O$+3*u.iI+a.dN),s=r.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})([""," overflow:auto;position:absolute;width:100%;"," ",""],l.w5,(function(t){return"\n    height: calc(100vh - ".concat(i.uX,"px - ").concat(t.heightOffset,"px);\n  ")}),(function(t){return t.overflowHidden&&"\n    overflow: hidden;\n  "}));r.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*u.iI,(function(t){return t.noPadding&&"\n    padding: 0;\n  "}))},52729:function(t,e,n){n.d(e,{Z:function(){return H}});var r=n(26304),i=n(21831),o=n(82394),a=n(82684),l=n(26226),u=n(84969),c=n(90948),s=n(65743),d=n(29989),f=n(38626),h=n(61655),p=n(16853),m=n(65376),g=n(48072),v=n(98677),x=n(84181),y=n(55485),b=n(4190),j=n(30160),w=n(94035),Z=n(70987),S=n(79633),O=n(89370),k=n(95363),L=n(61896),T=n(70515),I=n(88543),M=n(6568),D=function(t){return t.slice(0,10)},P=function(t,e){var n=t.toISOString().slice(0,10),r=e.toISOString().slice(0,10);return"".concat(n,":").concat(r)},A=n(79221),C=n(98684),E=n(28598),R=["height","loading","selected","width","xAxisLabel","yAxisLabel"];function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F={bottom:T.iI,left:3*T.iI,right:0,top:1*T.iI},N=(0,h.Z)((function(t){var e=t.columnType,n=t.data,r=void 0===n?[]:n,o=t.getBarColor,l=t.getXValue,h=t.getYValue,y=t.height,b=t.hideTooltip,w=t.large,R=t.margin,Y=void 0===R?{}:R,N=t.muted,H=t.noPadding,V=t.numberOfXTicks,z=t.renderTooltipContent,B=t.selected,U=t.showAxisLabels,X=t.showTooltip,J=t.showYAxisLabels,K=t.showZeroes,W=t.sortData,Q=t.tooltipData,G=t.tooltipLeft,$=t.tooltipOpen,q=t.tooltipTop,tt=t.width,et=t.xLabelFormat,nt=t.yLabelFormat,rt=w?L.J5:L.VK,it=(0,a.useCallback)((function(t){return l?l(t):t[0]}),[l]),ot=(0,a.useCallback)((function(t){return h?h(t):t[1]}),[h]),at=(0,a.useContext)(f.ThemeContext),lt=e===O.RL.DATETIME,ut=_(_({},F),Y);U&&(ut=_(_({},ut),{},{left:ut.left+T.iI}));var ct=W?W(r):r.sort((function(t,e){return e[1]-t[1]})),st=lt?r.sort((function(t,e){return new Date(t[0])-new Date(e[0])})).filter((function(t){return!!t[0]})):ct.slice(0,60),dt=tt-(ut.left+ut.right),ft=y-(ut.bottom+ut.top),ht=lt?function(t,e){var n,r=t.map((function(t){return new Date(t[0])})).sort((function(t,e){return t-e}));return(0,M.Z)({domain:(n=r,[(0,I.Z)(n[0]),(0,I.Z)(n[n.length-1])]),nice:!0,range:[0,e]})}(st,dt):null,pt=function(t,e){if(null===e)return{};var n=e.ticks().map((function(t){return t.toISOString()})),r={},i=0,o=1;return t.forEach((function(t){var e=new Date(t[0]),a=t[1],l=n[i],u=n[o];if(l&&u){var c=new Date(l),s=new Date(u),d=P(c,s);if(e>=c&&e<s)r[d]=(r[d]||0)+a;else for(;o<n.length||!r[d];)if(i+=1,o+=1,c=new Date(n[i]),s=new Date(n[o]),d=P(c,s),e>=c&&e<s)return void(r[d]=(r[d]||0)+a)}})),n.reduce((function(t,e,n,r){if(0===n)return t;var i=D(e),o=D(r[n-1]);return t.push("".concat(o,":").concat(i)),t}),[]).forEach((function(t){r[t]=r[t]||0})),r}(st,ht);st=ht?Object.entries(pt).sort((function(t,e){return new Date(D(t[0]))-new Date(D(e[0]))})):st;var mt=ht?Math.max.apply(Math,(0,i.Z)(Object.values(pt))):0,gt=st.reduce((function(t,e){return(0!==ot(e)||lt||K)&&t.push(it(e)),t}),[]),vt=gt.length,xt=function(t,e,n){return n?.05:t>=30&&e<300?.5:t>=15?.3:t>=5?.1:t>2?.05:2===t?.025:0}(vt,tt,lt),yt=(0,v.Z)({domain:gt,paddingInner:H?null:xt,range:[0,dt],round:!1}),bt=(0,x.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(st.map(ot)))],range:[ft,0],round:!0}),jt=(0,C.K)(at),wt={active:((null===at||void 0===at?void 0:at.content)||Z.Z.content).active,default:jt[0],muted:((null===at||void 0===at?void 0:at.monotone)||Z.Z.monotone).gray,selected:((null===at||void 0===at?void 0:at.elevation)||Z.Z.elevation).visualizationAccent},Zt=wt.default;N?Zt=wt.muted:B&&(Zt=wt.selected);var St=vt?lt?mt:Math.max.apply(Math,(0,i.Z)(st.map((function(t){return ot(t)})))):0,Ot=Math.floor(St/6),kt=[0],Lt=0;if(St>6)for(;Lt<St;)kt.push(Lt+Ot),Lt+=Ot;else for(;Lt<=St;)kt.push(Lt+1),Lt+=1;St>9999?ut=_(_({},ut),{},{left:w?8*T.iI:4.1*T.iI}):St>999&&(ut=_(_({},ut),{},{left:w?5*T.iI:3.6*T.iI}));var Tt=lt?2.25:0,It=vt<10||e===O.RL.NUMBER||e===O.RL.NUMBER_WITH_DECIMALS||lt||J,Mt=(0,a.useCallback)((function(t){var e=(0,g.Z)(t)||{x:0,y:0},n=e.x,r=e.y,i=(n-(U?ut.left:0))/dt,o=Math.floor(vt*i),a=st[o];"undefined"===typeof a&&(a=st[0]);var l=it(a);l=l.length>15?"".concat(l.slice(0,21)):l;var u=z?z(a):"".concat(l," (").concat(ot(a),")");X({tooltipData:u,tooltipLeft:n-ut.left,tooltipTop:r+ut.top})}),[st,vt,it,ot,ut.left,ut.top,z,U,X,tt]);return tt<10||!r.length?null:(0,E.jsxs)("div",{children:[(0,E.jsxs)("svg",{height:y+ut.bottom*(lt?7.5:3),width:tt,children:[(0,E.jsx)(d.Z,{left:U?ut.left:0,top:ut.top+Tt,children:st.reduce((function(t,e){var n=it(e),r=ot(e);if(0!==r){var i,a=yt.bandwidth(),l=ft-(null!==(i=bt(r))&&void 0!==i?i:0),u=yt(n),c=ft-l;t.push((0,E.jsx)(s.Z,{fill:o?o(e):Zt,height:l,onMouseLeave:function(){return b()},onMouseMove:Mt,onTouchMove:Mt,onTouchStart:Mt,width:a,x:u,y:c},"bar-".concat(n)))}return t}),[])}),U&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u.Z,{left:ut.left,scale:bt,stroke:wt.muted,tickFormat:function(t){return nt?nt(t):(0,A.P5)(t)},tickLabelProps:function(){return{fill:wt.active,fontFamily:k.ry,fontSize:rt,textAnchor:"end",transform:"translate(-2,2.5)"}},tickStroke:wt.muted,tickValues:kt,top:ut.top+Tt}),(0,E.jsx)(c.Z,{left:ut.left,numTicks:lt?void 0:V||6,orientation:"top",scale:ht||yt,stroke:wt.muted,tickFormat:function(t){return et?et(String(t)):lt?t.toISOString().slice(0,10):String(t)},tickLabelProps:function(t){return{fill:It?wt.active:"transparent",fontFamily:k.ry,fontSize:rt,textAnchor:"middle",transform:lt?"rotate(-90,".concat(ht(t),",0) translate(-33,10)"):"translate(0, ".concat(3*ut.bottom,")")}},tickLineProps:{transform:"translate(0,".concat(T.iI,")")},tickStroke:It?wt.muted:"transparent",top:ft+ut.top+Tt})]})]}),$&&Q&&(0,E.jsx)(p.Z,{left:G,style:m.j,top:q,children:(0,E.jsx)(j.ZP,{color:S.E5,small:!0,children:Q})})]})}));var H=function(t){var e=t.height,n=t.loading,i=t.selected,o=t.width,a=t.xAxisLabel,u=t.yAxisLabel,c=(0,r.Z)(t,R);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{style:{display:"flex",height:e,marginBottom:T.iI,width:"100%"},children:[u&&(0,E.jsx)(y.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,E.jsx)(w.Z,{children:(0,E.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:u})})}),(0,E.jsxs)("div",{style:{height:e,width:u?0===o?o:o-28:o},children:[n&&(0,E.jsx)(b.Z,{}),!n&&(0,E.jsx)(l.Z,{children:function(t){var e=t.height,n=t.width;return(0,E.jsx)(N,_(_({},c),{},{height:e,selected:i,width:n}))}})]})]}),a&&(0,E.jsx)("div",{style:{paddingLeft:u?36:0,paddingTop:4},children:(0,E.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:a})})]})}},87862:function(t,e,n){n.d(e,{Z:function(){return T}});var r=n(26304),i=n(82394),o=n(75582),a=n(26226),l=n(28940),u=n(82684),c=n(29989),s=n(38626),d=n(11684),f=n(24903),h=n(30160),p=n(44897),m=n(95363),g=n(61896),v=n(70515),x=n(98684),y=n(28598),b=["height","width","xAxisLabel"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={bottom:0,left:0,right:0,top:0},S=function(t){var e=t.endAngle;return{endAngle:e>Math.PI?2*Math.PI:0,opacity:0,startAngle:e>Math.PI?2*Math.PI:0}},O=function(t){var e=t.startAngle;return{endAngle:t.endAngle,opacity:1,startAngle:e}};function k(t){var e=t.animate,n=t.arcs,r=t.path,i=t.getKey,a=t.getColor,l=t.onClickDatum,u=t.textColor;return(0,d.useTransition)(n,{enter:O,from:e?S:O,keys:i,leave:e?S:O,update:O})((function(t,e,n){var c=n.key,s=r.centroid(e),f=(0,o.Z)(s,2),h=f[0],p=f[1],v=e.endAngle-e.startAngle>=.1;return(0,y.jsxs)("g",{children:[(0,y.jsx)(d.animated.path,{d:(0,d.to)([t.startAngle,t.endAngle],(function(t,n){return r(w(w({},e),{},{endAngle:n,startAngle:t}))})),fill:a(e),onClick:function(){return l(e)},onTouchStart:function(){return l(e)}}),v&&(0,y.jsx)(d.animated.g,{style:{opacity:t.opacity},children:(0,y.jsx)("text",{dy:".33em",fill:u,fontFamily:m.ry,fontSize:g.J5,pointerEvents:"none",textAnchor:"middle",x:h,y:p,children:i(e)})})]},c)}))}function L(t){var e=t.animate,n=void 0===e||e,r=t.data,i=t.getX,o=t.getY,a=t.height,d=t.margin,h=void 0===d?Z:d,m=t.textColor,g=t.width,b=(0,u.useState)(null),j=b[0],S=b[1],O=(0,u.useContext)(s.ThemeContext),L=m||(null===O||void 0===O?void 0:O.content.active)||p.Z.content.active;if(g<10)return null;var T=(0,f.Z)({domain:r.map((function(t){return i(t)})),range:(0,x.K)(O)}),I=g-h.left-h.right,M=a-h.top-h.bottom,D=Math.min(I,M)/2,P=M/2,A=I/2,C=Math.min(I/4,12*v.iI);return(0,y.jsx)("svg",{height:a,width:g,children:(0,y.jsx)(c.Z,{left:A+h.left,top:P+h.top,children:(0,y.jsx)(l.Z,{cornerRadius:v.iI/2,data:j?r.filter((function(t){return JSON.stringify(t)===JSON.stringify(j)})):r,innerRadius:Math.max(D-C,12.25),outerRadius:D,padAngle:.005,pieValue:o,children:function(t){return(0,y.jsx)(k,w(w({},t),{},{animate:n,getColor:function(t){var e=t.data;return T(i(e))},getKey:function(t){var e=t.data;return i(e)},onClickDatum:function(t){var e=t.data;return n&&S(j&&JSON.stringify(j)===JSON.stringify(e)?null:e)},textColor:L}))}})})})}function T(t){var e=t.height,n=t.width,i=t.xAxisLabel,o=(0,r.Z)(t,b),l={};return"undefined"!==typeof e&&(l.height=e),"undefined"!==typeof n&&(l.width=n),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:l,children:(0,y.jsx)(a.Z,{children:function(t){var e=t.width,n=t.height;return(0,y.jsx)(L,w(w({},o),{},{height:n,width:e}))}})}),i&&(0,y.jsx)("div",{style:{paddingTop:4},children:(0,y.jsx)(h.ZP,{center:!0,muted:!0,small:!0,children:i})})]})}},98684:function(t,e,n){n.d(e,{K:function(){return i}});var r=n(70987),i=function(t){var e=t||r.Z,n=e.brand,i=n.earth200,o=n.earth300,a=n.earth400,l=n.energy200,u=n.energy300,c=n.energy400,s=n.fire200,d=n.fire300,f=n.fire400,h=n.water200,p=n.water300,m=n.water400,g=n.wind200,v=n.wind300,x=n.wind400,y=e.chart;return[y.backgroundPrimary,y.backgroundSecondary,y.backgroundTertiary].concat([x,m,f,c,a,v,p,d,u,o,g,h,s,l,i])}},94035:function(t,e,n){var r=n(38626).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},79221:function(t,e,n){n.d(e,{P5:function(){return i},Vs:function(){return o}});n(31098);var r=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function i(t){return"number"!==typeof t?t:t>=1e4?r.format(t):t.toString()}function o(t,e,n){var r,i;if("undefined"===typeof t||"undefined"===typeof e)return 0;var o=null===t||void 0===t||null===(r=t(e,n))||void 0===r||null===(i=r.props)||void 0===i?void 0:i.children;return(Array.isArray(o)?o:[o]).join("").length}},17679:function(t,e,n){n.d(e,{O$:function(){return ot},Fk:function(){return at}});var r=n(75582),i=n(12691),o=n.n(i),a=n(26304),l=n(21831),u=n(82394),c=n(82684),s=n(26226),d=n(84969),f=n(90948),h=n(65743),p=n(28108),m=n(79487),g=n(29989),v=n(38626),x=n(61655),y=n(16853),b=n(65376),j=n(48072),w=n(24903),Z=n(84181),S=n(98677),O=n(30160),k=n(70987),L=n(79633),T=n(61896),I=n(70515),M=n(95363),D=n(28598),P=["height","width"];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E={bottom:5*I.iI,left:3*I.iI,right:20*I.iI,top:0},R=function(t){return t.x},Y=function(t){return t.y},_=(0,x.Z)((function(t){var e=t.data,n=t.height,r=t.hideTooltip,i=t.large,o=t.margin,a=void 0===o?{}:o,u=t.renderTooltipContent,s=t.showTooltip,x=t.tooltipData,I=t.tooltipLeft,P=t.tooltipOpen,A=t.tooltipTop,_=t.width,F=t.xAxisLabel,N=t.xNumTicks,H=t.yLabelFormat,V=t.ySerialize,z=H;z||(z=function(t){return t.length>20?"".concat(t.substring(0,20),"..."):t});var B=i?T.iD:T.J5,U=(0,c.useContext)(v.ThemeContext),X=C(C({},E),a),J=e.slice(Math.max(0,e.length-50)),K=Object.keys(J[0]||[]).filter((function(t){return"x"===t})),W=(0,w.Z)({domain:K,range:[L.hM]}),Q=(0,Z.Z)({domain:[0,Math.max.apply(Math,(0,l.Z)(J.map(R)))],nice:!0}),G=(0,S.Z)({domain:J.map(Y),padding:.35}),$={active:(null===U||void 0===U?void 0:U.content.default)||k.Z.content.default,backgroundPrimary:(null===U||void 0===U?void 0:U.chart.backgroundPrimary)||k.Z.chart.backgroundPrimary,backgroundSecondary:(null===U||void 0===U?void 0:U.chart.backgroundSecondary)||k.Z.chart.backgroundSecondary,muted:(null===U||void 0===U?void 0:U.content.muted)||k.Z.content.muted,primary:(null===U||void 0===U?void 0:U.chart.primary)||k.Z.chart.primary,tooltipBackground:(null===U||void 0===U?void 0:U.background.navigation)||k.Z.background.navigation},q=J.map(V),tt=Math.min(Math.max.apply(Math,(0,l.Z)(q.map((function(t){return String(t).length})))),20);6*tt>2*X.right?X.right+=5.5*tt:6*tt>=X.right&&(X.right+=3.75*tt);var et=_-X.left-X.right,nt=n-X.top-X.bottom;X.left+=7*tt,Q.rangeRound([0,et]),G.rangeRound([nt,0]);var rt=J.map(R).length,it=G(q[rt-1]),ot=(0,c.useCallback)((function(t){var e=(0,j.Z)(t)||{x:0,y:0},n=e.x,r=e.y,i=1-(r-it/2)/(nt-it),o=Math.floor(i*rt),a=J[o];"undefined"===typeof a&&(a=J[o-1]),r>it&&r<nt-it&&s({tooltipData:a,tooltipLeft:n,tooltipTop:r+X.top})}),[J,rt,X.top,s,it,nt]);return _<10?null:(0,D.jsxs)("div",{children:[(0,D.jsxs)("svg",{height:n,width:_,children:[(0,D.jsx)(h.Z,{fill:"transparent",height:n-(X.top+X.bottom),onMouseLeave:function(){return r()},onMouseMove:ot,onTouchMove:ot,onTouchStart:ot,rx:14,width:_-X.left,x:X.left,y:0}),(0,D.jsxs)(g.Z,{left:X.left,top:X.top,children:[(0,D.jsx)(p.Z,{color:W,data:J,height:nt,keys:K,pointerEvents:"none",xScale:Q,y:V,yScale:G,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,D.jsx)("g",{children:(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("rect",{fill:$.backgroundPrimary,height:e.height,pointerEvents:"none",rx:4,width:e.width,x:e.x,y:e.y})})},"barstack-horizontal-".concat(t.index,"-").concat(e.index))}))}))}}),(0,D.jsx)(d.Z,{hideTicks:!0,scale:G,stroke:$.muted,tickFormat:function(t){return z(t)},tickLabelProps:function(){return{fill:$.active,fontFamily:M.ry,fontSize:B,style:{width:"10px"},textAnchor:"end"}},tickStroke:$.muted,tickValues:q,top:2}),(0,D.jsx)(f.Z,{label:F,labelProps:{fill:$.muted,fontFamily:M.ry,fontSize:B,textAnchor:"middle"},numTicks:N,scale:Q,stroke:$.muted,tickLabelProps:function(){return{fill:$.active,fontFamily:M.ry,fontSize:B,textAnchor:"middle"}},tickStroke:$.muted,top:nt})]}),x&&(0,D.jsx)("g",{children:(0,D.jsx)(m.Z,{from:{x:X.left,y:A},pointerEvents:"none",stroke:L.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:et+X.left,y:A}})})]}),P&&x&&(0,D.jsx)(y.Z,{left:I,style:C(C({},b.j),{},{backgroundColor:$.tooltipBackground}),top:A,children:(0,D.jsxs)(O.ZP,{black:!0,small:!0,children:[null===u||void 0===u?void 0:u(x),!u&&R(x).toFixed(4)]})})]})}));var F,N,H,V,z=function(t){var e=t.height,n=t.width,r=(0,a.Z)(t,P);return(0,D.jsx)("div",{style:{height:e,width:"undefined"===typeof n?"100%":n},children:(0,D.jsx)(s.Z,{children:function(t){var e=t.width,n=t.height;return(0,D.jsx)(_,C(C({},r),{},{height:n,width:e}))}})})},B=n(97618),U=n(52729),X=n(48670),J=n(87862),K=n(89370),W=n(86735),Q=(W.Qj,W.tS,W.tS,W.tS,W.tS,W.Qj,W.Qj,W.Qj,W.tS,W.tS,F={},(0,u.Z)(F,K.RL.EMAIL,"domain_distribution"),(0,u.Z)(F,K.RL.TEXT,"word_distribution"),(0,u.Z)(F,K.RL.LIST,"element_distribution"),(0,u.Z)(F,"default","value_counts"),F),G=[].concat((0,l.Z)(K.P_),[K.RL.TEXT,K.RL.EMAIL,K.RL.LIST]),$=(N={},(0,u.Z)(N,K.RL.EMAIL,"Domain distribution"),(0,u.Z)(N,K.RL.TEXT,"Word distribution"),(0,u.Z)(N,K.RL.LIST,"Element distribution"),(0,u.Z)(N,"default","Distribution of values"),n(31353));!function(t){t.RANGE="range"}(H||(H={})),function(t){t.BAR_HORIZONTAL="bar_horizontal",t.LINE_CHART="line_chart",t.HISTOGRAM="histogram"}(V||(V={}));var q=n(48888),tt=n(92083),et=n.n(tt),nt=n(31098);function rt(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r||{},o=i.calculateAnomaly,a=i.feature,u=i.getYValue,c=t.x,s=t.x_metadata,d=s.label,f=s.label_type,h=t.y,p=(null===h||void 0===h?void 0:h.map((function(t){return null===u||void 0===u?void 0:u(t)})))||[],m=Math.max.apply(Math,(0,l.Z)(p)),g=Math.max.apply(Math,(0,l.Z)(p)),v=(0,W.Sm)(p),x=(0,W.IN)(p),y=v/Math.max(1,p.length),b=e[d]||a,j=null===b||void 0===b?void 0:b.columnType,w=K.RL.DATETIME===j,Z=[],S=[],O=c.length,k=c.map((function(t,e){var r,i,a,l,u=t.label,c=t.max,s=t.min,d=h[e];if(H.RANGE===f)if(n||(n=c-s),l=K.RL.NUMBER===j&&n<=O)r=Number(s);else if(r=n/2+s,w){var b="M/D/YYYY",k="M/D/YYYY",L="M/D/YYYY";n<=1?(b=n<=.1?"H:mm:ss.SSS":"H:mm:ss",k="H:mm:ss.SSS",L="H:mm:ss.SSS"):n<=60?(b="H:mm",k="H:mm:ss",L="H:mm:ss"):n<=3600?(b="H:mm",k="M/D/YYYY H:mm",L="H:mm"):n<=86400&&(k="M/D/YYYY H:mm",L="M/D/YYYY H:mm"),r=et().unix(r).format(b),i=et().unix(s).format(k),a=et().unix(c).format(L)}else r=(0,nt.QV)(r);else r=u;var T=e>=1?h[e-1]:null,I=!1;o&&(I=o({x:t,y:d,yPrevious:T,yValues:p,yValuesAverage:y,yValuesMax:m,yValuesMin:g,yValuesStandardDeviation:x,yValuesSum:v}));var M={hideRange:l,isUnusual:I,x:t,xLabel:r,xLabelMax:a,xLabelMin:i,y:d};return I&&(l?S.push(M):Z.push(M)),M}));return{distribution:{data:k,featureUUID:d},rangedWithUnusualDistribution:(0,W.YC)(Z,(function(t){var e=t.y;return u(e)}),{ascending:!1}),unusualDistribution:(0,W.YC)(S,(function(t){var e=t.y;return u(e)}),{ascending:!1})}}var it=n(40489);var ot=12*I.iI;function at(t){var e=t.columnTypes,n=t.columns,i=t.insightsByFeatureUUID,a=t.insightsOverview,l=t.noColumnLinks,u=void 0!==l&&l,c=t.statistics;return function(t,l,s){var d=s.width,f=n[l],h=e[f],p=$.T5[h],m=(i[f]||{}).charts,g=a.time_series,v=n.filter((function(t){return e[t]===K.RL.DATETIME})),x=null===g||void 0===g?void 0:g.map((function(t){return rt(t,{},{feature:{columnType:h,uuid:f}}).distribution})),y={};null===x||void 0===x||x.forEach((function(t,e){var n=t.data;y[v[e]]=(0,D.jsx)(U.Z,{data:n.map((function(t){var e=t.x,n=t.xLabel,r=t.xLabelMax,i=t.xLabelMin;return[n,t.y.count,i,r,e.min,e.max]})),height:ot,large:!0,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var e=(0,r.Z)(t,4),n=e[1],i=e[2],o=e[3];return(0,D.jsxs)("p",{children:["Rows: ",n,(0,D.jsx)("br",{}),"Start: ",i,(0,D.jsx)("br",{}),"End: ",o]})},sortData:function(t){return(0,W.YC)(t,"[4]")}},f)}));var b,j=null===m||void 0===m?void 0:m.find((function(t){var e=t.type;return V.HISTOGRAM===e})),w=(j?rt(j,{},{feature:{columnType:h,uuid:f},getYValue:function(t){return t.value}}):{}).distribution,Z=void 0===w?null:w,S=Q[h]||Q.default,k=null===c||void 0===c?void 0:c["".concat(f,"/").concat(S)],L=Object.entries(k||{}).map((function(t){var e=(0,r.Z)(t,2),n=e[0];return{x:e[1],y:n}})),T=K.RL.TRUE_OR_FALSE===h;if(K.RL.DATETIME===h)b=y[f];else if(Z&&!T)b=(0,D.jsx)(U.Z,{data:Z.data.map((function(t){var e=t.hideRange,n=t.isUnusual,r=t.x;return[t.xLabel,t.y.value,r.min,r.max,n,e]})),height:ot,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var e=(0,r.Z)(t,6),n=e[1],i=e[2],o=e[3],a=e[5];return(0,D.jsxs)("p",{children:[a&&(0,D.jsxs)(D.Fragment,{children:["Rows: ",n,(0,D.jsx)("br",{}),"Value: ",i]}),!a&&(0,D.jsxs)(D.Fragment,{children:["Rows: ",n,(0,D.jsx)("br",{}),"Range: ",i," - ",o]})]})},sortData:function(t){return(0,W.YC)(t,"[2]")},width:d-2*I.iI});else if(G.includes(h)){var M=(0,W.YC)((0,W.YC)(L,"x",{ascending:!1}).slice(0,5),"x");b=(0,D.jsx)(z,{data:M,height:ot,margin:{bottom:0,left:0,right:20,top:0},renderTooltipContent:function(t){var e=t.x,n=t.y;return"".concat(n," appears ").concat((0,nt.x6)(e)," times")},xNumTicks:2,ySerialize:function(t){return t.y}})}else T&&k&&(b=(0,D.jsx)(J.Z,{data:Object.entries(k),getX:function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return"".concat(n," (").concat((0,nt.x6)(i),")")},getY:function(t){return(0,r.Z)(t,2)[1]},height:ot}));return(0,D.jsxs)("div",{style:{padding:I.iI},children:[(0,D.jsxs)("div",{style:{alignItems:"center",display:"flex",marginBottom:I.iI},children:[p&&(0,D.jsx)(B.Z,{title:K.Rp[h],children:(0,D.jsx)(p,{size:2*I.iI})}),(0,D.jsx)("div",{style:{marginLeft:.5*I.iI,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:d-4.5*I.iI},children:u?(0,D.jsx)(O.ZP,{bold:!0,default:!0,title:n[l],children:n[l]}):(0,D.jsx)(o(),{as:(0,it.o_)(q.oE,l),href:"/datasets/[...slug]",passHref:!0,children:(0,D.jsx)(X.Z,{bold:!0,monospace:!0,secondary:!0,small:!0,title:n[l],children:n[l]})})})]}),b,!b&&(0,D.jsx)("div",{style:{height:ot}})]})}}},9134:function(t,e,n){var r=n(82684),i=n(68792),o=n(31811),a=n(38626),l=n(65292),u=n(44897),c=n(95363),s=n(70515),d=n(28598);e.Z=function(t){var e=t.language,n=t.maxWidth,f=t.showLineNumbers,h=t.small,p=t.source,m=t.wrapLines,g=(0,r.useContext)(a.ThemeContext);function v(t){var r=t.value;return(0,d.jsx)(o.Z,{customStyle:{backgroundColor:(g.background||u.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:c.Vp,fontSize:h?12:14,marginBottom:0,marginTop:0,maxWidth:n,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:e,lineNumberStyle:{color:(g.content||u.Z.content).muted},showLineNumbers:f,style:l._4,useInlineStyles:!0,wrapLines:m,children:r})}return(0,d.jsx)(i.D,{components:{code:function(t){var e=t.children;return(0,d.jsx)(v,{value:e})}},children:p})}}}]);