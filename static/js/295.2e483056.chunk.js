"use strict";(self.webpackChunktonana_landing=self.webpackChunktonana_landing||[]).push([[295],{2295:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(5671),s=n(3144),i=n(7326),r=n(136),o=n(8347),l=n(2791),c=n(9891),d=n(1523),u=n(184),h=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(e){var s;return(0,a.Z)(this,n),(s=t.call(this,e)).scrollSection=function(){var e;s.scrollTargetIds.forEach((function(t,n){window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t)):(s.getNavLinkElement(t).classList.remove(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.remove(s.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===s.scrollTargetIds.length-1&&(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t))}))},s.props=e,s.scrollTargetIds=s.props.scrollTargetIds,s.activeNavClass=s.props.activeNavClass,s.scrollDuration=Number(s.props.scrollDuration)||1e3,s.headerBackground="true"===s.props.headerBackground,s.props.router&&"HashRouter"===s.props.router?(s.homeDefaultLink="#/",s.hashIdentifier="#/#"):(s.homeDefaultLink="/",s.hashIdentifier="#"),s.scrollSection.bind((0,i.Z)(s)),s}return(0,s.Z)(n,[{key:"easeInOutQuad",value:function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var a=this,s=t-e,i=0;!function t(){i+=10;var r=a.easeInOutQuad(i,e,s,n);window.scrollTo(0,r),i<n&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(n){var a=e.getNavToSectionID(t.getAttribute("href"));if(a){var s=document.getElementById(a).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,s,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(n,a){n!==e&&(t.getNavLinkElement(n).classList.remove(t.activeNavClass),t.getNavLinkElement(n).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return(0,u.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}]),n}(l.Component),v=n(7430),f=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(e){var s;return(0,a.Z)(this,n),(s=t.call(this,e)).state={navItems:[{id:1,idnm:"about",navheading:"Docs",href:"https://wiki.tonana.org/"},{id:2,idnm:"events",navheading:"Events",href:"https://wiki.tonana.org/events/we-organize"},{id:3,idnm:"team",navheading:"Team",href:"https://wiki.tonana.org/tonana-defi-hub/dao/developers"},{id:4,idnm:"blog",navheading:"Blog",href:"https://twitter.com/tonana_dao"}],isOpen:!1},s.toggleLine=s.toggleLine.bind((0,i.Z)(s)),s}return(0,s.Z)(n,[{key:"toggleLine",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.state.navItems.map((function(e){return e.idnm}));return(0,u.jsx)(l.Fragment,{children:(0,u.jsx)("header",{id:"topnav",className:"defaultscroll sticky",children:(0,u.jsxs)(c.W2,{children:[(0,u.jsx)(d.rU,{className:"logo",to:"/",children:(0,u.jsx)("img",{src:v.Z,height:"60",alt:""})}),(0,u.jsx)("div",{className:"buy-button",children:(0,u.jsx)("a",{href:"https://app.tonana.org",target:"_blank",rel:"noopener noreferrer",className:"btn btn-app btn-pills",children:"Launch app"})}),(0,u.jsx)("div",{className:"menu-extras",children:(0,u.jsx)("div",{className:"menu-item",children:(0,u.jsx)(d.rU,{to:"#",onClick:this.toggleLine,className:this.state.isOpen?"navbar-toggle open":"navbar-toggle",children:(0,u.jsxs)("div",{className:"lines",children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{})]})})})}),(0,u.jsx)(h,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"false",activeNavClass:"active",children:(0,u.jsx)("div",{id:"navigation",style:{display:this.state.isOpen?"block":"none"},children:(0,u.jsx)("ul",{className:"navigation-menu",children:this.state.navItems.map((function(e,t){return(0,u.jsx)("li",{className:"has-submenu",children:(0,u.jsxs)("a",{href:e.href,target:"_blank",children:[" ",e.navheading]})},t)}))})})})]})})})}}]),n}(l.Component)}}]);
//# sourceMappingURL=295.2e483056.chunk.js.map