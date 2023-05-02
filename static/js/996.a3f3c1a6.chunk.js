"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[996],{3598:function(e,s,l){l.r(s),l.d(s,{default:function(){return D}});var a=l(2791),n=l(5671),c=l(3144),i=l(136),r=l(7277),d=l(7304),t=l(565),h=l(2657),x=l(6817),o=l(5494),j=l(6343),p=l(4797),m=l(846),u=l(9286),b=l(2633),N=l(8487),v=l(1570),g=l(7873),y=l(2973),R=l(659),A=l(184),f=function(e){(0,i.Z)(l,e);var s=(0,r.Z)(l);function l(){return(0,n.Z)(this,l),s.apply(this,arguments)}return(0,c.Z)(l,[{key:"componentDidMount",value:function(){var e=d.f.new("chartAnggaranDesa");e.setThemes([R.Z.new(e)]);var s=e.container.children.push(m.z.new(e,{panY:!1,layout:e.verticalLayout})),l=[{category:"KEC. A",value1:498,value2:480},{category:"KEC. B",value1:326,value2:304},{category:"KEC. C",value1:57,value2:71},{category:"KEC. D",value1:294,value2:254}],a=u.n.new(e,{minGridDistance:30});a.labels.template.setAll({rotation:0,centerY:t.CI,centerX:t.CI,paddingTop:10});var n=s.xAxes.push(b.$.new(e,{maxDeviation:.3,categoryField:"category",renderer:a})),c=s.yAxes.push(N.m.new(e,{min:0,extraMax:.1,maxDeviation:.3,renderer:v.j.new(e,{})}));n.get("renderer").labels.template.setAll({oversizedBehavior:"wrap",maxWidth:100,fontSize:13,textAlign:"center"}),n.data.setAll(l);var i=s.series.push(g.d.new(e,{name:"Data Tahun 2021",xAxis:n,yAxis:c,valueYField:"value1",sequencedInterpolation:!0,categoryXField:"category",tooltip:h.u.new(e,{labelText:"{valueY} {categoryX}"})}));i.data.setAll(l);var r=s.series.push(g.d.new(e,{name:"Data Tahun 2022",xAxis:n,yAxis:c,valueYField:"value2",sequencedInterpolation:!0,categoryXField:"category",tooltip:h.u.new(e,{labelText:"{valueY} {categoryX}"})}));r.data.setAll(l),i.set("fill",x.$_("#499841")),i.set("stroke",x.$_("#499841")),r.set("fill",x.$_("#9AD295")),r.set("stroke",x.$_("#9AD295")),s.appear(1e3,100),i.appear(1e3),r.appear(1e3),i.columns.template.setAll({cornerRadiusTL:5,cornerRadiusTR:5}),r.columns.template.setAll({cornerRadiusTL:5,cornerRadiusTR:5}),i.bullets.push((function(){return o.g.new(e,{locationX:.5,locationY:1,fontSize:12,sprite:j._.new(e,{text:"{valueY}",centerX:t.aQ(50),centerY:t.aQ(100),textAlign:"center",populateText:!0})})})),r.bullets.push((function(){return o.g.new(e,{locationX:.5,locationY:1,fontSize:12,sprite:j._.new(e,{text:"{valueY}",centerX:t.aQ(50),centerY:t.aQ(100),textAlign:"center",populateText:!0})})})),s.children.push(p.D.new(e,{centerX:t.CI,x:t.CI})).data.setAll(s.series.values);var A=s.set("cursor",y.L.new(e,{}));A.lineY.set("visible",!1),A.lineX.set("visible",!1),this.root=e}},{key:"componentWillUnmount",value:function(){this.root&&this.root.dispose()}},{key:"render",value:function(){return(0,A.jsx)("div",{id:"chartAnggaranDesa",style:{width:"100%",height:"400px"}})}}]),l}(a.Component),w=f,D=function(){return(0,a.useEffect)((function(){document.title="Pembangunan | PENDEKAR"}),[]),(0,A.jsx)(a.Fragment,{children:(0,A.jsxs)("main",{id:"main",className:"main",children:[(0,A.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,A.jsx)("h1",{children:"Pembangunan"})}),(0,A.jsx)("section",{className:"section dashboard",children:(0,A.jsx)("div",{className:"row",children:(0,A.jsxs)("div",{className:"col-lg-12",children:[(0,A.jsxs)("ul",{className:"nav nav-tabs nav-tabs-bordered",id:"borderedTab",role:"tablist",children:[(0,A.jsx)("li",{className:"nav-item",role:"presentation",children:(0,A.jsx)("button",{className:"nav-link active",id:"apbd-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-apbd",type:"button",role:"tab","aria-controls":"apbd","aria-selected":"true",children:"APBDes"})}),(0,A.jsx)("li",{className:"nav-item",role:"presentation",children:(0,A.jsx)("button",{className:"nav-link",id:"proposal-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-proposal",type:"button",role:"tab","aria-controls":"proposal","aria-selected":"false",children:"PROPOSAL"})}),(0,A.jsx)("li",{className:"nav-item",role:"presentation",children:(0,A.jsx)("button",{className:"nav-link",id:"rkp-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-rkp",type:"button",role:"tab","aria-controls":"rkp","aria-selected":"false",children:"RKP"})})]}),(0,A.jsxs)("div",{className:"tab-content pt-2",id:"borderedTabContent",children:[(0,A.jsxs)("div",{className:"tab-pane fade show active",id:"bordered-apbd",role:"tabpanel","aria-labelledby":"apbd-tab",children:[(0,A.jsxs)("div",{className:"row g-1 my-3",children:[(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,A.jsx)("option",{value:"DEFAULT",children:"Pilih Tahun"})})}),(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,A.jsx)("option",{value:"DEFAULT",children:"Pilih Kecamatan"})})})]}),(0,A.jsxs)("div",{className:"row g-md-0 mb-5",children:[(0,A.jsx)("div",{className:"col-md-3",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,A.jsx)("h6",{children:"JUMLAH DESA"}),(0,A.jsxs)("div",{className:"d-flex",children:[(0,A.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,A.jsx)("i",{className:"bx bxs-building-house"})}),(0,A.jsx)("div",{children:(0,A.jsx)("h5",{className:"fw-bold",children:"54"})})]})]})})}),(0,A.jsx)("div",{className:"col-md-3",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,A.jsx)("h6",{children:"TOTAL DANA DESA"}),(0,A.jsxs)("div",{className:"d-flex",children:[(0,A.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,A.jsx)("i",{className:"bx bx-money"})}),(0,A.jsx)("div",{children:(0,A.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,A.jsx)("div",{className:"col-md-3",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,A.jsx)("h6",{children:"TOTAL PENDAPATAN"}),(0,A.jsxs)("div",{className:"d-flex",children:[(0,A.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,A.jsx)("i",{className:"bx bxs-archive-in"})}),(0,A.jsx)("div",{children:(0,A.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,A.jsx)("div",{className:"col-md-3",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-0",children:[(0,A.jsx)("h6",{children:"TOTAL BELANJA"}),(0,A.jsxs)("div",{className:"d-flex",children:[(0,A.jsx)("div",{className:"card-icon1 rounded-circle d-flex justify-content-center",children:(0,A.jsx)("i",{className:"bx bx-cart"})}),(0,A.jsx)("div",{children:(0,A.jsx)("h5",{className:"fw-bold",children:"Rp312.300.003"})})]})]})})}),(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,A.jsx)("h6",{children:"ANGGARAN"}),(0,A.jsx)("h5",{className:"fw-bold",children:"Rp150,232,431,100"})]})})}),(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,A.jsx)("h6",{children:"REALISASI"}),(0,A.jsx)("h5",{className:"fw-bold",children:"Rp10,232,431,100"})]})})}),(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"keuangan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan",children:[(0,A.jsx)("h6",{children:"% PENYERAPAN"}),(0,A.jsx)("div",{className:"progress",children:(0,A.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"75%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",children:"75%"})})]})})})]}),(0,A.jsx)("div",{className:"mb-5",children:(0,A.jsx)("div",{className:"card",children:(0,A.jsxs)("div",{className:"card-body pb-0",children:[(0,A.jsx)("h5",{className:"card-title-potensi",children:"GRAFIK VS REALISASI"}),(0,A.jsx)("div",{className:"filter-primary",children:(0,A.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,A.jsxs)("div",{className:"row g-2",children:[(0,A.jsx)("div",{className:"col-md-6",children:(0,A.jsxs)("div",{className:"stunting-card",children:[(0,A.jsx)("div",{className:"box-featured",children:(0,A.jsx)("h5",{className:"card-title",children:"APBDes"})}),(0,A.jsx)("div",{className:"card-body",children:(0,A.jsx)(w,{})})]})}),(0,A.jsx)("div",{className:"col-md-6",children:(0,A.jsx)("div",{className:"table-responsive",children:(0,A.jsxs)("table",{className:"table table-bordered",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,A.jsx)("th",{scope:"col",children:"No"}),(0,A.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,A.jsx)("th",{scope:"col",children:"Anggaran"}),(0,A.jsx)("th",{scope:"col",children:"Realisasi"}),(0,A.jsx)("th",{scope:"col",children:"Sisa"})]})}),(0,A.jsxs)("tbody",{className:"small",children:[(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Kecamatan A"}),(0,A.jsx)("td",{children:"Rp3,320,010,400"}),(0,A.jsx)("td",{children:"Rp3,120,010,400"}),(0,A.jsx)("td",{children:"Rp120,010,400"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"2"}),(0,A.jsx)("td",{children:"Kecamatan A"}),(0,A.jsx)("td",{children:"Rp3,320,010,400"}),(0,A.jsx)("td",{children:"Rp3,120,010,400"}),(0,A.jsx)("td",{children:"Rp120,010,400"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"3"}),(0,A.jsx)("td",{children:"Kecamatan A"}),(0,A.jsx)("td",{children:"Rp3,320,010,400"}),(0,A.jsx)("td",{children:"Rp3,120,010,400"}),(0,A.jsx)("td",{children:"Rp120,010,400"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"4"}),(0,A.jsx)("td",{children:"Kecamatan A"}),(0,A.jsx)("td",{children:"Rp3,320,010,400"}),(0,A.jsx)("td",{children:"Rp3,120,010,400"}),(0,A.jsx)("td",{children:"Rp120,010,400"})]})]})]})})})]})]})})}),(0,A.jsx)("div",{className:"card",children:(0,A.jsxs)("div",{className:"card-body pb-0",children:[(0,A.jsx)("h5",{className:"card-title-potensi pb-0",children:"RINCIAN KEUANGAN DESA"}),(0,A.jsx)("div",{className:"table-responsive",children:(0,A.jsxs)("table",{className:"table table-bordered",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,A.jsx)("th",{scope:"col",children:"Keterangan"}),(0,A.jsx)("th",{scope:"col",children:"Anggaran"}),(0,A.jsx)("th",{scope:"col",children:"Realisasi"}),(0,A.jsx)("th",{scope:"col",children:"Lebih/Kurang"})]})}),(0,A.jsxs)("tbody",{children:[(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{style:{color:"#327A6D",weight:"600"},children:"PENDAPATAN ASLI DESA"}),(0,A.jsx)("td",{children:"Rp0"}),(0,A.jsx)("td",{children:"Rp0"}),(0,A.jsx)("td",{children:"Rp0"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{children:[(0,A.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"PENDAPATAN TRANSFER"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)("li",{children:"Dana Desa"}),(0,A.jsx)("li",{children:"Bagi Hasil Pajak dan Retribusi"}),(0,A.jsx)("li",{children:"Alokasi Dana Desa"}),(0,A.jsx)("li",{children:"Bantuan Keuangan Provinsi"}),(0,A.jsx)("li",{children:"Bantuan Keuangan Kabupaten/Kota"}),(0,A.jsx)("li",{children:"Pendapatan Lain"})]}),(0,A.jsx)("p",{children:"JUMLAH PENDAPATAN"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{children:[(0,A.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"BELANJA"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)("li",{children:"Bidang Penyelenggaraan Pemerintahan Desa"}),(0,A.jsx)("li",{children:"Bidang Pelaksanaan Pembangunan Desa"}),(0,A.jsx)("li",{children:"Bidang Pembinaan Kemasyarakatan"}),(0,A.jsx)("li",{children:"Bidang Pemberdayaan Masyarakat"}),(0,A.jsx)("li",{children:"Bidang Penanggulangan Bencana, Darurat dan Mendesak Desa"})]}),(0,A.jsx)("p",{children:"JUMLAH BELANJA"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]}),(0,A.jsx)("p",{children:"Rp0"})]})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{children:[(0,A.jsx)("p",{style:{color:"#327A6D",weight:"600"},children:"PEMBIAYAAN"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)("li",{children:"Penerimaan Pembiayaan"}),(0,A.jsx)("li",{children:"Pengeluaran Pembiayaan"})]})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]})]}),(0,A.jsxs)("td",{className:"anggaranList",children:[(0,A.jsx)("p",{style:{weight:"600"},children:"Rp0"}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsx)("li",{children:"Rp0"}),(0,A.jsx)("li",{children:"Rp0"})]})]})]})]}),(0,A.jsx)("tfoot",{children:(0,A.jsx)("tr",{children:(0,A.jsx)("th",{colSpan:4,children:"Sumber : SISKEUDES 2023"})})})]})})]})})]}),(0,A.jsxs)("div",{className:"tab-pane fade",id:"bordered-proposal",role:"tabpanel","aria-labelledby":"proposal-tab",children:[(0,A.jsx)("div",{className:"col-lg-12 mt-3 mb-5",children:(0,A.jsx)("div",{className:"card",children:(0,A.jsxs)("div",{className:"card-body",children:[(0,A.jsx)("h5",{className:"card-title-potensi",children:"PROGRES PROPOSAL APBDes"}),(0,A.jsxs)("div",{className:"row g-md-2",children:[(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"proposal_pengajuan-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,A.jsx)("h6",{children:"PENGAJUAN"}),(0,A.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})}),(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"proposal_revisi-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan pb-1",children:[(0,A.jsx)("h6",{children:"REVISI"}),(0,A.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})}),(0,A.jsx)("div",{className:"col-md-4",children:(0,A.jsx)("div",{className:"proposal_rkd-card",children:(0,A.jsxs)("div",{className:"card-body-keuangan",children:[(0,A.jsx)("h6",{children:"MASUK RKD"}),(0,A.jsx)("h5",{className:"fw-bold",children:"13 Desa/Kelurahan"})]})})})]})]})})}),(0,A.jsx)("div",{className:"col-lg-12",children:(0,A.jsx)("div",{className:"card",children:(0,A.jsxs)("div",{className:"card-body",children:[(0,A.jsx)("h5",{className:"card-title-potensi",children:"PROPOSAL DANA TRANSFER"}),(0,A.jsx)("div",{className:"row g-1 mb-4",children:(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("div",{className:"search-produk",children:(0,A.jsxs)("form",{className:"search-form-produk d-flex align-items-center",method:"POST",action:"#",children:[(0,A.jsx)("input",{type:"text",name:"query",placeholder:"Nama Desa...",title:"Enter search keyword"}),(0,A.jsx)("button",{type:"submit",title:"Search",children:(0,A.jsx)("i",{className:"bi bi-search"})})]})})})}),(0,A.jsx)("div",{className:"table-responsive",children:(0,A.jsxs)("table",{className:"table table-bordered",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,A.jsx)("th",{scope:"col",children:"No"}),(0,A.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,A.jsx)("th",{scope:"col",children:"Desa"}),(0,A.jsx)("th",{scope:"col",children:"Jenis Proposal"}),(0,A.jsx)("th",{scope:"col",children:"Nominal"}),(0,A.jsx)("th",{scope:"col",children:"Status Proposal"})]})}),(0,A.jsxs)("tbody",{children:[(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]}),(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{scope:"row",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]})]})]})})]})})})]}),(0,A.jsx)("div",{className:"tab-pane fade",id:"bordered-rkp",role:"tabpanel","aria-labelledby":"rkp-tab",children:(0,A.jsx)("div",{className:"col-lg-12 mt-3 mb-5",children:(0,A.jsx)("div",{className:"card",children:(0,A.jsxs)("div",{className:"card-body",children:[(0,A.jsx)("h5",{className:"card-title-potensi",children:"Rencana Kerja Pembangunan"}),(0,A.jsx)("div",{className:"filter-primary",children:(0,A.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,A.jsxs)("div",{className:"row g-1 mb-4",children:[(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("div",{className:"search-produk",children:(0,A.jsxs)("form",{className:"search-form-produk d-flex align-items-center",method:"POST",action:"#",children:[(0,A.jsx)("input",{type:"text",name:"query",placeholder:"Cari...",title:"Enter search keyword"}),(0,A.jsx)("button",{type:"submit",title:"Search",children:(0,A.jsx)("i",{className:"bi bi-search"})})]})})}),(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,A.jsx)("option",{value:"DEFAULT",children:"Pilih Kecamatan"})})}),(0,A.jsx)("div",{className:"col-3",children:(0,A.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,A.jsx)("option",{value:"DEFAULT",children:"Pilih Desa"})})})]}),(0,A.jsx)("div",{className:"table-responsive",children:(0,A.jsxs)("table",{className:"table table-bordered",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{style:{background:"#EDF8F6"},children:[(0,A.jsx)("th",{scope:"col",children:"No"}),(0,A.jsx)("th",{scope:"col",children:"Kecamatan"}),(0,A.jsx)("th",{scope:"col",children:"Desa"}),(0,A.jsx)("th",{scope:"col",children:"Nama Proyek/Kegiatan"}),(0,A.jsx)("th",{scope:"col",children:"Lokasi"}),(0,A.jsx)("th",{scope:"col",children:"Biaya"}),(0,A.jsx)("th",{scope:"col",children:"Manfaat"}),(0,A.jsx)("th",{scope:"col",children:"Tahun"}),(0,A.jsx)("th",{scope:"col",children:"Keterangan"})]})}),(0,A.jsx)("tbody",{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{className:"text-center",children:"1"}),(0,A.jsx)("td",{children:"Manggala"}),(0,A.jsx)("td",{children:"Pilanggede"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"}),(0,A.jsx)("td",{children:"-"})]})})]})})]})})})})]})]})})})]})})}},9388:function(e,s,l){l.d(s,{ZT:function(){return n},mG:function(){return i},pi:function(){return c}});var a=function(e,s){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])},a(e,s)};function n(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function l(){this.constructor=e}a(e,s),e.prototype=null===s?Object.create(s):(l.prototype=s.prototype,new l)}var c=function(){return c=Object.assign||function(e){for(var s,l=1,a=arguments.length;l<a;l++)for(var n in s=arguments[l])Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);return e},c.apply(this,arguments)};function i(e,s,l,a){return new(l||(l=Promise))((function(n,c){function i(e){try{d(a.next(e))}catch(s){c(s)}}function r(e){try{d(a.throw(e))}catch(s){c(s)}}function d(e){var s;e.done?n(e.value):(s=e.value,s instanceof l?s:new l((function(e){e(s)}))).then(i,r)}d((a=a.apply(e,s||[])).next())}))}Object.create;Object.create}}]);
//# sourceMappingURL=996.a3f3c1a6.chunk.js.map