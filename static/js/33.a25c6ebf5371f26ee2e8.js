webpackJsonp([33],{WRM9:function(e,t){},"c/mf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),u=n.n(a),r={name:"xianjinliuliangbiao",mixins:[n("IfhF").a],data:function(){return{list:[],title:"",user:{name:"",bankCode:"",moneyType:"",accountingSubject:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blue"}],bankCode:[{required:!0,message:"请输入银行账号",trigger:"blur"}],moneyType:[{required:!0,message:"请选择币别",trigger:"change"}],accountingSubject:[{required:!0,message:"请输入会计科目",trigger:"blur"}]},n:"",b:"",m:"",a:""}},mounted:function(){var e=this;this.getStorage(),this._ajax("common/selectMoneyType",{},function(t){e.list=t}),"add"==this.$route.query.type?this.title="新建账户":(this.title="编辑账户",this._ajax("userHomePage/selectUserBankCode",{uuid:this.uuid,accountId:this.accountId,bankCodeId:this.$route.query.id},function(t){e.user.name=t.name,e.user.bankCode=t.bank_code,e.user.moneyType=t.money_type,e.user.accountingSubject=t.accounting_subject,e.n=t.name,e.b=t.bank_code,e.m=t.money_type,e.a=t.accounting_subject}))},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;if("新建账户"==t.title)t._ajax("userHomePage/addUserBankCode",u()({uuid:t.uuid,workAccountId:t.accountId},t.user),function(e){t._message(1,"添加成功"),t.$router.push({path:"/home/zhangtao/zhanghushezhi"})});else{if(t.n==t.user.name&&t.b==t.user.bankCode&&t.m==t.user.moneyType&&t.a==t.user.accountingSubject)return void t.$router.push({path:"/home/zhangtao/zhanghushezhi"});var n={};t.n!=t.user.name&&(n.name=t.user.name),t.b!=t.user.bankCode&&(n.bankCode=t.user.bankCode),t.m!=t.user.moneyType&&(n.moneyType=t.user.moneyType),t.a!=t.user.accountingSubject&&(n.accountingSubject=t.user.accountingSubject),t._ajax("userHomePage/updateUserBankCode",u()({uuid:t.uuid,accointId:t.accountId,bankCodeId:t.$route.query.id},n),function(e){t._message(1,"修改成功"),t.$router.push({path:"/home/zhangtao/zhanghushezhi"})})}})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{background:"#FFF",padding:"2vh 2vw"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{"font-size":"30px",color:"#1C2023"}},[e._v("\n                "+e._s(e.title)+"\n            ")])]),e._v(" "),n("div",{staticStyle:{border:"1px solid #F8F8FF",padding:"2vh 2vw","margin-top":"2vh",display:"flex","justify-content":"center"}},[n("div",{staticStyle:{width:"500px",display:"flex","justify-content":"center","flex-wrap":"wrap"}},[n("div",{staticStyle:{width:"100%"}},[n("el-form",{ref:"user",attrs:{rules:e.rules,"label-width":"100px",model:e.user}},[n("el-form-item",{attrs:{label:"名称：",prop:"name"}},[n("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:"示例：中国银行"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"银行账号：",prop:"bankCode"}},[n("el-input",{staticClass:"hj-ipt",attrs:{type:"text",placeholder:""},model:{value:e.user.bankCode,callback:function(t){e.$set(e.user,"bankCode",t)},expression:"user.bankCode"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"币别：",prop:"moneyType"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.user.moneyType,callback:function(t){e.$set(e.user,"moneyType",t)},expression:"user.moneyType"}},e._l(e.list,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"会计科目：",prop:"accountingSubject"}},[n("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.user.accountingSubject,callback:function(t){e.$set(e.user,"accountingSubject",t)},expression:"user.accountingSubject"}})],1),e._v(" "),n("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[n("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.submitForm("user")}}},[e._v("保存")]),e._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(t){return e.$router.push({path:"/home/zhangtao/zhanghushezhi"})}}},[e._v("返回")])],1)],1)],1)])])])])},staticRenderFns:[]};var i=n("C7Lr")(r,s,!1,function(e){n("WRM9")},null,null);t.default=i.exports}});
//# sourceMappingURL=33.a25c6ebf5371f26ee2e8.js.map