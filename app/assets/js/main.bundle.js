!function(e){function t(t){for(var n,s,i=t[0],o=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],l[s]&&p.push(l[s][0]),l[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(m&&m(t);p.length;)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},l={1:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=o;r.push([296,0]),a()}({132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(120),r=a(42),s=a(119),i=a(129),o=a(128),c=a.n(o),m=a(37),d=a(48);var p=Object(d.a)({isLogin:(e=!1,t)=>"LOGIN_SUCCESS"===t.type||"LOGIN_FAILURE"===t.type&&!1||"LOGOUT_SUCCESS"===t.type&&!1||e,username:(e="",t)=>"LOGIN_SUCCESS"===t.type&&t.username||"LOGOUT_SUCCESS"===t.type&&""||e,cartItems:(e=[],t)=>"LOAD_CART_ITEMS"===t.type&&[...t.savedCartItems]||"ADD_CART_ITEM"===t.type&&[...e,t.addedCartItem]||"REMOVE_CART_ITEM"===t.type&&e.filter((e,a)=>a!==t.itemIndex)||"CLEAR_CART_ITEMS"===t.type&&[]||e,popupStatus:(e={loginPopup:!1,signupPopup:!1},t)=>"UPDATE_POPUP_STATE"===t.type&&Object.assign({},e,{[t.popupName]:t[t.popupName]})||e}),u=a(126),h=a.n(u);const g=Object(m.d)(p,Object(m.c)(Object(m.a)(h.a),"object"==typeof window&&void 0!==window.devToolsExtension?window.devToolsExtension():e=>e));var E=()=>n.createElement("h1",{style:{textAlign:"center"}},"404! :D:D"),v=a(13),f=a(21),b=a(11),y=a.n(b),w=a(28),C=a.n(w),N=a(12),S=a(51),x=a.n(S),k=a(50),_=a.n(k);const A=a(167).URL_SERVER_API,T=e=>({item:e,type:"ADD_CART_ITEM"}),I={raisedButton:{marginRight:5,marginBottom:15}};var P=Object(f.a)(null,e=>({createNewUser:t=>e((e=>t=>__awaiter(void 0,void 0,void 0,function*(){const{message:a}=(yield _.a.post(`${A}/signup-new-user`,e)).data;t(a?{apiStatus:a,type:"CREATE_NEW_USER_SUCCESS"}:{type:"CREATE_NEW_USER_FAILURE"})}))(t)),logUserIn:t=>e((e=>(t,a)=>__awaiter(void 0,void 0,void 0,function*(){const{userId:n,cartItems:l}=a(),{message:r,responsedData:s}=(yield _.a.post(`${A}/user-login`,e)).data;t(r?{responsedData:s,apiStatus:r,type:"LOGIN_SUCCESS"}:{apiStatus:r,type:"LOGIN_FAILURE"})}))(t))}))(e=>{const{createUserInfo:t,loginUserInfo:a,createNewUser:l,logUserIn:r,facebookAuth:s,googleAuth:i}=e,o=a?"continue":"sign up";return n.createElement("div",{className:"popup-button"},n.createElement(x.a,{style:I.raisedButton,labelColor:N.grey50,label:o,backgroundColor:N.grey800,onClick:()=>t?l(t):r(a),fullWidth:!0}),n.createElement("div",{className:"popup-btn-divider"},`Or ${o} with`),n.createElement(x.a,{style:I.raisedButton,labelColor:N.grey50,label:"FACEBOOK",backgroundColor:N.lightBlue900,onClick:s,fullWidth:!0}),n.createElement("br",null),n.createElement(x.a,{style:I.raisedButton,labelColor:N.grey50,label:"GOOGLE",backgroundColor:N.red900,onClick:s,fullWidth:!0}))});var j=class extends n.Component{constructor(){super(...arguments),this.state={email:"",password:""},this.handleChangeUserInfo=((e,t)=>this.setState(a=>Object.assign({},a,{[e]:t})))}render(){const{handleChangeUserInfo:e,state:{email:t,password:a}}=this;return n.createElement(y.a,{zDepth:0},n.createElement("div",{className:"login-modal"},n.createElement("div",{className:"welcome-text"},"Good to see you again. ",n.createElement("br",null),"Please log in."),n.createElement(C.a,{fullWidth:!0,value:t,onChange:t=>e("email",t.target.value),hintText:"Please enter your email address.",floatingLabelText:"Email Address",underlineFocusStyle:{borderColor:N.grey800},floatingLabelStyle:{color:N.grey800}}),n.createElement("br",null),n.createElement(C.a,{fullWidth:!0,value:a,onChange:t=>e("password",t.target.value),hintText:"Please enter your password.",floatingLabelText:"Password",type:"password",underlineFocusStyle:{borderColor:N.grey800},floatingLabelStyle:{color:N.grey800}}),n.createElement("br",null)),n.createElement(P,Object.assign({},{loginUserInfo:this.state})))}};var O=class extends n.Component{constructor(){super(...arguments),this.state={email:"",password:"",fullname:"",preferStyle:{men:!1,women:!1,both:!1}},this.handleChangeUserInfo=((e,t)=>this.setState(a=>Object.assign({},a,{[e]:t}))),this.handleChangePreferStyle=(e=>this.setState(t=>Object.assign({},t,{preferStyle:Object.assign({},t.preferStyle,{[e]:!t.preferStyle[e]})})))}render(){const{handleChangeUserInfo:e,handleChangePreferStyle:t,state:{email:a,password:l,fullname:r,preferStyle:s}}=this;return n.createElement(y.a,{zDepth:0},n.createElement("div",{className:"login-modal"},n.createElement("div",{className:"welcome-text"},n.createElement("div",{style:{fontSize:"20px",padding:"20px"}},"Get a sneak peek."),"Sign up to see what we’ve been working on and claim first dibs on all new product launches. Stay in the know, on the go."),n.createElement(C.a,{value:a,onChange:t=>e("email",t.target.value),hintText:"Please enter your email address.",floatingLabelText:"Email Address",underlineFocusStyle:{borderColor:N.grey800},floatingLabelStyle:{color:N.grey800},fullWidth:!0})),n.createElement(P,Object.assign({},{createUserInfo:this.state})))}},M=a(124),B=a.n(M),L=a(15),U=a.n(L),D=a(43),R=a.n(D);const z=[{category:"Featured",handle:"featured",child:[{name:"New Arrivals",handle:"new-arrivals"},{name:"Puffers",handle:"puffers"},{name:"Denim Shop",handle:"denim-shop"},{name:"Coming Soon",handle:"coming-soon"},{name:"Best Sellers",handle:"best-seller"},{name:"Choose what you pay",handle:"what-you-pay"}]},{category:"Apparel",handle:"apparel",child:[{name:"Tees",handle:"tees"},{name:"Top",handle:"top"},{name:"Sweeters",handle:"sweeters"},{name:"Dresses",handle:"dresses"},{name:"Denim",handle:"denim"},{name:"Pants & Shorts",handle:"pants-shorts"},{name:"Skirts",handle:"skirts"},{name:"Outerwear",handle:"outerwear"}]},{category:"Shoes",handle:"shoes",child:[{name:"Loafers",handle:"loafers"}]},{category:"Accessories",handle:"accessories",child:[{name:"Bags",handle:"bags"}]}],q=[{category:"Featured",handle:"featured",child:[{name:"New Arrivals",handle:"new-arrivals"},{name:"Puffers",handle:"puffers"},{name:"Denim Shop",handle:"denim-shop"},{name:"Coming Soon",handle:"coming-soon"},{name:"Best Sellers",handle:"best-seller"},{name:"Choose what you pay",handle:"what-you-pay"}]}];var W=a(123),$=a.n(W);const G={navbarCollection:{position:"fixed",textAlign:"center",top:40,width:"100%",zIndex:10},navbarAlign:{display:"table",margin:"0 auto"},collectionItems:{},ul:{paddingLeft:"0"},li:{fontFamily:"graphik,Helvetica Neue,Helvetica,Arial,'sans-serif'",fontSize:"11px",lineHeight:"17.798px",color:"#808284",fontWeight:400,textTransform:"uppercase",marginBottom:"5px",display:"block",marginTop:"0",paddingLeft:"0",cursor:"pointer"},section:{textAlign:"left",float:"left",marginRight:"45px"},navbarData:{textAlign:"left",float:"left",marginRight:"45px"},navbarColHeader:{fontWeight:700,paddingLeft:"0"}};class F extends n.Component{constructor(){super(...arguments),this.state={openNavbarCollection:!1,navbarCurrentCategory:""},this.hoverNavbarItem=((e,t)=>{console.log(t),this.setState(a=>Object.assign({},a,{openNavbarCollection:e,navbarCurrentCategory:t}))})}render(){const e="women"===this.state.navbarCurrentCategory?z:q,{hoverNavbarItem:t,props:{username:a,isLoggedin:l,loginPopup:r,signupPopup:s,handleOpenPopup:i},state:{openNavbarCollection:o,navbarCurrentCategory:c}}=this;return n.createElement(y.a,{className:"navbar"},n.createElement(v.a,{to:"/collections/womens-all",onMouseEnter:e=>t(!0,"women"),onMouseLeave:e=>t(!0,c)},n.createElement(U.a,{label:"Women",className:"navbar-item"})),n.createElement(v.a,{to:"/collections/mens-all",onMouseEnter:e=>t(!0,"men"),onMouseLeave:e=>t(!0,c)},n.createElement(U.a,{label:"Men"})),n.createElement(v.a,{to:"/visit-us"},n.createElement(U.a,{label:"Visit us"})),n.createElement(v.a,{to:"/factories"},n.createElement(U.a,{label:"Factories"})),n.createElement(v.a,{to:"/about"},n.createElement(U.a,{label:"About"})),n.createElement("div",{className:"title-site"},n.createElement(v.a,{to:"/"},"ECSITE")),l?n.createElement("div",{className:"btn-right"},n.createElement(v.a,{to:"/account/info"},n.createElement(U.a,{label:`Hi, ${a||"Daniel"}`})),n.createElement("div",{style:{display:"inline-block",padding:"5px 5px 0"}},n.createElement(B.a,{color:"white",stroke:"black"}))):n.createElement("span",null,n.createElement(U.a,{onClick:()=>i("signupPopup",!0),label:"Sign Up",className:"btn-right"}),n.createElement(U.a,{onClick:()=>i("loginPopup",!0),label:"Login",className:"btn-right"}),n.createElement(R.a,{open:r||!1,onRequestClose:()=>i("loginPopup",!1)},n.createElement(j,null)),n.createElement(R.a,{open:s||!1,onRequestClose:()=>i("signupPopup",!1)},n.createElement(U.a,{onClick:()=>i("signupPopup",!0),label:"Sign Up",className:"btn-right"}),n.createElement(U.a,{onClick:()=>i("loginPopup",!0),label:"Login",className:"btn-right"})),n.createElement(R.a,{open:r,onRequestClose:()=>i("loginPopup",!1)},n.createElement(j,null)),n.createElement(R.a,{open:s,onRequestClose:()=>i("signupPopup",!1)},n.createElement(O,null))),o&&n.createElement(y.a,{style:G.navbarCollection,onMouseEnter:e=>t(!0,c),onMouseLeave:e=>t(!1,c)},n.createElement("div",{style:G.navbarAlign},e.map((e,t)=>n.createElement(y.a,{zDepth:0,style:G.navbarData,key:`navbarD-${t}`},n.createElement($.a,{style:G.navbarColHeader},e.category),n.createElement("div",{style:G.section},n.createElement("ul",{style:G.ul},e.child.map((e,t)=>n.createElement("li",{style:G.li,key:`cat-${t}`},e.name)))))))))}}F.defaultProps={isLoggedin:!0,loginPopup:!1,signupPopup:!1};var H=Object(f.a)(e=>({isLoggedin:e.isLoggedin,username:e.username,loginPopup:e.popupStatus.loginPopup,signupPopup:e.popupStatus.signupPopup,cartNumberOfItems:e.cartItems.length}),e=>({handleOpenPopup:(t,a)=>e(((e,t)=>({type:"UPDATE_POPUP_STATUS",popupName:t}))(0,a))}))(F),V=a(122);const Q={background:"url('https://everlane-2.imgix.net/i/88336c01_608a.jpg?q=65&dpr=1.5')",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"400px"},X={background:"url('https://everlane-2.imgix.net/i/81b3920b_d927.jpg?q=65&dpr=1.5')",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"400px"},J={background:"url('https://everlane-2.imgix.net/i/e9217a3d_452f.jpg?q=65&dpr=1.5')",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"400px"};var K=e=>n.createElement("div",{className:"homepage"},n.createElement("div",{className:"carosel"},n.createElement(V.Carousel,{showArrows:!0,showStatus:!1,showThumbs:!1,infiniteLoop:!0},n.createElement("div",null,n.createElement("img",{src:"https://everlane-2.imgix.net/i/ce913f1d_52f4.jpg"})),n.createElement("div",null,n.createElement("img",{src:"https://everlane-2.imgix.net/i/3c94c4f9_0be5.jpg"})))),n.createElement("div",{className:"featured-collection-container row"},n.createElement("div",{className:"featured-collection col-xs-4"},n.createElement("div",{style:Q,className:"thumbnail"},n.createElement("div",{className:"title"},"The Denim Shop"))),n.createElement("div",{className:"featured-collection col-xs-4"},n.createElement("div",{style:X,className:"thumbnail"},n.createElement("div",{className:"title"},"Our Denim Factory"))),n.createElement("div",{className:"featured-collection col-xs-4"},n.createElement("div",{style:J,className:"thumbnail"},n.createElement("div",{className:"title"},"The Campaign")))));var Y=e=>n.createElement(y.a,{className:"footer"},n.createElement("div",{className:"container"},n.createElement("div",{className:"col-xs-6 left"},n.createElement("ul",null,n.createElement("li",{className:"section"},n.createElement("h6",{className:"footer-column-header"},"HELP"),n.createElement("ul",null,n.createElement("li",null,"Orders & Returns"),n.createElement("li",null,"Contact & FAQ"),n.createElement("li",null,"Terms of Service"),n.createElement("li",null,"Privacy Policy"),n.createElement("li",null,"Sitemap - Collections"),n.createElement("li",null,"Sitemap - Products"))),n.createElement("li",{className:"section"},n.createElement("h6",{className:"footer-column-header"},"COMPANY"),n.createElement("ul",null,n.createElement("li",null,"Visit Us"),n.createElement("li",null,"Factories"),n.createElement("li",null,"About"),n.createElement("li",null,"Careers"))),n.createElement("li",{className:"section"},n.createElement("h6",{className:"footer-column-header"},"CONNECT"),n.createElement("ul",null,n.createElement("li",null,"Snapchat"),n.createElement("li",null,"Instagram"),n.createElement("li",null,"Twitter"),n.createElement("li",null,"Affilates"))))),n.createElement("div",{className:"col-xs-6 right"},n.createElement("div",null,"Refer a friend. Earn $25 credit when they purchase."),n.createElement(C.a,{id:"reference-text-test",value:"https://www.testtesttest.com/r/sntrnh",fullWidth:!0}))));var Z=({backgroundImg:e,title:t,text:a})=>n.createElement("div",{style:{backgroundImage:`url(${e})`},className:"banner"},n.createElement("div",{className:"banner-content"},n.createElement("h1",null,t),a&&n.createElement("p",null,a)));var ee=({currentBreadcrumbs:e})=>n.createElement("div",{className:"breadcrumb"},n.createElement("ul",null,e.map((t,a)=>n.createElement(v.a,{key:`breadcrumb-${a}`,to:t.path,onClick:t=>a===e.length-1&&t.preventDefault()},t.children,a!==e.length-1&&"   / "))));var te=e=>{const{mainMenuItems:t,subMenuItems:a,featuredCategories:l}=e;return n.createElement("div",null,n.createElement("div",{className:"featured-category"},l.map((e,t)=>n.createElement("div",{key:`cat-${t}`},n.createElement(v.a,{to:e.path},e.item)))),n.createElement("div",{className:"categories"},t.map((e,t)=>a&&e.item===a.refItem?n.createElement("div",{key:`subCat-${t}`},a.items.map((e,t)=>n.createElement(v.a,{key:`subSideMenu-${t}`,to:e.path},e.item))):n.createElement("div",{key:`subCat-${t}`},n.createElement(v.a,{key:`sideMenu-${t}`,to:e.path},e.item)))))},ae=a(121);var ne=Object(f.a)(null,e=>({addCartItem:t=>e(T(t)),addFavoriteItem:t=>e((e=>({item:e,type:"ADD_FAVORITE_ITEM"}))(t)),removeFavoriteItem:t=>e((e=>({itemId:e,type:"REMOVE_FAVORITE_ITEM"}))(t))}))(class extends n.Component{constructor(){super(...arguments),this.state={showQuickAdd:!1},this.hoverProductCard=(e=>{this.setState(t=>Object.assign({},t,{showQuickAdd:e}))})}render(){const{state:{showQuickAdd:e},props:{initialProduct:t},hoverProductCard:a}=this,l={background:`url(${t.albums.portrait[0]}) no-repeat`,backgroundPosition:"center right",width:"100%",backgroundSize:"cover",height:"350px",textAlign:"center"};return n.createElement(v.a,{to:`/products/${t.permalink}`,onMouseEnter:e=>a(!0),onMouseLeave:e=>a(!1)},n.createElement(ae.Card,{className:"col-xs-4 product-card"},n.createElement("div",{className:"thumbnail",style:l},e&&n.createElement(U.a,{onClick:()=>T(t),backgroundColor:"white",hoverColor:"white",style:{width:"90%",color:"#ABACAE",position:"absolute",bottom:"10px",left:"5%"}},"+ Quick Add")),n.createElement("div",{className:"detail"},n.createElement("div",{className:"col-xs-7 product-title"},t.title),n.createElement("div",{className:"col-xs-5 product-price"},t.price,"$")),n.createElement("div",{className:"current-color"},"Rose"),n.createElement("div",{className:"total-colors"},"4 colors available")))}});var le=e=>{const{title:t,products:a}=e;return n.createElement("div",{className:"category"},n.createElement("h3",null,t),a.map((e,t)=>n.createElement(ne,Object.assign({key:`productCard-${t}`},{initialProduct:e,index:t}))))};const re={currentBreadcrumbs:[{children:"Home",path:"/"},{children:"Women",path:"/womens"},{children:"Men",path:"/mens"},{children:"test",path:"/test"}],currentBanner:{backgroundImg:"https://everlane.imgix.net/i/c2afc430_8bf8.jpg?dpr=1.5&q=65",text:"Shop all that you want",title:"Shop All"},sidebarMenu:{featuredCategories:[{item:"Women All",path:"/women-all"},{item:"New Arrivals",path:"/new-arrivals"},{item:"Gift for her",path:"/gift-for-her"},{item:"Gift for him",path:"/gift-for-him"}],mainMenuItems:[{item:"Tees",path:"/test1"},{item:"Tops",path:"/test1"},{item:"Sweeters",path:"/test2"},{item:"Dresses",path:"/test1"},{item:"Denim",path:"/test1"}],subMenuItems:{refItem:"test2",items:[{item:"test21",path:"/test21"},{item:"test21",path:"/test21"},{item:"test21",path:"/test21"}]}},product:{images:["https://everlane.imgix.net/i/4c7a58ee_6a23.jpg?dpr=1&w=1200&h=1200&q=65","https://everlane.imgix.net/i/cebcacec_b25b.jpg?dpr=1&w=1200&h=1200&q=65","https://everlane.imgix.net/i/7315a850_0064.jpg?dpr=1&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/4a6d8024_eb8c.jpg?dpr=1&w=1200&h=1200&q=65","https://everlane.imgix.net/i/e10d30d4_6786.jpg?dpr=1&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/bb537bd7_43ca.jpg?dpr=1&w=1200&h=1200&q=65"],name:"The Cashmere Crew",price:100,traditionalPrice:210,colors:[{name:"Charcoal",code:"#5D5D5D"},{name:"Black",code:"#1C1C1C"},{name:"Camel",code:"#BA9565"}],sizes:["XXS","XS","S","M","L","XL"],details:{model:"Model is 5'10. Wearing size S",specific:"Relaxed fit",material:"Body: 100% Cashmere; Trimmings: 90% Cashmere, 9% Nylon, 1% Elastane Dry Clean",signature:"Signature reversed stitching deatil on the cuffs",from:"Made in Dongguan, China"},description:"It doesn't get more classic than a crew. This crewneck sweater is warm, soft to the touch, and lightweight with a slightly relaxed fit for an easy, timeless look. Did we mention it's Grade-A Mongolian cashmere?"},categories:[{title:"The Italian GoWeave Classic Blazer",products:[{albums:{portrait:["https://everlane-2.imgix.net/i/39815c51_815c.jpg","https://everlane-2.imgix.net/i/a1f6bf29_5056.jpg?dpr=1&w=362&h=452.5&q=65&fit=crop&crop=faces"],gallery:["https://everlane.imgix.net/i/8a0650ae_0d06.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane.imgix.net/i/7f1f3f6c_016c.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/2653c6a8_8ca5.jpg?dpr=1.5&w=1200&h=1200&q=65"]},details:{additional_details:["Back vent","Located just south of Ho Chi Minh City, Poong In is an industry-leading factory that offers competitive pay and works with Better Work"],description:"A truly iconic blazer. Tailored for a slim silhouette (with subtle stretch for the perfect fit), this blazer is made from wrinkle-resistant Italian GoWeave, so you can wear it all day long"},styledClass:"thumbnail-product-img",title:"The Cashmere Crew",price:125,gender:"female",permalink:"womens-italian-goweave-classic-blazer",sizeChart:[["MEASUREMENTS","24","25","26","27","28","29","30","31","32"],["US Pant Size","00","0","2","4","6","8","10","12","14"],["Waistband Top Edge","26 3/4","27 3/4","28 3/4","29 3/4","30 3/4","31 3/4","32 3/4"]],styles:[{backgroundColor:"#8CBED6",title:"Bright Blue / Navy",className:"product-page__color-swatch"}]},{albums:{portrait:["https://everlane-2.imgix.net/i/39815c51_815c.jpg","https://everlane-2.imgix.net/i/a1f6bf29_5056.jpg?dpr=1&w=362&h=452.5&q=65&fit=crop&crop=faces"],gallery:["https://everlane.imgix.net/i/8a0650ae_0d06.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane.imgix.net/i/7f1f3f6c_016c.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/2653c6a8_8ca5.jpg?dpr=1.5&w=1200&h=1200&q=65"]},details:{additional_details:["Back vent","Located just south of Ho Chi Minh City, Poong In is an industry-leading factory that offers competitive pay and works with Better Work"],description:"A truly iconic blazer. Tailored for a slim silhouette (with subtle stretch for the perfect fit), this blazer is made from wrinkle-resistant Italian GoWeave, so you can wear it all day long"},styledClass:"thumbnail-product-img",title:"The Cashmere Crew",price:125,gender:"female",permalink:"womens-italian-goweave-classic-blazer",sizeChart:[["MEASUREMENTS","24","25","26","27","28","29","30","31","32"],["US Pant Size","00","0","2","4","6","8","10","12","14"],["Waistband Top Edge","26 3/4","27 3/4","28 3/4","29 3/4","30 3/4","31 3/4","32 3/4"]],styles:[{backgroundColor:"#8CBED6",title:"Bright Blue / Navy",className:"product-page__color-swatch"}]},{albums:{portrait:["https://everlane-2.imgix.net/i/39815c51_815c.jpg","https://everlane-2.imgix.net/i/a1f6bf29_5056.jpg?dpr=1&w=362&h=452.5&q=65&fit=crop&crop=faces"],gallery:["https://everlane.imgix.net/i/8a0650ae_0d06.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane.imgix.net/i/7f1f3f6c_016c.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/2653c6a8_8ca5.jpg?dpr=1.5&w=1200&h=1200&q=65"]},details:{additional_details:["Back vent","Located just south of Ho Chi Minh City, Poong In is an industry-leading factory that offers competitive pay and works with Better Work"],description:"A truly iconic blazer. Tailored for a slim silhouette (with subtle stretch for the perfect fit), this blazer is made from wrinkle-resistant Italian GoWeave, so you can wear it all day long"},styledClass:"thumbnail-product-img",title:"The Cashmere Crew",price:125,gender:"female",permalink:"womens-italian-goweave-classic-blazer",sizeChart:[["MEASUREMENTS","24","25","26","27","28","29","30","31","32"],["US Pant Size","00","0","2","4","6","8","10","12","14"],["Waistband Top Edge","26 3/4","27 3/4","28 3/4","29 3/4","30 3/4","31 3/4","32 3/4"]],styles:[{backgroundColor:"#8CBED6",title:"Bright Blue / Navy",className:"product-page__color-swatch"}]},{albums:{portrait:["https://everlane-2.imgix.net/i/39815c51_815c.jpg","https://everlane-2.imgix.net/i/a1f6bf29_5056.jpg?dpr=1&w=362&h=452.5&q=65&fit=crop&crop=faces"],gallery:["https://everlane.imgix.net/i/8a0650ae_0d06.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane.imgix.net/i/7f1f3f6c_016c.jpg?dpr=1.5&w=1200&h=1200&q=65","https://everlane-2.imgix.net/i/2653c6a8_8ca5.jpg?dpr=1.5&w=1200&h=1200&q=65"]},details:{additional_details:["Back vent","Located just south of Ho Chi Minh City, Poong In is an industry-leading factory that offers competitive pay and works with Better Work"],description:"A truly iconic blazer. Tailored for a slim silhouette (with subtle stretch for the perfect fit), this blazer is made from wrinkle-resistant Italian GoWeave, so you can wear it all day long"},styledClass:"thumbnail-product-img",title:"The Cashmere Crew",price:125,gender:"female",permalink:"womens-italian-goweave-classic-blazer",sizeChart:[["MEASUREMENTS","24","25","26","27","28","29","30","31","32"],["US Pant Size","00","0","2","4","6","8","10","12","14"],["Waistband Top Edge","26 3/4","27 3/4","28 3/4","29 3/4","30 3/4","31 3/4","32 3/4"]],styles:[{backgroundColor:"#8CBED6",title:"Bright Blue / Navy",className:"product-page__color-swatch"}]}]}]};var se=Object(f.a)(e=>({}),e=>({}))(class extends n.Component{render(){return n.createElement("div",{className:"container collection"},n.createElement(y.a,null,n.createElement(ee,{currentBreadcrumbs:re.currentBreadcrumbs}),n.createElement("div",{className:"col-xs-2 sidebar-menu"},n.createElement(te,Object.assign({},re.sidebarMenu))),n.createElement("div",{className:"col-xs-10 category"},n.createElement(Z,Object.assign({},re.currentBanner)),re.categories.map((e,t)=>n.createElement(le,Object.assign({key:`ctgr-${t}`},e))))))}});var ie=Object(f.a)(e=>({}),e=>({}))(class extends n.Component{constructor(){super(...arguments),this.state={focus:0},this.handleUpdateState=((e,t)=>this.setState(a=>Object.assign({},a,{[e]:t})))}render(){const e=re.product,t=re.categories[0].products[0];return n.createElement("div",{className:"container collection"},n.createElement(y.a,null,n.createElement(ee,{currentBreadcrumbs:re.currentBreadcrumbs}),n.createElement(y.a,{zDepth:1,style:{float:"left",width:"100%",marginTop:"30px"}},n.createElement("div",{className:"col-xs-2 sidebar-menu"},n.createElement(te,Object.assign({},re.sidebarMenu))),n.createElement("div",{className:"col-xs-10 product-detail"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-xs-8",style:{display:"flex"}},n.createElement("div",{className:"product-gallery-thumbs"},n.createElement("div",{className:"sticky-thumb-container"},n.createElement("div",{className:"sticky-thumb-items"},e.images.map((e,a)=>n.createElement("div",{key:`timg-${a}`,className:`${t.styledClass} ${this.state.focus===a?"thumb-img-focus":""}`},n.createElement("img",{onClick:()=>this.handleUpdateState("focus",a),src:e,alt:""})))))),n.createElement("div",{className:"product-gallery-assets"},n.createElement("div",{className:"product-gallery-assets-container"},e.images.map((e,t)=>n.createElement("div",{key:`img-${t}`,className:"image-item"},n.createElement("img",{src:e})))))),n.createElement("div",{className:"col-xs-4 product-info"},n.createElement("div",{className:"title-price"},e.name," - $",e.price),n.createElement("div",{className:"traditional-retail"},"Traditional Retail: $",e.traditionalPrice),n.createElement("div",{className:"colors"},n.createElement("div",{className:"current-color"},e.colors[0].name),e.colors.map((e,t)=>n.createElement("a",{key:`color-${t}`,className:"product-color",style:{backgroundColor:e.code}}))),n.createElement("div",{className:"sizes"},n.createElement("div",null,n.createElement(v.a,{to:"#"},"Size Guide")),n.createElement("div",{className:"size-list"},e.sizes.map((e,t)=>n.createElement("div",{key:`size-${t}`,className:"product-size"},e)))),n.createElement("div",{className:"btn-add-to-bag"},n.createElement(U.a,{fullWidth:!0,backgroundColor:"#2c2c2c",hoverColor:"#323232",label:"ADD TO BAG",labelStyle:{color:"white"}})),n.createElement("div",{className:"details"}),n.createElement("div",{className:"description"},n.createElement("div",{className:"title"},"Description"),n.createElement("div",{className:"content"},"It doesn't get more classic than a crew. This crewneck sweater is warm, soft to the touch, and lightweight with a slightly relaxed fit for an easy, timeless look. Did we mention it's Grade-A Mongolian cashmere?"))))))))}});const oe=()=>n.createElement(l.a,null,n.createElement(i.a,{store:g},n.createElement(c.a,null,n.createElement("div",null,n.createElement(H,null),n.createElement(s.a,null,n.createElement(r.a,{exact:!0,path:"/",component:K}),n.createElement(r.a,{path:"/collections",component:se}),n.createElement(r.a,{path:"/products/:id",component:e=>(console.log(e),n.createElement(ie,{productPermalink:e.match.params.id}))}),n.createElement(r.a,{component:E})),n.createElement(Y,null)))));var ce;ce=n.createElement(oe,null),Object(n.render)(ce,document.getElementById("app"))},134:function(e,t,a){},167:function(e){e.exports={URL_SERVER_API:"http://localhost:3000",MESSAGE_CLEAR_TIME:2e3}},296:function(e,t,a){a(132),e.exports=a(134)}});