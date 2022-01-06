import{useApi as e}from"@directus/extensions-sdk";import{resolveComponent as t,openBlock as a,createElementBlock as n,normalizeClass as i,createVNode as s}from"vue";var r={props:{id:String,showHeader:{type:Boolean,default:!1},columnWidth:{type:String,default:""}},data:()=>({headers:[],items:[]}),created(){this.fetchData()},methods:{async fetchData(){const t=e(),{data:a}=await t(`sql-panel-api/${this.id}`);let n=this.columnWidth.split(",").map(parseFloat);a.headers.forEach((function(e,t){e.width=n[t]})),this.headers=a.headers,this.items=a.items}}};var d=[],o=[];!function(e,t){if(e&&"undefined"!=typeof document){var a,n=!0===t.prepend?"prepend":"append",i=!0===t.singleTag,s="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(i){var r=d.indexOf(s);-1===r&&(r=d.push(s)-1,o[r]={}),a=o[r]&&o[r][n]?o[r][n]:o[r][n]=l()}else a=l();65279===e.charCodeAt(0)&&(e=e.substring(1)),a.styleSheet?a.styleSheet.cssText+=e:a.appendChild(document.createTextNode(e))}function l(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var a=Object.keys(t.attributes),i=0;i<a.length;i++)e.setAttribute(a[i],t.attributes[a[i]]);var r="prepend"===n?"afterbegin":"beforeend";return s.insertAdjacentElement(r,e),e}}("\n.sql-panel-container[data-v-0129a3fb] {\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n",{}),r.render=function(e,r,d,o,l,h){const c=t("v-table");return a(),n("div",{class:i(["sql-panel-container",{"has-header":d.showHeader}])},[s(c,{showResize:!0,headers:l.headers,"onUpdate:headers":r[0]||(r[0]=e=>l.headers=e),items:l.items},null,8,["headers","items"])],2)},r.__scopeId="data-v-0129a3fb",r.__file="src/panel.vue";var l={id:"sql-panel",name:"SQL panel",icon:"box",description:"Show result of a stored SQL query as a table",component:r,options:[{field:"sql",name:"SQL query",type:"string",meta:{interface:"input-multiline",width:"full"}},{field:"columnWidth",name:"Coma separated list of column widths",type:"string",meta:{interface:"input",width:"full"}}],minWidth:12,minHeight:8};export{l as default};
