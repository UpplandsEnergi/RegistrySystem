(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1666)}])},1666:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),a=n(9008),o=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=o.createContext({}),i=function(e){var t=e.children,a=(0,o.useReducer)((function(e,t){return"setFile"===t.type?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},e,{file:t.content}):e}),{file:null,text:n(5695)}),i=a[0],u=a[1];return(0,r.jsx)(s.Provider,{value:{data:i,dispatch:{setFile:function(e){return u({type:"setFile",content:e})}}},children:t})},u=n(4051),l=n.n(u),h=n(5799),d=n.n(h),x=function(e){var t=e.text;return(0,r.jsx)("div",{className:d().searchBoxTextBox,children:(0,r.jsx)("div",{children:t})})},f=n(7171),p=n(9628),v=n(9208),m=n.n(v),_=function(e){var t=e.value,n=e.onClick;return(0,r.jsx)("div",{className:m().customCheckbox,onClick:n,children:t?(0,r.jsx)(f.Z,{sx:{width:"100%",height:"100%"}}):(0,r.jsx)(p.Z,{})})};function b(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}var B=function(e){var t=e.state,n=e.setState,a=e.onlyShowContent,c=void 0!==a&&a,i=(0,o.useContext)(s).data,u=function(){var e,r=(e=l().mark((function e(r,a){var o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api/database/add",{method:"PUT",body:JSON.stringify({knr:r,value:a})});case 3:return o=e.sent,e.next=6,null===o||void 0===o?void 0:o.json();case 6:(null===(c=e.sent)||void 0===c?void 0:c.result)?n(j({},t,{search:"",match:{type:P.Done,value:null,check:!1}})):n(j({},t,{match:j({},t.match,{type:P.DatabaseError,value:{Status:"Misslyckades Registrera"}})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),n(j({},t,{match:j({},t.match,{type:P.DatabaseError,value:{Status:"Misslyckades Registrera"}})}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){b(o,r,a,c,s,"next",e)}function s(e){b(o,r,a,c,s,"throw",e)}c(void 0)}))});return function(e,t){return r.apply(this,arguments)}}(),h=(0,o.useState)({search:"",match:{type:P.None,value:null,check:!1}}),x=h[0],f=h[1];return(0,r.jsxs)("div",{className:d().searchBoxDisplayContainer,children:[(0,r.jsx)("div",{className:d().searchBoxDisplay,children:Object.keys(t.match.value).map((function(e,n){return(0,r.jsxs)("div",{className:d()[e],children:[(0,r.jsxs)("header",{children:[" ",e+":"," "]}),t.match.value[e]]},n)}))}),!c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:d().registerContainer,children:[(0,r.jsxs)("div",{className:d().registerCheckboxGroup,children:[(0,r.jsx)(_,{value:t.match.check,onClick:function(){return n(j({},t,{match:j({},t.match,{check:!t.match.check})}))}}),i.text.registerCheckboxPrompt]}),(0,r.jsx)("button",{disabled:t.match.check&&x.match.type!==P.Success,onClick:function(){return u(t.match.value["Kund ID"],t.match.check)},children:i.text.registerButtonText})]}),t.match.check&&(0,r.jsx)(w,{label:i.text.additionalInputPrompt,state:x,parentState:t,setState:f,onlyShowContent:!0})]})]})};function k(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}var w=function(e){var t=e.label,n=e.state,a=e.setState,c=e.parentState,i=void 0===c?null:c,u=e.onlyShowContent,h=void 0!==u&&u,f=(0,o.useContext)(s).data,p=function(e,t){return String(e).toLowerCase()===String(t).toLowerCase()},v=function(e){return Object.values(f.file).filter((function(t){return p(t["Org/Pnr"],e)||p(t["Kund ID"],e)}))},m=function(){var e,t=(e=l().mark((function e(t){var r,o,c,s,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=v(t))||!r[0]){e.next=18;break}if(c=r[0]["Kund ID"],!(i&&(null===i||void 0===i||null===(o=i.match)||void 0===o?void 0:o.value)&&p(c,i.match.value["Kund ID"]))){e.next=9;break}a(C({},n,{match:{type:P.MatchingAdditional,value:null,check:!1}})),e.next=16;break;case 9:return e.next=11,fetch("api/database/check",{method:"PUT",body:JSON.stringify({knr:c})});case 11:return s=e.sent,e.next=14,null===s||void 0===s?void 0:s.json();case 14:u=e.sent,a(C({},n,{match:{type:u.success&&!u.result?P.Success:P.Registered,value:r[0],check:!1}}));case 16:e.next=19;break;case 18:a(C({},n,{match:{type:P.Fail,value:null,check:!1}}));case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0),a(C({},n,{match:{type:P.Fail,value:null,check:!1}}));case 25:case"end":return e.stop()}}),e,null,[[0,21]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){k(o,r,a,c,s,"next",e)}function s(e){k(o,r,a,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:d().searchBoxContent,children:[(0,r.jsxs)("div",{className:d().searchBoxContentRow,children:[(0,r.jsx)("div",{className:d().searchBoxPrompt,children:t}),(0,r.jsx)("input",{className:d().searchBoxInput,value:n.search,onChange:function(e){return a(C({},n,{search:e.target.value}))}}),(0,r.jsx)("button",{className:d().searchBoxInputButton,onClick:function(){return m(n.search)},children:f.text.searchButtonText})]}),function(e){switch(e){case P.Success:return(0,r.jsx)(B,{state:n,setState:a,onlyShowContent:h});case P.Fail:return(0,r.jsx)(x,{text:"Matchar ingen kund"});case P.Registered:return(0,r.jsx)(x,{text:"Personen \xe4r redan registrerad"});case P.DatabaseError:return(0,r.jsx)(x,{text:"Misslyckades registrera"});case P.Done:return(0,r.jsx)(x,{text:"Personen \xe4r nu registrerad"});case P.MatchingAdditional:return(0,r.jsx)(x,{text:"Medf\xf6ljare kan inte vara samma"});default:return null}}(n.match.type)]})},P={Success:0,Fail:1,Registered:2,DatabaseError:3,Done:4,MatchingAdditional:5,None:6},N=function(){var e=(0,o.useContext)(s).data,t=(0,o.useState)({search:"",match:{type:P.None,value:null,check:!1}}),n=t[0],a=t[1];return(0,r.jsx)("div",{className:d().searchBoxContainer,children:(0,r.jsxs)("div",{className:d().searchBox,children:[(0,r.jsx)("div",{className:d().searchBoxHeader,children:e.text.searchBoxHeader}),(0,r.jsx)(w,{label:e.text.searchBoxInputPrompt,state:n,setState:a,value:n.search})]})})},S=n(6750),O=n.n(S),F=n(4519),D=function(e){return new Promise((function(t,r){var a={},o=new FileReader,c=n(4105);o.onload=function(e){var n=e.target.result,r=c.read(n,{type:"buffer"});r.SheetNames.forEach((function(e){a[e]=c.utils.sheet_to_json(r.Sheets[e])})),t(a.SumKund)},o.onerror=r,o.readAsArrayBuffer(e)}))};function I(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}var E=function(){var e=(0,o.useContext)(s),t=e.data,n=e.dispatch,a=function(){var e,t=(e=l().mark((function e(t){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(a=t.target.files[0])||void 0===a||null===(r=a.name)||void 0===r?void 0:r.endsWith(".xlsx")){e.next=6;break}t.target.files=[],console.error("failed to read file"),e.next=17;break;case 6:return e.prev=6,e.t0=n,e.next=10,D(a);case 10:e.t1=e.sent,e.t0.setFile.call(e.t0,e.t1),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(6),console.error(e.t2);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){I(o,r,a,c,s,"next",e)}function s(e){I(o,r,a,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:O().uploadFileContainer,children:(0,r.jsxs)("div",{className:O().uploadFile,children:[(0,r.jsx)("input",{className:O().uploadFileInput,type:"file",accept:".xlsx",onChange:a}),(0,r.jsxs)("div",{className:O().uploadFileContent,children:[t.text.uploadPrompt,(0,r.jsx)(F.Z,{sx:{width:"40%",height:"40%"}})]})]})})},R=function(){return(0,o.useContext)(s).data.file?(0,r.jsx)(N,{}):(0,r.jsx)(E,{})},T=n(4456),M=n.n(T);function A(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,o.useEffect)((function(){fetch("api/database/isConnected",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n(Boolean(null===e||void 0===e?void 0:e.connected))})).catch(console.error)}),[]),(0,r.jsxs)("div",{className:M().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Registry System"}),(0,r.jsx)("meta",{name:"Registry System",content:""}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{className:M().main,children:(0,r.jsx)(i,{children:t&&(0,r.jsx)(R,{})})})]})}},4456:function(e){e.exports={container:"Home_container__Ennsq",main:"Home_main__EtNt2"}},9208:function(e){e.exports={customCheckbox:"customCheckbox_customCheckbox__RqoBQ"}},5799:function(e){e.exports={searchBoxContainer:"searchBox_searchBoxContainer__NwgW0",searchBox:"searchBox_searchBox__oIN7A",searchBoxHeader:"searchBox_searchBoxHeader__cj9jV",searchBoxContent:"searchBox_searchBoxContent__xDbcQ",searchBoxContentRow:"searchBox_searchBoxContentRow__DTI8X",searchBoxInput:"searchBox_searchBoxInput__DG1NG",searchBoxInputButton:"searchBox_searchBoxInputButton__a9J9n",searchBoxDisplay:"searchBox_searchBoxDisplay__d1mAv",searchBoxPrompt:"searchBox_searchBoxPrompt__IdEov",registerContainer:"searchBox_registerContainer__44Jl_",registerCheckboxGroup:"searchBox_registerCheckboxGroup__Spz5n",searchBoxTextBox:"searchBox_searchBoxTextBox__wC3BZ",searchBoxDisplayContainer:"searchBox_searchBoxDisplayContainer__0k7O3"}},6750:function(e){e.exports={uploadFileContainer:"uploadFile_uploadFileContainer__NoCTB",uploadFile:"uploadFile_uploadFile__2DGgh",uploadFileContent:"uploadFile_uploadFileContent__W2kVg",uploadFileInput:"uploadFile_uploadFileInput__vxb3b"}},5103:function(){},2061:function(){},5695:function(e){"use strict";e.exports=JSON.parse('{"uploadPrompt":"Ladda upp fil","searchButtonText":"S\xf6k","searchBoxHeader":"Check Registry","searchBoxInputPrompt":"Org/Pnr/Knr:","registerButtonText":"Registrera","registerCheckboxPrompt":"Fullmaktshavare","additionalInputPrompt":"Fullmaktshavare Org/Pnr/Knr:"}')}},function(e){e.O(0,[251,531,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);