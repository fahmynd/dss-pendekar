"use strict";(self.webpackChunkdss_pendekar=self.webpackChunkdss_pendekar||[]).push([[988,346],{7253:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var s=t(9439),n=t(2791),i=t(6349),r=t(184),l=function(e){var a=(0,n.useState)(""),t=(0,s.Z)(a,2),l=t[0],c=t[1],o=(0,n.useState)(""),d=(0,s.Z)(o,2),u=d[0],m=d[1],h=(0,n.useState)(""),p=(0,s.Z)(h,2),x=p[0],f=p[1],j=e.resultData,v=j.list_desa,k=j.list_kecamatan,y=j.jenis_umkm,g=(0,n.useMemo)((function(){return f(""),v.filter((function(e){return"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===u}))}),[v,u]),N=(0,n.useMemo)((function(){return k}),[k]),b=(0,n.useMemo)((function(){var e=v.filter((function(e){return""!==l?e.nama_deskel.toLowerCase().indexOf(l.toLowerCase())>-1:u&&x?e.kode_wilayah===x:!u||"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===u})),a=[],t=function(t){var s=0;e.forEach((function(e){for(var a in e)t==a&&(s+=parseInt(e[a]))})),a.push({jenis_umkm:y[t],chart_umkm:s})};for(var s in y)t(s);return a.sort((function(e,a){return e.chart_umkm===a.chart_umkm?0:e.chart_umkm>a.chart_umkm?-1:1})),a}),[u,x,g,l]),_=(0,n.useMemo)((function(){return{title:{show:!1},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{height:"95%",left:"3%",right:"4%",top:"5%",bottom:"20%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,0],min:0,max:function(e){return e.max},axisTick:{show:!1},axisLine:{lineStyle:{width:0,type:"dashed"}},splitLine:{show:!0,lineStyle:{type:"dashed"}}},yAxis:{type:"category",data:b.map((function(e){return e.jenis_umkm})),axisTick:{show:!1},axisLine:{show:!0,lineStyle:{width:0,type:"dashed"}},splitLine:{show:!0,lineStyle:{type:"dashed"}},inverse:!0},series:[{type:"bar",data:b.map((function(e){return e.chart_umkm})),color:"#EA9501",label:{show:!0,position:"right",formatter:"{c}",fontSize:12},itemStyle:{borderRadius:[0,5,5,0]},cursor:"auto"}],dataZoom:[{type:"inside",id:"insideY",yAxisIndex:0,start:0,end:100,filterMode:"empty",zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}]}}),[b]);return(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title-potensi",children:"JENIS USAHA"}),(0,r.jsx)("div",{className:"filter-primary",children:(0,r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,r.jsxs)("div",{className:"row g-1 mb-0 pb-0",children:[(0,r.jsx)("div",{className:"d-none col",children:(0,r.jsx)("div",{className:"search-produk",children:(0,r.jsxs)("form",{className:"search-form-produk d-flex align-items-center",children:[(0,r.jsx)("input",{value:l,onChange:function(e){return c(e.target.value)},type:"text",name:"query",placeholder:"Cari Desa/Kelurahan...",title:"Enter search keyword"}),(0,r.jsx)("button",{type:"submit",title:"Search",disabled:!0,children:(0,r.jsx)("i",{className:"bi bi-search"})})]})})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{onChange:function(e){return m(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"",children:"Semua Kecamatan"}),N.map((function(e){return(0,r.jsx)("option",{value:e.kode_wilayah,selected:u===e.kode_wilayah,children:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{onChange:function(e){return f(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"",children:"Semua Desa"}),g.map((function(e){return(0,r.jsx)("option",{value:e.kode_wilayah,selected:x===e.kode_wilayah,children:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,r.jsx)("div",{style:{height:"400px"},children:(0,r.jsx)(i.Z,{option:_,style:{width:"auto",height:"100%"}})})]})})},c=function(e){var a=(0,n.useState)(""),t=(0,s.Z)(a,2),l=t[0],c=t[1],o=(0,n.useState)(""),d=(0,s.Z)(o,2),u=d[0],m=d[1],h=(0,n.useState)(""),p=(0,s.Z)(h,2),x=p[0],f=p[1],j=e.resultData,v=j.list_desa,k=j.list_kecamatan,y=(0,n.useMemo)((function(){return f(""),v.filter((function(e){return"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===u}))}),[v,u]),g=(0,n.useMemo)((function(){return k}),[k]),N=(0,n.useMemo)((function(){var e=v.filter((function(e){return""!==l?e.nama_deskel.toLowerCase().indexOf(l.toLowerCase())>-1:u&&x?e.kode_wilayah===x:!u||"".concat(e.k1,".").concat(e.k2,".").concat(e.k3)===u})).map((function(e){return{nama_desa:e.nama_deskel,jumlah_umkm:e.jml_umkm}}));return e.sort((function(e,a){return e.jumlah_umkm===a.jumlah_umkm?0:e.jumlah_umkm>a.jumlah_umkm?-1:1})),e}),[u,x,y,l]),b=(0,n.useMemo)((function(){var e=N.map((function(e){return e.nama_desa})),a=N.map((function(e){return e.jumlah_umkm}));return{title:{show:!1},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{height:"95%",left:"3%",right:"4%",top:"5%",bottom:"20%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,0],min:0,max:function(e){return e.max},axisTick:{show:!1},axisLine:{lineStyle:{width:0,type:"dashed"}},splitLine:{show:!0,lineStyle:{type:"dashed"}}},yAxis:{type:"category",data:e.reverse(),axisTick:{show:!1},axisLine:{show:!0,lineStyle:{width:0,type:"dashed"}},splitLine:{show:!0,lineStyle:{type:"dashed"}}},series:[{type:"bar",data:a.reverse(),label:{show:!0,position:"right",formatter:function(e){return 0==e.data?"":e.data},fontSize:12},itemStyle:{borderRadius:[0,5,5,0]},cursor:"auto",color:"#499841"}],dataZoom:[{type:"inside",id:"insideY",yAxisIndex:0,start:50,end:100,filterMode:"empty",zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}]}}),[N]);return(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title-potensi",children:"USAHA DI WILAYAH"}),(0,r.jsx)("div",{className:"filter-primary",children:(0,r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Export Report"})}),(0,r.jsxs)("div",{className:"row g-1 mb-0 pb-0",children:[(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("div",{className:"search-produk",children:(0,r.jsxs)("form",{className:"search-form-produk d-flex align-items-center",children:[(0,r.jsx)("input",{value:l,onChange:function(e){return c(e.target.value)},type:"text",name:"query",placeholder:"Cari Desa/Kelurahan...",title:"Enter search keyword"}),(0,r.jsx)("button",{type:"submit",title:"Search",disabled:!0,children:(0,r.jsx)("i",{className:"bi bi-search"})})]})})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{onChange:function(e){return m(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"",children:"Semua Kecamatan"}),g.map((function(e){return(0,r.jsx)("option",{value:e.kode_wilayah,selected:u===e.kode_wilayah,children:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{onChange:function(e){return f(e.target.value)},className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"",children:"Semua Desa"}),y.map((function(e){return(0,r.jsx)("option",{value:e.kode_wilayah,selected:x===e.kode_wilayah,children:e.nama_deskel},e.kode_wilayah)}))]})})]}),(0,r.jsx)("div",{style:{height:"400px"},children:(0,r.jsx)(i.Z,{option:b,style:{width:"auto",height:"100%"}})})]})})},o=t(1243),d=t(2346),u=t(6048),m=t.n(u);t.p;function h(e){var a=e.resultData,t=(0,n.useState)([]),i=(0,s.Z)(t,2),l=i[0],c=i[1],o=(0,n.useState)(0),d=(0,s.Z)(o,2),u=d[0],h=d[1],p=(0,n.useState)(0),x=(0,s.Z)(p,2),f=x[0],j=x[1];(0,n.useEffect)((function(){var e=f+9;c(a.list_umkm.slice(f,e)),h(Math.ceil(a.list_umkm.length/9))}),[f,9,a]);return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)("div",{className:"row",children:l.map((function(e,a){return(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("div",{className:"card p-2 mb-3",children:(0,r.jsxs)("div",{className:"row g-0 align-items-center",children:[(0,r.jsxs)("div",{className:"col-5 item",children:[(0,r.jsx)("span",{className:"notify-badge",children:e.tipe_usaha}),(0,r.jsx)("img",{src:"https://api.digitaldesa.id/uploads/belanja/".concat(e.foto),className:"img-fluid rounded-start",alt:"..."})]}),(0,r.jsx)("div",{className:"col-7 direction",children:(0,r.jsxs)("div",{className:"card-body-produk",children:[(0,r.jsx)("h6",{className:"fw-bold m-0",children:e.nama_usaha}),(0,r.jsxs)("p",{className:"fw-bold smaller m-0",children:["Desa ",e.nama_deskel,", Kec. ",e.nama_kecamatan]}),(0,r.jsxs)("div",{className:"smaller",children:[(0,r.jsx)("p",{className:"m-0",children:"Order via:"}),(0,r.jsxs)("ul",{className:"m-0",children:[(0,r.jsx)("li",{children:"DIGIDES"}),(0,r.jsx)("li",{children:"Tokopedia"}),(0,r.jsx)("li",{children:"Grab/Gojek"})]})]}),(0,r.jsxs)("a",{href:e.map,target:"_blank",rel:"noreferrer",className:"small",children:[(0,r.jsx)("i",{className:"fa-sharp fa-solid fa-diamond-turn-right"}),"\xa0 Petunjuk Arah"]})]})})]})})},a)}))}),(0,r.jsx)(m(),{className:"pagination justify-content-center",nextLabel:"Next >",onPageChange:function(e){var t=9*e.selected%a.list_umkm.length;j(t)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:u,previousLabel:"< Previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})}t(9086);var p=t(7334);function x(e){return(0,r.jsx)("option",{value:"1",children:e.listkec})}function f(e){return(0,r.jsx)("option",{value:"1",children:e.listdesa})}var j=function(){var e=(0,n.useState)(!1),a=(0,s.Z)(e,2),t=a[0],i=a[1],u=(0,n.useState)(),m=(0,s.Z)(u,2),j=m[0],v=m[1],k=(0,n.useState)([]),y=(0,s.Z)(k,2),g=y[0],N=y[1],b=(0,n.useState)([]),_=(0,s.Z)(b,2),w=_[0],S=_[1],M=(0,n.useState)(),D=(0,s.Z)(M,2),L=D[0],A=D[1];return(0,n.useEffect)((function(){i(!0),o.Z.get("https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/umkm?k3=&k4=&search=&type=&limit=").then((function(e){var a=e.data.data;v(a),N(a.list_kecamatan),S(a.list_desa),A(a.last_updated)})).catch((function(e){alert(e.message)})).finally((function(){return i(!1)})),document.title="UMKM | PENDEKAR"}),[]),t?(0,r.jsx)(d.default,{}):(0,r.jsx)(n.Fragment,{children:(0,r.jsxs)("main",{id:"main",className:"main",children:[(0,r.jsx)("div",{className:"pagetitle mt-3 mb-5",children:(0,r.jsx)("h1",{children:"UMKM"})}),(0,r.jsx)("div",{className:"filter-update",children:(0,r.jsx)("h5",{children:(0,r.jsxs)("span",{className:"badge bg-update py-3",children:["Last Update : ",(0,p.Ai)(L)]})})}),(0,r.jsx)("section",{className:"section dashboard",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:j&&(0,r.jsx)(c,{resultData:j})}),(0,r.jsx)("div",{className:"col-md-6",children:j&&(0,r.jsx)(l,{resultData:j})}),(0,r.jsxs)("div",{className:"col-lg-12",children:[(0,r.jsx)("h5",{className:"card-title-potensi pb-0",children:"PRODUK UMKM DESA/KELURAHAN"}),(0,r.jsxs)("div",{className:"row g-1 mb-4",children:[(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("div",{className:"search-produk",children:(0,r.jsxs)("form",{className:"search-form-produk d-flex align-items-center",method:"POST",action:"/",children:[(0,r.jsx)("input",{type:"text",name:"query",placeholder:"Cari produk...",title:"Enter search keyword"}),(0,r.jsx)("button",{type:"submit",title:"Search",children:(0,r.jsx)("i",{className:"bi bi-search"})})]})})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"DEFAULT",children:"Kecamatan"}),g.map((function(e){return(0,r.jsx)(x,{listkec:e.nama_kecamatan},e.kode_wilayah)}))]})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"DEFAULT",children:"Desa"}),w.map((function(e){return(0,r.jsx)(f,{listdesa:e.nama_deskel},e.kode_wilayah)}))]})}),(0,r.jsx)("div",{className:"col-3",children:(0,r.jsx)("select",{defaultValue:"DEFAULT",className:"form-select","aria-label":"Default select example",children:(0,r.jsx)("option",{value:"DEFAULT",children:"Jenis Usaha"})})})]}),j&&(0,r.jsx)(h,{resultData:j})]})]})})]})})}},2346:function(e,a,t){t.r(a),t.d(a,{default:function(){return n}});t(2791);var s=t(184);function n(){return(0,s.jsx)("div",{className:"spinner-container",children:(0,s.jsx)("div",{className:"loading-spinner"})})}},9086:function(e,a,t){var s=window.location.hostname.split(".")[0];"https://".concat(s,".pendekar.digitaldesa.id/api/")},7334:function(e,a,t){t.d(a,{Ai:function(){return i},aM:function(){return o},c$:function(){return n},zD:function(){return c}});var s=function(e,a,t){return null==e?"":e.substring(a,a+t)},n=function(e){return"0000-00-00"==e?"-":s(e,8,2)+" "+l(s(e,5,2))+" "+s(e,0,4)},i=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("-"==s(e,2,1)){var t=s(e,0,2),n=s(e,3,2);return s(e,6,4)+"-"+n+"-"+t}if("-"==s(e,4,1)){var i=s(e,0,4),c=s(e,5,2),o=s(e,8,2),d=s(e,11,8);return a?o+" "+l(c)+" "+i+", "+r(d):o+"-"+c+"-"+i}},r=function(e){var a=s(e,0,2),t="PM";return a<12?(t="AM",0==a&&(a=12)):12!=a&&(a-=12),a+":"+s(e,3,2)+" "+t},l=function(e){return 1==parseInt(e)?"Januari":2==parseInt(e)?"Februari":3==parseInt(e)?"Maret":4==parseInt(e)?"April":5==parseInt(e)?"Mei":6==parseInt(e)?"Juni":7==parseInt(e)?"Juli":8==parseInt(e)?"Agustus":9==parseInt(e)?"September":10==parseInt(e)?"Oktober":11==parseInt(e)?"November":12==parseInt(e)?"Desember":e},c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a?a+" "+parseInt(e).formatMoney(0,".",","):"Rp"+parseInt(e).formatMoney(0,",",".")+",-"};Number.prototype.formatMoney=function(e,a,t){var s=this,n=(e=isNaN(e=Math.abs(e))?2:e,a=void 0==a?".":a,t=void 0==t?",":t,s<0?"-":""),i=String(parseInt(s=Math.abs(Number(s)||0).toFixed(e))),r=(r=i.length)>3?r%3:0;return n+(r?i.substr(0,r)+t:"")+i.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+t)+(e?a+Math.abs(s-i).toFixed(e).slice(2):"")};var o=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}]);
//# sourceMappingURL=988.ddd803f8.chunk.js.map