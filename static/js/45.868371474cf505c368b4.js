webpackJsonp([45],{L7k1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"xianjinliuliangbiao",data:function(){return{value:"",options:[{label:"男",value:1},{label:"女",value:0}],img:"",form:{code:"",name:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],code:[{required:!0,message:"请选择活动区域",trigger:"change"}]},title:["添加员工","修改员工"]}},methods:{arraySpanMethod:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex;if(0===e)return 1==a||2==a||3==a?[0,0]:[1,4]},tableRowClassName:function(t){t.row;return t.rowIndex%2!=0?"lan":""},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")}),this.$router.push({path:"/home"})},change:function(t){var e=this,a=new FileReader;a.readAsDataURL(t.raw),a.onload=function(){e.img=a.result}},tianjiapingzheng:function(t){this.$router.push({path:"/home/fapiao/tianjiapingzheng"})},pipeixianyoupingzheng:function(){this.$router.push({path:"/home/fapiao/pipeixianyoupingzheng"})},pipeixianyouliushui:function(){this.$router.push({path:"/home/fapiao/pipeixianyouliushui"})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{background:"#FFF",padding:"2vw"}},[a("div",{staticStyle:{"font-size":"30px",color:"#1C2023","text-align":"center"}},[t._v("添加发票")]),t._v(" "),a("div",{staticStyle:{border:"1px solid #F8F8FF",padding:"2vw","margin-top":"2vh"}},[a("el-upload",{attrs:{"on-change":t.change,action:"#","show-file-list":!1}},[a("el-button",{attrs:{type:"warning"}},[t._v("上传发票")])],1),t._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid rgba(96,105,114,0.3)",margin:"3vh 0"}}),t._v(" "),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px",rules:t.rules}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"发票类型：",prop:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("el-option",{attrs:{label:"男",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"女",value:"beijing"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"开票日期："}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"认证日期："}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"发票号码："}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"300px"}},[a("el-form-item",{attrs:{label:"","label-width":"10px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("el-option",{attrs:{label:"男",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"女",value:"beijing"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{width:"900px"}},[a("el-form-item",{attrs:{label:"","label-width":"10px"}},[a("el-input",{staticStyle:{width:"50%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"金额："}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"税率："}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"价税合计："}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"350px"}},[a("el-form-item",{attrs:{label:"元","label-width":"30px"}})],1)])]),t._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid rgba(96,105,114,0.3)"}}),t._v(" "),a("div",{staticStyle:{margin:"3vh"}},[a("img",{attrs:{src:t.img,alt:""}})]),t._v(" "),a("div",{},[a("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.tianjiapingzheng(0)}}},[t._v("生成凭证")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.tianjiapingzheng(1)}}},[t._v("生成凭证和流水")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.pipeixianyoupingzheng}},[t._v("匹配至现有凭证")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.pipeixianyouliushui}},[t._v("匹配至现有流水")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"3vh"}},[a("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.submitForm("form")}}},[t._v("仅保存")]),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push({path:"/home"})}}},[t._v("取消")])],1)],1)])])},staticRenderFns:[]};var n=a("C7Lr")(i,l,!1,function(t){a("ukOl")},null,null);e.default=n.exports},ukOl:function(t,e){}});
//# sourceMappingURL=45.868371474cf505c368b4.js.map