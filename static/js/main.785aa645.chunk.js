(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],Array(32).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(21),c=n.n(r),i=n(5),o=(n(32),n(2)),l=(n(33),n(3)),u=n(22),d=n(23),j=n(12),h=n(27),m=n(26),b=(n(34),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={menu:!1},a.onHamburgerClickHandler=a.onHamburgerClickHandler.bind(Object(j.a)(a)),a.onCloseBtnClickHandler=a.onCloseBtnClickHandler.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleScroll",value:function(e){window.scrollY>20?document.querySelector(".nav").classList.add("nav-scroll"):document.querySelector(".nav").classList.remove("nav-scroll")}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"onHamburgerClickHandler",value:function(e){this.setState({menu:!0})}},{key:"onCloseBtnClickHandler",value:function(e){this.setState({menu:!1})}},{key:"render",value:function(){return this.props.loggedIn?Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(i.c,{to:"/",className:"nav-logo",children:Object(b.jsx)("img",{src:"/logoD.png",alt:"Logo",onClick:this.onCloseBtnClickHandler})}),Object(b.jsx)("div",{className:"hamburger-container",onClick:this.onHamburgerClickHandler,children:Object(b.jsx)("div",{className:"hamburger"})}),Object(b.jsxs)("div",{className:"menu ".concat(this.state.menu?"menu-show":"menu-hide"),children:[Object(b.jsx)("div",{className:"close-btn-container",onClick:this.onCloseBtnClickHandler,children:Object(b.jsx)("div",{className:"close-btn"})}),Object(b.jsx)(i.c,{to:"/my-workouts",activeClassName:"nav-link-active",className:"nav-link",onClick:this.onCloseBtnClickHandler,children:"my workouts"}),Object(b.jsx)(i.c,{to:"/create-workout",activeClassName:"nav-link-active",className:"nav-link",onClick:this.onCloseBtnClickHandler,children:"create workout"}),Object(b.jsx)(i.c,{to:"/profile",activeClassName:"nav-link-active",className:"nav-link",onClick:this.onCloseBtnClickHandler,children:"profile"}),Object(b.jsx)(i.c,{to:"/logout",className:"btn-red-small btn-align-down",onClick:this.onCloseBtnClickHandler,children:"logout"})]})]}):Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(i.c,{to:"/",className:"nav-logo",children:Object(b.jsx)("img",{src:"/logoD.png",alt:"Logo"})}),Object(b.jsx)("div",{className:"right-section",children:Object(b.jsx)("button",{className:"btn-red-small btn-login",onClick:this.props.handleOpenModal,children:"login"})})]})}}]),n}(a.Component),g=(n(41),n(42),function(e){var t=e.linkTo,n=e.text,a=e.highlighted;return Object(b.jsx)(i.b,{to:t,className:"main-button",children:Object(b.jsxs)("div",{className:"main-button-text",children:[n," ",Object(b.jsx)("span",{className:"text-red",children:a})]})})}),O=function(){return Object(b.jsxs)("section",{className:"main-section",children:[Object(b.jsx)(g,{linkTo:"/create-workout",text:"create a",highlighted:"workout"}),Object(b.jsx)(g,{linkTo:"/my-workouts",text:"my",highlighted:"workouts"}),Object(b.jsx)(g,{linkTo:"/progress",text:"check your",highlighted:"progress"})]})},f=(n(43),n(44),function(e){var t=e.handleScrollDown;return Object(b.jsxs)("div",{className:"scroll-down-container",children:[Object(b.jsx)("img",{src:"/scroll-down.png",alt:"Scroll down icon",className:"scroll-down-icon",onClick:t}),Object(b.jsx)("span",{className:"scroll-down-text",onClick:t,children:"register"})]})}),x="http://localhost:5000/auth",v=function(e,t){return fetch("".concat(x,"/change-user-data/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},w=(n(45),n(46),function(e){var t=e.message;return t?Object(b.jsx)("div",{className:"error-message",children:t}):null}),N=s.a.createContext(),y=function(){var e=Object(a.useContext)(N).handleLogin,t=Object(a.useState)(null),n=Object(o.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(!0),i=Object(o.a)(c,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(o.a)(d,2),h=j[0],m=j[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),O=g[0],f=g[1];return Object(b.jsx)("form",{className:"login-form",onSubmit:function(t){if(t.preventDefault(),l){var n=t.target,a=n.email,s=n.password;(d={email:a.value,password:s.value},fetch("".concat(x,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).then((function(e){return e.json()})).then((function(t){"error"===t.type?r(t.message.errorMsg):(r(null),localStorage.setItem("user",JSON.stringify(t.user)),e(!0))}))}else if(h){var c=t.target,i=c.password,o=c.passwordRep;i.value!==o.value?r("Passwords doesn't match!"):function(e){return fetch("".concat(x,"/reset-password"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}({email:O,password:i.value}).then((function(e){return e.json()})).then((function(t){"error"===t.type?r(t.message.errorMsg):(r(null),localStorage.setItem("user",JSON.stringify(t.user)),e(!0))})).catch((function(e){r(e.message.errorMsg)}))}else{var u=t.target.email;(function(e){return fetch("".concat(x,"/check-email"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})})(u.value).then((function(e){return e.json()})).then((function(e){"error"===e.type?r(e.message.errorMsg):(r(null),f(u.value),m(!0))})).catch((function(e){r(e.message.errorMsg)}))}var d},children:l?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"email",name:"email",className:"login-form-input",placeholder:"Type your email here..."}),Object(b.jsx)("input",{type:"password",name:"password",className:"login-form-input",placeholder:"Type your password here..."}),Object(b.jsx)("input",{type:"submit",value:"login",className:"login-form-btn"}),Object(b.jsx)(w,{message:s}),Object(b.jsx)("span",{className:"login-form-text",onClick:function(){return u(!1)},children:"Forgotten password? Click here!"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"login-form-heading",children:"Type your email and we'll reset your password"}),h?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"password",name:"password",className:"login-form-input",placeholder:"Type your new password here..."}),Object(b.jsx)("input",{type:"password",name:"passwordRep",className:"login-form-input",placeholder:"Type your new password here..."})]}):Object(b.jsx)("input",{type:"email",name:"email",className:"login-form-input"}),Object(b.jsx)("input",{type:"submit",value:"reset",className:"login-form-btn"}),Object(b.jsx)(w,{message:s})]})})},k=(n(47),function(e){var t=e.handleClose,n=e.show,a=e.children,s=n?"show-modal":"hide-modal";return Object(b.jsxs)("div",{className:"modal ".concat(s),children:[Object(b.jsx)("span",{className:"modal-close-btn",onClick:t,children:"\u2715"}),a]})}),S=function(e){var t=e.handleScrollDown,n=Object(a.useContext)(N),s=Object(a.useState)(n),r=Object(o.a)(s,2),c=r[0],i=r[1],l=c?"modal-container-show":"modal-container-hide";return Object(a.useEffect)((function(){i(n)}),[n]),Object(b.jsxs)("section",{className:"start-section",children:[Object(b.jsx)(f,{handleScrollDown:t}),n?Object(b.jsx)("div",{className:"modal-container ".concat(l),children:Object(b.jsx)(k,{show:c,handleClose:function(){return i(!1)},children:Object(b.jsx)(y,{})})}):null]})},C=(n(48),n(49),function(e){var t=e.handleOpen;return Object(b.jsx)("button",{onClick:t,className:"register-btn",children:"register now"})}),I=(n(50),function(e,t){return e.length<3?{validated:!1,errorMsg:"".concat(t," must be at least ").concat(3," characters!")}:{validated:!0,input:e}}),M=function(e,t){return/^\d+$/.test(e)?Number(e)<0?{validated:!1,errorMsg:"".concat(t," can't be a negative number!")}:{validated:!0,input:e}:{validated:!1,errorMsg:"".concat(t," must be a number!")}},F=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)({}),c=Object(o.a)(r,2),i=c[0],u=c[1],d=Object(a.useState)(1),j=Object(o.a)(d,2),h=j[0],m=j[1],p=Object(l.f)(),g=function(e){return e.validated?(s(null),!0):s(e.errorMsg)};return Object(b.jsxs)("form",{className:"register-form",onSubmit:function(e){if(e.preventDefault(),1===h){var t=e.target,n=t.username,a=t.email,r=t.password,c=t.passwordRep,o=(S=n.value)&&""!==S?S.length<5?{validated:!1,errorMsg:"Username field should be at least ".concat(5," charachters long!")}:/^[a-zA-Z0-9]+$/.test(S)?{validated:!0,input:S}:{validated:!1,errorMsg:"Username should contain only english letters and numbers!"}:{validated:!1,errorMsg:"Username field must be filled!"},l=function(e){return e&&""!==e?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?{validated:!0,input:e}:{validated:!1,errorMsg:"Invalid email!"}:{validated:!1,errorMsg:"Email field must be filled!"}}(a.value),d=(k=r.value)&&""!==k?k.length<8?{validated:!1,errorMsg:"Password field should be at least ".concat(8," charachters long!")}:{validated:!0,input:k}:{validated:!1,errorMsg:"Password field must be filled!"},j=c.value;[o,l,d].every(g)&&(d.input!==j?s("Passwords doesn't match!"):(s(null),u({username:o.input,email:l.input,password:d.input,passwordRep:j}),m(2)))}else{var b=e.target,O=b.age,f=b.weight,v=b.height,w=M(O.value,"Age"),N=M(v.value,"Height"),y=M(f.value,"Weight");if([w,y,N].every(g))(function(e){return fetch("".concat(x,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(Object.assign(i,{age:w.input,weight:y.input,height:N.input})).then((function(e){return e.json()})).then((function(e){e.message.errorMsg?(m(1),s(e.message.errorMsg)):(localStorage.setItem("user",JSON.stringify(e.user)),p.push("/"))}))}var k,S},children:[1===h&&Object(b.jsxs)("div",{className:"inputs-container",children:[Object(b.jsx)("h2",{className:"register-heading",children:"Register"}),Object(b.jsx)("label",{htmlFor:"username",className:"register-label",children:"Username:"}),Object(b.jsx)("input",{type:"text",name:"username",id:"username",className:"register-input"}),Object(b.jsx)("label",{htmlFor:"email",className:"register-label",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",className:"register-input"}),Object(b.jsx)("label",{htmlFor:"password",className:"register-label",children:"Password:"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",className:"register-input"}),Object(b.jsx)("label",{htmlFor:"passwordRep",className:"register-label",children:"Repeat password:"}),Object(b.jsx)("input",{type:"password",name:"passwordRep",id:"passwordRep",className:"register-input"}),Object(b.jsx)("div",{className:"register-error-container",children:Object(b.jsx)(w,{message:n})})]}),2===h&&Object(b.jsxs)("div",{className:"inputs-container",children:[Object(b.jsx)("h2",{className:"register-heading",children:"Register"}),Object(b.jsx)("label",{htmlFor:"age",className:"register-label",children:"Age:"}),Object(b.jsx)("input",{type:"number",name:"age",id:"age",className:"register-input"}),Object(b.jsx)("label",{htmlFor:"height",className:"register-label",children:"Height:"}),Object(b.jsx)("input",{type:"number",name:"height",id:"height",placeholder:"Your height in cm...",className:"register-input"}),Object(b.jsx)("label",{htmlFor:"weight",className:"register-label",children:"Personal weight:"}),Object(b.jsx)("input",{type:"number",name:"weight",id:"weight",placeholder:"Your weight in kg...",className:"register-input"}),Object(b.jsx)("div",{className:"register-error-container",children:Object(b.jsx)(w,{message:n})})]}),Object(b.jsx)("div",{className:"button-container",children:Object(b.jsx)("button",{type:"submit",className:"register-btn register-btn-wide",children:1===h?"next":"go"})})]})},P=s.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),s=Object(o.a)(n,2),r=s[0],c=s[1],i=r?"modal-container-show":"modal-container-hide";return Object(b.jsxs)("section",{ref:t,className:"reg-section",children:[Object(b.jsx)("div",{className:"description-container",children:Object(b.jsxs)("p",{className:"description-text",children:["Power",Object(b.jsx)("span",{className:"description-logo",children:"Up"})," is a personal fitness assistant, which will make your fitness journey more productive by tracking your progress. In order to use it, you have to register, so follow the button below. If you like it, please share my app with your friends!"]})}),Object(b.jsx)(C,{handleOpen:function(){return c(!0)}}),Object(b.jsx)("div",{className:"modal-container ".concat(i),children:Object(b.jsx)(k,{show:r,handleClose:function(){return c(!1)},children:Object(b.jsx)(F,{})})})]})})),T=(n(51),function(){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("div",{children:["Power",Object(b.jsx)("span",{className:"text-red",children:"Up"})," \xa9 20",Object(b.jsx)("span",{className:"text-red",children:"21"})]}),Object(b.jsxs)("div",{children:["Developed by ",Object(b.jsx)("span",{className:"text-red text-uppercase",children:"Rusev"})]})]})}),H=function(e){var t=e.loggedIn,n=Object(a.useRef)();return t?Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)(O,{}),Object(b.jsx)(T,{})]}):Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)(S,{handleScrollDown:function(){n.current.scrollIntoView({behavior:"smooth"})}}),Object(b.jsx)(P,{ref:n})]})},D=(n(52),n(15)),R="http://localhost:5000/workouts",J=(n(53),function(e){var t=e.workoutId,n=Object(a.useState)([{reps:0,weight:0}]),s=Object(o.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),d=u[0],j=u[1],h=Object(a.useState)(!1),m=Object(o.a)(h,2),p=m[0],g=m[1],O=Object(l.f)(),f=function(e,t){var n=e.target,a=n.name,s=n.value,i=Object(D.a)(r);i[t][a]=s,c(i)},x=function(){c([].concat(Object(D.a)(r),[{reps:0,weight:0}]))};return Object(b.jsxs)("form",{className:"create-form",onSubmit:function(e){e.preventDefault();var n=I(e.target.exerciseName.value,"Exercise name"),a=r.every((function(e){return!!M(e.reps).validated&&!!function(e){if(/^\d+$/.test(e)){if(Number(e)<0)return{validated:!1,errorMsg:"Exercise weight must be at least ".concat(0," kg/lbs!")}}else if("bodyweight"!==e.toLowerCase())return{validated:!1,errorMsg:"Exercise weight must be either BODYWEIGHT or a number!"};return{validated:!0,input:e}}(e.weight).validated}));n.validated?a?function(e){return fetch("".concat(R,"/add-exercise"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}({workoutId:t,exerciseName:n.input,exerciseSets:r}).then((function(e){return e.json()})).then((function(t){p?O.push("/"):(e.target.exerciseName.value="",c([{reps:0,weight:0}]))})):j('Invalid weight / reps value! (For the weight you can put number or "bodyweight")'):j(n.errorMsg)},children:[Object(b.jsxs)("h1",{className:"create-form-heading",children:["Add an ",Object(b.jsx)("span",{className:"text-red",children:"exercise"})]}),Object(b.jsx)("label",{htmlFor:"exerciseName",className:"create-form-label margin-top-20",children:"Exercise name:"}),Object(b.jsx)("input",{type:"text",name:"exerciseName",id:"exerciseName",className:"create-form-input"}),r.map((function(e,t){return Object(b.jsxs)("div",{className:"inputs-row",children:[Object(b.jsxs)("span",{className:"exercise-form-span",children:["Set ",t+1]}),Object(b.jsx)("label",{htmlFor:"reps",className:"create-form-label",children:"Reps:"}),Object(b.jsx)("input",{type:"number",name:"reps",id:"reps",className:"create-form-input margin-left-10",value:e.reps,onChange:function(e){return f(e,t)}}),Object(b.jsx)("label",{htmlFor:"weight",className:"create-form-label margin-left-20",children:"Weight:"}),Object(b.jsx)("input",{type:"text",name:"weight",id:"weight",className:"create-form-input margin-left-10",value:e.weight,onChange:function(e){return f(e,t)}}),r.length-1===t&&Object(b.jsx)("input",{type:"button",onClick:x,value:"Add set",className:"exercise-form-btn"}),1!==r.length&&Object(b.jsx)("input",{type:"button",onClick:function(){return function(e){var t=Object(D.a)(r);t.splice(e,1),c(t)}(t)},value:"Remove set",className:"exercise-form-btn"})]},t)})),Object(b.jsxs)("div",{className:"btns-row",children:[Object(b.jsx)("input",{type:"submit",value:"Next exercise",className:"create-form-btn"}),Object(b.jsx)("input",{type:"submit",onClick:function(){return g(!0)},value:"Finish workout!",className:"create-form-btn filled-btn"})]}),Object(b.jsx)(w,{message:d})]})}),W=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],u=c[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),h=j[0],m=j[1],p=Object(l.f)();if(!localStorage.getItem("user"))return p.push("/"),null;return Object(b.jsxs)("div",{className:"create-form-container fade-in",children:[Object(b.jsxs)("form",{className:"create-form  ".concat(n?"hide-create-form":""),onSubmit:function(e){e.preventDefault(),console.log(e.target);var t=I(e.target.name.value,"Workout name"),n=M(e.target.personalWeight.value,"Personal weight");(t.validated?n.validated||u(n.errorMsg):u(t.errorMsg),t.validated&&n.validated)&&(u(""),function(e,t){var n={workoutName:e.workoutName,personalWeight:e.personalWeight};return fetch("".concat(R,"/create/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}({workoutName:t.input,personalWeight:n.input},JSON.parse(localStorage.getItem("user")).id).then((function(e){return e.json()})).then((function(e){m(e.workoutId),s(!0)})).catch((function(e){return u(e.errorMsg)})))},children:[Object(b.jsxs)("h1",{className:"create-form-heading",children:["Create a ",Object(b.jsx)("span",{className:"text-red",children:"workout"})]}),Object(b.jsx)("label",{htmlFor:"name",className:"create-form-label margin-top-20",children:"Workout name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",className:"create-form-input"}),Object(b.jsx)("label",{htmlFor:"personalWeight",className:"create-form-label margin-top-20",children:"Your weight:"}),Object(b.jsx)("input",{type:"number",name:"personalWeight",id:"personalWeight",className:"create-form-input"}),Object(b.jsx)("input",{type:"submit",value:"start",className:"create-form-btn margin-top-30"}),Object(b.jsx)(w,{message:i})]}),n&&Object(b.jsx)(J,{workoutId:h})]})},E=(n(54),n(55),function(e){var t=e.year,n=e.children,s=Object(a.useState)(!1),r=Object(o.a)(s,2),c=r[0],i=r[1];return Object(b.jsxs)("div",{className:"year-container",children:[Object(b.jsxs)("div",{className:"year-text-container",onClick:function(){return i(!c)},children:[Object(b.jsx)("span",{className:"year-text",children:t}),Object(b.jsx)("span",{className:"year-arrow ".concat(c?"flip-up":""),children:"\u21e7"})]}),Object(b.jsx)("div",{className:"".concat(c?"year-content-hidden":""),children:n})]})}),B=(n(56),function(e){var t=e.month,n=e.children,s=Object(a.useState)(!1),r=Object(o.a)(s,2),c=r[0],i=r[1];return Object(b.jsxs)("div",{className:"month-container",children:[Object(b.jsxs)("div",{className:"month-text-container",onClick:function(){return i(!c)},children:[Object(b.jsx)("span",{className:"month-text",children:t}),Object(b.jsx)("span",{className:"month-arrow ".concat(c?"flip-up":""),children:"\u21e7"})]}),Object(b.jsx)("div",{className:"".concat(c?"month-content-hidden":""),children:n})]})}),A=(n(57),function(e){var t=e.day,n=e.children;return Object(b.jsxs)("div",{className:"day-container",children:[Object(b.jsx)("span",{className:"day-text ".concat(t.includes("Monday")?"end-week":""),children:t}),n]})}),L=(n(58),function(e){var t=e.workout,n=Object(a.useState)(null),s=Object(o.a)(n,2),r=s[0],c=s[1];if(t){var i=new Date(t.date);return i="".concat(i.getDate(),"/").concat(i.getMonth()+1,"/").concat(i.getFullYear()),Object(b.jsxs)("form",{className:"workout-container",children:[Object(b.jsx)("h1",{className:"workout-container-name",children:t.workoutName}),Object(b.jsx)("h2",{className:"workout-container-date",children:i}),Object(b.jsxs)("h3",{className:"workout-container-weight",children:["Weight: ",t.personalWeight,"kg"]}),Object(b.jsxs)("div",{className:"workout-exercises-container",children:[Object(b.jsxs)("div",{className:"exercises-list-container",children:[Object(b.jsx)("h2",{className:"exercises-list-heading",children:"Exercises:"}),t.exercises.map((function(e,n){return Object(b.jsxs)("div",{className:"exercise-list-item",children:[Object(b.jsxs)("span",{className:"exercise-list-item-text",children:["\u27a2 ",e.name]}),Object(b.jsx)("button",{type:"button",onClick:function(){return c(t.exercises[n])},className:"exercise-list-item-btn",children:"details"})]},n)}))]}),r&&Object(b.jsxs)("div",{className:"current-exercise-container",children:[Object(b.jsx)("h3",{className:"current-exercise-heading",children:r.name}),r.sets.map((function(e,t){return Object(b.jsxs)("div",{className:"current-exercise-set-row",children:[Object(b.jsxs)("span",{className:"current-exercise-info",children:["Set ",t+1,":"]}),Object(b.jsxs)("span",{className:"current-exercise-info",children:["Reps: ",e.reps]}),Object(b.jsxs)("span",{className:"current-exercise-info",children:["Weight: ",e.weight]})]},t+10)}))]})]})]})}return null}),U=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),c=Object(o.a)(r,2),i=c[0],u=c[1],d=Object(l.f)();return Object(a.useEffect)((function(){(function(e){return fetch("".concat(R,"/get-workouts/").concat(e))})(JSON.parse(localStorage.getItem("user")).id).then((function(e){return e.json()})).then((function(e){var t=e.workouts;s(t)}))}),[]),localStorage.getItem("user")?Object(b.jsxs)("div",{className:"fade-in workout-component-wrapper",children:[0===n.length&&Object(b.jsx)("span",{className:"empty-message",children:"No workouts yet!"}),Object(b.jsx)("div",{className:"workout-history",children:n.map((function(e){return Object(b.jsx)(E,{year:e.year,children:e.months.map((function(e){var t=Object(o.a)(Object.entries(e)[0],2),n=t[0],a=t[1];return Object(b.jsx)(B,{month:n,children:a.map((function(e){return Object(b.jsx)(A,{day:e.date,children:e.workouts.map((function(e){return Object(b.jsxs)("div",{className:"info-container",children:[Object(b.jsx)("h3",{className:"info-workout-name",children:e.workoutName}),Object(b.jsx)("button",{className:"info-workout-btn",onClick:function(){return u(e)},children:"Details"})]},e._id)}))},e.date)}))},n)}))},e.year)}))}),Object(b.jsx)(L,{workout:i})]}):(d.push("/"),null)},Y=(n(59),n(14)),$=n(25),z=(n(60),function(e){var t=e.info,n=e.handleClose,s=JSON.parse(localStorage.getItem("user")),r=Object(a.useState)(s.email),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)({weight:s.weight,height:s.height,age:s.age}),d=Object(o.a)(u,2),j=d[0],h=d[1],m=Object(a.useState)(null),p=Object(o.a)(m,2),g=p[0],O=p[1];if(""===t)return null;var f=function(e){l(e.target.value)},N=function(e){var t=Object($.a)({},j),n=Object(Y.a)({},e.target.name,e.target.value);Object.assign(t,n),h(t)},y={email:function(){return Object(b.jsx)("input",{type:"email",name:"email",value:i,onChange:f,className:"change-info-input"})},password:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"password",name:"oldPassword",placeholder:"old password here...",className:"change-info-input"}),Object(b.jsx)("input",{type:"password",name:"newPassword",placeholder:"new password here...",className:"change-info-input"}),Object(b.jsx)("input",{type:"password",name:"newPasswordRep",placeholder:"repeat new password here...",className:"change-info-input"})]})},progress:function(){return Object(b.jsx)("h3",{className:"change-form-heading",children:"Are you sure you want to reset your whole workout progress?"})},personalInfo:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"weight",className:"change-form-label",children:"Weight:"}),Object(b.jsx)("input",{type:"number",value:j.weight,onChange:N,name:"weight",className:"change-info-input"}),Object(b.jsx)("label",{htmlFor:"weight",className:"change-form-label",children:"Height:"}),Object(b.jsx)("input",{type:"number",value:j.height,onChange:N,name:"height",className:"change-info-input"}),Object(b.jsx)("label",{htmlFor:"weight",className:"change-form-label",children:"Age:"}),Object(b.jsx)("input",{type:"number",value:j.age,onChange:N,name:"age",className:"change-info-input"})]})}}[t];return Object(b.jsxs)("form",{className:"change-info-form",onSubmit:function(e){switch(e.preventDefault(),t){case"email":var a=e.target.email;v({type:"email",email:a.value},s.id).then((function(e){O(null),n()})).catch((function(e){O("Something went wrong! Try again!")}));break;case"password":var r=e.target,c=r.oldPassword,i=r.newPassword;i!==r.newPasswordRep&&O("New passwords doesn't match!"),v({oldPassword:c.value,newPassword:i.value,type:"password"},s.id).then((function(e){return e.json()})).then((function(e){"error"===e.type?O(e.message.errorMsg):(O(null),n())})).catch((function(e){O(e)}));break;case"progress":(o=s.id,fetch("".concat(x,"/reset-progress/").concat(o))).then((function(){n()})).catch((function(e){O(e)}));break;case"personalInfo":v({personalInfoObject:j,type:"personalInfo"},s.id).then((function(e){return e.json()})).then((function(e){"error"===e.type?O(e.message.errorMsg):(localStorage.setItem("user",JSON.stringify(e.user)),O(null),n())})).catch((function(e){O(e)}))}var o},children:[y(),Object(b.jsx)(w,{message:g}),Object(b.jsx)("input",{type:"submit",value:"progress"===t?"reset":"change info",className:"change-info-btn"})]})}),Z=function(){var e=Object(a.useState)({show:!1,info:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=JSON.parse(localStorage.getItem("user")),c=Object(l.f)();if(!r)return c.push("/"),null;var i=r.username,u=n.show?"modal-container-show":"modal-container-hide";return Object(b.jsxs)("div",{className:"profile-page-wrapper",children:[Object(b.jsxs)("h3",{className:"profile-page-username",children:[i," - ",r.weight,"kg - ",r.height,"cm"]}),Object(b.jsxs)("div",{className:"avatar-container",children:[Object(b.jsx)("img",{src:"/avatar.png",alt:"avatar",className:"user-avatar"}),Object(b.jsx)("button",{className:"profile-page-btn",onClick:function(){return s({show:!0,info:"password"})},children:"change password"}),Object(b.jsx)("button",{className:"profile-page-btn",onClick:function(){return s({show:!0,info:"email"})},children:"change email"}),Object(b.jsx)("button",{className:"profile-page-btn",onClick:function(){return s({show:!0,info:"progress"})},children:"reset progress"}),Object(b.jsx)("button",{className:"profile-page-btn",onClick:function(){return s({show:!0,info:"personalInfo"})},children:"change profile picture and personal info"})]}),Object(b.jsx)("p",{className:"profile-page-text",children:"(hover on the avatar picture)"}),Object(b.jsx)("div",{className:"modal-container ".concat(u),children:Object(b.jsx)(k,{show:n.show,handleClose:function(){return s({show:!1,info:""})},children:Object(b.jsx)(z,{info:n.info,handleClose:function(){return s({show:!1,info:""})}})})})]})};var q=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),c=Object(o.a)(r,2),i=c[0],u=c[1],d=Object(l.f)(),j=localStorage.getItem("user");return Object(a.useEffect)((function(){j&&s(!0)}),[j]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{handleOpenModal:function(e){e&&u(e)},loggedIn:n}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,children:Object(b.jsx)(N.Provider,{value:{openModal:i,handleLogin:function(e){e&&s(!0)}},children:Object(b.jsx)(H,{loggedIn:n})})}),Object(b.jsx)(l.a,{path:"/create-workout",component:W}),Object(b.jsx)(l.a,{path:"/my-workouts",component:U}),Object(b.jsx)(l.a,{path:"/profile",component:Z}),Object(b.jsx)(l.a,{path:"/logout",children:function(){return localStorage.removeItem("user"),s(!1),d.push("/"),null}})]})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),G()}]),[[61,1,2]]]);
//# sourceMappingURL=main.785aa645.chunk.js.map