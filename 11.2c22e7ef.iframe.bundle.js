"use strict";(self.webpackChunk_metamask_design_tokens=self.webpackChunk_metamask_design_tokens||[]).push([[11],{"./docs/components/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});__webpack_require__("./node_modules/react/index.js");var fontFamilies=__webpack_require__("./src/js/typography/fontFamilies.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=_ref=>{let{style,children,as}=_ref;const Component=as||"span";return(0,jsx_runtime.jsx)(Component,{style:{fontFamily:fontFamilies.V.euclidCircularB,...style},children})};Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{children:{defaultValue:null,description:"The children or content of the Text component",name:"children",required:!1,type:{name:"ReactChild"}},as:{defaultValue:null,description:"Polymorphic prop to change the html root element of the component",name:"as",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The style prop of the Text component",name:"style",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"docs/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{children:{defaultValue:null,description:"The children or content of the Text component",name:"children",required:!1,type:{name:"ReactChild"}},as:{defaultValue:null,description:"Polymorphic prop to change the html root element of the component",name:"as",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The style prop of the Text component",name:"style",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"docs/components/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./docs/components/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bc:()=>ColorSwatch_ColorSwatch,H4:()=>ColorSwatchGroup_ColorSwatchGroup,xv:()=>components_Text.x});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorSwatch_ColorSwatch=_ref=>{let{color,borderColor=src.Wb.colors.border.muted,textBackgroundColor=src.Wb.colors.background.default,textColor=src.Wb.colors.text.default,name,...props}=_ref;return(0,jsx_runtime.jsx)("div",{style:{height:120,backgroundColor:color,border:`1px solid ${borderColor}`,display:"flex",flexDirection:"column-reverse",borderRadius:"8px"},...props,children:(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:textBackgroundColor,padding:8,borderRadius:"0 0 8px 8px"},children:[(0,jsx_runtime.jsx)("strong",{style:{display:"block",marginBottom:"8px"},children:(0,jsx_runtime.jsx)("code",{children:`${name}`})}),(0,jsx_runtime.jsx)("code",{children:`${color}`})]})})};ColorSwatch_ColorSwatch.displayName="ColorSwatch";try{ColorSwatch_ColorSwatch.displayName="ColorSwatch",ColorSwatch_ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{color:{defaultValue:null,description:"The color of the swatch",name:"color",required:!1,type:{name:"string"}},textBackgroundColor:{defaultValue:{value:"lightTheme.colors.background.default"},description:"The color of text background that contains the name of the color defaults to lightTheme.colors.background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"lightTheme.colors.border.muted"},description:"The border color of the swatch defaults to lightTheme.colors.border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:{value:"lightTheme.colors.text.default"},description:"The color of the text defaults to lightTheme.colors.text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/ColorSwatch/ColorSwatch.tsx#ColorSwatch"]={docgenInfo:ColorSwatch_ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"docs/components/ColorSwatch/ColorSwatch.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}try{ColorSwatch.displayName="ColorSwatch",ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{color:{defaultValue:null,description:"The color of the swatch",name:"color",required:!1,type:{name:"string"}},textBackgroundColor:{defaultValue:{value:"lightTheme.colors.background.default"},description:"The color of text background that contains the name of the color defaults to lightTheme.colors.background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"lightTheme.colors.border.muted"},description:"The border color of the swatch defaults to lightTheme.colors.border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:{value:"lightTheme.colors.text.default"},description:"The color of the text defaults to lightTheme.colors.text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/ColorSwatch/index.tsx#ColorSwatch"]={docgenInfo:ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"docs/components/ColorSwatch/index.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}const ColorSwatchGroup_ColorSwatchGroup=_ref=>{let{swatchData,borderColor,textBackgroundColor,textColor}=_ref;if(!swatchData)return(0,jsx_runtime.jsx)("div",{children:"No swatch data"});const swatchColorsArr=Object.keys(swatchData);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:swatchColorsArr.map((category=>{const colorsObj=swatchData[category];let colorsArr=[];const recursiveColors=(nextLevel,label)=>{for(const key in nextLevel){const level=nextLevel[key];level.value?colorsArr.push({label:`${label}${key}`,value:level.value,description:level.description}):recursiveColors(level,`${label}${key}.`)}};return recursiveColors(colorsObj,""),(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.875rem",fontFamily:"sans-serif",color:textColor},children:[(0,jsx_runtime.jsx)("h2",{children:category}),(0,jsx_runtime.jsx)("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:colorsArr.map((color=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(ColorSwatch_ColorSwatch,{color:color.value,name:color.label,borderColor,textBackgroundColor,textColor}),color?.description?(0,jsx_runtime.jsx)("p",{style:{lineHeight:1.3},children:color?.description}):null]},color.label)))})]},category)}))})};try{ColorSwatchGroup_ColorSwatchGroup.displayName="ColorSwatchGroup",ColorSwatchGroup_ColorSwatchGroup.__docgenInfo={description:"",displayName:"ColorSwatchGroup",props:{swatchData:{defaultValue:null,description:"The color object",name:"swatchData",required:!0,type:{name:"{ [key: string]: ColorToken; }"}},textBackgroundColor:{defaultValue:null,description:"The color of text background that contains the name of the color defaults to background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"The border color of the swatch defaults to border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"The color of the text defaults to text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/ColorSwatchGroup/ColorSwatchGroup.tsx#ColorSwatchGroup"]={docgenInfo:ColorSwatchGroup_ColorSwatchGroup.__docgenInfo,name:"ColorSwatchGroup",path:"docs/components/ColorSwatchGroup/ColorSwatchGroup.tsx#ColorSwatchGroup"})}catch(__react_docgen_typescript_loader_error){}try{ColorSwatchGroup.displayName="ColorSwatchGroup",ColorSwatchGroup.__docgenInfo={description:"",displayName:"ColorSwatchGroup",props:{swatchData:{defaultValue:null,description:"The color object",name:"swatchData",required:!0,type:{name:"{ [key: string]: ColorToken; }"}},textBackgroundColor:{defaultValue:null,description:"The color of text background that contains the name of the color defaults to background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"The border color of the swatch defaults to border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"The color of the text defaults to text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/ColorSwatchGroup/index.tsx#ColorSwatchGroup"]={docgenInfo:ColorSwatchGroup.__docgenInfo,name:"ColorSwatchGroup",path:"docs/components/ColorSwatchGroup/index.tsx#ColorSwatchGroup"})}catch(__react_docgen_typescript_loader_error){}var components_Text=__webpack_require__("./docs/components/Text/index.tsx");try{ColorSwatch.displayName="ColorSwatch",ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{color:{defaultValue:null,description:"The color of the swatch",name:"color",required:!1,type:{name:"string"}},textBackgroundColor:{defaultValue:{value:"lightTheme.colors.background.default"},description:"The color of text background that contains the name of the color defaults to lightTheme.colors.background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"lightTheme.colors.border.muted"},description:"The border color of the swatch defaults to lightTheme.colors.border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:{value:"lightTheme.colors.text.default"},description:"The color of the text defaults to lightTheme.colors.text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/index.tsx#ColorSwatch"]={docgenInfo:ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"docs/components/index.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}try{ColorSwatchGroup.displayName="ColorSwatchGroup",ColorSwatchGroup.__docgenInfo={description:"",displayName:"ColorSwatchGroup",props:{swatchData:{defaultValue:null,description:"The color object",name:"swatchData",required:!0,type:{name:"{ [key: string]: ColorToken; }"}},textBackgroundColor:{defaultValue:null,description:"The color of text background that contains the name of the color defaults to background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"The border color of the swatch defaults to border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"The color of the text defaults to text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/index.tsx#ColorSwatchGroup"]={docgenInfo:ColorSwatchGroup.__docgenInfo,name:"ColorSwatchGroup",path:"docs/components/index.tsx#ColorSwatchGroup"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{children:{defaultValue:null,description:"The children or content of the Text component",name:"children",required:!1,type:{name:"ReactChild"}},as:{defaultValue:null,description:"Polymorphic prop to change the html root element of the component",name:"as",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The style prop of the Text component",name:"style",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"docs/components/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/figma/tokens.json":module=>{module.exports=JSON.parse('{"CO":{"D2":{"white":{"white000":{"value":"#FFFFFF","description":"(HEX: #FFFFFF)","type":"color"},"white010":{"value":"#FCFCFC","description":"(HEX: #FCFCFC)","type":"color"}},"black":{"black000":{"value":"#000000","description":"(HEX: #000000)","type":"color"}},"grey":{"grey030":{"value":"#FAFBFC","description":"(HEX: #FAFBFC)","type":"color"},"grey040":{"value":"#F2F4F6","description":"(HEX: #F2F4F6)","type":"color"},"grey100":{"value":"#D6D9DC","description":"(HEX: #D6D9DC)","type":"color"},"grey200":{"value":"#BBC0C5","description":"(HEX: #BBC0C5)","type":"color"},"grey300":{"value":"#9FA6AE","description":"(HEX: #9FA6AE)","type":"color"},"grey400":{"value":"#848C96","description":"(HEX: #848C96)","type":"color"},"grey500":{"value":"#6A737D","description":"(HEX: #6A737D)","type":"color"},"grey600":{"value":"#535A61","description":"(HEX: #535A61)","type":"color"},"grey700":{"value":"#3B4046","description":"(HEX: #3B4046)","type":"color"},"grey750":{"value":"#2E3339","description":"(HEX: #2E3339)","type":"color"},"grey800":{"value":"#24272A","description":"(HEX: #24272A)","type":"color"},"grey900":{"value":"#141618","description":"(HEX: #141618)","type":"color"}},"blue":{"blue000":{"value":"#EAF6FF","description":"(HEX: #EAF6FF)","type":"color"},"blue100":{"value":"#A7D9FE","description":"(HEX: #A7D9FE)","type":"color"},"blue200":{"value":"#75C4FD","description":"(HEX: #75C4FD)","type":"color"},"blue300":{"value":"#43AEFC","description":"(HEX: #43AEFC)","type":"color"},"blue400":{"value":"#1098FC","description":"(HEX: #1098FC)","type":"color"},"blue500":{"value":"#0376C9","description":"(HEX: #0376C9)","type":"color"},"blue600":{"value":"#0260A4","description":"(HEX: #0260A4)","type":"color"},"blue700":{"value":"#024272","description":"(HEX: #024272)","type":"color"},"blue800":{"value":"#01253F","description":"(HEX: #01253F)","type":"color"},"blue900":{"value":"#00080D","description":"(HEX: #00080D)","type":"color"}},"orange":{"orange000":{"value":"#FEF5EF","description":"(HEX: #FEF5EF)","type":"color"},"orange100":{"value":"#FDE2CF","description":"(HEX: #FDE2CF)","type":"color"},"orange200":{"value":"#FBC49D","description":"(HEX: #FBC49D)","type":"color"},"orange300":{"value":"#FAA66C","description":"(HEX: #FAA66C)","type":"color"},"orange400":{"value":"#F8883B","description":"(HEX: #F8883B)","type":"color"},"orange500":{"value":"#F66A0A","description":"(HEX: #F66A0A)","type":"color"},"orange600":{"value":"#BF5208","description":"(HEX: #BF5208)","type":"color"},"orange700":{"value":"#954005","description":"(HEX: #954005)","type":"color"},"orange800":{"value":"#632B04","description":"(HEX: #632B04)","type":"color"},"orange900":{"value":"#321602","description":"(HEX: #321602)","type":"color"}},"green":{"green000":{"value":"#F3FCF5","description":"(HEX: #F3FCF5)","type":"color"},"green100":{"value":"#D6FFDF","description":"(HEX: #D6FFDF)","type":"color"},"green200":{"value":"#AFECBD","description":"(HEX: #AFECBD)","type":"color"},"green300":{"value":"#86E29B","description":"(HEX: #86E29B)","type":"color"},"green400":{"value":"#5DD879","description":"(HEX: #5DD879)","type":"color"},"green500":{"value":"#28A745","description":"(HEX: #28A745)","type":"color"},"green600":{"value":"#1C8234","description":"(HEX: #1C8234)","type":"color"},"green700":{"value":"#145523","description":"(HEX: #145523)","type":"color"},"green800":{"value":"#0A2C12","description":"(HEX: #0A2C12)","type":"color"},"green900":{"value":"#041007","description":"(HEX: #041007)","type":"color"}},"red":{"red000":{"value":"#FCF2F3","description":"(HEX: #FCF2F3)","type":"color"},"red100":{"value":"#F7D5D8","description":"(HEX: #F7D5D8)","type":"color"},"red200":{"value":"#F1B9BE","description":"(HEX: #F1B9BE)","type":"color"},"red300":{"value":"#E88F97","description":"(HEX: #E88F97)","type":"color"},"red400":{"value":"#E06470","description":"(HEX: #E06470)","type":"color"},"red500":{"value":"#D73847","description":"(HEX: #D73847)","type":"color"},"red600":{"value":"#B92534","description":"(HEX: #B92534)","type":"color"},"red700":{"value":"#8E1D28","description":"(HEX: #8E1D28)","type":"color"},"red800":{"value":"#64141C","description":"(HEX: #64141C)","type":"color"},"red900":{"value":"#3A0C10","description":"(HEX: #3A0C10)","type":"color"}},"purple":{"purple500":{"value":"#8B45B6","description":"(HEX: #8B45B6)","type":"color"}},"violet":{"violet300":{"value":"#CFB5F0","description":"(HEX: #CFB5F0)","type":"color"}},"yellow":{"yellow000":{"value":"#FFFDF8","description":"(HEX: #FFFDF8)","type":"color"},"yellow100":{"value":"#FEFCDE","description":"(HEX: #FEFCDE)","type":"color"},"yellow200":{"value":"#FFF2C5","description":"(HEX: #FFF2C5)","type":"color"},"yellow300":{"value":"#FFEAA3","description":"(HEX: #FFEAA3)","type":"color"},"yellow400":{"value":"#FFDF70","description":"(HEX: #FFDF70)","type":"color"},"yellow500":{"value":"#FFD33D","description":"(HEX: #FFD33D)","type":"color"},"yellow600":{"value":"#FFC70A","description":"(HEX: #FFC70A)","type":"color"}}}},"R2":{"O":{"background":{"default":{"value":"#FFFFFF","description":"(white000: #FFFFFF) For default neutral backgrounds","type":"color"},"default-hover":{"value":"#FAFAFA","type":"color","description":"(#FAFAFA)For component hover states that use background/default"},"default-pressed":{"value":"#EBEBEB","type":"color","description":"(#EBEBEB) For component pressed states that use background/default"},"alternative":{"value":"#F2F4F6","description":"(grey040: #F2F4F6) For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)","type":"color"},"alternative-hover":{"value":"#EDEFF1","type":"color","description":"(#EDEFF1) For component hover states that use background/alternative"},"alternative-pressed":{"value":"#DFE0E2","type":"color","description":"(#DFE0E2) For component pressed states that use background/alternative"},"hover":{"value":"#00000005","type":"color","description":"(#00000005) For component hover states with no background color"},"pressed":{"value":"#00000014","type":"color","description":"(#00000014) For component pressed states with no background color"}},"text":{"default":{"value":"#24272A","description":"(grey800: #24272A) For general text that takes main priority in the information hierarchy","type":"color"},"alternative":{"value":"#535A61","description":"(grey600: #535A61) For a weaker contrast option for neutral text","type":"color"},"muted":{"value":"#BBC0C5","description":"(grey200: #BBC0C5) For inactive or lowest priority text. (Example: placeholder)","type":"color"}},"icon":{"default":{"value":"#24272A","description":"(grey800: #24272A) For default neutral icons","type":"color"},"alternative":{"value":"#6A737D","type":"color","description":"(grey500: #6A737D) For a weaker contrast option for neutral icons"},"muted":{"value":"#BBC0C5","description":"(grey200: #BBC0C5) For inactive or lowest priority icons","type":"color"}},"border":{"default":{"value":"#BBC0C5","description":"(grey200: #BBC0C5) For default neutral borders with visible contrast. (Example: text inputs)","type":"color"},"muted":{"value":"#D6D9DC","description":"(grey100: #D6D9DC) For a weaker contrast option for neutral borders. (Example: dividers)","type":"color"}},"overlay":{"default":{"value":"#00000099","description":"(black000: #000000 60% opacity) For shading layers behind modality screens","type":"color"},"alternative":{"value":"#000000CC","description":"(black000: #000000 80% opacity) For a stronger shading layer option behind modality screens","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) [DEPRECATED] overlay.inverse should be used only as the foreground element on top of overlay.default used for text or icons","type":"color"}},"primary":{"default":{"value":"#0376C9","description":"(blue500: #0376C9) For primary user action related elements","type":"color"},"alternative":{"value":"#0260A4","description":"(blue600: #0260A4) For the \\"pressed\\" state of interactive primary elements","type":"color"},"muted":{"value":"#0376C919","description":"(blue500: #0376C9 10% opacity) For lowest contrast background used in primary elements","type":"color"},"inverse":{"value":"#FFFFFF","type":"color","description":"(white000: #FFFFFF) For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)"},"disabled":{"value":"#0376C980","description":"(blue500: #0376C9 50% opacity) [DEPRECATED] primary.disabled should be used for all disabled primary action components such as buttons or links","type":"color"},"default-hover":{"value":"#0379CE","type":"color","description":"(#0379CE) For the \\"hover\\" state of interactive primary elements"},"default-pressed":{"value":"#036DB9","type":"color","description":"(#036DB9) For the \\"pressed\\" state of interactive primary elements"}},"secondary":{"default":{"value":"#F66A0A","description":"(orange500: #F66A0A) [DEPRECATED] secondary.default should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox","type":"color"},"alternative":{"value":"#BF5208","description":"(orange600: #BF5208) [DEPRECATED] secondary.alternative should be used as an alternative to secondary.default for things such as hover states","type":"color"},"muted":{"value":"#F66A0A19","description":"(orange500: #F66A0A 10% opacity) [DEPRECATED] secondary.muted is a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) [DEPRECATED] secondary.inverse should be used only as the foreground element on top of secondary.default and secondary.alternative. It is intended to be the most contrasting color to secondary.default. It should meet all AA and AAA accessibility standards such as the text or icon of a secondary button","type":"color"},"disabled":{"value":"#F66A0A80","description":"(orange500: #F66A0A 50% opacity) [DEPRECATED] secondary.disabled should be used for all disabled secondary action components","type":"color"}},"error":{"default":{"value":"#D73847","description":"(red500: #D73847) For high-level alert danger/critical elements. Used for text, background, icon or border","type":"color"},"alternative":{"value":"#B92534","description":"(red600: #B92534) For the \\"pressed\\" state of interactive danger/critical elements","type":"color"},"muted":{"value":"#D7384719","description":"(red500: #D73847 10% opacity) For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)","type":"color"},"inverse":{"value":"#FFFFFF","type":"color","description":"(white000: #FFFFFF) For elements used on top of error/default (Example: label of danger/critical button)"},"disabled":{"value":"#D7384780","description":"(red500: #D73847 50% opacity) [DEPRECATED] error.disabled should be used for all disabled critical action components such as buttons","type":"color"},"default-hover":{"value":"#CD4250","type":"color","description":"(#CD4250) For the \\"hovered\\" state of interactive danger/critical elements"},"default-pressed":{"value":"#C63441","type":"color","description":"(#C63441) For the \\"pressed\\" state of interactive danger/critical elements"}},"warning":{"default":{"value":"#BF5208","type":"color","description":"(orange600: #BF5208) For low-mid level alert elements. Used for text, background, icon or border"},"alternative":{"value":"#FFC70A","description":"(yellow600: #FFC70A) [DEPRECATED] warning.alternative should be used as an alternative to warning.default for things such as hover states","type":"color"},"muted":{"value":"#BF520819","type":"color","description":"(orange600: #BF5208 10% opacity) For lowest contrast background used in warning elements. (Example: notification background)"},"inverse":{"value":"#FFFFFF","type":"color","description":"(white000: #FFFFFF) For elements used on top of warning/default. Used for text, icon or border"},"disabled":{"value":"#FFD33D80","description":"(yellow500: #FFD33D 50% opacity) [DEPRECATED] warning.disabled should be used for all disabled component colors such as buttons","type":"color"},"default-hover":{"value":"#C2540A","type":"color","description":"(#C2540A) For the \\"hover\\" state of warning elements"},"default-pressed":{"value":"#A24507","type":"color","description":"(#A24507) For the \\"pressed\\" state of warning elements"}},"success":{"default":{"value":"#1C8234","type":"color","description":"(green500: #1C8234) For positive & good semantic elements. Used for text, background, icon or border"},"alternative":{"value":"#1C8234","description":"(green600: #1C8234) [DEPRECATED] (green600: #1C8234) success.alternative should be used as an alternative to success.default for things such as hover states","type":"color"},"muted":{"value":"#1C823419","type":"color","description":"(green600: #1C8234 10% opacity) For lowest contrast background used in success semantic. (Example: notification background)"},"inverse":{"value":"#FFFFFF","type":"color","description":"(white000: #FFFFFF) For elements used on top of success/default. Used for text, icon or border"},"disabled":{"value":"#28A74580","description":"(green500: #28A745 50% opacity) [DEPRECATED] success.disabled should be used for all disabled success component colors such as buttons","type":"color"},"default-hover":{"value":"#208838","type":"color","description":"(#208838) For the \\"hover\\" state of success elements"},"default-pressed":{"value":"#1B7431","type":"color","description":"(#1B7431) For the \\"pressed\\" state of success elements"}},"info":{"default":{"value":"#0376C9","description":"(blue500: #0376C9) For informational semantic elements. Used for text, background, icon or border","type":"color"},"alternative":{"value":"#0260A4","description":"(blue600: #0260A4) [DEPRECATED] info.alternative should be used as an alternative to info.default for things such as hover states","type":"color"},"muted":{"value":"#0376C919","description":"(blue500: #0376C9 10% opacity) For lowest contrast background used in informational semantic. (Example: notification background)","type":"color"},"inverse":{"value":"#FFFFFF","type":"color","description":"(white000: #FFFFFF) For elements used on top of info/default. Used for text, icon or border"},"disabled":{"value":"#0376C980","description":"(blue500: #0376C9 50% opacity) [DEPRECATED] primary.disabled should be used for all disabled primary action components such as buttons or links","type":"color"}},"networks":{"goerli":{"default":{"value":"#1098FC","description":"(blue400: #1098FC) For goerli test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/goerli/default. Used for text, icon or border","type":"color"}},"localhost":{"default":{"value":"#BBC0C5","description":"(grey200: #BBC0C5) For localhost test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/localhost/default. Used for text, icon or border","type":"color"}},"sepolia":{"default":{"value":"#CFB5F0","description":"(violet300: #CFB5F0) For sepolia test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/sepolia/default. Used for text, icon or border","type":"color"}}},"flask":{"default":{"value":"#8B45B6","description":"(purple500: #8B45B6) For Flask brand default colored elements.","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of flask/default. Used for text, icon or border","type":"color"}}}},"_4":{"O":{"background":{"default":{"value":"#24272A","description":"(grey800: #24272A) For default neutral backgrounds","type":"color"},"default-hover":{"value":"#282B2E","type":"color","description":"(#282B2E) For component hover states that use background/default"},"default-pressed":{"value":"#36383B","type":"color","description":"(#36383B) For component pressed states that use background/default"},"alternative":{"value":"#141618","description":"(grey900: #141618) For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)","type":"color"},"alternative-hover":{"value":"#191B1D","type":"color","description":"(#191B1D) For component hover states that use background/alternative"},"alternative-pressed":{"value":"#27292A","type":"color","description":"(#27292A) For component pressed states that use background/alternative"},"hover":{"value":"#FFFFFF05","type":"color","description":"(#FFFFFF05) For component hover states with no background color"},"pressed":{"value":"#FFFFFF14","type":"color","description":"(#FFFFFF14) For component pressed states with no background color"}},"text":{"default":{"value":"#FFFFFF","description":"(white000: #FFFFFF) For general text that takes main priority in the information hierarchy","type":"color"},"alternative":{"value":"#D6D9DC","description":"(grey100: #D6D9DC) For a weaker contrast option for neutral text. ","type":"color"},"muted":{"value":"#9FA6AE","description":"(grey300: #9FA6AE) For inactive or lowest priority text. (Example: placeholder)","type":"color"}},"icon":{"default":{"value":"#FFFFFF","description":"(white000: #FFFFFF) For default neutral icons","type":"color"},"alternative":{"value":"#BBC0C5","type":"color","description":"(grey200: #BBC0C5) For a weaker contrast option for neutral icons"},"muted":{"value":"#9FA6AE","description":"(grey300: #9FA6AE) For inactive or lowest priority icons","type":"color"}},"border":{"default":{"value":"#848C96","description":"(grey400: #848C96) For default neutral borders with visible contrast. (Example: text inputs)","type":"color"},"muted":{"value":"#3B4046","description":"(grey700: #3B4046) For a weaker contrast option for neutral borders. (Example: dividers)","type":"color"}},"overlay":{"default":{"value":"#00000099","description":"(black000: #000000 60% opacity) For shading layers behind modality screens","type":"color"},"alternative":{"value":"#000000CC","description":"(black000: #000000 80% opacity) For a stronger shading layer option behind modality screens","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) [DEPRECATED] overlay.inverse should be used only as the foreground element on top of overlay.default used for text or icons","type":"color"}},"primary":{"default":{"value":"#1098FC","description":"(blue400: #1098FC) For primary user action related elements","type":"color"},"alternative":{"value":"#43AEFC","description":"(blue300: #43AEFC) For the \\"pressed\\" state of interactive primary elements","type":"color"},"muted":{"value":"#1098FC26","description":"(blue400: #1098FC 15% opacity) For lowest contrast background used in primary elements","type":"color"},"inverse":{"value":"#141618","type":"color","description":"(grey900 : #141618)  For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)"},"disabled":{"value":"#1098FC80","description":"(blue400: #1098FC) [DEPRECATED] primary.disabled should be used for all disabled primary action components such as buttons or links","type":"color"},"default-hover":{"value":"#0092FA","type":"color","description":"(#0092FA) For the \\"hover\\" state of interactive primary elements"},"default-pressed":{"value":"#54B6FC","type":"color","description":"(#54B6FC) For the \\"hover\\" state of interactive primary elements"}},"secondary":{"default":{"value":"#F8883B","description":"(orange400: #F8883B) [DEPRECATED] secondary.default should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox","type":"color"},"alternative":{"value":"#FAA66C","description":"(orange300: #FAA66C) [DEPRECATED] secondary.alternative should be used as an alternative to secondary.default for things such as hover states","type":"color"},"muted":{"value":"#F8883B26","description":"(orange400: #F8883B 15% opacity) [DEPRECATED] secondary.muted is a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) [DEPRECATED] secondary.inverse should be used only as the foreground element on top of secondary.default and secondary.alternative. It is intended to be the most contrasting color to secondary.default. It should meet all AA and AAA accessibility standards such as the text or icon of a secondary button","type":"color"},"disabled":{"value":"#F8883B80","description":"(orange400: #F8883B 50% opacity) [DEPRECATED] secondary.disabled should be used for all disabled secondary action components","type":"color"}},"error":{"default":{"value":"#FF5263","type":"color","description":"(#FF5263) For high-level alert danger/critical elements. Used for text, background, icon or border"},"alternative":{"value":"#E88F97","description":"(red300: #E88F97) For the \\"pressed\\" state of interactive danger/critical elements","type":"color"},"muted":{"value":"#FF526326","type":"color","description":"(#FF5263) 15% opacity) For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)"},"inverse":{"value":"#141618","type":"color","description":"(grey900: #141618) For elements used on top of error/default (Example: label of danger/critical button)"},"disabled":{"value":"#D7384780","description":"(red500: #D73847 50% opacity) [DEPRECATED] error.disabled should be used for all disabled critical action components such as buttons","type":"color"},"default-hover":{"value":"#FF4D58","type":"color","description":"FF4D58: For the \\"hover\\" state of interactive danger/critical elements"},"default-pressed":{"value":"#F9868E","type":"color","description":"F9868E: For the \\"hover\\" state of interactive danger/critical elements"}},"warning":{"default":{"value":"#FFD33D","description":"(yellow500: #FFD33D) For low-mid level alert elements. Used for text, background, icon or border","type":"color"},"alternative":{"value":"#FFDF70","description":"(yellow400: #FFDF70) [DEPRECATED] warning.alternative should be used as an alternative to warning.default for things such as hover states","type":"color"},"muted":{"value":"#FFD33D26","description":"(yellow500: #FFD33D 15% opacity) For lowest contrast background used in warning elements. (Example: notification background)","type":"color"},"inverse":{"value":"#141618","description":"(grey900: #141618) For elements used on top of warning/default. Used for text, icon or border","type":"color"},"disabled":{"value":"#FFD33D80","description":"(yellow500: #FFD33D 50% opacity) [DEPRECATED] warning.disabled should be used for all disabled component colors such as buttons","type":"color"},"default-hover":{"value":"#FFC60A","type":"color","description":"(#FFC60A): For warning with stronger contrast."},"default-pressed":{"value":"#FFEAA3D1","type":"color","description":"(#FFEAA3): For the \\"pressed\\" state of low-mid level alert elements."}},"success":{"default":{"value":"#28A745","description":"(green500: #28A745) For positive & good semantic elements. Used for text, background, icon or border","type":"color"},"alternative":{"value":"#5DD879","description":"(green400: #5DD879) [DEPRECATED] success.alternative should be used as an alternative to success.default for things such as hover states","type":"color"},"muted":{"value":"#28A74526","description":"(green500: #28A745 15% opacity) Lowest contrast background used in success semantic. (Example: notification background)","type":"color"},"inverse":{"value":"#141618","type":"color","description":"(grey900 : #141618) For elements used on top of success/default. Used for text, icon or border"},"disabled":{"value":"#28A74580","description":"(green500: #28A745 50% opacity) [DEPRECATED] success.disabled should be used for all disabled success component colors such as buttons","type":"color"},"default-hover":{"value":"#05B82F","type":"color","description":"(#05B82F): For success with stronger contrast."},"default-pressed":{"value":"#6AEC88","type":"color","description":"(#6AEC88): For success with stronger contrast."}},"info":{"default":{"value":"#1098FC","description":"(blue400: #1098FC) For informational semantic elements. Used for text, background, icon or border","type":"color"},"alternative":{"value":"#43AEFC","description":"(blue300: #43AEFC) [DEPRECATED] info.alternative should be used as an alternative to info.default for things such as hover states","type":"color"},"muted":{"value":"#1098FC26","description":"(blue400: #1098FC 15% opacity) For lowest contrast background used in informational semantic. (Example: notification background)","type":"color"},"inverse":{"value":"#141618","type":"color","description":"(grey900: #141618) For elements used on top of info/default. Used for text, icon or border"},"disabled":{"value":"#0376C980","description":"(blue500: #0376C9 50% opacity) [DEPRECATED] info.disabled should be used for all disabled info action components such as buttons or links","type":"color"}},"networks":{"goerli":{"default":{"value":"#1098FC","description":"(blue400: #1098FC) For goerli test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/goerli/default. Used for text, icon or border","type":"color"}},"localhost":{"default":{"value":"#BBC0C5","description":"(blue400: #BBC0C5) For localhost test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/localhost/default. Used for text, icon or border","type":"color"}},"sepolia":{"default":{"value":"#CFB5F0","description":"(violet300: #CFB5F0) For sepolia test network","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of networks/sepolia/default. Used for text, icon or border","type":"color"}}},"flask":{"default":{"value":"#8B45B6","description":"(purple500: #8B45B6) For Flask brand default colored elements.","type":"color"},"inverse":{"value":"#FCFCFC","description":"(white010: #FCFCFC) For elements used on top of flask/default. Used for text, icon or border","type":"color"}}}}}')}}]);