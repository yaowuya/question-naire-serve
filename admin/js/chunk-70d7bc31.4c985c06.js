(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d7bc31"],{"0f9e":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"registerForm",staticClass:"login-form",attrs:{model:e.registerForm,rules:e.registerRules,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v("注册")])]),e._v(" "),r("el-form-item",{attrs:{prop:"username"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),r("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.registerForm.username,callback:function(s){e.$set(e.registerForm,"username",s)},expression:"registerForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleRegister(s)}},model:{value:e.registerForm.password,callback:function(s){e.$set(e.registerForm,"password",s)},expression:"registerForm.password"}}),e._v(" "),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),r("el-button",{staticClass:"f-left",staticStyle:{width:"40%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleRegister(s)}}},[e._v("注册\n    ")]),e._v(" "),r("el-button",{staticClass:"f-right",staticStyle:{width:"40%"},on:{click:e.goLogin}},[e._v("登陆")])],1)],1)},a=[],n=(r("96cf"),r("1da1")),o={name:"Register",data:function(){var e=function(e,s,r){s.length<6?r(new Error("The password can not be less than 6 digits")):r()};return{registerForm:{username:"",password:""},registerRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleRegister:function(){var e=this;this.$refs.registerForm.validate(function(){var s=Object(n["a"])(regeneratorRuntime.mark((function s(r){var t;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!r){s.next=18;break}return e.loading=!0,s.next=4,e.$api.user.getUserByName({username:e.registerForm.username});case 4:if(t=s.sent,null==t||t.username!==e.registerForm.username){s.next=10;break}e.$message({type:"false",message:"该名称已经存在"}),e.loading=!1,s.next=15;break;case 10:return s.next=12,e.$api.user.registerUser(e.registerForm);case 12:e.$router.push({name:"login"}),e.$message({type:"success",message:"注册成功"}),e.loading=!1;case 15:e.loading=!1,s.next=20;break;case 18:return console.log("error submit!!"),s.abrupt("return",!1);case 20:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())},goLogin:function(){return this.$router.push({name:"Login"})}}},i=o,c=(r("add3"),r("cba2"),r("2877")),u=Object(c["a"])(i,t,a,!1,null,"5a9f6c4c",null);s["default"]=u.exports},"5f0f":function(e,s,r){},add3:function(e,s,r){"use strict";var t=r("5f0f"),a=r.n(t);a.a},bd99:function(e,s,r){},cba2:function(e,s,r){"use strict";var t=r("bd99"),a=r.n(t);a.a}}]);