"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[551],{39732:function(a,e,s){s.r(e),s.d(e,{default:function(){return f}});var l=s(29439),i=s(72791),t=s(6349),c=s(80184),r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Usaha 1","Usaha 2","Usaha 3","Usaha 4","Usaha 5","Usaha 6"]},series:[{type:"bar",data:[18203,23489,29034,104970,131744,630230],color:"#EA9501"}]};var n=function(){return(0,c.jsx)(t.Z,{option:r,style:{width:"auto",height:"400px"}})},d={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Maiwa","Enrekang","Baraka","Masalle","Anggeraja","Cendana"]},series:[{type:"bar",data:[18203,23489,29034,104970,131744,630230],color:"#499841"}]};var m=function(){return(0,c.jsx)(t.Z,{option:d,style:{width:"auto",height:"400px"}})},o=s.p+"static/media/produk.bb867c4c665ae3380586.png",h=s(31243),u=s(90027);function x(a){return(0,c.jsx)("option",{value:"1",children:a.listkec})}function p(a){return(0,c.jsx)("option",{value:"1",children:a.listdesa})}function j(a){return(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsx)("div",{className:"card p-2 mb-3",children:(0,c.jsxs)("div",{className:"row g-0 align-items-center",children:[(0,c.jsxs)("div",{className:"col-5 item",children:[(0,c.jsx)("span",{className:"notify-badge",children:a.tipe}),(0,c.jsx)("img",{src:o,className:"img-fluid rounded-start",alt:"..."})]}),(0,c.jsx)("div",{className:"col-7 direction",children:(0,c.jsxs)("div",{className:"card-body-produk",children:[(0,c.jsx)("h6",{className:"fw-bold m-0",children:a.nama}),(0,c.jsxs)("p",{className:"fw-bold smaller m-0",children:["Desa ",a.deskel,", Kec. ",a.kecamatan]}),(0,c.jsxs)("div",{className:"smaller",children:[(0,c.jsx)("p",{className:"m-0",children:"Order via:"}),(0,c.jsxs)("ul",{className:"m-0",children:[(0,c.jsx)("li",{children:"DIGIDES"}),(0,c.jsx)("li",{children:"Tokopedia"}),(0,c.jsx)("li",{children:"Grab/Goek"})]})]}),(0,c.jsxs)("a",{href:a.map,target:"_blank",rel:"noreferrer",className:"small",children:[(0,c.jsx)("i",{className:"fa-sharp fa-solid fa-diamond-turn-right"}),"\xa0 Petunjuk Arah"]})]})})]})})})}var f=function(){var a=(0,i.useState)(!1),e=(0,l.Z)(a,2),s=e[0],t=e[1],r=(0,i.useState)(),d=(0,l.Z)(r,2),o=(d[0],d[1]),f=(0,i.useState)([]),N=(0,l.Z)(f,2),k=N[0],v=N[1],b=(0,i.useState)([]),g=(0,l.Z)(b,2),y=g[0],A=g[1],U=(0,i.useState)([]),D=(0,l.Z)(U,2),w=D[0],E=D[1];return(0,i.useEffect)((function(){t(!0),h.Z.get("https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/umkm?k3=&k4=&search=&type=&limit=").then((function(a){var e=a.data.data;o(e),v(e.list_kecamatan),A(e.list_desa),E(e.list_umkm)})).catch((function(a){alert(a.message)})).finally((function(){return t(!1)})),document.title="UMKM | PENDEKAR"}),[]),s?(0,c.jsx)(u.Z,{}):(0,c.jsx)(i.Fragment,{children:(0,c.jsxs)("main",{id:"main",className:"main",children:[(0,c.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,c.jsx)("h1",{children:"UMKM"})}),(0,c.jsx)("section",{className:"section dashboard",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body pb-0",children:[(0,c.jsx)("h2",{className:"card-title-potensi pb-0",children:"USAHA DI WILAYAH"}),(0,c.jsx)(m,{})]})})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body pb-0",children:[(0,c.jsx)("h2",{className:"card-title-potensi pb-0",children:"JENIS USAHA"}),(0,c.jsx)(n,{})]})})}),(0,c.jsxs)("div",{className:"col-lg-12",children:[(0,c.jsx)("h5",{className:"card-title-potensi pb-0",children:"PRODUK UMKM DESA/KELURAHAN"}),(0,c.jsxs)("div",{className:"row g-1 mb-4",children:[(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("div",{className:"search-produk",children:(0,c.jsxs)("form",{className:"search-form-produk d-flex align-items-center",method:"POST",action:"/",children:[(0,c.jsx)("input",{type:"text",name:"query",placeholder:"Cari produk...",title:"Enter search keyword"}),(0,c.jsx)("button",{type:"submit",title:"Search",children:(0,c.jsx)("i",{className:"bi bi-search"})})]})})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,c.jsx)("option",{value:"DEFAULT",children:"Kecamatan"}),k.map((function(a){return(0,c.jsx)(x,{listkec:a.nama_kecamatan},a.kode_wilayah)}))]})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,c.jsx)("option",{value:"DEFAULT",children:"Desa"}),y.map((function(a){return(0,c.jsx)(p,{listdesa:a.nama_deskel},a.kode_wilayah)}))]})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,c.jsx)("option",{value:"DEFAULT",children:"Jenis Usaha"})})})]}),(0,c.jsx)("div",{className:"row",children:w.map((function(a,e){return(0,c.jsx)(j,{kecamatan:a.nama_kecamatan,deskel:a.nama_deskel,nama:a.nama_usaha,tipe:a.tipe_usaha,alamat:a.alamat,map:a.map},e+1)}))})]})]})})]})})}}}]);
//# sourceMappingURL=551.32bd312f.chunk.js.map