"use strict";(self.webpackChunktg_shop_ts=self.webpackChunktg_shop_ts||[]).push([[327],{6327:(n,i,e)=>{e.r(i),e.d(i,{default:()=>en});var t,d,s,r,a,c,l,o,x,h,p=e(5043),m=e(3003),u=e(8922),j=e(5441),A=e(8245),g=e(7528),y=e(197);const f=y.Ay.div(t||(t=(0,g.A)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]))),w=y.Ay.div(d||(d=(0,g.A)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),v=y.Ay.span(s||(s=(0,g.A)(["\n  width: 23%;\n\n  @media screen and (max-width: 600px) {\n    font-size: 15px;\n  }\n"]))),k=y.Ay.span(r||(r=(0,g.A)(["\n  width: 23%;\n  display: flex;\n  flex-direction: column;\n"]))),b=y.Ay.span(a||(a=(0,g.A)(["\n  font-size: 15px;\n  text-decoration: line-through;\n"]))),z=y.Ay.span(c||(c=(0,g.A)(["\n  font-size: 20px;\n"]))),C=y.Ay.span(l||(l=(0,g.A)(["\n  width: 23%;\n  display: flex;\n  align-items: center;\n"]))),P=y.Ay.div(o||(o=(0,g.A)(["\n  cursor: pointer;\n\n  @media screen and (max-width: 600px) {\n    font-size: 15px;\n  }\n"]))),T=y.Ay.div(x||(x=(0,g.A)(["\n  margin: 0 10px;\n"]))),_=y.Ay.div(h||(h=(0,g.A)(["\n  cursor: pointer;\n  padding-left: 12px;\n"])));var I=e(5475),$=e(579);const q=(0,p.memo)((n=>{let{item:i}=n;const{images:e,title:t,quantity:d,price:s,discountpercentage:r,stock:a}=i,c=(0,m.wA)();return(0,$.jsxs)(f,{children:[(0,$.jsx)(w,{children:(0,$.jsx)(I.N_,{to:"/product/".concat(i.id),children:(0,$.jsx)("img",{src:e[0],alt:t})})}),(0,$.jsx)(v,{children:t}),(0,$.jsxs)(C,{children:[(0,$.jsx)(P,{onClick:()=>c((0,A.Lr)(i)),children:"\u276e"}),(0,$.jsx)(T,{children:d}),(0,$.jsx)(P,{onClick:()=>{d>=a||c((0,A.Mr)(i))},children:"\u276f"})]}),(0,$.jsx)(k,{children:r&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(b,{children:["$",s*d]}),(0,$.jsxs)(z,{children:["$",(0,j.UN)(Number((0,j.PU)(s,r))*d,2)]})]})||(0,$.jsxs)(z,{children:["$",s*d]})}),(0,$.jsx)(_,{onClick:()=>c((0,A.I1)(i)),children:"\u2715"})]})}));var F,L,N,O=e(5144);const S=y.Ay.div(F||(F=(0,g.A)(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),U=y.Ay.form(L||(L=(0,g.A)(["\n  height: 100px;\n  min-width: 500px;\n\n  @media screen and (max-width: 600px) {\n    min-width: 90%;\n  }\n"]))),D=(0,y.Ay)(O.A)(N||(N=(0,g.A)(["\n  margin-left: auto;\n  margin-top: 30px;\n"])));var H=e(5544),M=e(4781);const Q=n=>{let{productsToOrder:i}=n;const{id:e,token:t}=(0,m.d4)(H.i),d=(0,m.wA)(),[s,r]=((0,m.d4)(u.rk),(0,p.useState)(!1));return(0,$.jsx)(S,{children:(0,$.jsxs)(U,{onSubmit:async n=>{n.preventDefault(),r(!0),e&&t&&d((0,M.O)({token:t,order:i})),setInterval((()=>r(!1)),5e3)},children:[(0,$.jsx)("h2",{children:"Credit Card Payment: "}),(0,$.jsx)(D,{isLoading:s,buttonType:O.H.inverted,children:"Pay now"})]})})};var R,Z=e(3216);const B=y.Ay.div(R||(R=(0,g.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 20px;\n  width: 80%;\n  padding: 40px;\n\n  h2 {\n    font-size: 26px;\n  }\n\n  button {\n    width: 50%;\n    transform: scale(1.3);\n  }\n"]))),E=()=>{const n=(0,Z.Zp)();return(0,$.jsxs)(B,{children:[(0,$.jsx)("h2",{children:"For order you should be loged in"}),(0,$.jsx)(O.A,{onClick:()=>n("/login"),children:"Log In"})]})};var G,J,K,V;const W=y.Ay.div(G||(G=(0,g.A)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  @media screen and (max-width: 800px) {\n    width: 70%;\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 95%;\n  }\n"]))),X=y.Ay.div(J||(J=(0,g.A)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),Y=y.Ay.div(K||(K=(0,g.A)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 15px;\n    width: auto;\n    &:last-child {\n      width: auto;\n    }\n  }\n"]))),nn=y.Ay.span(V||(V=(0,g.A)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),en=()=>{const n=(0,m.d4)(u.Fs),i=(0,m.d4)(u.rk),e=n.map((n=>({productid:n.id,quantity:n.quantity})));return(0,$.jsxs)(W,{children:[(0,$.jsxs)(X,{children:[(0,$.jsx)(Y,{children:(0,$.jsx)("span",{children:"Product"})}),(0,$.jsx)(Y,{children:(0,$.jsx)("span",{children:"Title"})}),(0,$.jsx)(Y,{children:(0,$.jsx)("span",{children:"Quantity"})}),(0,$.jsx)(Y,{children:(0,$.jsx)("span",{children:"Price"})}),(0,$.jsx)(Y,{children:(0,$.jsx)("span",{children:"Remove"})})]}),n.map((n=>(0,$.jsx)(q,{item:n},n.id))),(0,$.jsxs)(nn,{children:["Total: $",i]}),localStorage.getItem("token")?(0,$.jsx)(Q,{productsToOrder:e}):(0,$.jsx)(E,{})]})}}}]);
//# sourceMappingURL=327.9e883639.chunk.js.map