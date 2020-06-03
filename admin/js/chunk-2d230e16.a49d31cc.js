(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e16"],{edbc:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{staticClass:"pl-5",attrs:{inline:!0,model:e.queryForm}},[r("el-form-item",{attrs:{label:"问卷名称"}},[r("el-input",{attrs:{placeholder:"请输入问卷名称",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"success"},on:{click:function(t){return t.stopPropagation(),e.search()}}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.create()}}},[e._v("新增")])],1)],1),e._v(" "),r("avue-crud",{ref:"crud",attrs:{data:e.data,option:e.option,page:e.page,"table-loading":e.loading},on:{"update:page":function(t){e.page=t},"size-change":e.sizeChange,"current-change":e.currentChange},scopedSlots:e._u([{key:"menu",fn:function(t){var n=t.row;return[r("el-button",{attrs:{size:"mini"},on:{click:function(t){return t.stopPropagation(),e.update(n)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return t.stopPropagation(),e.remove(n)}}},[e._v("删除")])]}}])}),e._v(" "),r("el-dialog",{attrs:{title:e.isEdit?"编辑":"新增",visible:e.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"问卷ID",prop:"questionId"}},[r("el-input",{model:{value:e.ruleForm.questionId,callback:function(t){e.$set(e.ruleForm,"questionId",t)},expression:"ruleForm.questionId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"问卷名称",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分类",prop:"questionType"}},[r("el-select",{staticClass:"w-100",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.ruleForm.questionType,callback:function(t){e.$set(e.ruleForm,"questionType",t)},expression:"ruleForm.questionType"}},e._l(e.qtList,(function(e){return r("el-option",{key:e._id,attrs:{label:e.chinese,value:e._id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"说明",prop:"desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(t){return e.cancel(t)}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.save(t)}}},[e._v("确 定")])],1)],1)],1)},i=[],s=(r("7f7f"),r("96cf"),r("1da1")),a=(r("ac6a"),{name:"Question",data:function(){return{queryForm:{name:""},page:{pageSizes:[10,20,30,40],currentPage:1,total:0,pageSize:10},data:[],rolesList:[],loading:!1,option:{emptyText:"暂无数据",columnBtn:!1,refreshBtn:!1,addBtn:!1,delBtn:!1,editBtn:!1,border:!0,stripe:!0,selection:!1,indexFixed:!1,selectionFixed:!1,align:"center",menuAlign:"center",menuWidth:250,column:[{label:"问卷ID",prop:"questionId",overHidden:!0},{label:"问卷名称",prop:"name",overHidden:!0},{label:"分类",prop:"questionType",overHidden:!0,formatter:function(e,t){var r=[];return t.forEach((function(e){r.push(e.chinese)})),r.join("、")}},{label:"说明",prop:"desc",overHidden:!0}]},isEdit:!1,centerDialogVisible:!1,ruleForm:{_id:"",questionId:"",name:"",desc:"",questionType:[]},rules:{questionId:[{required:!0,message:"请输入问卷ID",trigger:"blur"}],name:[{required:!0,message:"请输入问卷名称",trigger:"blur"}],questionType:[{required:!0,message:"请选择问卷分类",trigger:"change"}]},qtList:[]}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.query();case 2:return e.next=4,this.getAllQuestionType();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{initForm:function(){this.ruleForm={_id:"",questionId:"",name:"",desc:"",questionType:[]}},search:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page.currentPage=1,e.next=3,this.query();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),query:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$api.question.getQuestion({name:this.queryForm.name,pageSize:this.page.pageSize,pageNum:this.page.currentPage});case 4:t=e.sent,t.result?(this.page.total=t.total,this.data=t.data):this.$message.error(t.message),this.loading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.loading=!1;case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),sizeChange:function(e){this.page.currentPage=1,this.page.pageSize=e,this.query()},currentChange:function(e){this.page.currentPage=e,this.query()},create:function(){this.resetForm("ruleForm"),this.initForm(),this.centerDialogVisible=!0,this.isEdit=!1},getAllQuestionType:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.question.getAllQuestionType({});case 2:t=e.sent,t.result?this.qtList=t.data:this.$message.error(t.message);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.centerDialogVisible=!0,this.isEdit=!0,this.ruleForm=this.$CopyRow(this.ruleForm,t),this.ruleForm.questionType=[],t.questionType.forEach((function(e){r.ruleForm.questionType.push(e._id)}));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,confirmButtonClass:"el-button--danger"}).then(Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,t.$api.question.deleteQuestion({_id:e._id});case 3:n=r.sent,t.loading=!1,n.result?(t.$message.success("删除成功"),t.query()):t.$message.error(n.message);case 6:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"}),t.loading=!1}))},cancel:function(){this.centerDialogVisible=!1},save:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.isEdit?e.edit():e.add()}))},edit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.question.editQuestion(this.ruleForm);case 4:r=e.sent,r.result?(this.centerDialogVisible=!1,this.$message.success("修改成功"),this.query()):this.$message.error(r.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),add:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.question.addQuestion(this.ruleForm);case 4:r=e.sent,r.result?(this.centerDialogVisible=!1,this.$message.success("新增成功"),this.query()):this.$message.error(r.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),localLoading:function(){var e=this.$loading({lock:!0});return e},resetForm:function(e){void 0!==this.$refs[e]&&(this.$refs[e].resetFields(),this.$refs[e].clearValidate())}}}),o=a,u=r("2877"),c=Object(u["a"])(o,n,i,!1,null,"561814c8",null);t["default"]=c.exports}}]);