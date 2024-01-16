/*-----Favicon-----*/
$(document.head).append("<link rel='icon' href='img/logo.png'>")

window.charInfoTbl = function(obj, header) {
    let html = "<table><tbody><tr><th class='charinfohdr'>"+ header +"</th></tr>";
    for (var key in obj) {
        html += "<tr><th class='charinfosubhdr'>" + key + "</th><td>" + obj[key] + "</td></tr>";
    };
    html += "</tbody></table>";
return html;
};

window.charInfoTblSub = function(obj, header) {
    let html = "<table><tbody><tr><th class='charinfohdr'>"+ header +"</th></tr>";
    for (var key in obj) {
        html += "<tr><th class='charinfosubhdr'>" + key + "</th><td>" + obj[key].level + "</td><td>" + obj[key].desc + "</td></tr>";
    };
    html += "</tbody></table>";
    return html;
}

window.Stamina = function (CurST, MaxST, BarID, Horizontal, Container) {
	if (Container == undefined) {
		Container = document;
	}
	var ST = parseInt((CurST / MaxST) * 100).clamp(0, 100);
	var BarElement = $(Container).find("#" + BarID);
	if (Horizontal) {
		BarElement.css({ width: ST + "%" });
	} else {
		BarElement.css({ height: ST + "%" });
	}

    var lit = 50 * ((CurST / MaxST) * 1.2);
    var col = "hsl(180, 100%, " + lit + "%)";
	BarElement.css("background-color", col);

	if (CurST % 1 != 0) {
		CurST = CurST.toFixed(2);
	}

	if (MaxST % 1 != 0) {
		MaxST = MaxST.toFixed(2);
	}

	BarElement.attr("title", CurST + "/" + MaxST + " Stamina");
    $(Container).find("#ui-stamina").text(CurST + "/" + MaxST);
	$(Container).find("#" + BarID + "bkg").attr("title", CurST + "/" + MaxST + " Stamina");
};

window.Life = function (CurHP, MaxHP, BarID, Horizontal, Container) {
	if (Container == undefined) {
		Container = document;
	}
	var HP = parseInt((CurHP / MaxHP) * 100).clamp(0, 100);
	var BarElement = $(Container).find("#" + BarID);
	if (Horizontal) {
		BarElement.css({ width: HP + "%" });
	} else {
		BarElement.css({ height: HP + "%" });
	}

    var lit = 47 * ((CurHP / MaxHP) * 1.2);
    var col = "hsl(348, 83%, " + lit + "%)";
	BarElement.css("background-color", col);

	if (CurHP % 1 != 0) {
		CurHP = CurHP.toFixed(2);
	}

	if (MaxHP % 1 != 0) {
		MaxHP = MaxHP.toFixed(2);
	}

	BarElement.attr("title", CurHP + "/" + MaxHP + " Lifeforce");
    $(Container).find("#ui-life").text(CurHP + "/" + MaxHP);
	$(Container).find("#" + BarID + "bkg").attr("title", CurHP + "/" + MaxHP + " Lifeforce");
};

window.Sanity = function (CurSan, MaxSan, BarID, Horizontal, Container) {
	if (Container == undefined) {
		Container = document;
	}
	var SAN = parseInt((CurSan / MaxSan) * 100).clamp(0, 100);
	var BarElement = $(Container).find("#" + BarID);
	if (Horizontal) {
		BarElement.css({ width: SAN + "%" });
	} else {
		BarElement.css({ height: SAN + "%" });
	}

    var lit = 65 * ((CurSan / MaxSan) * 1.3);
    var col = "hsl(260, 60%, " + lit + "%)";
	BarElement.css("background-color", col);

	if (CurSan % 1 != 0) {
		CurSan = CurSan.toFixed(2);
	}

	if (MaxSan % 1 != 0) {
		MaxSan = MaxSan.toFixed(2);
	}

	BarElement.attr("title", CurSan + "/" + MaxSan + " Sanity");
    $(Container).find("#ui-sanity").text(CurSan + "/" + MaxSan);
	$(Container).find("#" + BarID + "bkg").attr("title", CurSan + "/" + MaxSan + " Sanity");
};

window.FocusStat = function (CurCon, MaxCon, BarID, Horizontal, Container) {
	if (Container == undefined) {
		Container = document;
	}
	var CON = parseInt((CurCon / MaxCon) * 100).clamp(0, 100);
	var BarElement = $(Container).find("#" + BarID);
	if (Horizontal) {
		BarElement.css({ width: CON + "%" });
	} else {
		BarElement.css({ height: CON + "%" });
	}

    var lit = 59 * ((CurCon / MaxCon) * 1.3);
    var col = "hsl(84, 100%, " + lit + "%)";
	BarElement.css("background-color", col);

	if (CurCon % 1 != 0) {
		CurCon = CurCon.toFixed(2);
	}

	if (MaxCon % 1 != 0) {
		MaxCon = MaxCon.toFixed(2);
	}

	BarElement.attr("title", CurCon + "/" + MaxCon + " Focus");
    $(Container).find("#ui-focus").text(CurCon + "/" + MaxCon);
	$(Container).find("#" + BarID + "bkg").attr("title", CurCon + "/" + MaxCon + " Focus");
};

// Simple Inventory, for SugarCube 2, by Chapel
        // v3.0.0-beta1, 2022-07-25, 19f255d958852e55a8a3afcde5c53331f0d938e8
    ;"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}!function(){var t={description:"",handler:null,displayName:"",consumable:!0,unique:!1,permanent:!1},e=new Map,n=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:clone(t),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(_classCallCheck(this,n),!e||"string"!=typeof e)throw new Error("invalid item ID");if("object"!==_typeof(i))throw new Error("invalid item definition");Object.assign(this,Object.assign(t,i)),this.id=e,this.tags=r instanceof Array?r:"string"==typeof r?[r]:[]}return _createClass(n,[{key:"name",get:function(){return this.displayName||this.id},set:function(t){this.displayName=t}},{key:"use",value:function(){return"string"==typeof this.handler?$.wiki(this.handler):"function"==typeof this.handler&&this.handler(this),this}},{key:"inspect",value:function(){return Dialog.setup(this.name,"simple-inventory item-description"),Dialog.wiki(this.description),Dialog.open(),this}}],[{key:"is",value:function(t){return t instanceof n}},{key:"add",value:function(t,i,r){var a=new n(t,i,r);return e.set(t,a),a}},{key:"get",value:function(t){return e.get(t)}},{key:"has",value:function(t){return e.has(t)}},{key:"list",get:function(){return e}}]),n}();setup.Item=n,window.Item=window.Item||n}(),function(){var t=setup.Item,e=!1,n="&hellip;",i={inspect:"Inspect",use:"Use",drop:"Drop",stack:"stack",take:"Take",give:"Give",stackPre:"&nbsp;&times;&nbsp;",stackPost:"&nbsp;"},r={};function a(e){return t.has(e)&&t.get(e).unique}function s(e){return t.has(e)&&t.get(e).permanent}function o(t){return t&&"string"==typeof t&&t.trim()}var u=function(){function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];_classCallCheck(this,u),this.data=clone(t),this.tags=e instanceof Array?e:"string"==typeof e?[e]:[]}return _createClass(u,[{key:"emit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u.emit(t,this,e),this}},{key:"array",get:function(){var t=this,e=[];return Object.keys(this.data).forEach((function(n){if(e.push(n),t.data[n]>1)for(var i=1;i<t.data[n];i++)e.push(n)})),e}},{key:"list",get:function(){return Object.keys(this.data)}},{key:"length",get:function(){return this.array.length}},{key:"uniqueLength",get:function(){return this.list.length}},{key:"table",get:function(){return this.data}},{key:"count",value:function(t){return t?this.data[t]||0:this.length}},{key:"has",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.data[t]>=e}},{key:"hasAll",value:function(){var t=this,e=[].slice.call(arguments).flat(1/0);return e.every((function(e){return t.has(e)}))}},{key:"hasAny",value:function(){var t=this,e=[].slice.call(arguments).flat(1/0);return e.some((function(e){return t.has(e)}))}},{key:"compare",value:function(t){var e=this,n=u.itemset(t);return Object.keys(n).every((function(t){return e.has(t,n[t])}))}},{key:"merge",value:function(t){var e=this,n=u.itemset(t);return Object.keys(n).forEach((function(t){u.change(e,t,n[t])})),n}},{key:"unmerge",value:function(t){var e=this,n={},i=u.itemset(t);return Object.keys(i).forEach((function(t){e.has(t,i[t])?n[t]=i[t]:e.has(t)&&(n[t]=e.count(t)),u.change(e,t,i[t],!0)})),n}},{key:"pickup",value:function(){var t=this.merge(u.parseArgList.apply(null,arguments));return this.emit("update",{delta:t}),this}},{key:"drop",value:function(){var t=this.unmerge(u.parseArgList.apply(null,arguments));return this.emit("update",{delta:t}),this}},{key:"empty",value:function(){var t=clone(this.data);return this.data={},this.emit("update",{delta:t}),this}},{key:"transfer",value:function(t){var e=u.parseArgList.apply(null,[].slice.call(arguments).slice(1));if(!u.is(t))throw new TypeError("target inventory is not an inventory instance");var n=this.unmerge(e);return t.merge(n),this.emit("update",{target:t,delta:n}),this}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"iterate",value:function(t){var e=this;return"function"!=typeof t||this.list.forEach((function(n){t(n,e.data[n])})),this}},{key:"use",value:function(e){if(t.has(e)){var n=t.get(e);if(n.use(),n.consumable){u.change(this,e,1,!0);var i={};i[e]=1,this.emit("update",{delta:i})}return this.emit("use",{item:n}),this}}},{key:"clone",value:function(){return new u(this.data||{},this.tags||[])}},{key:"toJSON",value:function(){return JSON.reviveWrapper("new setup.Inventory("+JSON.stringify(this.data)+", "+JSON.stringify(this.tags)+")")}}],[{key:"confirm",get:function(){return e},set:function(t){e="string"==typeof t&&"all"===t.trim().toLowerCase()?"all":"string"==typeof t&&"stack"===t.trim().toLowerCase()?"stack":!!t}},{key:"emptyMessage",get:function(){return n},set:function(t){"string"==typeof t&&(n=t)}},{key:"strings",get:function(){return Object.assign(clone(i),r)},set:function(t){"object"===_typeof(t)&&(r=Object.assign(r,clone(t)))}},{key:"change",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(0!==n){if(t instanceof u&&(t=t.data),"object"!==_typeof(t)){if(t)throw new TypeError("cannot access inventory data");t={}}if(!o(e))throw new TypeError("invalid item name/id");if("number"==typeof n&&!Number.isNaN(n)&&Number.isInteger(n)||(n=1),i&&(n*=-1),n>0){if(Object.keys(t).includes(e)&&a(e))return;Object.keys(t).includes(e)||(t[e]=0),t[e]+=n}else{if(s(e))return;Object.keys(t).includes(e)&&"number"==typeof t[e]&&(t[e]+=n),t[e]<=0&&delete t[e]}return t}}},{key:"itemset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u.is(t)&&(t=t.data),"object"!==_typeof(t))return{};var e={};return Object.keys(t).forEach((function(n){"number"==typeof t[n]&&Number.isInteger(t[n])&&0!==t[n]&&(e[n]=t[n])})),e}},{key:"parseArgList",value:function(){var t=[].slice.call(arguments).flat(1/0);if(t.length%2!=0)throw new Error("item sets should be pairs of item IDs and numbers");var e={};return t.forEach((function(n,i){i%2==0&&(e[n]=t[i+1])})),e}},{key:"is",value:function(t){return t instanceof u}},{key:"emit",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};$(document).trigger(Object.assign({type:":inventory-"+t+".simple-inventory",inventory:e,target:null,delta:{},item:null},n))}},{key:"create",value:function(t,e){return new u(t,e)}}]),u}();setup.Inventory=u,window.Inventory=window.Inventory||u}(),function(){var t=setup.Item,e=setup.Inventory;function n(e){return t.has(e)&&t.get(e).permanent}function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Alert",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Are you sure?";if(!t||"function"!=typeof t)throw new Error("Invalid confirmation callback!");if(e.confirm)if("all"!==e.confirm||"all"===i)if("stack"!==e.confirm||i){var s={display:"inline-block",float:"right"},o=$(document.createElement("div")),u=$(document.createElement("p")).append(a),l=$(document.createElement("div")).addClass("confirmation-buttons"),c=$(document.createElement("button")).append("Okay").addClass("confirm-yes").css(Object.assign(s,{"margin-right":"0.5rem"})),d=$(document.createElement("button")).append("Cancel").addClass("confirm-no").css(s);t&&"function"==typeof t&&c.ariaClick(t),n&&"function"==typeof n&&d.ariaClick(n),l.append(d,c),o.append(u,l),Dialog.setup(r,"simple-inventory confirmation"),Dialog.append(o),Dialog.open()}else t();else t();else t()}function r(t){var e=$(document.createElement("span")).addClass("spacer");return t&&e.wiki(""+t),e}function a(n,i,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r=r||e.strings.inspect,$(document.createElement(a?"button":"a")).addClass("inspect-link").wiki(""+r).ariaClick((function(){t.get(i).inspect()}))}function s(t,n,i){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i=i||e.strings.use,$(document.createElement(r?"button":"a")).addClass("use-link").wiki(""+i).ariaClick((function(){t.use(n)}))}function o(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return r=r||(s?e.strings.give:e.strings.drop),$(document.createElement(a?"button":"a")).addClass("drop-link").wiki(""+r).ariaClick((function(){i((function(){s&&e.is(s)?t.transfer(s,n,1):t.drop(n,1),Dialog.close()}),(function(){Dialog.close()}))}))}function u(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return r=r||(s?e.strings.give:e.strings.drop)+"&nbsp;"+e.strings.stack,$(document.createElement(a?"button":"a")).addClass("stack-link drop-link").wiki(""+r).ariaClick((function(){i((function(){s&&e.is(s)?t.transfer(s,n,t.count(n)):t.drop(n,t.count(n)),Dialog.close()}),(function(){Dialog.close()}))}))}function l(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n=n||(a?e.strings.give:e.strings.drop),$(document.createElement(r?"button":"a")).addClass("all-link drop-link").wiki(n+" all").ariaClick((function(){t.isEmpty()||i((function(){a&&e.is(a)?(a.merge(t),t.empty()):t.empty(),Dialog.close()}),(function(){Dialog.close()}),!0)}))}function c(t,n,i,r){return i=i||e.strings.stackPre,r=r||e.strings.stackPost,$(document.createElement("span")).addClass("item-count").append(""+i+(t.count(n)||0)+r)}function d(i){var d,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{description:!0,use:!0,transfer:null,drop:!0,all:!0,stack:!0,dropActionText:"",classes:""},p=$(document.createElement("ul")).addClass("simple-inventory-list");if(i.length){if(d=i.list.map((function(l){var d=[];return f.description&&t.has(l)&&t.get(l).description?d.push(a(i,l,t.has(l)?t.get(l).name:l)):d.push($(document.createElement("span")).append(t.has(l)?t.get(l).name:l).addClass("item-name")),d.push(c(i,l)),f.use&&t.has(l)&&t.get(l).handler?d.push(s(i,l)):d.push(r()),(f.transfer&&e.is(f.transfer)||f.drop)&&!n(l)?(d.push(o(i,l,f.dropActionText,!1,f.transfer||null)),i.count(l)>1&&f.stack?d.push(u(i,l,f.dropActionText+"&nbsp;"+e.strings.stack,!1,f.transfer||null)):d.push(r())):d.push(r()),$(document.createElement("li")).append(d).addClass("simple-inventory-listing")})),f.all){var h=$(document.createElement("li")).addClass("all-listing simple-inventory-listing").append([r("&mdash;"),r(),r(),l(i,f.dropActionText,!1,f.transfer||null)]);d.push(h)}}else d=$(document.createElement("li")).addClass("simple-inventory-listing").append($(document.createElement("span")).wiki(e.emptyMessage));return p.append(d),p}e.prototype.interface=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this,r=$(document.createElement("div")).addClass("simple-inventory-wrapper");return r.append(d(this,e)),$(document).on(":inventory-update.simple-inventory.gui-built-in",(function(){r.length?r.empty().append(d(i,e)):$(document).off(":inventory-update.simple-inventory.gui-built-in")})),n&&n instanceof $?t=n:n&&(t=$(n)),t&&r.appendTo(t),r}}(),function(){setup.Inventory,setup.Item;var t=".simple-inventory-userland",e=":inventory-update.simple-inventory"+t,n=":inventory-use.simple-inventory"+t;function i(t){return t&&"function"==typeof t}Object.assign(setup.Inventory,{events:{update:{on:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(t)&&$(document).on(e+n,t)},one:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(t)&&$(document).one(e+n,t)},off:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";$(document).off(e+t)}},use:{on:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(t)&&$(document).on(n+e,t)},one:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(t)&&$(document).one(n+e,t)},off:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";$(document).off(n+t)}}}})}(),function(){var t=function(t){if(!Story.has(t))return{};var e,n,i,r,a=(e=Story.get(t).text,i=function(t){return t.replace(/\r+/g,"\n").replace(/\n+/,"\n").replace(/ +/g," ").trim().split(/\n/g)}(e),r={},i.forEach((function(t){var e=function(t,e){return e=e||":",t.trim().split(e)}(t,n);r[e[0].trim()]=e[1].trim()})),r);return a}("inventory.strings");t.empty&&"string"==typeof t.empty&&t.empty.trim()&&(setup.Inventory.emptyMessage=t.empty,delete t.empty),setup.Inventory.strings=t||{}}(),function(){var t=setup.Item,e=setup.Inventory;function n(t){return t&&"string"==typeof t&&t.length>2&&("$"===t[0]||"_"===t[0])}function i(t){if(n(t)&&(t=State.getVar(t)),e.is(t))return t}Macro.add(["item","consumable"],{tags:["description","tags","unique","permanent"],handler:function(){var e,n,i,r,a=null,s=!1,o=!1,u=!1;if(State.length>0)return this.error("items must be defined in `StoryInit` or story JavaScript!");if(!this.args[0]||"string"!=typeof this.args[0]||!this.args[0].trim())return this.error("invalid item ID");if(e=this.args[0].trim(),"consumable"===this.name&&(a=this.payload[0].contents||null,s=!0),this.args[1]&&(n=this.args[1]),this.payload.length>1){var l=this.payload.find((function(t){return"description"===t.name})),c=this.payload.find((function(t){return"tags"===t.name})),d=this.payload.find((function(t){return"unique"===t.name})),f=this.payload.find((function(t){return"permanent"===t.name}));l&&(i=l.contents.trim()),c&&(r=c.args.flat(1/0)),d&&(o=!0),f&&(u=!0)}t.add(e,{displayName:n||"",description:i||"",handler:a,consumable:s,unique:o,permanent:u},r)}}),Macro.add("newinv",{handler:function(){var t=this.args.raw.trim().split(" ").first().replace(/["']/g,"").trim();if(!n(t))return this.error("argument must be a story or temporary variable!");State.setVar(t,new e({},this.args.flat(1/0).slice(1)))}}),Macro.add(["pickup","drop"],{handler:function(){var t=i(this.args[0]);return t?this.args.length<3?this.error("no items to pick up were provided"):void t[this.name](this.args.slice(1)):this.error("first argument must be a valid inventory!")}}),Macro.add("dropall",{handler:function(){var t=i(this.args[0]);if(!t)return this.error("first argument must be a valid inventory!");t.empty()}}),Macro.add(["transfer","merge","unmerge"],{handler:function(){var t=i(this.args[0]);if(!t)return this.error("first argument must be a valid inventory!");var e=i(this.args[1]);if(!e)return this.error("second argument must be a valid inventory!");if("transfer"===this.name){if(this.args.length<4)return this.error("no items to transfer were provided");t.transfer(e,this.args.slice(2))}else t[this.name](e)}}),Macro.add(["inv","take","give"],{handler:function(){var t=null,n=i(this.args[0]);if(!n)return this.error("first argument must be a valid inventory!");this.args[1]&&i(this.args[1])&&(t=i(this.args[1]));var r={description:this.args.includesAny("inspect","description"),use:this.args.includes("use"),transfer:t,drop:this.args.includes("drop"),all:this.args.includes("all"),stack:this.args.includes("stack"),dropActionText:"inv"===this.name?"Drop":e.strings[this.name.trim().toLowerCase()],classes:"macro-".concat(this.name)};n.interface(r,$(this.output))}})}(),function(){var t=setup.Item,e=setup.Inventory;function n(t,e,n){if("object"!==_typeof(e))throw new TypeError("the extension should be a plain generic object holding the properties and methods you want to add");Object.keys(e).forEach((function(i){if(t[i]&&!n)throw new Error('Cannot override existing property "'+i+'"!');t[i]=e[i]}))}Object.assign(e,{extend:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(e,t,i)},extendPrototype:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(e.prototype,t,i)}}),Object.assign(t,{extend:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(t,e,i)},extendPrototype:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(t.prototype,e,i)}})}();
// End Simple Inventory

// Speech Box System - Start
    Macro.add('speech', {
        tags : null,
        handler : function () {
            if (this.args[0] == "plr"){
                var id = this.args[0], name = State.getVar("$plr.name.firstName");     
                var img = State.getVar("$plr.img");
                
                var output = '<div class="speech ' + id + '">';
                output += '<span class="avatar" style=\x27background-image: url(\x22' + img + '\x22)\x27></span>';
                output += name + '<hr>' + this.payload[0].contents + '</div>';
                
            } else {
                var id = this.args[0], name = id[0].toUpperCase() + id.substring(1);

                var output = '<div class="speech ' + id + '">';
                output += '<span class="avatar"></span>';
                output += name + '<hr>' + this.payload[0].contents + '</div>';
            };
            $(this.output).wiki(output);
        }
    });
// Speech Box System - End

/* hovertip v2.0 - Start */
window.UpdateHoverTipTxt = function (container) {
	if (Engine.isIdle()) {
		clearInterval(HTTIntervalID);
		if (container === undefined) {
			container = $(document);
		} else {
			container = $(container);
		}
		var i, id, top, left, parent, elementList, element, hoverPos, boxPos, zindex;
		elementList = container.find('span[id^="hoverTipTxt"]');
		for (i = 0; i < elementList.length; i++) {
			element = $(elementList[i]);
			id = elementList[i].id.substring(11);
			/* Find parent hoverTip item on the page. */
			parent = $(container).find("#hoverTip" + (id));
			/* Position bottom of hoverTipTxt just above the parent. */
			top = Math.round(-element.outerHeight() - 6);
			/* Center hoverTipTxt horizontally over parent. */
			left = Math.round((parent.outerWidth() - element.outerWidth()) / 2);
			/* See if the hoverTip is contained by something with a higher z-index. */
			zindex = element.css("z-index");
			if (zindex === "auto") {
				zindex = 0;
			} else {
				zindex = parseInt(zindex, 10);
			}
			while (parent.parent()[0] !== document) {
				if ((parent.parent().css("z-index") !== "auto") && (parseInt(parent.parent().css("z-index"), 10) > zindex)) {
					/* Get container rect. */
					boxPos = parent[0].getBoundingClientRect();
					break;
				}
				parent = parent.parent();
			}
			/* Update position. */
			element.css({ top: top, left: left });
			hoverPos = element[0].getBoundingClientRect();
			/* Make sure the text isn't outside the bottom of the screen. */
			if (hoverPos.top > window.innerHeight - hoverPos.height - 10) {
				top -= hoverPos.top - (window.innerHeight - hoverPos.height - 10);
			}
			/* Make sure the text isn't outside the top of the screen. */
			if (hoverPos.top < 4) {
				top -= hoverPos.top - 4;
			}
			/* Make sure the text isn't outside the right of the screen. */
			if (hoverPos.left > window.innerWidth - hoverPos.width - 26) {
				left -= hoverPos.left - (window.innerWidth - hoverPos.width - 26);
			}
			/* Make sure the text isn't outside the left of the screen. */
			if (hoverPos.left < 4) {
				left -= hoverPos.left - 4;
			}
			/* Update position. */
			element.css({ top: Math.round(top), left: Math.round(left) });
			hoverPos = element[0].getBoundingClientRect();
			if (boxPos) {  /* Fit within dialog boxes and the like. */
				/* Make sure the text isn't outside the bottom of the box. */
				if (hoverPos.top > boxPos.bottom - hoverPos.height - 10) {
					top -= hoverPos.top - (boxPos.bottom - hoverPos.height - 10);
				}
				/* Make sure the text isn't outside the top of the box. */
				if (hoverPos.top < boxPos.top + 4) {
					top -= hoverPos.top - (boxPos.top + 4);
				}
				/* Make sure the text isn't outside the right of the box. */
				if (hoverPos.left > boxPos.right - hoverPos.width - 26) {
					left -= hoverPos.left - (boxPos.right - hoverPos.width - 26);
				}
				/* Make sure the text isn't outside the left of the box. */
				if (hoverPos.left < boxPos.left + 4) {
					left -= hoverPos.left - boxPos.left - 4;
				}
				/* Update position. */
				element.css({ top: Math.round(top), left: Math.round(left) });
			}
		}
	} else {
		clearInterval(HTTIntervalID);
		HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
	}
};
/*  Waits for passage to be fully rendered before doing anything.  */
var HTTIntervalID = 0;
$(document).on(":passageend", function (ev) {
	UpdateHoverTipTxt();
});
$(window).on("resize scroll", function (ev) {
	clearInterval(HTTIntervalID);
	HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
$("#ui-bar-toggle").on("click", function (ev) {
	clearInterval(HTTIntervalID);
	HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
/* <<hovertip>> macro */
    Macro.add("hovertip", {
        tags	 : null,
        handler  : function () {
            if (this.args.length > 0) {
                var mw = "";
                if ((this.args.length > 1) && (!isNaN(parseInt(this.args[1], 10)))) {
                    mw = ' style="max-width: ' + parseInt(this.args[1], 10) + 'px;"';
                }
                if (State.temporary.HoverTipCount == undefined) {
                    State.temporary.HoverTipCount = 1;
                } else {
                    State.temporary.HoverTipCount++;
                }
                while ($("#hoverTip" + State.temporary.HoverTipCount).length) {
                    /* Found an existing hoverTip. */
                    State.temporary.HoverTipCount++;
                }
                var output = '<span id="hoverTip' + State.temporary.HoverTipCount +
                        '" class="hoverTipTxt hoverTip" tabindex="0" ' +
                        'onmouseenter="UpdateHoverTipTxt();">' +
                        this.payload[0].contents + '<span id="hoverTipTxt' +
                        State.temporary.HoverTipCount + '" class="hoverBox hoverTail"' +
                        mw + '>' + this.args[0] + '</span></span>';
                $(this.output).wiki(output);
            } else {
                $(this.output).wiki(this.payload[0].contents);
            }
        }
    });
/* hovertip v2.0 - End */

/* Create the Right UI Bar. */
var $rightUiBar = $('<div id="right-ui-bar"></div>').insertAfter("#ui-bar");

var rightTray = $rightUiBar.append('<div id="right-ui-bar-tray"><button id="right-ui-bar-toggle" tabindex="0" title="Toggle the Right UI bar" aria-label="Toggle the Right UI bar" type="button"></button></div>');

var rightBody = $rightUiBar.append('<div id="right-ui-bar-body"></div>');

/* Attach the toggle button click. */
$rightUiBar.find('#right-ui-bar-toggle').ariaClick({label : "Toggle the Right UI bar"}, () => $rightUiBar.toggleClass('stowed'));

/* Automatically show the contents of the StoryRightSidebar passage in the right-ui-bar-body element. */
postrender["Display Right Sidebar Contents"] = function (content, taskName) {
	setPageElement('right-ui-bar-body', 'StoryRightSidebar');
};