const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalProfile-B8EcW_gB.js","assets/index-CEBO9w8k.js","assets/index-Chx7WZ0p.css","assets/formik.esm-ERXyAgK2.js","assets/ModalProfile.module-BI4GlYxw.js","assets/ModalProfile-DwgWg1iR.css","assets/closebutton-BzUVgdKv.js","assets/ModalProfile-CcjKhNAU.css"])))=>i.map(i=>d[i]);
import{r as e,j as d,M as i,_ as f}from"./index-CEBO9w8k.js";const v="_modal__overlay_mp40q_2",y="_modal__content_mp40q_28",o={modal__overlay:v,"modal__overlay--active":"_modal__overlay--active_mp40q_16","modal__overlay--closing":"_modal__overlay--closing_mp40q_22",modal__content:y,"modal__content--active":"_modal__content--active_mp40q_47","modal__content--closing":"_modal__content--closing_mp40q_53"},g=e.lazy(()=>f(()=>import("./ModalProfile-B8EcW_gB.js").then(r=>r.M),__vite__mapDeps([0,1,2,3,4,5,6,7])));i.setAppElement("#root");const M=e.forwardRef((r,m)=>{const[t,a]=e.useState(!1),[s,_]=e.useState(!1),[l,c]=e.useState(!1);e.useEffect(()=>{if(l){const p=setTimeout(()=>_(!0),10);return()=>clearTimeout(p)}else _(!1)},[l]);const n=()=>{document.body.style.overflow="",_(!1),a(!0),setTimeout(()=>{c(!1),a(!1)},300)},u=()=>{document.body.style.overflow="hidden",c(!0),a(!1)};return e.useImperativeHandle(m,()=>({openModal:u,closeModal:n,isClosing:t,isOpening:s,modalIsOpen:l})),d.jsx(i,{isOpen:l,onRequestClose:n,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,overlayClassName:`
${o.modal__overlay} 
${s?o["modal__overlay--active"]:""}
${t?o["modal__overlay--closing"]:""}
`,className:`
${o.modal__content} 
${s?o["modal__content--active"]:""}
${t?o["modal__content--closing"]:""}
`,closeTimeoutMS:300,ariaHideApp:!0,aria:{modal:!0,labelledby:"profile-modal-title",describedby:"profile-modal-description"},children:d.jsx(e.Suspense,{fallback:null,children:d.jsx(g,{closeModal:n})})})});M.displayName="ProfileModal";export{M as default};
