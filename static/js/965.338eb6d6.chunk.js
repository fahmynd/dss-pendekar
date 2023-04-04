"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[965],{1050:function(e,a,s){s.r(a),s.d(a,{default:function(){return D}});var n=s(29439),i=s(31243),l=s(72791),d={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function c(e){var a=function(e){if("number"===typeof e)return{value:e,unit:"px"};var a,s=(e.match(/^[0-9.]*/)||"").toString();a=s.includes(".")?parseFloat(s):parseInt(s,10);var n=(e.match(/[^0-9]*$/)||"").toString();return d[n]?{value:a,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}(e);return"".concat(a.value).concat(a.unit)}var r=function(){return r=Object.assign||function(e){for(var a,s=1,n=arguments.length;s<n;s++)for(var i in a=arguments[s])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e},r.apply(this,arguments)},t=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(s[n[i]]=e[n[i]])}return s},o=function(e,a,s){var n="react-spinners-".concat(e,"-").concat(s);if("undefined"==typeof window||!window.document)return n;var i=document.createElement("style");document.head.appendChild(i);var l=i.sheet,d="\n    @keyframes ".concat(n," {\n      ").concat(a,"\n    }\n  ");return l&&l.insertRule(d,0),n}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");var m=function(e){var a=e.loading,s=void 0===a||a,n=e.color,i=void 0===n?"#000000":n,d=e.speedMultiplier,m=void 0===d?1:d,h=e.cssOverride,u=void 0===h?{}:h,x=e.size,j=void 0===x?35:x,p=t(e,["loading","color","speedMultiplier","cssOverride","size"]),v=r({background:"transparent !important",width:c(j),height:c(j),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(o," ").concat(.75/m,"s 0s infinite linear"),animationFillMode:"both"},u);return s?l.createElement("span",r({style:v},p)):null},h=s(29086),u=s(15671),x=s(43144),j=s(60136),p=s(27277),v=(s(96144),s(64102),s(90201),s(71110),s(31842),s(55420),s(43203),s(30855),s(88890)),f=s.n(v),N=s(80184);function b(e){return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"text-center",children:e.no}),(0,N.jsx)("td",{children:e.kec}),(0,N.jsx)("td",{children:e.desa}),(0,N.jsx)("td",{children:e.peraturan}),(0,N.jsx)("td",{children:e.nomor}),(0,N.jsx)("td",{children:e.tanggal}),(0,N.jsx)("td",{children:e.tentang}),(0,N.jsx)("td",{children:(0,N.jsx)("a",{href:"https://online.digitaldesa.id/uploads/".concat(e.kode,"/buku-peraturan-di-desa/").concat(e.lampiran),rel:"noreferrer",target:"_blank",className:"btn btn-primary",children:"Download"})})]})}var g=function(e){(0,j.Z)(s,e);var a=(0,p.Z)(s);function s(e){var n;return(0,u.Z)(this,s),(n=a.call(this)).showTable=function(){var e=n.state.resultData;try{return e.data.list_administrasi.buku_peraturan_di_desa.map((function(e,a){return(0,N.jsx)(b,{no:a+1,kec:e.nama_kecamatan,desa:e.nama_deskel,peraturan:e.jenis_peraturan,nomor:e.nomor_peraturan,tanggal:e.tanggal_peraturan,tentang:e.tentang,lampiran:e.lampiran,kode:e.kode_wilayah},e.lampiran)}))}catch(a){alert(a.message)}},n.state={resultData:e.resultData},n}return(0,x.Z)(s,[{key:"componentDidMount",value:function(){f().fn.DataTable.isDataTable("#myTable")||f()(document).ready((function(){setTimeout((function(){f()("#table").DataTable({pageLength:10,searching:!1,dom:"Bfrtip",buttons:[""]})}),1e3)}))}},{key:"render",value:function(){return(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsxs)("table",{id:"table",className:"table table-bordered",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{className:"align-items-center justify-content-center",style:{background:"#F1ECFF"},children:[(0,N.jsx)("th",{children:"No"}),(0,N.jsx)("th",{children:"Kecamatan"}),(0,N.jsx)("th",{children:"Desa"}),(0,N.jsx)("th",{children:"Jenis Peraturan"}),(0,N.jsx)("th",{children:"Nomor Peraturan"}),(0,N.jsx)("th",{children:"Tanggal Peraturan"}),(0,N.jsx)("th",{children:"Tentang"}),(0,N.jsx)("th",{children:"Lampiran"})]})}),(0,N.jsx)("tbody",{children:this.showTable()})]})})}}]),s}(l.Component),_=s(90027);function k(e){return(0,N.jsx)("option",{value:"1",children:e.listkec})}function y(e){return(0,N.jsx)("option",{value:"1",children:e.listdesa})}var D=function(){var e=(0,l.useState)(),a=(0,n.Z)(e,2),s=a[0],d=a[1],c=(0,l.useState)(!1),r=(0,n.Z)(c,2),t=r[0],o=r[1],u=(0,l.useState)(),x=(0,n.Z)(u,2),j=x[0],p=x[1],v=(0,l.useState)(),f=(0,n.Z)(v,2),b=f[0],D=f[1],w=(0,l.useState)(),S=(0,n.Z)(w,2),T=S[0],Z=S[1],M=(0,l.useState)(),P=(0,n.Z)(M,2),E=P[0],F=P[1],L=(0,l.useState)(),A=(0,n.Z)(L,2),O=A[0],U=A[1],K=(0,l.useState)(),R=(0,n.Z)(K,2),C=R[0],B=R[1],V=(0,l.useState)(),I=(0,n.Z)(V,2),J=I[0],z=I[1],$=(0,l.useState)(),q=(0,n.Z)($,2),G=q[0],H=q[1],Q=(0,l.useState)(),W=(0,n.Z)(Q,2),X=W[0],Y=W[1],ee=(0,l.useState)(),ae=(0,n.Z)(ee,2),se=ae[0],ne=ae[1],ie=(0,l.useState)(),le=(0,n.Z)(ie,2),de=le[0],ce=le[1],re=(0,l.useState)(),te=(0,n.Z)(re,2),oe=te[0],me=te[1],he=(0,l.useState)(),ue=(0,n.Z)(he,2),xe=ue[0],je=ue[1],pe=(0,l.useState)(),ve=(0,n.Z)(pe,2),fe=ve[0],Ne=ve[1],be=(0,l.useState)(),ge=(0,n.Z)(be,2),_e=ge[0],ke=ge[1],ye=(0,l.useState)(),De=(0,n.Z)(ye,2),we=De[0],Se=De[1],Te=(0,l.useState)(),Ze=(0,n.Z)(Te,2),Me=Ze[0],Pe=Ze[1],Ee=(0,l.useState)(),Fe=(0,n.Z)(Ee,2),Le=Fe[0],Ae=Fe[1],Oe=(0,l.useState)([]),Ue=(0,n.Z)(Oe,2),Ke=Ue[0],Re=Ue[1],Ce=(0,l.useState)([]),Be=(0,n.Z)(Ce,2),Ve=Be[0],Ie=Be[1];return(0,l.useEffect)((function(){o(!0),i.Z.get(h.M+"administrasi-umum?k3=&k4=").then((function(e){d(e.data);var a=e.data.data.jumlah;p(a.buku_peraturan_di_desa),D(a.buku_peraturan_di_desa_add),Z(a.buku_keputusan_kepala_desa),F(a.buku_keputusan_kepala_desa_add),U(a.buku_inventaris_dan_kekayaan_desa),B(a.buku_inventaris_dan_kekayaan_desa_add),z(a.buku_aparat_pemerintah_desa),H(a.buku_aparat_pemerintah_desa_add),Y(a.buku_agenda),ne(a.buku_agenda_add),ce(a.buku_ekspedisi),me(a.buku_ekspedisi_add),je(a.buku_lembaran_desa_dan_berita_desa),Ne(a.buku_lembaran_desa_dan_berita_desa_add),ke(a.buku_tanah_kas_desa),Se(a.buku_tanah_kas_desa_add),Pe(a.buku_tanah_di_desa),Ae(a.buku_tanah_di_desa_add);var s=e.data.data;Re(s.list_kecamatan),Ie(s.list_desa)})).catch((function(e){alert(e.message)})).finally((function(){return o(!1)})),document.title="Administrasi Umum | PENDEKAR"}),[]),t?(0,N.jsx)(_.Z,{}):(0,N.jsx)(l.Fragment,{children:(0,N.jsxs)("main",{id:"main",className:"main",children:[(0,N.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,N.jsx)("h1",{children:"Administrasi Umum"})}),(0,N.jsx)("div",{className:"filter-update",children:(0,N.jsx)("h5",{children:(0,N.jsx)("span",{className:"badge bg-update py-3",children:"Last Update : 3 September 2022, 12:00 PM"})})}),(0,N.jsx)("section",{className:"section dashboard",children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-lg-12",children:(0,N.jsx)("div",{className:"card",children:(0,N.jsxs)("div",{className:"card-body",children:[(0,N.jsxs)("div",{className:"row g-1 my-4",children:[(0,N.jsx)("div",{className:"col-3",children:(0,N.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,N.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),Ke.map((function(e){return(0,N.jsx)(k,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,N.jsx)("div",{className:"col-3",children:(0,N.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,N.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),Ve.map((function(e){return(0,N.jsx)(y,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-file-text-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Peraturan Desa"}),(0,N.jsx)("h6",{children:t?(0,N.jsx)(m,{}):j})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",b,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-user-2-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Keputusan Kepala Desa"}),(0,N.jsx)("h6",{children:T})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",E,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-folders-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Inventaris Desa"}),(0,N.jsx)("h6",{children:O})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",C,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"bx bxs-home"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Aparat Pemerintah Desa"}),(0,N.jsx)("h6",{children:J})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",G,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-file-text-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Buku Agenda"}),(0,N.jsx)("h6",{children:X})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",se,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-file-list-3-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Surat Ekspedisi"}),(0,N.jsx)("h6",{children:de})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",oe,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-file-paper-2-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Lembaran & Berita Desa"}),(0,N.jsx)("h6",{children:xe})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",fe,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-map-2-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Tanah Kas Desa"}),(0,N.jsxs)("h6",{children:[_e,"m",(0,N.jsx)("sup",{children:"2"})]})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",we,"/Minggu"]})]})})})}),(0,N.jsx)("div",{className:"col-md-4",children:(0,N.jsx)("div",{className:"card info-card sales-card",children:(0,N.jsx)("div",{className:"card-body-info",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,N.jsx)("i",{className:"ri-road-map-fill"})}),(0,N.jsxs)("div",{className:"ps-2",children:[(0,N.jsx)("span",{className:"text-muted pt-2",children:"Luas Tanah Desa"}),(0,N.jsxs)("h6",{children:[Me,"m",(0,N.jsx)("sup",{children:"2"})]})]}),(0,N.jsxs)("div",{className:"adm-umum small",children:["+",Le,"/Minggu"]})]})})})})]})]})})}),(0,N.jsx)("div",{className:"col-lg-12",children:(0,N.jsx)("div",{className:"card",children:(0,N.jsxs)("div",{className:"card-body",children:[(0,N.jsx)("h5",{className:"card-title-potensi",children:"Tampilkan Berdasarkan"}),(0,N.jsxs)("div",{className:"row g-1 mb-4",children:[(0,N.jsx)("div",{className:"col-3",children:(0,N.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,N.jsx)("option",{value:"DEFAULT",children:"Jenis Administrasi"}),(0,N.jsx)("option",{value:"1",children:"Peraturan Desa"}),(0,N.jsx)("option",{value:"2",children:"Keputusan Kepala Desa"}),(0,N.jsx)("option",{value:"3",children:"Inventaris Desa"}),(0,N.jsx)("option",{value:"4",children:"Aparat Pemerintah Desa"}),(0,N.jsx)("option",{value:"5",children:"Buku Agenda"}),(0,N.jsx)("option",{value:"6",children:"Surat Ekspedisi"}),(0,N.jsx)("option",{value:"7",children:"Lembaran & Berita Desa"}),(0,N.jsx)("option",{value:"8",children:"Tanah Kas Desa"}),(0,N.jsx)("option",{value:"9",children:"Luas Tanah Desa"})]})}),(0,N.jsx)("div",{className:"col-3",children:(0,N.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,N.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),Ke.map((function(e){return(0,N.jsx)(k,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,N.jsx)("div",{className:"col-3",children:(0,N.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,N.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),Ve.map((function(e){return(0,N.jsx)(y,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,N.jsx)("div",{className:"table-responsive d-none",children:(0,N.jsxs)("table",{id:"example",className:"table table-bordered",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,N.jsx)("th",{scope:"col",children:"No"}),(0,N.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,N.jsx)("th",{scope:"col",children:"Desa"}),(0,N.jsx)("th",{scope:"col",children:"Jenis Peraturan"}),(0,N.jsx)("th",{scope:"col",children:"Nominal"}),(0,N.jsx)("th",{scope:"col",children:"Status Proposal"})]})}),(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{scope:"row",children:"1"}),(0,N.jsx)("td",{children:"Maiwa"}),(0,N.jsx)("td",{children:"Pilanggede"}),(0,N.jsx)("td",{children:"DD Tahap 1"}),(0,N.jsx)("td",{children:"Rp357,478,384"}),(0,N.jsx)("td",{children:(0,N.jsx)("h5",{children:(0,N.jsx)("span",{className:"badge bg-prioritas",children:"Revisi dari kecamatan"})})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{scope:"row",children:"2"}),(0,N.jsx)("td",{children:"Maiwa"}),(0,N.jsx)("td",{children:"Pilanggede"}),(0,N.jsx)("td",{children:"DD Tahap 1"}),(0,N.jsx)("td",{children:"Rp357,478,384"}),(0,N.jsx)("td",{children:(0,N.jsx)("h5",{children:(0,N.jsx)("span",{className:"badge bg-pengajuan",children:"Pengajuan"})})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{scope:"row",children:"3"}),(0,N.jsx)("td",{children:"Maiwa"}),(0,N.jsx)("td",{children:"Pilanggede"}),(0,N.jsx)("td",{children:"DD Tahap 1"}),(0,N.jsx)("td",{children:"Rp357,478,384"}),(0,N.jsx)("td",{children:(0,N.jsx)("h5",{children:(0,N.jsx)("span",{className:"badge bg-rkd",children:"Masuk RKD"})})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{scope:"row",children:"4"}),(0,N.jsx)("td",{children:"Maiwa"}),(0,N.jsx)("td",{children:"Pilanggede"}),(0,N.jsx)("td",{children:"DD Tahap 1"}),(0,N.jsx)("td",{children:"Rp357,478,384"}),(0,N.jsx)("td",{children:(0,N.jsx)("h5",{children:(0,N.jsxs)("span",{className:"badge bg-verifikasi",children:["Diverifikasi ",(0,N.jsx)("i",{className:"bx bxs-check-circle"})]})})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{scope:"row",children:"5"}),(0,N.jsx)("td",{children:"Maiwa"}),(0,N.jsx)("td",{children:"Pilanggede"}),(0,N.jsx)("td",{children:"DD Tahap 1"}),(0,N.jsx)("td",{children:"Rp357,478,384"}),(0,N.jsx)("td",{children:(0,N.jsx)("h5",{children:(0,N.jsxs)("span",{className:"badge bg-verifikasi",children:["Diverifikasi ",(0,N.jsx)("i",{className:"bx bxs-check-circle"})]})})})]})]})]})}),s&&(0,N.jsx)(g,{resultData:s})]})})})]})})]})})}},29086:function(e,a,s){s.d(a,{M:function(){return i}});var n=window.location.hostname.split(".")[0],i="https://".concat(n,".pendekar.digitaldesa.id/api/")}}]);
//# sourceMappingURL=965.338eb6d6.chunk.js.map