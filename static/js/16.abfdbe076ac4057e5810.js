webpackJsonp([16],{"/G4P":function(e,t){},"3Tu6":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("HZWW");var r={name:"login",mixins:[s("IfhF").a],data:function(){var e=this;return{time:"60 s",code:!0,user:{phone:"",code:"",password:"",password1:"",name:""},rules2:{phone:[{required:!0,validator:function(e,t,s){t?/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(t)?s():s(new Error("请输入正确的手机号")):s(new Error("手机号不能为空"))},trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],password:[{required:!0,validator:function(t,s,r){""===s?r(new Error("请输入密码")):(""!==e.user.password1&&e.$refs.user.validateField("password1"),r())},trigger:"blur"}],password1:[{required:!0,validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.user.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}]}}},mounted:function(){this.getStorage()},methods:{get_code:function(){var e=this;if(!new RegExp(/^1[3456789]\d{9}$/).test(this.user.phone))return this._message(3,"请输入正确的手机号"),void this.$message({type:error,message:"请输入正确的手机号"});this._ajax("common/sms",{phone:this.user.phone,flag:1,status:3},function(t){e.code=!1;var s=setInterval(function(){e.time=parseInt(e.time)-1+" s",1==parseInt(e.time)&&(clearTimeout(s),e.code=!0)},1e3)}),this.time="60 s"},hjSubmite:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t._ajax("weChatLogin/add",{uuid:t.uuid,phone:t.user.phone,code:t.user.code,status:3,passWord:t.user.password,passWord1:t.user.password1,name:t.user.name},function(e){t.$router.push({path:"/entry_company_message"})})})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hj-login"},[s("div",{staticClass:"hj-login-form",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hjSubmite("user")}}},[s("div",{staticStyle:{"font-size":"15px",color:"#1C2023","text-align":"center"}},[e._v("首次登陆请绑定手机号,手机号可作为找回密码的凭证")]),e._v(" "),s("el-form",{ref:"user",staticStyle:{"margin-top":"2vh"},attrs:{"label-width":"110px",model:e.user,rules:e.rules2}},[s("el-form-item",{attrs:{label:"手机号：+ 86",prop:"phone"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"验证码：",prop:"code"}},[s("el-col",{attrs:{span:12}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:"请输入验证码"},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),e._v(" "),s("el-col",{attrs:{span:10,offset:2}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.code,expression:"code"}],staticClass:"hj-ipt",on:{click:e.get_code}},[e._v("获取验证码")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.code,expression:"!code"}],staticClass:"hj-ipt"},[e._v(e._s(e.time))])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"设置密码：",prop:"password"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码：",prop:"password1"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.user.password1,callback:function(t){e.$set(e.user,"password1",t)},expression:"user.password1"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"您的姓名：",prop:"name"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),s("el-button",{staticClass:"hj-btn",on:{click:function(t){return e.hjSubmite("user")}}},[e._v("下一步")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"1vh","text-align":"center"}},[s("router-link",{staticStyle:{"text-decoration":"none","font-size":"10px",color:"#008CFF"},attrs:{to:{path:"/"}}},[e._v("返回")])],1)],1)])},staticRenderFns:[]};var o=s("C7Lr")(r,a,!1,function(e){s("/G4P")},"data-v-7e51303a",null);t.default=o.exports}});
//# sourceMappingURL=16.abfdbe076ac4057e5810.js.map