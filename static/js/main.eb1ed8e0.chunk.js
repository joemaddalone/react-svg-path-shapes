(this["webpackJsonpreact-svg-path-shapes-example"]=this["webpackJsonpreact-svg-path-shapes-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),l=n(2),i=n.n(l),h=n(1);h.a.macro("square",(function(e,t,n){return t&&n&&this.M(t-e/2,n-e/2),this.right(e).down(e).left(e).up(e),this})),h.a.macro("circle",(function(e,t,n){t&&n&&this.M(t,n);const a=e/2;return this.m(-a,0).a(a,a,0,1,0,2*a,0).a(a,a,0,1,0,-2*a,0).close(),this})),h.a.macro("triangle",(function(e,t,n,a){return this.M(n,a).l(-e/2,t).right(e).L(n,a),this})),h.a.macro("grid",(function(e,t,n,a,r,l,i=!0){const h=i?1:0,c=n/r,s=a/l;return this.M(e,t),r&&Array.from({length:r+h}).map((n,r)=>this.M(e+r*c,t).down(a)),l&&Array.from({length:l+h}).map((a,r)=>this.M(e,t+r*s,t).right(n)),this})),h.a.macro("polyline",(function(e,t,n,a){this.moveTo(e,t);const r=parseInt(n/a.length);return a.forEach((e,t,n)=>{if(0!==t){const a=n[t-1];this.l(r,a-e)}else this.l(r,-e)}),this})),h.a.macro("stepline",(function(e,t,n,a){this.moveTo(e,t);const r=parseInt(n/a.length);return a.forEach((e,t,n)=>{const a=0===t?0:n[t-1];this[a>e?"down":"up"](Math.abs(a-e)),t!==n.length-1&&this.right(r)}),this})),h.a.macro("polygon",(function(e,t,...n){return this.moveTo(e,t),n.forEach(e=>{this.L.apply(null,e)}),this.close(),this}));var c=h.a;const s=[-10,-45,10,0,35,10,-9,25,15,75];var o=()=>r.a.createElement("div",null,r.a.createElement("h2",null,".grid()"),r.a.createElement("svg",{width:250,height:250},r.a.createElement("path",{d:(new c).grid(1,1,248,248,10,10).toString()})),r.a.createElement("h2",null,".square()"),r.a.createElement("svg",{width:120,height:120},r.a.createElement("path",{d:(new c).square(100,50,50).toString()}),r.a.createElement("path",{d:(new c).square(10,50,50).toString(),style:{fill:"rebeccapurple"}})),r.a.createElement("h2",null,".circle()"),r.a.createElement("svg",{width:110,height:120},r.a.createElement("path",{d:(new c).circle(95,50,50).toString()}),r.a.createElement("path",{d:(new c).circle(10,50,50).toString(),style:{fill:"rebeccapurple"}})),r.a.createElement("h2",null,".polyline()"),r.a.createElement("svg",{width:260,height:160},r.a.createElement("path",{d:(new c).polyline(10,100,240,s).toString()})),r.a.createElement("h2",null,".stepline()"),r.a.createElement("svg",{width:800,height:160},r.a.createElement("path",{d:(new c).stepline(10,100,250,s).toString()})),r.a.createElement("h2",null,".polygon()"),r.a.createElement("svg",{width:800,height:160},r.a.createElement("path",{d:(new c).polygon(10,60,[40,0],[70,60],[40,120]).toString()})),r.a.createElement("h2",null,"combining shapes"),r.a.createElement("svg",{width:305,height:155},r.a.createElement("path",{d:(new c).grid(0,0,300,150,10,10).toString(),style:{stroke:"#ccc"}}),r.a.createElement("path",{d:(new c).polyline(0,100,300,s).toString(),style:{stroke:"green",strokeWidth:2}})));i.a.render(r.a.createElement(o,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)},4:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.eb1ed8e0.chunk.js.map