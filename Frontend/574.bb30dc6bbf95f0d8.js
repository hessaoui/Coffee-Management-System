"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[574],{4574:(O,i,o)=>{o.r(i),o.d(i,{DashboardModule:()=>Z});var s=o(1896),d=o(6814),l=o(1447),c=o(9688),t=o(9212),g=o(553),h=o(9862);let u=(()=>{class n{constructor(a){this.httpClient=a,this.url=g.N.apiUrl}getDetails(){return this.httpClient.get(this.url+"/dashboard/details/")}static#t=this.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=o(9917),v=o(3712),b=o(5195);const f=()=>["/cafe/category"],m=()=>["/cafe/product"],C=()=>["/cafe/bill"],x=[{path:"",component:(()=>{class n{ngAfterViewInit(){this.dashboardData()}constructor(a,e,r){this.dashboardService=a,this.ngxService=e,this.snackBarService=r,this.ngxService.start(),this.dashboardData()}dashboardData(){this.dashboardService.getDetails().subscribe(a=>{this.ngxService.stop(),this.data=a},a=>{this.ngxService.stop(),console.log(a),this.responseMessage=a.error?.message?a.error?.message:c.t.genericError,this.snackBarService.openSnackBar(this.responseMessage,c.t.error)})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(p.LA),t.Y36(v.o))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:37,vars:9,consts:[[1,"row"],[1,"column"],[1,"card"],[1,"container"],[1,"title"],[1,"button",3,"routerLink"]],template:function(e,r){1&e&&(t.TgZ(0,"body")(1,"mat-card")(2,"b")(3,"span"),t._uU(4,"Dashboard"),t.qZA()()(),t._UZ(5,"br"),t.TgZ(6,"div",0)(7,"div",1)(8,"div",2)(9,"div",3)(10,"h2",4),t._uU(11,"Total Category:"),t.qZA(),t.TgZ(12,"h1",4),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"button",5),t._uU(16,"View Category"),t.qZA()()()()(),t.TgZ(17,"div",1)(18,"div",2)(19,"div",3)(20,"h2",4),t._uU(21,"Total Product:"),t.qZA(),t.TgZ(22,"h1",4),t._uU(23),t.qZA(),t.TgZ(24,"p")(25,"button",5),t._uU(26,"View Product"),t.qZA()()()()(),t.TgZ(27,"div",1)(28,"div",2)(29,"div",3)(30,"h2",4),t._uU(31,"Total Bill:"),t.qZA(),t.TgZ(32,"h1",4),t._uU(33),t.qZA(),t.TgZ(34,"p")(35,"button",5),t._uU(36,"View Bill"),t.qZA()()()()()()()),2&e&&(t.xp6(13),t.Oqu(null==r.data?null:r.data.category),t.xp6(2),t.Q6J("routerLink",t.DdM(6,f)),t.xp6(8),t.Oqu(null==r.data?null:r.data.product),t.xp6(2),t.Q6J("routerLink",t.DdM(7,m)),t.xp6(8),t.Oqu(null==r.data?null:r.data.bill),t.xp6(2),t.Q6J("routerLink",t.DdM(8,C)))},dependencies:[b.a8,s.rH],styles:['.position-relative[_ngcontent-%COMP%]{position:relative}.add-contact[_ngcontent-%COMP%]{position:absolute;right:17px;top:57px}body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;margin:0}html[_ngcontent-%COMP%]{box-sizing:border-box}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit}.column[_ngcontent-%COMP%]{float:left;width:33.3%;margin-bottom:16px;padding:0 8px}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;margin:8px}.about-section[_ngcontent-%COMP%]{padding:50px;text-align:center;background-color:#474e5d;color:#fff}.container[_ngcontent-%COMP%]{padding:0 16px}.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after{content:"";clear:both;display:table}.title[_ngcontent-%COMP%]{color:#000;text-align:center!important}.button[_ngcontent-%COMP%]{border:none;outline:0;display:inline-block;padding:8px;color:#fff;background-color:#e53935;text-align:center;cursor:pointer;width:100%;font-weight:700}.button[_ngcontent-%COMP%]:hover{background-color:#555}@media screen and (max-width: 650px){.column[_ngcontent-%COMP%]{width:100%;display:block}}']})}return n})()}];var M=o(6624);let Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[d.ez,M.q,l.o9,s.Bz.forChild(x)]})}return n})()}}]);