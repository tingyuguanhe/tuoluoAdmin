webpackJsonp([6],{toyD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("P9l9"),l={data:function(){return{tableData:[],total:0,pageSize:20,currentPage:1,dialogFormVisible:!1,form:{name:"",ip:"",band:""},modalTitle:"添加线路",modalRules:{name:[{required:!0,message:"请输入线路名称",trigger:"blur"}],ip:[{required:!0,message:"请输入线路ip",trigger:"blur"}],band:[{required:!0,message:"请输入带宽",trigger:"blur"}]}}},mounted:function(){this.getVpnListData()},methods:{addVpn:function(){this.dialogFormVisible=!0,this.form.name="",this.form.ip="",this.form.band=""},getVpnListData:function(){var t=this,e={page:this.currentPage,page_size:this.pageSize};Object(o.m)(e).then(function(e){t.tableData=e.results,t.total=e.count})},handleCurrentChange:function(t){console.log("当前页: "+t),this.currentPage=t,this.getVpnListData()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=e.form;Object(o.d)(a).then(function(t){t&&t.vpn_host?(e.$message.success("添加成功"),e.dialogFormVisible=!1,e.getVpnListData()):e.$message.success("添加失败")})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"success"},on:{click:t.addVpn}},[t._v("添加线路")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"160px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tun_port",label:"端口"}}),t._v(" "),a("el-table-column",{attrs:{label:"带宽"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.band)+"M\n            ")]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[20],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.modalTitle,visible:t.dialogFormVisible,width:"500px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px",rules:t.modalRules}},[a("el-form-item",{attrs:{label:"线路名称",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"线路ip",prop:"ip"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.ip,callback:function(e){t.$set(t.form,"ip",e)},expression:"form.ip"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"带宽大小",prop:"band"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.band,callback:function(e){t.$set(t.form,"band",e)},expression:"form.band"}})],1),t._v(" "),a("el-form-item",{staticClass:"modal_footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,r,!1,function(t){a("wSl3")},"data-v-54377710",null);e.default=i.exports},wSl3:function(t,e){}});
//# sourceMappingURL=6.76f5a56a734436b78534.js.map