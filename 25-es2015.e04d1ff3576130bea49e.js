(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{LYtl:function(t,e,s){"use strict";s.r(e);var a=s("ofXK"),o=s("tyNb"),r=s("fVr5"),i=s("xHAC"),n=s("3Pt+"),c=s("cxbk"),l=s("fXoL");class b{constructor(){this.lista=[]}additem(t,e,s,a,o,r,i,n,c,l){this.lista.push({IDUsuario:t,Nombre:e,Apellidos:s,Visible:a,Tipo_Usuario:o,IDEmpresa:r,Correo:i,Imagen:n,Status:c,Puesto:l})}busquedapalabra(t){return this.lista.filter(e=>e.Nombre.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}getLista(){return this.lista}clearlist(){this.lista=[]}GetMarca(t){console.log(this.lista,t);let e=[];return this.lista.forEach(s=>{t!==s.IDUsuario||(e=s)}),e}}var u=s("cnrE");function d(t,e){if(1&t){const t=l.Vb();l.Ub(0,"span",29),l.gc("click",(function(){l.yc(t);const e=l.jc().$implicit;return l.jc().ngMaster(e.IDUsuario)})),l.Ub(1,"span",11),l.Gc(2," start "),l.Tb(),l.Tb()}}function m(t,e){if(1&t){const t=l.Vb();l.Ub(0,"div",16),l.Ub(1,"div",17),l.Ub(2,"div",6),l.Ub(3,"div",18),l.Qb(4,"img",19),l.Tb(),l.Ub(5,"div",20),l.Ub(6,"div",21),l.Gc(7),l.Tb(),l.Tb(),l.Ub(8,"div",22),l.Ub(9,"div",23),l.Gc(10,"Correo Electr\xf3nico"),l.Tb(),l.Ub(11,"div",24),l.Gc(12),l.Tb(),l.Tb(),l.Ub(13,"div",25),l.Ub(14,"div",23),l.Gc(15,"Puesto"),l.Tb(),l.Ub(16,"div",26),l.Gc(17),l.Tb(),l.Tb(),l.Ub(18,"div",27),l.Ec(19,d,3,0,"span",28),l.Ub(20,"span",29),l.gc("click",(function(){l.yc(t);const s=e.$implicit;return l.jc().ngEdit(s.IDUsuario)})),l.Ub(21,"span",11),l.Gc(22," edit "),l.Tb(),l.Tb(),l.Ub(23,"span",30),l.gc("click",(function(){l.yc(t);const s=e.$implicit;return l.jc().ngDelete(s.IDUsuario,s.Status)})),l.Ub(24,"span",11),l.Gc(25," delete "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()}if(2&t){const t=e.$implicit,s=l.jc();l.Bb(4),l.oc("src",s.dameLogo(t.Imagen),l.zc),l.Bb(3),l.Jc("",t.Nombre," ",t.Apellidos,""),l.Bb(5),l.Hc(t.Correo),l.Bb(5),l.Hc(t.Puesto),l.Bb(2),l.oc("ngIf",""===t.Tipo_Usuario)}}let p=(()=>{class t{constructor(t,e,s){this.http_services=t,this.http=e,this.serviceCookie=s,this.data_user=[],this.palabra="",this.List_usuarios=new b,this.lista_usuarios=[],this.data_company=[],this.token="",this.data_user=JSON.parse(this.serviceCookie.getCokie("data_user")),this.http.NewMarca$.subscribe(t=>{this.ngGetall()}),this.data_company=this.serviceCookie.getCokie("data_company"),this.token=this.serviceCookie.getCokie("token")}ngOnInit(){this.ngGetall()}ngGetall(){this.List_usuarios.clearlist(),this.http.service_getall({IDEmpresa:this.data_company.IDEmpresa,token:this.token}).subscribe(t=>{t.result.forEach(t=>{this.List_usuarios.additem(t.IDUsuario,t.Nombre,t.Apellidos,t.Visible,t.Tipo_Usuario,t.IDEmpresa,t.Correo,t.Imagen,t.Status,t.Puesto)}),this.lista_usuarios=this.List_usuarios.getLista(),console.log(t)},t=>{this.http_services.preloadEvent$.emit(!1),alert("algo paso "+t.message+" Status: "+t.status),console.log(t)},()=>this.http_services.preloadEvent$.emit(!1))}dameLogo(t){return""===t||null===t||"null"===t?"/assets/img/foto-no-disponible.jpg":c.a.url_serve+"assets/img/logosUsuarios/"+t}buscar(){this.lista_usuarios=this.List_usuarios.busquedapalabra(this.palabra)}ngEdit(t){if(""===this.data_user.Tipo_Usuario)return void alert("Solo el usuario Master puede hacer esta accion.");const e=this.List_usuarios.GetMarca(t);this.http.dataMarca$.emit(e)}ngDelete(t,e){""!==this.data_user.Tipo_Usuario?this.http.ngDelete({IDEmpresa:this.data_company.IDEmpresa,token:this.token,IDUsuario:t,Status:e="1"===e?"0":"1"}).subscribe(t=>{console.log(t),this.ngGetall()},t=>{this.http_services.preloadEvent$.emit(!1),alert("algo paso "+t.message+" Status: "+t.status),console.log(t)},()=>this.http_services.preloadEvent$.emit(!1)):alert("Solo el usuario Master puede hacer esta accion.")}ngMaster(t){""!==this.data_user.Tipo_Usuario?confirm("Esta seguro de cambiar el usuario master")&&this.http.ngMaster({IDEmpresa:this.data_company.IDEmpresa,token:this.token,IDUsuario:t}).subscribe(t=>{this.ngGetall()},t=>{this.http_services.preloadEvent$.emit(!1),alert("algo paso "+t.message+" Status: "+t.status),console.log(t)},()=>this.http_services.preloadEvent$.emit(!1)):alert("Solo el usuario Master puede hacer esta accion.")}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(u.a),l.Pb(r.a),l.Pb(i.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-list"]],decls:20,vars:2,consts:[[1,"container-fluid","bg-white"],[1,"container"],[1,"row","p-t-40","mb-3"],[1,"col-12","text-uppercase","d-flex","align-content-center"],[1,"cuadro-bineta","mr-3"],[1,"subtitle"],[1,"row"],[1,"form-group","col-12","barr-search"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["id","basic-addon2",1,"input-group-text","text-muted","left"],[1,"material-icons"],["placeholder","Buscar usuarios registrados","type","text",1,"form-control",3,"ngModel","ngModelChange","keyup"],["id","basic-addon1",1,"input-group-text","text-azulcielo","bg-white","right"],["src","/assets/icons/AMY_SearchArrow_Active_Blue.svg","alt","",1,"m-l-20"],["class","col-3 card-data ",4,"ngFor","ngForOf"],[1,"col-3","card-data"],[1,"card","container-fluid","giro_principal"],[1,"col-12"],["alt","",1,"logo-marca",3,"src"],[1,"col-12","m-t-20"],[1,"titulo"],[1,"col-12","mt-3","m-b-25"],[1,"small"],[1,"fecha","text-bold"],[1,"col-12","m-b-25"],[1,"fecha"],[1,"col-12","btn-rigth","m-t-20"],["class","bt-rodn mr-2",3,"click",4,"ngIf"],[1,"bt-rodn","mr-2",3,"click"],[1,"bt-rodn",3,"click"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"div",3),l.Qb(4,"div",4),l.Ub(5,"p",5),l.Gc(6,"Consultar usuarios"),l.Tb(),l.Tb(),l.Tb(),l.Ub(7,"div",6),l.Ub(8,"div",7),l.Ub(9,"div",8),l.Ub(10,"div",9),l.Ub(11,"span",10),l.Ub(12,"span",11),l.Gc(13," search "),l.Tb(),l.Tb(),l.Tb(),l.Ub(14,"input",12),l.gc("ngModelChange",(function(t){return e.palabra=t}))("keyup",(function(){return e.buscar()})),l.Tb(),l.Ub(15,"div",9),l.Ub(16,"span",13),l.Gc(17,"Buscar "),l.Qb(18,"img",14),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ec(19,m,26,6,"div",15),l.Tb(),l.Tb(),l.Tb()),2&t&&(l.Bb(14),l.oc("ngModel",e.palabra),l.Bb(5),l.oc("ngForOf",e.lista_usuarios))},directives:[n.b,n.m,n.p,a.k,a.l],styles:[".logo-marca[_ngcontent-%COMP%]{width:45px;height:45px;-o-object-fit:cover;object-fit:cover}.material-icons[_ngcontent-%COMP%]{width:19px}"]}),t})();var g=s("b6Qw");function h(t,e){if(1&t&&(l.Ub(0,"div",16),l.Ub(1,"div",17),l.Ub(2,"div",1),l.Ub(3,"div",18),l.Ub(4,"span",19),l.Gc(5," error "),l.Tb(),l.Tb(),l.Ub(6,"div",20),l.Gc(7),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&t){const t=l.jc();l.Bb(7),l.Ic(" ",t.text_alert," ")}}function f(t,e){1&t&&(l.Ub(0,"small",7),l.Gc(1,"Este campo es necesario"),l.Tb())}function _(t,e){1&t&&(l.Ub(0,"small",7),l.Gc(1,"Este campo es necesario"),l.Tb())}function v(t,e){1&t&&(l.Ub(0,"small",7),l.Gc(1,"Este campo es necesario"),l.Tb())}const U=function(t){return{"is-invalid":t}};let T=(()=>{class t{constructor(t,e,s){this.http=t,this.serviceCoooki=e,this.form_build=s,this.token="",this.data_company=[],this.data_user=[],this.submitted_pass=!1,this.ivalid=!1,this.text_alert="Algunos de los campos parecen incompletos. Por favor revisalos y revisa la informaci\xf3n correspondiente.",this.data_user=JSON.parse(this.serviceCoooki.get("data_user")),this.data_company=JSON.parse(this.serviceCoooki.get("data_company")),this.token=this.serviceCoooki.get("token"),this.form_data_pass=this.form_build.group({IDUsuario:[this.data_user.IDUsuario],IDEmpresa:[this.data_user.IDEmpresa],token:[this.token],ClaveAnterior:["",n.v.required],ClaveNueva:["",n.v.required],RepetirClave:["",n.v.required]})}get obtener_form(){return this.form_data_pass.controls}ngOnInit(){}ngUpdatePass(){if(console.log(this.form_data_pass.valid),this.form_data_pass.valid){if(this.obtener_form.ClaveNueva.value!==this.obtener_form.RepetirClave.value)return this.ivalid=!0,this.submitted_pass=!0,void(this.text_alert="Algunos de los campos parecen incompletos. Las contrase\xf1as no coinciden.");this.ivalid=!1,this.submitted_pass=!1,this.http.ngUpdatePass(this.form_data_pass.value).subscribe(t=>{alert("Constrase\xf1a Actualizada, Se Recomienda cerrar sesion e inicar nuevamente para actualizar los datos"),console.log(t)},t=>{if(500===t.status){if(1995===t.error.code||1992===t.error.code||1990===t.error.code)return this.ivalid=!0,void(this.text_alert="Algunos de los campos parecen incompletos."+t.error.result);this.ivalid=!0,this.text_alert="Algunos de los campos parecen incompletos. Error al cargar los datos."}})}else this.ivalid=!0,this.submitted_pass=!0}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(r.a),l.Pb(g.a),l.Pb(n.c))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-form-password"]],decls:32,vars:14,consts:[[1,"container"],[1,"row"],["class"," col-12 ",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row","m-t-30","m-b-30"],[1,"form-group","col-4"],["for","razon_social"],[1,"text-red-t-danger"],["formControlName","ClaveAnterior","type","password",1,"form-control",3,"ngClass"],["class","text-red-t-danger",4,"ngIf"],["formControlName","ClaveNueva","type","password",1,"form-control",3,"ngClass"],["formControlName","RepetirClave","type","password",1,"form-control",3,"ngClass"],[1,"col-12","text-left"],[1,"btn-group"],["type","submit",1,"btn","btn-azulcielo","mr-3"],["type","reset",1,"btn","btn-outline-azulcielo"],[1,"col-12"],[1,"card","p-15","m-t-30","d-flex","justify-content-center","alert-card"],[1,"col-1","text-center"],[1,"material-icons"],[1,"col-10"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ec(2,h,8,1,"div",2),l.Tb(),l.Tb(),l.Ub(3,"form",3),l.gc("ngSubmit",(function(){return e.ngUpdatePass()})),l.Ub(4,"div",4),l.Ub(5,"div",5),l.Ub(6,"label",6),l.Gc(7,"Contrase\xf1a Actual "),l.Ub(8,"span",7),l.Gc(9,"*"),l.Tb(),l.Tb(),l.Qb(10,"input",8),l.Ec(11,f,2,0,"small",9),l.Tb(),l.Ub(12,"div",5),l.Ub(13,"label",6),l.Gc(14,"Nueva contrase\xf1a"),l.Ub(15,"span",7),l.Gc(16,"*"),l.Tb(),l.Tb(),l.Qb(17,"input",10),l.Ec(18,_,2,0,"small",9),l.Tb(),l.Ub(19,"div",5),l.Ub(20,"label",6),l.Gc(21,"Repetir contrase\xf1a "),l.Ub(22,"span",7),l.Gc(23,"*"),l.Tb(),l.Tb(),l.Qb(24,"input",11),l.Ec(25,v,2,0,"small",9),l.Tb(),l.Ub(26,"div",12),l.Ub(27,"div",13),l.Ub(28,"button",14),l.Gc(29,"Guardar"),l.Tb(),l.Ub(30,"button",15),l.Gc(31,"Cancelar"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&t&&(l.Bb(2),l.oc("ngIf",e.ivalid),l.Bb(1),l.oc("formGroup",e.form_data_pass),l.Bb(7),l.oc("ngClass",l.sc(8,U,e.submitted_pass&&e.obtener_form.ClaveAnterior.errors)),l.Bb(1),l.oc("ngIf",e.submitted_pass&&e.obtener_form.ClaveAnterior.errors),l.Bb(6),l.oc("ngClass",l.sc(10,U,e.submitted_pass&&e.obtener_form.ClaveNueva.errors)),l.Bb(1),l.oc("ngIf",e.submitted_pass&&e.obtener_form.ClaveNueva.errors),l.Bb(6),l.oc("ngClass",l.sc(12,U,e.submitted_pass&&e.obtener_form.RepetirClave.errors)),l.Bb(1),l.oc("ngIf",e.submitted_pass&&e.obtener_form.RepetirClave.errors))},directives:[a.l,n.x,n.n,n.g,n.b,n.m,n.e,a.j],styles:[""]}),t})();function C(t,e){1&t&&(l.Ub(0,"small",6),l.Gc(1,"Este campo es necesario"),l.Tb())}function G(t,e){1&t&&(l.Ub(0,"small",6),l.Gc(1,"Este campo es necesario"),l.Tb())}function I(t,e){1&t&&(l.Ub(0,"small",6),l.Gc(1,"Este campo es necesario"),l.Tb())}function k(t,e){1&t&&(l.Ub(0,"small",6),l.Gc(1,"Este campo es necesario"),l.Tb())}function E(t,e){1&t&&(l.Ub(0,"div",4),l.Ub(1,"div",13),l.Qb(2,"div",14),l.Ub(3,"span",15),l.Gc(4,"Cambio de contrase\xf1a"),l.Tb(),l.Tb(),l.Qb(5,"app-form-password"),l.Tb())}const y=function(t){return{"is-invalid":t}},w=function(t,e){return{"btn-outline-azulcielo":t,"btn-azulcielo":e}},x=[{path:"",component:(()=>{class t{constructor(t,e,s){this.http=t,this.serviceCoooki=e,this.form_build=s,this.data_user=[],this.form_cambio_contrasena=!1,this.data_company=[],this.token="",this.filemarcalogo=null,this.submitted=!1,this.data_user=this.serviceCoooki.getCokie("data_user"),this.data_company=this.serviceCoooki.getCokie("data_company"),this.token=this.serviceCoooki.getCokie("token"),this.http.dataMarca$.subscribe(t=>{this.ngEditForm(t)}),this.form_data=this.form_build.group({IDEmpresa:[""],Nombre:["",n.v.required],Apellidos:["",n.v.required],Status:[""],Puesto:["",n.v.required],Visible:[""],Correo:["",n.v.required],IDUsuario:[""],Imagen:[""],Tipo_Usuario:[""]}),this.verificar_logo("")}get form_data_get(){return this.form_data.controls}ngOnInit(){}verificar_logo(t){this.logitomarca=""===t||null===t||"null"===t?"/assets/img/foto-no-disponible.jpg":c.a.url_serve+"assets/img/logosUsuarios/"+t}preview(t){if(0===t.length)return;if(null==t[0].type.match(/image\/*/))return void alert("Only images are supported.");this.filemarcalogo=t[0];const e=new FileReader;e.readAsDataURL(t[0]),e.onload=t=>{this.logitomarca=e.result}}ngEditForm(t){console.log(t),this.form_data_get.Nombre.setValue(t.Nombre),this.form_data_get.Apellidos.setValue(t.Apellidos),this.form_data_get.Status.setValue(t.Status),this.form_data_get.Puesto.setValue(t.Puesto),this.form_data_get.Visible.setValue(t.Visible),this.form_data_get.Correo.setValue(t.Correo),this.form_data_get.IDUsuario.setValue(t.IDUsuario),this.form_data_get.Imagen.setValue(t.Imagen),this.verificar_logo(t.Imagen)}ngUpdate(t){""!==this.data_user.Tipo_Usuario?(this.http.ngUpdate(t).subscribe(t=>{alert("Usuario Actualizado"),console.log(t),this.form_data.reset(),this.http.NewMarca$.emit(!0)},t=>{if(500===t.status){if(1995===t.error.code||1992===t.error.code||1990===t.error.code)return void alert(t.error.result);alert("Error al cargar los datos"),console.log(t)}}),console.log(this.data_user)):alert("Solo el usuario Master puede hacer esta accion.")}ngSave(t){""!==this.data_user.Tipo_Usuario?this.http.ngadd(t).subscribe(t=>{console.log(t),alert("Nuevo usuario agregado"),this.form_data.reset(),this.http.NewMarca$.emit(!0)},t=>{alert("Existe un error al guardar"),console.log(t)}):alert("Solo el usuario Master puede hacer esta accion.")}ngSelect(){if(this.form_data.valid){this.submitted=!1;const t=new FormData;t.append("IDUsuario",this.form_data_get.IDUsuario.value),t.append("Nombre",this.form_data_get.Nombre.value),t.append("Apellidos",this.form_data_get.Apellidos.value),t.append("Status",this.form_data_get.Status.value),t.append("Puesto",this.form_data_get.Puesto.value),t.append("Visible",this.form_data_get.Visible.value),t.append("Correo",this.form_data_get.Correo.value),t.append("IDEmpresa",this.data_company.IDEmpresa),t.append("Imagen",this.form_data_get.Imagen.value),t.append("Archivo",this.filemarcalogo),t.append("token",this.token),""===this.form_data_get.IDUsuario.value?this.ngSave(t):this.ngUpdate(t)}else this.submitted=!0}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(r.a),l.Pb(i.a),l.Pb(n.c))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-form"]],decls:78,vars:23,consts:[[1,"container"],[1,"row","m-t-30","m-b-40"],[1,"col-12","titulos","m-b-30"],[1,"col-3","text-work"],[1,"row"],[1,"col-12","m-t-50","tit-card-img"],[1,"text-red-t-danger"],[1,"card","card-logo"],["alt","",3,"src","click"],["accept","image/gif, image/jpeg, image/png","type","file",1,"d-none",3,"change"],["logo",""],[1,"col-12","text-muted","instr-card","p-0"],[1,"col-9","text-work"],[1,"col-12","text-uppercase","d-flex","align-content-center"],[1,"cuadro-bineta","mr-3"],[1,"subtitle"],[3,"formGroup","ngSubmit"],[1,"row","m-b-30"],[1,"form-group","col-12"],["for","razon_social"],["formControlName","Nombre","type","text",1,"form-control",3,"ngClass"],["class","text-red-t-danger",4,"ngIf"],[1,"form-group","col-6"],["formControlName","Apellidos","type","text",1,"form-control",3,"ngClass"],["formControlName","Correo","type","text",1,"form-control",3,"ngClass"],["formControlName","Puesto","type","text",1,"form-control",3,"ngClass"],["formControlName","Visible",1,"form-control"],["value","1"],["value","0"],[1,"col-12","text-left"],[1,"btn-group"],["type","submit",1,"btn","btn-azulcielo","mr-3"],["type","reset",1,"btn","btn-outline-azulcielo"],[1,"col-12","m-t-30"],[1,"row","p-l-10","p-r-10"],[1,"col-12","btn",3,"ngClass","click"],["class","row",4,"ngIf"]],template:function(t,e){if(1&t){const t=l.Vb();l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Gc(3," Usuarios "),l.Tb(),l.Ub(4,"div",3),l.Ub(5,"div",4),l.Ub(6,"div",5),l.Gc(7," Cargar Imagen Principal "),l.Ub(8,"span",6),l.Gc(9,"*"),l.Tb(),l.Tb(),l.Ub(10,"div",7),l.Ub(11,"img",8),l.gc("click",(function(){return l.yc(t),l.wc(13).click()})),l.Tb(),l.Ub(12,"input",9,10),l.gc("change",(function(){l.yc(t);const s=l.wc(13);return e.preview(s.files)})),l.Tb(),l.Tb(),l.Ub(14,"div",11),l.Ub(15,"small"),l.Gc(16,"Tu imagen debe tener un tama\xf1o minimo de 260px x 260px (1Mb)."),l.Tb(),l.Qb(17,"br"),l.Ub(18,"small"),l.Gc(19,"Formatos permitidos JPEG, PNG y SVG."),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(20,"div",12),l.Ub(21,"div",4),l.Ub(22,"div",13),l.Qb(23,"div",14),l.Ub(24,"span",15),l.Gc(25,"Mis Datos"),l.Tb(),l.Tb(),l.Tb(),l.Ub(26,"form",16),l.gc("ngSubmit",(function(){return e.ngSelect()})),l.Ub(27,"div",17),l.Ub(28,"div",18),l.Ub(29,"label",19),l.Gc(30,"Nombres(S) del usuario "),l.Ub(31,"span",6),l.Gc(32,"*"),l.Tb(),l.Tb(),l.Qb(33,"input",20),l.Ec(34,C,2,0,"small",21),l.Tb(),l.Ub(35,"div",22),l.Ub(36,"label",19),l.Gc(37,"Apellidos "),l.Ub(38,"span",6),l.Gc(39,"*"),l.Tb(),l.Tb(),l.Qb(40,"input",23),l.Ec(41,G,2,0,"small",21),l.Tb(),l.Ub(42,"div",22),l.Ub(43,"label",19),l.Gc(44,"Correo Electr\xf3nico "),l.Ub(45,"span",6),l.Gc(46,"*"),l.Tb(),l.Tb(),l.Qb(47,"input",24),l.Ec(48,I,2,0,"small",21),l.Tb(),l.Ub(49,"div",22),l.Ub(50,"label",19),l.Gc(51,"Puesto "),l.Ub(52,"span",6),l.Gc(53,"*"),l.Tb(),l.Tb(),l.Qb(54,"input",25),l.Ec(55,k,2,0,"small",21),l.Tb(),l.Ub(56,"div",22),l.Ub(57,"label",19),l.Gc(58,"Visible "),l.Ub(59,"span",6),l.Gc(60,"*"),l.Tb(),l.Tb(),l.Ub(61,"select",26),l.Ub(62,"option",27),l.Gc(63,"Visible"),l.Tb(),l.Ub(64,"option",28),l.Gc(65,"No Visible"),l.Tb(),l.Tb(),l.Tb(),l.Ub(66,"div",29),l.Ub(67,"div",30),l.Ub(68,"button",31),l.Gc(69,"Guardar"),l.Tb(),l.Ub(70,"button",32),l.Gc(71,"Cancelar"),l.Tb(),l.Tb(),l.Tb(),l.Ub(72,"div",33),l.Ub(73,"div",34),l.Ub(74,"div",35),l.gc("click",(function(){return e.form_cambio_contrasena=!e.form_cambio_contrasena})),l.Gc(75," Cambiar Contrase\xf1a "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ec(76,E,6,0,"div",36),l.Tb(),l.Tb(),l.Tb(),l.Qb(77,"app-list")}2&t&&(l.Bb(11),l.oc("src",e.logitomarca,l.zc),l.Bb(15),l.oc("formGroup",e.form_data),l.Bb(7),l.oc("ngClass",l.sc(12,y,e.submitted&&e.form_data_get.Nombre.errors)),l.Bb(1),l.oc("ngIf",e.submitted&&e.form_data_get.Nombre.errors),l.Bb(6),l.oc("ngClass",l.sc(14,y,e.submitted&&e.form_data_get.Apellidos.errors)),l.Bb(1),l.oc("ngIf",e.submitted&&e.form_data_get.Apellidos.errors),l.Bb(6),l.oc("ngClass",l.sc(16,y,e.submitted&&e.form_data_get.Correo.errors)),l.Bb(1),l.oc("ngIf",e.submitted&&e.form_data_get.Correo.errors),l.Bb(6),l.oc("ngClass",l.sc(18,y,e.submitted&&e.form_data_get.Puesto.errors)),l.Bb(1),l.oc("ngIf",e.submitted&&e.form_data_get.Puesto.errors),l.Bb(19),l.oc("ngClass",l.tc(20,w,e.form_cambio_contrasena,!e.form_cambio_contrasena)),l.Bb(2),l.oc("ngIf",e.form_cambio_contrasena))},directives:[n.x,n.n,n.g,n.b,n.m,n.e,a.j,a.l,n.u,n.q,n.w,p,T],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(x)],o.f]}),t})();s.d(e,"ProfileUserModule",(function(){return D}));let D=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[a.c,N,n.i,n.t]]}),t})()}}]);