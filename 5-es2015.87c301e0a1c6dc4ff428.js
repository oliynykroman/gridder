(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gjz2:function(t,n,r){"use strict";r.r(n);var e=r("ofXK"),o=r("tyNb"),i=r("fXoL");class c{}class a{constructor(t,n,r){this.col=t,this.row=n,this.name=r}}var l=r("1kSV"),s=r("3Pt+"),b=r("XNiG");let g=(()=>{class t{constructor(){this.changeGrid=new b.a,this.changeGrid$=this.changeGrid.asObservable()}updateGrid(t){this.changeGrid.next(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function p(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function u(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function m(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function f(t,n){if(1&t&&(i.Rb(0,"div",7),i.Rb(1,"label",8),i.Cc(2,"Column gap"),i.Qb(),i.Nb(3,"input",9),i.Rb(4,"select",10),i.Ac(5,d,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(6,"div",12),i.Rb(7,"label",13),i.Cc(8,"Row gap"),i.Qb(),i.Nb(9,"input",14),i.Rb(10,"select",10),i.Ac(11,p,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(12,"div",15),i.Rb(13,"div",16),i.Rb(14,"label",17),i.Cc(15,"Align Items"),i.Qb(),i.Rb(16,"select",18),i.Ac(17,u,2,2,"option",11),i.Qb(),i.Qb(),i.Rb(18,"div",16),i.Rb(19,"label",17),i.Cc(20,"Justify Items"),i.Qb(),i.Rb(21,"select",19),i.Ac(22,m,2,2,"option",11),i.Qb(),i.Qb(),i.Qb()),2&t){const t=i.fc();i.zb(5),i.kc("ngForOf",t.unitsGap),i.zb(6),i.kc("ngForOf",t.unitsGap),i.zb(6),i.kc("ngForOf",t.alignement),i.zb(5),i.kc("ngForOf",t.alignement)}}function h(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function C(t,n){if(1&t){const t=i.Sb();i.Rb(0,"div",25),i.Rb(1,"div",26),i.Cc(2),i.Qb(),i.Rb(3,"div",27),i.Rb(4,"label"),i.Cc(5,"Column size"),i.Qb(),i.Nb(6,"input",28),i.Rb(7,"select",10),i.Ac(8,h,2,2,"option",11),i.Qb(),i.Rb(9,"div",29),i.Rb(10,"button",30),i.dc("click",(function(r){i.uc(t);const e=n.index;return i.fc(2).deleteItem(e,"columns")})),i.Cc(11,"Delete"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=n.index,r=i.fc(2);i.zb(2),i.Ec("Column ",t,""),i.zb(1),i.kc("formGroupName",t),i.zb(5),i.kc("ngForOf",r.units)}}function w(t,n){if(1&t&&(i.Rb(0,"option",20),i.Cc(1),i.Qb()),2&t){const t=n.$implicit;i.kc("value",t),i.zb(1),i.Ec(" ",t," ")}}function R(t,n){if(1&t){const t=i.Sb();i.Rb(0,"div",31),i.Rb(1,"div",26),i.Cc(2),i.Qb(),i.Rb(3,"div",27),i.Rb(4,"label"),i.Cc(5,"Row size"),i.Qb(),i.Nb(6,"input",28),i.Rb(7,"select",10),i.Ac(8,w,2,2,"option",11),i.Qb(),i.Rb(9,"div",29),i.Rb(10,"button",30),i.dc("click",(function(r){i.uc(t);const e=n.index;return i.fc(2).deleteItem(e,"rows")})),i.Cc(11,"Delete"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=n.index,r=i.fc(2);i.zb(2),i.Ec("Row ",t,""),i.zb(1),i.kc("formGroupName",t),i.zb(5),i.kc("ngForOf",r.units)}}function y(t,n){if(1&t){const t=i.Sb();i.Rb(0,"div",21),i.Ac(1,C,12,3,"div",22),i.Rb(2,"button",23),i.dc("click",(function(n){return i.uc(t),i.fc().addItem("columns")})),i.Cc(3,"Add column"),i.Qb(),i.Qb(),i.Nb(4,"hr"),i.Rb(5,"div",21),i.Ac(6,R,12,3,"div",24),i.Rb(7,"button",23),i.dc("click",(function(n){return i.uc(t),i.fc().addItem("rows")})),i.Cc(8,"Add row"),i.Qb(),i.Qb()}if(2&t){const t=i.fc();i.zb(1),i.kc("ngForOf",t.form.get("columns").controls),i.zb(5),i.kc("ngForOf",t.form.get("rows").controls)}}function v(t,n){if(1&t){const t=i.Sb();i.Rb(0,"div",33),i.Rb(1,"div",26),i.Cc(2),i.Qb(),i.Rb(3,"div",27),i.Rb(4,"div",6),i.Rb(5,"label"),i.Cc(6,"Cell class name"),i.Qb(),i.Nb(7,"input",34),i.Qb(),i.Rb(8,"div",6),i.Rb(9,"label"),i.Cc(10,"Column grid lines start/end"),i.Qb(),i.Nb(11,"input",35),i.Nb(12,"input",36),i.Qb(),i.Rb(13,"div",6),i.Rb(14,"label"),i.Cc(15,"Row grid lines start/end"),i.Qb(),i.Nb(16,"input",37),i.Nb(17,"input",38),i.Qb(),i.Rb(18,"button",30),i.dc("click",(function(r){i.uc(t);const e=n.index;return i.fc(2).deleteItem(e,"content")})),i.Cc(19,"Delete"),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=n.index;i.zb(2),i.Ec("Cell ",t,""),i.zb(1),i.kc("formGroupName",t)}}function x(t,n){if(1&t){const t=i.Sb();i.Rb(0,"div",21),i.Ac(1,v,20,2,"div",32),i.Rb(2,"button",23),i.dc("click",(function(n){return i.uc(t),i.fc().addContent("content")})),i.Cc(3,"Add cell"),i.Qb(),i.Qb()}if(2&t){const t=i.fc();i.zb(1),i.kc("ngForOf",t.form.get("content").controls)}}let Q=(()=>{class t{constructor(t,n,r){this.fb=t,this.gridService=n,this.units=["px","fr","%"],this.unitsGap=["px","%"],this.alignement=["stretch","center","start","end"],this.columns="",this.rows="",this.content=[],this.panelOpenState=!1,this.gridResult=new c,r.closeOthers=!0,r.type="info"}ngOnInit(){this.formInit(),this.onChanges()}formInit(){this.form=this.fb.group({columnGap:this.fb.group({width:[0],units:["px"]}),rowGap:this.fb.group({width:[0],units:["px"]}),gridAlignement:this.fb.group({vertical:["stretch"],horizontal:["stretch"]}),columns:this.fb.array([]),rows:this.fb.array([]),content:this.fb.array([])})}createItem(){return this.fb.group({units:"fr",width:"1"})}createContent(){return this.fb.group({containerName:"",containerColStart:"",containerColEnd:"",containerRowStart:"",containerRowEnd:""})}addItem(t){this.items=this.form.get(t),this.items.push(this.createItem())}addContent(t){this.items=this.form.get(t),this.items.push(this.createContent())}onChanges(){this.form.valueChanges.subscribe(t=>{this.gridService.updateGrid(this.form.value)})}onSubmit(){this.result=this.form.value}deleteItem(t,n){this.items=this.form.get(n),this.items.removeAt(t)}}return t.\u0275fac=function(n){return new(n||t)(i.Mb(s.c),i.Mb(g),i.Mb(l.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-form"]],features:[i.yb([l.b])],decls:9,vars:1,consts:[[1,"form-container",3,"formGroup","ngSubmit"],["activeIds","config-panel-one"],["title","Grid Container","id","config-panel-one"],["ngbPanelContent",""],["title","Grid Items"],["title","Grid Cells"],[1,"input-group"],["formGroupName","columnGap",1,"input-group"],["for","columnGap"],["placeholder","column gap","id","columnGap","formControlName","width","type","number",1,"form-control"],["formControlName","units",1,"form-control"],["placeholder","'select units'",3,"value",4,"ngFor","ngForOf"],["formGroupName","rowGap",1,"input-group"],["for","rowGap"],["placeholder","row gap","id","rowGap","formControlName","width","type","number",1,"form-control"],["formGroupName","gridAlignement",1,"input-group"],[1,"input-group","wide"],["for","alignementVertical"],["formControlName","vertical","id","alignementVertical",1,"form-control"],["formControlName","horizontal",1,"form-control"],["placeholder","'select units'",3,"value"],[1,"form-array-group"],["class","form-array-group__group","formArrayName","columns",4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-sm","add-button",3,"click"],["class","form-array-group__group","formArrayName","rows",4,"ngFor","ngForOf"],["formArrayName","columns",1,"form-array-group__group"],[1,"input-group--title"],[1,"input-group",3,"formGroupName"],["placeholder","Size","formControlName","width","type","number",1,"form-control"],[1,"input-group-append"],[1,"btn","btn-danger",3,"click"],["formArrayName","rows",1,"form-array-group__group"],["class","form-array-group__group","formArrayName","content",4,"ngFor","ngForOf"],["formArrayName","content",1,"form-array-group__group"],["placeholder","container name","formControlName","containerName","type","text",1,"form-control"],["placeholder","Start","formControlName","containerColStart","type","text",1,"form-control"],["placeholder","End","formControlName","containerColEnd","type","text",1,"form-control"],["placeholder","Row start","formControlName","containerRowStart","type","text",1,"form-control"],["placeholder","Row end","formControlName","containerRowEnd","type","text",1,"form-control"]],template:function(t,n){1&t&&(i.Rb(0,"form",0),i.dc("ngSubmit",(function(t){return n.onSubmit()})),i.Rb(1,"ngb-accordion",1),i.Rb(2,"ngb-panel",2),i.Ac(3,f,23,4,"ng-template",3),i.Qb(),i.Rb(4,"ngb-panel",4),i.Ac(5,y,9,2,"ng-template",3),i.Qb(),i.Rb(6,"ngb-panel",5),i.Ac(7,x,4,1,"ng-template",3),i.Qb(),i.Qb(),i.Nb(8,"div",6),i.Qb()),2&t&&i.kc("formGroup",n.form)},directives:[s.q,s.k,s.e,l.a,l.e,l.f,s.f,s.a,s.m,s.j,s.d,s.o,e.i,s.l,s.p,s.b],styles:[".form-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;height:100%;padding:20px 0;box-sizing:border-box;overflow:auto;max-height:100vh}.add-button[_ngcontent-%COMP%]{width:100%;margin-top:10px}.input-group--title[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;margin-bottom:3px;font-size:1.1em}.form-array-group[_ngcontent-%COMP%]{margin-bottom:10px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;margin-bottom:0}.input-group.wide[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-top:10px}.input-group.wide[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}hr[_ngcontent-%COMP%]{margin:35px 0 30px;display:block}.input-group[_ngcontent-%COMP%]{margin-bottom:10px}"]}),t})();var k=function(t){return t.columns="columns",t.rows="rows",t}({});let O=(()=>{class t{generateGreedProperty(t,n){let r="";for(let e=0;e<t[n].length;e++)r+=t[n][e].width+t[n][e].units+" ";return r}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),G=(()=>{class t{transform(t){let n=[];for(let r=0;r<t;r++)n.push(r);return n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=i.Lb({name:"numberToArray",type:t,pure:!0}),t})();function z(t,n){1&t&&i.Nb(0,"div",11)}function N(t,n){if(1&t&&(i.Rb(0,"span"),i.Cc(1),i.Qb()),2&t){const t=i.fc().$implicit;i.zb(1),i.Ec(".",t.name,"")}}const _=function(t,n){return{"grid-column":t,"grid-row":n}};function M(t,n){if(1&t&&(i.Rb(0,"div",12),i.Ac(1,N,2,1,"span",13),i.Qb()),2&t){const t=n.$implicit;i.kc("ngStyle",i.oc(2,_,t.col,t.row)),i.zb(1),i.kc("ngIf",t.name)}}function P(t,n){if(1&t&&(i.Rb(0,"p"),i.Cc(1),i.Nb(2,"br"),i.Cc(3),i.Nb(4,"br"),i.Cc(5),i.Nb(6,"br"),i.Cc(7),i.Nb(8,"br"),i.Cc(9),i.Nb(10,"br"),i.Cc(11),i.Qb()),2&t){const t=n.$implicit;i.zb(1),i.Fc(" .",t.containerName," ","{"," "),i.zb(2),i.Ec(" grid-column-start:",t.containerColStart,"; "),i.zb(2),i.Ec(" grid-column-end:",t.containerColEnd,"; "),i.zb(2),i.Ec(" grid-row-start:",t.containerRowStart,"; "),i.zb(2),i.Ec(" grid-row-end:",t.containerRowEnd,"; "),i.zb(2),i.Ec(" ","}"," ")}}function A(t,n){if(1&t&&(i.Rb(0,"div",9),i.Rb(1,"h2"),i.Cc(2," Grid cell styles:"),i.Qb(),i.Ac(3,P,12,7,"p",14),i.Qb()),2&t){const t=i.fc(2);i.zb(3),i.kc("ngForOf",t.grid.content)}}const S=function(t,n,r,e){return{"grid-template-columns":t,"grid-template-rows":n,"grid-column-gap":r,"grid-row-gap":e}},E=function(t,n,r,e,o,i){return{"grid-template-columns":t,"grid-template-rows":n,"grid-column-gap":r,"grid-row-gap":e,"justify-items":o,"align-items":i}};function I(t,n){if(1&t&&(i.Rb(0,"div",2),i.Rb(1,"section",3),i.Rb(2,"div",4),i.Ac(3,z,1,0,"div",5),i.gc(4,"numberToArray"),i.Qb(),i.Rb(5,"div",6),i.Ac(6,M,2,5,"div",7),i.Qb(),i.Qb(),i.Rb(7,"section",8),i.Rb(8,"div",9),i.Rb(9,"h2"),i.Cc(10," Grid container styles:"),i.Qb(),i.Rb(11,"p"),i.Cc(12," display:grid; "),i.Nb(13,"br"),i.Cc(14),i.Nb(15,"br"),i.Cc(16),i.Nb(17,"br"),i.Cc(18),i.Nb(19,"br"),i.Cc(20),i.Nb(21,"br"),i.Cc(22),i.Nb(23,"br"),i.Cc(24),i.Qb(),i.Qb(),i.Ac(25,A,4,1,"div",10),i.Qb(),i.Qb()),2&t){const t=i.fc();i.zb(2),i.kc("ngStyle",i.qc(13,S,t.gridColumns,t.gridRows,t.gridColumnGap,t.gridRowGap)),i.zb(1),i.kc("ngForOf",i.hc(4,11,t.exampleCelCounter)),i.zb(2),i.kc("ngStyle",i.rc(18,E,t.gridColumns,t.gridRows,t.gridColumnGap,t.gridRowGap,t.grid.gridAlignement.horizontal,t.grid.gridAlignement.vertical)),i.zb(1),i.kc("ngForOf",t.gridCell),i.zb(8),i.Ec(" grid-template-columns: ",t.gridColumns,"; "),i.zb(2),i.Ec(" grid-template-rows: ",t.gridRows,"; "),i.zb(2),i.Ec(" grid-column-gap:",t.gridColumnGap,"; "),i.zb(2),i.Ec(" grid-row-gap:",t.gridRowGap,"; "),i.zb(2),i.Ec(" justify-items: ",t.grid.gridAlignement.horizontal,"; "),i.zb(2),i.Ec(" align-items: ",t.grid.gridAlignement.vertical,"; "),i.zb(1),i.kc("ngIf",t.grid.content.length>0)}}function F(t,n){1&t&&(i.Rb(0,"h2",15),i.Cc(1,"Start here :)"),i.Qb())}let $=(()=>{class t{constructor(t,n){this.gridService=t,this.gridHelper=n,this.gridColumns="",this.gridRows="",this.gridColumnGap="",this.gridRowGap="",this.gridCell=[],this.exampleCelCounter=1}ngOnInit(){this.gridService.changeGrid$.subscribe(t=>{this.grid=t,console.log(t),this.prepareGrid(t),this.prepareCell(t),this.exampleCelCounter=t.columns.length*t.rows.length})}prepareGrid(t){this.gridColumns=this.gridHelper.generateGreedProperty(t,k.columns),this.gridRows=this.gridHelper.generateGreedProperty(t,k.rows),this.gridColumnGap=t.columnGap.width+t.columnGap.units,this.gridRowGap=t.rowGap.width+t.rowGap.units}prepareCell(t){this.gridCell=[];for(let n=0;n<t.content.length;n++){let r=new a("","","");r.col=t.content[n].containerColStart+"/"+t.content[n].containerColEnd,r.row=t.content[n].containerRowStart+"/"+t.content[n].containerRowEnd,r.name=t.content[n].containerName,this.gridCell.push(r)}}}return t.\u0275fac=function(n){return new(n||t)(i.Mb(g),i.Mb(O))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-result"]],decls:2,vars:2,consts:[["class","grid-container",4,"ngIf"],["class","empty-grid alert alert-primary",4,"ngIf"],[1,"grid-container"],[1,"grid"],[1,"grid-tracks",3,"ngStyle"],["class","grid-cell",4,"ngFor","ngForOf"],[1,"grid-result",3,"ngStyle"],["class","grid-cell",3,"ngStyle",4,"ngFor","ngForOf"],[1,"grid-css"],[1,"alert","alert-primary"],["class","alert alert-primary",4,"ngIf"],[1,"grid-cell"],[1,"grid-cell",3,"ngStyle"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"empty-grid","alert","alert-primary"]],template:function(t,n){1&t&&(i.Ac(0,I,26,25,"div",0),i.Ac(1,F,2,0,"h2",1)),2&t&&(i.kc("ngIf",n.grid),i.zb(1),i.kc("ngIf",!n.grid))},directives:[e.j,e.k,e.i],pipes:[G],styles:[".grid-container[_ngcontent-%COMP%]{display:grid;grid-template-rows:70% 30%;height:100vh;margin:0 20px 0 0}.grid[_ngcontent-%COMP%]{display:grid;counter-reset:section;height:calc(100% - 40px);grid-gap:20px;grid-row:1/2;margin:20px 0;position:relative}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:grid}.grid[_ngcontent-%COMP%]   .grid-tracks[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{border:1px dashed var(--secondary);border-radius:10px}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]{display:grid;counter-reset:section}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]{background-color:var(--info);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:10px;padding:5px 0;box-sizing:border-box;font-size:48px;line-height:1.4}.grid[_ngcontent-%COMP%]   .grid-result[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]:before{counter-increment:section;content:counter(section);color:var(--white)}.grid-css[_ngcontent-%COMP%]{grid-row:2/3;margin:0 0 15px;overflow:auto;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap}.grid-css[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;overflow:auto}.grid-css[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]:first-child{border-radius:5px 0 0 5px}.grid-css[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]:last-child{border-radius:0 5px 5px 0}.empty-grid[_ngcontent-%COMP%]{margin:20px 20px 0 0}"]}),t})();const j=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-form-generate"]],decls:3,vars:0,consts:[[1,"form-generator"]],template:function(t,n){1&t&&(i.Rb(0,"section",0),i.Nb(1,"app-form"),i.Nb(2,"app-result"),i.Qb())},directives:[Q,$],styles:[".form-generator[_ngcontent-%COMP%]{display:grid;grid-template-columns:400px 1fr;grid-template-rows:1fr;grid-gap:20px;height:100%}"]}),t})()}];let J=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[o.a.forChild(j)],o.a]}),t})();r.d(n,"FormGenerateModule",(function(){return D}));let D=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[e.b,J,s.n,s.g,l.c]]}),t})()}}]);