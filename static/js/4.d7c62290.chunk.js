(this["webpackJsonpreact-cource"]=this["webpackJsonpreact-cource"]||[]).push([[4],{234:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return s}));var a=function(t){return function(e){if(e&&e.length>t)return"Value more than 20 symbols"}},n=function(t){if(!t)return"Value is empty"},s=function(t){return t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?"Invalid email address":void 0}},235:function(t,e,r){t.exports={error:"input_error__35y1u",inputArea:"input_inputArea__2MuEb"}},240:function(t,e,r){t.exports={wrapper:"UserInfo_wrapper__1S-Xr",wrapper_user_info:"UserInfo_wrapper_user_info__377NL",wrapper_user_location:"UserInfo_wrapper_user_location__2MiUO"}},241:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var a=r(3),n=r(33),s=r(34),i=r(36),o=r(35),c=r(7),u=r(0),p=r(12),j=r(2),l=function(t){return{authorised:t.auth.userData.authoriseStatus}},b=function(t){var e=function(e){Object(i.a)(u,e);var r=Object(o.a)(u);function u(){return Object(n.a)(this,u),r.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.authorised?Object(j.jsx)(t,Object(a.a)({},this.props)):Object(j.jsx)(c.a,{to:"/login"})}}]),u}(u.Component);return Object(p.b)(l)(e)}},242:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r(61);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],a=!0,n=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(c){n=!0,s=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}return r}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},243:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r(3);function n(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}r(0);var s=r(235),i=r.n(s),o=r(2),c=["meta","input"],u=function(t){var e=t.meta,r=t.input,s=n(t,c),u=e.touched&&e.error;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:i.a.inputArea+" "+(u?i.a.error:""),children:Object(o.jsx)("input",Object(a.a)(Object(a.a)({},s),r))}),Object(o.jsx)("div",{className:i.a.error,children:u&&e.error})]})}},256:function(t,e,r){t.exports={wrapper:"MyAvatar_wrapper__tAmxg"}},301:function(t,e,r){t.exports={main:"Main_main__9BS4l"}},302:function(t,e,r){t.exports={wrapper:"Posts_wrapper__3vqnz"}},303:function(t,e,r){t.exports={textArea:"AddMyPost_textArea__VrOgU",text:"AddMyPost_text__1Q5q8"}},304:function(t,e,r){t.exports={wrapper:"Post_wrapper__3kbR4",text:"Post_text__1z0qq"}},316:function(t,e,r){"use strict";r.r(e);var a=r(3),n=r(33),s=r(34),i=r(36),o=r(35),c=r(301),u=r.n(c),p=r(12),j=r(302),l=r.n(j),b=r(0),d=r(59),f=r(111),m=r(303),h=r.n(m),O=r(110),v=r(243),x=r(234),y=r(2),g=Object(x.b)(20);var _=function(t){return Object(y.jsx)("div",{className:h.a.textArea,children:Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(y.jsx)("div",{children:Object(y.jsx)(O.a,{component:v.a,validate:[g,x.c],placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",autoComplete:"off",name:"addMyPost"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{children:"Add post"})})]})})})},S=Object(f.a)({form:"addMyPost"})(_),P=Object(p.b)((function(t){return{myPosts:t.mainBasicPage.myPosts.textMynewMessage}}),{addMyPostMessage:d.a})((function(t){var e=t.addMyPostMessage;return Object(y.jsx)(S,{onSubmit:function(t){e(t.addMyPost)}})})),M=r(304),w=r.n(M);var k=function(t){return Object(y.jsxs)("div",{className:"".concat(w.a.wrapper," ").concat(w.a.text),children:[Object(y.jsx)("img",{src:t.img,alt:"myAvatar"}),t.message]})},A=Object(p.b)((function(t,e){return{img:t.mainBasicPage.myPosts.img,message:e.message}}))(k);var I=function(t){var e=[t.myPosts.messages.map((function(t){return Object(y.jsx)(A,{message:t.message})}))];return Object(y.jsxs)("div",{className:l.a.wrapper,children:[e,Object(y.jsx)(P,{})]})},N=Object(p.b)((function(t){return{myPosts:t.mainBasicPage.myPosts}}))(I),B=r(242),D=r(256),C=r.n(D),U=function(t){var e=Object(b.useState)(!1),r=Object(B.a)(e,2),a=r[0],n=r[1],s=Object(b.useState)(t.myStatus),i=Object(B.a)(s,2),o=i[0],c=i[1],u=function(){n(!a),a&&t.putMyStatus(o)};return Object(y.jsxs)("div",{className:C.a.wrapper,children:[Object(y.jsx)("img",{src:t.img,alt:"myAvatar"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:t.description}),Object(y.jsx)("div",{children:a?Object(y.jsx)("div",{children:Object(y.jsx)("input",{autoFocus:!0,onChange:function(t){c(t.currentTarget.value)},onBlur:u,value:o})}):Object(y.jsx)("div",{children:Object(y.jsx)("span",{onDoubleClick:u,children:t.myStatus||"Haven't status"})})})]})]})},z=function(t){Object(i.a)(r,t);var e=Object(o.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.props.authoriseStatus&&this.props.loadMyStatus(this.props.myId)}},{key:"render",value:function(){return Object(y.jsx)(U,Object(a.a)({},this.props))}}]),r}(b.Component),q=Object(p.b)((function(t){return{img:t.mainBasicPage.myDescription.img,description:t.mainBasicPage.myDescription.description,myStatus:t.mainBasicPage.myDescription.myStatus,myId:t.auth.userData.userId,authoriseStatus:t.auth.userData.authoriseStatus}}),{loadMyStatus:d.c,setMyStatus:d.f,putMyStatus:d.e})(z),F=r(7),E=r(240),V=r.n(E),Z=function(t){return Object(y.jsxs)("div",{className:C.a.wrapper,children:[Object(y.jsx)("div",{children:t.photos?Object(y.jsx)("img",{src:t.photos,alt:"myAvatar"}):Object(y.jsx)("img",{src:"https://vraki.net/sites/default/files/inline/images/10_342.jpg",alt:"myAvatar"})}),Object(y.jsxs)("div",{className:V.a.wrapper,children:[Object(y.jsx)("div",{children:t.fullName}),Object(y.jsx)("div",{children:t.aboutMe?t.aboutMe:"No information about user"}),Object(y.jsx)("div",{children:t.userStatus?t.userStatus:"No information about user status"}),Object(y.jsx)("div",{children:t.contacts?t.contacts:"No information about his contacts"})]})]})},J=r(60),T=function(t){Object(i.a)(r,t);var e=Object(o.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.props.authoriseStatus&&this.props.loadUserProfile(this.props.userId)}},{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[this.props.preloadStatus?Object(y.jsx)(J.a,{}):null,Object(y.jsx)(Z,{fullName:this.props.fullName,aboutMe:this.props.aboutMe,contacts:this.props.contacts.github,photos:this.props.photos,userStatus:this.props.userStatus})]})}}]),r}(b.Component),H=Object(p.b)((function(t){return{fullName:t.mainBasicPage.userIdProfile.fullName,aboutMe:t.mainBasicPage.userIdProfile.aboutMe,contacts:t.mainBasicPage.userIdProfile.contacts,photos:t.mainBasicPage.userIdProfile.photos.large,userStatus:t.mainBasicPage.userIdProfileStatus,preloadStatus:t.usersPage.isFetch,authoriseStatus:t.auth.userData.authoriseStatus}}),{loadUserProfile:d.d})(T);var L=function(t){return Object(y.jsxs)("div",{className:u.a.main,children:[Object(y.jsx)("img",{src:"https://w-dog.ru/wallpapers/9/16/338082645671935/ssha-gavaji-gavajskie-ostrova-kailua-lanikaj-mokulua-ostrova-lanikaj-plyazh-tixij-okean-more-okean-plyazh-nebo-zima-fevral-ade-xopkins-foto.jpg",alt:"peach"}),Object(y.jsxs)(F.d,{children:[Object(y.jsx)(F.b,{path:"/profile/"+t.match.params.userId,children:Object(y.jsx)(H,{userId:t.match.params.userId})}),Object(y.jsx)(F.b,{path:"/profile",children:Object(y.jsx)(q,{})})]}),Object(y.jsx)(N,{})]})},Q=r(30),R=r(241),X=function(t){Object(i.a)(r,t);var e=Object(o.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(y.jsx)(L,Object(a.a)({},this.props))}}]),r}(b.Component);e.default=Object(Q.d)(F.g,R.a,Object(p.b)((function(t){return{authorised:t.auth.userData.authoriseStatus}})))(X)}}]);
//# sourceMappingURL=4.d7c62290.chunk.js.map