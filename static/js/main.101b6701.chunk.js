(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){e.exports=n.p+"static/media/corgi-bark.2cb6a9d2.mp3"},157:function(e,t,n){e.exports=n(342)},162:function(e,t,n){},318:function(e,t){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(148),l=n.n(r),i=(n(162),n(163),n(26)),s=n(27),c=n(29),m=n(28),u=n(30),p=n(55),f=n(35),d=n(97),h=n.n(d),g=n(149),b=n.n(g),y=n(52),v=n(53),x=n(54);y.b.add(x.d,x.c,x.b,x.a);var E={"ui:enumDisabled":["row"]},w={title:"Configure your site",type:"object",properties:{title:{type:"string",title:"Title",default:"Hello world!"},body:{type:"array",title:"Build the content",items:{$ref:"#/definitions/elements"}}},definitions:{elements:{type:"object",properties:{component:{title:"Choose the component",type:"string",enum:["div","text","a","grid","img"],enumNames:["Div","TextComponent","Anchor","Grid","Image"]},text:{type:"string",title:"Text",description:"A sample text to import"}},dependencies:{component:{oneOf:[{properties:{component:{enum:["a"]},href:{type:"string",title:"Href",description:"path to the link"}},required:["href"]},{properties:{component:{enum:["img"]},file:{type:"string",format:"data-url",title:"Single Image"}}},{properties:{component:{enum:["grid"]},file:{type:"string",format:"data-url",title:"Add background image"},content:{title:"Add row",type:"array",items:{type:"object",properties:{component:{enum:["row"],default:"row"},flexWrap:{title:"Flex-wrap",type:"string",enum:["nowrap","wrap","wrap-reverse"],enumNames:["Nowrap(Default)","Wrap","Wrap-reverse"]},alignItems:{title:"Align-Items",type:"string",enum:["flex-start","flex-end","center","baseline","stretch"],enumNames:["Flex-start","Flex-end","Center","Baseline","Stretch"]},justifyContent:{title:"Justify-content",type:"string",enum:["flex-start","flex-end","center","space-between","space-around"],enumNames:["Flex-start","Flex-end","Center","Space-between","Space-around"]},content:{title:"Add column",type:"array",items:{type:"object",properties:{component:{enum:["col"],default:"col"},alignSelf:{title:"Align-Self",type:"string",enum:["align-self-center","align-self-start","align-self-end","align-self-stretch","align-self-baseline"],default:"align-self-center"},offset:{description:"The amount to offset the column, in terms of how many columns it should shift to the end of the total available.",title:"Offset",type:"string",enum:["offset","offset-lg","offset-sm","offset-xl","offset-xs"],default:"offset"},pull:{description:"The amount to pull the column, in terms of how many columns it should shift to the start of the total available.",title:"Pull options",type:"string",enum:["pull","pull-lg","pull-md","pull-sm","pull-xl","pull-xs"],default:"pull"},push:{title:"Push options",type:"string",enum:["push","push-lg","push-md","push-sm","push-xl","push-xs"],default:"push"},size:{description:'The size of the column, in terms of how many columns it should take up out of the total available. If "auto" is passed, the column will be the size of its content.',title:"Size options",type:"string",enum:["size","size-lg","size-md","size-sm","size-xl","size-xs"],default:"size"},content:{title:"Add column content",type:"array",items:{$ref:"#/definitions/elements"}}}}}}}}}},{properties:{component:{enum:["div","text"]}}}]}}}}},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var t=e.formData;n.props.updateFormData(t),console.log(n.props.json)},n.handleChange=function(e){var t=e.formData;console.log(t)},n.arrayFieldTemplate=function(e){var t={border:"1px solid blue",padding:"10px"};return o.a.createElement("div",{className:"row",style:{border:"1px solid red",padding:"10px"}},o.a.createElement("div",{className:"col col-sm-12"},e.title,o.a.createElement("br",null),e.items.map(function(e,n){return o.a.createElement("div",{key:n,className:"row",style:t},o.a.createElement("div",{className:"col-sm-12 text-right"},e.hasRemove&&o.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:e.onDropIndexClick(n)},o.a.createElement(v.a,{icon:"minus-circle"})),e.hasMoveUp&&o.a.createElement("button",{className:"btn btn-info mr-2",onClick:e.onReorderClick(n,n-1)},o.a.createElement(v.a,{icon:"arrow-circle-up"})),e.hasMoveDown&&o.a.createElement("button",{className:"btn btn-info",onClick:e.onReorderClick(n,n+1)},o.a.createElement(v.a,{icon:"arrow-circle-down"}))),o.a.createElement("div",{className:"col col-sm-12"},e.children))}),e.canAdd&&o.a.createElement("button",{className:"btn btn-info",type:"button",onClick:e.onAddClick},o.a.createElement(v.a,{icon:"plus-circle"}))))},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{className:"admin-form",uiSchema:E,schema:w,formData:this.props.formData,ArrayFieldTemplate:this.arrayFieldTemplate,onSubmit:this.handleSubmit,onChange:this.handleChange})}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Corgi Admin"}},{key:"render",value:function(){var e=this.props,t=e.json,n=e.updateStateJson;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"text-center"},"Welcome to Corgi CMS"),o.a.createElement(k,{formData:t,updateFormData:n}))}}]),t}(a.Component),C=n(150),S=n.n(C),N=function(e){var t=e.element;return o.a.createElement("ion-text",{color:"danger"},S()(t.text))},O=function(e){var t=e.element;return o.a.createElement("ion-anchor",{color:"primary",href:t.href},t.text)},z=function(e){var t=e.element,n={backgroundImage:"url(".concat(t.file,")"),backgroundColor:"transparent",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"};return o.a.createElement("ion-grid",null,t.file?o.a.createElement("div",{style:n},t.content.map(function(e,t){return e.component?o.a.createElement(J,{element:e,key:t}):""})):t.content.map(function(e,t){return e.component?o.a.createElement(J,{element:e,key:t}):""}))},D=function(e){var t=e.element;return o.a.createElement("ion-row",{nowrap:t.nowrap,"wrap-reverse":t.wrapReverse,"align-items-start":t.alignItemsStart,"align-items-center":t.alignItemsCenter,"align-items-end":t.alignItemsEnd,"align-items-stretch":t.alignItemsStretch,"align-items-baseline":t.alignItemsBaseline,"justify-content-start":t.justifyContentStart,"justify-content-center":t.justifyContentCenter,"justify-content-end":t.justifyContentEnd,"justify-content-around":t.justifyContentAround,"justify-content-between":t.justifyContentBetween},t.content.map(function(e,t){return e.component?o.a.createElement(J,{element:e,key:t}):""}))},A=function(e){var t=e.element;return o.a.createElement("ion-col",{"align-self-start":t.alignSelfStart,"align-self-center":t.alignSelfCenter,"align-self-end":t.alignSelfEnd,"align-self-stretch":t.alignSelfStretch,"align-self-baseline":t.alignSelfBaseline,offset:t.offset,"offset-lg":t.offsetLg,"offset-md":t.offsetMd,"offset-sm":t.offsetSm,"offset-xl":t.offsetXl,"offset-xs":t.offsetXs,pull:t.pull,"pull-lg":t.pullLg,"pull-md":t.pullMd,"pull-sm":t.pullSm,"pull-xl":t.pullXl,"pull-xs":t.pullXs,push:t.push,"push-lg":t.pushLg,"push-md":t.pushMd,"push-sm":t.pushSm,"push-xl":t.pushXl,"push-xs":t.pushXs,size:t.size,"size-lg":t.sizeLg,"size-md":t.sizeMd,"size-sm":t.sizeSm,"size-xl":t.sizeXl,"size-xs":t.sizeXs},t.content.map(function(e,t){return e.component?o.a.createElement(J,{element:e,key:t}):""}))},I=function e(t){var n=t.element;return o.a.createElement(e,{src:n.file})},J=function(e){var t=e.element,n=e.i;if(t&&t.component){if("img"===t.component)return o.a.createElement(I,{element:t,key:n});if("text"===t.component)return o.a.createElement(N,{element:t,key:n});if("a"===t.component)return o.a.createElement(O,{element:t,key:n});if("grid"===t.component)return o.a.createElement(z,{element:t,key:n});if("row"===t.component)return o.a.createElement(D,{element:t,key:n});if("col"===t.component)return o.a.createElement(A,{element:t,key:n})}},F=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.json;e&&e.title&&(document.title="Corgi Preview: ".concat(e.title)),console.log(e)}},{key:"render",value:function(){var e=this.props.json;return e&&e.body?e.body.map(function(e,t){return e.component?o.a.createElement(J,{element:e,key:t}):""}):o.a.createElement("h1",null,"Nothing to preview yet")}}]),t}(a.Component),M=function(e){var t=e.type,n=e.text,a=e.handleClick;return o.a.createElement("button",{onClick:function(){return a()},type:"button",className:"btn btn-outline-".concat(t)},n)},T=n(155),H=function(e){var t=e.onDrop,n=Object(T.a)({onDrop:t}),a=n.getRootProps,r=n.getInputProps;return o.a.createElement("div",a(),o.a.createElement("input",r()),o.a.createElement(M,{text:"Import JSON",type:"secondary",handleClick:function(){}}))},L=n(156),R=n(63),X=n.n(R),B=n(152),P=n.n(B),W=function(){var e=Object(a.useState)(!1),t=Object(L.a)(e,2),n=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{align:"center"},"Welcome to Corgi CMS"),o.a.createElement("img",{onClick:function(e){e.target.classList.add("vibrate"),r(!0);var t=new Audio(P.a);t.play(),t.onended=function(){r(!1)}},style:{cursor:"pointer",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},className:n?"vibrate":"",src:X.a,alt:"logo"}))};function $(e,t){return function(n){return o.a.createElement(e,Object.assign({},t,n))}}var q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showNav:!0,json:{title:"title example",body:[{component:"text",text:"<h1>H1 text</h1>"},{component:"a",text:"link text",href:"/example/href"},{component:"grid",content:[{component:"row",content:[{component:"col",content:[{component:"text",text:"<h1>H1 text</h1>"},{component:"a",text:"link text",href:"/example/href",style:{color:"yellow","background-color":"blue"}}]}]}]}]}},n.updateStateJson=function(e){n.setState({json:e})},n.exportHtml=function(){n.setState({showNav:!1},function(){h()(document.documentElement.outerHTML,"index.html"),n.setState({showNav:!0})})},n.exportJson=function(){h()(JSON.stringify(n.state.json),"html-information.json")},n.importJson=function(){console.log("import Json")},n.onDrop=function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;console.log(e),n.setState({json:JSON.parse(e)})},e.forEach(function(e){return t.readAsBinaryString(e)})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.showNav;return o.a.createElement(p.a,{basename:"/"},o.a.createElement("div",null,e?o.a.createElement("nav",{id:"navbar",className:"navbar navbar-dark bg-dark navbar-expand-lg sticky-top"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement(p.b,{className:"nav-item nav-link",to:"/"},o.a.createElement("img",{style:{width:"26px"},src:X.a,alt:"logo"})),o.a.createElement(p.b,{className:"nav-item nav-link",to:"/admin"},"Admin"),o.a.createElement(p.b,{className:"nav-item nav-link",to:"/preview"},"Preview"),o.a.createElement(M,{text:"Export HTML",type:"primary",handleClick:this.exportHtml}),o.a.createElement(M,{text:"Export JSON",type:"primary",handleClick:this.exportJson}),o.a.createElement(H,{onDrop:this.onDrop}))):"",o.a.createElement(f.a,{exact:!0,path:"/",component:W}),o.a.createElement(f.a,{exact:!0,path:"/preview",component:$(F,{json:this.state.json})}),o.a.createElement(f.a,{exact:!0,path:"/admin",component:$(j,{json:this.state.json,updateStateJson:this.updateStateJson})})))}}]),t}(a.Component);l.a.render(o.a.createElement(q,null),document.getElementById("root"))},63:function(e,t,n){e.exports=n.p+"static/media/logo.b9afc9fb.svg"}},[[157,1,2]]]);
//# sourceMappingURL=main.101b6701.chunk.js.map