(function(t){function e(e){for(var i,r,l=e[0],n=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,l=1;l<s.length;l++){var n=s[l];0!==o[n]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/soulclicker/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=n;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),o=s.n(i);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-center text-dark soulNum my-3"},[t._v("Soul Clicker")]),s("p",{staticClass:"text-danger text-shadow"},[t._v(" Click Hellkite dragon to harvest souls ")]),s("img",{staticClass:"mainImg",attrs:{alt:"Vue logo",src:"https://vignette.wikia.nocookie.net/darksouls/images/a/a6/Hellkite_Wyvern_Render.png/revision/latest?cb=20130714154316",height:"250px",ondragstart:"return false;"},on:{click:t.mine}}),s("h2",{staticClass:"text-info text-shadow"},[t._v(" Souls: "),s("span",{staticClass:"text-dark soulNum"},[t._v(" "+t._s(Math.floor(t.souls)))])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-6 col-md-5 order-2 order-md-1"},[s("div",{staticClass:"row justify-content-center"},[s("h2",{staticClass:"text-center text-danger text-shadow"},[t._v(" Click Upgrades ")]),s("div",{staticClass:"col-12"},[s("span",{on:{mouseover:function(e){!t.isMobile&&(t.clickHover=!0)},mouseleave:function(e){t.clickHover=!1}}},[t.clickHover?t._e():s("span",t._l(t.clickUpgrades,(function(e){return s("button",{key:e.name,staticClass:"m-1",on:{click:function(s){return t.buy(e)}}},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",[s("u",[t._v(t._s(e.name))])]),s("br"),s("b",{staticClass:"text-success price"},[t._v(" $"+t._s(Math.floor(e.cost)))]),s("br"),s("b",{staticClass:"itemBonus soulNum"},[t._v("+"+t._s(e.multiplier))]),s("b",[t._v(" x "),s("span",{staticClass:"equippedAmt"},[t._v(t._s(e.quantity))])])])})),0),t.clickHover?s("span",t._l(t.clickUpgrades,(function(e){return s("button",{key:e.name,staticClass:"m-1",on:{click:function(s){return t.buy(e)}}},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",{staticClass:"text-success price"},[t._v(" $"+t._s(Math.floor(e.cost)))]),s("br"),s("b",{staticClass:"itemBonus soulNum"},[t._v("+"+t._s(e.multiplier))]),s("b",[t._v(" x "),s("span",{staticClass:"equippedAmt"},[t._v(t._s(e.quantity))])]),s("br"),s("b",[t._v("/ click")]),s("br"),s("p",[t._v(" (Total: "),s("span",{staticClass:"soulNum"},[t._v("+"+t._s(e.quantity*e.multiplier))]),t._v(" / click) ")])])})),0):t._e()])]),s("h2",{staticClass:"text-center text-danger text-shadow"},[t._v(" Total: "),s("span",{staticClass:"text-dark soulNum"},[t._v(t._s(this.clickModifiersTotal))]),t._v(" / click ")])])]),s("div",{staticClass:"col-12 col-md-2 order-1 order-md-2"},[s("h3",{staticClass:"text-danger text-shadow mt-4"},[t._v("Equipment")]),this.equipment.covetousSilverSerpentRing.equipped?s("span",[s("span",{on:{mouseover:function(e){!t.isMobile&&(t.equipmentHover=!0)},mouseleave:function(e){t.equipmentHover=!1}}},t._l(t.equipment,(function(e){return s("button",{key:e.name,staticClass:"m-1 equippedItem"},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",{staticClass:"text-warning"},[t._v(" Equipped ")]),t.equipmentHover?s("span",[s("b",[s("u",[t._v(t._s(e.name))])]),s("br"),s("p",[t._v(t._s(e.description))])]):t._e()])})),0)]):s("span",[s("span",{on:{mouseover:function(e){!t.isMobile&&(t.equipmentHover=!0)},mouseleave:function(e){t.equipmentHover=!1}}},t._l(t.equipment,(function(e){return s("button",{key:e.name,staticClass:"m-1",on:{click:function(s){return t.equip(e)}}},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",{staticClass:"text-success price"},[t._v(" $"+t._s(Math.floor(e.cost)))]),s("br"),t.equipmentHover?s("span",[s("b",[s("u",[t._v(t._s(e.name))])]),s("br"),s("p",[t._v(t._s(e.description))])]):t._e()])})),0)])]),s("div",{staticClass:"col-6 col-md-5 order-3"},[s("div",{staticClass:"row justify-content-center"},[s("h2",{staticClass:"text-center text-danger text-shadow"},[t._v("Auto Upgrades")]),s("div",{staticClass:"col-12"},[s("div",{on:{mouseover:function(e){!t.isMobile&&(t.autoHover=!0)},mouseleave:function(e){t.autoHover=!1}}},[t.autoHover?t._e():s("div",t._l(t.autoUpgrades,(function(e){return s("button",{key:e.name,staticClass:"m-1",on:{click:function(s){return t.buy(e)}}},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",[s("u",[t._v(t._s(e.name))])]),s("br"),s("b",{staticClass:"text-success price"},[t._v(" $"+t._s(Math.floor(e.cost)))]),s("br"),s("b",{staticClass:"itemBonus soulNum"},[t._v("+"+t._s(e.multiplier)+" ")]),s("b",[t._v("x "),s("span",{staticClass:"equippedAmt"},[t._v(t._s(e.quantity))])])])})),0),t.autoHover?s("div",t._l(t.autoUpgrades,(function(e){return s("button",{key:e.name,staticClass:"m-1",on:{click:function(s){return t.buy(e)}}},[s("img",{staticClass:"btnImg",attrs:{src:e.imgUrl}}),s("br"),s("b",{staticClass:"text-success price"},[t._v(" $"+t._s(Math.floor(e.cost)))]),s("br"),s("b",{staticClass:"itemBonus soulNum"},[t._v("+"+t._s(e.multiplier))]),s("b",[t._v(" x "),s("span",{staticClass:"equippedAmt"},[t._v(t._s(e.quantity))])]),s("br"),s("b",[t._v("/ 2 seconds")]),s("br"),s("p",[t._v(" (Total: "),s("span",{staticClass:"soulNum"},[t._v("+"+t._s(e.quantity*e.multiplier))]),t._v(" / 2 seconds) ")])])})),0):t._e()])]),s("h2",{staticClass:"text-center text-danger text-shadow"},[t._v(" Total: "),s("span",{staticClass:"text-dark soulNum"},[t._v(t._s(this.autoModifiersTotal))]),t._v(" / 2 seconds ")])])])])])])])},a=[],r={data(){return{isMobile:!1,clickHover:!1,equipmentHover:!1,autoHover:!1,hover:!1,souls:0,equipment:{covetousSilverSerpentRing:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/4022.png",name:"Covetous Silver Serpent Ring",cost:1e6,equipped:!1,description:"Grants 20% more souls gained"}},autoUpgrades:{fireball:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/Fireball.png",name:"Fireball",cost:100,multiplier:1,quantity:0,description:"Adds +1 soul every 2 seconds for each Fireball owned"},poisonMist:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/Poison_Mist.png",name:"Poison Mist",cost:1e3,multiplier:5,quantity:0,description:"Adds +5 souls every 2 seconds for each Poison Mist owned"},greatChaosFireball:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/Great_Chaos_Fireball.png",name:"Great Chaos Fireball",cost:7500,multiplier:25,quantity:0,description:"Adds +25 souls every 2 seconds for each GCF owned"}},clickUpgrades:{dagger:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Dagger.png",name:"Dagger",cost:30,multiplier:1,quantity:0,description:"Adds +1 soul per click for each Dagger owned"},claymore:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/claymore.png",name:"Claymore",cost:200,multiplier:5,quantity:0,description:"Adds +5 souls per click for each Claymore owned"},greatLordGreatsword:{imgUrl:"https://darksouls.wiki.fextralife.com/file/Dark-Souls/great_lord_greatsword_1.png",name:"Great Lord Greatsword",cost:5e3,multiplier:25,quantity:0,description:"Adds +25 souls per click for each GLG owned"}}}},computed:{clickModifiersTotal(){let t=0;for(let e in this.clickUpgrades){let s=this.clickUpgrades[e];t+=s.multiplier*s.quantity}return t},autoModifiersTotal(){let t=0;for(let e in this.autoUpgrades){let s=this.autoUpgrades[e];t+=s.multiplier*s.quantity}return t}},mounted(){if(localStorage.souls&&(this.souls=localStorage.souls,this.souls++),localStorage.getItem("autoUpgrades"))try{this.autoUpgrades=JSON.parse(localStorage.getItem("autoUpgrades"))}catch(t){localStorage.removeItem("autoUpgrades")}if(localStorage.getItem("clickUpgrades"))try{this.clickUpgrades=JSON.parse(localStorage.getItem("clickUpgrades"))}catch(t){localStorage.removeItem("clickUpgrades")}if(localStorage.getItem("equipment"))try{this.equipment=JSON.parse(localStorage.getItem("equipment"))}catch(t){localStorage.removeItem("equipment")}setInterval(()=>{this.autoMine()},2e3)},methods:{mine(){this.souls++,this.equipment.covetousSilverSerpentRing.equipped?this.souls+=1.2*this.clickModifiersTotal:this.souls+=this.clickModifiersTotal},autoMine(){this.equipment.covetousSilverSerpentRing.equipped?this.souls+=1.2*this.autoModifiersTotal:this.souls+=this.autoModifiersTotal},buy(t){t.cost<=this.souls&&(this.souls-=t.cost,t.quantity++,t.cost*=1.15,this.saveAutoUpgrades(),this.saveClickUpgrades())},equip(t){t.cost<=this.souls&&(this.souls-=t.cost,t.equipped=!0,this.saveEquipment())},saveAutoUpgrades(){const t=JSON.stringify(this.autoUpgrades);localStorage.setItem("autoUpgrades",t)},saveClickUpgrades(){const t=JSON.stringify(this.clickUpgrades);localStorage.setItem("clickUpgrades",t)},saveEquipment(){const t=JSON.stringify(this.equipment);localStorage.setItem("equipment",t)},mq(){this.isMobile=window.matchMedia("(max-width: 400px)").matches}},watch:{souls(t){localStorage.souls=t}}},l=r,n=(s("034f"),s("2877")),c=Object(n["a"])(l,o,a,!1,null,null,null),u=c.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.facf972c.js.map