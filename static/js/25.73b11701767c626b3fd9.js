webpackJsonp([25],{Y1JG:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,i=a("a3Yh"),o=a.n(i),l=a("IfhF"),s=a("Ltkp"),u=(t={name:"xianjinliuliangbiao",mixins:[l.a],mounted:function(){this.getStorage(),this.list()},components:{aaa:s.default},data:function(){return{super_list:["新闻动态","会议动态","重要会见","媒体报道","图片资料","视频资料","下载中心","媒体合作伙伴","博鳌观点"],de_list:[{img:"http://www.boaoforum.org/u/cms/www/201907/01110154wds0.jpg",content:"李保东秘书长会见新西兰国家党主席古..."},{img:"http://www.boaoforum.org/u/cms/www/201906/27100536a91g.jpg",content:"李保东秘书长会见美国科恩公司高级顾..."},{img:"http://www.boaoforum.org/u/cms/www/201906/11172421rv73.jpg",content:"李保东秘书长会见全球免疫联盟首席执..."},{img:"http://www.boaoforum.org/u/cms/www/201906/19111340gcf8.jpg",content:"周小川副理事长会见爱沙尼亚央行行长..."},{img:"http://www.boaoforum.org/u/cms/www/201906/07220102p98u.jpg",content:"周小川副理事长会见祖布科夫理事"}],date:(new Date).getFullYear()+"-"+(Array(2).join(0)+(Number((new Date).getMonth())+1)).slice(-2),tableData:[{name:"一、经营活动产生的现金流量：",index:"",nian:"",qi:""},{name:"销售产成品、商品、提供劳务收到的现金",index:"1",nian:"",qi:""},{name:"收到其他与经济活动有关的现金",index:"2",nian:"",qi:""},{name:"购买原材料，商品，接受劳务支付的现金",index:"3",nian:"",qi:""},{name:"支付的职工薪酬",index:"4",nian:"",qi:""},{name:"支付的税费",index:"5",nian:"",qi:""},{name:"支付其他与经营活动有关的现金",index:"6",nian:"",qi:""},{name:"经营活动产生的现金流量净额",index:"7",nian:"",qi:""},{name:"二、投资活动产生的现金流量：",index:"",nian:"",qi:""},{name:"收回短期投资、长期债券投资和长期股权投资收到的现金",index:"8",nian:"",qi:""},{name:"取得投资收益收到的现金",index:"9",nian:"",qi:""},{name:"处置固定资产、无形资产和其他非流动资产收回的现金净额",index:"10",nian:"",qi:""},{name:"短期投资、长期债券投资和长期股权投资支付的现金",index:"11",nian:"",qi:""},{name:"购建固定资产、无形资产和其他非流动资产支付的现金",index:"12",nian:"",qi:""},{name:"投资活动产生的现金流量净额",index:"13",nian:"",qi:""},{name:"三、筹资活动产生的现金流量：",index:"",nian:"",qi:""},{name:"取得借款收到的现金",index:"14",nian:"",qi:""},{name:"吸收投资者投资收到的下您",index:"15",nian:"",qi:""},{name:"偿还借款本金支付的现金",index:"16",nian:"",qi:""},{name:"偿还借款利息支付的现金",index:"17",nian:"",qi:""},{name:"分配利润支付的现金",index:"18",nian:"",qi:""},{name:"筹资活动产生的现金流量净额",index:"19",nian:"",qi:""},{name:"四、现金净增加额",index:"20",nian:"",qi:""},{name:"加：期初现金余额",index:"21",nian:"",qi:""},{name:"五、期末现金余额",index:"22",nian:"",qi:""}],total:0,dangqianye:1,pageSize:10}}},o()(t,"mounted",function(){this.getStorage(),this.list()}),o()(t,"methods",{change_date:function(){this.dangqianye=1,this.list()},list:function(){var e=this;this._ajax("userReportForm/selectCashFlow",{uuid:this.uuid,workAccountId:this.accountId,timeMonth:this.date,timeYear:this.date.split("-")[0]},function(n){e.tableData[1].nian=n.FirstModule.SalesReceivedCash.AmountYear,e.tableData[1].qi=n.FirstModule.SalesReceivedCash.AmountMonth,e.tableData[2].nian=n.FirstModule.OtherOperatingCash.AmountYear,e.tableData[2].qi=n.FirstModule.OtherOperatingCash.AmountMonth,e.tableData[3].nian=n.FirstModule.CashForPurchasePayment.AmountYear,e.tableData[3].qi=n.FirstModule.CashForPurchasePayment.AmountMonth,e.tableData[4].nian=n.FirstModule.PayableRemuneration.AmountYear,e.tableData[4].qi=n.FirstModule.PayableRemuneration.AmountMonth,e.tableData[5].nian=n.FirstModule.PaymentOfTaxesAndFees.AmountYear,e.tableData[5].qi=n.FirstModule.PaymentOfTaxesAndFees.AmountMonth,e.tableData[6].nian=n.FirstModule.ActivityRelatedCash.AmountYear,e.tableData[6].qi=n.FirstModule.ActivityRelatedCash.AmountMonth,e.tableData[7].nian=n.FirstModule.NetCashFlow.AmountYear,e.tableData[7].qi=n.FirstModule.NetCashFlow.AmountMonth,e.tableData[9].nian=n.TheSecondModule.RecoveryOfInvestmentCash.AmountYear,e.tableData[9].qi=n.TheSecondModule.RecoveryOfInvestmentCash.AmountMonth,e.tableData[10].nian=n.TheSecondModule.IncomeFromInvestment.AmountYear,e.tableData[10].qi=n.TheSecondModule.IncomeFromInvestment.AmountMonth,e.tableData[11].nian=n.TheSecondModule.CashDisposalOfAssets.AmountYear,e.tableData[11].qi=n.TheSecondModule.CashDisposalOfAssets.AmountMonth,e.tableData[12].nian=n.TheSecondModule.CashForInvestment.AmountYear,e.tableData[12].qi=n.TheSecondModule.CashForInvestment.AmountMonth,e.tableData[13].nian=n.TheSecondModule.AssetPurchasePayment.AmountYear,e.tableData[13].qi=n.TheSecondModule.AssetPurchasePayment.AmountMonth,e.tableData[14].nian=n.TheSecondModule.InvestmentGeneratesCash.AmountYear,e.tableData[14].qi=n.TheSecondModule.InvestmentGeneratesCash.AmountMonth,e.tableData[16].nian=n.TheThirdModule.CashReceivedOnLoan.AmountYear,e.tableData[16].qi=n.TheThirdModule.CashReceivedOnLoan.AmountMonth,e.tableData[17].nian=n.TheThirdModule.InvestorInvestment.AmountYear,e.tableData[17].qi=n.TheThirdModule.InvestorInvestment.AmountMonth,e.tableData[18].nian=n.TheThirdModule.RepaymentOfLoanPrincipal.AmountYear,e.tableData[18].qi=n.TheThirdModule.RepaymentOfLoanPrincipal.AmountMonth,e.tableData[19].nian=n.TheThirdModule.InterestOnRepaymentOfLoans.AmountYear,e.tableData[19].qi=n.TheThirdModule.InterestOnRepaymentOfLoans.AmountMonth,e.tableData[20].nian=n.TheThirdModule.DistributionOfProfits.AmountYear,e.tableData[20].qi=n.TheThirdModule.DistributionOfProfits.AmountMonth,e.tableData[21].nian=n.TheThirdModule.FundingActivities.AmountYear,e.tableData[21].qi=n.TheThirdModule.FundingActivities.AmountMonth,e.tableData[22].nian=n.TheFourthModule.NetIncreaseInCash.AmountYear,e.tableData[22].qi=n.TheFourthModule.NetIncreaseInCash.AmountMonth,e.tableData[23].nian=n.TheFourthModule.InitialCashBalance.AmountYear,e.tableData[23].qi=n.TheFourthModule.InitialCashBalance.AmountMonth,e.tableData[24].nian=n.FifthModule.EndCashBalance.AmountYear,e.tableData[24].qi=n.FifthModule.EndCashBalance.AmountMonth})},tableRowClassName:function(e){e.row;return e.rowIndex%2!=0?"lan":""},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},expor:function(){}}),t),r={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("div",{staticStyle:{background:"#FFF",padding:"2vh 2vw","margin-bottom":"10vh"}},[a("div",{staticStyle:{"font-size":"30px",color:"#1C2023","text-align":"center"}},[e._v("现金流量表")]),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-button",{attrs:{type:"warning"},on:{click:function(n){return e.exportFunc("id","现金流量表")}}},[e._v("导出")]),e._v(" "),a("el-date-picker",{staticStyle:{"margin-left":"20px"},attrs:{"value-format":"yyyy-MM",type:"month",placeholder:"选择月"},on:{change:e.change_date},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}})],1),e._v(" "),a("div",{attrs:{id:"id"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"name",label:"项目",width:"400"},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row.name.includes("一")||n.row.name.includes("二")||n.row.name.includes("三")||n.row.name.includes("四")||n.row.name.includes("五")?a("span",{staticStyle:{"font-size":"22px"}},[e._v(e._s(n.row.name))]):a("span",{},[e._v(e._s(n.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"index",label:"行次",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nian",label:"本年累计金额"},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row.leijijine<0?a("span",{staticStyle:{color:"#E43838"}},[e._v(e._s(n.row.nian))]):a("span",{staticStyle:{color:"#606972"}},[e._v(e._s(n.row.nian))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"qi",label:"本期金额"},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row.benqijine<0?a("span",{staticStyle:{color:"#E43838"}},[e._v(e._s(n.row.qi))]):a("span",{staticStyle:{color:"#606972"}},[e._v(e._s(n.row.qi))])]}}])})],1)],1)])])},staticRenderFns:[]};var d=a("C7Lr")(u,r,!1,function(e){a("vyNZ")},null,null);n.default=d.exports},vyNZ:function(e,n){}});
//# sourceMappingURL=25.73b11701767c626b3fd9.js.map