"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[287],{41287:function(e,s,a){a.r(s),a.d(s,{default:function(){return U}});var i=a(72791),l=a(6349),c=a(80184),d={title:{text:"Keterangan"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,630230],color:"#327A6D"},{name:"2012",type:"bar",data:[19325,23438,31e3,121594,134141,681807],color:"#EA9501"}]};var r=function(){return(0,c.jsx)(l.Z,{option:d,style:{width:"auto",height:"500px"}})},n=a(97304),t=a(12657),o=a(70565),m=a(66817),x=a(95494),h=a(62095),j=a(54797),N=a(94759),p=a(39286),u=a(52633),v=a(38487),b=a(71570),g=a(83493),y=a(7759),f=a(62973),A=a(80659);var w=function(){return(0,i.useLayoutEffect)((function(){var e=n.f.new("balitaYoYChart");e.setThemes([A.Z.new(e)]);var s=e.container.children.push(N.z.new(e,{panX:!1,panY:!1,layout:e.verticalLayout})),a=[{year:"2013",income:19.5,expenses:22.1},{year:"2014",income:20.5,expenses:23.1},{year:"2015",income:21.5,expenses:24.1},{year:"2016",income:22.5,expenses:21.1},{year:"2017",income:26.2,expenses:30.5},{year:"2018",income:30.1,expenses:34.9},{year:"2019",income:29.5,expenses:31.1},{year:"2020",income:30.6,expenses:28.2,strokeSettings:{stroke:s.get("colors").getIndex(1),strokeWidth:3,strokeDasharray:[5,5]}}],i=p.n.new(e,{}),l=s.xAxes.push(u.$.new(e,{categoryField:"year",renderer:i,tooltip:t.u.new(e,{})}));i.grid.template.setAll({location:1}),l.data.setAll(a);var c=s.yAxes.push(v.m.new(e,{min:0,extraMax:.1,renderer:b.j.new(e,{strokeOpacity:.1})})),d=s.series.push(g.d.new(e,{name:"Income",xAxis:l,yAxis:c,valueYField:"income",categoryXField:"year",tooltip:t.u.new(e,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: {valueY} {info}"})}));d.columns.template.setAll({tooltipY:o.aQ(10),templateField:"columnSettings",width:50,cornerRadiusTL:5,cornerRadiusTR:5}),d.data.setAll(a),d.set("fill",m.$_("#2CA454")),d.set("stroke",m.$_("#2CA454"));var r=s.series.push(y.e.new(e,{name:"Expenses",xAxis:l,yAxis:c,valueYField:"expenses",categoryXField:"year",tooltip:t.u.new(e,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: {valueY} {info}"})}));return r.strokes.template.setAll({strokeWidth:3,templateField:"strokeSettings"}),r.data.setAll(a),r.set("fill",m.$_("#E58B20")),r.set("stroke",m.$_("#E58B20")),r.bullets.push((function(){return x.g.new(e,{sprite:h.C.new(e,{strokeWidth:3,stroke:r.get("stroke"),radius:5,fill:e.interfaceColors.get("background")})})})),s.set("cursor",f.L.new(e,{})),s.children.push(j.D.new(e,{centerX:o.CI,x:o.CI})).data.setAll(s.series.values),s.appear(1e3,100),d.appear(),function(){e.dispose()}}),[]),(0,c.jsx)("div",{id:"balitaYoYChart",style:{width:"100%",height:"500px"}})},T=a(35967),E=a(73077);T.kL.register(T.l7,T.od,T.jn,T.Gu,T.u,T.De);var D={labels:["Thing 1","Thing 2","Thing 3","Thing 4","Thing 5"],datasets:[{label:"# of Votes",data:[2,9,3,5,2],backgroundColor:"rgba(232, 193, 160, 0.25)",borderColor:"#E8C1A0",borderWidth:1},{label:"# of Votes 2",data:[7,2,5,6,3],backgroundColor:"rgba(103, 197, 135, 0.25)",borderColor:"#67C587",borderWidth:1}]},S={responsive:!0,plugins:{legend:{display:!1}},scales:{r:{angleLines:{display:!0}}}};function k(){return(0,c.jsx)(E.Fk,{data:D,options:S})}T.kL.register(T.qi,T.u,T.De);var F={labels:["Variable 1","Variable 2","Variable 3"],datasets:[{label:"# of Votes",data:[12,19,3],backgroundColor:["#67C587","#EAF6ED","#C9EAD4"],borderColor:["#FFFFFF","#FFFFFF","#FFFFFF"],borderWidth:1}]},C={responsive:!0,plugins:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0}}}};function I(){return(0,c.jsx)(E.by,{data:F,options:C})}var K={grid:{top:20,right:40,bottom:20,left:40},xAxis:{type:"category",data:["Kopi","Peternakan","Sawah"]},yAxis:{type:"value"},series:[{data:[{value:120,itemStyle:{color:"#729FE8"}},{value:200,itemStyle:{color:"#FF7723"}},{value:150,itemStyle:{color:"#67C587"}}],type:"bar",smooth:!0,barWidth:"30%"}],tooltip:{trigger:"axis"}};var R=function(){return(0,c.jsx)(l.Z,{option:K,style:{width:"auto",height:"300px"}})};var U=function(){return(0,c.jsx)(i.Fragment,{children:(0,c.jsxs)("main",{id:"main",className:"main",children:[(0,c.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,c.jsx)("h1",{children:"Dashboard"})}),(0,c.jsx)("section",{className:"section dashboard",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-lg-12 mb-5",children:[(0,c.jsxs)("div",{className:"row g-md-3",children:[(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-wallet"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"KEUANGAN DESA"}),(0,c.jsx)("h6",{children:"Rp312.300.003"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"ri-road-map-fill"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"DESA & KELURAHAN"}),(0,c.jsx)("h6",{children:"300"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bi bi-cart"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"DESA MANDIRI"}),(0,c.jsx)("h6",{children:"34"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-store-alt"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"UMKM DIGITAL"}),(0,c.jsx)("h6",{children:"342"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-detail"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"PROGRAM DESA"}),(0,c.jsx)("h6",{children:"3,421"})]})]})})})})]}),(0,c.jsxs)("div",{className:"row g-md-3",children:[(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-home"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"DUSUN/KAMPUNG/RT"}),(0,c.jsx)("h6",{children:"3,421"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-caret-up-circle"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"PENINGKATAN SKOR"}),(0,c.jsx)("h6",{children:"34.93%"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bi bi-cart"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"TERSALURKAN RKD"}),(0,c.jsx)("h6",{children:"342"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bi bi-cart"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"KEUANGAN DESA"}),(0,c.jsx)("h6",{children:"Rp312.300"})]})]})})})}),(0,c.jsx)("div",{className:"col-md",children:(0,c.jsx)("div",{className:"card info-card sales-card",children:(0,c.jsx)("div",{className:"card-body-info",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("div",{className:"card-icon rounded-circle d-flex align-items-center justify-content-center",children:(0,c.jsx)("i",{className:"bx bxs-file"})}),(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsx)("span",{className:"text-muted smaller pt-2",children:"PENERIMA PROGRAM"}),(0,c.jsx)("h6",{children:"435"})]})]})})})})]})]}),(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title-potensi",children:"KABAR DESA TERBARU"}),(0,c.jsxs)("div",{className:"bn-breaking-news",id:"newsTicker9",children:[(0,c.jsx)("div",{className:"bn-label",children:"Flash News"}),(0,c.jsx)("div",{className:"bn-news",children:(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:"bn-prefix",children:"Braveheart, 1995 :"}),'"They may take our lives, but they\'ll never take our freedom!"']}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:"bn-prefix",children:"Star Wars Episode VII: The Force Awakens, 2015 :"}),'"Chewie, we\'re home."']}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:"bn-prefix",children:"Pulp Fiction, 1994 :"}),'"They call it a Royale with cheese."']}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:"bn-prefix",children:"Jerry Maguire, 1996 :"}),'"You complete me."']}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:"bn-prefix",children:"Jerry Maguire I, 1996 :"}),'"You complete me."']})]})}),(0,c.jsxs)("div",{className:"bn-controls",children:[(0,c.jsx)("button",{children:(0,c.jsx)("span",{className:"bn-arrow bn-prev"})}),(0,c.jsx)("button",{children:(0,c.jsx)("span",{className:"bn-arrow bn-next"})})]})]})]})})})})}),(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title-potensi",children:"CAPAIAN & POTENSI DESA"}),(0,c.jsx)("p",{children:"Menampilkan potensi Kecamatan, Desa/Kelurahan"}),(0,c.jsxs)("div",{className:"row g-1 mb-4",children:[(0,c.jsx)("div",{className:"col-3",children:(0,c.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,c.jsx)("option",{value:"DEFAULT",children:"Capaian & Potensi"}),(0,c.jsx)("option",{value:"1",children:"One"}),(0,c.jsx)("option",{value:"2",children:"Two"}),(0,c.jsx)("option",{value:"3",children:"Three"})]})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsxs)("button",{type:"button",className:"btn btn-cari",children:[(0,c.jsx)("i",{className:"bi bi-search me-1"})," Temukan"]})})]}),(0,c.jsx)("div",{className:"card shadow position-absolute map-box2",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title-potensi",style:{color:"#327A6D"},children:"Desa Cimayasari"}),(0,c.jsx)("p",{children:"Kec. Cipeundeuy, Kab. Subang, Prov. Jawa Barat"}),(0,c.jsx)("div",{className:"filter-primary",children:(0,c.jsxs)("button",{type:"button",className:"btn btn-primary",children:[(0,c.jsx)("i",{className:"bx bx-cctv"})," CCTV"]})}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("h5",{className:"fw-bold",children:"Capaian"}),(0,c.jsxs)("div",{className:"row g-2",children:[(0,c.jsx)("div",{className:"col-6",children:"KD"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"IDM"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"SDGS"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"AR"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"Program"}),(0,c.jsx)("div",{className:"col-6",children:":-"})]})]}),(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("h5",{className:"fw-bold",children:"Potensi"}),(0,c.jsxs)("div",{className:"row g-2",children:[(0,c.jsx)("div",{className:"col-6",children:"SDA"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"IDM"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"SDM"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"LK"}),(0,c.jsx)("div",{className:"col-6",children:":-"}),(0,c.jsx)("div",{className:"col-6",children:"Sarana Prasarana"}),(0,c.jsx)("div",{className:"col-6",children:":-"})]})]})]})]})}),(0,c.jsx)("div",{className:"embed-responsive embed-responsive-16by9",style:{height:"300px !important"},children:(0,c.jsx)("iframe",{title:"CCTV",id:"gmap_canvas",src:"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"row g-0",children:[(0,c.jsx)("div",{className:"col-md-2 fw-bold",children:"Keterangan:"}),(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/up.png?1676277947",alt:"Up"})," 1.890.063 - 2.515.973"]}),(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/down.png?1676277947",alt:"Down"})," 1.890.063 - 2.515.973"]})]})}),(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/up.png?1676277947",alt:"Up"})," 1.890.063 - 2.515.973"]}),(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/down.png?1676277947",alt:"Down"})," 1.890.063 - 2.515.973"]})]})}),(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/up.png?1676277947",alt:"Up"})," 1.890.063 - 2.515.973"]}),(0,c.jsxs)("p",{className:"col-12",children:[(0,c.jsx)("img",{src:"http://localhost:80/digides-demo/templates/adminpage/img/icon-dashboard/down.png?1676277947",alt:"Down"})," 1.890.063 - 2.515.973"]})]})})]})]})})}),(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title-potensi",children:"POTENSI"}),(0,c.jsx)("p",{children:"Menampilkan potensi Kecamatan, Desa/Kelurahan"}),(0,c.jsx)("div",{className:"filter-primary",children:(0,c.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"KECAMATAN"})}),(0,c.jsxs)("div",{className:"list-group-potensi mt-3",children:[(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action active","aria-current":"true",children:"The current button"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A second item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A third button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"})]})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"Potensi Manusia"})}),(0,c.jsx)("div",{className:"card-body-chart",children:(0,c.jsx)(I,{})})]})}),(0,c.jsx)("div",{className:"col-md-5",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"Potensi SDA"})}),(0,c.jsx)("div",{className:"card-body-chart",children:(0,c.jsx)(R,{})})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"KECAMATAN"})}),(0,c.jsxs)("div",{className:"list-group-potensi mt-3",children:[(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action active","aria-current":"true",children:"The current button"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A second item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A third button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"}),(0,c.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",children:"A fourth button item"})]})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"Lembaga Kemasyarakatan"})}),(0,c.jsx)("div",{className:"card-body-chart",children:(0,c.jsx)(k,{})})]})}),(0,c.jsx)("div",{className:"col-md-5",children:(0,c.jsxs)("div",{className:"potensi-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"Sarana & Prasarana"})}),(0,c.jsx)("div",{className:"card-body-chart",children:(0,c.jsx)(R,{})})]})})]})]})})}),(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body pb-0",children:[(0,c.jsx)("h5",{className:"card-title-potensi pb-0",children:"KESEHATAN - STUNTING"}),(0,c.jsx)("p",{children:"Menampilkan potensi Kecamatan, Desa/Kelurahan"}),(0,c.jsx)("div",{className:"filter-primary",children:(0,c.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,c.jsxs)("div",{className:"row g-md-0",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"stunting-card",children:(0,c.jsx)("div",{className:"card-body-kesehatan",children:(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsxs)("span",{className:"badge-stunting text-muted smaller pt-2",children:["JUMLAH BALITA STUNTING",(0,c.jsx)("i",{className:"bi bi-info-circle ms-1","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Tooltip on top"})]}),(0,c.jsx)("h6",{children:"276.069"})]})})})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"stunting-card",children:(0,c.jsx)("div",{className:"card-body-stunting",children:(0,c.jsxs)("div",{className:"ps-2",children:[(0,c.jsxs)("span",{className:"badge-stunting text-muted smaller pt-2",children:["PERSENTASE BALITA STUNTING",(0,c.jsx)("i",{className:"bi bi-info-circle ms-1","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Tooltip on top"})]}),(0,c.jsx)("h6",{children:"9.98%"})]})})})}),(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)("div",{className:"stunting-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"BALITA STUNTING DARI TAHUN KE TAHUN"})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsx)(w,{})})]})}),(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)("div",{className:"stunting-card",children:[(0,c.jsx)("div",{className:"box-featured",children:(0,c.jsx)("h5",{className:"card-title",children:"JUMLAH BALITA STUNTING DI DESA/KELURAHAN"})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsx)(r,{})})]})})]})]})})})]})})]})})}}}]);
//# sourceMappingURL=287.0dfba8ce.chunk.js.map