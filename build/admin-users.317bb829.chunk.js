"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5199],{54920:(S,m,e)=>{e.d(m,{R:()=>l});var t=e(80120),n=e(88767);function l(r={},E={}){const{id:a="",...s}=r,{get:g}=(0,t.kY)(),{data:o,isError:p,isLoading:h,refetch:A}=(0,n.useQuery)(["users",a,s],async()=>{const{data:{data:P}}=await g(`/admin/users/${a}`,{params:s});return P},E);let D=[];return a&&o?D=[o]:Array.isArray(o?.results)&&(D=o.results),{users:D,pagination:o?.pagination??null,isLoading:h,isError:p,refetch:A}}},71359:(S,m,e)=>{e.d(m,{Z:()=>p});var t=e(67294),n=e(41580),l=e(29728),r=e(80120),E=e(89597),a=e(45697),s=e.n(a),g=e(86896);const o=({displayedFilters:h})=>{const[A,D]=(0,t.useState)(!1),{formatMessage:P}=(0,g.Z)(),T=(0,t.useRef)(),W=()=>{D(C=>!C)};return t.createElement(t.Fragment,null,t.createElement(n.x,{paddingTop:1,paddingBottom:1},t.createElement(l.z,{variant:"tertiary",ref:T,startIcon:t.createElement(E.Z,null),onClick:W,size:"S"},P({id:"app.utils.filters",defaultMessage:"Filters"})),A&&t.createElement(r.J5,{displayedFilters:h,isVisible:A,onToggle:W,source:T})),t.createElement(r.W$,{filtersSchema:h}))};o.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const p=o},61611:(S,m,e)=>{e.d(m,{W:()=>pe,Z:()=>Ze});var t=e(67294),n=e(185),l=e(53979),r=e(36989),E=e(49066),a=e(80120),s=e(80129),g=e.n(s),o=e(86896),p=e(88767),h=e(86706),A=e(16550),D=e(54920),P=e(80902),T=e(36364),W=e(71359),C=e(29728),Z=e(23293),se=e(45697),d=e.n(se);const q=({onClick:i})=>{const{formatMessage:M}=(0,o.Z)();return t.createElement(C.z,{onClick:i,startIcon:t.createElement(Z.Z,null),size:"S"},M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:d().func.isRequired};var ne=e(15234),F=e(79031),G=e(37909),le=e(92155),b=e(75515),j=e(11047),ee=e(12028),u=e(41580),Me=e(4585),fe=e(20022),re=e(25804);const oe=({canDelete:i,headers:M,entriesToDelete:L,onClickDelete:k,onSelectRow:V,withMainAction:z,withBulkActions:K,rows:U})=>{const{push:y,location:{pathname:H}}=(0,A.k6)(),{formatMessage:O}=(0,o.Z)();return t.createElement(ne.p,null,U.map(c=>{const $=L.findIndex(I=>I===c.id)!==-1;return t.createElement(F.Tr,{key:c.id,...(0,a.X7)({fn:()=>y(`${H}/${c.id}`),condition:K})},z&&t.createElement(G.Td,{...a.UW},t.createElement(le.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),checked:$,onChange:()=>{V({name:c.id,value:!$})}})),M.map(({key:I,cellFormatter:Y,name:x,...N})=>t.createElement(G.Td,{key:I},typeof Y=="function"?Y(c,{key:I,name:x,formatMessage:O,...N}):t.createElement(b.Z,{textColor:"neutral800"},c[x]||"-"))),K&&t.createElement(G.Td,null,t.createElement(j.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>y(`${H}/${c.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)}),i&&t.createElement(u.x,{paddingLeft:1,...a.UW},t.createElement(ee.h,{onClick:()=>k(c.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:d().bool,entriesToDelete:d().array,headers:d().array.isRequired,onClickDelete:d().func,onSelectRow:d().func,rows:d().array,withBulkActions:d().bool,withMainAction:d().bool};const ve=oe;var Pe=e(42866),ye=e(24969),he=e(59946),de=e(11276),ie=e(67819),Ae=e(36856),De=e(63321),Ce=e(36773),Oe=e(14916),Te=e(30164),Le=e(85078),J=e(87561);const Ee={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ry().shape({firstname:J.Z_().trim().required(a.I0.required),lastname:J.Z_(),email:J.Z_().email(a.I0.email).required(a.I0.required),roles:J.IX().min(1,a.I0.required).required(a.I0.required)}),Be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},ue=({onSuccess:i,onToggle:M})=>{const[L,k]=(0,t.useState)("create"),[V,z]=(0,t.useState)(!1),[K,U]=(0,t.useState)(null),{formatMessage:y}=(0,o.Z)(),H=(0,a.lm)(),{lockApp:O,unlockApp:c}=(0,a.o1)(),{post:$}=(0,a.kY)(),I=(0,P.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(v,B){return[...v,B]},defaultValue:[]}),Y=(0,P.c)(Ee,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(v,B){return{...v,...B}},defaultValue:Ee}),x=(0,P.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),N=(0,p.useMutation)(v=>$("/admin/users",v),{async onSuccess({data:v}){U(v.data.registrationToken),await i(),ae(),z(!1)},onError(v){throw z(!1),H({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),v},onSettled(){c()}}),w=y({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(v,{setErrors:B})=>{O(),z(!0);try{await N.mutateAsync(v)}catch(X){c(),X?.response?.data?.error.message==="Email already taken"&&B({email:X.response.data.error.message})}},ae=()=>{f?k(f):M()},{buttonSubmitLabel:_,isDisabled:Q,next:f}=Be[L],Fe=L==="create"?t.createElement(C.z,{type:"submit",loading:V},y(_)):t.createElement(C.z,{type:"button",loading:V,onClick:M},y(_));return x?t.createElement(Pe.P,{onClose:M,labelledBy:"title"},t.createElement(ye.x,null,t.createElement(De.O,{label:w},t.createElement(Ce.$,{isCurrent:!0},w))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:Y,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:v,handleChange:B,values:X})=>t.createElement(a.l0,null,t.createElement(he.f,null,t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:6},L!=="create"&&t.createElement(x,{registrationToken:K}),t.createElement(u.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},y({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(u.x,{paddingTop:4},t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(de.r,{gap:5},Ue.map(me=>me.map(R=>t.createElement(ie.P,{key:R.name,...R.size},t.createElement(a.jm,{...R,disabled:Q,error:v[R.name],onChange:B,value:X[R.name]})))))))),t.createElement(u.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},y({id:"global.roles",defaultMessage:"User's role"})),t.createElement(u.x,{paddingTop:4},t.createElement(de.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:v.roles,onChange:B,value:X.roles})),I.map(me=>me.map(R=>t.createElement(ie.P,{key:R.name,...R.size},t.createElement(a.jm,{...R,disabled:Q,onChange:B,value:X[R.name]}))))))))),t.createElement(Ae.m,{startActions:t.createElement(C.z,{variant:"tertiary",onClick:M,type:"button"},y({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Fe})))):null};ue.propTypes={onToggle:d().func.isRequired,onSuccess:d().func.isRequired};const Se=ue,ce=({pagination:i})=>t.createElement(u.x,{paddingTop:4},t.createElement(j.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:i})));ce.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ce.propTypes={pagination:d().shape({page:d().number,pageCount:d().number,pageSize:d().number,total:d().number})};const We=ce,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:i},{formatMessage:M}){return t.createElement(b.Z,{textColor:"neutral800"},i.map(L=>M({id:`Settings.permissions.users.${L.code}`,defaultMessage:L.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:i},{formatMessage:M}){return t.createElement(j.k,null,t.createElement(a.qb,{isActive:i,variant:i?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},M({id:i?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:i?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:i}=(0,a.kY)(),{formatAPIError:M}=(0,a.So)(),[L,k]=(0,t.useState)(!1),V=(0,h.v9)(T._),{allowedActions:{canCreate:z,canDelete:K,canRead:U}}=(0,a.ss)(V.settings.users),y=(0,p.useQueryClient)(),H=(0,a.lm)(),{formatMessage:O}=(0,o.Z)(),{search:c}=(0,A.TH)();(0,a.go)();const{users:$,pagination:I,isError:Y,isLoading:x,refetch:N}=(0,D.R)(g().parse(c,{ignoreQueryPrefix:!0}),{enabled:U}),w=(0,P.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=xe.map(f=>({...f,metadatas:{...f.metadatas,label:O(f.metadatas.label)}})),ae=O({id:"global.users",defaultMessage:"Users"}),_=()=>{k(f=>!f)},Q=(0,p.useMutation)(async f=>{await i("/admin/users/batch-delete",{ids:f})},{async onSuccess(){await N(),await y.refetchQueries(ge)},onError(f){H({type:"warning",message:{id:"notification.error",message:M(f),defaultMessage:"An error occured"}})}});return w?t.createElement(n.o,{"aria-busy":x},t.createElement(a.SL,{name:"Users"}),t.createElement(l.T,{primaryAction:z&&t.createElement(w,{onClick:_}),title:ae,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(r.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(W.Z,{displayedFilters:Ke}))}),t.createElement(E.D,{canRead:U},!U&&t.createElement(a.ZF,null),Y&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:x,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:f=>Q.mutateAsync([f]),headers:te,rows:$,withBulkActions:!0,withMainAction:K},t.createElement(ve,{canDelete:K,headers:te,rows:$,withBulkActions:!0,withMainAction:K})),I&&t.createElement(We,{pagination:I}))),L&&t.createElement(Se,{onSuccess:async()=>{await N(),await y.refetchQueries(ge)},onToggle:_})):null},Ze=()=>{const i=(0,P.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return i?t.createElement(i,null):null}},87901:(S,m,e)=>{e.r(m),e.d(m,{default:()=>s});var t=e(67294),n=e(80120),l=e(86706),r=e(36364),E=e(61611);const s=()=>{const g=(0,l.v9)(r._);return t.createElement(n.O4,{permissions:g.settings.users.main},t.createElement(E.Z,null))}},6324:(S,m,e)=>{e.d(m,{Z:()=>o});var t=e(67294),n=e(12028),l=e(80120),r=e(65186),E=e(45697),a=e.n(E),s=e(86896);const g=({children:p,target:h})=>{const A=(0,l.lm)(),{formatMessage:D}=(0,s.Z)(),{copy:P}=(0,l.VP)(),T=D({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),W=async()=>{await P(h)&&A({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(l.Y_,{endAction:t.createElement(n.h,{label:T,noBorder:!0,icon:t.createElement(r.Z,null),onClick:W}),title:h,titleEllipsis:!0,subtitle:p,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const o=g},30164:(S,m,e)=>{e.d(m,{A:()=>s});var t=e(67294),n=e(45697),l=e.n(n),r=e(86896),E=e(95651),a=e(6324);const s=({registrationToken:g})=>{const{formatMessage:o}=(0,r.Z)(),p=`${window.location.origin}${E.Z}auth/register?registrationToken=${g}`;return t.createElement(a.Z,{target:p},o({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:l().string}},85078:(S,m,e)=>{e.d(m,{Z:()=>W});var t=e(67294),n=e(40619),l=e(82562),r=e(80120),E=e(86647),a=e(45697),s=e.n(a),g=e(86896),o=e(88767),p=e(1565);const h=(0,p.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,A=p.ZP.div`
  animation: ${h} 2s infinite linear;
`,D=()=>t.createElement(A,null,t.createElement(E.Z,null)),P=async()=>{const{get:C}=(0,r.tg)(),{data:Z}=await C("/admin/roles");return Z.data},T=({disabled:C,error:Z,onChange:se,value:d})=>{const{status:q,data:ne}=(0,o.useQuery)(["roles"],P,{staleTime:5e4}),{formatMessage:F}=(0,g.Z)(),G=Z?F({id:Z,defaultMessage:Z}):"",le=F({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),b=F({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=F({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(D,null):void 0;return t.createElement(n.P,{id:"roles",disabled:C,error:G,hint:b,label:le,name:"roles",onChange:u=>{se({target:{name:"roles",value:u}})},placeholder:j,multi:!0,startIcon:ee,value:d.map(u=>u.toString()),withTags:!0,required:!0},(ne||[]).map(u=>t.createElement(l.W,{key:u.id,value:u.id.toString()},F({id:`global.${u.code}`,defaultMessage:u.name}))))};T.defaultProps={disabled:!1,error:void 0},T.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const W=T},36989:(S,m,e)=>{e.d(m,{Z:()=>l});var t=e(85893),n=e(11047);const l=({startActions:r,endActions:E})=>!r&&!E?null:(0,t.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(n.k,{gap:2,wrap:"wrap",children:r}),(0,t.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:E})]})},23293:(S,m,e)=>{e.d(m,{Z:()=>l});var t=e(85893);const n=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),l=n}}]);
