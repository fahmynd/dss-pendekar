"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[924],{80113:function(e,a,s){var l=s(6349),i=s(80184),d={title:{text:"Keterangan"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,630230],color:"#327A6D"},{name:"2012",type:"bar",data:[19325,23438,31e3,121594,134141,681807],color:"#EA9501"}]};a.Z=function(){return(0,i.jsx)(l.Z,{option:d,style:{width:"auto",height:"500px"}})}},81924:function(e,a,s){s.r(a);var l=s(29439),i=s(31243),d=s(72791),c=(s(29086),s(80113)),n=s(80184);function r(e){return(0,n.jsx)("option",{value:"1",children:e.listkec})}function t(e){return(0,n.jsx)("option",{value:"1",children:e.listdesa})}a.default=function(){var e=(0,d.useState)([]),a=(0,l.Z)(e,2),s=a[0],h=a[1],o=(0,d.useState)([]),x=(0,l.Z)(o,2),j=x[0],u=x[1];return(0,d.useEffect)((function(){i.Z.get("https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/kependudukan").then((function(e){var a=e.data.data;h(a.list_kecamatan),u(a.list_desa)})),document.title="Kependudukan | PENDEKAR"}),[]),(0,n.jsx)(d.Fragment,{children:(0,n.jsxs)("main",{id:"main",className:"main",children:[(0,n.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,n.jsx)("h1",{children:"Kependudukan"})}),(0,n.jsx)("section",{className:"section dashboard",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"card-body pb-0",children:[(0,n.jsx)("h5",{className:"card-title-potensi pb-0",children:"Grafik Kependudukan"}),(0,n.jsxs)("div",{className:"row g-1 mb-4",children:[(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Jenis Kependudukan"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),s.map((function(e){return(0,n.jsx)(r,{listkec:e.kecamatan},e.kode)}))]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),j.map((function(e){return(0,n.jsx)(t,{listdesa:e.deskel},e.kode)}))]})})]}),(0,n.jsx)("div",{className:"row g-md-0",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"stunting-card",children:(0,n.jsx)("div",{className:"card-body my-4",children:(0,n.jsx)(c.Z,{})})})})})]})})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title-potensi",children:"Tabel Kependudukan"}),(0,n.jsxs)("div",{className:"row g-1 mb-4",children:[(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Jenis Kependudukan"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),s.map((function(e){return(0,n.jsx)(r,{listkec:e.kecamatan},e.kode)}))]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),j.map((function(e){return(0,n.jsx)(t,{listdesa:e.deskel},e.kode)}))]})})]}),(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,n.jsx)("th",{scope:"col",children:"No"}),(0,n.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,n.jsx)("th",{scope:"col",children:"Desa"}),(0,n.jsx)("th",{scope:"col",children:"Total Penduduk"}),(0,n.jsx)("th",{scope:"col",children:"Laki-Laki"}),(0,n.jsx)("th",{scope:"col",children:"Perempuan"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"1"}),(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Pilanggede"}),(0,n.jsx)("td",{children:"DD Tahap 1"}),(0,n.jsx)("td",{children:"Rp357,478,384"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Revisi dari kecamatan"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"1"}),(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Pilanggede"}),(0,n.jsx)("td",{children:"DD Tahap 1"}),(0,n.jsx)("td",{children:"Rp357,478,384"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-pengajuan",children:"Pengajuan"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"1"}),(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Pilanggede"}),(0,n.jsx)("td",{children:"DD Tahap 1"}),(0,n.jsx)("td",{children:"Rp357,478,384"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-rkd",children:"Masuk RKD"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"1"}),(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Pilanggede"}),(0,n.jsx)("td",{children:"DD Tahap 1"}),(0,n.jsx)("td",{children:"Rp357,478,384"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsxs)("span",{className:"badge bg-verifikasi",children:["Diverifikasi ",(0,n.jsx)("i",{className:"bx bxs-check-circle"})]})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"1"}),(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Pilanggede"}),(0,n.jsx)("td",{children:"DD Tahap 1"}),(0,n.jsx)("td",{children:"Rp357,478,384"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsxs)("span",{className:"badge bg-verifikasi",children:["Diverifikasi ",(0,n.jsx)("i",{className:"bx bxs-check-circle"})]})})})]})]})]})]})})})]})})]})})}},29086:function(e,a,s){var l=window.location.hostname.split(".")[0];"https://".concat(l,".pendekar.digitaldesa.id/api/")}}]);
//# sourceMappingURL=924.b15b5977.chunk.js.map