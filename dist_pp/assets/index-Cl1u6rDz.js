import{W as S,r as u,d as i,I,o as c,c as K,L as m,O as P,i as o,f as e,h as l,l as Y,J as te,K as le,m as _,F as q,p as h,e as ae,A as re,C as ie,x as se}from"./index-B5XNB-yB.js";function ue(f){return S({url:"/monitor/logininfor/list",method:"get",params:f})}function de(f){return S({url:"/monitor/logininfor/"+f,method:"delete"})}function ce(f){return S({url:"/monitor/logininfor/unlock/"+f,method:"get"})}function pe(){return S({url:"/monitor/logininfor/clean",method:"delete"})}const me={class:"app-container"},fe=ie({name:"Logininfor"}),_e=Object.assign(fe,{setup(f){const{proxy:s}=se(),{sys_common_status:L}=s.useDict("sys_common_status"),U=u([]),k=u(!0),b=u(!0),R=u([]),$=u(!0),T=u(!0),B=u(""),x=u(0),v=u([]),N=u({prop:"loginTime",order:"descending"}),r=u({pageNum:1,pageSize:10,ipaddr:void 0,userName:void 0,status:void 0,orderByColumn:void 0,isAsc:void 0});function p(){k.value=!0,ue(s.addDateRange(r.value,v.value)).then(a=>{U.value=a.rows,x.value=a.total,k.value=!1})}function V(){r.value.pageNum=1,p()}function z(){v.value=[],s.resetForm("queryRef"),r.value.pageNum=1,s.$refs.logininforRef.sort(N.value.prop,N.value.order)}function A(a){R.value=a.map(n=>n.infoId),T.value=!a.length,$.value=a.length!=1,B.value=a.map(n=>n.userName)}function F(a,n,D){r.value.orderByColumn=a.prop,r.value.isAsc=a.order,p()}function Q(a){const n=a.infoId||R.value;s.$modal.confirm('是否确认删除访问编号为"'+n+'"的数据项?').then(function(){return de(n)}).then(()=>{p(),s.$modal.msgSuccess("删除成功")}).catch(()=>{})}function E(){s.$modal.confirm("是否确认清空所有登录日志数据项?").then(function(){return pe()}).then(()=>{p(),s.$modal.msgSuccess("清空成功")}).catch(()=>{})}function H(){const a=B.value;s.$modal.confirm('是否确认解锁用户"'+a+'"数据项?').then(function(){return ce(a)}).then(()=>{s.$modal.msgSuccess("用户"+a+"解锁成功")}).catch(()=>{})}function M(){s.download("monitor/logininfor/export",{...r.value},`config_${new Date().getTime()}.xlsx`)}return p(),(a,n)=>{const D=i("el-input"),w=i("el-form-item"),O=i("el-option"),j=i("el-select"),J=i("el-date-picker"),g=i("el-button"),W=i("el-form"),y=i("el-col"),G=i("right-toolbar"),X=i("el-row"),d=i("el-table-column"),Z=i("dict-tag"),ee=i("el-table"),oe=i("pagination"),C=I("hasPermi"),ne=I("loading");return c(),K("div",me,[m(e(W,{model:o(r),ref:"queryRef",inline:!0,"label-width":"68px"},{default:l(()=>[e(w,{label:"登录地址",prop:"ipaddr"},{default:l(()=>[e(D,{modelValue:o(r).ipaddr,"onUpdate:modelValue":n[0]||(n[0]=t=>o(r).ipaddr=t),placeholder:"请输入登录地址",clearable:"",style:{width:"240px"},onKeyup:Y(V,["enter"])},null,8,["modelValue"])]),_:1}),e(w,{label:"用户名称",prop:"userName"},{default:l(()=>[e(D,{modelValue:o(r).userName,"onUpdate:modelValue":n[1]||(n[1]=t=>o(r).userName=t),placeholder:"请输入用户名称",clearable:"",style:{width:"240px"},onKeyup:Y(V,["enter"])},null,8,["modelValue"])]),_:1}),e(w,{label:"状态",prop:"status"},{default:l(()=>[e(j,{modelValue:o(r).status,"onUpdate:modelValue":n[2]||(n[2]=t=>o(r).status=t),placeholder:"登录状态",clearable:"",style:{width:"240px"}},{default:l(()=>[(c(!0),K(te,null,le(o(L),t=>(c(),_(O,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(w,{label:"登录时间",style:{width:"308px"}},{default:l(()=>[e(J,{modelValue:o(v),"onUpdate:modelValue":n[3]||(n[3]=t=>q(v)?v.value=t:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","default-time"])]),_:1}),e(w,null,{default:l(()=>[e(g,{type:"primary",icon:"Search",onClick:V},{default:l(()=>[h("搜索")]),_:1}),e(g,{icon:"Refresh",onClick:z},{default:l(()=>[h("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[P,o(b)]]),e(X,{gutter:10,class:"mb8"},{default:l(()=>[e(y,{span:1.5},{default:l(()=>[m((c(),_(g,{type:"danger",plain:"",icon:"Delete",disabled:o(T),onClick:Q},{default:l(()=>[h("删除")]),_:1},8,["disabled"])),[[C,["monitor:logininfor:remove"]]])]),_:1}),e(y,{span:1.5},{default:l(()=>[m((c(),_(g,{type:"danger",plain:"",icon:"Delete",onClick:E},{default:l(()=>[h("清空")]),_:1})),[[C,["monitor:logininfor:remove"]]])]),_:1}),e(y,{span:1.5},{default:l(()=>[m((c(),_(g,{type:"primary",plain:"",icon:"Unlock",disabled:o($),onClick:H},{default:l(()=>[h("解锁")]),_:1},8,["disabled"])),[[C,["monitor:logininfor:unlock"]]])]),_:1}),e(y,{span:1.5},{default:l(()=>[m((c(),_(g,{type:"warning",plain:"",icon:"Download",onClick:M},{default:l(()=>[h("导出")]),_:1})),[[C,["monitor:logininfor:export"]]])]),_:1}),e(G,{showSearch:o(b),"onUpdate:showSearch":n[4]||(n[4]=t=>q(b)?b.value=t:null),onQueryTable:p},null,8,["showSearch"])]),_:1}),m((c(),_(ee,{ref:"logininforRef",data:o(U),onSelectionChange:A,"default-sort":o(N),onSortChange:F},{default:l(()=>[e(d,{type:"selection",width:"55",align:"center"}),e(d,{label:"访问编号",align:"center",prop:"infoId"}),e(d,{label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0,sortable:"custom","sort-orders":["descending","ascending"]}),e(d,{label:"地址",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),e(d,{label:"登录地点",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),e(d,{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),e(d,{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),e(d,{label:"登录状态",align:"center",prop:"status"},{default:l(t=>[e(Z,{options:o(L),value:t.row.status},null,8,["options","value"])]),_:1}),e(d,{label:"描述",align:"center",prop:"msg","show-overflow-tooltip":!0}),e(d,{label:"访问时间",align:"center",prop:"loginTime",sortable:"custom","sort-orders":["descending","ascending"],width:"180"},{default:l(t=>[ae("span",null,re(a.parseTime(t.row.loginTime)),1)]),_:1})]),_:1},8,["data","default-sort"])),[[ne,o(k)]]),m(e(oe,{total:o(x),page:o(r).pageNum,"onUpdate:page":n[5]||(n[5]=t=>o(r).pageNum=t),limit:o(r).pageSize,"onUpdate:limit":n[6]||(n[6]=t=>o(r).pageSize=t),onPagination:p},null,8,["total","page","limit"]),[[P,o(x)>0]])])}}});export{_e as default};
