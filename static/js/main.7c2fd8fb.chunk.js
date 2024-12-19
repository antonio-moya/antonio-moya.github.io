(this["webpackJsonpantonio-moya-personal-site"]=this["webpackJsonpantonio-moya-personal-site"]||[]).push([[0],{18:function(e,t,a){"use strict";var n=a(0),c=a(15),s=a(3),l=a(12);const{NODE_ENV:i,REACT_APP_GA_TRACKING_ID:o}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0});"production"===i&&l.a.initialize(o);var j=()=>{const{pathname:e}=Object(s.f)();return Object(n.useEffect)((()=>{"production"===i&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},d=a(5);var r=[{index:!0,label:"Antonio Moya",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],b=a(1);const h=Object(n.lazy)((()=>a.e(4).then(a.t.bind(null,168,7))));var O=()=>{const[e,t]=Object(n.useState)(!1);return Object(b.jsxs)("div",{className:"hamburger-container",children:[Object(b.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(b.jsx)("ul",{children:e?Object(b.jsx)("li",{className:"menu close-menu",children:Object(b.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2715"})}):Object(b.jsx)("li",{className:"menu open-menu",children:Object(b.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2630"})})})}),Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(b.Fragment,{}),children:Object(b.jsx)(h,{right:!0,isOpen:e,children:Object(b.jsx)("ul",{className:"hamburger-ul",children:r.map((a=>Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:a.path,onClick:()=>t(!e),children:Object(b.jsx)("h3",{className:a.index&&"index-li",children:a.label})})},a.label)))})})})]})};var m=()=>Object(b.jsxs)("header",{id:"header",children:[Object(b.jsx)("h1",{className:"index-link",children:r.filter((e=>e.index)).map((e=>Object(b.jsx)(d.b,{to:e.path,children:e.label},e.label)))}),Object(b.jsx)("nav",{className:"links",children:Object(b.jsx)("ul",{children:r.filter((e=>!e.index)).map((e=>Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:e.path,children:e.label})},e.label)))})}),Object(b.jsx)(O,{})]}),u=a(20);const{PUBLIC_URL:p}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0});var x=()=>Object(b.jsxs)("section",{id:"sidebar",children:[Object(b.jsxs)("section",{id:"intro",children:[Object(b.jsx)(d.b,{to:"/",className:"logo",children:Object(b.jsx)("img",{src:"".concat(p,"/images/me.png"),alt:""})}),Object(b.jsxs)("header",{children:[Object(b.jsx)("h2",{children:"Antonio Moya"}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"mailto:antonio.moya.diez@gmail.com",children:"antonio.moya.diez@gmail.com"})})]})]}),Object(b.jsxs)("section",{className:"blurb",children:[Object(b.jsx)("h2",{children:"About"}),Object(b.jsxs)("p",{children:["Hola a todos. Mis amigos me llaman To\xf1o y llevo m\xe1s de 20 a\xf1os en el mundo de las ciencias del medio ambiente en general y la hidrolog\xeda en particular. En todo ese tiempo he pasado por todas las modas de ambos mundos. Desde los modelos num\xe9ricos de simulaci\xf3n hasta el aprendizaje autom\xe1tico o la teledetecci\xf3n. Desde el MVC hasta el DDD. Desde el ODBC hasta el NoSQL...",Object(b.jsx)("br",{}),"Durante todo ese camino he trabajo en empresas tanto tecnol\xf3gicas como de ingenier\xeda clasica y he pasado multitud de vicisitudes, desde dejar a toda Espa\xf1a sin Intenet unas horas hasta proyectos de investigaci\xf3n europeos. Mi intenci\xf3n con este sitio web es contar mis aventuras y desventuras, desmitificar las tecnlog\xedas novedosas y, si a alguien le puede servir, explicar qu\xe9 es para mi un buen inform\xe1tico."]}),Object(b.jsx)("ul",{className:"actions",children:Object(b.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(b.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(b.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(b.jsxs)("section",{id:"footer",children:[Object(b.jsx)(u.a,{}),Object(b.jsxs)("p",{className:"copyright",children:["\xa9 Antonio Moya ",Object(b.jsx)(d.b,{to:"/",children:"mldangelo.com"}),"."]})]})]});var g=()=>{const{pathname:e}=Object(s.f)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};const v=e=>Object(b.jsxs)(c.b,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(g,{}),Object(b.jsxs)(c.a,{titleTemplate:"%s | Antonio Moya",defaultTitle:"Antonio Moya",defer:!1,children:[e.title&&Object(b.jsx)("title",{children:e.title}),Object(b.jsx)("meta",{name:"description",content:e.description})]}),Object(b.jsxs)("div",{id:"wrapper",children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(b.jsx)(x,{})]})]});v.defaultProps={children:null,fullPage:!1,title:null,description:"Website personal de Antonio Moya."};t.a=v},20:function(e,t,a){"use strict";a(0);var n=a(24),c=a(25),s=a(26),l=a(27),i=a(28),o=a(29),j=a(30),d=a(31);var r=[{link:"https://github.com/mldangelo",label:"Github",icon:c.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:l.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:i.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:d.faEnvelope}],b=a(1);t.a=()=>Object(b.jsx)("ul",{className:"icons",children:r.map((e=>Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.link,children:Object(b.jsx)(n.a,{icon:e.icon})})},e.label)))})},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(14),l=a(5),i=a(3),o=a(18),j=(a(47),a(1));const{PUBLIC_URL:d}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=Object(n.lazy)((()=>Promise.all([a.e(2),a.e(8)]).then(a.bind(null,165)))),b=Object(n.lazy)((()=>a.e(9).then(a.bind(null,172)))),h=Object(n.lazy)((()=>a.e(10).then(a.bind(null,166)))),O=Object(n.lazy)((()=>a.e(11).then(a.bind(null,167)))),m=Object(n.lazy)((()=>a.e(7).then(a.bind(null,171)))),u=Object(n.lazy)((()=>a.e(6).then(a.bind(null,169)))),p=Object(n.lazy)((()=>a.e(5).then(a.bind(null,170))));var x=()=>Object(j.jsx)(l.a,{basename:d,children:Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(o.a,{}),children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:h}),Object(j.jsx)(i.a,{path:"/about",component:r}),Object(j.jsx)(i.a,{path:"/projects",component:m}),Object(j.jsx)(i.a,{path:"/stats",component:p}),Object(j.jsx)(i.a,{path:"/contact",component:b}),Object(j.jsx)(i.a,{path:"/resume",component:u}),Object(j.jsx)(i.a,{component:O,status:404})]})})});const g=()=>Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),v=document.getElementById("root");v.hasChildNodes()?Object(s.hydrate)(Object(j.jsx)(g,{}),v):Object(s.render)(Object(j.jsx)(g,{}),v)}},[[48,1,3]]]);
//# sourceMappingURL=main.7c2fd8fb.chunk.js.map