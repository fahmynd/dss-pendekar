"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[725],{99216:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var s=t(29439),l=t(31243),n=t(72791),i=(t(29086),t(15671)),r=t(43144),c=t(60136),d=t(27277),o=t(6349),u=t(80184),h=function(e){(0,c.Z)(t,e);var a=(0,d.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var s=arguments.length,l=new Array(s),n=0;n<s;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).getOptions=function(e){var a=[];e.resultData.list_desa.forEach((function(e,t){a[t]=e.nama_deskel}));var t=[];e.resultData.list_desa.forEach((function(e,a){t[a]=e.pria}));var s=[];return e.resultData.list_desa.forEach((function(e,a){s[a]=e.wanita})),{title:{text:"Keterangan"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a},series:[{name:"Laki-Laki",type:"bar",data:t,color:"#327A6D"},{name:"Perempuan",type:"bar",data:s,color:"#EA9501"}]}},e}return(0,r.Z)(t,[{key:"render",value:function(){return(0,u.jsx)(o.Z,{option:this.getOptions(this.props),style:{width:"auto",height:"500rem"}})}}]),t}(n.Component),m=h,x=(t(96144),t(64102),t(90201),t(71110),t(31842),t(55420),t(43203),t(30855),t(88890)),j=t.n(x);function p(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-center",children:e.no}),(0,u.jsx)("td",{children:e.kec}),(0,u.jsx)("td",{children:e.desa}),(0,u.jsx)("td",{children:e.laki}),(0,u.jsx)("td",{children:e.perempuan}),(0,u.jsx)("td",{children:e.total})]})}var k=function(e){(0,c.Z)(t,e);var a=(0,d.Z)(t);function t(e){var s;return(0,i.Z)(this,t),(s=a.call(this)).showTable=function(){var e=s.state.resultData;try{return e.list_desa.map((function(e,a){return(0,u.jsx)(p,{no:a+1,kec:e.nama_kecamatan,desa:e.nama_deskel,laki:e.pria,perempuan:e.wanita,total:e.jumlah_penduduk},e.kode_wilayah)}))}catch(a){alert(a.message)}},s.state={resultData:e.resultData},s}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){j().fn.DataTable.isDataTable("#myTable")||j()(document).ready((function(){setTimeout((function(){j()("#table").DataTable({pageLength:10,searching:!1,dom:"Bfrtip",buttons:[""]})}),1e3)}))}},{key:"render",value:function(){return(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{id:"table",className:"table table-bordered",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,u.jsx)("th",{children:"No"}),(0,u.jsx)("th",{children:"Kecamatan"}),(0,u.jsx)("th",{children:"Desa"}),(0,u.jsx)("th",{children:"Laki-Laki"}),(0,u.jsx)("th",{children:"Perempuan"}),(0,u.jsx)("th",{children:"Total Penduduk"})]})}),(0,u.jsx)("tbody",{children:this.showTable()})]})})}}]),t}(n.Component);function f(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-center",children:e.no}),(0,u.jsx)("td",{children:e.kec}),(0,u.jsx)("td",{children:e.desa}),(0,u.jsx)("td",{children:e.laki}),(0,u.jsx)("td",{children:e.perempuan}),(0,u.jsx)("td",{children:e.total}),(0,u.jsx)("td",{children:e.kk}),(0,u.jsx)("td",{children:e.ktp})]})}var b=function(e){(0,c.Z)(t,e);var a=(0,d.Z)(t);function t(e){var s;return(0,i.Z)(this,t),(s=a.call(this)).showTable=function(){var e=s.state.resultData;try{return e.list_desa.map((function(e,a){return(0,u.jsx)(f,{no:a+1,kec:e.nama_kecamatan,desa:e.nama_deskel,laki:e.pria,perempuan:e.wanita,total:e.jumlah_penduduk,kk:e.jumlah_kk,ktp:e.jml_wktp},e.kode_wilayah)}))}catch(a){alert(a.message)}},s.state={resultData:e.resultData},s}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){j().fn.DataTable.isDataTable("#myTable")||j()(document).ready((function(){setTimeout((function(){j()("#rekap").DataTable({pageLength:10,searching:!1,dom:"Bfrtip",buttons:[""]})}),1e3)}))}},{key:"render",value:function(){return(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{id:"rekap",className:"table table-bordered",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,u.jsx)("th",{children:"No"}),(0,u.jsx)("th",{children:"Kecamatan"}),(0,u.jsx)("th",{children:"Desa"}),(0,u.jsx)("th",{children:"Laki-Laki"}),(0,u.jsx)("th",{children:"Perempuan"}),(0,u.jsx)("th",{children:"Jumlah Penduduk"}),(0,u.jsx)("th",{children:"Jumlah KK"}),(0,u.jsx)("th",{children:"Wajib KTP"})]})}),(0,u.jsx)("tbody",{children:this.showTable()})]})})}}]),t}(n.Component),v=t(90027);function D(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-center",children:e.no}),(0,u.jsx)("td",{children:e.kec}),(0,u.jsx)("td",{children:e.desa}),(0,u.jsx)("td",{children:e.laki}),(0,u.jsx)("td",{children:e.perempuan}),(0,u.jsx)("td",{children:e.total})]})}var N=function(e){(0,c.Z)(t,e);var a=(0,d.Z)(t);function t(e){var s;return(0,i.Z)(this,t),(s=a.call(this)).showTable=function(){var e=s.state.resultData;try{return e.list_desa.map((function(e,a){return(0,u.jsx)(D,{no:a+1,kec:e.nama_kecamatan,desa:e.nama_deskel,laki:e.pria,perempuan:e.wanita,total:e.jumlah_penduduk},e.kode_wilayah)}))}catch(a){alert(a.message)}},s.state={resultData:e.resultData},s}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){j().fn.DataTable.isDataTable("#myTable")||j()(document).ready((function(){setTimeout((function(){j()("#miskin").DataTable({pageLength:10,searching:!1,dom:"Bfrtip",buttons:[""]})}),1e3)}))}},{key:"render",value:function(){return(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{id:"miskin",className:"table table-bordered",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{style:{background:"#F1ECFF"},children:[(0,u.jsx)("th",{children:"No"}),(0,u.jsx)("th",{children:"Kecamatan"}),(0,u.jsx)("th",{children:"Desa"}),(0,u.jsx)("th",{children:"Laki-Laki"}),(0,u.jsx)("th",{children:"Perempuan"}),(0,u.jsx)("th",{children:"Jumlah Penduduk"})]})}),(0,u.jsx)("tbody",{children:this.showTable()})]})})}}]),t}(n.Component);function y(e){return(0,u.jsx)("option",{value:"1",children:e.listkec})}function g(e){return(0,u.jsx)("option",{value:"1",children:e.listdesa})}var T=function(){var e=(0,n.useState)(!1),a=(0,s.Z)(e,2),t=a[0],i=a[1],r=(0,n.useState)(),c=(0,s.Z)(r,2),d=c[0],o=c[1],h=(0,n.useState)([]),x=(0,s.Z)(h,2),j=x[0],p=x[1],f=(0,n.useState)([]),D=(0,s.Z)(f,2),T=D[0],_=D[1];return(0,n.useEffect)((function(){i(!0),l.Z.get("https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/kependudukan?k3=&k4=").then((function(e){var a=e.data.data;o(a),p(a.list_kecamatan),_(a.list_desa)})).catch((function(e){alert(e.message)})).finally((function(){return i(!1)})),document.title="Kependudukan | PENDEKAR"}),[]),t?(0,u.jsx)(v.Z,{}):(0,u.jsx)(n.Fragment,{children:(0,u.jsxs)("main",{id:"main",className:"main",children:[(0,u.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,u.jsx)("h1",{children:"Administrasi Kependudukan"})}),(0,u.jsx)("div",{className:"filter-update",children:(0,u.jsx)("h5",{children:(0,u.jsx)("span",{className:"badge bg-update py-3",children:"Last Update : 3 September 2022, 12:00 PM"})})}),(0,u.jsx)("section",{className:"section dashboard",children:(0,u.jsxs)("div",{className:"row g-2",children:[(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body-demografi pb-0",children:[(0,u.jsx)("h5",{className:"card-title-potensi pb-0",children:"Tampilkan Berdasarkan"}),(0,u.jsxs)("div",{className:"row g-1 mb-4",children:[(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Demografi Kependudukan"}),(0,u.jsx)("option",{value:"1",children:"Jenis Kelamin"}),(0,u.jsx)("option",{value:"2",children:"Pendidikan"}),(0,u.jsx)("option",{value:"3",children:"Pekerjaan"})]})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),j.map((function(e){return(0,u.jsx)(y,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),T.map((function(e){return(0,u.jsx)(g,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),d&&(0,u.jsx)(k,{resultData:d})]})})}),(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body-demografi pb-0",children:[(0,u.jsx)("h5",{className:"card-title-potensi pb-0",children:"Statistik Data"}),(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("button",{type:"button",className:"btn btn-outline-secondary me-2",children:"Grafik"}),(0,u.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Statistik"})]}),(0,u.jsx)("div",{className:"row g-md-0",children:(0,u.jsx)("div",{className:"col-12",children:(0,u.jsx)("div",{className:"stunting-card",children:(0,u.jsx)("div",{className:"card-body-chart mt-4 overflow-auto",children:d&&(0,u.jsx)(m,{resultData:d})})})})})]})})}),(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h5",{className:"card-title-potensi",children:"Kemiskinan Ekstrim"}),(0,u.jsxs)("div",{className:"row g-1 mb-4",children:[(0,u.jsx)("div",{className:"col-3",children:(0,u.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,u.jsx)("option",{value:"DEFAULT",children:"Demografi Kependudukan"})})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),j.map((function(e){return(0,u.jsx)(y,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),T.map((function(e){return(0,u.jsx)(g,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),d&&(0,u.jsx)(N,{resultData:d})]})})}),(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h5",{className:"card-title-potensi",children:"Rekap Kependudukan"}),(0,u.jsxs)("div",{className:"row g-1 mb-4",children:[(0,u.jsx)("div",{className:"col-3",children:(0,u.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,u.jsx)("option",{value:"DEFAULT",children:"Demografi Kependudukan"})})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Kecamatan"}),j.map((function(e){return(0,u.jsx)(y,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,u.jsx)("div",{className:"col-3",children:(0,u.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,u.jsx)("option",{value:"DEFAULT",children:"Semua Desa"}),T.map((function(e){return(0,u.jsx)(g,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})})]}),d&&(0,u.jsx)(b,{resultData:d})]})})})]})})]})})}},29086:function(e,a,t){var s=window.location.hostname.split(".")[0];"https://".concat(s,".pendekar.digitaldesa.id/api/")}}]);
//# sourceMappingURL=725.9a4084f3.chunk.js.map