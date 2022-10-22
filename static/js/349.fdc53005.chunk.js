"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[349],{608:function(n,t,r){var e=r(444),a=r(407),c=(0,e.ZP)("div")(a.Dh,a.bK,a.cp,a.Cg,a.GQ);t.Z=c},672:function(n,t,r){r.d(t,{Z:function(){return l}});var e,a,c=r(739),u=r(168),i=r(444),o=r(731),s=i.ZP.li(e||(e=(0,u.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),f=(0,i.ZP)(o.rU)(a||(a=(0,u.Z)(["\n  color: #5674fe;\n  &:hover {\n    color: orange;\n  }\n"]))),p=r(608),v=r(184);function l(n){var t=n.movies,r=(0,c.TH)();return(0,v.jsx)(p.Z,{as:"ul",p:"20px 0",children:t.map((function(n){var t=n.id,e=n.title,a=n.name;return(0,v.jsx)(s,{children:(0,v.jsx)(f,{to:"/movies/".concat(t),state:{from:r},children:e||a})},t)}))})}},349:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a=r(861),c=r(885),u=r(757),i=r.n(u),o=r(791),s=r(939),f=r(672),p=r(403),v=r(168),l=r(444).ZP.p(e||(e=(0,v.Z)(["\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #f5576a;\n"]))),d=r(184);function h(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],u=(0,o.useState)(!1),v=(0,c.Z)(u,2),h=v[0],Z=v[1],x=(0,o.useState)(null),m=(0,c.Z)(x,2),w=m[0],g=m[1];if((0,o.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),g(null),n.next=5,(0,s.Df)();case 5:t=n.sent,r=t.results,e(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),g(n.t0);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),null!==r)return(0,d.jsxs)("main",{children:[(0,d.jsx)("h2",{children:"Trending today"}),w&&(0,d.jsx)(l,{children:"Something went wrong. Please try again later."}),(0,d.jsx)(f.Z,{movies:r}),h&&(0,d.jsx)(p.Z,{})]})}},939:function(n,t,r){r.d(t,{Df:function(){return s},Pg:function(){return f},aZ:function(){return l},d_:function(){return p},kX:function(){return v}});var e=r(861),a=r(757),c=r.n(a),u=r(44),i="https://api.themoviedb.org/3/",o="7650e92ad54b6a6b7b048469a6b245ea",s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},403:function(n,t,r){r.d(t,{Z:function(){return o}});var e,a=r(402),c=r(168),u=r(444).ZP.div(e||(e=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),i=r(184);function o(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.s5,{strokeColor:"#04c6f7",strokeWidth:"4",animationDuration:"2.5",width:"100",visible:!0})})}}}]);
//# sourceMappingURL=349.fdc53005.chunk.js.map