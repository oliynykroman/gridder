(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gjz2:function(t,n,r){"use strict";r.r(n);var e=r("Valr"),o=r("DUip"),i=r("TYT/"),c=function(){return function(){}}(),a=function(){return function(t,n,r,e,o,i,c){this.col=t,this.row=n,this.name=r,this.colIeStart=e,this.colIeEnd=i,this.rowIeStart=o,this.rowIeEnd=c}}(),l=r("MnXN"),s=r("QJY3"),d=r("K9Ia"),g=function(){function t(){this.changeGrid=new d.a,this.changeGrid$=this.changeGrid.asObservable()}return t.prototype.updateGrid=function(t){this.changeGrid.next(t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}();function p(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function b(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function m(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function u(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function f(t,n){1&t&&(i.Rb(0,"div",25),i.Bc(1," Not all functions can be reproduced. "),i.Nb(2,"br"),i.Bc(3,"Cells should be placed manually. "),i.Nb(4,"br"),i.Bc(5,"Example grid are basic "),i.Qb())}function h(t,n){if(1&t&&(i.Rb(0,"div",7),i.Rb(1,"label",8),i.Bc(2,"Column gap"),i.Qb(),i.Nb(3,"input",9),i.Rb(4,"select",10),i.zc(5,p,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(6,"div",12),i.Rb(7,"label",13),i.Bc(8,"Row gap"),i.Qb(),i.Nb(9,"input",14),i.Rb(10,"select",10),i.zc(11,b,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(12,"div",15),i.Rb(13,"div",16),i.Rb(14,"label",17),i.Bc(15,"Align Items"),i.Qb(),i.Rb(16,"select",18),i.zc(17,m,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(18,"div",16),i.Rb(19,"label",17),i.Bc(20,"Justify Items"),i.Qb(),i.Rb(21,"select",19),i.zc(22,u,2,2,"option",11),i.Qb(),i.Qb(),i.Qb(),i.Rb(23,"div",20),i.Nb(24,"input",21),i.Rb(25,"label",22),i.Bc(26,"Generate grid for IE10+"),i.Qb(),i.Qb(),i.zc(27,f,6,0,"div",23)),2&t){var r=i.fc();i.zb(5),i.kc("ngForOf",r.unitsGap),i.zb(6),i.kc("ngForOf",r.unitsGap),i.zb(6),i.kc("ngForOf",r.alignement),i.zb(5),i.kc("ngForOf",r.alignement),i.zb(5),i.kc("ngIf",r.ieStatus)}}function w(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function C(t,n){if(1&t){var r=i.Sb();i.Rb(0,"div",30),i.Rb(1,"div",31),i.Bc(2),i.Qb(),i.Rb(3,"div",32),i.Rb(4,"label"),i.Bc(5,"Column size"),i.Qb(),i.Nb(6,"input",33),i.Rb(7,"select",10),i.zc(8,w,2,2,"option",11),i.Qb(),i.Rb(9,"div",34),i.Rb(10,"button",35),i.dc("click",(function(t){i.tc(r);var e=n.index;return i.fc(2).deleteItem(e,"columns")})),i.Bc(11,"Delete"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){var e=n.index,o=i.fc(2);i.zb(2),i.Dc("Column ",e,""),i.zb(1),i.kc("formGroupName",e),i.zb(5),i.kc("ngForOf",o.units)}}function v(t,n){if(1&t&&(i.Rb(0,"option",24),i.Bc(1),i.Qb()),2&t){var r=n.$implicit;i.kc("value",r),i.zb(1),i.Dc(" ",r," ")}}function y(t,n){if(1&t){var r=i.Sb();i.Rb(0,"div",36),i.Rb(1,"div",31),i.Bc(2),i.Qb(),i.Rb(3,"div",32),i.Rb(4,"label"),i.Bc(5,"Row size"),i.Qb(),i.Nb(6,"input",33),i.Rb(7,"select",10),i.zc(8,v,2,2,"option",11),i.Qb(),i.Rb(9,"div",34),i.Rb(10,"button",35),i.dc("click",(function(t){i.tc(r);var e=n.index;return i.fc(2).deleteItem(e,"rows")})),i.Bc(11,"Delete"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){var e=n.index,o=i.fc(2);i.zb(2),i.Dc("Row ",e,""),i.zb(1),i.kc("formGroupName",e),i.zb(5),i.kc("ngForOf",o.units)}}function R(t,n){if(1&t){var r=i.Sb();i.Rb(0,"div",26),i.zc(1,C,12,3,"div",27),i.Rb(2,"button",28),i.dc("click",(function(t){return i.tc(r),i.fc().addItem("columns")})),i.Bc(3,"Add column"),i.Qb(),i.Qb(),i.Nb(4,"hr"),i.Rb(5,"div",26),i.zc(6,y,12,3,"div",29),i.Rb(7,"button",28),i.dc("click",(function(t){return i.tc(r),i.fc().addItem("rows")})),i.Bc(8,"Add row"),i.Qb(),i.Qb()}if(2&t){var e=i.fc();i.zb(1),i.kc("ngForOf",e.form.get("columns").controls),i.zb(5),i.kc("ngForOf",e.form.get("rows").controls)}}function x(t,n){1&t&&i.Nb(0,"input",48)}function z(t,n){1&t&&i.Nb(0,"input",49)}function I(t,n){1&t&&i.Nb(0,"input",50)}function G(t,n){1&t&&i.Nb(0,"input",51)}function k(t,n){if(1&t){var r=i.Sb();i.Rb(0,"div",38),i.Rb(1,"div",31),i.Bc(2),i.Qb(),i.Rb(3,"div",32),i.Rb(4,"div",6),i.Rb(5,"label"),i.Bc(6,"Cell class name"),i.Qb(),i.Nb(7,"input",39),i.Qb(),i.Rb(8,"div",6),i.Rb(9,"label"),i.Bc(10,"Column grid lines start/end"),i.Qb(),i.Nb(11,"input",40),i.zc(12,x,1,0,"input",41),i.Nb(13,"input",42),i.zc(14,z,1,0,"input",43),i.Qb(),i.Rb(15,"div",6),i.Rb(16,"label"),i.Bc(17,"Row grid lines start/end"),i.Qb(),i.Nb(18,"input",44),i.zc(19,I,1,0,"input",45),i.Nb(20,"input",46),i.zc(21,G,1,0,"input",47),i.Qb(),i.Rb(22,"button",35),i.dc("click",(function(t){i.tc(r);var e=n.index;return i.fc(2).deleteItem(e,"content")})),i.Bc(23,"Delete"),i.Qb(),i.Qb(),i.Qb()}if(2&t){var e=n.index,o=i.fc(2);i.zb(2),i.Dc("Cell ",e,""),i.zb(1),i.kc("formGroupName",e),i.zb(9),i.kc("ngIf",o.ieStatus),i.zb(2),i.kc("ngIf",o.ieStatus),i.zb(5),i.kc("ngIf",o.ieStatus),i.zb(2),i.kc("ngIf",o.ieStatus)}}function M(t,n){if(1&t){var r=i.Sb();i.Rb(0,"div",26),i.zc(1,k,24,6,"div",37),i.Rb(2,"button",28),i.dc("click",(function(t){return i.tc(r),i.fc().addContent("content")})),i.Bc(3,"Add cell"),i.Qb(),i.Qb()}if(2&t){var e=i.fc();i.zb(1),i.kc("ngForOf",e.form.get("content").controls)}}var O=function(){function t(t,n,r){this.fb=t,this.gridService=n,this.units=["px","fr","%"],this.unitsGap=["px","%"],this.alignement=["stretch","center","start","end"],this.columns="",this.rows="",this.content=[],this.panelOpenState=!1,this.ieStatus=!1,this.gridResult=new c,r.closeOthers=!0,r.type="info"}return t.prototype.ngOnInit=function(){this.formInit(),this.onChanges()},t.prototype.formInit=function(){this.form=this.fb.group({columnGap:this.fb.group({width:[0],units:["px"]}),rowGap:this.fb.group({width:[0],units:["px"]}),gridAlignement:this.fb.group({vertical:["stretch"],horizontal:["stretch"]}),columns:this.fb.array([]),rows:this.fb.array([]),content:this.fb.array([]),ieMode:this.fb.control(!1)})},t.prototype.createItem=function(){return this.fb.group({units:"fr",width:"1"})},t.prototype.createContent=function(){return this.fb.group({containerName:"",containerColStart:"",containerColEnd:"",containerColStartIe:"",containerColEndIe:"",containerRowStart:"",containerRowEnd:"",containerRowStartIe:"",containerRowEndIe:""})},t.prototype.addItem=function(t){this.items=this.form.get(t),this.items.push(this.createItem())},t.prototype.addContent=function(t){this.items=this.form.get(t),this.items.push(this.createContent())},t.prototype.onChanges=function(){var t=this;this.form.valueChanges.subscribe((function(n){t.gridService.updateGrid(t.form.value),t.ieStatus=t.form.get("ieMode").value}))},t.prototype.onSubmit=function(){this.result=this.form.value},t.prototype.deleteItem=function(t,n){this.items=this.form.get(n),this.items.removeAt(t)},t.\u0275fac=function(n){return new(n||t)(i.Mb(s.d),i.Mb(g),i.Mb(l.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-form"]],features:[i.yb([l.b])],decls:9,vars:1,consts:[[1,"form-container",3,"formGroup","ngSubmit"],["activeIds","config-panel-one"],["title","Grid Container","id","config-panel-one"],["ngbPanelContent",""],["title","Grid Items"],["title","Grid Cells"],[1,"input-group"],["formGroupName","columnGap",1,"input-group"],["for","columnGap"],["placeholder","column gap","id","columnGap","formControlName","width","type","number",1,"form-control"],["formControlName","units",1,"form-control"],["placeholder","'select units'",3,"value",4,"ngFor","ngForOf"],["formGroupName","rowGap",1,"input-group"],["for","rowGap"],["placeholder","row gap","id","rowGap","formControlName","width","type","number",1,"form-control"],["formGroupName","gridAlignement",1,"input-group"],[1,"input-group","wide"],["for","alignementVertical"],["formControlName","vertical","id","alignementVertical",1,"form-control"],["formControlName","horizontal",1,"form-control"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","ieMode","formControlName","ieMode",1,"custom-control-input"],["for","ieMode",1,"custom-control-label"],["class","alert alert-info","role","alert",4,"ngIf"],["placeholder","'select units'",3,"value"],["role","alert",1,"alert","alert-info"],[1,"form-array-group"],["class","form-array-group__group","formArrayName","columns",4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-sm","add-button",3,"click"],["class","form-array-group__group","formArrayName","rows",4,"ngFor","ngForOf"],["formArrayName","columns",1,"form-array-group__group"],[1,"input-group--title"],[1,"input-group",3,"formGroupName"],["placeholder","Size","formControlName","width","type","number",1,"form-control"],[1,"input-group-append"],[1,"btn","btn-danger",3,"click"],["formArrayName","rows",1,"form-array-group__group"],["class","form-array-group__group","formArrayName","content",4,"ngFor","ngForOf"],["formArrayName","content",1,"form-array-group__group"],["placeholder","container name","formControlName","containerName","type","text",1,"form-control"],["placeholder","Start","formControlName","containerColStart","type","text",1,"form-control"],["class","form-control","placeholder","IE start","formControlName","containerColStartIe","type","text",4,"ngIf"],["placeholder","End","formControlName","containerColEnd","type","text",1,"form-control"],["class","form-control","placeholder","IE End","formControlName","containerColEndIe","type","text",4,"ngIf"],["placeholder","Row start","formControlName","containerRowStart","type","text",1,"form-control"],["class","form-control","placeholder","IE start","formControlName","containerRowStartIe","type","text",4,"ngIf"],["placeholder","Row end","formControlName","containerRowEnd","type","text",1,"form-control"],["class","form-control","placeholder","IE end","formControlName","containerRowEndIe","type","text",4,"ngIf"],["placeholder","IE start","formControlName","containerColStartIe","type","text",1,"form-control"],["placeholder","IE End","formControlName","containerColEndIe","type","text",1,"form-control"],["placeholder","IE start","formControlName","containerRowStartIe","type","text",1,"form-control"],["placeholder","IE end","formControlName","containerRowEndIe","type","text",1,"form-control"]],template:function(t,n){1&t&&(i.Rb(0,"form",0),i.dc("ngSubmit",(function(t){return n.onSubmit()})),i.Rb(1,"ngb-accordion",1),i.Rb(2,"ngb-panel",2),i.zc(3,h,28,5,"ng-template",3),i.Qb(),i.Rb(4,"ngb-panel",4),i.zc(5,R,9,2,"ng-template",3),i.Qb(),i.Rb(6,"ngb-panel",5),i.zc(7,M,4,1,"ng-template",3),i.Qb(),i.Qb(),i.Nb(8,"div",6),i.Qb()),2&t&&i.kc("formGroup",n.form)},directives:[s.r,s.l,s.f,l.a,l.e,l.f,s.g,s.b,s.n,s.k,s.e,s.p,e.i,s.a,e.j,s.m,s.q,s.c],styles:[".form-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;height:100%;padding:20px 0;box-sizing:border-box;overflow:auto;max-height:100vh}.add-button[_ngcontent-%COMP%]{width:100%;margin-top:10px}.input-group--title[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;margin-bottom:3px;font-size:1.1em}.form-array-group[_ngcontent-%COMP%]{margin-bottom:10px}.form-array-group__group[_ngcontent-%COMP%]{margin-bottom:15px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;margin-bottom:0}.input-group.wide[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-top:10px}.input-group.wide[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}hr[_ngcontent-%COMP%]{margin:35px 0 30px;display:block}.input-group[_ngcontent-%COMP%]{margin-bottom:10px}.form-control[_ngcontent-%COMP%]{min-height:36px}.custom-conytrol[_ngcontent-%COMP%]{line-height:25px}"]}),t}(),Q=function(t){return t.columns="columns",t.rows="rows",t}({}),N=function(){function t(){}return t.prototype.generateGreedProperty=function(t,n){for(var r="",e=0;e<t[n].length;e++)r+=t[n][e].width+t[n][e].units+" ";return r},t.prototype.generateGreedPropertyLegacy=function(t,n,r){for(var e="",o=0;o<t[n].length;o++)e+=o+1!==t[n].length?t[n][o].width+t[n][o].units+" "+r+" ":t[n][o].width+t[n][o].units+" ";return e},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}(),_=function(){function t(){}return t.prototype.transform=function(t){for(var n=[],r=0;r<t;r++)n.push(r);return n},t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=i.Lb({name:"numberToArray",type:t,pure:!0}),t}();function P(t,n){1&t&&(i.Rb(0,"span",12),i.Bc(1,"Example grid simplified"),i.Qb())}function S(t,n){if(1&t&&i.Nb(0,"div",13),2&t){var r=i.fc(2);i.kc("ngStyle",r.grid.ieMode?r.exampleCellDimentionsIE:"")}}function B(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Qb()),2&t){var r=i.fc().$implicit;i.zb(1),i.Dc(".",r.name,"")}}var E=function(t,n,r,e,o,i){return{"grid-column":t,"grid-row":n,"-ms-grid-column":r,"-ms-grid-column-span":e,"-ms-grid-row":o,"-ms-grid-row-span":i}};function D(t,n){if(1&t&&(i.Rb(0,"div",13),i.zc(1,B,2,1,"span",10),i.Qb()),2&t){var r=n.$implicit;i.kc("ngStyle",i.qc(2,E,r.col,r.row,r.colIeStart,r.colIeEnd,r.rowIeStart,r.rowIeEnd)),i.zb(1),i.kc("ngIf",r.name)}}function F(t,n){1&t&&(i.Rb(0,"span"),i.Bc(1,"display:-ms-grid;"),i.Nb(2,"br"),i.Qb())}function A(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc(2);i.zb(1),i.Dc("-ms-grid-columns: ",r.ieGridColumns,";")}}function $(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc(2);i.zb(1),i.Dc("-ms-grid-rows: ",r.ieGridRows,";")}}function j(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc().$implicit;i.zb(1),i.Dc("-ms-grid-column:",r.containerColStartIe,"; ")}}function J(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc().$implicit;i.zb(1),i.Dc("-ms-grid-column-span:",r.containerColEndIe,"; ")}}function H(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc().$implicit;i.zb(1),i.Dc("-ms-grid-row:",r.containerRowStartIe,";")}}function L(t,n){if(1&t&&(i.Rb(0,"span"),i.Bc(1),i.Nb(2,"br"),i.Qb()),2&t){var r=i.fc().$implicit;i.zb(1),i.Dc("-ms-grid-row-span:",r.containerRowEndIe,";")}}function T(t,n){if(1&t&&(i.Rb(0,"p"),i.Bc(1),i.Nb(2,"br"),i.Bc(3),i.Nb(4,"br"),i.Bc(5),i.Nb(6,"br"),i.zc(7,j,3,1,"span",10),i.zc(8,J,3,1,"span",10),i.Bc(9),i.Nb(10,"br"),i.Bc(11),i.Nb(12,"br"),i.zc(13,H,3,1,"span",10),i.zc(14,L,3,1,"span",10),i.Bc(15),i.Qb()),2&t){var r=n.$implicit,e=i.fc(3);i.zb(1),i.Ec(" .",r.containerName," ","{"," "),i.zb(2),i.Dc(" grid-column-start:",r.containerColStart,"; "),i.zb(2),i.Dc(" grid-column-end:",r.containerColEnd,"; "),i.zb(2),i.kc("ngIf",e.grid.ieMode),i.zb(1),i.kc("ngIf",e.grid.ieMode),i.zb(1),i.Dc(" grid-row-start:",r.containerRowStart,"; "),i.zb(2),i.Dc(" grid-row-end:",r.containerRowEnd,"; "),i.zb(2),i.kc("ngIf",e.grid.ieMode),i.zb(1),i.kc("ngIf",e.grid.ieMode),i.zb(1),i.Dc(" ","}"," ")}}function K(t,n){if(1&t&&(i.Rb(0,"div",9),i.Rb(1,"h2"),i.Bc(2," Grid cell styles:"),i.Qb(),i.zc(3,T,16,11,"p",14),i.Qb()),2&t){var r=i.fc(2);i.zb(3),i.kc("ngForOf",r.grid.content)}}function V(t,n){if(1&t&&(i.Rb(0,"div",2),i.Rb(1,"section",3),i.Rb(2,"div",4),i.zc(3,P,2,0,"span",5),i.zc(4,S,1,1,"div",6),i.gc(5,"numberToArray"),i.Qb(),i.Rb(6,"div",7),i.zc(7,D,2,9,"div",6),i.Qb(),i.Qb(),i.Rb(8,"section",8),i.Rb(9,"div",9),i.Rb(10,"h2"),i.Bc(11," Grid container styles:"),i.Qb(),i.Rb(12,"p"),i.Bc(13," display:grid;"),i.Nb(14,"br"),i.zc(15,F,3,0,"span",10),i.Bc(16),i.Nb(17,"br"),i.zc(18,A,3,1,"span",10),i.Bc(19),i.Nb(20,"br"),i.zc(21,$,3,1,"span",10),i.Bc(22),i.Nb(23,"br"),i.Bc(24),i.Nb(25,"br"),i.Bc(26),i.Nb(27,"br"),i.Bc(28),i.Qb(),i.Qb(),i.zc(29,K,4,1,"div",11),i.Qb(),i.Qb()),2&t){var r=i.fc();i.zb(2),i.kc("ngStyle",r.grid.ieMode?r.exampleGridIe:r.exampleGrid),i.zb(1),i.kc("ngIf",r.grid.ieMode),i.zb(1),i.kc("ngForOf",i.hc(5,15,r.exampleCelCounter)),i.zb(2),i.kc("ngStyle",r.grid.ieMode?r.resultGridIe:r.resultGrid),i.zb(1),i.kc("ngForOf",r.gridCell),i.zb(8),i.kc("ngIf",r.grid.ieMode),i.zb(1),i.Dc(" grid-template-columns: ",r.gridColumns,"; "),i.zb(2),i.kc("ngIf",r.grid.ieMode),i.zb(1),i.Dc(" grid-template-rows: ",r.gridRows,"; "),i.zb(2),i.kc("ngIf",r.grid.ieMode),i.zb(1),i.Dc(" grid-column-gap:",r.gridColumnGap,"; "),i.zb(2),i.Dc(" grid-row-gap:",r.gridRowGap,"; "),i.zb(2),i.Dc(" justify-items: ",r.grid.gridAlignement.horizontal,"; "),i.zb(2),i.Dc(" align-items: ",r.grid.gridAlignement.vertical,"; "),i.zb(1),i.kc("ngIf",r.grid.content.length>0)}}function q(t,n){1&t&&(i.Rb(0,"h2",15),i.Bc(1,"Start here :)"),i.Qb())}var Y=function(){function t(t,n){this.gridService=t,this.gridHelper=n,this.gridColumns="",this.gridRows="",this.ieGridColumns="",this.ieGridRows="",this.gridColumnGap="",this.gridRowGap="",this.gridCell=[],this.exampleCelCounter=1,this.exampleGrid={},this.exampleGridIe={},this.exampleCell={},this.exampleCellIe={},this.resultGrid={},this.resultGridIe={},this.cell={},this.cellIe={},this.exampleCellDimentionsIE={}}return t.prototype.ngOnInit=function(){var t=this;this.gridService.changeGrid$.subscribe((function(n){t.grid=n,console.log(n),t.prepareGrid(n),t.prepareCell(n),t.exampleCelCounter=n.columns.length*n.rows.length,t.exampleCellDimentionsIE={width:"calc("+100/n.columns.length+"% - "+n.columnGap.width+n.columnGap.units+")",height:"calc("+100/n.rows.length+"% - "+n.rowGap.width+n.rowGap.units+")"}}))},t.prototype.prepareGrid=function(t){this.gridColumns=this.gridHelper.generateGreedProperty(t,Q.columns),this.gridRows=this.gridHelper.generateGreedProperty(t,Q.rows),this.gridColumnGap=t.columnGap.width+t.columnGap.units,this.gridRowGap=t.rowGap.width+t.rowGap.units,t.ieMode&&(this.ieGridColumns=this.gridHelper.generateGreedPropertyLegacy(t,Q.columns,this.gridColumnGap),this.ieGridRows=this.gridHelper.generateGreedPropertyLegacy(t,Q.rows,this.gridRowGap)),this.exampleGrid={"grid-template-columns":this.gridColumns,"grid-template-rows":this.gridRows,"grid-column-gap":this.gridColumnGap,"grid-row-gap":this.gridRowGap},this.exampleGridIe={"-ms-grid-columns":this.ieGridColumns,"grid-template-columns":this.gridColumns,"-ms-grid-rows":this.ieGridRows,"grid-template-rows":this.gridRows,"grid-column-gap":this.gridColumnGap,"grid-row-gap":this.gridRowGap},this.resultGrid={"grid-template-columns":this.gridColumns,"grid-template-rows":this.gridRows,"grid-column-gap":this.gridColumnGap,"grid-row-gap":this.gridRowGap,"justify-items":this.grid.gridAlignement.horizontal,"align-items":this.grid.gridAlignement.vertical},this.resultGridIe={"-ms-grid-columns":this.ieGridColumns,"grid-template-columns":this.gridColumns,"-ms-grid-rows":this.ieGridRows,"grid-template-rows":this.gridRows,"grid-column-gap":this.gridColumnGap,"grid-row-gap":this.gridRowGap,"justify-items":this.grid.gridAlignement.horizontal,"align-items":this.grid.gridAlignement.vertical}},t.prototype.prepareCell=function(t){this.gridCell=[];for(var n=0;n<t.content.length;n++){var r=new a("","","","","","","");r.col=t.content[n].containerColStart+"/"+t.content[n].containerColEnd,r.row=t.content[n].containerRowStart+"/"+t.content[n].containerRowEnd,r.name=t.content[n].containerName,r.colIeStart=t.content[n].containerColStartIe,r.colIeEnd=t.content[n].containerColEndIe,r.rowIeStart=t.content[n].containerRowStartIe,r.rowIeEnd=t.content[n].containerRowEndIe,this.gridCell.push(r)}console.log(this.gridCell)},t.\u0275fac=function(n){return new(n||t)(i.Mb(g),i.Mb(N))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-result"]],decls:2,vars:2,consts:[["class","grid-container",4,"ngIf"],["class","empty-grid alert alert-primary",4,"ngIf"],[1,"grid-container"],[1,"grid"],[1,"grid-tracks",3,"ngStyle"],["class","simplifiedIEGrid",4,"ngIf"],["class","grid-cell",3,"ngStyle",4,"ngFor","ngForOf"],[1,"grid-result",3,"ngStyle"],[1,"grid-css"],[1,"alert","alert-primary"],[4,"ngIf"],["class","alert alert-primary",4,"ngIf"],[1,"simplifiedIEGrid"],[1,"grid-cell",3,"ngStyle"],[4,"ngFor","ngForOf"],[1,"empty-grid","alert","alert-primary"]],template:function(t,n){1&t&&(i.zc(0,V,30,17,"div",0),i.zc(1,q,2,0,"h2",1)),2&t&&(i.kc("ngIf",n.grid),i.zb(1),i.kc("ngIf",!n.grid))},directives:[e.j,e.k,e.i],pipes:[_],styles:[".grid-container[_ngcontent-%COMP%]{-ms-grid-rows:70% 30%;-ms-grid-columns:1fr;grid-template-rows:70% 30%;height:100vh;margin:0 20px 0 0;width:100%}.grid[_ngcontent-%COMP%], .grid-container[_ngcontent-%COMP%]{display:-ms-grid;display:grid}.grid[_ngcontent-%COMP%]{counter-reset:section;height:calc(100% - 40px);grid-gap:20px;grid-row:1/2;-ms-grid-row:1;-ms-grid-column:1;-ms-grid-rows:1fr;-ms-grid-columns:1fr;margin:20px 0;position:relative}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:grid}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .simplifiedIEGrid[_ngcontent-%COMP%]{display:none}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{border:1px dashed #6c757d;border:1px dashed var(--secondary);border-radius:10px;position:relative}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .simplifiedIEGrid[_ngcontent-%COMP%]{display:block;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);color:#6c757d;font-size:48px;opacity:.4;line-height:1.1;text-align:center}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{margin:auto}}@supports not (-ms-high-contrast:active){.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{width:auto!important;height:auto!important}}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]{display:grid;display:-ms-grid;counter-reset:section}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{background-color:#17a2b8;background-color:var(--info);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:10px;padding:5px 0;box-sizing:border-box;font-size:48px;line-height:1.4}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]:before{counter-increment:section;content:counter(section);color:#fff;color:var(--white)}.grid-css[_ngcontent-%COMP%]{grid-row:2/3;margin:0 0 15px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-ms-grid-row:2;-ms-grid-column:1;width:100%}.grid-css[_ngcontent-%COMP%], .grid-css[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{overflow:auto;-webkit-box-flex:1;flex:1}.grid-css[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]:first-child{border-radius:5px 0 0 5px}.grid-css[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]:last-child{border-radius:0 5px 5px 0}.empty-grid[_ngcontent-%COMP%]{margin:20px 20px 0 0}"]}),t}(),U=[{path:"",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-form-generate"]],decls:5,vars:0,consts:[[1,"form-generator"]],template:function(t,n){1&t&&(i.Rb(0,"section",0),i.Rb(1,"section"),i.Nb(2,"app-form"),i.Qb(),i.Rb(3,"section"),i.Nb(4,"app-result"),i.Qb(),i.Qb())},directives:[O,Y],styles:[".form-generator[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:400px 20px 1fr;grid-template-columns:400px 1fr;-ms-grid-rows:1fr 20px;grid-template-rows:1fr;grid-gap:20px;height:100%;padding-right:20px}.form-generator[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child{-ms-grid-column:1}.form-generator[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2){-ms-grid-column:3}"]}),t}()}],X=function(){function t(){}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[o.a.forChild(U)],o.a]}),t}();r.d(n,"FormGenerateModule",(function(){return W}));var W=function(){function t(){}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[e.b,X,s.o,s.h,l.c]]}),t}()}}]);