"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[106,346],{7106:function(e,a,t){t.r(a),t.d(a,{default:function(){return J}});var n=t(9439),r=t(1243),i=t(2791),s=(t(9086),t(6349)),l=t(184),u=function(e){return(0,l.jsx)(s.Z,{option:function(){var a=[];e.resultData.list_desa.forEach((function(e,t){a[t]=e.nama_deskel}));var t=[];e.resultData.list_desa.forEach((function(e,a){t[a]=e.pria}));var n=[];return e.resultData.list_desa.forEach((function(e,a){n[a]=e.wanita})),{title:{text:"Keterangan"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a},series:[{name:"Laki-Laki",type:"bar",data:t,color:"#327A6D"},{name:"Perempuan",type:"bar",data:n,color:"#EA9501"}]}}(),style:{width:"auto",height:"500rem"}})},p=t(5671),d=t(3144),o=t(136),c=t(7277),m=(t(6144),t(4102),t(1110),t(1842),t(5420),t(3203),t(855),t(8890)),k=t.n(m);function h(e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"text-center",children:e.no}),(0,l.jsx)("td",{children:e.kec}),(0,l.jsx)("td",{children:e.desa}),(0,l.jsx)("td",{children:e.laki}),(0,l.jsx)("td",{children:e.perempuan}),(0,l.jsx)("td",{children:e.total})]})}var f=function(e){(0,o.Z)(t,e);var a=(0,c.Z)(t);function t(e){var n;return(0,p.Z)(this,t),(n=a.call(this)).showTable=function(){var e=n.state.resultData;try{return e.list_desa.map((function(e,a){return(0,l.jsx)(h,{no:a+1,kec:e.nama_kecamatan,desa:e.nama_deskel,laki:e.pria,perempuan:e.wanita,total:e.jumlah_penduduk},e.kode_wilayah)}))}catch(a){alert(a.message)}},n.state={resultData:e.resultData},n}return(0,d.Z)(t,[{key:"componentDidMount",value:function(){k().fn.DataTable.isDataTable("#myTable")||k()(document).ready((function(){setTimeout((function(){k()("#table").DataTable({pageLength:10,searching:!1,dom:"Bfrtip",buttons:[""]})}),1e3)}))}},{key:"render",value:function(){return(0,l.jsx)("div",{className:"table-responsive",children:(0,l.jsxs)("table",{id:"table",className:"table table-bordered",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,l.jsx)("th",{children:"No"}),(0,l.jsx)("th",{children:"Kecamatan"}),(0,l.jsx)("th",{children:"Desa"}),(0,l.jsx)("th",{children:"Laki-Laki"}),(0,l.jsx)("th",{children:"Perempuan"}),(0,l.jsx)("th",{children:"Total Penduduk"})]})}),(0,l.jsx)("tbody",{children:this.showTable()})]})})}}]),t}(i.Component),x=t(3513),g=function(e){var a=e.resultData,t=a.list_kecamatan,r=a.list_desa,s=(0,i.useState)(""),u=(0,n.Z)(s,2),p=u[0],d=u[1],o=(0,i.useState)(""),c=(0,n.Z)(o,2),m=c[0],k=c[1],h=(0,i.useState)(""),f=(0,n.Z)(h,2),g=f[0],b=f[1],v=(0,i.useMemo)((function(){return k(""),r.filter((function(e){return"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===p}))}),[r,p]),j=(0,i.useMemo)((function(){return t}),[t]),w=(0,i.useMemo)((function(){return r.filter((function(e){return""!==g?e.nama_deskel.toLowerCase().indexOf(g.toLowerCase())>-1:p&&m?e.kode_wilayah===m:!p||"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===p}))}),[p,m,g,v]);return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsxs)("div",{className:"row g-1 mb-4",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("div",{className:"search-produk",children:(0,l.jsxs)("form",{className:"search-form-produk d-flex align-items-center",children:[(0,l.jsx)("input",{value:g,onChange:function(e){return b(e.target.value)},type:"text",name:"query",placeholder:"Cari Desa/Kelurahan...",title:"Enter search keyword"}),(0,l.jsx)("button",{type:"submit",title:"Search",disabled:!0,children:(0,l.jsx)("i",{className:"bi bi-search"})})]})})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return d(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Kecamatan"}),j.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:p===e.kode_wilayah,children:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return k(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Desa"}),v.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:m===e.kode_wilayah,children:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,l.jsx)(x.ZP,{columns:[{name:"No",selector:function(e,a){return a+1},width:"60px",style:{borderLeft:"1px solid #EDEDED"}},{name:"Kecamatan",sortable:!0,selector:function(e){return e.nama_kecamatan},width:"180px",wrap:!0},{name:"Desa",sortable:!0,selector:function(e){return e.nama_deskel},width:"180px",wrap:!0},{name:"Laki-Laki",sortable:!0,selector:function(e){return e.pria},width:"180px",wrap:!0},{name:"Perempuan",sortable:!0,selector:function(e){return e.wanita},width:"180px",wrap:!0},{name:"Jumlah Penduduk",sortable:!0,selector:function(e){return e.jumlah_penduduk},width:"180px",wrap:!0},{name:"Jumlah KK",sortable:!0,selector:function(e){return e.jumlah_kk},width:"180px",wrap:!0},{name:"Wajib KTP",sortable:!0,selector:function(e){return e.jml_wktp},width:"180px",wrap:!0}],data:w,customStyles:{headCells:{style:{fontSize:"14px",fontWeight:"bold",backgroundColor:"#F1ECFF",borderRight:"1px solid #EDEDED",borderTop:"1px solid #EDEDED"}},cells:{style:{fontSize:"14px",borderRight:"1px solid #EDEDED"}}},pagination:!0})]})},b=t(2346),v=function(e){var a=e.resultData,t=a.list_kecamatan,r=a.list_desa,s=(0,i.useState)(""),u=(0,n.Z)(s,2),p=u[0],d=u[1],o=(0,i.useState)(""),c=(0,n.Z)(o,2),m=c[0],k=c[1],h=(0,i.useState)(""),f=(0,n.Z)(h,2),g=f[0],b=f[1],v=(0,i.useMemo)((function(){return k(""),r.filter((function(e){return"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===p}))}),[r,p]),j=(0,i.useMemo)((function(){return t}),[t]),w=(0,i.useMemo)((function(){return r.filter((function(e){return""!==g?e.nama_deskel.toLowerCase().indexOf(g.toLowerCase())>-1:p&&m?e.kode_wilayah===m:!p||"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===p}))}),[p,m,g,v]);return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsxs)("div",{className:"row g-1 mb-4",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("div",{className:"search-produk",children:(0,l.jsxs)("form",{className:"search-form-produk d-flex align-items-center",children:[(0,l.jsx)("input",{value:g,onChange:function(e){return b(e.target.value)},type:"text",name:"query",placeholder:"Cari Desa/Kelurahan...",title:"Enter search keyword"}),(0,l.jsx)("button",{type:"submit",title:"Search",disabled:!0,children:(0,l.jsx)("i",{className:"bi bi-search"})})]})})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return d(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Kecamatan"}),j.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:p===e.kode_wilayah,children:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return k(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Desa"}),v.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:m===e.kode_wilayah,children:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,l.jsx)(x.ZP,{columns:[{name:"No",selector:function(e,a){return a+1},width:"60px",style:{borderLeft:"1px solid #EDEDED"}},{name:"Kecamatan",sortable:!0,selector:function(e){return e.nama_kecamatan},width:"180px",wrap:!0},{name:"Desa",sortable:!0,selector:function(e){return e.nama_deskel},width:"180px",wrap:!0},{name:"Laki-Laki",sortable:!0,selector:function(e){return e.pria},width:"180px",wrap:!0},{name:"Perempuan",sortable:!0,selector:function(e){return e.wanita},width:"180px",wrap:!0},{name:"Jumlah Penduduk",sortable:!0,selector:function(e){return e.jumlah_penduduk},width:"180px",wrap:!0},{name:"Jumlah KK",sortable:!0,selector:function(e){return e.jumlah_kk},width:"180px",wrap:!0},{name:"Wajib KTP",sortable:!0,selector:function(e){return e.jml_wktp},width:"180px",wrap:!0}],data:w,customStyles:{headCells:{style:{fontSize:"14px",fontWeight:"bold",backgroundColor:"#F1ECFF",borderRight:"1px solid #EDEDED",borderTop:"1px solid #EDEDED"}},cells:{style:{fontSize:"14px",borderRight:"1px solid #EDEDED"}}},pagination:!0})]})},j=t(7334),w=t(7304),y=t(4797),_=t(565),L=t(2657),N=t(5494),I=t(6343),P=t(6817),A=t(4759),D=t(2633),F=t(1570),C=t(8487),E=t(9286),S=t(7873),X=t(2973),T=t(659);var M=function(e){return(0,i.useLayoutEffect)((function(){var a=w.f.new("admUmurChart");a.setThemes([T.Z.new(a)]);var t=a.container.children.push(A.z.new(a,{panX:!1,panY:!1,layout:a.verticalLayout}));t.getNumberFormatter().set("numberFormat","#.#s"),t.children.push(y.D.new(a,{centerX:_.CI,x:_.CI})).data.setAll(t.series.values);var n=[{age:"75+",Laki:-0,Perempuan:e.data.u75.perempuan},{age:"70-74",Laki:-0,Perempuan:e.data.u70.perempuan},{age:"65-69",Laki:-0,Perempuan:e.data.u65.perempuan},{age:"60-64",Laki:-0,Perempuan:e.data.u60.perempuan},{age:"55-59",Laki:-0,Perempuan:e.data.u55.perempuan},{age:"50-54",Laki:-0,Perempuan:e.data.u50.perempuan},{age:"45-49",Laki:-0,Perempuan:e.data.u45.perempuan},{age:"40-44",Laki:-0,Perempuan:e.data.u40.perempuan},{age:"35-39",Laki:-0,Perempuan:e.data.u35.perempuan},{age:"30-34",Laki:-0,Perempuan:e.data.u30.perempuan},{age:"25-29",Laki:-0,Perempuan:e.data.u25.perempuan},{age:"20-24",Laki:-0,Perempuan:e.data.u20.perempuan},{age:"15-19",Laki:-0,Perempuan:e.data.u15.perempuan},{age:"10-14",Laki:-0,Perempuan:e.data.u10.perempuan},{age:"5-9",Laki:-0,Perempuan:e.data.u5.perempuan},{age:"0-4",Laki:-0,Perempuan:e.data.u0.perempuan}],r=t.yAxes.push(D.$.new(a,{categoryField:"age",renderer:F.j.new(a,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));r.data.setAll(n);var i=t.xAxes.push(C.m.new(a,{renderer:E.n.new(a,{strokeOpacity:.1})}));!function(e,s,l,u){var p=t.series.push(S.d.new(a,{xAxis:i,yAxis:r,valueXField:e,categoryYField:"age",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(a,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(a,{locationX:1,locationY:.5,sprite:I._.new(a,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(n),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=i.makeDataItem({value:u});i.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:e,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-t.plotContainer.height()}))}("Perempuan",0,"left",2);var s=t.set("cursor",X.L.new(a,{}));return s.lineY.set("forceHidden",!0),s.lineX.set("forceHidden",!0),t.appear(1e3,100),function(){a.dispose()}}),[e.data]),(0,l.jsx)("div",{id:"admUmurChart",style:{width:"100%",height:"400px"}})};var Y=function(e){return(0,i.useLayoutEffect)((function(){var a=w.f.new("admPendidikanChart");a.setThemes([T.Z.new(a)]);var t=a.container.children.push(A.z.new(a,{panX:!1,panY:!1,layout:a.verticalLayout}));t.getNumberFormatter().set("numberFormat","#.#s"),t.children.push(y.D.new(a,{centerX:_.CI,x:_.CI})).data.setAll(t.series.values);var n=[{pendidikan:"Tidak/Belum Sekolah",Laki:-0,Perempuan:e.data.tidak_blm_sekolah.perempuan},{pendidikan:"Belum Tamat SD/Sederajat",Laki:-0,Perempuan:e.data.belum_tamat_sd.perempuan},{pendidikan:"Tamat SD/Sederajat",Laki:-0,Perempuan:e.data.tamat_sd.perempuan},{pendidikan:"SLTP/Sederajat",Laki:-0,Perempuan:e.data.sltp.perempuan},{pendidikan:"SLTA/Sederajat",Laki:-0,Perempuan:e.data.slta.perempuan},{pendidikan:"Diploma I/II",Laki:-0,Perempuan:e.data.d1_dan_d2.perempuan},{pendidikan:"Diploma III/Sarjana Muda",Laki:-0,Perempuan:e.data.d3.perempuan},{pendidikan:"Diploma IV/Strata I",Laki:-0,Perempuan:e.data.s1.perempuan},{pendidikan:"Strata II",Laki:-0,Perempuan:e.data.s2.perempuan},{pendidikan:"Strata III",Laki:-0,Perempuan:e.data.s3.perempuan}],r=t.yAxes.push(D.$.new(a,{categoryField:"pendidikan",renderer:F.j.new(a,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));r.data.setAll(n);var i=t.xAxes.push(C.m.new(a,{renderer:E.n.new(a,{strokeOpacity:.1})}));!function(e,s,l,u){var p=t.series.push(S.d.new(a,{xAxis:i,yAxis:r,valueXField:e,categoryYField:"pendidikan",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(a,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(a,{locationX:1,locationY:.5,sprite:I._.new(a,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(n),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=i.makeDataItem({value:u});i.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:e,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-t.plotContainer.height()}))}("Perempuan",0,"left",2);var s=t.set("cursor",X.L.new(a,{}));return s.lineY.set("forceHidden",!0),s.lineX.set("forceHidden",!0),t.appear(1e3,100),function(){a.dispose()}}),[e.data]),(0,l.jsx)("div",{id:"admPendidikanChart",style:{width:"100%",height:"400px"}})};var K=function(e){return(0,i.useLayoutEffect)((function(){var a=w.f.new("admPekerjaanChart");a.setThemes([T.Z.new(a)]);var t=a.container.children.push(A.z.new(a,{panX:!1,panY:!1,layout:a.verticalLayout}));t.getNumberFormatter().set("numberFormat","#.#s"),t.children.push(y.D.new(a,{centerX:_.CI,x:_.CI})).data.setAll(t.series.values);var n=[{pekerjaan:"Belum/Tidak Bekerja",Laki:-0,Perempuan:e.data.belum_tidak_bekerja.perempuan},{pekerjaan:"Mengurus Rumah Tangga",Laki:-0,Perempuan:e.data.mengurus_rumah_tangga.perempuan},{pekerjaan:"Pelajar/Mahasiswa",Laki:-0,Perempuan:e.data.pelajar_mahasiswa.perempuan},{pekerjaan:"Pensiunan",Laki:-0,Perempuan:e.data.pensiunan.perempuan},{pekerjaan:"Perdagangan",Laki:-0,Perempuan:e.data.perdagangan.perempuan},{pekerjaan:"Perawat",Laki:-0,Perempuan:e.data.perawat.perempuan},{pekerjaan:"Nelayan/Perikanan",Laki:-0,Perempuan:e.data.nelayan.perempuan},{pekerjaan:"Guru",Laki:-0,Perempuan:e.data.guru.perempuan},{pekerjaan:"Wiraswasta",Laki:-0,Perempuan:e.data.wiraswasta.perempuan},{pekerjaan:"Pengacara",Laki:-0,Perempuan:e.data.pengacara.perempuan},{pekerjaan:"Lainnya",Laki:-0,Perempuan:e.data.lainnya.perempuan}],r=t.yAxes.push(D.$.new(a,{categoryField:"pekerjaan",renderer:F.j.new(a,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));r.data.setAll(n);var i=t.xAxes.push(C.m.new(a,{renderer:E.n.new(a,{strokeOpacity:.1})}));!function(e,s,l,u){var p=t.series.push(S.d.new(a,{xAxis:i,yAxis:r,valueXField:e,categoryYField:"pekerjaan",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(a,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(a,{locationX:1,locationY:.5,sprite:I._.new(a,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(n),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=i.makeDataItem({value:u});i.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:e,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-t.plotContainer.height()}))}("Perempuan",0,"left",2);var s=t.set("cursor",X.L.new(a,{}));return s.lineY.set("forceHidden",!0),s.lineX.set("forceHidden",!0),t.appear(1e3,100),function(){a.dispose()}}),[e.data]),(0,l.jsx)("div",{id:"admPekerjaanChart",style:{width:"100%",height:"400px"}})};var O=function(e){return(0,i.useLayoutEffect)((function(){var a=w.f.new("admPerkawinanChart");a.setThemes([T.Z.new(a)]);var t=a.container.children.push(A.z.new(a,{panX:!1,panY:!1,layout:a.verticalLayout}));t.getNumberFormatter().set("numberFormat","#.#s"),t.children.push(y.D.new(a,{centerX:_.CI,x:_.CI})).data.setAll(t.series.values);var n=[{perkawinan:"Belum Kawin",Laki:-0,Perempuan:e.data.belum_kawin.perempuan},{perkawinan:"Kawin",Laki:-0,Perempuan:e.data.kawin.perempuan},{perkawinan:"Cerai Hidup",Laki:-0,Perempuan:e.data.cerai_hidup.perempuan},{perkawinan:"Cerai Mati",Laki:-0,Perempuan:e.data.cerai_mati.perempuan}],r=t.yAxes.push(D.$.new(a,{categoryField:"perkawinan",renderer:F.j.new(a,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));r.data.setAll(n);var i=t.xAxes.push(C.m.new(a,{renderer:E.n.new(a,{strokeOpacity:.1})}));!function(e,s,l,u){var p=t.series.push(S.d.new(a,{xAxis:i,yAxis:r,valueXField:e,categoryYField:"perkawinan",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(a,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(a,{locationX:1,locationY:.5,sprite:I._.new(a,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(n),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=i.makeDataItem({value:u});i.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:e,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-t.plotContainer.height()}))}("Perempuan",0,"left",2);var s=t.set("cursor",X.L.new(a,{}));return s.lineY.set("forceHidden",!0),s.lineX.set("forceHidden",!0),t.appear(1e3,100),function(){a.dispose()}}),[e.data]),(0,l.jsx)("div",{id:"admPerkawinanChart",style:{width:"100%",height:"400px"}})};var Z=function(e){return(0,i.useLayoutEffect)((function(){var e=w.f.new("admKeluargaChart");e.setThemes([T.Z.new(e)]);var a=e.container.children.push(A.z.new(e,{panX:!1,panY:!1,layout:e.verticalLayout}));a.getNumberFormatter().set("numberFormat","#.#s"),a.children.push(y.D.new(e,{centerX:_.CI,x:_.CI})).data.setAll(a.series.values);var t=[{keluarga:"Kepala Keluarga",Laki:-1,Perempuan:1},{keluarga:"Suami",Laki:-1,Perempuan:1},{keluarga:"Istri",Laki:-1,Perempuan:1},{keluarga:"Anak",Laki:-1,Perempuan:1},{keluarga:"Menantu",Laki:-1,Perempuan:1},{keluarga:"Cucu",Laki:-1,Perempuan:1},{keluarga:"Orang Tua",Laki:-1,Perempuan:1},{keluarga:"Mertua",Laki:-1,Perempuan:1},{keluarga:"Famili Lain",Laki:-1,Perempuan:1},{keluarga:"Pembantu",Laki:-1,Perempuan:1},{keluarga:"Lainnya",Laki:-1,Perempuan:1}],n=a.yAxes.push(D.$.new(e,{categoryField:"keluarga",renderer:F.j.new(e,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));n.data.setAll(t);var r=a.xAxes.push(C.m.new(e,{renderer:E.n.new(e,{strokeOpacity:.1})}));!function(i,s,l,u){var p=a.series.push(S.d.new(e,{xAxis:r,yAxis:n,valueXField:i,categoryYField:"keluarga",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(e,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(e,{locationX:1,locationY:.5,sprite:I._.new(e,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(t),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=r.makeDataItem({value:u});r.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:i,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-a.plotContainer.height()}))}("Perempuan",0,"left",2);var i=a.set("cursor",X.L.new(e,{}));return i.lineY.set("forceHidden",!0),i.lineX.set("forceHidden",!0),a.appear(1e3,100),function(){e.dispose()}}),[]),(0,l.jsx)("div",{id:"admKeluargaChart",style:{width:"100%",height:"400px"}})};var z=function(e){return(0,i.useLayoutEffect)((function(){var a=w.f.new("admAgamaChart");a.setThemes([T.Z.new(a)]);var t=a.container.children.push(A.z.new(a,{panX:!1,panY:!1,layout:a.verticalLayout}));t.getNumberFormatter().set("numberFormat","#.#s"),t.children.push(y.D.new(a,{centerX:_.CI,x:_.CI})).data.setAll(t.series.values);var n=[{agama:"Islam",Laki:-0,Perempuan:e.data.islam.perempuan},{agama:"Kristen",Laki:-0,Perempuan:e.data.kristen.perempuan},{agama:"Katolik",Laki:-0,Perempuan:e.data.katholik.perempuan},{agama:"Hindu",Laki:-0,Perempuan:e.data.hindu.perempuan},{agama:"Buddha",Laki:-0,Perempuan:e.data.budha.perempuan},{agama:"Konghuchu",Laki:-0,Perempuan:e.data.konghucu.perempuan},{agama:"Kepercayaan Lainnya",Laki:-0,Perempuan:e.data.kepercayaan.perempuan}],r=t.yAxes.push(D.$.new(a,{categoryField:"agama",renderer:F.j.new(a,{minGridDistance:0,inversed:!0,cellStartLocation:.1,cellEndLocation:.9})}));r.data.setAll(n);var i=t.xAxes.push(C.m.new(a,{renderer:E.n.new(a,{strokeOpacity:.1})}));!function(e,s,l,u){var p=t.series.push(S.d.new(a,{xAxis:i,yAxis:r,valueXField:e,categoryYField:"agama",sequencedInterpolation:!0,clustered:!1,tooltip:L.u.new(a,{pointerOrientation:l,labelText:"{categoryY}: {valueX}"})}));p.columns.template.setAll({height:_.AQ,strokeOpacity:0,fillOpacity:1}),p.bullets.push((function(){return N.g.new(a,{locationX:1,locationY:.5,sprite:I._.new(a,{centerY:_.CI,text:"{valueX}",populateText:!0,centerX:s})})})),p.data.setAll(n),p.appear(),p.set("stroke",P.$_("#00FFFFFF"));var d=i.makeDataItem({value:u});i.createAxisRange(d),d.get("grid").setAll({strokeOpacity:0,stroke:p.get("stroke")});var o=d.get("label");o.setAll({text:e,fontSize:"1em",fill:p.get("stroke"),paddingTop:-20,isMeasured:!1,centerX:s}),o.adapters.add("dy",(function(){return-t.plotContainer.height()}))}("Perempuan",0,"left",2);var s=t.set("cursor",X.L.new(a,{}));return s.lineY.set("forceHidden",!0),s.lineX.set("forceHidden",!0),t.appear(1e3,100),function(){a.dispose()}}),[e.data]),(0,l.jsx)("div",{id:"admAgamaChart",style:{width:"100%",height:"400px"}})},R=function(e){var a=(0,i.useState)(""),t=(0,n.Z)(a,2),r=t[0],s=t[1],u=(0,i.useState)(""),p=(0,n.Z)(u,2),d=p[0],o=p[1],c=e.data,m=(0,i.useMemo)((function(){return o(""),c.list_desa.filter((function(e){return"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===r}))}),[c,r]),k=(0,i.useMemo)((function(){return c.list_kecamatan}),[c]),h=(0,i.useMemo)((function(){return c.list_desa.filter((function(e){return r&&d?e.kode_wilayah=d:!r||"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===r}))}),[c,d,r]),f=(0,i.useMemo)((function(){var e={u0:{laki:0,perempuan:0},u5:{laki:0,perempuan:0},u10:{laki:0,perempuan:0},u15:{laki:0,perempuan:0},u20:{laki:0,perempuan:0},u25:{laki:0,perempuan:0},u30:{laki:0,perempuan:0},u35:{laki:0,perempuan:0},u40:{laki:0,perempuan:0},u45:{laki:0,perempuan:0},u50:{laki:0,perempuan:0},u55:{laki:0,perempuan:0},u60:{laki:0,perempuan:0},u65:{laki:0,perempuan:0},u70:{laki:0,perempuan:0},u75:{laki:0,perempuan:0}};return h.forEach((function(a){e.u0.perempuan+=parseInt(a.u0),e.u5.perempuan+=parseInt(a.u5),e.u10.perempuan+=parseInt(a.u10),e.u15.perempuan+=parseInt(a.u15),e.u20.perempuan+=parseInt(a.u20),e.u25.perempuan+=parseInt(a.u25),e.u30.perempuan+=parseInt(a.u30),e.u35.perempuan+=parseInt(a.u35),e.u40.perempuan+=parseInt(a.u40),e.u45.perempuan+=parseInt(a.u45),e.u50.perempuan+=parseInt(a.u50),e.u55.perempuan+=parseInt(a.u55),e.u60.perempuan+=parseInt(a.u60),e.u65.perempuan+=parseInt(a.u65),e.u70.perempuan+=parseInt(a.u70),e.u75.perempuan+=parseInt(a.u75)})),e}),[h]),x=(0,i.useMemo)((function(){var e={tidak_blm_sekolah:{laki:0,perempuan:0},belum_tamat_sd:{laki:0,perempuan:0},tamat_sd:{laki:0,perempuan:0},sltp:{laki:0,perempuan:0},slta:{laki:0,perempuan:0},d1_dan_d2:{laki:0,perempuan:0},d3:{laki:0,perempuan:0},s1:{laki:0,perempuan:0},s2:{laki:0,perempuan:0},s3:{laki:0,perempuan:0}};return h.forEach((function(a){e.tidak_blm_sekolah.perempuan+=parseInt(a.tidak_blm_sekolah),e.belum_tamat_sd.perempuan+=parseInt(a.belum_tamat_sd),e.tamat_sd.perempuan+=parseInt(a.tamat_sd),e.sltp.perempuan+=parseInt(a.sltp),e.slta.perempuan+=parseInt(a.slta),e.d1_dan_d2.perempuan+=parseInt(a.d1_dan_d2),e.d3.perempuan+=parseInt(a.d3),e.s1.perempuan+=parseInt(a.s1),e.s2.perempuan+=parseInt(a.s2),e.s3.perempuan+=parseInt(a.s3)})),e}),[h]),g=(0,i.useMemo)((function(){var e={belum_tidak_bekerja:{laki:0,perempuan:0},mengurus_rumah_tangga:{laki:0,perempuan:0},pelajar_mahasiswa:{laki:0,perempuan:0},pensiunan:{laki:0,perempuan:0},perdagangan:{laki:0,perempuan:0},perawat:{laki:0,perempuan:0},nelayan:{laki:0,perempuan:0},guru:{laki:0,perempuan:0},wiraswasta:{laki:0,perempuan:0},pengacara:{laki:0,perempuan:0},lainnya:{laki:0,perempuan:0}};return h.forEach((function(a){e.belum_tidak_bekerja.perempuan+=parseInt(a.belum_tidak_bekerja),e.mengurus_rumah_tangga.perempuan+=parseInt(a.mengurus_rumah_tangga),e.pelajar_mahasiswa.perempuan+=parseInt(a.pelajar_mahasiswa),e.pensiunan.perempuan+=parseInt(a.pensiunan),e.perdagangan.perempuan+=parseInt(a.perdagangan),e.perawat.perempuan+=parseInt(a.perawat),e.nelayan.perempuan+=parseInt(a.nelayan),e.guru.perempuan+=parseInt(a.guru),e.wiraswasta.perempuan+=parseInt(a.wiraswasta),e.pengacara.perempuan+=parseInt(a.pengacara),e.lainnya.perempuan+=parseInt(a.lainnya)})),e}),[h]),b=(0,i.useMemo)((function(){var e={belum_kawin:{laki:0,perempuan:0},kawin:{laki:0,perempuan:0},cerai_hidup:{laki:0,perempuan:0},cerai_mati:{laki:0,perempuan:0}};return h.forEach((function(a){e.belum_kawin.perempuan+=parseInt(a.belum_kawin),e.kawin.perempuan+=parseInt(a.kawin),e.cerai_hidup.perempuan+=parseInt(a.cerai_hidup),e.cerai_mati.perempuan+=parseInt(a.cerai_mati)})),e}),[h]),v=(0,i.useMemo)((function(){var e={islam:{laki:0,perempuan:0},kristen:{laki:0,perempuan:0},katholik:{laki:0,perempuan:0},hindu:{laki:0,perempuan:0},budha:{laki:0,perempuan:0},konghucu:{laki:0,perempuan:0},kepercayaan:{laki:0,perempuan:0}};return h.forEach((function(a){e.islam.perempuan+=parseInt(a.islam),e.kristen.perempuan+=parseInt(a.kristen),e.katholik.perempuan+=parseInt(a.katholik),e.hindu.perempuan+=parseInt(a.hindu),e.budha.perempuan+=parseInt(a.budha),e.konghucu.perempuan+=parseInt(a.konghucu),e.kepercayaan.perempuan+=parseInt(a.kepercayaan)})),e}),[h]);return(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{className:"card-title-potensi",children:"Statistik Data Penduduk"}),(0,l.jsx)("div",{className:"filter-primary",children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,l.jsxs)("div",{className:"row g-1 mb-4",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return s(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Kecamatan"}),k.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:r===e.kode_wilayah,children:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{onChange:function(e){return o(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"",children:"Semua Desa"}),m.map((function(e){return(0,l.jsx)("option",{value:e.kode_wilayah,selected:d===e.kode_wilayah,children:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,l.jsxs)("ul",{className:"nav nav-tabs nav-tabs-bordered d-flex",id:"borderedTabJustified",role:"tablist",children:[(0,l.jsx)("li",{className:"nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100 active",id:"umur-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-umur",type:"button",role:"tab","aria-controls":"umur","aria-selected":"true",children:"Umur"})}),(0,l.jsx)("li",{className:"nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100",id:"pendidikan-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-pendidikan",type:"button",role:"tab","aria-controls":"pendidikan","aria-selected":"false",children:"Pendidikan"})}),(0,l.jsx)("li",{className:"nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100",id:"pekerjaan-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-pekerjaan",type:"button",role:"tab","aria-controls":"pekerjaan","aria-selected":"false",children:"Pekerjaan"})}),(0,l.jsx)("li",{className:"nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100",id:"perkawinan-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-perkawinan",type:"button",role:"tab","aria-controls":"perkawinan","aria-selected":"false",children:"Perkawinan"})}),(0,l.jsx)("li",{className:"d-none nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100",id:"keluarga-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-keluarga",type:"button",role:"tab","aria-controls":"keluarga","aria-selected":"false",children:"Keluarga"})}),(0,l.jsx)("li",{className:"nav-item flex-fill",role:"presentation",children:(0,l.jsx)("button",{className:"nav-link w-100",id:"agama-tab","data-bs-toggle":"tab","data-bs-target":"#bordered-justified-agama",type:"button",role:"tab","aria-controls":"agama","aria-selected":"false",children:"Agama"})})]}),(0,l.jsxs)("div",{className:"tab-content pt-2",id:"borderedTabJustifiedContent",children:[(0,l.jsx)("div",{className:"tab-pane fade show active",id:"bordered-justified-umur",role:"tabpanel","aria-labelledby":"umur-tab",children:(0,l.jsx)(M,{data:f})}),(0,l.jsx)("div",{className:"tab-pane fade",id:"bordered-justified-pendidikan",role:"tabpanel","aria-labelledby":"pendidikan-tab",children:(0,l.jsx)(Y,{data:x})}),(0,l.jsx)("div",{className:"tab-pane fade",id:"bordered-justified-pekerjaan",role:"tabpanel","aria-labelledby":"pekerjaan-tab",children:(0,l.jsx)(K,{data:g})}),(0,l.jsx)("div",{className:"tab-pane fade",id:"bordered-justified-perkawinan",role:"tabpanel","aria-labelledby":"perkawinan-tab",children:(0,l.jsx)(O,{data:b})}),(0,l.jsx)("div",{className:"tab-pane fade",id:"bordered-justified-keluarga",role:"tabpanel","aria-labelledby":"keluarga-tab",children:(0,l.jsx)(Z,{})}),(0,l.jsx)("div",{className:"tab-pane fade",id:"bordered-justified-agama",role:"tabpanel","aria-labelledby":"agama-tab",children:(0,l.jsx)(z,{data:v})})]})]})})};function H(e){return(0,l.jsx)("option",{value:"1",children:e.listkec})}function $(e){return(0,l.jsx)("option",{value:"1",children:e.listdesa})}var J=function(){var e=(0,i.useState)(!1),a=(0,n.Z)(e,2),t=a[0],s=a[1],p=(0,i.useState)(),d=(0,n.Z)(p,2),o=d[0],c=d[1],m=(0,i.useState)([]),k=(0,n.Z)(m,2),h=k[0],x=k[1],w=(0,i.useState)([]),y=(0,n.Z)(w,2),_=y[0],L=y[1],N=(0,i.useState)(),I=(0,n.Z)(N,2),P=I[0],A=I[1];return(0,i.useEffect)((function(){s(!0),r.Z.get("https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/kependudukan?k3=&k4=").then((function(e){var a=e.data.data;c(a),x(a.list_kecamatan),L(a.list_desa),A(a.last_updated)})).catch((function(e){alert(e.message)})).finally((function(){return s(!1)})),document.title="Kependudukan | PENDEKAR"}),[]),t?(0,l.jsx)(b.default,{}):(0,l.jsx)(i.Fragment,{children:(0,l.jsxs)("main",{id:"main",className:"main",children:[(0,l.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,l.jsx)("h1",{children:"Administrasi Kependudukan"})}),(0,l.jsx)("div",{className:"filter-update",children:(0,l.jsx)("h5",{children:(0,l.jsxs)("span",{className:"badge bg-update py-3",children:["Last Update : ",(0,j.Ai)(P)]})})}),(0,l.jsx)("section",{className:"section dashboard",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsx)("div",{className:"col-md-6 d-none",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"card-body-demografi pb-0",children:[(0,l.jsx)("h5",{className:"card-title-potensi pb-0",children:"Tampilkan Berdasarkan"}),(0,l.jsxs)("div",{className:"row g-1 mb-4",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"DEFAULT",children:"Demografi Kependudukan"}),(0,l.jsx)("option",{value:"1",children:"Jenis Kelamin"}),(0,l.jsx)("option",{value:"2",children:"Pendidikan"}),(0,l.jsx)("option",{value:"3",children:"Pekerjaan"})]})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),h.map((function(e){return(0,l.jsx)(H,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,l.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),_.map((function(e){return(0,l.jsx)($,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),o&&(0,l.jsx)(f,{resultData:o})]})})}),(0,l.jsx)("div",{className:"col-md-6 d-none",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"card-body-demografi pb-0",children:[(0,l.jsx)("h5",{className:"card-title-potensi pb-0",children:"Statistik Data"}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-outline-secondary me-2",children:"Grafik"}),(0,l.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Statistik"})]}),(0,l.jsx)("div",{className:"row g-md-0",children:(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("div",{className:"stunting-card",children:(0,l.jsx)("div",{className:"card-body-chart mt-4 overflow-auto",children:o&&(0,l.jsx)(u,{resultData:o})})})})})]})})}),(0,l.jsx)("div",{className:"col-lg-12",children:o&&(0,l.jsx)(R,{data:o})}),(0,l.jsx)("div",{className:"col-lg-12",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{className:"card-title-potensi",children:"Kemiskinan Ekstrim"}),(0,l.jsx)("div",{className:"filter-primary",children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),o&&(0,l.jsx)(v,{resultData:o})]})})}),(0,l.jsx)("div",{className:"col-lg-12",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{className:"card-title-potensi",children:"Rekap Kependudukan"}),(0,l.jsx)("div",{className:"filter-primary",children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),o&&(0,l.jsx)(g,{resultData:o})]})})})]})})]})})}},2346:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});t(2791);var n=t(184);function r(){return(0,n.jsx)("div",{className:"spinner-container",children:(0,n.jsx)("div",{className:"loading-spinner"})})}},9086:function(e,a,t){var n=window.location.hostname.split(".")[0];"https://".concat(n,".pendekar.digitaldesa.id/api/")},7334:function(e,a,t){t.d(a,{Ai:function(){return i},aM:function(){return p},c$:function(){return r},zD:function(){return u}});var n=function(e,a,t){return null==e?"":e.substring(a,a+t)},r=function(e){return"0000-00-00"==e?"-":n(e,8,2)+" "+l(n(e,5,2))+" "+n(e,0,4)},i=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("-"==n(e,2,1)){var t=n(e,0,2),r=n(e,3,2);return n(e,6,4)+"-"+r+"-"+t}if("-"==n(e,4,1)){var i=n(e,0,4),u=n(e,5,2),p=n(e,8,2),d=n(e,11,8);return a?p+" "+l(u)+" "+i+", "+s(d):p+"-"+u+"-"+i}},s=function(e){var a=n(e,0,2),t="PM";return a<12?(t="AM",0==a&&(a=12)):12!=a&&(a-=12),a+":"+n(e,3,2)+" "+t},l=function(e){return 1==parseInt(e)?"Januari":2==parseInt(e)?"Februari":3==parseInt(e)?"Maret":4==parseInt(e)?"April":5==parseInt(e)?"Mei":6==parseInt(e)?"Juni":7==parseInt(e)?"Juli":8==parseInt(e)?"Agustus":9==parseInt(e)?"September":10==parseInt(e)?"Oktober":11==parseInt(e)?"November":12==parseInt(e)?"Desember":e},u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a?a+" "+parseInt(e).formatMoney(0,".",","):"Rp"+parseInt(e).formatMoney(0,",",".")+",-"};Number.prototype.formatMoney=function(e,a,t){var n=this,r=(e=isNaN(e=Math.abs(e))?2:e,a=void 0==a?".":a,t=void 0==t?",":t,n<0?"-":""),i=String(parseInt(n=Math.abs(Number(n)||0).toFixed(e))),s=(s=i.length)>3?s%3:0;return r+(s?i.substr(0,s)+t:"")+i.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+t)+(e?a+Math.abs(n-i).toFixed(e).slice(2):"")};var p=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}]);
//# sourceMappingURL=106.a50f21cd.chunk.js.map