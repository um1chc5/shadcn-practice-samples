"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[577],{"./src/app/mail/components/mailCard/mailCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mailCard_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,bundle_mjs.QP)((0,clsx.$)(inputs))}var _excluded=["className","variant"],__jsx=react.createElement,badgeVariants=(0,dist.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Badge(_ref){var className=_ref.className,variant=_ref.variant,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx("div",(0,esm_extends.A)({className:cn(badgeVariants({variant}),className)},props))}Badge.displayName="Badge";try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "secondary" | "destructive" | "outline" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/ui/badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}var card_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],card_jsx=react.createElement,Card=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,card_excluded);return card_jsx("div",(0,esm_extends.A)({ref,className:cn("rounded-xl border bg-card text-card-foreground shadow",className)},props))}));Card.displayName="Card",react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return card_jsx("div",(0,esm_extends.A)({ref,className:cn("flex flex-col space-y-1.5 p-6",className)},props))})).displayName="CardHeader",react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);return card_jsx("h3",(0,esm_extends.A)({ref,className:cn("font-semibold leading-none tracking-tight",className)},props))})).displayName="CardTitle",react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.A)(_ref4,_excluded4);return card_jsx("p",(0,esm_extends.A)({ref,className:cn("text-sm text-muted-foreground",className)},props))})).displayName="CardDescription",react.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,objectWithoutProperties.A)(_ref5,_excluded5);return card_jsx("div",(0,esm_extends.A)({ref,className:cn("p-6 pt-0",className)},props))})).displayName="CardContent",react.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,objectWithoutProperties.A)(_ref6,_excluded6);return card_jsx("div",(0,esm_extends.A)({ref,className:cn("flex items-center p-6 pt-0",className)},props))})).displayName="CardFooter";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/ui/card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),navigation=__webpack_require__("./node_modules/next/navigation.js"),mailCard_jsx=react.createElement;function MailCard(_ref){var mail=_ref.mail,pathname=(0,navigation.usePathname)();return mailCard_jsx(link_default(),{key:mail.id,href:"/mail/".concat(mail.id)},mailCard_jsx(Card,{className:classnames_default()("gap-2 p-3 hover:bg-accent cursor-pointer",{"bg-accent":pathname==="/mail/".concat(mail.id)})},mailCard_jsx("div",null,mailCard_jsx("div",{className:"flex justify-between"},mailCard_jsx("div",{className:"flex items-center gap-2"},mailCard_jsx("h3",{className:"font-semibold"},mail.from.name),!mail.read&&mailCard_jsx("span",{className:"h-2 w-2 rounded-full bg-blue-600"})),mailCard_jsx("p",{className:"text-xs text-muted-foreground"},function monthsFromNow(isoDate){var currentDate=new Date,targetDate=new Date(isoDate);return targetDate<currentDate&&targetDate.setFullYear(targetDate.getFullYear()+1),12*(targetDate.getFullYear()-currentDate.getFullYear())+(targetDate.getMonth()-currentDate.getMonth())}(mail.time)," months ago")),mailCard_jsx("h4",{className:"text-xs font-medium"},mail.title)),mailCard_jsx("div",null,mailCard_jsx("p",{className:"line-clamp-2 text-xs text-muted-foreground"},mail.content)),mailCard_jsx("div",null,mail.tag.map((function(tag){return mailCard_jsx(Badge,{className:"mr-2",key:tag,variant:"work"===tag?"default":"secondary"},tag)})))))}MailCard.displayName="MailCard";const mailCard=MailCard;try{MailCard.displayName="MailCard",MailCard.__docgenInfo={description:"",displayName:"MailCard",props:{mail:{defaultValue:null,description:"Data of a specific inbox.",name:"mail",required:!0,type:{name:"Mail"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/mail/components/mailCard/mailCard.tsx#MailCard"]={docgenInfo:MailCard.__docgenInfo,name:"MailCard",path:"src/app/mail/components/mailCard/mailCard.tsx#MailCard"})}catch(__react_docgen_typescript_loader_error){}const mailCard_stories={title:"Example/MailCard",component:mailCard,parameters:{layout:"centered"},tags:["autodocs"]};var Sample={args:{mail:{from:{email:"williamsmith@example.com",name:"William Smith"},time:"2023-10-22T09:00:00Z",title:"Meeting Tomorrow",tag:["meeting","work","important"],content:"Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",read:!0}}};Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"{\n  args: {\n    mail: {\n      from: {\n        email: 'williamsmith@example.com',\n        name: 'William Smith'\n      },\n      time: '2023-10-22T09:00:00Z',\n      title: 'Meeting Tomorrow',\n      tag: ['meeting', 'work', 'important'],\n      content: \"Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William\",\n      read: true\n    }\n  }\n}",...Sample.parameters?.docs?.source}}};const __namedExportsOrder=["Sample"]}}]);