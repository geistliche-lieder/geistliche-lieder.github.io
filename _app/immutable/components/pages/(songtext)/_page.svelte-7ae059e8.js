import{S as te,i as le,s as se,v as K,a as C,k as I,q as F,w as j,c as M,l as L,m as $,r as D,h as m,n as k,x as G,b as B,F as v,M as X,f as W,t as q,y as Y,Y as ct,Z as ht,A as x,G as J,p as oe,_ as ge,K as ve,$ as _t,g as ke,V as dt,W as gt,d as we,o as Te,B as mt,C as pt,D as bt,E as vt,z as de,a0 as Ve,U as fe,L as Ne,R as re,N as kt,a1 as Be,u as ue,X as ye,e as ee,a2 as wt}from"../../../chunks/index-c9ad3d2c.js";import{p as Tt}from"../../../chunks/stores-f8554c0d.js";import{g as me,t as It,a as Lt,b as rt,c as it,d as Et,e as pe,f as be,h as Pe,j as $t,k as St,l as Vt,m as ce}from"../../../chunks/song-f5fb165b.js";import{T as _e,i as Nt}from"../../../chunks/TitleBar-17d224f1.js";import{e as he,a as Ie,s as Bt,F as yt,f as ae,b as at,u as Ce,g as Me}from"../../../chunks/store-9ea2ec21.js";import{c as ne}from"../../../chunks/singletons-0c04349f.js";function Pt(s){let e,t,l,n,o,r,u,i,h,_,a,f,c,p,E,b,V,P,N,y,T,g,d,S,w,O,H;return e=new _e({props:{title:"Einstellungen",withCloseButton:!0}}),{c(){K(e.$$.fragment),t=C(),l=I("div"),n=I("div"),o=I("p"),r=F("Volltextsuche"),u=C(),i=I("input"),h=C(),_=I("div"),a=F("Kontakt"),f=C(),c=I("div"),p=I("p"),E=F("E-Mail"),b=C(),V=I("a"),P=F("geistliche-lieder@proton.me"),N=C(),y=I("p"),T=F("Telegram"),g=C(),d=I("a"),S=F("https://t.me/geistliche_lieder"),this.h()},l(A){j(e.$$.fragment,A),t=M(A),l=L(A,"DIV",{class:!0});var U=$(l);n=L(U,"DIV",{class:!0});var R=$(n);o=L(R,"P",{class:!0});var Q=$(o);r=D(Q,"Volltextsuche"),Q.forEach(m),u=M(R),i=L(R,"INPUT",{type:!0}),R.forEach(m),h=M(U),_=L(U,"DIV",{class:!0});var Z=$(_);a=D(Z,"Kontakt"),Z.forEach(m),f=M(U),c=L(U,"DIV",{class:!0});var z=$(c);p=L(z,"P",{class:!0});var Le=$(p);E=D(Le,"E-Mail"),Le.forEach(m),b=M(z),V=L(z,"A",{class:!0,href:!0});var Ee=$(V);P=D(Ee,"geistliche-lieder@proton.me"),Ee.forEach(m),N=M(z),y=L(z,"P",{class:!0});var $e=$(y);T=D($e,"Telegram"),$e.forEach(m),g=M(z),d=L(z,"A",{class:!0,href:!0});var Se=$(d);S=D(Se,"https://t.me/geistliche_lieder"),Se.forEach(m),z.forEach(m),U.forEach(m),this.h()},h(){k(o,"class","flex-1 text-left"),k(i,"type","checkbox"),i.checked=s[0],k(n,"class","w-full flex"),k(_,"class","divider"),k(p,"class","flex-1 text-left"),k(V,"class","col-span-2 text-left"),k(V,"href","mailto:geistliche-lieder@proton.me"),k(y,"class","flex-1 text-left"),k(d,"class","col-span-2 text-left"),k(d,"href","https://t.me/geistliche_lieder"),k(c,"class","grid grid-cols-3"),k(l,"class","flex flex-col w-full h-full p-2")},m(A,U){G(e,A,U),B(A,t,U),B(A,l,U),v(l,n),v(n,o),v(o,r),v(n,u),v(n,i),v(l,h),v(l,_),v(_,a),v(l,f),v(l,c),v(c,p),v(p,E),v(c,b),v(c,V),v(V,P),v(c,N),v(c,y),v(y,T),v(c,g),v(c,d),v(d,S),w=!0,O||(H=X(i,"change",s[1]),O=!0)},p(A,[U]){(!w||U&1)&&(i.checked=A[0])},i(A){w||(W(e.$$.fragment,A),w=!0)},o(A){q(e.$$.fragment,A),w=!1},d(A){Y(e,A),A&&m(t),A&&m(l),O=!1,H()}}}function Ct(s,e,t){let l=me();function n(){It(),t(0,l=me())}return[l,n]}class Mt extends te{constructor(e){super(),le(this,e,Ct,Pt,se,{})}}function Ot(s,e){e=e.toLocaleLowerCase();const t=me();return s.filter(l=>At(l,e,t)).sort((l,n)=>Oe(l,n,o=>o.T.toLocaleLowerCase().includes(e))).sort((l,n)=>Oe(l,n,o=>o.T.toLocaleLowerCase().startsWith(e)))}function Oe(s,e,t){const l=t(s.song),n=t(e.song);return l&&!n?-1:!l&&n?1:0}function At(s,e,t){if(e.trim()==="")return s.searchResultPart=void 0,!0;const l=s.song.T.toLocaleLowerCase();e=e.toLocaleLowerCase();const n=Number(e);if(!Number.isNaN(n)&&s.songInsideBook)return s.searchResultPart=void 0,s.songInsideBook.I===n;if(e.trim().split(" ").every(r=>l.includes(r)))return s.searchResultPart=void 0,!0;if(t){const r=Lt(s.song);if(r.toLocaleLowerCase().includes(e)){const u=r.toLocaleLowerCase().indexOf(e),i=e.length;return s.searchResultPart=`<p class="font-bold inline">${r.substring(u,u+i)}</p>${r.substring(u+i)}`,!0}}return s.searchResultPart=void 0,!1}function Ae(s){let e,t=s[0].searchResultPart+"";return{c(){e=I("div")},l(l){e=L(l,"DIV",{});var n=$(e);n.forEach(m)},m(l,n){B(l,e,n),e.innerHTML=t},p(l,n){n&1&&t!==(t=l[0].searchResultPart+"")&&(e.innerHTML=t)},d(l){l&&m(e)}}}function Ft(s){let e,t,l,n,o,r,u,i,h,_,a,f=s[0].searchResultPart!=null&&Ae(s);return{c(){e=I("div"),t=I("a"),l=new ct(!1),n=C(),f&&f.c(),r=C(),u=I("span"),i=F("star"),this.h()},l(c){e=L(c,"DIV",{class:!0});var p=$(e);t=L(p,"A",{class:!0,href:!0});var E=$(t);l=ht(E,!1),n=M(E),f&&f.l(E),E.forEach(m),r=M(p),u=L(p,"SPAN",{class:!0});var b=$(u);i=D(b,"star"),b.forEach(m),p.forEach(m),this.h()},h(){l.a=n,k(t,"class","flex-1 whitespace-nowrap overflow-hidden"),k(t,"href",o=`#song/${s[0].song.I}`),k(u,"class",h=`material-symbols-outlined ${s[2]?"material-symbols-filled":""}`),k(e,"class","flex")},m(c,p){B(c,e,p),v(e,t),l.m(s[1],t),v(t,n),f&&f.m(t,null),v(e,r),v(e,u),v(u,i),_||(a=X(u,"click",s[3]),_=!0)},p(c,[p]){p&2&&l.p(c[1]),c[0].searchResultPart!=null?f?f.p(c,p):(f=Ae(c),f.c(),f.m(t,null)):f&&(f.d(1),f=null),p&1&&o!==(o=`#song/${c[0].song.I}`)&&k(t,"href",o),p&4&&h!==(h=`material-symbols-outlined ${c[2]?"material-symbols-filled":""}`)&&k(u,"class",h)},i:x,o:x,d(c){c&&m(e),f&&f.d(),_=!1,a()}}}function Dt(s,e,t){let l;J(s,he,i=>t(4,l=i));let{songWithInsideBook:n}=e,o=!1;const r=()=>{it(n.song.I),t(2,o=!o)};let u;return s.$$set=i=>{"songWithInsideBook"in i&&t(0,n=i.songWithInsideBook)},s.$$.update=()=>{var i,h;if(s.$$.dirty&1&&t(2,o=rt(n.song.I)),s.$$.dirty&19){const _=l.trim().toLocaleLowerCase().split(" ");_.sort((f,c)=>f.length<c.length?1:-1);const a=(h=(i=n.songInsideBook)==null?void 0:i.I)!=null?h:null;t(1,u=n.song.T),a&&t(1,u=`${a} - ${u}`);for(const f of _){const c=f.length;let p=-1;const E=()=>p+c;do{if(p>=u.length){p=-1;break}p=u.toLocaleLowerCase().indexOf(f,p+1)}while(p>=0&&(u.substring(0,p).split("<").length%2===0||u.substring(p,E()).split("<").length%2===0));if(p>=0){const b=u.substring(p,E());t(1,u=u.slice(0,p)+`<p class="font-bold inline">${b}</p>`+u.slice(E()))}}}},[n,u,o,r,l]}class Rt extends te{constructor(e){super(),le(this,e,Dt,Ft,se,{songWithInsideBook:0})}}function Fe(s,e,t){const l=s.slice();return l[22]=e[t],l}const Ht=s=>({item:s&16}),De=s=>({item:s[22].data});function Ut(s){let e;return{c(){e=F("Missing template")},l(t){e=D(t,"Missing template")},m(t,l){B(t,e,l)},d(t){t&&m(e)}}}function Re(s,e){let t,l,n;const o=e[14].default,r=mt(o,e,e[13],De),u=r||Ut();return{key:s,first:null,c(){t=I("svelte-virtual-list-row"),u&&u.c(),l=C(),this.h()},l(i){t=L(i,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var h=$(t);u&&u.l(h),l=M(h),h.forEach(m),this.h()},h(){ge(t,"class","svelte-102fq2u"),this.first=t},m(i,h){B(i,t,h),u&&u.m(t,null),v(t,l),n=!0},p(i,h){e=i,r&&r.p&&(!n||h&8208)&&pt(r,o,e,e[13],n?vt(o,e[13],h,Ht):bt(e[13]),De)},i(i){n||(W(u,i),n=!0)},o(i){q(u,i),n=!1},d(i){i&&m(t),u&&u.d(i)}}}function Wt(s){let e,t,l=[],n=new Map,o,r,u,i,h=s[4];const _=a=>a[22].index;for(let a=0;a<h.length;a+=1){let f=Fe(s,h,a),c=_(f);n.set(c,l[a]=Re(c,f))}return{c(){e=I("svelte-virtual-list-viewport"),t=I("svelte-virtual-list-contents");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=L(a,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var f=$(e);t=L(f,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var c=$(t);for(let p=0;p<l.length;p+=1)l[p].l(c);c.forEach(m),f.forEach(m),this.h()},h(){oe(t,"padding-top",s[5]+"px"),oe(t,"padding-bottom",s[6]+"px"),ge(t,"class","svelte-102fq2u"),oe(e,"height",s[0]),ge(e,"class","svelte-102fq2u"),ve(()=>s[17].call(e))},m(a,f){B(a,e,f),v(e,t);for(let c=0;c<l.length;c+=1)l[c].m(t,null);s[15](t),s[16](e),o=_t(e,s[17].bind(e)),r=!0,u||(i=X(e,"scroll",s[7]),u=!0)},p(a,[f]){f&8208&&(h=a[4],ke(),l=dt(l,f,_,1,a,h,n,t,gt,Re,null,Fe),we()),(!r||f&32)&&oe(t,"padding-top",a[5]+"px"),(!r||f&64)&&oe(t,"padding-bottom",a[6]+"px"),(!r||f&1)&&oe(e,"height",a[0])},i(a){if(!r){for(let f=0;f<h.length;f+=1)W(l[f]);r=!0}},o(a){for(let f=0;f<l.length;f+=1)q(l[f]);r=!1},d(a){a&&m(e);for(let f=0;f<l.length;f+=1)l[f].d();s[15](null),s[16](null),o(),u=!1,i()}}}function qt(s,e,t){let{$$slots:l={},$$scope:n}=e,{items:o}=e,{height:r="100%"}=e,{itemHeight:u=void 0}=e,{start:i=0}=e,{end:h=0}=e,_=[],a,f,c,p=0,E,b,V=0,P=0,N;async function y(w,O,H){const{scrollTop:A}=f;await de();let U=V-A,R=i;for(;U<O&&R<w.length;){let Z=a[R-i];Z||(t(9,h=R+1),await de(),Z=a[R-i]),U+=_[R]=H||Z.offsetHeight,R+=1}t(9,h=R);const Q=w.length-h;N=(V+U)/h,t(6,P=Q*N),_.length=w.length,f.scrollTo(0,0)}async function T(){const{scrollTop:w}=f,O=i;for(let R=0;R<a.length;R+=1)_[i+R]=u||a[R].offsetHeight;let H=0,A=0;for(;H<o.length;){const R=_[H]||N;if(A+R>w){t(8,i=H),t(5,V=A);break}A+=R,H+=1}for(;H<o.length&&(A+=_[H]||N,H+=1,!(A>w+p)););t(9,h=H);const U=o.length-h;for(N=A/h;H<o.length;)_[H++]=N;if(t(6,P=U*N),i<O){await de();let R=0,Q=0;for(let z=i;z<O;z+=1)a[z-i]&&(R+=_[z],Q+=u||a[z-i].offsetHeight);const Z=Q-R;f.scrollTo(0,w+Z)}}Te(()=>{a=c.getElementsByTagName("svelte-virtual-list-row"),t(12,b=!0)});function g(w){Ve[w?"unshift":"push"](()=>{c=w,t(3,c)})}function d(w){Ve[w?"unshift":"push"](()=>{f=w,t(2,f)})}function S(){p=this.offsetHeight,t(1,p)}return s.$$set=w=>{"items"in w&&t(10,o=w.items),"height"in w&&t(0,r=w.height),"itemHeight"in w&&t(11,u=w.itemHeight),"start"in w&&t(8,i=w.start),"end"in w&&t(9,h=w.end),"$$scope"in w&&t(13,n=w.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,E=o.slice(i,h).map((w,O)=>({index:O+i,data:w}))),s.$$.dirty&7170&&b&&y(o,p,u)},[r,p,f,c,E,V,P,T,i,h,o,u,b,n,l,g,d,S]}class zt extends te{constructor(e){super(),le(this,e,qt,Wt,se,{items:10,height:0,itemHeight:11,start:8,end:9})}}function Kt(s){let e,t;return e=new Rt({props:{songWithInsideBook:s[5]}}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const o={};n&32&&(o.songWithInsideBook=l[5]),e.$set(o)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function jt(s){let e,t,l;return t=new zt({props:{items:s[0],height:"100%",$$slots:{default:[Kt,({item:n})=>({5:n}),({item:n})=>n?32:0]},$$scope:{ctx:s}}}),{c(){e=I("div"),K(t.$$.fragment),this.h()},l(n){e=L(n,"DIV",{id:!0,class:!0});var o=$(e);j(t.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"id","virtual-list-div"),k(e,"class","text-left flex-1 overflow-auto px-1 w-full")},m(n,o){B(n,e,o),G(t,e,null),l=!0},p(n,[o]){const r={};o&1&&(r.items=n[0]),o&96&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){l||(W(t.$$.fragment,n),l=!0)},o(n){q(t.$$.fragment,n),l=!1},d(n){n&&m(e),Y(t)}}}function Gt(s,e,t){let l,n,o;J(s,he,i=>t(2,l=i)),J(s,Ie,i=>t(3,n=i)),J(s,Bt,i=>t(4,o=i));let{selectedBook:r}=e,u;return s.$$set=i=>{"selectedBook"in i&&t(1,r=i.selectedBook)},s.$$.update=()=>{if(s.$$.dirty&30){let i;if(r.T!==yt)i=o[r.T];else{const h=Et();i=n.filter(_=>h.includes(_.I)).map(_=>({song:_}))}t(0,u=Ot(i,l))}},[u,r,l,n,o]}class ft extends te{constructor(e){super(),le(this,e,Gt,jt,se,{selectedBook:1})}}function He(s,e,t){const l=s.slice();return l[9]=e[t],l}function Ue(s,e,t){const l=s.slice();return l[9]=e[t],l}function We(s){let e,t=s[9].T+"",l;return{c(){e=I("option"),l=F(t),this.h()},l(n){e=L(n,"OPTION",{});var o=$(e);l=D(o,t),o.forEach(m),this.h()},h(){e.__value=s[9],e.value=e.__value},m(n,o){B(n,e,o),v(e,l)},p:x,d(n){n&&m(e)}}}function qe(s){let e,t,l,n=s[2],o=[];for(let r=0;r<n.length;r+=1)o[r]=ze(He(s,n,r));return{c(){e=I("select");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=L(r,"SELECT",{class:!0});var u=$(e);for(let i=0;i<o.length;i+=1)o[i].l(u);u.forEach(m),this.h()},h(){k(e,"class","select select-bordered w-full max-w-md mb-1 lg:mb-0 focus:outline-none"),s[0]===void 0&&ve(()=>s[7].call(e))},m(r,u){B(r,e,u);for(let i=0;i<o.length;i+=1)o[i].m(e,null);fe(e,s[0]),t||(l=X(e,"change",s[7]),t=!0)},p(r,u){if(u&4){n=r[2];let i;for(i=0;i<n.length;i+=1){const h=He(r,n,i);o[i]?o[i].p(h,u):(o[i]=ze(h),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}u&5&&fe(e,r[0])},d(r){r&&m(e),re(o,r),t=!1,l()}}}function ze(s){let e,t=s[9].T.split(" ",2)[1]+"",l,n;return{c(){e=I("option"),l=F(t),this.h()},l(o){e=L(o,"OPTION",{});var r=$(e);l=D(r,t),r.forEach(m),this.h()},h(){e.__value=n=s[9],e.value=e.__value},m(o,r){B(o,e,r),v(e,l)},p(o,r){r&4&&t!==(t=o[9].T.split(" ",2)[1]+"")&&ue(l,t),r&4&&n!==(n=o[9])&&(e.__value=n,e.value=e.__value)},d(o){o&&m(e)}}}function Xt(s){let e,t;return e=new ft({props:{selectedBook:s[1]}}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const o={};n&2&&(o.selectedBook=l[1]),e.$set(o)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Yt(s){let e,t;return e=new ft({props:{selectedBook:s[0]}}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const o={};n&1&&(o.selectedBook=l[0]),e.$set(o)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Zt(s){let e,t,l,n,o=s[1]!=null&&ie(s[1]),r,u,i,h,_,a,f,c,p,E=s[4],b=[];for(let T=0;T<E.length;T+=1)b[T]=We(Ue(s,E,T));let V=o&&qe(s);const P=[Yt,Xt],N=[];function y(T,g){return g&2&&(h=null),T[1]!=null&&T[0]?0:(h==null&&(h=!!(T[1]!=null&&Jt(T[1]))),h?1:-1)}return~(_=y(s,-1))&&(a=N[_]=P[_](s)),{c(){e=I("div"),t=I("div"),l=I("select");for(let T=0;T<b.length;T+=1)b[T].c();n=C(),V&&V.c(),r=C(),u=I("input"),i=C(),a&&a.c(),this.h()},l(T){e=L(T,"DIV",{class:!0});var g=$(e);t=L(g,"DIV",{});var d=$(t);l=L(d,"SELECT",{class:!0});var S=$(l);for(let w=0;w<b.length;w+=1)b[w].l(S);S.forEach(m),n=M(d),V&&V.l(d),r=M(d),u=L(d,"INPUT",{class:!0,placeholder:!0,type:!0}),d.forEach(m),i=M(g),a&&a.l(g),g.forEach(m),this.h()},h(){k(l,"class","select select-bordered w-full max-w-md mb-1 lg:mb-0 focus:outline-none"),s[1]===void 0&&ve(()=>s[6].call(l)),k(u,"class","input input-bordered w-full max-w-md mb-1 focus:outline-none"),k(u,"placeholder","Suche"),k(u,"type","search"),k(e,"class","flex flex-col overflow-hidden w-full h-full p-1")},m(T,g){B(T,e,g),v(e,t),v(t,l);for(let d=0;d<b.length;d+=1)b[d].m(l,null);fe(l,s[1]),v(t,n),V&&V.m(t,null),v(t,r),v(t,u),Ne(u,s[3]),v(e,i),~_&&N[_].m(e,null),f=!0,c||(p=[X(l,"change",s[6]),X(u,"input",s[8])],c=!0)},p(T,[g]){if(g&16){E=T[4];let S;for(S=0;S<E.length;S+=1){const w=Ue(T,E,S);b[S]?b[S].p(w,g):(b[S]=We(w),b[S].c(),b[S].m(l,null))}for(;S<b.length;S+=1)b[S].d(1);b.length=E.length}g&18&&fe(l,T[1]),g&2&&(o=T[1]!=null&&ie(T[1])),o?V?V.p(T,g):(V=qe(T),V.c(),V.m(t,r)):V&&(V.d(1),V=null),g&8&&Ne(u,T[3]);let d=_;_=y(T,g),_===d?~_&&N[_].p(T,g):(a&&(ke(),q(N[d],1,1,()=>{N[d]=null}),we()),~_?(a=N[_],a?a.p(T,g):(a=N[_]=P[_](T),a.c()),W(a,1),a.m(e,null)):a=null)},i(T){f||(W(a),f=!0)},o(T){q(a),f=!1},d(T){T&&m(e),re(b,T),V&&V.d(),~_&&N[_].d(),c=!1,kt(p)}}}function ie(s){return s.hasOwnProperty("F")}function Jt(s){return!ie(s)}function Qt(s,e,t){let l,n,o,r,u;J(s,ae,f=>t(0,n=f)),J(s,at,f=>t(5,o=f)),J(s,Ce,f=>t(1,r=f)),J(s,he,f=>t(3,u=f));const i=[...o.filter(f=>!Me.some(c=>f.T.startsWith(c.F))),...Me];function h(){r=ye(this),Ce.set(r),t(4,i)}function _(){n=ye(this),ae.set(n),t(2,l),t(1,r),t(5,o)}function a(){u=this.value,he.set(u)}return s.$$.update=()=>{if(s.$$.dirty&34&&t(2,l=r&&ie(r)?o.filter(f=>f.T.startsWith(r.F)):new Array),s.$$.dirty&35)if(r&&ie(r)){const f=r.F;(!n||!n.T.startsWith(f))&&Be(ae,n=o.filter(c=>c.T.startsWith(f))[0],n)}else Be(ae,n=null,n)},[n,r,l,u,i,o,h,_,a]}class xt extends te{constructor(e){super(),le(this,e,Qt,Zt,se,{})}}function el(s){let e,t,l,n,o;return{c(){e=I("a"),t=F("volume_up"),l=C(),n=I("a"),o=F("settings"),this.h()},l(r){e=L(r,"A",{class:!0,href:!0});var u=$(e);t=D(u,"volume_up"),u.forEach(m),l=M(r),n=L(r,"A",{class:!0,href:!0});var i=$(n);o=D(i,"settings"),i.forEach(m),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle"),k(e,"href","/music"),k(n,"class","material-symbols-outlined btn btn-sm btn-circle"),k(n,"href","#settings")},m(r,u){B(r,e,u),v(e,t),B(r,l,u),B(r,n,u),v(n,o)},p:x,d(r){r&&m(e),r&&m(l),r&&m(n)}}}function tl(s){let e,t,l,n;return e=new _e({props:{title:"Geistliche Lieder!",withCloseButton:!1,$$slots:{default:[el]},$$scope:{ctx:s}}}),l=new xt({}),{c(){K(e.$$.fragment),t=C(),K(l.$$.fragment)},l(o){j(e.$$.fragment,o),t=M(o),j(l.$$.fragment,o)},m(o,r){G(e,o,r),B(o,t,r),G(l,o,r),n=!0},p(o,[r]){const u={};r&1&&(u.$$scope={dirty:r,ctx:o}),e.$set(u)},i(o){n||(W(e.$$.fragment,o),W(l.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),q(l.$$.fragment,o),n=!1},d(o){Y(e,o),o&&m(t),Y(l,o)}}}class ll extends te{constructor(e){super(),le(this,e,null,tl,se,{})}}ne.disable_scroll_handling;const ut=ne.goto;ne.invalidate;ne.invalidateAll;ne.prefetch;ne.prefetch_routes;ne.before_navigate;ne.after_navigate;function Ke(s,e,t){const l=s.slice();return l[20]=e[t],l}function je(s,e,t){const l=s.slice();return l[23]=e[t],l[25]=t,l}function Ge(s,e,t){const l=s.slice();return l[26]=e[t],l}function Xe(s){let e,t,l,n;return{c(){e=I("button"),t=F("music_note"),this.h()},l(o){e=L(o,"BUTTON",{class:!0});var r=$(e);t=D(r,"music_note"),r.forEach(m),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,r){B(o,e,r),v(e,t),l||(n=X(e,"click",s[10]),l=!0)},p:x,d(o){o&&m(e),l=!1,n()}}}function Ye(s){let e,t,l,n;return{c(){e=I("button"),t=F("translate"),this.h()},l(o){e=L(o,"BUTTON",{class:!0});var r=$(e);t=D(r,"translate"),r.forEach(m),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,r){B(o,e,r),v(e,t),l||(n=X(e,"click",s[9]),l=!0)},p:x,d(o){o&&m(e),l=!1,n()}}}function Ze(s){let e,t,l,n;return{c(){e=I("button"),t=F("subtitles"),this.h()},l(o){e=L(o,"BUTTON",{class:!0});var r=$(e);t=D(r,"subtitles"),r.forEach(m),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,r){B(o,e,r),v(e,t),l||(n=X(e,"click",s[8]),l=!0)},p:x,d(o){o&&m(e),l=!1,n()}}}function sl(s){let e,t,l,n,o,r,u,i,h=s[15],_=[];for(let a=0;a<h.length;a+=1)_[a]=Je(Ge(s,h,a));return{c(){e=I("div"),t=I("button"),l=F("list"),n=C(),o=I("ul"),r=I("li"),u=F("Versionen:"),i=C();for(let a=0;a<_.length;a+=1)_[a].c();this.h()},l(a){e=L(a,"DIV",{class:!0});var f=$(e);t=L(f,"BUTTON",{class:!0});var c=$(t);l=D(c,"list"),c.forEach(m),n=M(f),o=L(f,"UL",{tabindex:!0,class:!0});var p=$(o);r=L(p,"LI",{class:!0});var E=$(r);u=D(E,"Versionen:"),E.forEach(m),i=M(p);for(let b=0;b<_.length;b+=1)_[b].l(p);p.forEach(m),f.forEach(m),this.h()},h(){k(t,"class","material-symbols-outlined btn btn-sm btn-circle"),k(r,"class","capitalize"),k(o,"tabindex","0"),k(o,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72 lg:w-96"),k(e,"class","btn btn-sm btn-circle dropdown dropdown-end")},m(a,f){B(a,e,f),v(e,t),v(t,l),v(e,n),v(e,o),v(o,r),v(r,u),v(o,i);for(let c=0;c<_.length;c+=1)_[c].m(o,null)},p(a,f){if(f&57346){h=a[15];let c;for(c=0;c<h.length;c+=1){const p=Ge(a,h,c);_[c]?_[c].p(p,f):(_[c]=Je(p),_[c].c(),_[c].m(o,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=h.length}},d(a){a&&m(e),re(_,a)}}}function Je(s){let e,t,l,n,o,r,u=s[13](s[26])+"",i,h,_,a;function f(){return s[19](s[26])}return{c(){e=I("li"),t=I("label"),l=I("input"),o=C(),r=I("button"),i=F(u),h=C(),this.h()},l(c){e=L(c,"LI",{});var p=$(e);t=L(p,"LABEL",{});var E=$(t);l=L(E,"INPUT",{type:!0}),o=M(E),r=L(E,"BUTTON",{class:!0});var b=$(r);i=D(b,u),b.forEach(m),E.forEach(m),h=M(p),p.forEach(m),this.h()},h(){k(l,"type","radio"),l.checked=n=s[26]===s[1].I,k(r,"class","text-start")},m(c,p){B(c,e,p),v(e,t),v(t,l),v(t,o),v(t,r),v(r,i),v(e,h),_||(a=X(e,"click",f),_=!0)},p(c,p){s=c,p&2&&n!==(n=s[26]===s[1].I)&&(l.checked=n)},d(c){c&&m(e),_=!1,a()}}}function nl(s){let e,t,l,n,o,r,u,i,h,_,a,f,c,p,E,b,V,P=s[6]&&Xe(s),N=s[1].M&&Ye(s),y=s[1].M&&Ze(s),T=s[16]&&sl(s);return{c(){e=I("a"),t=F("play_arrow"),n=C(),o=I("label"),r=F("info"),u=C(),i=I("button"),h=F("star"),a=C(),P&&P.c(),f=C(),N&&N.c(),c=C(),y&&y.c(),p=C(),T&&T.c(),E=ee(),this.h()},l(g){e=L(g,"A",{class:!0,href:!0});var d=$(e);t=D(d,"play_arrow"),d.forEach(m),n=M(g),o=L(g,"LABEL",{for:!0,class:!0});var S=$(o);r=D(S,"info"),S.forEach(m),u=M(g),i=L(g,"BUTTON",{class:!0});var w=$(i);h=D(w,"star"),w.forEach(m),a=M(g),P&&P.l(g),f=M(g),N&&N.l(g),c=M(g),y&&y.l(g),p=M(g),T&&T.l(g),E=ee(),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle"),k(e,"href",l=`#song/${s[0]}/0`),k(o,"for","song-info"),k(o,"class","material-symbols-outlined btn btn-sm btn-circle"),k(i,"class",_=`material-symbols-outlined btn btn-sm btn-circle ${s[7]?"material-symbols-filled":""}`)},m(g,d){B(g,e,d),v(e,t),B(g,n,d),B(g,o,d),v(o,r),B(g,u,d),B(g,i,d),v(i,h),B(g,a,d),P&&P.m(g,d),B(g,f,d),N&&N.m(g,d),B(g,c,d),y&&y.m(g,d),B(g,p,d),T&&T.m(g,d),B(g,E,d),b||(V=X(i,"click",s[11]),b=!0)},p(g,d){d&1&&l!==(l=`#song/${g[0]}/0`)&&k(e,"href",l),d&128&&_!==(_=`material-symbols-outlined btn btn-sm btn-circle ${g[7]?"material-symbols-filled":""}`)&&k(i,"class",_),g[6]?P?P.p(g,d):(P=Xe(g),P.c(),P.m(f.parentNode,f)):P&&(P.d(1),P=null),g[1].M?N?N.p(g,d):(N=Ye(g),N.c(),N.m(c.parentNode,c)):N&&(N.d(1),N=null),g[1].M?y?y.p(g,d):(y=Ze(g),y.c(),y.m(p.parentNode,p)):y&&(y.d(1),y=null),g[16]&&T.p(g,d)},d(g){g&&m(e),g&&m(n),g&&m(o),g&&m(u),g&&m(i),g&&m(a),P&&P.d(g),g&&m(f),N&&N.d(g),g&&m(c),y&&y.d(g),g&&m(p),T&&T.d(g),g&&m(E),b=!1,V()}}}function Qe(s){let e,t=ce(s[23],s[4])+"",l;return{c(){e=I("p"),this.h()},l(n){e=L(n,"P",{class:!0});var o=$(e);o.forEach(m),this.h()},h(){k(e,"class",l=`w-full ${s[12](s[20],s[25])}`)},m(n,o){B(n,e,o),e.innerHTML=t},p(n,o){o&18&&t!==(t=ce(n[23],n[4])+"")&&(e.innerHTML=t),o&2&&l!==(l=`w-full ${n[12](n[20],n[25])}`)&&k(e,"class",l)},d(n){n&&m(e)}}}function xe(s){let e,t=(!s[1].M||s[25]===s[20].L.length-1&&s[3]||s[25]%2===0||s[25]!==s[20].L.length-1&&s[2])&&Qe(s);return{c(){t&&t.c(),e=ee()},l(l){t&&t.l(l),e=ee()},m(l,n){t&&t.m(l,n),B(l,e,n)},p(l,n){!l[1].M||l[25]===l[20].L.length-1&&l[3]||l[25]%2===0||l[25]!==l[20].L.length-1&&l[2]?t?t.p(l,n):(t=Qe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&m(e)}}}function et(s){let e,t,l=s[20].T+"",n,o,r,u=s[20].L,i=[];for(let h=0;h<u.length;h+=1)i[h]=xe(je(s,u,h));return{c(){e=I("div"),t=I("p"),n=F(l),o=C();for(let h=0;h<i.length;h+=1)i[h].c();r=C(),this.h()},l(h){e=L(h,"DIV",{class:!0});var _=$(e);t=L(_,"P",{class:!0});var a=$(t);n=D(a,l),a.forEach(m),o=M(_);for(let f=0;f<i.length;f+=1)i[f].l(_);r=M(_),_.forEach(m),this.h()},h(){k(t,"class","font-bold"),k(e,"class","w-full pt-2")},m(h,_){B(h,e,_),v(e,t),v(t,n),v(e,o);for(let a=0;a<i.length;a+=1)i[a].m(e,null);v(e,r)},p(h,_){if(_&2&&l!==(l=h[20].T+"")&&ue(n,l),_&4126){u=h[20].L;let a;for(a=0;a<u.length;a+=1){const f=je(h,u,a);i[a]?i[a].p(f,_):(i[a]=xe(f),i[a].c(),i[a].m(e,r))}for(;a<i.length;a+=1)i[a].d(1);i.length=u.length}},d(h){h&&m(e),re(i,h)}}}function ol(s){let e,t,l,n,o,r,u,i,h,_,a=s[1].T+"",f,c,p,E,b,V,P,N,y;t=new _e({props:{title:s[1].T,withCloseButton:!0,$$slots:{default:[nl]},$$scope:{ctx:s}}});let T=s[1].V,g=[];for(let d=0;d<T.length;d+=1)g[d]=et(Ke(s,T,d));return{c(){e=I("div"),K(t.$$.fragment),l=C(),n=I("div");for(let d=0;d<g.length;d+=1)g[d].c();o=C(),r=I("input"),u=C(),i=I("div"),h=I("div"),_=I("h3"),f=F(a),c=C(),p=I("p"),E=F(s[5]),b=C(),V=I("div"),P=I("label"),N=F("Ok"),this.h()},l(d){e=L(d,"DIV",{class:!0});var S=$(e);j(t.$$.fragment,S),l=M(S),n=L(S,"DIV",{class:!0});var w=$(n);for(let Z=0;Z<g.length;Z+=1)g[Z].l(w);w.forEach(m),o=M(S),r=L(S,"INPUT",{type:!0,id:!0,class:!0}),u=M(S),i=L(S,"DIV",{class:!0});var O=$(i);h=L(O,"DIV",{class:!0});var H=$(h);_=L(H,"H3",{class:!0});var A=$(_);f=D(A,a),A.forEach(m),c=M(H),p=L(H,"P",{class:!0});var U=$(p);E=D(U,s[5]),U.forEach(m),b=M(H),V=L(H,"DIV",{class:!0});var R=$(V);P=L(R,"LABEL",{for:!0,class:!0});var Q=$(P);N=D(Q,"Ok"),Q.forEach(m),R.forEach(m),H.forEach(m),O.forEach(m),S.forEach(m),this.h()},h(){k(n,"class","overflow-auto flex flex-col items-center w-full md:max-w-2xl"),k(r,"type","checkbox"),k(r,"id","song-info"),k(r,"class","modal-toggle"),k(_,"class","font-bold text-lg"),k(p,"class","py-4 whitespace-pre-wrap text-left"),k(P,"for","song-info"),k(P,"class","btn uppercase"),k(V,"class","modal-action"),k(h,"class","modal-box"),k(i,"class","modal"),k(e,"class","flex-1 flex flex-col items-center overflow-hidden w-full")},m(d,S){B(d,e,S),G(t,e,null),v(e,l),v(e,n);for(let w=0;w<g.length;w+=1)g[w].m(n,null);v(e,o),v(e,r),v(e,u),v(e,i),v(i,h),v(h,_),v(_,f),v(h,c),v(h,p),v(p,E),v(h,b),v(h,V),v(V,P),v(P,N),y=!0},p(d,[S]){const w={};if(S&2&&(w.title=d[1].T),S&536871107&&(w.$$scope={dirty:S,ctx:d}),t.$set(w),S&4126){T=d[1].V;let O;for(O=0;O<T.length;O+=1){const H=Ke(d,T,O);g[O]?g[O].p(H,S):(g[O]=et(H),g[O].c(),g[O].m(n,null))}for(;O<g.length;O+=1)g[O].d(1);g.length=T.length}(!y||S&2)&&a!==(a=d[1].T+"")&&ue(f,a),(!y||S&32)&&ue(E,d[5])},i(d){y||(W(t.$$.fragment,d),y=!0)},o(d){q(t.$$.fragment,d),y=!1},d(d){d&&m(e),Y(t),re(g,d)}}}function rl(s,e,t){let l,n,o,r;J(s,Ie,d=>t(17,o=d)),J(s,at,d=>t(18,r=d));let{songId:u}=e,i=o.find(d=>d.I===u),h=pe(),_=be(),a=Pe();function f(){$t(),t(2,h=pe())}function c(){St(),t(3,_=be())}function p(){Vt(),t(4,a=Pe())}function E(){it(i.I),t(7,l=!l)}function b(d,S){return i.M?S===d.L.length-1?"text-green-600":S%2===1?"text-yellow-600":"":""}let V="";const P=d=>r.filter(w=>w.S.some(O=>O.V===d)).map(w=>w.T).join(", "),N=d=>{ut(`#song/${d}`,{replaceState:!0})},y=o.filter(d=>d.T===i.T).map(d=>d.I),T=y.length>1,g=d=>N(d);return s.$$set=d=>{"songId"in d&&t(0,u=d.songId)},s.$$.update=()=>{if(s.$$.dirty&131073&&t(1,i=o.find(d=>d.I===u)),s.$$.dirty&262146){let d=new Array;i.N!=null&&i.N.trim()!==""&&d.push(`Tonart: ${i.N}`);for(const S of r){const w=S.S.find(O=>O.V===i.I);w&&d.push(`${S.T}: ${w.I}`)}t(5,V=d.join(`
`))}s.$$.dirty&1&&t(7,l=rt(u)),s.$$.dirty&2&&t(6,n=i.V.some(d=>d.L.some(S=>S.includes("{"))))},[u,i,h,_,a,V,n,l,f,c,p,E,b,P,N,y,T,o,r,g]}class il extends te{constructor(e){super(),le(this,e,rl,ol,se,{songId:0})}}const{document:al}=wt;function tt(s,e,t){const l=s.slice();return l[13]=e[t],l[15]=t,l}function lt(s){let e,t,l,n;return{c(){e=I("button"),t=F("arrow_back"),this.h()},l(o){e=L(o,"BUTTON",{class:!0});var r=$(e);t=D(r,"arrow_back"),r.forEach(m),this.h()},h(){k(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,r){B(o,e,r),v(e,t),l||(n=X(e,"click",s[9]),l=!0)},p:x,d(o){o&&m(e),l=!1,n()}}}function fl(s){let e,t=s[0]>0&&lt(s);return{c(){t&&t.c(),e=ee()},l(l){t&&t.l(l),e=ee()},m(l,n){t&&t.m(l,n),B(l,e,n)},p(l,n){l[0]>0?t?t.p(l,n):(t=lt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&m(e)}}}function st(s){let e,t=ce(s[13],!1)+"",l;return{c(){e=I("p"),this.h()},l(n){e=L(n,"P",{class:!0});var o=$(e);o.forEach(m),this.h()},h(){k(e,"class",l=`w-full ${s[6](s[1],s[15])} text-3xl`)},m(n,o){B(n,e,o),e.innerHTML=t},p(n,o){o&2&&t!==(t=ce(n[13],!1)+"")&&(e.innerHTML=t),o&2&&l!==(l=`w-full ${n[6](n[1],n[15])} text-3xl`)&&k(e,"class",l)},d(n){n&&m(e)}}}function nt(s){let e,t=(!s[2].M||s[15]===s[1].L.length-1&&s[5]||s[15]%2===0||s[15]!==s[1].L.length-1&&s[4])&&st(s);return{c(){t&&t.c(),e=ee()},l(l){t&&t.l(l),e=ee()},m(l,n){t&&t.m(l,n),B(l,e,n)},p(l,n){!l[2].M||l[15]===l[1].L.length-1&&l[5]||l[15]%2===0||l[15]!==l[1].L.length-1&&l[4]?t?t.p(l,n):(t=st(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&m(e)}}}function ot(s){let e,t;return{c(){e=I("p"),t=F("-----"),this.h()},l(l){e=L(l,"P",{class:!0});var n=$(e);t=D(n,"-----"),n.forEach(m),this.h()},h(){k(e,"class","w-full text-3xl")},m(l,n){B(l,e,n),v(e,t)},d(l){l&&m(e)}}}function ul(s){let e,t,l,n,o,r,u,i,h;l=new _e({props:{title:s[2].T,withCloseButton:!0,$$slots:{default:[fl]},$$scope:{ctx:s}}});let _=s[1].L,a=[];for(let c=0;c<_.length;c+=1)a[c]=nt(tt(s,_,c));let f=s[3]-1===s[0]&&ot();return{c(){e=C(),t=I("div"),K(l.$$.fragment),n=C(),o=I("div");for(let c=0;c<a.length;c+=1)a[c].c();r=C(),f&&f.c(),this.h()},l(c){e=M(c),t=L(c,"DIV",{id:!0,class:!0});var p=$(t);j(l.$$.fragment,p),n=M(p),o=L(p,"DIV",{class:!0});var E=$(o);for(let b=0;b<a.length;b+=1)a[b].l(E);r=M(E),f&&f.l(E),E.forEach(m),p.forEach(m),this.h()},h(){k(o,"class","overflow-auto flex flex-col items-center w-full h-full"),k(t,"id","song"),k(t,"class","flex-1 flex flex-col items-center overflow-hidden w-full")},m(c,p){B(c,e,p),B(c,t,p),G(l,t,null),v(t,n),v(t,o);for(let E=0;E<a.length;E+=1)a[E].m(o,null);v(o,r),f&&f.m(o,null),u=!0,i||(h=X(al.body,"click",s[7]),i=!0)},p(c,[p]){const E={};if(p&65537&&(E.$$scope={dirty:p,ctx:c}),l.$set(E),p&118){_=c[1].L;let b;for(b=0;b<_.length;b+=1){const V=tt(c,_,b);a[b]?a[b].p(V,p):(a[b]=nt(V),a[b].c(),a[b].m(o,r))}for(;b<a.length;b+=1)a[b].d(1);a.length=_.length}c[3]-1===c[0]?f||(f=ot(),f.c(),f.m(o,null)):f&&(f.d(1),f=null)},i(c){u||(W(l.$$.fragment,c),u=!0)},o(c){q(l.$$.fragment,c),u=!1},d(c){c&&m(e),c&&m(t),Y(l),re(a,c),f&&f.d(),i=!1,h()}}}function cl(s,e,t){let l,n;J(s,Ie,b=>t(10,n=b));let{songId:o}=e,{verseIndex:r}=e;const u=n.find(b=>b.I===o),i=u.O.flatMap(b=>u.V.filter(V=>V.I===b)),h=i.length,_=pe(),a=be();function f(b,V){return u.M?V===b.L.length-1?"text-green-600":V%2===1?"text-yellow-600":"":""}function c(){window.history.go(-(r+1))}function p(){if(r===h-1){c();return}ut(`#song/${o}/${r+1}`)}Te(()=>{if(Nt())return;const b=document.getElementById("song");b==null||b.requestFullscreen(),screen.orientation.lock("landscape")});const E=b=>{b.stopPropagation(),window.history.go(-1)};return s.$$set=b=>{"songId"in b&&t(8,o=b.songId),"verseIndex"in b&&t(0,r=b.verseIndex)},s.$$.update=()=>{s.$$.dirty&1&&t(1,l=i[r])},[r,l,u,h,_,a,f,p,o,E]}class hl extends te{constructor(e){super(),le(this,e,cl,ul,se,{songId:8,verseIndex:0})}}function _l(s){let e,t;return e=new Mt({}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p:x,i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function dl(s){let e,t;return e=new il({props:{songId:s[0]}}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const o={};n&1&&(o.songId=l[0]),e.$set(o)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function gl(s){let e,t;return e=new hl({props:{songId:s[0],verseIndex:s[2]}}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const o={};n&1&&(o.songId=l[0]),n&4&&(o.verseIndex=l[2]),e.$set(o)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function ml(s){let e,t;return e=new ll({}),{c(){K(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p:x,i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function pl(s){let e,t,l,n;const o=[ml,gl,dl,_l],r=[];function u(i,h){return i[1].url.hash===""?0:i[0]!=null&&i[2]!=null?1:i[0]!=null?2:i[1].url.hash==="#settings"?3:-1}return~(e=u(s))&&(t=r[e]=o[e](s)),{c(){t&&t.c(),l=ee()},l(i){t&&t.l(i),l=ee()},m(i,h){~e&&r[e].m(i,h),B(i,l,h),n=!0},p(i,[h]){let _=e;e=u(i),e===_?~e&&r[e].p(i,h):(t&&(ke(),q(r[_],1,1,()=>{r[_]=null}),we()),~e?(t=r[e],t?t.p(i,h):(t=r[e]=o[e](i),t.c()),W(t,1),t.m(l.parentNode,l)):t=null)},i(i){n||(W(t),n=!0)},o(i){q(t),n=!1},d(i){~e&&r[e].d(i),i&&m(l)}}}function bl(s,e,t){let l,n,o;return J(s,Tt,r=>t(1,o=r)),Te(async()=>{let r;return"wakeLock"in navigator&&(r=await navigator.wakeLock.request("screen")),()=>r.release()}),s.$$.update=()=>{s.$$.dirty&2&&t(0,l=o.url.hash.startsWith("#song/")?o.url.hash.substring(6).split("/")[0]:null),s.$$.dirty&3&&t(2,n=o.url.hash.startsWith(`#song/${l}/`)?Number.parseInt(o.url.hash.substring(`#song/${l}/`.length)):null)},[l,o,n]}class El extends te{constructor(e){super(),le(this,e,bl,pl,se,{})}}export{El as default};