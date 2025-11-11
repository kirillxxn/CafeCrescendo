const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalBasket-crjqyCW5.js","assets/index-DSaIzWRo.js","assets/index-BxqDl4aX.css","assets/closebutton-BzUVgdKv.js","assets/ModalBasket-C2t0HBGR.css"])))=>i.map(i=>d[i]);
import{r as e,j as t,M as i,P as y,_ as p}from"./index-DSaIzWRo.js";const f="_modal__overlay_10bsa_2",b="_modal__content_10bsa_28",o={modal__overlay:f,"modal__overlay--active":"_modal__overlay--active_10bsa_16","modal__overlay--closing":"_modal__overlay--closing_10bsa_22",modal__content:b,"modal__content--active":"_modal__content--active_10bsa_46","modal__content--closing":"_modal__content--closing_10bsa_52"},g=e.lazy(()=>p(()=>import("./ModalBasket-crjqyCW5.js").then(c=>c.M),__vite__mapDeps([0,1,2,3,4])));i.setAppElement("#root");const M=e.forwardRef((c,m)=>{const[l,s]=e.useState(!1),[_,n]=e.useState(!1),[a,r]=e.useState(!1);e.useEffect(()=>{if(a){const v=setTimeout(()=>n(!0),10);return()=>clearTimeout(v)}else n(!1)},[a]);const d=()=>{document.body.style.overflow="",n(!1),s(!0),setTimeout(()=>{r(!1),s(!1)},300)},u=()=>{document.body.style.overflow="hidden",r(!0),s(!1)};return e.useImperativeHandle(m,()=>({openModal:u,closeModal:d,isClosing:l,isOpening:_,modalIsOpen:a})),t.jsx(i,{isOpen:a,onRequestClose:d,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,overlayClassName:`
${o.modal__overlay} 
${_?o["modal__overlay--active"]:""}
${l?o["modal__overlay--closing"]:""}
`,className:`
${o.modal__content} 
${_?o["modal__content--active"]:""}
${l?o["modal__content--closing"]:""}
`,closeTimeoutMS:300,ariaHideApp:!0,aria:{modal:!0,labelledby:"basket-modal-title",describedby:"basket-modal-description"},children:t.jsx(e.Suspense,{fallback:t.jsx(y,{component:"Загрузка корзины"}),children:t.jsx(g,{closeModal:d})})})});M.displayName="BasketModal";export{M as default};
