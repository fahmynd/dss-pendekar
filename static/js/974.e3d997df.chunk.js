"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[974],{80113:function(e,s,a){var l=a(6349),i=a(80184),r={title:{text:"Keterangan"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,630230],color:"#327A6D"},{name:"2012",type:"bar",data:[19325,23438,31e3,121594,134141,681807],color:"#EA9501"}]};s.Z=function(){return(0,i.jsx)(l.Z,{option:r,style:{width:"auto",height:"500px"}})}},20662:function(e,s,a){var l=a(72791),i=a(97304),r=a(12657),n=a(70565),t=a(66817),c=a(95494),o=a(62095),d=a(54797),m=a(94759),h=a(39286),x=a(52633),u=a(38487),p=a(71570),j=a(83493),b=a(7759),v=a(62973),N=a(80659),y=a(80184);s.Z=function(){return(0,l.useLayoutEffect)((function(){var e=i.f.new("balitaYoYChart");e.setThemes([N.Z.new(e)]);var s=e.container.children.push(m.z.new(e,{panX:!1,panY:!1,layout:e.verticalLayout})),a=[{year:"2013",income:19.5,expenses:22.1},{year:"2014",income:20.5,expenses:23.1},{year:"2015",income:21.5,expenses:24.1},{year:"2016",income:22.5,expenses:21.1},{year:"2017",income:26.2,expenses:30.5},{year:"2018",income:30.1,expenses:34.9},{year:"2019",income:29.5,expenses:31.1},{year:"2020",income:30.6,expenses:28.2,strokeSettings:{stroke:s.get("colors").getIndex(1),strokeWidth:3,strokeDasharray:[5,5]}}],l=h.n.new(e,{}),y=s.xAxes.push(x.$.new(e,{categoryField:"year",renderer:l,tooltip:r.u.new(e,{})}));l.grid.template.setAll({location:1}),y.data.setAll(a);var g=s.yAxes.push(u.m.new(e,{min:0,extraMax:.1,renderer:p.j.new(e,{strokeOpacity:.1})})),f=s.series.push(j.d.new(e,{name:"Income",xAxis:y,yAxis:g,valueYField:"income",categoryXField:"year",tooltip:r.u.new(e,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: {valueY} {info}"})}));f.columns.template.setAll({tooltipY:n.aQ(10),templateField:"columnSettings",width:50,cornerRadiusTL:5,cornerRadiusTR:5}),f.data.setAll(a),f.set("fill",t.$_("#2CA454")),f.set("stroke",t.$_("#2CA454"));var w=s.series.push(b.e.new(e,{name:"Expenses",xAxis:y,yAxis:g,valueYField:"expenses",categoryXField:"year",tooltip:r.u.new(e,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: {valueY} {info}"})}));return w.strokes.template.setAll({strokeWidth:3,templateField:"strokeSettings"}),w.data.setAll(a),w.set("fill",t.$_("#E58B20")),w.set("stroke",t.$_("#E58B20")),w.bullets.push((function(){return c.g.new(e,{sprite:o.C.new(e,{strokeWidth:3,stroke:w.get("stroke"),radius:5,fill:e.interfaceColors.get("background")})})})),s.set("cursor",v.L.new(e,{})),s.children.push(d.D.new(e,{centerX:n.CI,x:n.CI})).data.setAll(s.series.values),s.appear(1e3,100),f.appear(),function(){e.dispose()}}),[]),(0,y.jsx)("div",{id:"balitaYoYChart",style:{width:"100%",height:"500px"}})}},67071:function(e,s,a){a.d(s,{Z:function(){return c}});a(72791);var l=a(35967),i=a(73077),r=a(80184);l.kL.register(l.l7,l.od,l.jn,l.Gu,l.u,l.De);var n={labels:["Thing 1","Thing 2","Thing 3","Thing 4","Thing 5"],datasets:[{label:"# of Votes",data:[2,9,3,5,2],backgroundColor:"rgba(232, 193, 160, 0.25)",borderColor:"#E8C1A0",borderWidth:1},{label:"# of Votes 2",data:[7,2,5,6,3],backgroundColor:"rgba(103, 197, 135, 0.25)",borderColor:"#67C587",borderWidth:1}]},t={responsive:!0,plugins:{legend:{display:!1}},scales:{r:{angleLines:{display:!0}}}};function c(){return(0,r.jsx)(i.Fk,{data:n,options:t})}},75479:function(e,s,a){a.d(s,{m:function(){return c}});a(72791);var l=a(35967),i=a(73077),r=a(80184);l.kL.register(l.qi,l.u,l.De);var n={labels:["Variable 1","Variable 2","Variable 3"],datasets:[{label:"# of Votes",data:[12,19,3],backgroundColor:["#67C587","#EAF6ED","#C9EAD4"],borderColor:["#FFFFFF","#FFFFFF","#FFFFFF"],borderWidth:1}]},t={responsive:!0,plugins:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0}}}};function c(){return(0,r.jsx)(i.by,{data:n,options:t})}},95967:function(e,s,a){var l=a(6349),i=a(80184),r={grid:{top:20,right:40,bottom:20,left:40},xAxis:{type:"category",data:["Kopi","Peternakan","Sawah"]},yAxis:{type:"value"},series:[{data:[{value:120,itemStyle:{color:"#729FE8"}},{value:200,itemStyle:{color:"#FF7723"}},{value:150,itemStyle:{color:"#67C587"}}],type:"bar",smooth:!0,barWidth:"30%"}],tooltip:{trigger:"axis"}};s.Z=function(){return(0,i.jsx)(l.Z,{option:r,style:{width:"auto",height:"300px"}})}},48974:function(e,s,a){a.r(s),a.d(s,{default:function(){return c}});var l=a(29439),i=a(31243),r=a(72791);Number.prototype.formatMoney=function(e,s,a){var l=this,i=(e=isNaN(e=Math.abs(e))?2:e,s=void 0==s?".":s,a=void 0==a?",":a,l<0?"-":""),r=String(parseInt(l=Math.abs(Number(l)||0).toFixed(e))),n=(n=r.length)>3?n%3:0;return i+(n?r.substr(0,n)+a:"")+r.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+a)+(e?s+Math.abs(l-r).toFixed(e).slice(2):"")};var n=a(29086),t=(a(80113),a(20662),a(67071),a(75479),a(95967),a(80184)),c=function(){var e=(0,r.useState)(),s=(0,l.Z)(e,2),a=(s[0],s[1]),c=(0,r.useState)([]),o=(0,l.Z)(c,2),d=(o[0],o[1]),m=(0,r.useState)(),h=(0,l.Z)(m,2),x=(h[0],h[1]),u=(0,r.useState)(),p=(0,l.Z)(u,2),j=(p[0],p[1]),b=(0,r.useState)(),v=(0,l.Z)(b,2),N=(v[0],v[1]),y=(0,r.useState)(),g=(0,l.Z)(y,2),f=(g[0],g[1]),w=(0,r.useState)([]),A=(0,l.Z)(w,2),F=(A[0],A[1]),k=(0,r.useState)([]),C=(0,l.Z)(k,2),S=(C[0],C[1]);return(0,r.useEffect)((function(){i.Z.get(n.M).then((function(e){var s=e.data.data;a(e.data.dss),d(s.summary),x(s.jml_desa),j(s.jml_dusun),N(s.jml_umkm),f(s.jml_program),F(s.list_desa),S(s.list_desa)})),document.title="Dashboard | PENDEKAR"}),[]),(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)("main",{id:"main",className:"main",children:[(0,t.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,t.jsx)("h1",{children:"Dashboard Utama"})}),(0,t.jsx)("section",{className:"section dashboard",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-title-potensi",children:"KABAR DESA TERBARU"}),(0,t.jsxs)("div",{className:"bn-breaking-news",id:"newsTicker9",children:[(0,t.jsx)("div",{className:"bn-label",children:"Flash News"}),(0,t.jsx)("div",{className:"bn-news",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"bn-prefix",children:"Braveheart, 1995 :"}),'"They may take our lives, but they\'ll never take our freedom!"']}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"bn-prefix",children:"Star Wars Episode VII: The Force Awakens, 2015 :"}),'"Chewie, we\'re home."']}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"bn-prefix",children:"Pulp Fiction, 1994 :"}),'"They call it a Royale with cheese."']}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"bn-prefix",children:"Jerry Maguire, 1996 :"}),'"You complete me."']}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"bn-prefix",children:"Jerry Maguire I, 1996 :"}),'"You complete me."']})]})}),(0,t.jsxs)("div",{className:"bn-controls",children:[(0,t.jsx)("button",{children:(0,t.jsx)("span",{className:"bn-arrow bn-prev"})}),(0,t.jsx)("button",{children:(0,t.jsx)("span",{className:"bn-arrow bn-next"})})]})]})]})})})})}),(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-title-potensi",children:"CAPAIAN & POTENSI DESA"}),(0,t.jsx)("p",{children:"Menampilkan potensi Kecamatan, Desa/Kelurahan"}),(0,t.jsxs)("div",{className:"row g-1 mb-4",children:[(0,t.jsx)("div",{className:"col-3",children:(0,t.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,t.jsx)("option",{value:"DEFAULT",children:"Capaian & Potensi"}),(0,t.jsx)("option",{value:"1",children:"One"}),(0,t.jsx)("option",{value:"2",children:"Two"}),(0,t.jsx)("option",{value:"3",children:"Three"})]})}),(0,t.jsx)("div",{className:"col-3",children:(0,t.jsxs)("button",{type:"button",className:"btn btn-cari",children:[(0,t.jsx)("i",{className:"bi bi-search me-1"})," Temukan"]})})]}),(0,t.jsx)("div",{className:"card shadow position-absolute map-box2",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-title-potensi",style:{color:"#327A6D"},children:"Desa Cimayasari"}),(0,t.jsx)("p",{children:"Kec. Cipeundeuy, Kab. Subang, Prov. Jawa Barat"}),(0,t.jsx)("div",{className:"filter-primary",children:(0,t.jsxs)("button",{type:"button",className:"btn btn-primary",children:[(0,t.jsx)("i",{className:"bx bx-cctv"})," CCTV"]})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("h5",{className:"fw-bold",children:"Capaian"}),(0,t.jsxs)("div",{className:"row g-2",children:[(0,t.jsx)("div",{className:"col-6",children:"KD"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"IDM"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"SDGS"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"AR"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"Program"}),(0,t.jsx)("div",{className:"col-6",children:":-"})]})]}),(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("h5",{className:"fw-bold",children:"Potensi"}),(0,t.jsxs)("div",{className:"row g-2",children:[(0,t.jsx)("div",{className:"col-6",children:"SDA"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"IDM"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"SDM"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"LK"}),(0,t.jsx)("div",{className:"col-6",children:":-"}),(0,t.jsx)("div",{className:"col-6",children:"Sarana Prasarana"}),(0,t.jsx)("div",{className:"col-6",children:":-"})]})]})]})]})}),(0,t.jsx)("div",{className:"embed-responsive embed-responsive-16by9",style:{height:"300px !important"},children:(0,t.jsx)("iframe",{title:"CCTV",id:"gmap_canvas",src:"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"row g-0",children:[(0,t.jsx)("div",{className:"col-md-2 fw-bold",children:"Keterangan:"}),(0,t.jsx)("div",{className:"col-md-3",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#A3FFC2"}})," 1.890.063 - 2.515.973"]}),(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#518F6B"}})," 1.890.063 - 2.515.973"]})]})}),(0,t.jsx)("div",{className:"col-md-3",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#2EA256"}})," 1.890.063 - 2.515.973"]}),(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#223D2D"}})," 1.890.063 - 2.515.973"]})]})}),(0,t.jsx)("div",{className:"col-md-3",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#73C897"}})," 1.890.063 - 2.515.973"]}),(0,t.jsxs)("p",{className:"col-12",children:[(0,t.jsx)("i",{className:"bi bi-square-fill",style:{color:"#E84C30"}})," 1.890.063 - 2.515.973"]})]})})]})]})})})]})})]})})}},29086:function(e,s,a){a.d(s,{M:function(){return i}});var l=window.location.hostname.split(".")[0],i="https://".concat(l,".pendekar.digitaldesa.id/api/")}}]);
//# sourceMappingURL=974.e3d997df.chunk.js.map