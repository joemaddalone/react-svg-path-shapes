(this["webpackJsonpreact-svg-path-shapes-example"]=this["webpackJsonpreact-svg-path-shapes-example"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);a(4);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),i=a(1);const s=e=>(e-90)*Math.PI/180,o=(e,t,a,n)=>{const r=s(n);return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}};i.a.macro("rect",(function(e,t,a,n){return this.M(a-e/2,n-t/2).right(e).down(t).left(e).up(t).M(a,n),this})),i.a.macro("square",(function(e,t,a){return this.regPolygon(e,4,t,a)})),i.a.macro("circle",(function(e,t,a){return this.ellipse(e,e,t,a)})),i.a.macro("ellipse",(function(e,t,a,n){const r=e/2,c=t/2;return this.M(a+r,n).A(r,c,0,0,1,a-r,n).A(r,c,0,0,1,a+r,n).close().M(a,n),this})),i.a.macro("polyline",(function(e,t=!1){const a=[...e],n=a.shift(),r=t?this.m:this.M,c=t?this.l:this.L;return r.apply(null,n),a.forEach(e=>{c.apply(null,e)}),this})),i.a.macro("polygon",(function(e){return this.polyline(e).close(),this})),i.a.macro("regPolygon",(function(e,t,a,n){const r=360/t,c=Array.from(Array(t).keys()),l=s(90-(180-r)/2),i=e/2,o=c.map(e=>({theta:l+s(r*e),r:i})).map(({r:e,theta:t})=>[a+e*Math.cos(t),n+e*Math.sin(t)]);return this.polygon(o)})),i.a.macro("triangle",(function(e,t,a){const n=Math.sqrt(3),r=[t,a-n/3*e],c=[t-e/2,a+n/6*e],l=[t+e/2,a+n/6*e];return this.polygon([r,c,l]).M(t,a)})),i.a.macro("sector",(function(e,t,a,n,r){const c=o(e,t,a,r),l=o(e,t,a,n),i=r-n<=180?0:1;return this.M(c.x,c.y).A(a,a,0,i,0,l.x,l.y).L(e,t).L(c.x,c.y).M(e,t),this})),i.a.macro("segment",(function(e,t,a,n,r){const c=o(e,t,a,r),l=o(e,t,a,n),i=r-n<=180?0:1;return this.M(c.x,c.y).A(a,a,0,i,0,l.x,l.y).M(e,t),this}));var h=i.a;var m=({children:e,width:t,height:a})=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 ".concat(t," ").concat(a)},e);const p=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".rect(width, height, cx, cy)"),r.a.createElement("p",null,".rect is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).rect(120,60,60,60).toString()}),r.a.createElement("path",{d:(new h).rect(10,5,60,60).toString(),className:"filled"}))),d=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".square(size, cx, cy)"),r.a.createElement("p",null,".square is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).square(100,50,50).toString()}),r.a.createElement("path",{d:(new h).square(10,50,50).toString(),className:"filled"}))),u=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".triangle(size, cx, cy)"),r.a.createElement("p",null,".triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).triangle(95,50,60).toString()}),r.a.createElement("path",{d:(new h).triangle(10,50,60).toString(),className:"filled"}))),g=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".circle(size, cx, cy)"),r.a.createElement("p",null,".circle is drawn from center points (cx & cy). The cursor is then moved to the center points."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).circle(95,50,50).toString()}),r.a.createElement("path",{d:(new h).circle(10,50,50).toString(),className:"filled"}))),E=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".ellipse(width, height, cx, cy)"),r.a.createElement("p",null,".ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:155,height:120},r.a.createElement("path",{d:(new h).ellipse(150,75,80,50).toString()}),r.a.createElement("path",{d:(new h).ellipse(15,7.5,80,50).toString(),className:"filled"}))),w=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".segment(cx, cy, radius, startAngle, endAngle)"),r.a.createElement("p",null,".segment is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).segment(60,60,50,0,270).toString()}),r.a.createElement("path",{d:(new h).circle(10,60,60).toString(),className:"filled"}))),y=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".sector(cx, cy, radius, startAngle, endAngle)"),r.a.createElement("p",null,".sector is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).sector(60,60,50,0,270).toString()}),r.a.createElement("path",{d:(new h).circle(10,60,60).toString(),className:"filled"}))),f=[[10,60],[40,0],[70,60],[40,120]],x=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".polygon([points])"),r.a.createElement("p",null,".polygon accepts an array of [x, y] coordinates and then draws lines connecting those points. The path will start from the first point and end on the first point - closing the shape."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).polygon(f).toString()}))),v=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".regPolygon(size, sides, cx, cy)"),r.a.createElement("p",null,".regPolygon is drawn from center point (cx & cy). The cursor is then moved to the center point."),r.a.createElement(m,{width:140,height:120},r.a.createElement("path",{d:(new h).regPolygon(100,6,50,50).toString()}),r.a.createElement("path",{d:(new h).regPolygon(10,6,50,50).toString(),className:"filled"}))),N=[[10,60],[40,0],[70,60],[40,120]],S=[[10,60],[30,-60],[30,60],[-30,60]],M=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui-header"},".polyline([points], relative = false)"),r.a.createElement("p",null,".polyline accepts an array of [x, y] coordinates and then draws lines connecting those points. The path will start from the first point and end on the last. points can be absolute or relative."),r.a.createElement("h4",{className:"ui-header"},"absolute"),r.a.createElement(m,{width:260,height:160},r.a.createElement("path",{d:(new h).polyline(N).toString()})),r.a.createElement("h4",{className:"ui-header"},"relative"),r.a.createElement(m,{width:260,height:160},r.a.createElement("path",{d:(new h).polyline(S,!0).toString()})));var A=({size:e,cx:t,cy:a,data:n})=>{const c=e=>e/100*360,l=[];let i=0;return n.forEach((n,r)=>{const s=c(i),o=c(i+n.percent),m=new h;m.sector(t,a,e/2,s,o),l.push(m.toComponent({key:r,fill:n.color})),i+=n.percent}),r.a.createElement(m,{width:160,height:160},r.a.createElement("g",null,l))};var F=({size:e,width:t,cx:a,cy:n,data:c})=>{const l=e=>e/100*360,i=[];let s=0;return c.forEach((r,c)=>{const o=l(s),m=l(s+r.percent),p=new h;p.segment(a,n,(e-t)/2,o,m),i.push(p.toComponent({key:c,strokeWidth:t,stroke:r.color,fill:"none"})),s+=r.percent}),r.a.createElement(m,{width:160,height:160},r.a.createElement("g",null,i))};var T=({width:e,height:t,data:a})=>{const n=new h,c=t/2,l=parseInt(e/a.length),i=a.map((e,t)=>{if(0!==t){const n=a[t-1];return[l,n-e]}return[l,e]});return i.unshift([0,c+a.reduce((e,t)=>e+t)/2-10]),n.polyline(i,!0).rect(e,t,e/2,t/2),r.a.createElement(m,{width:e+1,height:t+1},r.a.createElement("path",{d:n.toString(),stroke:"red",fill:"none"}))};var b=()=>{const e=[p,d,u,v,E,g,y,w,M,x],t=[{color:"red",percent:20},{color:"orange",percent:30},{color:"yellow",percent:50}];return r.a.createElement("div",null,r.a.createElement("h2",{className:"ui-header"},"react-svg-path-shapes"),r.a.createElement("a",{href:"https://github.com/joemaddalone/react-svg-path-shapes"},"https://github.com/joemaddalone/react-svg-path-shapes"),r.a.createElement("div",{className:"basic-shapes"},r.a.createElement("h2",{className:"ui-header"},"Basic Shapes"),e.map((e,t)=>r.a.createElement(e,{key:t}))),r.a.createElement("h2",{className:"ui-header"},"Combining Shapes"),r.a.createElement("div",null,r.a.createElement("h3",{className:"ui-header"},"multiple .sectors"),r.a.createElement(A,{size:150,cx:80,cy:80,data:t}),r.a.createElement("h3",{className:"ui-header"},"multiple .segments"),r.a.createElement(F,{width:25,size:150,cx:80,cy:80,data:t}),r.a.createElement("h3",{className:"ui-header"},"fitted .polyline"),r.a.createElement(T,{width:300,height:150,data:[-10,-45,10,0,35,10,-9,25,15,75]})))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))},3:function(e,t,a){e.exports=a(11)},4:function(e,t,a){}},[[3,1,2]]]);
//# sourceMappingURL=main.a4a7acd2.chunk.js.map