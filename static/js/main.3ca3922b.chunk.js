(this["webpackJsonpantonio-moya-personal-site"]=this["webpackJsonpantonio-moya-personal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),a=t(1),i=t(16),l=t(3),s=t(12),o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),r=o.NODE_ENV,j=o.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},d=t(5),u=t(22),h=[{index:!0,label:"Antonio Moya",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],m=Object(a.lazy)((function(){return t.e(5).then(t.t.bind(null,172,7))})),O=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(m,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(O,{})]})},x=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.png"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Antonio Moya"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:antonio.moya.diez@gmail.com",children:"antonio.moya.diez@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hola a todos. Mis amigos me llaman To\xf1o y llevo m\xe1s de 20 a\xf1os en el mundo de las ciencias del medio ambiente en general y la hidrolog\xeda en particular. En todo ese tiempo he pasado por todas las modas de ambos mundos. Desde los modelos num\xe9ricos de simulaci\xf3n hasta el aprendizaje autom\xe1tico o la teledetecci\xf3n. Desde el MVC hasta el DDD. Desde el ODBC hasta el NoSQL...",Object(c.jsx)("br",{}),'Durante todo ese camino he trabajo en empresas tanto tecnol\xf3gicas como de ingenier\xeda clasica y he pasado multitud de vicisitudes, desde dejar a toda Espa\xf1a sin Intenet unas horas hasta proyectos de investigaci\xf3n europeos. Mi intenci\xf3n con este sitio web es contar mis aventuras y desventuras, desmitificar las tecnlog\xedas novedosas y, si a alguien le puede servir, explicar qu\xe9 es para mi un inform\xe1tico "bueno".']}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(x.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Antonio Moya ",Object(c.jsx)(d.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Antonio Moya",defaultTitle:"Antonio Moya",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Website personal de Antonio Moya."};n.a=v},25:function(e,n,t){"use strict";var c=t(0),a=(t(1),t(29)),i=t(30),l=t(31),s=t(32),o=t(33),r=t(34),j=t(35),b=t(36),d=[{link:"https://github.com/mldangelo",label:"Github",icon:i.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:o.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:r.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:b.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),l=t(15),s=t(5),o=t(3),r=t(21),j=(t(49),Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,169))}))),b=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,176))})),d=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,170))})),u=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,171))})),h=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,175))})),m=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,173))})),O=Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,174))})),p=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(o.a,{path:"/about",component:j}),Object(c.jsx)(o.a,{path:"/projects",component:h}),Object(c.jsx)(o.a,{path:"/stats",component:O}),Object(c.jsx)(o.a,{path:"/contact",component:b}),Object(c.jsx)(o.a,{path:"/resume",component:m}),Object(c.jsx)(o.a,{component:u,status:404})]})})})},x=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(x,{}),f):Object(l.render)(Object(c.jsx)(x,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.3ca3922b.chunk.js.map