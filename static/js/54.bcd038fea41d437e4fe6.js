webpackJsonp([54],{ACs0:function(e,t){},SfCg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),o=a.n(i),n=a("IfhF"),s=a("F2l/"),r={name:"xianjinliuliangbiao",mixins:[n.a],watch:{"user.tableData":{handler:function(e,t){var a=0,i=0;this.user.tableData.forEach(function(e){""!=e.jie&&(a+=Number(e.jie)),""!=e.dai&&(i+=Number(e.dai))}),this.heji=a,this.heji1=i},deep:!0}},components:{gudingzichan:s.a},data:function(){return{gudingzichan_kaiguan:!1,heji:0,heji1:0,subject_guding:[],guding_type:"",guding_form:{assetName:"",assetClassify:"",startDate:(new Date).getFullYear()+"-"+(Array(2).join(0)+(Number((new Date).getMonth())+1)).slice(-2)+"-"+(Array(2).join(0)+Number((new Date).getDate())).slice(-2),assetSubjects:"",zMoeny:"",flag:"",residualValue:5,setMonth:"",getMonth:0,setZMoney:0,getZMoney:0,shengyu:"",meiyue:""},pickerOptions:{disabledDate:function(e){return e.getTime()<new Date(JSON.parse(localStorage.getItem("start_date")))-864e5}},shengchengpingzheng:!1,one:[],two:[],form:{comment:"",subjectId:"",parentId:"",direction:"",one1:"",two1:"",classify:"",payMoney:"",type:"",code:"",accountsDate:(new Date).getFullYear()+"-"+(Array(2).join(0)+(Number((new Date).getMonth())+1)).slice(-2)+"-"+(Array(2).join(0)+(new Date).getDate()).slice(-2)},user:{tableData:[{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:0},{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:1},{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:2}]},index:0,list:[],checked:!1,rules:{accountsDate:[{required:!0,message:"请选择日期",trigger:"change"}],direction:[{required:!0,message:"请选择方向",trigger:"change"}],one1:[{required:!0,message:"请选择分类一",trigger:"blur"}],money:[{required:!0,message:"请输入金额",trigger:"blur"}],type:[{required:!0,message:"请选择支付方式",trigger:"change"}],comment:[{required:!0,message:"请输入描述",trigger:"blur"}],payMoney:[{required:!0,message:"请选择交易方式",trigger:"change"}]}}},mounted:function(){var e=this;this.getStorage(),this.pingzhengzihao(),this._ajax("userAccounts/selectClassName",{},function(t){e.list=t}),"false"==this.$route.query.checked?this.checked=!1:this.checked=!0},methods:{gudingzichan_jieshou:function(e){0==e?this.gudingzichan_kaiguan=!1:(this.guding_form=e,this.tiqubaocun("guding"))},tiqubaocun:function(e){var t=this,a="",i="",n="",s="",r="";this.shengchengpingzheng&&this.user.tableData.forEach(function(e){a+=e.zhaiyao+",",""==e.jie?i+="0,":i+=e.jie+",",""==e.dai?n+="0,":n+=e.dai+",",s+=e.name.split(",")[0]+",",r+=e.name.split(",")[1]+","}),"guding"==e?this.checked?(this.form.comment=this.user.tableData[0].zhaiyao,this._ajax("userAccounts/addFlowingWaterInvoiceCertificate",o()({uuid:this.uuid,workAccountId:this.accountId,certificateAbstract:a,totalDebitMoney:i,totalCreditMoney:n,accountantSubject:s,accountantCode:r},this.form,{time:this.form.accountsDate,certificateNumber:this.form.code},JSON.parse(sessionStorage.getItem("tianjiafapiao_data")),{type1:0},this.guding_form,{type2:1}),function(e){t._message(1,"保存成功"),sessionStorage.removeItem("tianjiafapiao_data"),t.$router.push({path:"/home/fapiao/fapiaoguanli"})})):this._ajax("userAccounts/addCertificateInvoice",o()({uuid:this.uuid,workAccountId:this.accountId,certificateAbstract:a,totalDebitMoney:i,totalCreditMoney:n,accountantSubject:s,accountantCode:r,time:this.form.accountsDate,certificateNumber:this.form.code},JSON.parse(sessionStorage.getItem("tianjiafapiao_data")),{type1:0},this.guding_form,{type2:1}),function(e){t._message(1,"保存成功"),sessionStorage.removeItem("tianjiafapiao_data"),t.$router.push({path:"/home/fapiao/fapiaoguanli"})}):this.checked?(this.form.comment=this.user.tableData[0].zhaiyao,this._ajax("userAccounts/addFlowingWaterInvoiceCertificate",o()({uuid:this.uuid,workAccountId:this.accountId,certificateAbstract:a,totalDebitMoney:i,totalCreditMoney:n,accountantSubject:s,accountantCode:r},this.form,{time:this.form.accountsDate,certificateNumber:this.form.code},JSON.parse(sessionStorage.getItem("tianjiafapiao_data")),{type1:0}),function(e){t._message(1,"保存成功"),sessionStorage.removeItem("tianjiafapiao_data"),t.$router.push({path:"/home/fapiao/fapiaoguanli"})})):this._ajax("userAccounts/addCertificateInvoice",o()({uuid:this.uuid,workAccountId:this.accountId,certificateAbstract:a,totalDebitMoney:i,totalCreditMoney:n,accountantSubject:s,accountantCode:r,time:this.form.accountsDate,certificateNumber:this.form.code},JSON.parse(sessionStorage.getItem("tianjiafapiao_data")),{type1:0}),function(e){t._message(1,"保存成功"),sessionStorage.removeItem("tianjiafapiao_data"),t.$router.push({path:"/home/fapiao/fapiaoguanli"})})},pingzhengzihao:function(){var e=this;this._ajax("userHomePage/selectCertificateNumber",{uuid:this.uuid,workAccountId:this.accountId,time:this.form.accountsDate},function(t){e.form.code=t.number})},btn_shengchengpingzheng:function(){var e=this;this.user.tableData=[{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:0},{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:1},{name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:2}],0==this.two.length||""!=this.form.classify?this.$refs.form.validate(function(t){if(!t)return e._message(2,"请先将信息填写完整"),!1;"220201"==e.form.two1.split(",")[4]?e.user.tableData[0].name="应付账款,220201":"1101"==e.form.two1.split(",")[4]?e.user.tableData[0].name="股票,110101":"1002"==e.form.two1.split(",")[4]?e.user.tableData[0].name="默认银行账户,100201":"1001"==e.form.two1.split(",")[4]?e.user.tableData[0].name="人民币,100101":e.user.tableData[0].name=e.form.two1.split(",")[2]+","+e.form.two1.split(",")[4],1==e.form.type?0==e.form.payMoney?e.user.tableData[1].name="默认银行账户,100201":1==e.form.payMoney?e.user.tableData[1].name="人民币,100101":2==e.form.payMoney?e.user.tableData[1].name="微信公司账户,100203":3==e.form.payMoney?e.user.tableData[1].name="微信法人账户,101202":4==e.form.payMoney?e.user.tableData[1].name="支付宝公司账户,100202":5==e.form.payMoney&&(e.user.tableData[1].name="支付宝法人账户,101201"):0==e.form.type&&(0==e.form.direction?e.user.tableData[1].name="应收账款,112201":1==e.form.direction&&(e.user.tableData[1].name="应付账款,220201")),1==e.form.direction?(e.user.tableData[0].dai_show=!0,e.user.tableData[0].jie=JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).priceTaxTotal,e.user.tableData[1].jie_show=!0,e.user.tableData[1].dai=JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).money):0==e.form.direction&&(e.user.tableData[0].jie_show=!0,e.user.tableData[0].dai=JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).priceTaxTotal,e.user.tableData[1].dai_show=!0,e.user.tableData[1].jie=JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).money),1==e.form.direction?(e.user.tableData[2].name="进项税额,22210101",e.user.tableData[2].dai_show=!0,e.user.tableData[2].jie=Number(JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).priceTaxTotal-JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).money).toFixed(2)):0==e.form.direction&&(e.user.tableData[2].name="销项税额,22210106",e.user.tableData[2].jie_show=!0,e.user.tableData[2].dai=Number(JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).priceTaxTotal-JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).money).toFixed(2)),e.shengchengpingzheng=!0}):this._message(2,"有二级分类必须选择二级分类")},jie_change:function(e){var t=this.user.tableData.findIndex(function(t){return t.index==e.index}),a=!1;for(var i in e.jie)if(""!=e.jie[i]&&"dian"!=i){a=!0;break}a?this.user.tableData[t].dai_show=!0:(this.user.tableData[t].dai_show=!1,this.user.tableData[t].jie_show=!1)},dai_change:function(e){var t=this.user.tableData.findIndex(function(t){return t.index==e.index}),a=!1;for(var i in e.dai)if(""!=e.dai[i]&&"dian"!=i){a=!0;break}a?this.user.tableData[t].jie_show=!0:(this.user.tableData[t].dai_show=!1,this.user.tableData[t].jie_show=!1)},add:function(){this.index+=1,this.user.tableData.push({name:"",zhaiyao:"",jie:"",dai:"",jie_show:!1,dai_show:!1,index:this.index})},change_fangxiang:function(e){var t=this;this._ajax("userAccounts/selectSubjectsDictionary",{uuid:this.uuid,accountId:this.accountId,name:"",flag:this.form.direction},function(e){t.one=e,t.form.one1="",t.form.two1=""})},change_two:function(e){this.form.classify=e.split(",")[2],this.form.parentId=e.split(",")[1],this.form.subjectId=e.split(",")[0],this.guding_type=e.split(",")[3]},change_one:function(e){var t=this;this._ajax("userAccounts/selectSubjects2Dictionary",{uuid:this.uuid,accountId:this.accountId,id:e,flag:this.form.direction,name:""},function(e){t.two=e,t.form.two1=""})},save:function(){var e=this;if(isNaN(Number(this.form.code))||Number(this.form.code)<=0)this._message(2,"凭证字号格式不正确");else if(this.shengchengpingzheng){var t=0,a=0,i=!1;this.user.tableData.forEach(function(e){""!=e.jie||""!=e.dai?(""!=e.jie&&(t+=Number(e.jie)),""!=e.dai&&(a+=Number(e.dai))):i=!0}),i?this._message(2,"请将信息填写完整"):this.$refs.user.validate(function(i){if(!i)return!1;t==a?JSON.parse(sessionStorage.getItem("tianjiafapiao_data")).money>5e3&&1==e.guding_type?e.gudingzichan_kaiguan=!0:e.tiqubaocun():e._message(2,"借贷不平衡")})}else this._message(2,"请生成凭证")}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{background:"#FFF",padding:"2vw"}},[a("div",{staticStyle:{"font-size":"30px",color:"#1C2023","text-align":"center"}},[e._v("添加凭证")]),e._v(" "),a("div",{staticStyle:{border:"1px solid #F8F8FF",padding:"2vh 2vw","margin-top":"2vh"}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{width:"60%"}},[a("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,rules:e.rules}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{width:"40%"}},[a("el-form-item",{attrs:{label:"方向：",prop:"direction"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:e.change_fangxiang},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},[a("el-option",{attrs:{label:"收",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"支",value:"1"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"25%"}},[a("el-form-item",{attrs:{label:"分类：",prop:"one1"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请先选择方向"},on:{change:e.change_one},model:{value:e.form.one1,callback:function(t){e.$set(e.form,"one1",t)},expression:"form.one1"}},e._l(e.one,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"25%"}},[a("el-form-item",{attrs:{label:" "}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请先选择一级分类"},on:{change:e.change_two},model:{value:e.form.two1,callback:function(t){e.$set(e.form,"two1",t)},expression:"form.two1"}},e._l(e.two,function(e){return a("el-option",{key:e.id,attrs:{label:e.new_subjects_name,value:e.id+","+e.parent_id+","+e.name+","+e.type+","+e.code}})}),1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"60%"}},[a("el-form-item",{attrs:{label:"交易方式：",prop:"payMoney"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.payMoney,callback:function(t){e.$set(e.form,"payMoney",t)},expression:"form.payMoney"}},[a("el-option",{attrs:{label:"银行转账",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"现金支付",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"微信（公司账号）",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"微信（法人个人账号）",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"支付宝（公司账号）",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"支付宝（法人个人账号）",value:"5"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"30%"}},[a("el-form-item",{attrs:{label:"支付状态","label-width":"100px",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"已付",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"未付",value:"0"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"30%"}},[a("el-form-item",{attrs:{label:"凭证字号：",prop:"code"}},[a("el-form-item",{attrs:{label:"第",prop:"code","label-width":"20px"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"1%"}},[a("el-form-item",{attrs:{label:"号",prop:"","label-width":"30px"}})],1),e._v(" "),a("div",{staticStyle:{width:"20%"}},[a("el-form-item",{attrs:{label:"日期：",prop:""}},[a("el-date-picker",{staticStyle:{"margin-left":"20px"},attrs:{"picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd",type:"date"},on:{change:e.pingzhengzihao},model:{value:e.form.accountsDate,callback:function(t){e.$set(e.form,"accountsDate",t)},expression:"form.accountsDate"}})],1)],1)])])],1),e._v(" "),a("div",{staticStyle:{width:"40%",display:"flex","justify-content":"flex-end","align-items":"flex-start"}},[a("el-button",{attrs:{type:"warning"},on:{click:e.btn_shengchengpingzheng}},[e._v("生成凭证")])],1)]),e._v(" "),a("el-form",{ref:"user",attrs:{model:e.user}},[e.shengchengpingzheng?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.user.tableData}},[a("el-table-column",{attrs:{prop:"",label:"科目",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"",prop:"tableData."+t.$index+".name",rules:[{required:!0,message:"请输入科目",trigger:"change"}]}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}},e._l(e.list,function(e,t){return a("el-option",{key:e.id,attrs:{label:e.new_subjects_name,value:e.subjects_name+","+e.subjects_number}})}),1)],1)]}}],null,!1,2872219878)}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"摘要",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"",prop:"tableData."+t.$index+".zhaiyao",rules:[{required:!0,message:"请输入摘要",trigger:"blur"}]}},[a("el-input",{attrs:{placeholder:""},model:{value:t.row.zhaiyao,callback:function(a){e.$set(t.row,"zhaiyao",a)},expression:"scope.row.zhaiyao"}})],1)]}}],null,!1,1407594580)}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"借方金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:t.row.jie_show,placeholder:""},on:{input:function(a){return e.jie_change(t.row)}},model:{value:t.row.jie,callback:function(a){e.$set(t.row,"jie",a)},expression:"scope.row.jie"}})]}}],null,!1,4195219088)}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"贷方金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:t.row.dai_show,placeholder:""},on:{input:function(a){return e.dai_change(t.row)}},model:{value:t.row.dai,callback:function(a){e.$set(t.row,"dai",a)},expression:"scope.row.dai"}})]}}],null,!1,1165719386)})],1):e._e()],1),e._v(" "),a("div",{staticStyle:{color:"#909399","margin-top":"10px","margin-left":"10px"}},[e._v("借方合计:"+e._s(e.heji))]),e._v(" "),a("div",{staticStyle:{color:"#909399","margin-top":"10px","margin-left":"10px"}},[e._v("贷方合计:"+e._s(e.heji1))]),e._v(" "),a("div",{staticStyle:{"margin-top":"2vh"}},[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("同时生成流水")])],1),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"5vh"}},[a("el-button",{attrs:{type:"warning"},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"5vw"},attrs:{type:"info"},on:{click:function(t){return e.$router.push({path:"/home/pingzhengguanli/xinzengfapiao",query:{from:"fapiaoguanli"}})}}},[e._v("返回")])],1)],1)]),e._v(" "),e.gudingzichan_kaiguan?a("gudingzichan",{on:{gudingzichan_jieshou:e.gudingzichan_jieshou}}):e._e()],1)},staticRenderFns:[]};var c=a("C7Lr")(r,l,!1,function(e){a("ACs0")},null,null);t.default=c.exports}});
//# sourceMappingURL=54.bcd038fea41d437e4fe6.js.map