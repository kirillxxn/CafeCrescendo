const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalBasket-DcrvYXmC.js","assets/index-CEBO9w8k.js","assets/index-Chx7WZ0p.css","assets/closebutton-BzUVgdKv.js","assets/ModalBasket-C2t0HBGR.css"])))=>i.map(i=>d[i]);
import{r as e,j as d,M as i,_ as y}from"./index-CEBO9w8k.js";const p="_modal__overlay_10bsa_2",f="_modal__content_10bsa_28",o={modal__overlay:p,"modal__overlay--active":"_modal__overlay--active_10bsa_16","modal__overlay--closing":"_modal__overlay--closing_10bsa_22",modal__content:f,"modal__content--active":"_modal__content--active_10bsa_46","modal__content--closing":"_modal__content--closing_10bsa_52"},b=e.lazy(()=>y(()=>import("./ModalBasket-DcrvYXmC.js").then(c=>c.M),__vite__mapDeps([0,1,2,3,4])));i.setAppElement("#root");const g=e.forwardRef((c,m)=>{const[l,t]=e.useState(!1),[s,_]=e.useState(!1),[a,r]=e.useState(!1);e.useEffect(()=>{if(a){const v=setTimeout(()=>_(!0),10);return()=>clearTimeout(v)}else _(!1)},[a]);const n=()=>{document.body.style.overflow="",_(!1),t(!0),setTimeout(()=>{r(!1),t(!1)},300)},u=()=>{document.body.style.overflow="hidden",r(!0),t(!1)};return e.useImperativeHandle(m,()=>({openModal:u,closeModal:n,isClosing:l,isOpening:s,modalIsOpen:a})),d.jsx(i,{isOpen:a,onRequestClose:n,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,overlayClassName:`
${o.modal__overlay} 
${s?o["modal__overlay--active"]:""}
${l?o["modal__overlay--closing"]:""}
`,className:`
${o.modal__content} 
${s?o["modal__content--active"]:""}
${l?o["modal__content--closing"]:""}
`,closeTimeoutMS:300,ariaHideApp:!0,aria:{modal:!0,labelledby:"basket-modal-title",describedby:"basket-modal-description"},children:d.jsx(e.Suspense,{fallback:null,children:d.jsx(b,{closeModal:n})})})});g.displayName="BasketModal";export{g as default};
