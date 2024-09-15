import{a as Ye,r as _,D as te,a0 as Qe,H as je,w as He,d,I as ae,o as u,c as S,f as l,h as t,e as k,i as a,F as O,L as y,l as oe,J as T,K as D,m as r,p as g,O as ne,n as h,A as se,C as Je,x as Ge}from"./index-B5XNB-yB.js";import{e as We,l as Xe,f as Ze,h as el,r as ll,i as ue,j as tl,k as al}from"./user-vguU46Mv.js";const ol={class:"app-container"},nl={class:"head-container"},sl={class:"head-container"},ul={class:"dialog-footer"},dl=k("div",{class:"el-upload__text"},[g("将文件拖到此处，或"),k("em",null,"点击上传")],-1),rl={class:"el-upload__tip text-center"},il={class:"el-upload__tip"},pl=k("span",null,"仅允许导入xls、xlsx格式文件。",-1),ml={class:"dialog-footer"},cl=Je({name:"User"}),bl=Object.assign(cl,{setup(fl){const de=Ye(),{proxy:i}=Ge(),{sys_normal_disable:H,sys_user_sex:re}=i.useDict("sys_normal_disable","sys_user_sex"),J=_([]),x=_(!1),K=_(!0),P=_(!0),z=_([]),G=_(!0),W=_(!0),E=_(0),M=_(""),$=_([]),F=_(""),A=_(void 0),ie=_(void 0),Y=_([]),Q=_([]),v=te({open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Qe()},url:"/prod-api/system/user/importData"}),I=_([{key:0,label:"用户编号",visible:!0},{key:1,label:"用户名称",visible:!0},{key:2,label:"用户昵称",visible:!0},{key:3,label:"部门",visible:!0},{key:4,label:"手机号码",visible:!0},{key:5,label:"状态",visible:!0},{key:6,label:"创建时间",visible:!0}]),pe=te({form:{},queryParams:{pageNum:1,pageSize:10,userName:void 0,phonenumber:void 0,status:void 0,deptId:void 0},rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}],nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}),{queryParams:c,form:s,rules:me}=je(pe),ce=(n,o)=>n?o.label.indexOf(n)!==-1:!0;He(F,n=>{i.$refs.deptTreeRef.filter(n)});function fe(){We().then(n=>{A.value=n.data})}function U(){K.value=!0,Xe(i.addDateRange(c.value,$.value)).then(n=>{K.value=!1,J.value=n.rows,E.value=n.total})}function _e(n){c.value.deptId=n.id,R()}function R(){c.value.pageNum=1,U()}function ve(){$.value=[],i.resetForm("queryRef"),c.value.deptId=void 0,i.$refs.deptTreeRef.setCurrentKey(null),R()}function X(n){const o=n.userId||z.value;i.$modal.confirm('是否确认删除用户编号为"'+o+'"的数据项？').then(function(){return Ze(o)}).then(()=>{U(),i.$modal.msgSuccess("删除成功")}).catch(()=>{})}function be(){i.download("system/user/export",{...c.value},`user_${new Date().getTime()}.xlsx`)}function ge(n){let o=n.status==="0"?"启用":"停用";i.$modal.confirm('确认要"'+o+'""'+n.userName+'"用户吗?').then(function(){return el(n.userId,n.status)}).then(()=>{i.$modal.msgSuccess(o+"成功")}).catch(function(){n.status=n.status==="0"?"1":"0"})}function he(n){const o=n.userId;de.push("/system/user-auth/role/"+o)}function ye(n){i.$prompt('请输入"'+n.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{5,20}$/,inputErrorMessage:"用户密码长度必须介于 5 和 20 之间"}).then(({value:o})=>{ll(n.userId,o).then(p=>{i.$modal.msgSuccess("修改成功，新密码是："+o)})}).catch(()=>{})}function ke(n){z.value=n.map(o=>o.userId),G.value=n.length!=1,W.value=!n.length}function Ve(){v.title="用户导入",v.open=!0}function we(){i.download("system/user/importTemplate",{},`user_template_${new Date().getTime()}.xlsx`)}const xe=(n,o,p)=>{v.isUploading=!0},Ie=(n,o,p)=>{v.open=!1,v.isUploading=!1,i.$refs.uploadRef.handleRemove(o),i.$alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+n.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),U()};function Ue(){i.$refs.uploadRef.submit()}function j(){s.value={userId:void 0,deptId:void 0,userName:void 0,nickName:void 0,password:void 0,phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:void 0,postIds:[],roleIds:[]},i.resetForm("userRef")}function Ce(){x.value=!1,j()}function Ne(){j(),ue().then(n=>{Y.value=n.posts,Q.value=n.roles,x.value=!0,M.value="添加用户",s.value.password=ie.value})}function Z(n){j();const o=n.userId||z.value;ue(o).then(p=>{s.value=p.data,Y.value=p.posts,Q.value=p.roles,s.value.postIds=p.postIds,s.value.roleIds=p.roleIds,x.value=!0,M.value="修改用户",s.password=""})}function Se(){i.$refs.userRef.validate(n=>{n&&(s.value.userId!=null?tl(s.value).then(o=>{i.$modal.msgSuccess("修改成功"),x.value=!1,U()}):al(s.value).then(o=>{i.$modal.msgSuccess("新增成功"),x.value=!1,U()}))})}return fe(),U(),(n,o)=>{const p=d("el-input"),$e=d("el-tree"),m=d("el-col"),f=d("el-form-item"),q=d("el-option"),B=d("el-select"),Re=d("el-date-picker"),b=d("el-button"),ee=d("el-form"),Te=d("right-toolbar"),C=d("el-row"),V=d("el-table-column"),De=d("el-switch"),L=d("el-tooltip"),Pe=d("el-table"),Fe=d("pagination"),qe=d("el-tree-select"),Be=d("el-radio"),Le=d("el-radio-group"),le=d("el-dialog"),Oe=d("upload-filled"),Ke=d("el-icon"),ze=d("el-checkbox"),Ee=d("el-link"),Me=d("el-upload"),w=ae("hasPermi"),Ae=ae("loading");return u(),S("div",ol,[l(C,{gutter:20},{default:t(()=>[l(m,{span:4,xs:24},{default:t(()=>[k("div",nl,[l(p,{modelValue:a(F),"onUpdate:modelValue":o[0]||(o[0]=e=>O(F)?F.value=e:null),placeholder:"请输入部门名称",clearable:"","prefix-icon":"Search",style:{"margin-bottom":"20px"}},null,8,["modelValue"])]),k("div",sl,[l($e,{data:a(A),props:{label:"label",children:"children"},"expand-on-click-node":!1,"filter-node-method":ce,ref:"deptTreeRef","node-key":"id","highlight-current":"","default-expand-all":"",onNodeClick:_e},null,8,["data"])])]),_:1}),l(m,{span:20,xs:24},{default:t(()=>[y(l(ee,{model:a(c),ref:"queryRef",inline:!0,"label-width":"68px"},{default:t(()=>[l(f,{label:"用户名称",prop:"userName"},{default:t(()=>[l(p,{modelValue:a(c).userName,"onUpdate:modelValue":o[1]||(o[1]=e=>a(c).userName=e),placeholder:"请输入用户名称",clearable:"",style:{width:"240px"},onKeyup:oe(R,["enter"])},null,8,["modelValue"])]),_:1}),l(f,{label:"手机号码",prop:"phonenumber"},{default:t(()=>[l(p,{modelValue:a(c).phonenumber,"onUpdate:modelValue":o[2]||(o[2]=e=>a(c).phonenumber=e),placeholder:"请输入手机号码",clearable:"",style:{width:"240px"},onKeyup:oe(R,["enter"])},null,8,["modelValue"])]),_:1}),l(f,{label:"状态",prop:"status"},{default:t(()=>[l(B,{modelValue:a(c).status,"onUpdate:modelValue":o[3]||(o[3]=e=>a(c).status=e),placeholder:"用户状态",clearable:"",style:{width:"240px"}},{default:t(()=>[(u(!0),S(T,null,D(a(H),e=>(u(),r(q,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"创建时间",style:{width:"308px"}},{default:t(()=>[l(Re,{modelValue:a($),"onUpdate:modelValue":o[4]||(o[4]=e=>O($)?$.value=e:null),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),_:1}),l(f,null,{default:t(()=>[l(b,{type:"primary",icon:"Search",onClick:R},{default:t(()=>[g("搜索")]),_:1}),l(b,{icon:"Refresh",onClick:ve},{default:t(()=>[g("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[ne,a(P)]]),l(C,{gutter:10,class:"mb8"},{default:t(()=>[l(m,{span:1.5},{default:t(()=>[y((u(),r(b,{type:"primary",plain:"",icon:"Plus",onClick:Ne},{default:t(()=>[g("新增")]),_:1})),[[w,["system:user:add"]]])]),_:1}),l(m,{span:1.5},{default:t(()=>[y((u(),r(b,{type:"success",plain:"",icon:"Edit",disabled:a(G),onClick:Z},{default:t(()=>[g("修改")]),_:1},8,["disabled"])),[[w,["system:user:edit"]]])]),_:1}),l(m,{span:1.5},{default:t(()=>[y((u(),r(b,{type:"danger",plain:"",icon:"Delete",disabled:a(W),onClick:X},{default:t(()=>[g("删除")]),_:1},8,["disabled"])),[[w,["system:user:remove"]]])]),_:1}),l(m,{span:1.5},{default:t(()=>[y((u(),r(b,{type:"info",plain:"",icon:"Upload",onClick:Ve},{default:t(()=>[g("导入")]),_:1})),[[w,["system:user:import"]]])]),_:1}),l(m,{span:1.5},{default:t(()=>[y((u(),r(b,{type:"warning",plain:"",icon:"Download",onClick:be},{default:t(()=>[g("导出")]),_:1})),[[w,["system:user:export"]]])]),_:1}),l(Te,{showSearch:a(P),"onUpdate:showSearch":o[5]||(o[5]=e=>O(P)?P.value=e:null),onQueryTable:U,columns:a(I)},null,8,["showSearch","columns"])]),_:1}),y((u(),r(Pe,{data:a(J),onSelectionChange:ke},{default:t(()=>[l(V,{type:"selection",width:"50",align:"center"}),a(I)[0].visible?(u(),r(V,{label:"用户编号",align:"center",key:"userId",prop:"userId"})):h("",!0),a(I)[1].visible?(u(),r(V,{label:"用户名称",align:"center",key:"userName",prop:"userName","show-overflow-tooltip":!0})):h("",!0),a(I)[2].visible?(u(),r(V,{label:"用户昵称",align:"center",key:"nickName",prop:"nickName","show-overflow-tooltip":!0})):h("",!0),a(I)[3].visible?(u(),r(V,{label:"部门",align:"center",key:"deptName",prop:"dept.deptName","show-overflow-tooltip":!0})):h("",!0),a(I)[4].visible?(u(),r(V,{label:"手机号码",align:"center",key:"phonenumber",prop:"phonenumber",width:"120"})):h("",!0),a(I)[5].visible?(u(),r(V,{label:"状态",align:"center",key:"status"},{default:t(e=>[l(De,{modelValue:e.row.status,"onUpdate:modelValue":N=>e.row.status=N,"active-value":"0","inactive-value":"1",onChange:N=>ge(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})):h("",!0),a(I)[6].visible?(u(),r(V,{key:6,label:"创建时间",align:"center",prop:"createTime",width:"160"},{default:t(e=>[k("span",null,se(n.parseTime(e.row.createTime)),1)]),_:1})):h("",!0),l(V,{label:"操作",align:"center",width:"150","class-name":"small-padding fixed-width"},{default:t(e=>[e.row.userId!==1?(u(),r(L,{key:0,content:"修改",placement:"top"},{default:t(()=>[y(l(b,{link:"",type:"primary",icon:"Edit",onClick:N=>Z(e.row)},null,8,["onClick"]),[[w,["system:user:edit"]]])]),_:2},1024)):h("",!0),e.row.userId!==1?(u(),r(L,{key:1,content:"删除",placement:"top"},{default:t(()=>[y(l(b,{link:"",type:"primary",icon:"Delete",onClick:N=>X(e.row)},null,8,["onClick"]),[[w,["system:user:remove"]]])]),_:2},1024)):h("",!0),e.row.userId!==1?(u(),r(L,{key:2,content:"重置密码",placement:"top"},{default:t(()=>[y(l(b,{link:"",type:"primary",icon:"Key",onClick:N=>ye(e.row)},null,8,["onClick"]),[[w,["system:user:resetPwd"]]])]),_:2},1024)):h("",!0),e.row.userId!==1?(u(),r(L,{key:3,content:"分配角色",placement:"top"},{default:t(()=>[y(l(b,{link:"",type:"primary",icon:"CircleCheck",onClick:N=>he(e.row)},null,8,["onClick"]),[[w,["system:user:edit"]]])]),_:2},1024)):h("",!0)]),_:1})]),_:1},8,["data"])),[[Ae,a(K)]]),y(l(Fe,{total:a(E),page:a(c).pageNum,"onUpdate:page":o[6]||(o[6]=e=>a(c).pageNum=e),limit:a(c).pageSize,"onUpdate:limit":o[7]||(o[7]=e=>a(c).pageSize=e),onPagination:U},null,8,["total","page","limit"]),[[ne,a(E)>0]])]),_:1})]),_:1}),l(le,{title:a(M),modelValue:a(x),"onUpdate:modelValue":o[19]||(o[19]=e=>O(x)?x.value=e:null),width:"600px","append-to-body":""},{footer:t(()=>[k("div",ul,[l(b,{type:"primary",onClick:Se},{default:t(()=>[g("确 定")]),_:1}),l(b,{onClick:Ce},{default:t(()=>[g("取 消")]),_:1})])]),default:t(()=>[l(ee,{model:a(s),rules:a(me),ref:"userRef","label-width":"80px"},{default:t(()=>[l(C,null,{default:t(()=>[l(m,{span:12},{default:t(()=>[l(f,{label:"用户昵称",prop:"nickName"},{default:t(()=>[l(p,{modelValue:a(s).nickName,"onUpdate:modelValue":o[8]||(o[8]=e=>a(s).nickName=e),placeholder:"请输入用户昵称",maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{span:12},{default:t(()=>[l(f,{label:"归属部门",prop:"deptId"},{default:t(()=>[l(qe,{modelValue:a(s).deptId,"onUpdate:modelValue":o[9]||(o[9]=e=>a(s).deptId=e),data:a(A),props:{value:"id",label:"label",children:"children"},"value-key":"id",placeholder:"请选择归属部门","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1})]),_:1}),l(C,null,{default:t(()=>[l(m,{span:12},{default:t(()=>[l(f,{label:"手机号码",prop:"phonenumber"},{default:t(()=>[l(p,{modelValue:a(s).phonenumber,"onUpdate:modelValue":o[10]||(o[10]=e=>a(s).phonenumber=e),placeholder:"请输入手机号码",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{span:12},{default:t(()=>[l(f,{label:"邮箱",prop:"email"},{default:t(()=>[l(p,{modelValue:a(s).email,"onUpdate:modelValue":o[11]||(o[11]=e=>a(s).email=e),placeholder:"请输入邮箱",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(C,null,{default:t(()=>[l(m,{span:12},{default:t(()=>[a(s).userId==null?(u(),r(f,{key:0,label:"用户名称",prop:"userName"},{default:t(()=>[l(p,{modelValue:a(s).userName,"onUpdate:modelValue":o[12]||(o[12]=e=>a(s).userName=e),placeholder:"请输入用户名称",maxlength:"30"},null,8,["modelValue"])]),_:1})):h("",!0)]),_:1}),l(m,{span:12},{default:t(()=>[a(s).userId==null?(u(),r(f,{key:0,label:"用户密码",prop:"password"},{default:t(()=>[l(p,{modelValue:a(s).password,"onUpdate:modelValue":o[13]||(o[13]=e=>a(s).password=e),placeholder:"请输入用户密码",type:"password",maxlength:"20","show-password":""},null,8,["modelValue"])]),_:1})):h("",!0)]),_:1})]),_:1}),l(C,null,{default:t(()=>[l(m,{span:12},{default:t(()=>[l(f,{label:"用户性别"},{default:t(()=>[l(B,{modelValue:a(s).sex,"onUpdate:modelValue":o[14]||(o[14]=e=>a(s).sex=e),placeholder:"请选择"},{default:t(()=>[(u(!0),S(T,null,D(a(re),e=>(u(),r(q,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{span:12},{default:t(()=>[l(f,{label:"状态"},{default:t(()=>[l(Le,{modelValue:a(s).status,"onUpdate:modelValue":o[15]||(o[15]=e=>a(s).status=e)},{default:t(()=>[(u(!0),S(T,null,D(a(H),e=>(u(),r(Be,{key:e.value,label:e.value},{default:t(()=>[g(se(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(C,null,{default:t(()=>[l(m,{span:12},{default:t(()=>[l(f,{label:"岗位"},{default:t(()=>[l(B,{modelValue:a(s).postIds,"onUpdate:modelValue":o[16]||(o[16]=e=>a(s).postIds=e),multiple:"",placeholder:"请选择"},{default:t(()=>[(u(!0),S(T,null,D(a(Y),e=>(u(),r(q,{key:e.postId,label:e.postName,value:e.postId,disabled:e.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{span:12},{default:t(()=>[l(f,{label:"角色"},{default:t(()=>[l(B,{modelValue:a(s).roleIds,"onUpdate:modelValue":o[17]||(o[17]=e=>a(s).roleIds=e),multiple:"",placeholder:"请选择"},{default:t(()=>[(u(!0),S(T,null,D(a(Q),e=>(u(),r(q,{key:e.roleId,label:e.roleName,value:e.roleId,disabled:e.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(C,null,{default:t(()=>[l(m,{span:24},{default:t(()=>[l(f,{label:"备注"},{default:t(()=>[l(p,{modelValue:a(s).remark,"onUpdate:modelValue":o[18]||(o[18]=e=>a(s).remark=e),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),l(le,{title:a(v).title,modelValue:a(v).open,"onUpdate:modelValue":o[22]||(o[22]=e=>a(v).open=e),width:"400px","append-to-body":""},{footer:t(()=>[k("div",ml,[l(b,{type:"primary",onClick:Ue},{default:t(()=>[g("确 定")]),_:1}),l(b,{onClick:o[21]||(o[21]=e=>a(v).open=!1)},{default:t(()=>[g("取 消")]),_:1})])]),default:t(()=>[l(Me,{ref:"uploadRef",limit:1,accept:".xlsx, .xls",headers:a(v).headers,action:a(v).url+"?updateSupport="+a(v).updateSupport,disabled:a(v).isUploading,"on-progress":xe,"on-success":Ie,"auto-upload":!1,drag:""},{tip:t(()=>[k("div",rl,[k("div",il,[l(ze,{modelValue:a(v).updateSupport,"onUpdate:modelValue":o[20]||(o[20]=e=>a(v).updateSupport=e)},null,8,["modelValue"]),g("是否更新已经存在的用户数据 ")]),pl,l(Ee,{type:"primary",underline:!1,style:{"font-size":"12px","vertical-align":"baseline"},onClick:we},{default:t(()=>[g("下载模板")]),_:1})])]),default:t(()=>[l(Ke,{class:"el-icon--upload"},{default:t(()=>[l(Oe)]),_:1}),dl]),_:1},8,["headers","action","disabled"])]),_:1},8,["title","modelValue"])])}}});export{bl as default};
