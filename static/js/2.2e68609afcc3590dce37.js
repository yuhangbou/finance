webpackJsonp([2],{"+Ip2":function(t,e,i){var n=i("PUvy");t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},"+U4r":function(t,e,i){var n=i("lfm9"),a=i("nnR8");t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return a(this)}}},"+pOp":function(t,e,i){"use strict";var n=i("CqE5"),a=i("+Ip2");t.exports=i("5XdJ")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(a(this,"Set"),t=0===t?0:t,t)}},n)},"5XdJ":function(t,e,i){"use strict";var n=i("BE4u"),a=i("8leu"),o=i("jE8/"),r=i("9tun"),s=i("/9oH"),c=i("Bxtf"),l=i("2bfV"),u=i("JzOC"),f=i("PUvy"),d=i("tduP"),p=i("Mr+r").f,h=i("UBIS")(0),v=i("berT");t.exports=function(t,e,i,_,g,m){var b=n[t],y=b,w=g?"set":"add",x=y&&y.prototype,S={};return v&&"function"==typeof y&&(m||x.forEach&&!r(function(){(new y).entries().next()}))?(y=e(function(e,i){u(e,y,t,"_c"),e._c=new b,void 0!=i&&l(i,g,e[w],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!m||"clear"!=t)&&s(y.prototype,t,function(i,n){if(u(this,y,t),!e&&m&&!f(i))return"get"==t&&void 0;var a=this._c[t](0===i?0:i,n);return e?this:a})}),m||p(y.prototype,"size",{get:function(){return this._c.size}})):(y=_.getConstructor(e,t,g,w),c(y.prototype,i),o.NEED=!0),d(y,t),S[t]=y,a(a.G+a.W+a.F,S),m||_.setStrong(y,t,g),y}},"9wH3":function(t,e,i){var n=i("8leu");n(n.P+n.R,"Set",{toJSON:i("+U4r")("Set")})},B1Be:function(t,e,i){i("vQp7")("Set")},CqE5:function(t,e,i){"use strict";var n=i("Mr+r").f,a=i("WNG3"),o=i("Bxtf"),r=i("mR54"),s=i("JzOC"),c=i("2bfV"),l=i("Bf4F"),u=i("lZSZ"),f=i("8rWH"),d=i("berT"),p=i("jE8/").fastKey,h=i("+Ip2"),v=d?"_s":"size",_=function(t,e){var i,n=p(e);if("F"!==n)return t._i[n];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,l){var u=t(function(t,n){s(t,u,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=n&&c(n,i,t[l],t)});return o(u.prototype,{clear:function(){for(var t=h(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var i=h(this,e),n=_(i,t);if(n){var a=n.n,o=n.p;delete i._i[n.i],n.r=!0,o&&(o.n=a),a&&(a.p=o),i._f==n&&(i._f=a),i._l==n&&(i._l=o),i[v]--}return!!n},forEach:function(t){h(this,e);for(var i,n=r(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(n(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!_(h(this,e),t)}}),d&&n(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,i){var n,a,o=_(t,e);return o?o.v=i:(t._l=o={i:a=p(e,!0),k:e,v:i,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[v]++,"F"!==a&&(t._i[a]=o)),t},getEntry:_,setStrong:function(t,e,i){l(t,e,function(t,i){this._t=h(t,e),this._k=i,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))},i?"entries":"values",!i,!0),f(e)}}},EvXN:function(t,e,i){i("ZmlZ")("Set")},GsIs:function(t,e,i){"use strict";var n=i("Mr+r"),a=i("cM3n");t.exports=function(t,e,i){e in t?n.f(t,e,a(0,i)):t[e]=i}},IHPB:function(t,e,i){"use strict";e.__esModule=!0;var n,a=i("kfHR"),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,o.default)(t)}},KfEB:function(t,e,i){i("+Y4o"),i("mxCW"),i("SXOF"),i("+pOp"),i("9wH3"),i("B1Be"),i("EvXN"),t.exports=i("Rv9F").Set},KvGc:function(t,e,i){"use strict";var n=i("mR54"),a=i("8leu"),o=i("Myb3"),r=i("Bhet"),s=i("kWAb"),c=i("1bUF"),l=i("GsIs"),u=i("d+Iz");a(a.S+a.F*!i("epm+")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,f,d=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,_=void 0!==v,g=0,m=u(d);if(_&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&s(m))for(i=new p(e=c(d.length));e>g;g++)l(i,g,_?v(d[g],g):d[g]);else for(f=m.call(d),i=new p;!(a=f.next()).done;g++)l(i,g,_?r(f,v,[a.value,g],!0):a.value);return i.length=g,i}})},UBIS:function(t,e,i){var n=i("mR54"),a=i("sX97"),o=i("Myb3"),r=i("1bUF"),s=i("ssGg");t.exports=function(t,e){var i=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,_,g=o(e),m=a(g),b=n(s,h,3),y=r(m.length),w=0,x=i?p(e,y):c?p(e,0):void 0;y>w;w++)if((d||w in m)&&(_=b(v=m[w],w,g),t))if(i)x[w]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:x.push(v)}else if(u)return!1;return f?-1:l||u?u:x}}},YwZI:function(t,e){},ZTYM:function(t,e,i){var n=i("PUvy"),a=i("X8cY"),o=i("YlT+")("species");t.exports=function(t){var e;return a(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},ZmlZ:function(t,e,i){"use strict";var n=i("8leu"),a=i("eu6x"),o=i("mR54"),r=i("2bfV");t.exports=function(t){n(n.S,t,{from:function(t){var e,i,n,s,c=arguments[1];return a(this),(e=void 0!==c)&&a(c),void 0==t?new this:(i=[],e?(n=0,s=o(c,arguments[2],2),r(t,!1,function(t){i.push(s(t,n++))})):r(t,!1,i.push,i),new this(i))}})}},hHD0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("zsLt"),a=i.n(n),o=i("IHPB"),r=i.n(o),s=i("4YfN"),c=i.n(s),l=i("lC5x"),u=i.n(l),f=i("ZLEe"),d=i.n(f),p=i("rVsN"),h=i.n(p),v=i("J0Oq"),_=i.n(v),g={name:"xianjinliuliangbiao",mixins:[i("IfhF").a],inject:["set_router"],data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()<new Date(JSON.parse(localStorage.getItem("start_date")))-864e5}},tableData_daochu:[],certificateUuid:"",dialogVisible:!1,tableData1:[],page_bind:1,pageSize_bind:10,total_bind:0,id:"",tableData:[],total:0,dangqianye:1,pageSize:10,multi:"",form:{certificateAbstract:"",startMoney:"",endMoney:"",creationTime:(new Date).getFullYear()+"-"+(Array(2).join(0)+(Number((new Date).getMonth())+1)).slice(-2),accountantSubject:""}}},mounted:function(){this.getStorage(),this.list()},methods:{daochu:function(){var t,e,i=(t=_()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new h.a(function(t,i){n._ajax("zip/zipCertificate",{uuid:n.uuid,workAccountId:n.accountId,certificateAbstract:n.form.certificateAbstract,accountantCode:n.form.accountantSubject,time:n.form.creationTime,startMoney:n.form.startMoney,endMoney:n.form.endMoney},function(n){var a=n.replace(/\'/g,'"'),o=JSON.parse(a);if(0==d()(o).length)i();else{var r=document.createElement("a");"csv"==e?r.setAttribute("href","http://"+o.csv):r.setAttribute("href","http://"+o.zip),document.body.appendChild(r),r.click(),document.body.removeChild(r),t()}})}));case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)}),n=this;(e=_()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("csv");case 2:i("zip");case 3:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})()},look_fapiao:function(t){this.set_router("/home/fapiao/fapiaoguanli"),this.$router.push({path:"/home/pingzhengguanli/look_fapiao",query:{invoiceId:t}})},jiechufapiao:function(t,e){var i=this;this._ajax("userAccounts/deleteCrtificateInvoic",{uuid:this.uuid,workAccountId:this.accountId,certificateUuid:t,invoiceId:e},function(t){i._message(1,"解除绑定成功"),i.list()})},search:function(){this.dangqianye=1,this.list()},congxianyoupiaojuxuanze:function(t){this.certificateUuid=t,this.list_bind()},list_bind:function(){var t=this;this._ajax("userAccounts/selectNoInvoice",{uuid:this.uuid,workAccountId:this.accountId,page:this.page_bind,pageSize:this.pageSize_bind},function(e){t.tableData1=e.PageInfo.list,t.total_bind=e.PageInfo.total,t.dialogVisible=!0})},handleSizeChange_bind:function(t){console.log("每页 "+t+" 条"),this.pageSize_bind=t,this.list_bind()},handleCurrentChange_bind:function(t){console.log("当前页: "+t),this.page_bind=t,this.list_bind()},dialogVisible_ok:function(){var t=this;""!=this.id?this._ajax("userAccounts/updateAccountFlag",{uuid:this.uuid,workAccountId:this.accountId,certificateUuid:this.certificateUuid,invoiceId:this.id},function(e){t._message(1,"绑定现有发票成功"),t.dialogVisible=!1,t.list(),t.id=""}):this._message(2,"请选择")},update_invoice:function(t){this.set_router("/home/fapiao/fapiaoguanli"),this.$router.push({path:"/home/pingzhengguanli/xinzengfapiao",query:{certificateUuid:t,from:"pingzhengguanli"}})},handleSelectionChange:function(t){var e=t.map(function(t){return t.id});this.multi=e.join(",")},del_many:function(){""!=this.multi?this.del():this._message(2,"请至少选择一项")},del_one:function(t){this.multi=t,this.del()},del:function(){var t=this;this._ajax("userAccounts/deleteCertificate",{uuid:this.uuid,workAccountId:this.accountId,certificateUuid:this.multi},function(e){t._message(1,"删除成功"),t.list(),t.multi=""})},duanhao:function(){var t=this;""==this.form.creationTime&&this._message(2,"请选择整理断号的月份"),this._ajax("userAccounts/updateCertificateFlag",{uuid:this.uuid,workAccountId:this.accountId,time:this.form.creationTime},function(e){t._message(1,"整理断号成功"),t.list()})},list:function(){var t=this;this._ajax("userAccounts/selectCertificate",c()({uuid:this.uuid,workAccountId:this.accountId,page:this.dangqianye,pageSize:this.pageSize},this.form),function(e){t.total=e.PageInfo.total;var i=[];e.PageInfo.list.forEach(function(t){i.push(t.certificate_uuid)});var n,o=[];[].concat(r()(new a.a(i))).forEach(function(t){o.push({id:t,list:[]})}),o.forEach(function(t){e.PageInfo.list.forEach(function(e){t.id==e.certificate_uuid&&t.list.push(e)})}),o.forEach(function(t){t.time=t.list[0].creationTime,t.code=t.list[0].certificate_number,t.user_invoice_id=t.list[0].user_invoice_id}),t.tableData=o,t.tableData.sort((n="code",function(t,e){return t[n]-e[n]}))})},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.pageSize=t,this.list()},handleCurrentChange:function(t){console.log("当前页: "+t),this.dangqianye=t,this.list()}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{background:"#FFF",padding:"2vh 2vw","margin-bottom":"10vh"}},[i("div",{staticStyle:{"font-size":"30px",color:"#1C2023","text-align":"center"}},[t._v("凭证管理")]),t._v(" "),i("div",{staticStyle:{border:"1px solid #F8F8FF",padding:"2vh 2vw","margin-top":"2vh"}},[i("div",{},[i("el-form",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{"label-width":"60px",model:t.form}},[i("div",{staticClass:"right"},[i("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.$router.push({path:"/home/pingzhengguanli/add_pingzheng"})}}},[t._v("添加凭证")])],1),t._v(" "),i("div",{staticClass:"right"},[i("el-button",{attrs:{type:"warning"},on:{click:t.duanhao}},[t._v("整理断号")])],1),t._v(" "),i("div",{staticClass:"right"},[i("el-button",{attrs:{type:"warning"},on:{click:t.del_many}},[t._v("批量删除")])],1),t._v(" "),i("div",{staticClass:"right"},[i("el-button",{attrs:{type:"warning"},on:{click:t.daochu}},[t._v("导出")])],1),t._v(" "),i("div",{staticClass:"right"},[i("el-form-item",{attrs:{label:"摘要"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入摘要"},model:{value:t.form.certificateAbstract,callback:function(e){t.$set(t.form,"certificateAbstract",e)},expression:"form.certificateAbstract"}})],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("el-form-item",{attrs:{label:"科目"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入科目"},model:{value:t.form.accountantSubject,callback:function(e){t.$set(t.form,"accountantSubject",e)},expression:"form.accountantSubject"}})],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("el-form-item",{attrs:{label:"","label-width":"0"}},[i("el-date-picker",{attrs:{"picker-options":t.pickerOptions,"value-format":"yyyy-MM",type:"month",placeholder:"选择月"},model:{value:t.form.creationTime,callback:function(e){t.$set(t.form,"creationTime",e)},expression:"form.creationTime"}})],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("el-form-item",{attrs:{label:"金额"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:""},model:{value:t.form.startMoney,callback:function(e){t.$set(t.form,"startMoney",e)},expression:"form.startMoney"}}),t._v(" "),i("div",{staticStyle:{display:"inline-block"}},[t._v("-")]),t._v(" "),i("el-input",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:""},model:{value:t.form.endMoney,callback:function(e){t.$set(t.form,"endMoney",e)},expression:"form.endMoney"}})],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1)])],1),t._v(" "),i("div",{attrs:{id:"id"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.row.list,"show-summary":!0}},[i("el-table-column",{attrs:{prop:"certificate_abstract",label:"摘要",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"accountant_subject",label:"科目",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"total_debit_money",label:"借方金额",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"total_credit_money",label:"贷方金额",width:""}})],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"生成时间",prop:"time"}}),t._v(" "),i("el-table-column",{attrs:{label:"凭证字号",prop:"code"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_invoice_id?t._e():i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.update_invoice(e.row.id)}}},[t._v("上传发票")]),t._v(" "),e.row.user_invoice_id?t._e():i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.congxianyoupiaojuxuanze(e.row.id)}}},[t._v("绑定现有发票")]),t._v(" "),e.row.user_invoice_id?i("span",{staticStyle:{color:"#409EFF"}},[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.look_fapiao(e.row.user_invoice_id)}}},[t._v("查看发票")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.jiechufapiao(e.row.id,e.row.user_invoice_id)}}},[t._v("解除绑定")])],1):t._e(),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.$router.push({path:"/home/pingzhengguanli/editor_pingzheng",query:{certificateUuid:e.row.id}})}}},[t._v("修改")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.del_one(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"1vh"}},[i("el-pagination",{attrs:{"current-page":t.dangqianye,"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),i("el-dialog",{attrs:{title:"",visible:t.dialogVisible,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-table",{attrs:{data:t.tableData1}},[i("el-table-column",{attrs:{prop:"",label:"单选",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-radio",{attrs:{label:e.row.id},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}},[t._v(" ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"creation_time",label:"上传时间",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"company_invoice_number",label:"发票号码",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"company_supplier_name",label:"供应商/客户名称",width:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"price_tax_total",label:"价税合计",width:""}})],1),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"1vh"}},[i("el-pagination",{attrs:{"current-page":t.page_bind,"page-sizes":[10,20,30,40],"page-size":t.pageSize_bind,layout:"total, sizes, prev, pager, next, jumper",total:t.total_bind},on:{"size-change":t.handleSizeChange_bind,"current-change":t.handleCurrentChange_bind}})],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.dialogVisible_ok}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var b=i("C7Lr")(g,m,!1,function(t){i("YwZI")},null,null);e.default=b.exports},kfHR:function(t,e,i){t.exports={default:i("lX5M"),__esModule:!0}},lX5M:function(t,e,i){i("mxCW"),i("KvGc"),t.exports=i("Rv9F").Array.from},nnR8:function(t,e,i){var n=i("2bfV");t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},ssGg:function(t,e,i){var n=i("ZTYM");t.exports=function(t,e){return new(n(t))(e)}},vQp7:function(t,e,i){"use strict";var n=i("8leu");t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},zsLt:function(t,e,i){t.exports={default:i("KfEB"),__esModule:!0}}});
//# sourceMappingURL=2.2e68609afcc3590dce37.js.map