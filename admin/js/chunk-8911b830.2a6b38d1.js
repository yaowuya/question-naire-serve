(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8911b830"],{"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),s=n("79e5"),o=n("be13"),a=n("2b4c"),u=n("520a"),c=a("species"),l=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=a(e),h=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=h?!s((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[d](""),!t})):void 0;if(!h||!f||"replace"===e&&!l||"split"===e&&!p){var m=/./[d],g=n(o,d,""[e],(function(e,t,n,r,i){return t.exec===u?h&&!i?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),v=g[0],b=g[1];r(String.prototype,e,v),i(RegExp.prototype,d,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"2a09":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"pl-5",attrs:{inline:!0,model:e.queryForm}},[n("el-form-item",{attrs:{label:"用户",prop:"question"}},[n("el-select",{staticClass:"w-100",attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:e.queryForm.person,callback:function(t){e.$set(e.queryForm,"person",t)},expression:"queryForm.person"}},e._l(e.personList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"调查问卷",prop:"question"}},[n("el-select",{staticClass:"w-100",attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:e.queryForm.question,callback:function(t){e.$set(e.queryForm,"question",t)},expression:"queryForm.question"}},e._l(e.questionList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"调查问卷",prop:"question"}},[n("el-select",{staticClass:"w-100",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.queryForm.questionType,callback:function(t){e.$set(e.queryForm,"questionType",t)},expression:"queryForm.questionType"}},e._l(e.qtList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.chinese,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:function(t){return t.stopPropagation(),e.search()}}},[e._v("查询")])],1)],1),e._v(" "),n("avue-crud",{ref:"crud",attrs:{data:e.data,option:e.option,page:e.page,"table-loading":e.loading},on:{"update:page":function(t){e.page=t},"size-change":e.sizeChange,"current-change":e.currentChange},scopedSlots:e._u([{key:"menu",fn:function(t){var r=t.row;return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return t.stopPropagation(),e.detail(r)}}},[e._v("查看问卷")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return t.stopPropagation(),e.remove(r)}}},[e._v("删除")])]}}])}),e._v(" "),n("el-dialog",{attrs:{title:e.isEdit?"编辑":"新增",visible:e.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[n("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"调查问卷",prop:"question"}},[n("el-select",{staticClass:"w-100",attrs:{placeholder:"请选择"},model:{value:e.ruleForm.question,callback:function(t){e.$set(e.ruleForm,"question",t)},expression:"ruleForm.question"}},e._l(e.questionList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"用户",prop:"question"}},[n("el-select",{staticClass:"w-100",attrs:{placeholder:"请选择"},model:{value:e.ruleForm.person,callback:function(t){e.$set(e.ruleForm,"person",t)},expression:"ruleForm.person"}},e._l(e.personList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"答案",prop:"option"}},[n("el-select",{staticClass:"w-100",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.ruleForm.option,callback:function(t){e.$set(e.ruleForm,"option",t)},expression:"ruleForm.option"}},e._l(e.optionList,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){return e.cancel(t)}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.save(t)}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-drawer",{attrs:{visible:e.drawerVisible,"with-header":!1,"destroy-on-close":!0,size:"50%"},on:{"update:visible":function(t){e.drawerVisible=t}}},[e.show?n("AnswerComponent",{attrs:{"person-id":e.personId,"question-id":e.questionId,"question-type-id":e.questionTypeId},on:{"close-option":e.closeOption}}):e._e()],1)],1)},i=[],s=(n("ac6a"),n("386d"),n("96cf"),n("1da1")),o=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[n("div",{staticClass:"app-container",attrs:{id:"answerDetail"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v(e._s(e.answerObj.questionName))]),e._v(" "),n("el-button",{staticClass:"export-btn",attrs:{round:"",size:"small"},on:{click:function(t){return t.stopPropagation(),e.exportPdf(t)}}},[e._v("导出")])],1),e._v(" "),n("el-divider"),e._v(" "),n("el-row",{attrs:{type:"flex",justify:"space-around"}},[n("el-tag",{attrs:{type:"success"}},[e._v("姓名："+e._s(e.answerObj.personName))]),e._v(" "),n("el-tag",{attrs:{type:"info"}},[e._v("身份："+e._s(e.answerObj.role))]),e._v(" "),n("el-tag",{attrs:{type:"warning"}},[e._v("填写时间："+e._s(e.answerObj.createTime))])],1),e._v(" "),n("el-divider"),e._v(" "),e._l(e.titleList,(function(t,r){return n("el-card",{key:r,staticClass:"box-card mb-15"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.order+"."+t.title))])]),e._v(" "),e._l(t.option,(function(r,i){return n("div",{key:i,staticClass:"text item"},["input"===t.topic?n("span",[e._v(e._s(t.content))]):n("span",[e._v(e._s(r.name+"."+r.content))])])}))],2)}))],2)])}),a=[],u={name:"AnswerComponent",props:{personId:{type:String,required:!0},questionId:{type:String,required:!0},questionTypeId:{type:String,required:!0}},data:function(){return{answerObj:"",titleList:[],isPdf:!0}},created:function(){this.getAnswerDetail()},methods:{getAnswerDetail:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.question.getAnswerDetail({questionId:this.questionId,personId:this.personId,questionTypeId:this.questionTypeId});case 4:n=e.sent,t.close(),n.result?(console.log(n.data),this.titleList=n.data,this.answerObj=n.answerObj):this.$message.error(n.message),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),exportPdf:function(){this.$getPdf("answerDetail",this.answerObj.questionName),this.getAnswerDetail()},localLoading:function(){var e=this.$loading({lock:!0});return e}}},c=u,l=(n("91df"),n("2877")),p=Object(l["a"])(c,o,a,!1,null,"236dde1f",null),d=p.exports,h={name:"Answer",components:{AnswerComponent:d},data:function(){return{queryForm:{person:"",question:[],questionType:[]},page:{pageSizes:[10,20,30,40],currentPage:1,total:0,pageSize:10},data:[],rolesList:[],loading:!1,option:{emptyText:"暂无数据",columnBtn:!1,refreshBtn:!1,addBtn:!1,delBtn:!1,editBtn:!1,border:!0,stripe:!0,selection:!1,indexFixed:!1,selectionFixed:!1,align:"center",menuAlign:"center",menuWidth:250,column:[{label:"用户",prop:"person",overHidden:!0,formatter:function(e,t){return t?t.name:null}},{label:"问卷",prop:"question",overHidden:!0,formatter:function(e,t){return t?t.name:null}},{label:"问卷类型",prop:"questionType",overHidden:!0,formatter:function(e,t){return t?t.chinese:null}},{label:"创建时间",prop:"createTime",overHidden:!0}]},isEdit:!1,centerDialogVisible:!1,ruleForm:{person:null,question:null,content:"",option:[]},rules:{person:[{required:!0,message:"请选择用户",trigger:"change"}],question:[{required:!0,message:"请选择问卷",trigger:"change"}],option:[{required:!0,message:"请选择选项",trigger:"change"}]},rowId:"",personList:[],questionList:[],optionList:[],qtList:[],drawerVisible:!1,show:!1,personId:"",questionId:"",questionTypeId:""}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.search();case 2:return e.next=4,this.getAllPerson();case 4:return e.next=6,this.getAllQuestionType();case 6:return e.next=8,this.getAllQuestion();case 8:return e.next=10,this.getAllOption();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getAllPerson:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.sys.getAllPerson({});case 2:t=e.sent,t.result?this.personList=t.data:this.$message.error(t.message);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAllQuestion:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.question.getAllQuestion({});case 2:t=e.sent,t.result?this.questionList=t.data:this.$message.error(t.message);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAllOption:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.question.getAllOption({});case 2:t=e.sent,t.result?this.optionList=t.data:this.$message.error(t.message);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getAllQuestionType:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.question.getAllQuestionType({});case 2:t=e.sent,t.result?this.qtList=t.data:this.$message.error(t.message);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initForm:function(){this.ruleForm={person:null,question:null,content:"",option:[]}},search:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page.currentPage=1,e.next=3,this.query();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),query:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$api.question.getAnswer({person:this.queryForm.person,question:this.queryForm.question,questionType:this.queryForm.questionType,pageSize:this.page.pageSize,pageNum:this.page.currentPage});case 4:t=e.sent,t.result?(this.page.total=t.total,this.data=t.data):this.$message.error(t.message),this.loading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.loading=!1;case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),sizeChange:function(e){this.page.currentPage=1,this.page.pageSize=e,this.query()},currentChange:function(e){this.page.currentPage=e,this.query()},create:function(){this.resetForm("ruleForm"),this.initForm(),this.centerDialogVisible=!0,this.isEdit=!1},detail:function(e){var t=this;this.personId=e.person._id,this.questionId=e.question._id,this.questionTypeId=e.questionType._id,this.drawerVisible=!0,this.show=!1,this.$nextTick((function(){t.show=!0}))},closeOption:function(){this.drawerVisible=!1},update:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.centerDialogVisible=!0,this.isEdit=!0,this.ruleForm.person=t.person?t.person._id:null,this.ruleForm.question=t.question?t.question._id:null,n=[],t.option.length>0&&t.option.forEach((function(e){n.push(e._id)})),this.ruleForm.option=n,this.ruleForm.content=t.content,this.rowId=t._id;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,confirmButtonClass:"el-button--danger"}).then(Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,console.log(e),n.next=4,t.$api.question.deleteAnswer({personId:e.person._id,questionId:e.question._id,questionTypeId:e.questionType._id});case 4:if(r=n.sent,t.loading=!1,!r.result){n.next=12;break}return t.$message.success("删除成功"),n.next=10,t.query();case 10:n.next=13;break;case 12:t.$message.error(r.message);case 13:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消删除"}),t.loading=!1}))},cancel:function(){this.centerDialogVisible=!1},save:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.isEdit?e.edit():e.add()}))},edit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.question.editAnswer({id:this.rowId,data:this.ruleForm});case 4:n=e.sent,n.result?(this.centerDialogVisible=!1,this.$message.success("修改成功"),this.query()):this.$message.error(n.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),add:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.localLoading(),e.prev=1,e.next=4,this.$api.question.addAnswer(this.ruleForm);case 4:n=e.sent,n.result?(this.centerDialogVisible=!1,this.$message.success("新增成功"),this.query()):this.$message.error(n.message),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.close();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),localLoading:function(){var e=this.$loading({lock:!0});return e},resetForm:function(e){var t=this;this.$nextTick((function(){void 0!==t.$refs[e]&&(t.$refs[e].resetFields(),t.$refs[e].clearValidate())}))}}},f=h,m=Object(l["a"])(f,r,i,!1,null,"c33a6b72",null);t["default"]=m.exports},"386d":function(e,t,n){"use strict";var r=n("cb7c"),i=n("83a1"),s=n("5f1b");n("214f")("search",1,(function(e,t,n,o){return[function(n){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=o(n,e,this);if(t.done)return t.value;var a=r(e),u=String(this),c=a.lastIndex;i(c,0)||(a.lastIndex=0);var l=s(a,u);return i(a.lastIndex,c)||(a.lastIndex=c),null===l?-1:l.index}]}))},"520a":function(e,t,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,a="lastIndex",u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],l=u||c;l&&(o=function(e){var t,n,o,l,p=this;return c&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),u&&(t=p[a]),o=i.call(p,e),u&&o&&(p[a]=p.global?o.index+o[0].length:t),c&&o&&o.length>1&&s.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var s=n.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"91df":function(e,t,n){"use strict";var r=n("d8fc"),i=n.n(r);i.a},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d8fc:function(e,t,n){}}]);