function k(e){window.enmity.plugins.registerPlugin(e)}var B="Unfurl",N="1.0.0",b="Shorten or lengthen your URLs!",x=[{name:"Niko",id:"341377368075796483"}],D={name:B,version:N,description:b,authors:x},g;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(g||(g={}));var w;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(w||(w={}));var h;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(h||(h={}));var v;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(v||(v={}));var t;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(t||(t={}));var f;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(f||(f={})),window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const R=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function o(e,n,l,s){window.enmity.clyde.sendReply(e,n,l,s)}const M={id:"lengthen-command",name:"unfurl",displayName:"unfurl",description:"Annoy people by unfurling your link",displayDescription:"Annoy people by unfurling your link",type:w.Chat,inputType:h.BuiltInText,options:[{name:"url",displayName:"url",description:"URL to lengthen",displayDescription:"URL to lengthen",type:t.String,required:!0},{name:"whisper",displayName:"whisper",description:"Whisper the URL to you",displayDescription:"Whisper the URL to you",type:t.Boolean,required:!1}],execute:async function(e,n){var l,s,u,d,r=e[0].value;r.includes("://")||(r="https://"+r);try{o((l=n==null?void 0:n.channel.id)!=null?l:"0","Generating Longlink..");var a=await R.get(`https://api.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/a?url=${r}`)}catch{o((s=n==null?void 0:n.channel.id)!=null?s:"0","Something went really wrong creating your longlink.")}if(a.text!="INVALID_URL")if(e[1]&&e[1].value){o((u=n==null?void 0:n.channel.id)!=null?u:"0",`<${a.text}>`);return}else return{content:`<${a.text}>`};else{o((d=n==null?void 0:n.channel.id)!=null?d:"0","Your URL was invalid!");return}}},I={id:"shorten-command",name:"furl",displayName:"furl",description:"Furl your link into a snail",displayDescription:"Furl your link into a snail",type:w.Chat,inputType:h.BuiltInText,options:[{name:"url",displayName:"url",description:"URL to shorten",displayDescription:"URL to shorten",type:t.String,required:!0},{name:"whisper",displayName:"whisper",description:"Whisper the URL to you",displayDescription:"Whisper the URL to you",type:t.Boolean,required:!1},{name:"alias",displayName:"alias",description:"Alias for your shortlink",displayDescription:"Alias for your shortlink",type:t.String,required:!1}],execute:async function(e,n){var l,s,u,d,r,a,m=e[0].value,S=(l=e[e.findIndex(i=>i.name==="alias")].value)!=null?l:null,c=e[e.findIndex(i=>i.name==="whisper")];m.startsWith("http")||(m="https://"+m);const U={url:"https://tny-snls.xyz/api/snails",body:{url:m,slug:S}};try{o((s=n==null?void 0:n.channel.id)!=null?s:"0","Generating Shortlink..");var L=await R.post(U)}catch(i){i.body.error=="invalid data"?o((u=n==null?void 0:n.channel.id)!=null?u:"0","Couldn't create your shortlink. Invalid URL."):i.body.error=="alias already exists"?o((d=n==null?void 0:n.channel.id)!=null?d:"0","Couldn't create your shortlink. That alias is already taken."):o((r=n==null?void 0:n.channel.id)!=null?r:"0","Something went really wrong creating your shortlink.");return}const y="https://tny-snls.xyz/s/"+L.body.alias;if(c&&c.value){o((a=n==null?void 0:n.channel.id)!=null?a:"0",`<${y}>`);return}else return{content:`<${y}>`}}},G=[I,M],q={...D,onStart(){this.commands=G},onStop(){this.commands=[]}};k(q);
