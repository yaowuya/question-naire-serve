(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0833971a"],{"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"10e1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{staticClass:"pl-5",attrs:{inline:!0,model:e.queryForm}},[r("el-form-item",{attrs:{label:"角色ID"}},[r("el-input",{attrs:{placeholder:"请输入角色ID",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"success"},on:{click:function(t){return t.stopPropagation(),e.search()}}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.create()}}},[e._v("新增")])],1)],1),e._v(" "),r("avue-crud",{ref:"crud",attrs:{data:e.data,option:e.option,page:e.page,"table-loading":e.loading},on:{"update:page":function(t){e.page=t},"size-change":e.sizeChange,"current-change":e.currentChange},scopedSlots:e._u([{key:"menu",fn:function(t){var n=t.row;return[r("el-button",{attrs:{size:"mini"},on:{click:function(t){return t.stopPropagation(),e.update(n)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return t.stopPropagation(),e.remove(n)}}},[e._v("删除")])]}}])}),e._v(" "),r("el-dialog",{attrs:{title:e.isEdit?"编辑":"新增",visible:e.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色ID",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色名称",prop:"chinese"}},[r("el-input",{model:{value:e.ruleForm.chinese,callback:function(t){e.$set(e.ruleForm,"chinese",t)},expression:"ruleForm.chinese"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(t){return e.cancel(t)}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.save(t)}}},[e._v("确 定")])],1)],1)],1)},i=[],a=(r("7f7f"),r("386d"),r("96cf"),r("1da1")),o={name:"Role",data:function(){return{queryForm:{name:""},page:{pageSizes:[10,20,30,40],currentPage:1,total:0,pageSize:10},data:[],rolesList:[],loading:!1,option:{emptyText:"暂无数据",columnBtn:!1,refreshBtn:!1,addBtn:!1,delBtn:!1,editBtn:!1,border:!0,stripe:!0,selection:!1,indexFixed:!1,selectionFixed:!1,align:"center",menuAlign:"center",menuWidth:250,column:[{label:"角色ID",prop:"name",overHidden:!0},{label:"角色名称",prop:"chinese",overHidden:!0}]},isEdit:!1,centerDialogVisible:!1,ruleForm:{name:"",chinese:""},rules:{name:[{required:!0,message:"请输入角色ID",trigger:"blur"}]},rowId:""}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.search();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{initForm:function(){this.ruleForm={name:"",chinese:""}},search:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page.currentPage=1,e.next=3,this.query();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),query:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$api.sys.getRole({name:this.queryForm.name,pageSize:this.page.pageSize,pageNum:this.page.currentPage});case 4:t=e.sent,t.result?(this.page.total=t.total,this.data=t.data):this.$message.error(t.message),this.loading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.loading=!1;case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),sizeChange:function(e){this.page.currentPage=1,this.page.pageSize=e,this.query()},currentChange:function(e){this.page.currentPage=e,this.query()},create:function(){this.resetForm("ruleForm"),this.initForm(),this.centerDialogVisible=!0,this.isEdit=!1},update:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.centerDialogVisible=!0,this.isEdit=!0,this.ruleForm=this.$CopyRow(this.ruleForm,t),this.rowId=t._id;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,confirmButtonClass:"el-button--danger"}).then(Object(a["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,t.$api.sys.deleteRole({id:e._id});case 3:n=r.sent,t.loading=!1,n.result?(t.$message.success("删除成功"),t.query()):t.$message.error(n.message);case 6:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"}),t.loading=!1}))},cancel:function(){this.centerDialogVisible=!1},save:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.isEdit?e.edit():e.add()}))},edit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.sys.editRole({id:this.rowId,data:this.ruleForm});case 4:r=e.sent,r.result?(this.centerDialogVisible=!1,this.$message.success("修改成功"),this.query()):this.$message.error(r.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),add:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.sys.addRole(this.ruleForm);case 4:r=e.sent,r.result?(this.centerDialogVisible=!1,this.$message.success("新增成功"),this.query()):this.$message.error(r.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),localLoading:function(){var e=this.$loading({lock:!0});return e},resetForm:function(e){void 0!==this.$refs[e]&&(this.$refs[e].resetFields(),this.$refs[e].clearValidate())}}},s=o,c=r("2877"),u=Object(c["a"])(s,n,i,!1,null,"ea57f7d6",null);t["default"]=u.exports},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),a=r("79e5"),o=r("be13"),s=r("2b4c"),c=r("520a"),u=s("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var h=s(e),f=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),d=f?!a((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[h](""),!t})):void 0;if(!f||!d||"replace"===e&&!l||"split"===e&&!p){var g=/./[h],m=r(o,h,""[e],(function(e,t,r,n,i){return t.exec===c?f&&!i?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),v=m[0],b=m[1];n(String.prototype,e,v),i(RegExp.prototype,h,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"386d":function(e,t,r){"use strict";var n=r("cb7c"),i=r("83a1"),a=r("5f1b");r("214f")("search",1,(function(e,t,r,o){return[function(r){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},function(e){var t=o(r,e,this);if(t.done)return t.value;var s=n(e),c=String(this),u=s.lastIndex;i(u,0)||(s.lastIndex=0);var l=a(s,c);return i(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]}))},"520a":function(e,t,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[s]||0!==t[s]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(o=function(e){var t,r,o,l,p=this;return u&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(t=p[s]),o=i.call(p,e),c&&o&&(p[s]=p.global?o.index+o[0].length:t),u&&o&&o.length>1&&a.call(o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);