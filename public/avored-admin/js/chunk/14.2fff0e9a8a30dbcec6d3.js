(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{590:function(t,i,o){"use strict";o.r(i);var n=o(5),a=o.n(n),r={props:["attribute","baseUrl"],data:function(){return{attributeForm:this.$form.createForm(this),dropdownOptions:[],image_path_lists:[],headers:{},display_as:"",fields:["name","slug","display_as"]}},methods:{handleSubmit:function(){this.attributeForm.validateFields((function(t,i){t&&e.preventDefault()}))},imagePathName:function(t){var i="dropdown_option[";return Object.keys(t).forEach((function(t){i+=t})),i+="][path]"},imagePathValue:function(t){var i="";return Object.keys(t).forEach((function(o){i+=t[o]})),i},handleUploadImageChange:function(t,i){if("done"==t.file.status){var o={};o[i]=t.file.response.path,this.image_path_lists.push(o)}},displayAsChange:function(t){this.display_as=t},cancelAttribute:function(){window.location=this.baseUrl+"/attribute"},randomString:function(){for(var t,i="",o=0;o<6;o++)t=Math.floor(25*Math.random()+97),i+=String.fromCharCode(t);return i},dropdownOptionChange:function(t){t==this.dropdownOptions.length-1?this.dropdownOptions.push(this.randomString()):this.dropdownOptions.splice(t,1)},getDefaultFile:function(t){if(a()(this.attribute))return[];var i=this.attribute.dropdown_options[t];if(!a()(i)&&!a()(i.path)){var o=i.path.replace(/^.*[\\\/]/,"");return[{uid:i.id,name:o,status:"done",url:"/storage/"+i.path}]}},dropdownOptionDisplayTextName:function(t){return"dropdown_option["+t+"][display_text]"},dropdown_options_image:function(t){return"dropdown_option_image["+t+"]"}},mounted:function(){var t=this;this.headers={"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},a()(this.attribute)?this.dropdownOptions.push(this.randomString()):(this.display_as=this.attribute.display_as,this.fields.forEach((function(i){t.attributeForm.getFieldDecorator(i,{initialValue:t.attribute[i]})})),this.attribute.dropdown_options.length>0&&this.attribute.dropdown_options.forEach((function(i){t.dropdownOptions.push(i.id),t.attributeForm.getFieldDecorator("dropdown_options["+i.id+"]",{initialValue:i.display_text,preserve:!0})})))}},s=o(6),d=Object(s.a)(r,void 0,void 0,!1,null,null,null);i.default=d.exports}}]);