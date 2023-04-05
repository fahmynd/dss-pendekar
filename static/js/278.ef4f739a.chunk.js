"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[278],{31278:function(e,s,l){l.r(s),l.d(s,{default:function(){return f}});var a=l(72791),i=l(15671),n=l(43144),d=l(60136),c=l(27277),r=l(97304),t=l(70565),h=l(12657),x=l(66817),j=l(95494),o=l(56343),p=l(54797),m=l(94759),u=l(39286),N=l(52633),b=l(38487),g=l(71570),v=l(83493),R=l(62973),A=l(80659),y=l(80184),D=function(e){(0,d.Z)(l,e);var s=(0,c.Z)(l);function l(){return(0,i.Z)(this,l),s.apply(this,arguments)}return(0,n.Z)(l,[{key:"componentDidMount",value:function(){var e=r.f.new("chartAnggaranDesa");e.setThemes([A.Z.new(e)]);var s=e.container.children.push(m.z.new(e,{panY:!1,layout:e.verticalLayout})),l=[{category:"KEC. A",value1:498,value2:480},{category:"KEC. B",value1:326,value2:304},{category:"KEC. C",value1:57,value2:71},{category:"KEC. D",value1:294,value2:254}],a=u.n.new(e,{minGridDistance:30});a.labels.template.setAll({rotation:0,centerY:t.CI,centerX:t.CI,paddingTop:10});var i=s.xAxes.push(N.$.new(e,{maxDeviation:.3,categoryField:"category",renderer:a})),n=s.yAxes.push(b.m.new(e,{min:0,extraMax:.1,maxDeviation:.3,renderer:g.j.new(e,{})}));i.get("renderer").labels.template.setAll({oversizedBehavior:"wrap",maxWidth:100,fontSize:13,textAlign:"center"}),i.data.setAll(l);var d=s.series.push(v.d.new(e,{name:"Data Tahun 2021",xAxis:i,yAxis:n,valueYField:"value1",sequencedInterpolation:!0,categoryXField:"category",tooltip:h.u.new(e,{labelText:"{valueY} {categoryX}"})}));d.data.setAll(l);var c=s.series.push(v.d.new(e,{name:"Data Tahun 2022",xAxis:i,yAxis:n,valueYField:"value2",sequencedInterpolation:!0,categoryXField:"category",tooltip:h.u.new(e,{labelText:"{valueY} {categoryX}"})}));c.data.setAll(l),d.set("fill",x.$_("#499841")),d.set("stroke",x.$_("#499841")),c.set("fill",x.$_("#9AD295")),c.set("stroke",x.$_("#9AD295")),s.appear(1e3,100),d.appear(1e3),c.appear(1e3),d.columns.template.setAll({cornerRadiusTL:5,cornerRadiusTR:5}),c.columns.template.setAll({cornerRadiusTL:5,cornerRadiusTR:5}),d.bullets.push((function(){return j.g.new(e,{locationX:.5,locationY:1,fontSize:12,sprite:o._.new(e,{text:"{valueY}",centerX:t.aQ(50),centerY:t.aQ(100),textAlign:"center",populateText:!0})})})),c.bullets.push((function(){return j.g.new(e,{locationX:.5,locationY:1,fontSize:12,sprite:o._.new(e,{text:"{valueY}",centerX:t.aQ(50),centerY:t.aQ(100),textAlign:"center",populateText:!0})})})),s.children.push(p.D.new(e,{centerX:t.CI,x:t.CI})).data.setAll(s.series.values);var y=s.set("cursor",R.L.new(e,{}));y.lineY.set("visible",!1),y.lineX.set("visible",!1),this.root=e}},{key:"componentWillUnmount",value:function(){this.root&&this.root.dispose()}},{key:"render",value:function(){return(0,y.jsx)("div",{id:"chartAnggaranDesa",style:{width:"100%",height:"400px"}})}}]),l}(a.Component),w=D,f=function(){return(0,a.useEffect)((function(){document.title="Pembangunan | PENDEKAR"}),[]),(0,y.jsx)(a.Fragment,{children:(0,y.jsxs)("main",{id:"main",className:"main",children:[(0,y.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,y.jsx)("h1",{children:"Keuangan"})}),(0,y.jsx)("section",{className:"section dashboard",children:(0,y.jsx)("div",{className:"row",children:(0,y.jsxs)("div",{className:"col-lg-12",children:[(0,y.jsxs)("ul",{className:"nav nav-tabs nav-tabs-bordered",id:"borderedTab",role:"tablist",children:[(0,y.jsx)("li",{className:"nav-item",role:"presentation",children:(0,y.jsx)("button",{className:"nav-link active",id:"about-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-about",type:"button",role:"tab","aria-controls":"about","aria-selected":"true",children:"APBDes"})}),(0,y.jsx)("li",{className:"nav-item",role:"presentation",children:(0,y.jsx)("button",{className:"nav-link",id:"boat-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-boat",type:"button",role:"tab","aria-controls":"boat","aria-selected":"false",children:"PROPOSAL"})})]}),(0,y.jsxs)("div",{className:"tab-content pt-2",id:"borderedTabContent",children:[(0,y.jsxs)("div",{className:"tab-pane fade show active",id:"bordered-about",role:"tabpanel","aria-labelledby":"about-tab",children:[(0,y.jsxs)("div",{className:"row g-1 my-3",children:[(0,y.jsx)("div",{className:"col-3",children:(0,y.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,y.jsx)("option",{value:"DEFAULT",children:"Pilih Tahun"}),(0,y.jsx)("option",{value:"1",children:"One"}),(0,y.jsx)("option",{value:"2",children:"Two"}),(0,y.jsx)("option",{value:"3",children:"Three"})]})}),(0,y.jsx)("div",{className:"col-3",children:(0,y.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,y.jsx)("option",{value:"DEFAULT",children:"Pilih Kecamatan"}),(0,y.jsx)("option",{value:"1",children:"One"}),(0,y.jsx)("option",{value:"2",children:"Two"}),(0,y.jsx)("option",{value:"3",children:"Three"})]})})]}),(0,y.jsxs)("div",{className:"row g-md-0 mb-5",children:[(0,y.jsx)("div",{className:"col-md-3",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,y.jsx)("h6",{children:"JUMLAH DESA"}),(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,y.jsx)("i",{className:"bx bxs-building-house"})}),(0,y.jsx)("div",{children:(0,y.jsx)("h5",{className:"fw-bold",children:"54"})})]})]})})}),(0,y.jsx)("div",{className:"col-md-3",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,y.jsx)("h6",{children:"TOTAL DANA DESA"}),(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,y.jsx)("i",{className:"bx bx-money"})}),(0,y.jsx)("div",{children:(0,y.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,y.jsx)("div",{className:"col-md-3",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,y.jsx)("h6",{children:"TOTAL PENDAPATAN"}),(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,y.jsx)("i",{className:"bx bxs-archive-in"})}),(0,y.jsx)("div",{children:(0,y.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,y.jsx)("div",{className:"col-md-3",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,y.jsx)("h6",{children:"TOTAL BELANJA"}),(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,y.jsx)("i",{className:"bx bx-cart"})}),(0,y.jsx)("div",{children:(0,y.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,y.jsx)("h6",{children:"ANGGARAN"}),(0,y.jsx)("h5",{className:"fw-bold",children:"Rp150,232,431,100"})]})})}),(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,y.jsx)("h6",{children:"REALISASI"}),(0,y.jsx)("h5",{className:"fw-bold",children:"Rp10,232,431,100"})]})})}),(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"keuangan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan",children:[(0,y.jsx)("h6",{children:"% PENYERAPAN"}),(0,y.jsx)("div",{className:"progress",children:(0,y.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"75%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",children:"75%"})})]})})})]}),(0,y.jsx)("div",{className:"mb-5",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body pb-0",children:[(0,y.jsx)("h5",{className:"card-title-potensi pb-0",children:"GRAFIK VS REALISASI"}),(0,y.jsx)("p",{children:"Menampilkan potensi Kecamatan, Desa/Kelurahan"}),(0,y.jsx)("div",{className:"filter-primary",children:(0,y.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,y.jsxs)("div",{className:"row g-2",children:[(0,y.jsx)("div",{className:"col-md-6",children:(0,y.jsxs)("div",{className:"stunting-card",children:[(0,y.jsx)("div",{className:"box-featured",children:(0,y.jsx)("h5",{className:"card-title",children:"APBDes"})}),(0,y.jsx)("div",{className:"card-body",children:(0,y.jsx)(w,{})})]})}),(0,y.jsx)("div",{className:"col-md-6",children:(0,y.jsx)("div",{className:"table-responsive",children:(0,y.jsxs)("table",{className:"table table-bordered",children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,y.jsx)("th",{scope:"col",children:"No"}),(0,y.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,y.jsx)("th",{scope:"col",children:"Anggaran"}),(0,y.jsx)("th",{scope:"col",children:"Realisasi"}),(0,y.jsx)("th",{scope:"col",children:"Sisa"})]})}),(0,y.jsxs)("tbody",{className:"small",children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Kecamatan A"}),(0,y.jsx)("td",{children:"Rp3,320,010,400"}),(0,y.jsx)("td",{children:"Rp3,120,010,400"}),(0,y.jsx)("td",{children:"Rp120,010,400"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"2"}),(0,y.jsx)("td",{children:"Kecamatan A"}),(0,y.jsx)("td",{children:"Rp3,320,010,400"}),(0,y.jsx)("td",{children:"Rp3,120,010,400"}),(0,y.jsx)("td",{children:"Rp120,010,400"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"3"}),(0,y.jsx)("td",{children:"Kecamatan A"}),(0,y.jsx)("td",{children:"Rp3,320,010,400"}),(0,y.jsx)("td",{children:"Rp3,120,010,400"}),(0,y.jsx)("td",{children:"Rp120,010,400"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"4"}),(0,y.jsx)("td",{children:"Kecamatan A"}),(0,y.jsx)("td",{children:"Rp3,320,010,400"}),(0,y.jsx)("td",{children:"Rp3,120,010,400"}),(0,y.jsx)("td",{children:"Rp120,010,400"})]})]})]})})})]})]})})}),(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body pb-0",children:[(0,y.jsx)("h5",{className:"card-title-potensi pb-0",children:"RINCIAN KEUANGAN DESA"}),(0,y.jsx)("div",{className:"table-responsive",children:(0,y.jsxs)("table",{className:"table table-bordered",children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,y.jsx)("th",{scope:"col",children:"Keterangan"}),(0,y.jsx)("th",{scope:"col",children:"Anggaran"}),(0,y.jsx)("th",{scope:"col",children:"Realisasi"}),(0,y.jsx)("th",{scope:"col",children:"Lebih/Kurang"})]})}),(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{style:{color:"#327A6D",weight:"600"},children:"PENDAPATAN ASLI DESA"}),(0,y.jsx)("td",{children:"Rp0"}),(0,y.jsx)("td",{children:"Rp0"}),(0,y.jsx)("td",{children:"Rp0"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"PENDAPATAN TRANSFER"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:"Dana Desa"}),(0,y.jsx)("li",{children:"Bagi Hasil Pajak dan Retribusi"}),(0,y.jsx)("li",{children:"Alokasi Dana Desa"}),(0,y.jsx)("li",{children:"Bantuan Keuangan Provinsi"}),(0,y.jsx)("li",{children:"Bantuan Keuangan Kabupaten/Kota"}),(0,y.jsx)("li",{children:"Pendapatan Lain"})]}),(0,y.jsx)("p",{children:"JUMLAH PENDAPATAN"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]})]}),(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"BELANJA"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:"Bidang Penyelenggaraan Pemerintahan Desa"}),(0,y.jsx)("li",{children:"Bidang Pelaksanaan Pembangunan Desa"}),(0,y.jsx)("li",{children:"Bidang Pembinaan Kemasyarakatan"}),(0,y.jsx)("li",{children:"Bidang Pemberdayaan Masyarakat"}),(0,y.jsx)("li",{children:"Bidang Penanggulangan Bencana, Darurat dan Mendesa Desa"})]}),(0,y.jsx)("p",{children:"JUMLAH BELANJA"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]}),(0,y.jsx)("p",{children:"Rp0"})]})]}),(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"PEMBIAYAAN"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:"Penerimaan Pembiayaan"}),(0,y.jsx)("li",{children:"Pengeluaran Pembiayaan"})]})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]})]}),(0,y.jsxs)("td",{className:"anggaranList",children:[(0,y.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,y.jsxs)("ul",{className:"list-unstyled",children:[(0,y.jsx)("li",{children:"Rp0"}),(0,y.jsx)("li",{children:"Rp0"})]})]})]})]}),(0,y.jsx)("tfoot",{children:(0,y.jsx)("tr",{children:(0,y.jsx)("th",{colSpan:4,children:"Sumber : SISKEUDES 2023"})})})]})})]})})]}),(0,y.jsxs)("div",{className:"tab-pane fade",id:"bordered-boat",role:"tabpanel","aria-labelledby":"boat-tab",children:[(0,y.jsx)("div",{className:"col-lg-12 mt-3 mb-5",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("h5",{className:"card-title-potensi",children:"PROGRES PROPOSAL APBDes"}),(0,y.jsxs)("div",{className:"row g-md-2",children:[(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"proposal_pengajuan-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,y.jsx)("h6",{children:"PENGAJUAN"}),(0,y.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})}),(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"proposal_revisi-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,y.jsx)("h6",{children:"REVISI"}),(0,y.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})}),(0,y.jsx)("div",{className:"col-md-4",children:(0,y.jsx)("div",{className:"proposal_rkd-card",children:(0,y.jsxs)("div",{className:"card-body-keuangan",children:[(0,y.jsx)("h6",{children:"MASUK RKD"}),(0,y.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})})]})]})})}),(0,y.jsx)("div",{className:"col-lg-12",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("h5",{className:"card-title-potensi",children:"PROPOSAL DANA TRANSFER"}),(0,y.jsx)("div",{className:"row g-1 mb-4",children:(0,y.jsx)("div",{className:"col-3",children:(0,y.jsx)("div",{className:"search-produk",children:(0,y.jsxs)("form",{className:"search-form-produk d-flex align-items-center",method:"POST",action:"#",children:[(0,y.jsx)("input",{type:"text",name:"query",placeholder:"Nama Desa...",title:"Enter search keyword"}),(0,y.jsx)("button",{type:"submit",title:"Search",children:(0,y.jsx)("i",{className:"bi bi-search"})})]})})})}),(0,y.jsx)("div",{className:"table-responsive",children:(0,y.jsxs)("table",{className:"table table-bordered",children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,y.jsx)("th",{scope:"col",children:"No"}),(0,y.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,y.jsx)("th",{scope:"col",children:"Desa"}),(0,y.jsx)("th",{scope:"col",children:"Jenis Proposal"}),(0,y.jsx)("th",{scope:"col",children:"Nominal"}),(0,y.jsx)("th",{scope:"col",children:"Status Proposal"})]})}),(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Manggala"}),(0,y.jsx)("td",{children:"Pilanggede"}),(0,y.jsx)("td",{children:"DD Tahap 1"}),(0,y.jsx)("td",{children:"Rp357,478,384"}),(0,y.jsx)("td",{children:(0,y.jsx)("h5",{children:(0,y.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Manggala"}),(0,y.jsx)("td",{children:"Pilanggede"}),(0,y.jsx)("td",{children:"DD Tahap 1"}),(0,y.jsx)("td",{children:"Rp357,478,384"}),(0,y.jsx)("td",{children:(0,y.jsx)("h5",{children:(0,y.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Manggala"}),(0,y.jsx)("td",{children:"Pilanggede"}),(0,y.jsx)("td",{children:"DD Tahap 1"}),(0,y.jsx)("td",{children:"Rp357,478,384"}),(0,y.jsx)("td",{children:(0,y.jsx)("h5",{children:(0,y.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Manggala"}),(0,y.jsx)("td",{children:"Pilanggede"}),(0,y.jsx)("td",{children:"DD Tahap 1"}),(0,y.jsx)("td",{children:"Rp357,478,384"}),(0,y.jsx)("td",{children:(0,y.jsx)("h5",{children:(0,y.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:"1"}),(0,y.jsx)("td",{children:"Manggala"}),(0,y.jsx)("td",{children:"Pilanggede"}),(0,y.jsx)("td",{children:"DD Tahap 1"}),(0,y.jsx)("td",{children:"Rp357,478,384"}),(0,y.jsx)("td",{children:(0,y.jsx)("h5",{children:(0,y.jsx)("span",{className:"badge bg-prioritas",children:"Prioritas"})})})]})]})]})})]})})})]})]})]})})})]})})}}}]);
//# sourceMappingURL=278.ef4f739a.chunk.js.map