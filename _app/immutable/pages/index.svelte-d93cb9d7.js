import{S as ve,i as we,s as be,k as A,w,Z as ye,d as l,m as S,x as b,g as c,y,q as g,o as v,B as E,e as U,t as z,c as D,a as B,h as G,b as K,G as I,E as h,l as ce,n as Ee,p as Ae,$ as Se}from"../chunks/index-ba665ab7.js";import{A as Pe}from"../chunks/Article-5dcfd679.js";import{C as F}from"../chunks/Content-18c71de6.js";import{S as ue}from"../chunks/Section-46d6c3ca.js";import{T as M}from"../chunks/Tag-490fc688.js";import{C as Ne}from"../chunks/Container-c504b1e4.js";import"../chunks/index-88847dc5.js";const ie="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis iurelaborum repudiandae ad aut neque, magni, ipsa error tempore excepturi facere placeatesse molestiae magnam quia eum delectus facilis",ke=ie.length,Le=k=>ie.slice(0,Math.random()*(ke-k)+k);var oe={l:ie,rl:Le};function _e(k,t,n){const e=k.slice();return e[0]=t[n],e}function Ce(k){let t,n=oe.rl(50)+"",e,s,$,a=oe.rl(50)+"",f,m,u,x=oe.rl(50)+"",o;return{c(){t=U("span"),e=z(n),s=A(),$=U("span"),f=z(a),m=A(),u=U("span"),o=z(x),this.h()},l(N){t=D(N,"SPAN",{class:!0});var p=B(t);e=G(p,n),p.forEach(l),s=S(N),$=D(N,"SPAN",{class:!0});var L=B($);f=G(L,a),L.forEach(l),m=S(N),u=D(N,"SPAN",{class:!0});var _=B(u);o=G(_,x),_.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K($,"class","cdefault-0 svelte-2n0sby"),K(u,"class","cdefault-0 svelte-2n0sby")},m(N,p){c(N,t,p),I(t,e),c(N,s,p),c(N,$,p),I($,f),c(N,m,p),c(N,u,p),I(u,o)},p:h,d(N){N&&l(t),N&&l(s),N&&l($),N&&l(m),N&&l(u)}}}function xe(k){let t,n,e,s,$,a,f,m,u=oe.rl(50)+"",x,o;return{c(){t=U("div"),n=U("span"),e=z("2012"),s=A(),$=U("span"),a=z("2020"),f=A(),m=U("span"),x=z(u),o=A(),this.h()},l(N){t=D(N,"DIV",{class:!0});var p=B(t);n=D(p,"SPAN",{});var L=B(n);e=G(L,"2012"),L.forEach(l),s=S(p),$=D(p,"SPAN",{});var _=B($);a=G(_,"2020"),_.forEach(l),p.forEach(l),f=S(N),m=D(N,"SPAN",{class:!0});var C=B(m);x=G(C,u),C.forEach(l),o=S(N),this.h()},h(){K(t,"class","flex flex-col"),K(m,"class","cdefault-0 svelte-2n0sby")},m(N,p){c(N,t,p),I(t,n),I(n,e),I(t,s),I(t,$),I($,a),c(N,f,p),c(N,m,p),I(m,x),c(N,o,p)},p:h,d(N){N&&l(t),N&&l(f),N&&l(m),N&&l(o)}}}function ge(k){let t,n;return t=new F({props:{ctype:"rows",cssprops:"space-x-4 sm:space-x-6",$$slots:{default:[xe]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Ie(k){let t,n,e=Array(5),s=[];for(let a=0;a<e.length;a+=1)s[a]=ge(_e(k,e,a));const $=a=>v(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();t=ce()},l(a){for(let f=0;f<s.length;f+=1)s[f].l(a);t=ce()},m(a,f){for(let m=0;m<s.length;m+=1)s[m].m(a,f);c(a,t,f),n=!0},p(a,f){if(f&0){e=Array(5);let m;for(m=0;m<e.length;m+=1){const u=_e(a,e,m);s[m]?(s[m].p(u,f),g(s[m],1)):(s[m]=ge(u),s[m].c(),g(s[m],1),s[m].m(t.parentNode,t))}for(Ee(),m=e.length;m<s.length;m+=1)$(m);Ae()}},i(a){if(!n){for(let f=0;f<e.length;f+=1)g(s[f]);n=!0}},o(a){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)v(s[f]);n=!1},d(a){Se(s,a),a&&l(t)}}}function Me(k){let t,n,e,s;return t=new F({props:{ctype:"cols",cssprops:"space-y-2",$$slots:{default:[Ce]},$$scope:{ctx:k}}}),e=new F({props:{ctype:"cols",cssprops:"space-y-2",$$slots:{default:[Ie]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment)},l($){b(t.$$.fragment,$),n=S($),b(e.$$.fragment,$)},m($,a){y(t,$,a),c($,n,a),y(e,$,a),s=!0},p($,a){const f={};a&8&&(f.$$scope={dirty:a,ctx:$}),t.$set(f);const m={};a&8&&(m.$$scope={dirty:a,ctx:$}),e.$set(m)},i($){s||(g(t.$$.fragment,$),g(e.$$.fragment,$),s=!0)},o($){v(t.$$.fragment,$),v(e.$$.fragment,$),s=!1},d($){E(t,$),$&&l(n),E(e,$)}}}function qe(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-6",$$slots:{default:[Me]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Ue(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L,_;return{c(){t=U("span"),n=z("University of L'Aquila"),e=A(),s=U("span"),$=z("Department of Information Engineering, Computer Science and Mathematics"),a=A(),f=U("span"),m=z("Models for incremental public transportation service design"),u=A(),x=U("div"),o=U("span"),N=z("110/110"),p=A(),L=U("span"),_=z("cum laude"),this.h()},l(C){t=D(C,"SPAN",{class:!0});var j=B(t);n=G(j,"University of L'Aquila"),j.forEach(l),e=S(C),s=D(C,"SPAN",{class:!0});var R=B(s);$=G(R,"Department of Information Engineering, Computer Science and Mathematics"),R.forEach(l),a=S(C),f=D(C,"SPAN",{class:!0});var H=B(f);m=G(H,"Models for incremental public transportation service design"),H.forEach(l),u=S(C),x=D(C,"DIV",{});var J=B(x);o=D(J,"SPAN",{class:!0});var Z=B(o);N=G(Z,"110/110"),Z.forEach(l),p=S(J),L=D(J,"SPAN",{class:!0});var Q=B(L);_=G(Q,"cum laude"),Q.forEach(l),J.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K(s,"class","cdefault-0 svelte-2n0sby"),K(f,"class","cdefault-0 font-serif svelte-2n0sby"),K(o,"class","cdefault-0 font-mono font-bold svelte-2n0sby"),K(L,"class","cdefault-0 font-serif font-bold svelte-2n0sby")},m(C,j){c(C,t,j),I(t,n),c(C,e,j),c(C,s,j),I(s,$),c(C,a,j),c(C,f,j),I(f,m),c(C,u,j),c(C,x,j),I(x,o),I(o,N),I(x,p),I(x,L),I(L,_)},p:h,d(C){C&&l(t),C&&l(e),C&&l(s),C&&l(a),C&&l(f),C&&l(u),C&&l(x)}}}function De(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[Ue]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Be(k){let t,n,e,s,$,a,f,m,u,x,o,N;return{c(){t=U("span"),n=z("University of L'Aquila"),e=A(),s=U("span"),$=z("Department of Information Engineering, Computer Science and Mathematics"),a=A(),f=U("div"),m=U("span"),u=z("70/70"),x=A(),o=U("span"),N=z("cum laude"),this.h()},l(p){t=D(p,"SPAN",{class:!0});var L=B(t);n=G(L,"University of L'Aquila"),L.forEach(l),e=S(p),s=D(p,"SPAN",{class:!0});var _=B(s);$=G(_,"Department of Information Engineering, Computer Science and Mathematics"),_.forEach(l),a=S(p),f=D(p,"DIV",{});var C=B(f);m=D(C,"SPAN",{class:!0});var j=B(m);u=G(j,"70/70"),j.forEach(l),x=S(C),o=D(C,"SPAN",{class:!0});var R=B(o);N=G(R,"cum laude"),R.forEach(l),C.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K(s,"class","cdefault-0 svelte-2n0sby"),K(m,"class","cdefault-0 font-mono font-bold svelte-2n0sby"),K(o,"class","cdefault-0 font-serif font-bold svelte-2n0sby")},m(p,L){c(p,t,L),I(t,n),c(p,e,L),c(p,s,L),I(s,$),c(p,a,L),c(p,f,L),I(f,m),I(m,u),I(f,x),I(f,o),I(o,N)},p:h,d(p){p&&l(t),p&&l(e),p&&l(s),p&&l(a),p&&l(f)}}}function Ve(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"text-lg_front_0 dark:text-dk_front_0",$$slots:{default:[Be]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function je(k){let t,n,e,s;return t=new F({props:{title:"Master's Degree in Computer Science",ctype:"cols",cssprops:"",$$slots:{default:[De]},$$scope:{ctx:k}}}),e=new F({props:{title:"Level-1 Master Course - Mobile and Web Technologies",ctype:"cols",cssprops:"",$$slots:{default:[Ve]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment)},l($){b(t.$$.fragment,$),n=S($),b(e.$$.fragment,$)},m($,a){y(t,$,a),c($,n,a),y(e,$,a),s=!0},p($,a){const f={};a&8&&(f.$$scope={dirty:a,ctx:$}),t.$set(f);const m={};a&8&&(m.$$scope={dirty:a,ctx:$}),e.$set(m)},i($){s||(g(t.$$.fragment,$),g(e.$$.fragment,$),s=!0)},o($){v(t.$$.fragment,$),v(e.$$.fragment,$),s=!1},d($){E(t,$),$&&l(n),E(e,$)}}}function We(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-4",$$slots:{default:[je]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function He(k){let t,n,e,s,$,a,f,m,u,x,o,N;return{c(){t=U("span"),n=z("University of L'Aquila"),e=A(),s=U("span"),$=z("Department of Information Engineering, Computer Science and Mathematics"),a=A(),f=U("div"),m=U("span"),u=z("B2"),x=A(),o=U("span"),N=z("level certification"),this.h()},l(p){t=D(p,"SPAN",{class:!0});var L=B(t);n=G(L,"University of L'Aquila"),L.forEach(l),e=S(p),s=D(p,"SPAN",{class:!0});var _=B(s);$=G(_,"Department of Information Engineering, Computer Science and Mathematics"),_.forEach(l),a=S(p),f=D(p,"DIV",{});var C=B(f);m=D(C,"SPAN",{class:!0});var j=B(m);u=G(j,"B2"),j.forEach(l),x=S(C),o=D(C,"SPAN",{class:!0});var R=B(o);N=G(R,"level certification"),R.forEach(l),C.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K(s,"class","cdefault-0 svelte-2n0sby"),K(m,"class","cdefault-0 font-mono font-bold svelte-2n0sby"),K(o,"class","cdefault-0 font-serif font-bold svelte-2n0sby")},m(p,L){c(p,t,L),I(t,n),c(p,e,L),c(p,s,L),I(s,$),c(p,a,L),c(p,f,L),I(f,m),I(m,u),I(f,x),I(f,o),I(o,N)},p:h,d(p){p&&l(t),p&&l(e),p&&l(s),p&&l(a),p&&l(f)}}}function Te(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[He]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Ke(k){let t,n,e,s,$,a;return{c(){t=U("div"),n=U("span"),e=z("A2"),s=A(),$=U("span"),a=z("level"),this.h()},l(f){t=D(f,"DIV",{});var m=B(t);n=D(m,"SPAN",{class:!0});var u=B(n);e=G(u,"A2"),u.forEach(l),s=S(m),$=D(m,"SPAN",{class:!0});var x=B($);a=G(x,"level"),x.forEach(l),m.forEach(l),this.h()},h(){K(n,"class","cdefault-0 font-mono font-bold svelte-2n0sby"),K($,"class","cdefault-0 font-serif font-bold svelte-2n0sby")},m(f,m){c(f,t,m),I(t,n),I(n,e),I(t,s),I(t,$),I($,a)},p:h,d(f){f&&l(t)}}}function ze(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[Ke]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Ge(k){let t,n,e,s;return t=new F({props:{title:"English",ctype:"cols",cssprops:"",$$slots:{default:[Te]},$$scope:{ctx:k}}}),e=new F({props:{title:"Spanish",ctype:"cols",cssprops:"",$$slots:{default:[ze]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment)},l($){b(t.$$.fragment,$),n=S($),b(e.$$.fragment,$)},m($,a){y(t,$,a),c($,n,a),y(e,$,a),s=!0},p($,a){const f={};a&8&&(f.$$scope={dirty:a,ctx:$}),t.$set(f);const m={};a&8&&(m.$$scope={dirty:a,ctx:$}),e.$set(m)},i($){s||(g(t.$$.fragment,$),g(e.$$.fragment,$),s=!0)},o($){v(t.$$.fragment,$),v(e.$$.fragment,$),s=!1},d($){E(t,$),$&&l(n),E(e,$)}}}function Re(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-4",$$slots:{default:[Ge]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Ze(k){let t,n,e,s,$,a;return t=new M({props:{name:"operating systems"}}),e=new M({props:{name:"compiler design"}}),$=new M({props:{name:"computer graphics"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment)},l(f){b(t.$$.fragment,f),n=S(f),b(e.$$.fragment,f),s=S(f),b($.$$.fragment,f)},m(f,m){y(t,f,m),c(f,n,m),y(e,f,m),c(f,s,m),y($,f,m),a=!0},p:h,i(f){a||(g(t.$$.fragment,f),g(e.$$.fragment,f),g($.$$.fragment,f),a=!0)},o(f){v(t.$$.fragment,f),v(e.$$.fragment,f),v($.$$.fragment,f),a=!1},d(f){E(t,f),f&&l(n),E(e,f),f&&l(s),E($,f)}}}function Fe(k){let t,n;return t=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Ze]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Je(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L,_,C,j,R,H,J,Z,Q;return t=new M({props:{name:"c"}}),e=new M({props:{name:"c++"}}),$=new M({props:{name:"python"}}),f=new M({props:{name:"go"}}),u=new M({props:{name:"sh-shells"}}),o=new M({props:{name:"c-shells"}}),p=new M({props:{name:"rc"}}),_=new M({props:{name:"asm"}}),j=new M({props:{name:"tex"}}),H=new M({props:{name:"m4"}}),Z=new M({props:{name:"awk"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment),m=A(),w(u.$$.fragment),x=A(),w(o.$$.fragment),N=A(),w(p.$$.fragment),L=A(),w(_.$$.fragment),C=A(),w(j.$$.fragment),R=A(),w(H.$$.fragment),J=A(),w(Z.$$.fragment)},l(i){b(t.$$.fragment,i),n=S(i),b(e.$$.fragment,i),s=S(i),b($.$$.fragment,i),a=S(i),b(f.$$.fragment,i),m=S(i),b(u.$$.fragment,i),x=S(i),b(o.$$.fragment,i),N=S(i),b(p.$$.fragment,i),L=S(i),b(_.$$.fragment,i),C=S(i),b(j.$$.fragment,i),R=S(i),b(H.$$.fragment,i),J=S(i),b(Z.$$.fragment,i)},m(i,W){y(t,i,W),c(i,n,W),y(e,i,W),c(i,s,W),y($,i,W),c(i,a,W),y(f,i,W),c(i,m,W),y(u,i,W),c(i,x,W),y(o,i,W),c(i,N,W),y(p,i,W),c(i,L,W),y(_,i,W),c(i,C,W),y(j,i,W),c(i,R,W),y(H,i,W),c(i,J,W),y(Z,i,W),Q=!0},p:h,i(i){Q||(g(t.$$.fragment,i),g(e.$$.fragment,i),g($.$$.fragment,i),g(f.$$.fragment,i),g(u.$$.fragment,i),g(o.$$.fragment,i),g(p.$$.fragment,i),g(_.$$.fragment,i),g(j.$$.fragment,i),g(H.$$.fragment,i),g(Z.$$.fragment,i),Q=!0)},o(i){v(t.$$.fragment,i),v(e.$$.fragment,i),v($.$$.fragment,i),v(f.$$.fragment,i),v(u.$$.fragment,i),v(o.$$.fragment,i),v(p.$$.fragment,i),v(_.$$.fragment,i),v(j.$$.fragment,i),v(H.$$.fragment,i),v(Z.$$.fragment,i),Q=!1},d(i){E(t,i),i&&l(n),E(e,i),i&&l(s),E($,i),i&&l(a),E(f,i),i&&l(m),E(u,i),i&&l(x),E(o,i),i&&l(N),E(p,i),i&&l(L),E(_,i),i&&l(C),E(j,i),i&&l(R),E(H,i),i&&l(J),E(Z,i)}}}function Oe(k){let t,n,e,s,$,a,f,m,u,x;return t=new M({props:{name:"rust"}}),e=new M({props:{name:"lua"}}),$=new M({props:{name:"javascript"}}),f=new M({props:{name:"typescript"}}),u=new M({props:{name:"dart"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment),m=A(),w(u.$$.fragment)},l(o){b(t.$$.fragment,o),n=S(o),b(e.$$.fragment,o),s=S(o),b($.$$.fragment,o),a=S(o),b(f.$$.fragment,o),m=S(o),b(u.$$.fragment,o)},m(o,N){y(t,o,N),c(o,n,N),y(e,o,N),c(o,s,N),y($,o,N),c(o,a,N),y(f,o,N),c(o,m,N),y(u,o,N),x=!0},p:h,i(o){x||(g(t.$$.fragment,o),g(e.$$.fragment,o),g($.$$.fragment,o),g(f.$$.fragment,o),g(u.$$.fragment,o),x=!0)},o(o){v(t.$$.fragment,o),v(e.$$.fragment,o),v($.$$.fragment,o),v(f.$$.fragment,o),v(u.$$.fragment,o),x=!1},d(o){E(t,o),o&&l(n),E(e,o),o&&l(s),E($,o),o&&l(a),E(f,o),o&&l(m),E(u,o)}}}function Qe(k){let t,n,e,s,$,a,f,m;return t=new M({props:{name:"zig"}}),e=new M({props:{name:"v"}}),$=new M({props:{name:"apl"}}),f=new M({props:{name:"haskell"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment)},l(u){b(t.$$.fragment,u),n=S(u),b(e.$$.fragment,u),s=S(u),b($.$$.fragment,u),a=S(u),b(f.$$.fragment,u)},m(u,x){y(t,u,x),c(u,n,x),y(e,u,x),c(u,s,x),y($,u,x),c(u,a,x),y(f,u,x),m=!0},p:h,i(u){m||(g(t.$$.fragment,u),g(e.$$.fragment,u),g($.$$.fragment,u),g(f.$$.fragment,u),m=!0)},o(u){v(t.$$.fragment,u),v(e.$$.fragment,u),v($.$$.fragment,u),v(f.$$.fragment,u),m=!1},d(u){E(t,u),u&&l(n),E(e,u),u&&l(s),E($,u),u&&l(a),E(f,u)}}}function Xe(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L;return t=new M({props:{name:"prolog"}}),e=new M({props:{name:"lisp"}}),$=new M({props:{name:"ml"}}),f=new M({props:{name:"c#"}}),u=new M({props:{name:"php"}}),o=new M({props:{name:"java"}}),p=new M({props:{name:"ruby"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment),m=A(),w(u.$$.fragment),x=A(),w(o.$$.fragment),N=A(),w(p.$$.fragment)},l(_){b(t.$$.fragment,_),n=S(_),b(e.$$.fragment,_),s=S(_),b($.$$.fragment,_),a=S(_),b(f.$$.fragment,_),m=S(_),b(u.$$.fragment,_),x=S(_),b(o.$$.fragment,_),N=S(_),b(p.$$.fragment,_)},m(_,C){y(t,_,C),c(_,n,C),y(e,_,C),c(_,s,C),y($,_,C),c(_,a,C),y(f,_,C),c(_,m,C),y(u,_,C),c(_,x,C),y(o,_,C),c(_,N,C),y(p,_,C),L=!0},p:h,i(_){L||(g(t.$$.fragment,_),g(e.$$.fragment,_),g($.$$.fragment,_),g(f.$$.fragment,_),g(u.$$.fragment,_),g(o.$$.fragment,_),g(p.$$.fragment,_),L=!0)},o(_){v(t.$$.fragment,_),v(e.$$.fragment,_),v($.$$.fragment,_),v(f.$$.fragment,_),v(u.$$.fragment,_),v(o.$$.fragment,_),v(p.$$.fragment,_),L=!1},d(_){E(t,_),_&&l(n),E(e,_),_&&l(s),E($,_),_&&l(a),E(f,_),_&&l(m),E(u,_),_&&l(x),E(o,_),_&&l(N),E(p,_)}}}function Ye(k){let t,n,e,s,$,a;return t=new M({props:{name:"nim"}}),e=new M({props:{name:"tcl"}}),$=new M({props:{name:"smalltalk"}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment)},l(f){b(t.$$.fragment,f),n=S(f),b(e.$$.fragment,f),s=S(f),b($.$$.fragment,f)},m(f,m){y(t,f,m),c(f,n,m),y(e,f,m),c(f,s,m),y($,f,m),a=!0},p:h,i(f){a||(g(t.$$.fragment,f),g(e.$$.fragment,f),g($.$$.fragment,f),a=!0)},o(f){v(t.$$.fragment,f),v(e.$$.fragment,f),v($.$$.fragment,f),a=!1},d(f){E(t,f),f&&l(n),E(e,f),f&&l(s),E($,f)}}}function de(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L,_,C,j,R,H,J,Z,Q,i,W,Y;return s=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Je]},$$scope:{ctx:k}}}),u=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Oe]},$$scope:{ctx:k}}}),L=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Qe]},$$scope:{ctx:k}}}),H=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Xe]},$$scope:{ctx:k}}}),W=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[Ye]},$$scope:{ctx:k}}}),{c(){t=U("span"),n=z("Expert"),e=A(),w(s.$$.fragment),$=A(),a=U("span"),f=z("Intermediate"),m=A(),w(u.$$.fragment),x=A(),o=U("span"),N=z("Beginner \u2013 Learning"),p=A(),w(L.$$.fragment),_=A(),C=U("span"),j=z("Used"),R=A(),w(H.$$.fragment),J=A(),Z=U("span"),Q=z("Interested"),i=A(),w(W.$$.fragment),this.h()},l(P){t=D(P,"SPAN",{class:!0});var q=B(t);n=G(q,"Expert"),q.forEach(l),e=S(P),b(s.$$.fragment,P),$=S(P),a=D(P,"SPAN",{class:!0});var d=B(a);f=G(d,"Intermediate"),d.forEach(l),m=S(P),b(u.$$.fragment,P),x=S(P),o=D(P,"SPAN",{class:!0});var O=B(o);N=G(O,"Beginner \u2013 Learning"),O.forEach(l),p=S(P),b(L.$$.fragment,P),_=S(P),C=D(P,"SPAN",{class:!0});var ee=B(C);j=G(ee,"Used"),ee.forEach(l),R=S(P),b(H.$$.fragment,P),J=S(P),Z=D(P,"SPAN",{class:!0});var T=B(Z);Q=G(T,"Interested"),T.forEach(l),i=S(P),b(W.$$.fragment,P),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K(a,"class","cdefault-0 svelte-2n0sby"),K(o,"class","cdefault-0 svelte-2n0sby"),K(C,"class","cdefault-0 svelte-2n0sby"),K(Z,"class","cdefault-0 svelte-2n0sby")},m(P,q){c(P,t,q),I(t,n),c(P,e,q),y(s,P,q),c(P,$,q),c(P,a,q),I(a,f),c(P,m,q),y(u,P,q),c(P,x,q),c(P,o,q),I(o,N),c(P,p,q),y(L,P,q),c(P,_,q),c(P,C,q),I(C,j),c(P,R,q),y(H,P,q),c(P,J,q),c(P,Z,q),I(Z,Q),c(P,i,q),y(W,P,q),Y=!0},p(P,q){const d={};q&8&&(d.$$scope={dirty:q,ctx:P}),s.$set(d);const O={};q&8&&(O.$$scope={dirty:q,ctx:P}),u.$set(O);const ee={};q&8&&(ee.$$scope={dirty:q,ctx:P}),L.$set(ee);const T={};q&8&&(T.$$scope={dirty:q,ctx:P}),H.$set(T);const X={};q&8&&(X.$$scope={dirty:q,ctx:P}),W.$set(X)},i(P){Y||(g(s.$$.fragment,P),g(u.$$.fragment,P),g(L.$$.fragment,P),g(H.$$.fragment,P),g(W.$$.fragment,P),Y=!0)},o(P){v(s.$$.fragment,P),v(u.$$.fragment,P),v(L.$$.fragment,P),v(H.$$.fragment,P),v(W.$$.fragment,P),Y=!1},d(P){P&&l(t),P&&l(e),E(s,P),P&&l($),P&&l(a),P&&l(m),E(u,P),P&&l(x),P&&l(o),P&&l(p),E(L,P),P&&l(_),P&&l(C),P&&l(R),E(H,P),P&&l(J),P&&l(Z),P&&l(i),E(W,P)}}}function he(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L,_,C,j,R,H,J,Z,Q,i,W,Y,P,q,d,O,ee,T,X,te,re,$e,pe,se,ae,fe,le,ne,me;return t=new M({props:{name:"git"}}),e=new M({props:{name:"mercurial"}}),$=new M({props:{name:"docker"}}),f=new M({props:{name:"kubernetes"}}),u=new M({props:{name:"ansible"}}),o=new M({props:{name:"suckless"}}),p=new M({props:{name:"vmware"}}),_=new M({props:{name:"redis"}}),j=new M({props:{name:"ros"}}),H=new M({props:{name:"angular"}}),Z=new M({props:{name:"react"}}),i=new M({props:{name:"linux-arch"}}),Y=new M({props:{name:"linux-gentoo"}}),q=new M({props:{name:"linux-void"}}),O=new M({props:{name:"bsd-freebsd"}}),T=new M({props:{name:"bsd-openbsd"}}),te=new M({props:{name:"qemu"}}),$e=new M({props:{name:"kvm"}}),se=new M({props:{name:"bochs"}}),fe=new M({props:{name:"virtualbox"}}),ne=new M({props:{name:"..."}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment),m=A(),w(u.$$.fragment),x=A(),w(o.$$.fragment),N=A(),w(p.$$.fragment),L=A(),w(_.$$.fragment),C=A(),w(j.$$.fragment),R=A(),w(H.$$.fragment),J=A(),w(Z.$$.fragment),Q=A(),w(i.$$.fragment),W=A(),w(Y.$$.fragment),P=A(),w(q.$$.fragment),d=A(),w(O.$$.fragment),ee=A(),w(T.$$.fragment),X=A(),w(te.$$.fragment),re=A(),w($e.$$.fragment),pe=A(),w(se.$$.fragment),ae=A(),w(fe.$$.fragment),le=A(),w(ne.$$.fragment)},l(r){b(t.$$.fragment,r),n=S(r),b(e.$$.fragment,r),s=S(r),b($.$$.fragment,r),a=S(r),b(f.$$.fragment,r),m=S(r),b(u.$$.fragment,r),x=S(r),b(o.$$.fragment,r),N=S(r),b(p.$$.fragment,r),L=S(r),b(_.$$.fragment,r),C=S(r),b(j.$$.fragment,r),R=S(r),b(H.$$.fragment,r),J=S(r),b(Z.$$.fragment,r),Q=S(r),b(i.$$.fragment,r),W=S(r),b(Y.$$.fragment,r),P=S(r),b(q.$$.fragment,r),d=S(r),b(O.$$.fragment,r),ee=S(r),b(T.$$.fragment,r),X=S(r),b(te.$$.fragment,r),re=S(r),b($e.$$.fragment,r),pe=S(r),b(se.$$.fragment,r),ae=S(r),b(fe.$$.fragment,r),le=S(r),b(ne.$$.fragment,r)},m(r,V){y(t,r,V),c(r,n,V),y(e,r,V),c(r,s,V),y($,r,V),c(r,a,V),y(f,r,V),c(r,m,V),y(u,r,V),c(r,x,V),y(o,r,V),c(r,N,V),y(p,r,V),c(r,L,V),y(_,r,V),c(r,C,V),y(j,r,V),c(r,R,V),y(H,r,V),c(r,J,V),y(Z,r,V),c(r,Q,V),y(i,r,V),c(r,W,V),y(Y,r,V),c(r,P,V),y(q,r,V),c(r,d,V),y(O,r,V),c(r,ee,V),y(T,r,V),c(r,X,V),y(te,r,V),c(r,re,V),y($e,r,V),c(r,pe,V),y(se,r,V),c(r,ae,V),y(fe,r,V),c(r,le,V),y(ne,r,V),me=!0},p:h,i(r){me||(g(t.$$.fragment,r),g(e.$$.fragment,r),g($.$$.fragment,r),g(f.$$.fragment,r),g(u.$$.fragment,r),g(o.$$.fragment,r),g(p.$$.fragment,r),g(_.$$.fragment,r),g(j.$$.fragment,r),g(H.$$.fragment,r),g(Z.$$.fragment,r),g(i.$$.fragment,r),g(Y.$$.fragment,r),g(q.$$.fragment,r),g(O.$$.fragment,r),g(T.$$.fragment,r),g(te.$$.fragment,r),g($e.$$.fragment,r),g(se.$$.fragment,r),g(fe.$$.fragment,r),g(ne.$$.fragment,r),me=!0)},o(r){v(t.$$.fragment,r),v(e.$$.fragment,r),v($.$$.fragment,r),v(f.$$.fragment,r),v(u.$$.fragment,r),v(o.$$.fragment,r),v(p.$$.fragment,r),v(_.$$.fragment,r),v(j.$$.fragment,r),v(H.$$.fragment,r),v(Z.$$.fragment,r),v(i.$$.fragment,r),v(Y.$$.fragment,r),v(q.$$.fragment,r),v(O.$$.fragment,r),v(T.$$.fragment,r),v(te.$$.fragment,r),v($e.$$.fragment,r),v(se.$$.fragment,r),v(fe.$$.fragment,r),v(ne.$$.fragment,r),me=!1},d(r){E(t,r),r&&l(n),E(e,r),r&&l(s),E($,r),r&&l(a),E(f,r),r&&l(m),E(u,r),r&&l(x),E(o,r),r&&l(N),E(p,r),r&&l(L),E(_,r),r&&l(C),E(j,r),r&&l(R),E(H,r),r&&l(J),E(Z,r),r&&l(Q),E(i,r),r&&l(W),E(Y,r),r&&l(P),E(q,r),r&&l(d),E(O,r),r&&l(ee),E(T,r),r&&l(X),E(te,r),r&&l(re),E($e,r),r&&l(pe),E(se,r),r&&l(ae),E(fe,r),r&&l(le),E(ne,r)}}}function et(k){let t,n;return t=new F({props:{ctype:"rows",cssprops:"flex-wrap",$$slots:{default:[he]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function tt(k){let t,n,e,s,$,a;return t=new F({props:{title:"Computer science fields",ctype:"cols",cssprops:"space-y-3",$$slots:{default:[Fe]},$$scope:{ctx:k}}}),e=new F({props:{title:"Programming languages",ctype:"cols",cssprops:"space-y-3",$$slots:{default:[de]},$$scope:{ctx:k}}}),$=new F({props:{title:"Misc (not complete) (wip)",ctype:"cols",cssprops:"space-y-3",$$slots:{default:[et]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment)},l(f){b(t.$$.fragment,f),n=S(f),b(e.$$.fragment,f),s=S(f),b($.$$.fragment,f)},m(f,m){y(t,f,m),c(f,n,m),y(e,f,m),c(f,s,m),y($,f,m),a=!0},p(f,m){const u={};m&8&&(u.$$scope={dirty:m,ctx:f}),t.$set(u);const x={};m&8&&(x.$$scope={dirty:m,ctx:f}),e.$set(x);const o={};m&8&&(o.$$scope={dirty:m,ctx:f}),$.$set(o)},i(f){a||(g(t.$$.fragment,f),g(e.$$.fragment,f),g($.$$.fragment,f),a=!0)},o(f){v(t.$$.fragment,f),v(e.$$.fragment,f),v($.$$.fragment,f),a=!1},d(f){E(t,f),f&&l(n),E(e,f),f&&l(s),E($,f)}}}function st(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-4",$$slots:{default:[tt]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function $t(k){let t,n,e,s,$,a,f,m,u,x,o,N,p,L,_,C,j,R,H,J,Z,Q,i,W,Y,P,q,d,O,ee;return{c(){t=U("span"),n=z("Currently working on a publication with"),e=A(),s=U("ul"),$=U("li"),a=U("span"),f=z("Prof. Henry Muccini"),m=A(),u=U("span"),x=z("(University of L'Aquila)"),o=A(),N=U("li"),p=U("span"),L=z("Prof. Mauro Caporuscio"),_=A(),C=U("span"),j=z("(Linnaeus University)"),R=A(),H=U("li"),J=U("span"),Z=z("Karthik Vaidhyanathan"),Q=A(),i=U("span"),W=z("(University of L'Aquila)"),Y=A(),P=U("span"),q=z("Private journal"),d=A(),O=U("span"),ee=z("Citation as co-author"),this.h()},l(T){t=D(T,"SPAN",{class:!0});var X=B(t);n=G(X,"Currently working on a publication with"),X.forEach(l),e=S(T),s=D(T,"UL",{class:!0});var te=B(s);$=D(te,"LI",{});var re=B($);a=D(re,"SPAN",{class:!0});var $e=B(a);f=G($e,"Prof. Henry Muccini"),$e.forEach(l),m=S(re),u=D(re,"SPAN",{class:!0});var pe=B(u);x=G(pe,"(University of L'Aquila)"),pe.forEach(l),re.forEach(l),o=S(te),N=D(te,"LI",{});var se=B(N);p=D(se,"SPAN",{class:!0});var ae=B(p);L=G(ae,"Prof. Mauro Caporuscio"),ae.forEach(l),_=S(se),C=D(se,"SPAN",{class:!0});var fe=B(C);j=G(fe,"(Linnaeus University)"),fe.forEach(l),se.forEach(l),R=S(te),H=D(te,"LI",{});var le=B(H);J=D(le,"SPAN",{class:!0});var ne=B(J);Z=G(ne,"Karthik Vaidhyanathan"),ne.forEach(l),Q=S(le),i=D(le,"SPAN",{class:!0});var me=B(i);W=G(me,"(University of L'Aquila)"),me.forEach(l),le.forEach(l),te.forEach(l),Y=S(T),P=D(T,"SPAN",{class:!0});var r=B(P);q=G(r,"Private journal"),r.forEach(l),d=S(T),O=D(T,"SPAN",{class:!0});var V=B(O);ee=G(V,"Citation as co-author"),V.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby"),K(a,"class","cdefault-0 font-serif svelte-2n0sby"),K(u,"class","cdefault-0 svelte-2n0sby"),K(p,"class","cdefault-0 font-serif svelte-2n0sby"),K(C,"class","cdefault-0 svelte-2n0sby"),K(J,"class","cdefault-0 font-serif svelte-2n0sby"),K(i,"class","cdefault-0 svelte-2n0sby"),K(s,"class","list-[circle] list-inside"),K(P,"class","cdefault-0 svelte-2n0sby"),K(O,"class","cdefault-0 svelte-2n0sby")},m(T,X){c(T,t,X),I(t,n),c(T,e,X),c(T,s,X),I(s,$),I($,a),I(a,f),I($,m),I($,u),I(u,x),I(s,o),I(s,N),I(N,p),I(p,L),I(N,_),I(N,C),I(C,j),I(s,R),I(s,H),I(H,J),I(J,Z),I(H,Q),I(H,i),I(i,W),c(T,Y,X),c(T,P,X),I(P,q),c(T,d,X),c(T,O,X),I(O,ee)},p:h,d(T){T&&l(t),T&&l(e),T&&l(s),T&&l(Y),T&&l(P),T&&l(d),T&&l(O)}}}function ft(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[$t]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function nt(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[ft]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function rt(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-4",$$slots:{default:[nt]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function lt(k){let t,n;return{c(){t=U("span"),n=z("Work in progress \u2026"),this.h()},l(e){t=D(e,"SPAN",{class:!0});var s=B(t);n=G(s,"Work in progress \u2026"),s.forEach(l),this.h()},h(){K(t,"class","cdefault-0 svelte-2n0sby")},m(e,s){c(e,t,s),I(t,n)},p:h,d(e){e&&l(t)}}}function pt(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"",$$slots:{default:[lt]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function at(k){let t,n;return t=new F({props:{ctype:"cols",cssprops:"space-y-4",$$slots:{default:[pt]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function mt(k){let t,n,e,s,$,a,f,m,u,x,o,N;return t=new ue({props:{title:"Bio",cssprops:"space-y-4",$$slots:{default:[qe]},$$scope:{ctx:k}}}),e=new ue({props:{title:"Education",cssprops:"space-y-4",$$slots:{default:[We]},$$scope:{ctx:k}}}),$=new ue({props:{title:"Languages",cssprops:"space-y-4",$$slots:{default:[Re]},$$scope:{ctx:k}}}),f=new ue({props:{title:"Skills",cssprops:"space-y-4",$$slots:{default:[st]},$$scope:{ctx:k}}}),u=new ue({props:{title:"Publications",cssprops:"space-y-4",$$slots:{default:[rt]},$$scope:{ctx:k}}}),o=new ue({props:{title:"Work",cssprops:"space-y-4",$$slots:{default:[at]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),s=A(),w($.$$.fragment),a=A(),w(f.$$.fragment),m=A(),w(u.$$.fragment),x=A(),w(o.$$.fragment)},l(p){b(t.$$.fragment,p),n=S(p),b(e.$$.fragment,p),s=S(p),b($.$$.fragment,p),a=S(p),b(f.$$.fragment,p),m=S(p),b(u.$$.fragment,p),x=S(p),b(o.$$.fragment,p)},m(p,L){y(t,p,L),c(p,n,L),y(e,p,L),c(p,s,L),y($,p,L),c(p,a,L),y(f,p,L),c(p,m,L),y(u,p,L),c(p,x,L),y(o,p,L),N=!0},p(p,L){const _={};L&8&&(_.$$scope={dirty:L,ctx:p}),t.$set(_);const C={};L&8&&(C.$$scope={dirty:L,ctx:p}),e.$set(C);const j={};L&8&&(j.$$scope={dirty:L,ctx:p}),$.$set(j);const R={};L&8&&(R.$$scope={dirty:L,ctx:p}),f.$set(R);const H={};L&8&&(H.$$scope={dirty:L,ctx:p}),u.$set(H);const J={};L&8&&(J.$$scope={dirty:L,ctx:p}),o.$set(J)},i(p){N||(g(t.$$.fragment,p),g(e.$$.fragment,p),g($.$$.fragment,p),g(f.$$.fragment,p),g(u.$$.fragment,p),g(o.$$.fragment,p),N=!0)},o(p){v(t.$$.fragment,p),v(e.$$.fragment,p),v($.$$.fragment,p),v(f.$$.fragment,p),v(u.$$.fragment,p),v(o.$$.fragment,p),N=!1},d(p){E(t,p),p&&l(n),E(e,p),p&&l(s),E($,p),p&&l(a),E(f,p),p&&l(m),E(u,p),p&&l(x),E(o,p)}}}function ut(k){let t,n;return t=new Pe({props:{cssprops:"space-y-8 w-full mx-auto",$$slots:{default:[mt]},$$scope:{ctx:k}}}),{c(){w(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),n=!0},p(e,s){const $={};s&8&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function ot(k){let t,n,e;return n=new Ne({props:{cssprops:"",$$slots:{default:[ut]},$$scope:{ctx:k}}}),{c(){t=A(),w(n.$$.fragment),this.h()},l(s){ye('[data-svelte="svelte-1f7jgic"]',document.head).forEach(l),t=S(s),b(n.$$.fragment,s),this.h()},h(){document.title="Home"},m(s,$){c(s,t,$),y(n,s,$),e=!0},p(s,[$]){const a={};$&8&&(a.$$scope={dirty:$,ctx:s}),n.$set(a)},i(s){e||(g(n.$$.fragment,s),e=!0)},o(s){v(n.$$.fragment,s),e=!1},d(s){s&&l(t),E(n,s)}}}class yt extends ve{constructor(t){super(),we(this,t,null,ot,be,{})}}export{yt as default};