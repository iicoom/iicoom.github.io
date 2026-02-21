import{_ as a}from"./index-01c0bb82.js";import{d as r,r as p,z as u,D as v,E as i,f as c,B as m,v as f}from"./element-plus-b1d7f0ee.js";import{_ as w}from"./index-a31efbef.js";import"./echarts-71ab4440.js";const y={class:"ui-wrapper"},b=r({__name:"ui",setup(x){const o=p({x:20,y:20,width:80,height:700,isActive:!1});let s=0;const l=(e,t)=>{console.log("dragstop:",e,t),e<s/2?o.value.x=0:o.value.x=s-o.value.width};function d(){var e="";e+="网页可见区域宽："+document.body.clientWidth,e+=` 
网页可见区域高(总高度)：`+document.body.clientHeight,e+=` 
网页可见区域宽：`+document.body.offsetWidth+" (包括边线和滚动条的宽)",e+=` 
网页可见区域高：`+document.body.offsetHeight+" (包括边线的宽)",e+=` 
网页正文全文宽：`+document.body.scrollWidth,e+=` 
网页正文全文高：`+document.body.scrollHeight,e+=` 
网页被卷去的高(ff)：`+document.body.scrollTop,e+=` 
网页被卷去的高(ie)：`+document.documentElement.scrollTop,e+=` 
网页被卷去的左：`+document.body.scrollLeft,e+=` 
网页正文部分上：`+window.screenTop,e+=` 
网页正文部分左：`+window.screenLeft,e+=` 
屏幕分辨率的高(屏幕高度)：`+window.screen.height,e+=` 
屏幕分辨率的宽：`+window.screen.width,e+=` 
屏幕可用工作区高度：`+window.screen.availHeight,e+=` 
屏幕可用工作区宽度：`+window.screen.availWidth,e+=` 
你的屏幕设置是 `+window.screen.colorDepth+" 位彩色",console.log(e),s=document.body.clientWidth}return d(),(e,t)=>(u(),v("div",y,[t[6]||(t[6]=i("div",{style:{position:"absolute",top:"200px"}}," backdrop-filter CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。 ",-1)),c(f(a),{x:o.value.x,"onUpdate:x":t[0]||(t[0]=n=>o.value.x=n),y:o.value.y,"onUpdate:y":t[1]||(t[1]=n=>o.value.y=n),h:o.value.height,"onUpdate:h":t[2]||(t[2]=n=>o.value.height=n),w:o.value.width,"onUpdate:w":t[3]||(t[3]=n=>o.value.width=n),active:o.value.isActive,"onUpdate:active":t[4]||(t[4]=n=>o.value.isActive=n),resizable:!1,onDragstop:l,parent:".ui-wrapper"},{default:m(()=>t[5]||(t[5]=[i("div",{class:"container"},[i("div",{class:"element"},[i("p",null,"This is an example of a backdrop-filter applied to an element.")])],-1)])),_:1},8,["x","y","h","w","active"]),t[7]||(t[7]=i("div",{class:"animation-wrapper-1"},null,-1)),t[8]||(t[8]=i("div",{class:"animation-wrapper"},null,-1))]))}});const U=w(b,[["__scopeId","data-v-fb6e7c5a"]]);export{U as default};
