webpackJsonp([32],{"5v3l":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("4YfN"),o=s.n(r),a=(s("HZWW"),{name:"login",data:function(){var e=this;return{time:"60 s",code:!0,user:{phone:"",newPassWord:"",userPassWord:"",code:""},rules2:{phone:[{required:!0,validator:function(e,t,s){t?/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(t)?s():s(new Error("请输入正确的手机号")):s(new Error("手机号不能为空"))},trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],newPassWord:[{required:!0,validator:function(t,s,r){""===s?r(new Error("请输入密码")):(""!==e.user.userPassWord&&e.$refs.user.validateField("userPassWord"),r())},trigger:"blur"}],userPassWord:[{required:!0,validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.user.newPassWord?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]}}},methods:{get_code:function(){var e=this;new RegExp(/^1[3456789]\d{9}$/).test(this.user.phone)?(this._ajax("common/sms",{phone:this.user.phone,flag:1,status:2},function(t){e.code=!1;var s=setInterval(function(){e.time=parseInt(e.time)-1+" s",1==parseInt(e.time)&&(clearTimeout(s),e.code=!0)},1e3)}),this.time="60 s"):this._message(3,"请输入正确的手机号")},hjSubmite:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t._ajax("userLogin/forgetPassWord",o()({},t.user,{status:2}),function(e){t._message(1,"修改成功"),t.$router.push({path:"/password_login"})})})}}}),n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hj-login"},[s("div",{staticClass:"hj-login-form",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hjSubmite("user")}}},[s("div",[s("el-form",{ref:"user",staticStyle:{"margin-top":"2vh"},attrs:{"label-width":"110px",model:e.user,rules:e.rules2}},[s("el-form-item",{attrs:{label:"手机号：+ 86",prop:"phone"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"验证码：",prop:"code"}},[s("el-col",{attrs:{span:12}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"text\n",placeholder:"请输入验证码"},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),e._v(" "),s("el-col",{attrs:{span:10,offset:2}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.code,expression:"code"}],staticClass:"hj-ipt",on:{click:e.get_code}},[e._v("获取验证码")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.code,expression:"!code"}],staticClass:"hj-ipt"},[e._v(e._s(e.time))])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码：",prop:"newPassWord"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"password",placeholder:"请输入新密码"},model:{value:e.user.newPassWord,callback:function(t){e.$set(e.user,"newPassWord",t)},expression:"user.newPassWord"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码：",prop:"userPassWord"}},[s("el-input",{staticClass:"hj-ipt",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.user.userPassWord,callback:function(t){e.$set(e.user,"userPassWord",t)},expression:"user.userPassWord"}})],1),e._v(" "),s("el-button",{staticClass:"hj-btn",on:{click:function(t){return e.hjSubmite("user")}}},[e._v("确定")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"1vh","text-align":"center"}},[s("router-link",{staticStyle:{"text-decoration":"none","font-size":"12px"},attrs:{to:{path:"/password_login"}}},[e._v("取消")])],1)],1)])])},staticRenderFns:[]};var i=s("C7Lr")(a,n,!1,function(e){s("qDHN")},"data-v-43c91196",null);t.default=i.exports},qDHN:function(e,t){}});
//# sourceMappingURL=32.91b10ec9dcf5467ac062.js.map