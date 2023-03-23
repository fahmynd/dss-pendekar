"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[878],{13020:function(e,s,a){var d=a(72791),l=a(97304),r=a(12657),n=a(95494),i=a(62095),c=a(66817),t=a(54797),o=a(70565),h=a(94759),m=a(52633),x=a(39286),j=a(38487),b=a(71570),u=a(7759),p=a(62973),N=a(80659),g=a(80184);s.Z=function(){return(0,d.useLayoutEffect)((function(){var e=l.f.new("idmChart");e.setThemes([N.Z.new(e)]);var s=e.container.children.push(h.z.new(e,{panX:!1,panY:!1,layout:e.verticalLayout})),a=[{year:"2020",skor:.6925,info:"(Berkembang)"},{year:"2021",skor:.7281,info:"(Maju)"},{year:"2022",skor:.73,strokeSettings:{stroke:s.get("colors").getIndex(1),strokeWidth:3,strokeDasharray:[5,5]},info:"(Maju)"}],d=s.xAxes.push(m.$.new(e,{categoryField:"year",renderer:x.n.new(e,{}),tooltip:r.u.new(e,{})}));d.data.setAll(a);var g=s.yAxes.push(j.m.new(e,{min:.27,max:.92,strictMinMax:!0,renderer:b.j.new(e,{})})),v=s.series.push(u.e.new(e,{name:"Skor IDM",xAxis:d,yAxis:g,valueYField:"skor",categoryXField:"year",tooltip:r.u.new(e,{pointerOrientation:"horizontal",labelText:"{name} Tahun {categoryX}: {valueY} {info}"})}));return v.strokes.template.setAll({strokeWidth:3,templateField:"strokeSettings"}),v.data.setAll(a),v.bullets.push((function(){return n.g.new(e,{sprite:i.C.new(e,{strokeWidth:3,stroke:v.get("stroke"),radius:5,fill:e.interfaceColors.get("background")})})})),v.set("fill",c.$_("#E58B20")),v.set("stroke",c.$_("#E58B20")),v.appear(1e3),s.set("cursor",p.L.new(e,{})),s.children.push(t.D.new(e,{centerX:o.CI,x:o.CI})).data.setAll(s.series.values),s.appear(1e3,100),v.appear(),function(){e.dispose()}}),[]),(0,g.jsx)("div",{id:"idmChart"})}},62756:function(e,s,a){a.d(s,{e8:function(){return o}});a(72791);var d=a(35967),l=a(73077),r=a(25463),n=a.n(r),i=a(80184);d.kL.register(d.f$,d.od,d.u,d.De);var c={scales:{y:{beginAtZero:!0}}},t={datasets:[{label:"Red dataset",data:Array.from({length:50},(function(){return{x:n().datatype.number({min:-100,max:100}),y:n().datatype.number({min:-100,max:100}),r:n().datatype.number({min:5,max:20})}})),backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Blue dataset",data:Array.from({length:50},(function(){return{x:n().datatype.number({min:-100,max:100}),y:n().datatype.number({min:-100,max:100}),r:n().datatype.number({min:5,max:20})}})),backgroundColor:"rgba(53, 162, 235, 0.5)"}]};function o(){return(0,i.jsx)(l.xj,{options:c,data:t})}},34878:function(e,s,a){a.r(s);var d=a(72791),l=a(13020),r=a(62756),n=a(80184);s.default=function(){return(0,d.useEffect)((function(){document.title="Perkembangan Desa | PENDEKAR"}),[]),(0,n.jsxs)(d.Fragment,{children:[(0,n.jsxs)("main",{id:"main",className:"main",children:[(0,n.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,n.jsx)("h1",{children:"Perkembangan Desa"})}),(0,n.jsx)("section",{className:"section dashboard",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"card-body pb-0",children:[(0,n.jsx)("h5",{className:"card-title-potensi pb-0",children:"SKOR IDM Se Kabupaten"}),(0,n.jsx)("div",{className:"stunting-card",children:(0,n.jsx)("div",{className:"card-body pb-0",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-md-6",children:[(0,n.jsx)("h4",{className:"fw-bold mt-4 text-center",children:"Skor IDM Tahun 2022"}),(0,n.jsxs)("div",{className:"row mt-4",children:[(0,n.jsx)("div",{className:"col-md-12 mb-4",children:(0,n.jsx)("div",{className:"stunting-card card-idm__skor",children:(0,n.jsx)("div",{className:"card-body-info",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("p",{className:"card-idm__text",children:["Skor IDM ",(0,n.jsx)("br",{}),"Tahun ",(0,n.jsx)("span",{children:"2022"})]})}),(0,n.jsx)("div",{className:"col-md-6 text-center center-v",children:(0,n.jsx)("p",{className:"card-idm__jumlah",children:"0"})})]})})})}),(0,n.jsx)("div",{className:"col-md-12 mb-4",children:(0,n.jsx)("div",{className:"stunting-card card-idm__status",children:(0,n.jsx)("div",{className:"card-body-info",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("p",{className:"card-idm__text",children:["Status IDM ",(0,n.jsx)("br",{}),"Tahun ",(0,n.jsx)("span",{children:"2022"})]})}),(0,n.jsx)("div",{className:"col-md-6 text-center center-v",children:(0,n.jsx)("p",{className:"card-idm__infoStatus",children:"Mandiri"})})]})})})})]}),(0,n.jsxs)("div",{className:"row text-center mt-4",children:[(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Target Status"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]}),(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Skor Minimal"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]}),(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Penambahan"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]})]})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Skor IKS"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]}),(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Skor IKE"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]}),(0,n.jsxs)("div",{className:"col-6 col-md-4 mb-3",children:[(0,n.jsx)("p",{className:"fw-bold",children:"Skor IKL"}),(0,n.jsx)("p",{className:"fs-5",children:"0"})]})]})})]})]}),(0,n.jsxs)("div",{className:"col-md-6",children:[(0,n.jsx)("h4",{className:"fw-bold mt-4 text-center",children:"Skor IDM Tahun Ke Tahun"}),(0,n.jsx)("div",{id:"idmChart",style:{minHeight:"500px"}}),(0,n.jsx)(l.Z,{})]})]})})})})]})})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"card-body pb-0",children:[(0,n.jsx)("h5",{className:"card-title-potensi pb-0",children:"PETA PERKEMBANGAN DESA (BERDASARKAN SDGS & IDM DESA)"}),(0,n.jsx)(r.e8,{})]})})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"card-body pb-0",children:[(0,n.jsx)("h5",{className:"card-title-potensi pb-0",children:"REKOMENDASI PEMBANGUNAN"}),(0,n.jsxs)("div",{className:"row g-1 mb-4",children:[(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Pilih Tahun"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})})]}),(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,n.jsx)("th",{scope:"col",children:"Nama Kecamatan"}),(0,n.jsx)("th",{scope:"col",children:"Nama Desa"}),(0,n.jsx)("th",{scope:"col",children:"Status"}),(0,n.jsx)("th",{scope:"col",children:"Skor IDM"}),(0,n.jsx)("th",{scope:"col",children:"Skor SDGS"}),(0,n.jsx)("th",{scope:"col",children:"Rekomendasi"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Bojong Gede"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})}),(0,n.jsx)("td",{children:"0.8308"}),(0,n.jsx)("td",{children:"26.73"}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#disablebackdrop",children:"Lihat Rekomendasi"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Bojong Gede"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})}),(0,n.jsx)("td",{children:"0.8308"}),(0,n.jsx)("td",{children:"26.73"}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#disablebackdrop",children:"Lihat Rekomendasi"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Bojong Gede"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})}),(0,n.jsx)("td",{children:"0.8308"}),(0,n.jsx)("td",{children:"26.73"}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#disablebackdrop",children:"Lihat Rekomendasi"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Manggala"}),(0,n.jsx)("td",{children:"Bojong Gede"}),(0,n.jsx)("td",{children:(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})}),(0,n.jsx)("td",{children:"0.8308"}),(0,n.jsx)("td",{children:"26.73"}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#disablebackdrop",children:"Lihat Rekomendasi"})})]})]})]})]})})})]})})]}),(0,n.jsx)("div",{className:"modal fade",id:"disablebackdrop",tabIndex:"-1","data-bs-backdrop":"false",children:(0,n.jsx)("div",{className:"modal-dialog modal-lg shadow-lg rounded",children:(0,n.jsxs)("div",{id:"item-rekomendasi",className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",children:"Rekomendasi"}),(0,n.jsx)("div",{"data-bs-dismiss":"modal","aria-label":"Close",style:{cursor:"pointer"},children:(0,n.jsx)("span",{children:"Tutup"})})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-super-prioritas",children:"Super Prioritas"})}),(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{style:{background:"#EDEDED"},children:[(0,n.jsx)("th",{scope:"col",children:"Item"}),(0,n.jsx)("th",{scope:"col",children:"Kategori"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]})]})]}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})}),(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{style:{background:"#EDEDED"},children:[(0,n.jsx)("th",{scope:"col",children:"Item"}),(0,n.jsx)("th",{scope:"col",children:"Kategori"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Tersedianya Lembaga Pebankan Umum dan BPR"}),(0,n.jsx)("td",{children:"Kesehatan"})]})]})]})]})]})})})]})}}}]);
//# sourceMappingURL=878.2cd42264.chunk.js.map