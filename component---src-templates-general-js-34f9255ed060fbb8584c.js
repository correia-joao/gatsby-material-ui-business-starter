(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return y});var n=a(0),r=a.n(n),l=a(186),c=a(182),o=a(198),i=a.n(o),u=a(199),s=a.n(u),m=a(200),d=a.n(m),f=a(169),p=a.n(f),E=a(180),h=a(156),y="2169435549";t.default=Object(E.a)(function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,o=a.image.publicURL,u=t.markdownRemark.html;return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:n}),r.a.createElement(i.a,null,r.a.createElement(d.a,{style:{height:"200px"},image:Object(h.c)(o)}),r.a.createElement(s.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:u}}))))})},156:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(34),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.withPrefix});a(170);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},170:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},175:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(56),i=a(2),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},176:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},178:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},180:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(166),i=a(197),u=a.n(i),s=a(206),m=a.n(s),d=a(181),f=a(168),p=a.n(f);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(u.a,null),c.a.createElement(p.a,{implementation:"css"},c.a.createElement(e,this.props))))},a}(c.a.Component)}},181:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(76),a(55),a(37),a(77),a(208);var r=a(188),l=a(166),c=a(209),o=a.n(c),i=a(210),u=a.n(i),s=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(207),a(75))},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(171),i=a(156),u=(a(173),a(174),a(176)),s=a(177),m=a.n(s),d=a(172),f=a.n(d),p=a(167),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(f.a,{style:{color:"#fff"}},c.a.createElement(p.c,null))))},h=function(e){return c.a.createElement(i.b,{query:"240237662",render:function(e){return c.a.createElement(E,{data:e})},data:u})},y=a(178),v=a(192),g=a.n(v),b=a(193),_=a.n(b),M=a(191),k=a.n(M),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onClick:this.handleOpen},c.a.createElement(p.a,{style:{color:"#efefef"}})),c.a.createElement(k.a,{onClickAway:this.handleClose},c.a.createElement(g.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(_.a,null,e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(_.a,null,"Fork me on Github")))))},t}(c.a.Component),C=function(e){return c.a.createElement(i.b,{query:"709782962",render:function(t){return c.a.createElement(x,{active:e.active,data:t})},data:y})},w=a(168),P=a.n(w),j=a(179),N=a.n(j),I=a(195),O=a.n(I),T=a(194),q=a.n(T),R=a(169),S=a.n(R),A=a(190),L=a.n(A),B=a(185),F=a.n(B),U=function(e){return c.a.createElement(q.a,{id:"appBar"},c.a.createElement(O.a,null,c.a.createElement(N.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},c.a.createElement(N.a,{item:!0},c.a.createElement(L.a,{id:"logo",variant:"outlined",avatar:c.a.createElement(F.a,{id:"logoIcon"},c.a.createElement(p.d,null)),label:c.a.createElement(i.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),c.a.createElement(N.a,{item:!0},c.a.createElement(P.a,{smDown:!0},c.a.createElement(S.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},c.a.createElement(h,null))),c.a.createElement(P.a,{mdUp:!0},c.a.createElement(C,null)))),c.a.createElement(N.a,{item:!0})))},G=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(U,{data:e})},data:o})},D=a(196),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),c.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},c.a.createElement("span",null,c.a.createElement(S.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",c.a.createElement(P.a,{only:["xs","sm"]},"–"),c.a.createElement(P.a,{only:["xl","lg","md"]},c.a.createElement("br",null))," ",r," – ",l,c.a.createElement("br",null),"·",c.a.createElement("br",null),"Starter created by"," ",c.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},H=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(z,{data:e})},data:o})},Q=a(205),V=(a(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null),c.a.createElement(Q.a,{container:!0,direction:"row",justify:"center",style:{marginTop:94}},c.a.createElement(Q.a,{item:!0,style:{maxWidth:"calc(1136px - 60px)",width:"calc(100% - 60px)"}},t?c.a.createElement(Q.b,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,c.a.createElement(H,null))))},t}(c.a.Component));t.a=V},186:function(e,t,a){"use strict";var n=a(187),r=a(0),l=a.n(r),c=a(211),o=a.n(c),i=a(156),u=function(e){return l.a.createElement(i.b,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},198:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(217))},199:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(219))},200:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(218))},217:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(74)),l=n(a(154)),c=n(a(0)),o=(n(a(155)),n(a(158))),i=n(a(184)),u=n(a(157)),s={root:{overflow:"hidden"}};function m(e){var t=e.classes,a=e.className,n=e.raised,u=(0,l.default)(e,["classes","className","raised"]);return c.default.createElement(i.default,(0,r.default)({className:(0,o.default)(t.root,a),elevation:n?8:1},u))}t.styles=s,m.defaultProps={raised:!1};var d=(0,u.default)(s,{name:"MuiCard"})(m);t.default=d},218:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(35)),l=n(a(74)),c=n(a(154)),o=n(a(0)),i=(n(a(155)),n(a(158))),u=(n(a(165)),a(159),n(a(157))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var m=["video","audio","picture","iframe","img"];function d(e){var t=e.classes,a=e.className,n=e.component,u=e.image,s=e.src,d=e.style,f=(0,c.default)(e,["classes","className","component","image","src","style"]),p=-1!==m.indexOf(n),E=!p&&u?(0,l.default)({backgroundImage:'url("'.concat(u,'")')},d):d;return o.default.createElement(n,(0,l.default)({className:(0,i.default)(t.root,(0,r.default)({},t.media,p),a),style:E,src:p?u||s:void 0},f))}d.defaultProps={component:"div"};var f=(0,u.default)(s,{name:"MuiCardMedia"})(d);t.default=f},219:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(74)),l=n(a(154)),c=n(a(0)),o=(n(a(155)),n(a(158))),i=(a(159),n(a(157))),u={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,i=(0,l.default)(e,["classes","className","component"]);return c.default.createElement(n,(0,r.default)({className:(0,o.default)(t.root,a)},i))}t.styles=u,s.defaultProps={component:"div"};var m=(0,i.default)(u,{name:"MuiCardContent"})(s);t.default=m}}]);
//# sourceMappingURL=component---src-templates-general-js-34f9255ed060fbb8584c.js.map