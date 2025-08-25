const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalProfile-gTPZYkou.js","assets/index-B_YZ1bcj.js","assets/index-BxqDl4aX.css","assets/formik.esm-4u843pHc.js","assets/ModalProfile.module-BI4GlYxw.js","assets/ModalProfile-DwgWg1iR.css","assets/closebutton-BzUVgdKv.js"])))=>i.map(i=>d[i]);
import{r as e,j as a,M as i,P as f,_ as v}from"./index-B_YZ1bcj.js";const y="_modal__overlay_mp40q_2",g="_modal__content_mp40q_28",o={modal__overlay:y,"modal__overlay--active":"_modal__overlay--active_mp40q_16","modal__overlay--closing":"_modal__overlay--closing_mp40q_22",modal__content:g,"modal__content--active":"_modal__content--active_mp40q_47","modal__content--closing":"_modal__content--closing_mp40q_53"},M=e.lazy(()=>v(()=>import("./ModalProfile-gTPZYkou.js").then(r=>r.M),__vite__mapDeps([0,1,2,3,4,5,6])));i.setAppElement("#root");const O=e.forwardRef((r,m)=>{const[t,s]=e.useState(!1),[_,n]=e.useState(!1),[l,c]=e.useState(!1);e.useEffect(()=>{if(l){const u=setTimeout(()=>n(!0),10);return()=>clearTimeout(u)}else n(!1)},[l]);const d=()=>{document.body.style.overflow="",n(!1),s(!0),setTimeout(()=>{c(!1),s(!1)},300)},p=()=>{document.body.style.overflow="hidden",c(!0),s(!1)};return e.useImperativeHandle(m,()=>({openModal:p,closeModal:d,isClosing:t,isOpening:_,modalIsOpen:l})),a.jsx(i,{isOpen:l,onRequestClose:d,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,overlayClassName:`
${o.modal__overlay} 
${_?o["modal__overlay--active"]:""}
${t?o["modal__overlay--closing"]:""}
`,className:`
${o.modal__content} 
${_?o["modal__content--active"]:""}
${t?o["modal__content--closing"]:""}
`,closeTimeoutMS:300,ariaHideApp:!0,aria:{modal:!0,labelledby:"profile-modal-title",describedby:"profile-modal-description"},children:a.jsx(e.Suspense,{fallback:a.jsx(f,{component:"Загрузка профиля"}),children:a.jsx(M,{closeModal:d})})})});O.displayName="ProfileModal";export{O as default};
