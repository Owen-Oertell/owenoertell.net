import{S as _,i as f,s as T,k as d,H as y,l as h,h as u,n as t,C as g,B as p}from"./index-9df96e65.js";function E(c){let a,o,i,l,r,e,s;return document.title=a=c[0],{c(){o=d("meta"),i=d("meta"),r=d("meta"),e=d("meta"),s=d("meta"),this.h()},l(m){const n=y("svelte-6riy7c",document.head);o=h(n,"META",{name:!0,content:!0}),i=h(n,"META",{property:!0,content:!0}),r=h(n,"META",{property:!0,content:!0}),e=h(n,"META",{property:!0,content:!0}),s=h(n,"META",{name:!0,content:!0}),n.forEach(u),this.h()},h(){t(o,"name","description"),t(o,"content",c[2]),t(i,"property","og:title"),t(i,"content",l=c[1]??c[0]),t(r,"property","og:description"),t(r,"content",c[2]),t(e,"property","og:image"),t(e,"content","https://www.owenoertell.com/assets/images/image_round_2.png"),t(s,"name","twitter:card"),t(s,"content","summary_large_image")},m(m,n){g(document.head,o),g(document.head,i),g(document.head,r),g(document.head,e),g(document.head,s)},p(m,[n]){n&1&&a!==(a=m[0])&&(document.title=a),n&4&&t(o,"content",m[2]),n&3&&l!==(l=m[1]??m[0])&&t(i,"content",l),n&4&&t(r,"content",m[2])},i:p,o:p,d(m){u(o),u(i),u(r),u(e),u(s)}}}function w(c,a,o){let{title:i}=a,{ogTitle:l=null}=a,{description:r}=a;return c.$$set=e=>{"title"in e&&o(0,i=e.title),"ogTitle"in e&&o(1,l=e.ogTitle),"description"in e&&o(2,r=e.description)},[i,l,r]}class M extends _{constructor(a){super(),f(this,a,w,E,T,{title:0,ogTitle:1,description:2})}}export{M as S};