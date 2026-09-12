import{A as Gb,Bn as o_,D as Fn,E as Fd,En as ir,F as Hd,Gn as q_,Hn as p,It as Vg,Jn as s_,K as L_,Kn as qb,Ln as my,P as Ha,Qn as u_,U as Kr,V as KS,W as L,Wn as pv,Y as M,c as AV,er as uv,g as C_,hn as dv,i as $d,in as __,ln as av,nt as Nb,on as a_,pr as zd,tn as Zn,un as ba,ur as xd,vt as RV,w as Ev,y as D,zt as WI}from"./chunk-CU7S89Y6.js";import{A as Y,W as ie$1,_ as Ms,a as Dn,ct as xi,d as In,o as Ds,st as wn,t as As,y as Pn}from"./chunk-Duq5BCsB.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&pv(0)}function se(t,r){if(t&1&&(ba(0,`div`,1),a_(1,1),uv(2,pe,1,0,`ng-container`,2),Fd()),t&2){let e=o_();__(e.cx(`header`)),dv(`pBind`,e.ptm(`header`)),WI(2),dv(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&L_(0),t&2)zd(` `,o_(2).header(),` `)}function ue(t,r){t&1&&pv(0)}function fe(t,r){if(t&1&&(ba(0,`div`,1),Gb(1,me,1,1),uv(2,ue,1,0,`ng-container`,2),Fd()),t&2){let e=o_();__(e.cx(`title`)),dv(`pBind`,e.ptm(`title`)),WI(),qb(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),WI(),dv(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&L_(0),t&2)zd(` `,o_(2).subheader(),` `)}function he(t,r){t&1&&pv(0)}function ye(t,r){if(t&1&&(ba(0,`div`,1),Gb(1,_e,1,1),uv(2,he,1,0,`ng-container`,2),Fd()),t&2){let e=o_();__(e.cx(`subtitle`)),dv(`pBind`,e.ptm(`subtitle`)),WI(),qb(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),WI(),dv(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&pv(0)}function ge(t,r){t&1&&pv(0)}function be(t,r){if(t&1&&(ba(0,`div`,1),a_(1,2),uv(2,ge,1,0,`ng-container`,2),Fd()),t&2){let e=o_();__(e.cx(`footer`)),dv(`pBind`,e.ptm(`footer`)),WI(2),dv(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Vg(t)))(n||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends As{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Ds,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=ir();subheader=ir();style=ir();styleClass=ir();headerFacet=AV(wn);footerFacet=AV(In);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=AV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=L(null);constructor(){super(),Zn(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=RV(Pn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=xd({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(Ev(l,n.headerFacet,wn,5)(l,n.footerFacet,In,5)(l,n.contentTemplate,ie,4)(l,n.templates,Pn,4),Ha(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){u_(4);let d;Hd(d=$d())&&(n.headerTemplate=d.first),Hd(d=$d())&&(n.titleTemplate=d.first),Hd(d=$d())&&(n.subtitleTemplate=d.first),Hd(d=$d())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(C_(n._style()),__(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[q_([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),Nb([Ds]),av],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(s_(de),Gb(0,se,3,4,`div`,0),ba(1,`div`,1),Gb(2,fe,3,5,`div`,0),Gb(3,ye,3,5,`div`,0),ba(4,`div`,1),a_(5),uv(6,Te,1,0,`ng-container`,2),Fd(),Gb(7,be,3,4,`div`,0),Fd()),i&2&&(qb(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),WI(),__(n.cx(`body`)),dv(`pBind`,n.ptm(`body`)),WI(),qb(n.header()||n.titleTemplate||n._titleTemplate?2:-1),WI(),qb(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),WI(),__(n.cx(`content`)),dv(`pBind`,n.ptm(`content`)),WI(2),dv(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),WI(),qb(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[my,KS,Dn,Ms,Ds],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Kr({type:t});static ɵinj=Fn({imports:[Me,Dn,Ms,Dn,Ms]})}return t})();export{Ve as n,Me as t};