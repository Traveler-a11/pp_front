import{W as U,r as m,D as be,H as we,d,I as K,o as g,c as M,L as k,O as Q,i as n,f as e,h as a,l as Ve,J as ye,K as ke,m as C,F,p,e as R,A,n as H,C as Ce,x as De}from"./index-B5XNB-yB.js";function xe(h){return U({url:"/orders/orders/list",method:"get",params:h})}function Ue(h){return U({url:"/orders/orders/"+h,method:"get"})}function Oe(h){return U({url:"/orders/orders",method:"post",data:h})}function J(h){return U({url:"/orders/orders",method:"put",headers:{"Content-Type":"application/json"},data:h})}const Se={class:"app-container"},Te={class:"dialog-footer"},Ie=Ce({name:"Orders"}),Ne=Object.assign(Ie,{setup(h){const{proxy:c}=De(),{order_system:L}=c.useDict("order_system"),E=m([]),b=m([]),w=m(!1),O=m(!0),D=m(!0),P=m([]),S=m([]),W=m(!0),G=m(!0),T=m(0),q=m(""),v=m([]),X=be({form:{},queryParams:{pageNum:1,pageSize:10,number:null,status:null,orderTime:null},rules:{}}),{queryParams:u,form:V,rules:Z}=we(X);function y(){O.value=!0,u.value.params={},v!=null&&v!=""&&(u.value.params.beginOrderTime=v.value[0],u.value.params.endOrderTime=v.value[1]),xe(u.value).then(t=>{E.value=t.rows,T.value=t.total,O.value=!1})}function ee(){w.value=!1,I()}function I(){V.value={tableNo:null,id:null,number:null,status:null,userId:null,orderTime:null,checkoutTime:null,payMethod:null,amount:null,remark:null,phone:null},b.value=[],c.resetForm("ordersRef")}function $(){u.value.pageNum=1,y()}function le(){v.value=[],c.resetForm("queryRef"),$()}function ae(t){P.value=t.map(o=>o.id),W.value=t.length!=1,G.value=!t.length}function te(t){I();const o=t.id||P.value;Ue(o).then(i=>{V.value=i.data,b.value=i.data.orderDetailList,w.value=!0,q.value="修改订单"})}function oe(){c.$refs.ordersRef.validate(t=>{t&&(V.value.orderDetailList=b.value,V.value.id!=null?J(V.value).then(o=>{c.$modal.msgSuccess("修改成功"),w.value=!1,y()}):Oe(V.value).then(o=>{c.$modal.msgSuccess("新增成功"),w.value=!1,y()}))})}function ne({row:t,rowIndex:o}){t.index=o+1}function re(){let t={};t.name="",t.image="",t.dishId="",t.setmealId="",t.dishFlavor="",t.number="",t.amount="",b.value.push(t)}function de(){if(S.value.length==0)c.$modal.msgError("请先选择要删除的订单明细数据");else{const t=b.value,o=S.value;b.value=t.filter(function(i){return o.indexOf(i.index)==-1})}}function ue(t){S.value=t.map(o=>o.index)}function se(){c.download("orders/orders/export",{...u.value},`orders_${new Date().getTime()}.xlsx`)}function B(t,o){I(),J({id:o,status:t}).then(f=>{f&&f.code==200?(c.$modal.msgSuccess("修改成功"),y()):c.$modal.msgError(f.message||"修改失败")}).catch(f=>{c.$modal.msgError(f.message||"修改失败")})}return y(),(t,o)=>{const i=d("el-input"),f=d("el-form-item"),ie=d("el-option"),me=d("el-select"),ce=d("el-date-picker"),_=d("el-button"),Y=d("el-form"),N=d("el-col"),pe=d("right-toolbar"),j=d("el-row"),r=d("el-table-column"),fe=d("dict-tag"),z=d("el-table"),_e=d("pagination"),he=d("el-divider"),ve=d("el-dialog"),x=K("hasPermi"),ge=K("loading");return g(),M("div",Se,[k(e(Y,{model:n(u),ref:"queryRef",inline:!0,"label-width":"68px"},{default:a(()=>[e(f,{label:"订单号",prop:"number"},{default:a(()=>[e(i,{modelValue:n(u).number,"onUpdate:modelValue":o[0]||(o[0]=l=>n(u).number=l),placeholder:"请输入订单号",clearable:"",onKeyup:Ve($,["enter"])},null,8,["modelValue"])]),_:1}),e(f,{label:"订单状态",prop:"status"},{default:a(()=>[e(me,{modelValue:n(u).status,"onUpdate:modelValue":o[1]||(o[1]=l=>n(u).status=l),placeholder:"请选择订单状态",clearable:""},{default:a(()=>[(g(!0),M(ye,null,ke(n(L),l=>(g(),C(ie,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"下单时间",style:{width:"308px"}},{default:a(()=>[e(ce,{modelValue:n(v),"onUpdate:modelValue":o[2]||(o[2]=l=>F(v)?v.value=l:null),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),_:1}),e(f,null,{default:a(()=>[e(_,{type:"primary",icon:"Search",onClick:$},{default:a(()=>[p("搜索")]),_:1}),e(_,{icon:"Refresh",onClick:le},{default:a(()=>[p("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[Q,n(D)]]),e(j,{gutter:10,class:"mb8"},{default:a(()=>[e(N,{span:1.5},{default:a(()=>[k((g(),C(_,{type:"warning",plain:"",icon:"Download",onClick:se},{default:a(()=>[p("导出")]),_:1})),[[x,["orders:orders:export"]]])]),_:1}),e(pe,{showSearch:n(D),"onUpdate:showSearch":o[3]||(o[3]=l=>F(D)?D.value=l:null),onQueryTable:y},null,8,["showSearch"])]),_:1}),k((g(),C(z,{data:n(E),onSelectionChange:ae},{default:a(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{label:"订单号",align:"center",prop:"number"}),e(r,{label:"订单状态",align:"center",prop:"status"},{default:a(l=>[e(fe,{options:n(L),value:l.row.status},null,8,["options","value"])]),_:1}),e(r,{label:"用户手机号",align:"center",prop:"phone"}),e(r,{label:"餐桌号",align:"center",prop:"tableNo"}),e(r,{label:"下单时间",align:"center",prop:"checkoutTime",width:"180"},{default:a(l=>[R("span",null,A(t.parseTime(l.row.checkoutTime,"{y}-{m}-{d} {h}:{i}:{s}")),1)]),_:1}),e(r,{label:"实收金额",align:"center"},{default:a(l=>[R("span",null,"￥"+A(l.row.amount),1)]),_:1}),e(r,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:a(l=>[k((g(),C(_,{link:"",type:"primary",icon:"Edit",onClick:s=>te(l.row)},{default:a(()=>[p("查看")]),_:2},1032,["onClick"])),[[x,["orders:orders:edit"]]]),l.row.status==2?k((g(),C(_,{key:0,link:"",type:"primary",onClick:s=>B(3,l.row.number)},{default:a(()=>[p("送出")]),_:2},1032,["onClick"])),[[x,["orders:orders:edit"]]]):H("",!0),l.row.status==3?k((g(),C(_,{key:1,link:"",type:"primary",onClick:s=>B(4,l.row.number)},{default:a(()=>[p("完成")]),_:2},1032,["onClick"])),[[x,["orders:orders:edit"]]]):H("",!0)]),_:1})]),_:1},8,["data"])),[[ge,n(O)]]),k(e(_e,{total:n(T),page:n(u).pageNum,"onUpdate:page":o[4]||(o[4]=l=>n(u).pageNum=l),limit:n(u).pageSize,"onUpdate:limit":o[5]||(o[5]=l=>n(u).pageSize=l),onPagination:y},null,8,["total","page","limit"]),[[Q,n(T)>0]]),e(ve,{title:n(q),modelValue:n(w),"onUpdate:modelValue":o[6]||(o[6]=l=>F(w)?w.value=l:null),width:"500px","append-to-body":""},{footer:a(()=>[R("div",Te,[e(_,{type:"primary",onClick:oe},{default:a(()=>[p("确 定")]),_:1}),e(_,{onClick:ee},{default:a(()=>[p("取 消")]),_:1})])]),default:a(()=>[e(Y,{ref:"ordersRef",model:n(V),rules:n(Z),"label-width":"80px"},{default:a(()=>[e(he,{"content-position":"center"},{default:a(()=>[p("订单明细信息")]),_:1}),e(j,{gutter:10,class:"mb8"},{default:a(()=>[e(N,{span:1.5},{default:a(()=>[e(_,{type:"primary",icon:"Plus",onClick:re},{default:a(()=>[p("添加")]),_:1})]),_:1}),e(N,{span:1.5},{default:a(()=>[e(_,{type:"danger",icon:"Delete",onClick:de},{default:a(()=>[p("删除")]),_:1})]),_:1})]),_:1}),e(z,{data:n(b),"row-class-name":ne,onSelectionChange:ue,ref:"orderDetail"},{default:a(()=>[e(r,{type:"selection",width:"50",align:"center"}),e(r,{label:"序号",align:"center",prop:"index",width:"50"}),e(r,{label:"名字",prop:"name",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.name,"onUpdate:modelValue":s=>l.row.name=s,placeholder:"请输入名字"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"菜品id",prop:"dishId",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.dishId,"onUpdate:modelValue":s=>l.row.dishId=s,placeholder:"请输入菜品id"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"套餐id",prop:"setmealId",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.setmealId,"onUpdate:modelValue":s=>l.row.setmealId=s,placeholder:"请输入套餐id"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"口味",prop:"dishFlavor",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.dishFlavor,"onUpdate:modelValue":s=>l.row.dishFlavor=s,placeholder:"请输入口味"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"数量",prop:"number",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.number,"onUpdate:modelValue":s=>l.row.number=s,placeholder:"请输入数量"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"金额",prop:"amount",width:"150"},{default:a(l=>[e(i,{modelValue:l.row.amount,"onUpdate:modelValue":s=>l.row.amount=s,placeholder:"请输入金额"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ne as default};
