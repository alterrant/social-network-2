(this["webpackJsonpreact-cource"]=this["webpackJsonpreact-cource"]||[]).push([[4],{234:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var r=function(t){return function(e){if(e&&e.length>t)return"Value more than 20 symbols"}},s=function(t){if(!t)return"Value is empty"},n=function(t){return t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?"Invalid email address":void 0}},235:function(t,e,a){t.exports={error:"input_error__35y1u",inputArea:"input_inputArea__2MuEb"}},240:function(t,e,a){t.exports={wrapper:"UserInfo_wrapper__1S-Xr",wrapper_user_info:"UserInfo_wrapper_user_info__377NL",wrapper_user_location:"UserInfo_wrapper_user_location__2MiUO",avaImage:"UserInfo_avaImage__1mnPn"}},241:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var r=a(3),s=a(33),n=a(34),i=a(36),c=a(35),o=a(7),u=a(0),l=a(12),p=a(2),j=function(t){return{authorised:t.auth.userData.authoriseStatus}},d=function(t){var e=function(e){Object(i.a)(u,e);var a=Object(c.a)(u);function u(){return Object(s.a)(this,u),a.apply(this,arguments)}return Object(n.a)(u,[{key:"render",value:function(){return this.props.authorised?Object(p.jsx)(t,Object(r.a)({},this.props)):Object(p.jsx)(o.a,{to:"/login"})}}]),u}(u.Component);return Object(l.b)(j)(e)}},242:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a(61);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],r=!0,s=!1,n=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!e||a.length!==e);r=!0);}catch(o){s=!0,n=o}finally{try{r||null==c.return||c.return()}finally{if(s)throw n}}return a}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},243:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=a(3);function s(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}a(0);var n=a(235),i=a.n(n),c=a(2),o=["meta","input"],u=function(t){var e=t.meta,a=t.input,n=s(t,o),u=e.touched&&e.error;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:i.a.inputArea+" "+(u?i.a.error:""),children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},n),a))}),Object(c.jsx)("div",{className:i.a.error,children:u&&e.error})]})}},256:function(t,e,a){t.exports={wrapper:"MyAvatar_wrapper__tAmxg",avatarImg:"MyAvatar_avatarImg__2903v",uploadFileInput:"MyAvatar_uploadFileInput__J3tI2",uploadFileLabel:"MyAvatar_uploadFileLabel__3CcCm",uploadFileIcon:"MyAvatar_uploadFileIcon__1celq",uploadFileText:"MyAvatar_uploadFileText__381XR"}},301:function(t,e,a){t.exports={MainThemeImg:"Main_MainThemeImg__1eFb8"}},302:function(t,e,a){t.exports={wrapper:"Posts_wrapper__3vqnz"}},303:function(t,e,a){t.exports={textArea:"AddMyPost_textArea__VrOgU",text:"AddMyPost_text__1Q5q8"}},304:function(t,e,a){t.exports={wrapper:"Post_wrapper__3kbR4",text:"Post_text__1z0qq"}},316:function(t,e,a){"use strict";a.r(e);var r=a(3),s=a(33),n=a(34),i=a(36),c=a(35),o=a(301),u=a.n(o),l=a(12),p=a(302),j=a.n(p),d=a(0),b=a(59),h=a(111),m=a(303),f=a.n(m),O=a(110),v=a(243),x=a(234),g=a(2),y=Object(x.b)(20);var _=function(t){return Object(g.jsx)("div",{className:f.a.textArea,children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{component:v.a,validate:[y,x.c],placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",autoComplete:"off",name:"addMyPost"})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Add post"})})]})})})},P=Object(h.a)({form:"addMyPost"})(_),I=Object(l.b)((function(t){return{myPosts:t.mainBasicPage.myPosts.textMynewMessage}}),{addMyPostMessage:b.a})((function(t){var e=t.addMyPostMessage;return Object(g.jsx)(P,{onSubmit:function(t){e(t.addMyPost)}})})),S=a(304),w=a.n(S);var M=function(t){return Object(g.jsxs)("div",{className:"".concat(w.a.wrapper," ").concat(w.a.text),children:[Object(g.jsx)("img",{src:t.img,alt:"myAvatar"}),t.message]})},A=Object(l.b)((function(t,e){return{img:t.mainBasicPage.myPosts.img,message:e.message}}))(M);var N=function(t){var e=[t.myPosts.messages.map((function(t){return Object(g.jsx)(A,{message:t.message})}))];return Object(g.jsxs)("div",{className:j.a.wrapper,children:[e,Object(g.jsx)(I,{})]})},k=Object(l.b)((function(t){return{myPosts:t.mainBasicPage.myPosts}}))(N),F=a(242),U=a(256),z=a.n(U),B=function(t){var e=Object(d.useState)(!1),a=Object(F.a)(e,2),r=a[0],s=a[1],n=Object(d.useState)(t.myStatus),i=Object(F.a)(n,2),c=i[0],o=i[1],u=function(){s(!r),r&&t.putAuthUserStatus(c)};return Object(g.jsxs)("div",{className:z.a.wrapper,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{className:z.a.avatarImg,src:t.myPhoto||t.img,alt:"myAvatar"}),Object(g.jsxs)("label",{className:z.a.uploadFileLabel,children:[Object(g.jsx)("svg",{className:z.a.uploadFileIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(g.jsx)("path",{d:"M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3\r 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7\r 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0\r 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20\r 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"})}),Object(g.jsx)("span",{className:z.a.uploadFileText,children:"Change avatar"}),Object(g.jsx)("input",{className:z.a.uploadFileInput,type:"file",accept:".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip",onChange:function(e){e.target.files.length&&t.setAuthProfileImage(e.target.files[0])}})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:t.myRealDescription||t.description}),Object(g.jsx)("div",{children:r?Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onChange:function(t){o(t.currentTarget.value)},onBlur:u,value:c})}):Object(g.jsx)("div",{children:Object(g.jsx)("span",{onClick:u,children:c||"Haven't status"})})})]})]})},C=a(18),D=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(g.jsx)(B,Object(r.a)({},this.props))}}]),a}(d.Component),T=Object(l.b)((function(t){return{img:t.mainBasicPage.myDescription.img,description:t.mainBasicPage.myDescription.description,myId:t.auth.userData.userId,authoriseStatus:t.auth.userData.authoriseStatus,myRealDescription:t.auth.authUserIdProfile.aboutMe,myPhoto:t.auth.authUserIdProfile.photos.large,myStatus:t.auth.authUserIdProfile.userStatus}}),{setAuthUserProfileStatus:C.f,putAuthUserStatus:b.d,setAuthProfileImage:b.e,loadUserProfile:b.c})(D),q=a(7),L=a(240),V=a.n(L),R=function(t){return Object(g.jsxs)("div",{className:z.a.wrapper,children:[Object(g.jsx)("div",{children:t.photos?Object(g.jsx)("img",{className:V.a.avaImage,src:t.photos,alt:"myAvatar"}):Object(g.jsx)("img",{className:V.a.avaImage,src:"https://vraki.net/sites/default/files/inline/images/10_342.jpg",alt:"userAvatar"})}),Object(g.jsxs)("div",{className:V.a.wrapper,children:[Object(g.jsx)("div",{children:t.fullName}),Object(g.jsx)("div",{children:t.aboutMe?t.aboutMe:"No information about user"}),Object(g.jsx)("div",{children:t.userStatus?t.userStatus:"No information about user status"}),Object(g.jsx)("div",{children:t.contacts?t.contacts:"No information about his contacts"})]})]})},E=a(60),H=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.authoriseStatus&&this.props.loadUserProfile(this.props.userId)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.preloadStatus?Object(g.jsx)(E.a,{}):null,Object(g.jsx)(R,{fullName:this.props.fullName,aboutMe:this.props.aboutMe,contacts:this.props.contacts.github,photos:this.props.photos,userStatus:this.props.userStatus})]})}}]),a}(d.Component),J=Object(l.b)((function(t){return{fullName:t.mainBasicPage.userIdProfile.fullName,aboutMe:t.mainBasicPage.userIdProfile.aboutMe,contacts:t.mainBasicPage.userIdProfile.contacts,photos:t.mainBasicPage.userIdProfile.photos.large,userStatus:t.mainBasicPage.userIdProfile.userStatus,preloadStatus:t.usersPage.isFetch,authoriseStatus:t.auth.userData.authoriseStatus}}),{loadUserProfile:b.c})(H);var Z=function(t){return Object(g.jsxs)("div",{className:u.a.main,children:[Object(g.jsx)("img",{className:u.a.MainThemeImg,src:"https://w-dog.ru/wallpapers/9/16/338082645671935/ssha-gavaji-gavajskie-ostrova-kailua-lanikaj-mokulua-ostrova-lanikaj-plyazh-tixij-okean-more-okean-plyazh-nebo-zima-fevral-ade-xopkins-foto.jpg",alt:"peach"}),Object(g.jsxs)(q.d,{children:[Object(g.jsx)(q.b,{path:"/profile/".concat(t.authUserId),children:Object(g.jsx)(T,{})}),Object(g.jsx)(q.b,{path:"/profile/"+t.match.params.userId,children:Object(g.jsx)(J,{userId:t.match.params.userId})}),Object(g.jsx)(q.b,{path:"/profile",children:Object(g.jsx)(T,{})})]}),Object(g.jsx)(k,{})]})},X=a(30),Q=a(241),$=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(g.jsx)(Z,Object(r.a)({},this.props))}}]),a}(d.Component);e.default=Object(X.d)(q.g,Q.a,Object(l.b)((function(t){return{authorised:t.auth.userData.authoriseStatus,authUserId:t.auth.userData.userId}})))($)}}]);
//# sourceMappingURL=4.22dcd63f.chunk.js.map