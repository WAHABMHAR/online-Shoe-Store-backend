"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6394],{7761:(I,_,t)=>{t.d(_,{pl:()=>D,aY:()=>T,q5:()=>a.q});var e=t(67294),c=t(80120),u=t(25804),P=t(18172);const g={data:[],isLoading:!0},r=(n,L)=>(0,P.ZP)(n,o=>{switch(L.type){case"GET_DATA_SUCCEEDED":{o.data=L.data,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1;break}default:return o}}),D=({ssoEnabled:n})=>{const[L,o]=(0,e.useReducer)(r,g),R=(0,c.lm)(),{get:h}=(0,c.kY)();return(0,e.useEffect)(()=>{(async()=>{try{if(!n){o({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:A}=await h((0,u.IF)("providers"));o({type:"GET_DATA_SUCCEEDED",data:A})}catch(A){console.error(A),o({type:"GET_DATA_ERROR"}),R({type:"warning",message:{id:"notification.error"}})}})()},[h,n,R]),L};var l=t(14293),m=t.n(l),d=t(86896),p=t(16550),a=t(71926);const E="strapi-notification-seat-limit",O="https://cloud.strapi.io/profile/billing",s="https://strapi.io/billing/request-seats",T=()=>{const{formatMessage:n}=(0,d.Z)();let{license:L,isError:o,isLoading:R}=(0,a.q)();const h=(0,c.lm)(),{pathname:y}=(0,p.TH)(),{enforcementUserCount:A,permittedSeats:C,licenseLimitStatus:M,isHostedOnStrapiCloud:U}=L;(0,e.useEffect)(()=>{if(o||R)return;const B=!m()(C)&&!window.sessionStorage.getItem(`${E}-${y}`)&&(M==="AT_LIMIT"||M==="OVER_LIMIT");let S;M==="OVER_LIMIT"?S="warning":M==="AT_LIMIT"&&(S="softWarning"),B&&h({type:S,message:n({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:M}),title:n({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:M,enforcementUserCount:A,permittedSeats:C}),link:{url:U?O:s,label:n({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:U})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${y}`,!0)}})},[h,L,y,n,R,C,M,A,U,o])}},71926:(I,_,t)=>{t.d(_,{q:()=>P});var e=t(67294),c=t(80120),u=t(88767);function P({enabled:g}={enabled:!0}){const{get:f}=(0,c.kY)(),{data:r,isError:i,isLoading:D}=(0,u.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:d}}=await f("/admin/license-limit-information");return d},{enabled:g}),l=r??{},m=e.useCallback(d=>(l?.features??[]).find(a=>a.name===d)?.options??{},[l?.features]);return{license:l,getFeature:m,isError:i,isLoading:D}}},76394:(I,_,t)=>{t.r(_),t.d(_,{LoginEE:()=>E});var e=t(67294),c=t(70004),u=t(41580),P=t(11047),g=t(75515),f=t(45697),r=t.n(f),i=t(86896),D=t(1565),l=t(50745),m=t(31640),d=t(7761),p=t(80090);const a=(0,D.ZP)(c.i)`
  flex: 1;
`,E=O=>{const s=window.strapi.features.isEnabled(window.strapi.features.SSO),{isLoading:v,data:T}=(0,d.pl)({ssoEnabled:s}),{formatMessage:n}=(0,i.Z)();return!s||!v&&T.length===0?e.createElement(l.ZP,null,e.createElement(m.Z,{...O})):e.createElement(l.ZP,null,e.createElement(m.Z,{...O},e.createElement(u.x,{paddingTop:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(P.k,null,e.createElement(a,null),e.createElement(u.x,{paddingLeft:3,paddingRight:3},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Auth.login.sso.divider"}))),e.createElement(a,null)),e.createElement(p.Z,{providers:T,displayAllProviders:!1})))))};E.defaultProps={onSubmit:O=>O.preventDefault(),requestError:null},E.propTypes={formErrors:r().object.isRequired,modifiedData:r().object.isRequired,onChange:r().func.isRequired,onSubmit:r().func,requestError:r().object}},80090:(I,_,t)=>{t.d(_,{Z:()=>O});var e=t(67294),c=t(11047),u=t(84495),P=t(75515),g=t(11276),f=t(67819),r=t(45697),i=t.n(r),D=t(86896),l=t(73727),m=t(1565);const d=m.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,p=(0,m.ZP)(c.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,a=({provider:s})=>e.createElement(u.u,{label:s.displayName},e.createElement(d,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?e.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):e.createElement(P.Z,null,s.displayName)));a.propTypes={provider:i().shape({icon:i().string,displayName:i().string.isRequired,uid:i().string.isRequired}).isRequired};const E=({providers:s,displayAllProviders:v})=>{const{formatMessage:T}=(0,D.Z)();return v?e.createElement(g.r,{gap:4},s.map(n=>e.createElement(f.P,{key:n.uid,col:4},e.createElement(a,{provider:n})))):s.length>2&&!v?e.createElement(g.r,{gap:4},s.slice(0,2).map(n=>e.createElement(f.P,{key:n.uid,col:4},e.createElement(a,{provider:n}))),e.createElement(f.P,{col:4},e.createElement(u.u,{label:T({id:"global.see-more"})},e.createElement(d,{as:l.rU,to:"/auth/providers"},e.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):e.createElement(p,{justifyContent:"center"},s.map(n=>e.createElement(a,{key:n.uid,provider:n})))};E.defaultProps={displayAllProviders:!0},E.propTypes={providers:i().arrayOf(i().object).isRequired,displayAllProviders:i().bool};const O=E}}]);
