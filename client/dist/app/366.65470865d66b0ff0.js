"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[366],{2366:(m,b,_)=>{_.d(b,{a:()=>f});var t=_(8256),l=_(3289),g=_(6895),s=_(433),p=_(4367);function d(n,o){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.title)}}function a(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.searchShow=!c.searchShow)}),t.qZA(),t.TgZ(2,"input",14),t.NdJ("ngModelChange",function(c){t.CHM(e);const r=t.oxw();return t.KtG(r.onSearch.emit(c))})("ngModelChange",function(c){t.CHM(e);const r=t.oxw();return t.KtG(r.searching_text=c)}),t.qZA()()}if(2&n){const e=t.oxw();t.ekj("table-search--active",e.searchShow),t.xp6(2),t.Q6J("ngModel",e.searching_text)}}function u(n,o){1&n&&(t.TgZ(0,"th"),t._uU(1,"No."),t.qZA())}function x(n,o){1&n&&(t.TgZ(0,"span",18),t._uU(1," keyboard_backspace "),t.qZA())}function h(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"th",15)(1,"div",16),t.NdJ("click",function(){const r=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.sort(r))}),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.YNc(4,x,2,0,"span",17),t.qZA()()}if(2&n){const e=o.$implicit,i=t.oxw();t.xp6(1),t.ekj("_sortActiveDown","desc"===i.sort_type.direction&&e.field===i.sort_type.title)("_sortActiveUp","asc"===i.sort_type.direction&&e.field===i.sort_type.title),t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",i.sortable[e.field])}}function M(n,o){1&n&&t.GkF(0)}function O(n,o){if(1&n&&t.YNc(0,M,1,0,"ng-container",22),2&n){const e=t.oxw(2);t.Q6J("ngTemplateOutlet",e.action.template)}}function P(n,o){1&n&&t._uU(0,"Actions")}function w(n,o){1&n&&t.GkF(0)}function v(n,o){if(1&n&&(t.TgZ(0,"th"),t.YNc(1,O,1,1,"ng-template",null,19,t.W1O),t.YNc(3,P,1,0,"ng-template",null,20,t.W1O),t.YNc(5,w,1,0,"ng-container",21),t.qZA()),2&n){const e=t.MAs(2),i=t.MAs(4),c=t.oxw();t.xp6(5),t.Q6J("ngIf",c.action)("ngIfThen",e)("ngIfElse",i)}}function T(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.num)}}function y(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,i=t.oxw().$implicit;t.uIk("data-label",e.title+":\xa0"),t.xp6(1),t.hij(" ",i[e.field]," ")}}function k(n,o){1&n&&t.GkF(0)}const Z=function(n){return{$implicit:n}};function A(n,o){if(1&n&&(t.TgZ(0,"td"),t.YNc(1,k,1,0,"ng-container",26),t.qZA()),2&n){const e=t.oxw().$implicit,i=t.oxw().$implicit,c=t.oxw();t.uIk("data-label",e.title+":\xa0"),t.xp6(1),t.Q6J("ngTemplateOutlet",c.custom_cell[e.field])("ngTemplateOutletContext",t.VKq(3,Z,i))}}function J(n,o){1&n&&t.GkF(0)}function I(n,o){if(1&n&&(t.ynx(0),t.YNc(1,y,2,2,"ng-template",null,24,t.W1O),t.YNc(3,A,2,5,"ng-template",null,25,t.W1O),t.YNc(5,J,1,0,"ng-container",21),t.BQk()),2&n){const e=o.$implicit,i=t.MAs(2),c=t.MAs(4),r=t.oxw(2);t.xp6(5),t.Q6J("ngIf",r.custom_cell[e.field])("ngIfThen",c)("ngIfElse",i)}}function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"i",30),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.config.update(c))}),t._uU(1," edit "),t.qZA()}}function E(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"i",31),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.config.delete(c))}),t._uU(1," delete "),t.qZA()}}function Q(n,o){if(1&n&&(t.TgZ(0,"td",27),t.YNc(1,N,2,0,"i",28),t.YNc(2,E,2,0,"i",29),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.config.update),t.xp6(1),t.Q6J("ngIf",e.config.delete)}}function Y(n,o){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,T,2,1,"td",6),t.YNc(2,I,6,3,"ng-container",9),t.YNc(3,Q,3,2,"td",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.config.num),t.xp6(1),t.Q6J("ngForOf",e.columns),t.xp6(1),t.Q6J("ngIf",e.config.delete||e.config.update)}}function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.config.create())}),t._uU(1," + "),t.qZA()}}function F(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",44)(1,"div",45),t.NdJ("click",function(){const r=t.CHM(e).$implicit,C=t.oxw(3);return t.KtG(C.changePerPage(r))}),t._uU(2),t.qZA()()}if(2&n){const e=o.$implicit,i=t.oxw(3);t.xp6(1),t.ekj("selected",e===i.config.perPage),t.xp6(1),t.hij(" ",e," ")}}function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",37)(1,"div",38),t._uU(2,"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430"),t.qZA(),t.TgZ(3,"div",39),t.NdJ("clickOutside",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.select_page_size=!1)}),t.TgZ(4,"div",40),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.select_page_size=!c.select_page_size)}),t._uU(5),t.qZA(),t.TgZ(6,"div",41),t.YNc(7,F,3,3,"div",42),t.qZA()(),t.TgZ(8,"div",43)(9,"span"),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12," of "),t.qZA(),t.TgZ(13,"span"),t._uU(14),t.ALo(15,"search"),t.qZA()()()}if(2&n){const e=t.oxw(2);let i;t.xp6(3),t.ekj("open",e.select_page_size),t.xp6(2),t.hij(" ",e.config.perPage," "),t.xp6(2),t.Q6J("ngForOf",e.config.pageSizeOptions),t.xp6(3),t.AsE(" ",(e.config.page-1)*e.config.perPage+1," - ",e.config.page*e.config.perPage>(null==e.rows?null:e.rows.length)&&(null==e.rows?null:e.rows.length)||e.config.page*e.config.perPage," "),t.xp6(4),t.hij(" ",null==(i=t.Dn7(15,7,e.rows,e.searching_text,e.config.searchBy||"title"))?null:i.length," ")}}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",46)(1,"button",47),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.config.page=1)}),t._UZ(2,"i",48),t.qZA(),t.TgZ(3,"button",49),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.previous())}),t._UZ(4,"i",48),t.qZA(),t.TgZ(5,"button",50),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.next())}),t._UZ(6,"i",48),t.qZA(),t.TgZ(7,"button",51),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.lastPage())}),t._UZ(8,"i",48),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",1===e.config.page),t.xp6(2),t.Q6J("disabled",1===e.config.page),t.xp6(2),t.Q6J("disabled",e.config.page*e.config.perPage>(null==e.rows?null:e.rows.length)),t.xp6(2),t.Q6J("disabled",e.isLast())}}function G(n,o){if(1&n&&(t.TgZ(0,"tfoot",32),t.YNc(1,q,2,0,"button",33),t.YNc(2,D,16,11,"div",34),t.YNc(3,U,9,4,"div",35),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.config.create),t.xp6(1),t.Q6J("ngIf",e.config.perPage),t.xp6(1),t.Q6J("ngIf",e.config.perPage)}}class f{constructor(){this.config={},this.columns=[],this.rows=[],this.value="_id",this.title="",this.onSearch=new t.vpe,this.select_page_size=!1,this.searching_text="",this.custom_cell={},this.sort_type={},this.sortable={}}ngOnInit(){this.default_config();for(let o=0;o<this.columns.length;o++)"string"==typeof this.columns[o]&&(this.columns[o]={title:this.columns[o],field:this.columns[o]})}default_config(){this.config.pageSizeOptions||(this.config.pageSizeOptions=[5,10,25]),this.config.perPage||(this.config.perPage=5),this.config.page||(this.config.page=1),this.config.searchable||(this.config.searchable=!1)}ngAfterContentInit(){for(let o=0;o<this.sortHeaders.toArray().length;o++)this.sortable[this.sortHeaders.toArray()[o].cell]=!0;for(let o=0;o<this.cell.toArray().length;o++){const e=this.cell.toArray()[o];this.custom_cell[e.cell]=e.template}}next(){this.config.page*this.config.perPage<this.rows.length&&(this.config.page+=1)}previous(){this.config.page>1&&(this.config.page-=1)}changePerPage(o){this.config.perPage=o,(this.config.page-1)*this.config.perPage>this.rows.length&&this.lastPage(),this.select_page_size=!1}lastPage(){this.config.page=Math.ceil(this.rows.length/this.config.perPage)}isLast(){return this.rows&&this.config.page==Math.ceil(this.rows.length/this.config.perPage)||!1}sort(o){this.sort_type.title!=o.title&&(this.sort_type={}),this.sortable[o.field]&&(this.sort_type={title:o.field,direction:("string"!=typeof this.sort_type.direction?"asc":"asc"==this.sort_type.direction&&"desc")||void 0})}}f.\u0275fac=function(o){return new(o||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["wtable"]],contentQueries:function(o,e,i){if(1&o&&(t.Suo(i,l.i$,5),t.Suo(i,l.nQ,5),t.Suo(i,l.Y0,4),t.Suo(i,l.bk,4)),2&o){let c;t.iGM(c=t.CRH())&&(e.action=c.first),t.iGM(c=t.CRH())&&(e.editForm=c.first),t.iGM(c=t.CRH())&&(e.cell=c),t.iGM(c=t.CRH())&&(e.sortHeaders=c)}},inputs:{config:"config",columns:"columns",rows:"rows",value:"value",title:"title"},outputs:{onSearch:"onSearch"},decls:15,vars:15,consts:[[1,"wtable"],["class","users__header w-card__header",4,"ngIf"],[1,"table-flex","_jc-sb","_ai-c"],["class","table-search",3,"table-search--active",4,"ngIf"],["cellpadding","0","cellspacing","0",1,"table"],[1,"table-header"],[4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[1,"table-body"],[4,"ngFor","ngForOf"],["class","table-footer",4,"ngIf"],[1,"users__header","w-card__header"],[1,"table-search"],[1,"table-search__icon",3,"click"],["placeholder","Search...","type","text",1,"table-search__input",3,"ngModel","ngModelChange"],["scope","col"],[1,"table-header__sort",3,"click"],["class","material-icons icon-arrow",4,"ngIf"],[1,"material-icons","icon-arrow"],["customAction",""],["defaultAction",""],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngTemplateOutlet"],["class","table-body__last-td","data-label","Actions:\xa0",4,"ngIf"],["defaultRows",""],["customRows",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-label","Actions:\xa0",1,"table-body__last-td"],["class","material-icons","title","Edit",3,"click",4,"ngIf"],["class","material-icons","title","Delete",3,"click",4,"ngIf"],["title","Edit",1,"material-icons",3,"click"],["title","Delete",1,"material-icons",3,"click"],[1,"table-footer"],["class","table-plus-btn",3,"click",4,"ngIf"],["class","item-page",4,"ngIf"],["class","table-footer__pagination",4,"ngIf"],[1,"table-plus-btn",3,"click"],[1,"item-page"],[1,"item-page__text"],[1,"item-page__dropdown",3,"clickOutside"],[1,"caption",3,"click"],[1,"list"],["class","item",4,"ngFor","ngForOf"],[1,"item-page__result"],[1,"item"],[3,"click"],[1,"table-footer__pagination"],[1,"table-footer__arrow","_start",3,"disabled","click"],[1,"chevron"],[1,"table-footer__arrow","_left",3,"disabled","click"],[1,"table-footer__arrow","_right",3,"disabled","click"],[1,"table-footer__arrow","_end",3,"disabled","click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,d,2,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,a,3,3,"div",3),t.qZA(),t.TgZ(4,"table",4)(5,"thead",5)(6,"tr"),t.YNc(7,u,2,0,"th",6),t.YNc(8,h,5,6,"th",7),t.YNc(9,v,6,3,"th",6),t.qZA()(),t.TgZ(10,"tbody",8),t.YNc(11,Y,4,3,"tr",9),t.ALo(12,"page"),t.ALo(13,"search"),t.qZA(),t.YNc(14,G,4,3,"tfoot",10),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.title),t.xp6(2),t.Q6J("ngIf",e.config.searchable),t.xp6(4),t.Q6J("ngIf",e.config.num),t.xp6(1),t.Q6J("ngForOf",e.columns),t.xp6(1),t.Q6J("ngIf",e.config.delete||e.config.update),t.xp6(2),t.Q6J("ngForOf",t.Dn7(12,7,t.Dn7(13,11,e.rows,e.searching_text,e.config.searchBy||"title"),e.config,e.sort_type)),t.xp6(3),t.Q6J("ngIf",e.config.perPage||e.config.formCreate&&e.config.create))},dependencies:[g.sg,g.O5,g.tP,s.Fj,s.JJ,s.On,p._k,p.Cf,p.sn],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}.wtable[_ngcontent-%COMP%]{background:var(--c-bg-secondary);box-shadow:var(--c-shadow);border-radius:10px;padding:20px 20px 70px;max-width:1210px;height:auto;margin:0 auto;position:relative}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]{padding-bottom:80px}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed}.wtable[_ngcontent-%COMP%]   .table-flex[_ngcontent-%COMP%]{display:flex}.wtable[_ngcontent-%COMP%]   .table-flex._jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.wtable[_ngcontent-%COMP%]   .table-flex._ai-c[_ngcontent-%COMP%]{align-items:center}.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]{grid-column:1;justify-self:start;cursor:pointer;font-size:40px;border:0;display:flex;justify-content:center;align-items:center;width:40px;height:40px;border-radius:50%;background-color:#53a1d6;color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-search[_ngcontent-%COMP%]{position:relative;display:flex;padding:10px 0}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__input[_ngcontent-%COMP%]{max-width:300px;transition:.5s all ease-in-out;opacity:1}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:before{background:#334d6e}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:after{border-color:#334d6e}.wtable[_ngcontent-%COMP%]   .table-search__input[_ngcontent-%COMP%]{max-width:0;transition:.5s all ease-in-out;border:0;border-bottom:1px solid #334d6e;opacity:0}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]{width:40px;position:relative;height:35px;transition:all 1s;z-index:4;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:before{content:"";position:absolute;margin:auto;inset:12px 0 0 15px;width:8px;height:2px;background:#9f9f9f;transform:rotate(45deg);transition:.5s}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:after{content:"";position:absolute;margin:auto;inset:-5px 0 0 -5px;width:15px;height:15px;border-radius:50%;border:2px solid #9f9f9f;transition:all .5s}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-header__sort[_ngcontent-%COMP%]{position:relative;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-header__sort[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{transform:rotate(90deg);font-size:var(--fs);position:absolute;top:3px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:relative;padding:10px;text-align:center;border-right:2px solid var(--c-border);border-bottom:.5px solid var(--c-border);font-weight:500;font-size:var(--fs);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);text-transform:capitalize;color:var(--c-text-primary);overflow:hidden;text-overflow:ellipsis}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{opacity:0;transition:.3s all ease-in-out}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover   .icon-arrow[_ngcontent-%COMP%]{opacity:1;transition:.3s all ease-in-out}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table-header__sort._sortActiveDown[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{transform:rotate(-90deg);opacity:1}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table-header__sort._sortActiveUp[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{opacity:1}@media all and (max-width: 991px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:none;text-align:left}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{width:160px}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{cursor:pointer;padding:10px;text-align:center;vertical-align:middle;border-right:2px solid var(--c-border);border-bottom:2px dashed var(--c-border);font-size:calc(var(--fs) - 2px);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);color:var(--c-text-primary);word-break:break-word;display:table-cell}@media all and (max-width: 991px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;text-align:left;border:2px solid var(--c-border)}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);display:inline-block;font-weight:500;font-size:var(--fs);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);text-transform:capitalize;color:var(--c-text-primary);text-overflow:ellipsis}@media (min-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{display:none}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:2px solid var(--c-border)}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:none}@media (max-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:2px solid var(--c-border)}}@media (max-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{margin-top:30px}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{border-right:none}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]{margin-bottom:30px}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:15px}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]{height:65px;display:grid;grid-template-columns:repeat(12,1fr);gap:10px;position:absolute;width:100%;left:0;bottom:0;padding:0 20px;align-items:center}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]{height:80px;padding:10px 20px;flex-direction:column}}.wtable[_ngcontent-%COMP%]   .table-footer__pagination[_ngcontent-%COMP%]{grid-column:12;justify-self:end;display:flex;align-items:center}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]{border:0;background:none;width:30px;height:30px;margin-right:10px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid transparent;border-radius:100px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{position:absolute;width:2px;height:90%;background-color:#334d6e;top:8%}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid #334d6e;border-right:2px solid #334d6e;transform:rotate(135deg);left:2px;top:2px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]:disabled   i[_ngcontent-%COMP%]:after{border-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]:disabled   i[_ngcontent-%COMP%]:before{background:#9f9f9f}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._start[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{left:8px;top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._start[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{display:block;left:2px;content:""}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._left[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._right[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{transform:rotate(315deg);top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._end[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{left:-3px;top:4px;transform:rotate(315deg)}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._end[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{display:block;left:11px;content:""}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page[_ngcontent-%COMP%]{grid-column:2/span 10;justify-self:end;font-size:12px;color:#9f9f9f;letter-spacing:1px;display:flex;align-items:center}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]{position:relative;margin:0 10px;color:#334d6e;font-weight:700}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:11px 24px;border-radius:3px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]:hover{background-color:#53a1d6;color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{position:absolute;background-color:var(--c-bg-secondary);width:100%;bottom:100%;flex-direction:column;border-radius:0 0 3px 3px;display:none;z-index:999}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:11px 24px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#53a1d6;color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]{font-weight:700}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown.open[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{border-radius:0 0 3px 3px;border-top:solid 1px #9f9f9f}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown.open[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}.wtable[_ngcontent-%COMP%]   .field-form[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;background-color:var(--c-bg-secondary);z-index:11;display:flex;flex-direction:column}.wtable[_ngcontent-%COMP%]   .field-form__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;overflow-y:auto;padding:20px;flex-grow:1}.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{color:var(--c-bg-secondary);border-radius:5px;margin:5px;flex-basis:calc(20% - 10px)}@media screen and (max-width: 900px){.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{flex-basis:calc(50% - 10px)}}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{flex-basis:calc(100% - 10px)}}.wtable[_ngcontent-%COMP%]   .field-form__span[_ngcontent-%COMP%]{display:block;color:#9f9f9f;font-weight:700;margin-bottom:5px}.wtable[_ngcontent-%COMP%]   .field-form__input[_ngcontent-%COMP%]{width:100%;padding:10px;color:#334d6e;border:1px solid #9f9f9f;border-radius:10px}.wtable[_ngcontent-%COMP%]   .field-form__input[_ngcontent-%COMP%]::placeholder{text-transform:capitalize}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;padding:20px;background-color:#e0e0e0}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;margin-right:20px;padding:10px 20px;border:0;outline:0;border-radius:10px;color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button._cancel[_ngcontent-%COMP%]{background-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button._create[_ngcontent-%COMP%]{background-color:#53a1d6}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}@media all and (max-width: 991px){.wtable[_ngcontent-%COMP%]{width:90%}}']})},3289:(m,b,_)=>{_.d(b,{Y0:()=>l,bk:()=>g,i$:()=>s,nQ:()=>p});var t=_(8256);class l{constructor(a){this.template=a}}l.\u0275fac=function(a){return new(a||l)(t.Y36(t.Rgc))},l.\u0275dir=t.lG2({type:l,selectors:[["ng-template","cell",""]],inputs:{cell:"cell"}});class g{constructor(a){this.template=a}}g.\u0275fac=function(a){return new(a||g)(t.Y36(t.Rgc))},g.\u0275dir=t.lG2({type:g,selectors:[["ng-template","sort",""]],inputs:{cell:"cell"}});class s{constructor(a){this.template=a}}s.\u0275fac=function(a){return new(a||s)(t.Y36(t.Rgc))},s.\u0275dir=t.lG2({type:s,selectors:[["ng-template","actions",""]]});class p{constructor(a){this.template=a}}p.\u0275fac=function(a){return new(a||p)(t.Y36(t.Rgc))},p.\u0275dir=t.lG2({type:p,selectors:[["ng-template","customEdit",""]]})}}]);