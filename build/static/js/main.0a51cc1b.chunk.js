(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"app.home":"Inicio","app.title":"Mis juegos","menu.tictactoe":"TresEnRaya","menu.quiz":"Quizzes","app.welcome":"Bienvenido a la p\xe1gina principal de minijuegos en React. En esta p\xe1gina podr\xe1s jugar a diferentes juegos. Haz clic en la pesta\xf1a del juego a que quieras jugar.","quiz.create":"Creado por","quiz.answer":"Respuesta: ","quiz.congrat1":"Enhorabuena","quiz.congrat2":"Otra vez ser\xe1","quiz.correct":"Correcta","quiz.incorrect":"Incorrecta","quiz.no.answer":"Sin responder","quiz.question":"Pregunta","quiz.notification":" has acertado","quiz.anonymous":"\xc1nonimo","quiz.restart":"Vuelve a jugar","quiz.reset":"Reset","quiz.back":"Anterior","quiz.next":"Siguiente","quiz.submit":"Terminar","turn":"Turno","moves":"N\xfamero de movimientos: ","player1":"Jugador1 - X","player2":"Jugador2 - O"}')},38:function(e){e.exports=JSON.parse('{"app.home":"Home","app.title":"My games","menu.tictactoe":"TicTacToe","menu.quiz":"Quizzes","app.welcome":"Welcome to the React minigames homepage. On this page you can play different games. Click on the tab to play the game you want.","quiz.create":"Created by","quiz.answer":"Answer: ","quiz.congrat1":"Congrats!!","quiz.congrat2":"Try next time","quiz.correct":"Correct","quiz.incorrect":"Incorrect","quiz.no.answer":"No answer","quiz.question":"Question","quiz.notification":" you have answered","quiz.anonymous":"Anonymous","quiz.restart":"Play again","quiz.reset":"Reset","quiz.back":"Back","quiz.next":"Next","quiz.submit":"Submit","turn":"Turn","moves":"Number of moves: ","player1":"Player1 - X","player2":"Player2 - O"}')},47:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),r=s(29),a=s.n(r),c=(s(47),s(28)),o=s(3),u=s(60),l=s(1);function p(){return Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h2",{children:Object(l.jsx)(u.a,{id:"app.home",defaultMessage:"Inicio"})}),Object(l.jsx)(u.a,{id:"app.welcome"})]}),Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{className:"homeImg",src:"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1600w.jpg",alt:"none"})})]})}var j=s(5),h=s(6),d=s(8),b=s(7),O=s(22),m=s(23),v=s(9),x=s(14),f=s(59),z=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)(f.a,{style:{width:"18rem"},children:Object(l.jsx)(f.a.Body,{children:Object(l.jsx)(f.a.Title,{children:this.props.text})})})}}]),s}(i.a.Component),g={height:"100px",width:"100px"},q=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).squareClick=n.squareClick.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"squareClick",value:function(){"-"===this.props.value&&this.props.boardClick(this.props.rowIndex,this.props.columnIndex)}},{key:"render",value:function(){return Object(l.jsx)("button",{style:g,onClick:this.squareClick,className:"-"===this.props.value?"clickable":"no_clickable",children:this.props.value})}}]),s}(i.a.Component),y=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).boardClick=n.boardClick.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"boardClick",value:function(e,t){this.props.appClick(e,t)}},{key:"render",value:function(){var e=this,t=this.props.values.map((function(t,s){var n=t.map((function(t,n){return Object(l.jsx)(q,{value:t,rowIndex:s,columnIndex:n,boardClick:e.boardClick},s+"-"+n)}));return Object(l.jsx)("div",{children:n},"row"+s)}));return Object(l.jsx)("div",{children:t})}}]),s}(i.a.Component),C=s(61),k=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).click=n.click.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"click",value:function(){this.props.resetClick()}},{key:"render",value:function(){return Object(l.jsx)(C.a,{onClick:this.click,children:"Reset"})}}]),s}(i.a.Component);var w=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).appClick=n.appClick.bind(Object(x.a)(n)),n.resetClick=n.resetClick.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"appClick",value:function(e,t){var s,n,i,r;this.props.dispatch((s=e,n=t,i=this.props.turn,r=this.props.values,{type:"PLAY_POSITION",x:s,y:n,turn:i,values:r}))}},{key:"resetClick",value:function(){this.props.dispatch({type:"RESET"})}},{key:"render",value:function(){var e="Turn of "+this.props.turn;return Object(l.jsxs)("div",{className:"tictactoe",children:[Object(l.jsx)("main",{children:Object(l.jsx)("h2",{children:Object(l.jsx)(u.a,{id:"menu.tictactoe"})})}),Object(l.jsxs)("div",{className:"tictactoeGame",children:[Object(l.jsx)(z,{className:"headerT",text:e}),Object(l.jsx)(y,{className:"boardT",values:this.props.values,appClick:this.appClick}),Object(l.jsxs)("h3",{children:[Object(l.jsx)(u.a,{id:"moves"}),this.props.moves]}),Object(l.jsx)("div",{className:"resetT",children:Object(l.jsx)(k,{resetClick:this.resetClick})})]})]})}}]),s}(n.Component);var N=Object(O.b)((function(e){return Object(v.a)({},e)}))(w),S="Player1 - X",Q="Player2 - 0",E=[["-","-","-"],["-","-","-"],["-","-","-"]];var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_POSITION":var s=t.turn===S?"X":"0",n=JSON.parse(JSON.stringify(e));return n[t.x][t.y]=s,n;case"RESET":return E;default:return e}};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_POSITION":return t.turn===S?Q:S;case"RESET":return S;default:return e}};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_POSITION":return e+1;case"RESET":return 0;default:return e}},P=Object(m.a)({turn:I,values:T,moves:A}),M=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).initialState={values:E,turn:S,moves:0},n.store=Object(m.b)(P,n.initialState),n}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)(O.a,{store:this.store,children:Object(l.jsx)("div",{style:{height:"100%"},children:Object(l.jsx)(N,{store:this.store})})})}}]),s}(i.a.Component),_=s(15),F=s(32),R=s(38),U=s(58),L=i.a.createContext(),B=function(e){var t=e.children,s=Object(n.useState)(F),i=Object(_.a)(s,2),r=i[0],a=i[1],c=Object(n.useState)("es-ES"),o=Object(_.a)(c,2),u=o[0],p=o[1],j=function(e){switch(console.log("Cambiamos en mensaje a",e),e){case"es-ES":a(F),p("es-ES"),"es-ES";break;case"en-UK":a(R),p("en-UK"),"en-UK";break;default:a(F),p("es-ES"),"es-ES"}};return Object(l.jsx)(L.Provider,{value:{establecerLenguaje:j,changeLang:function(){"es-ES"===u&&j("en-UK"),"en-UK"===u&&j("es-ES")},checkLang:function(){"es-ES"===u&&j("es-ES"),"en-UK"===u&&j("en-UK")}},children:Object(l.jsx)(U.a,{locale:u,messages:r,children:t})})},J=function(){var e=Object(n.useContext)(L);return console.log(e),Object(l.jsx)("div",{className:"lang",children:Object(l.jsxs)("select",{name:"select-lang",onChange:function(){return e.changeLang()},children:[Object(l.jsx)("option",{selected:!0,children:"Espa\xf1ol"}),Object(l.jsx)("option",{children:"English"})]})})},K="QUESTION_ANSWER",H="SUBMIT",X="CHANGE_QUIZ",Y="INIT_QUIZZES",D=[];var Z=Object(m.a)({score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case H:var s=0;return t.payload.quizzes.map((function(e){return s+=e.userAnswer===e.answer?1:0})),s;case Y:return 0;default:return e}},finished:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case H:return!0;case Y:return!1;default:return e}},currentQuiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case X:return t.payload.index<0||t.payload.index>=10?e:t.payload.index;case Y:return 0;default:return e}},quizzes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case K:return e.map((function(e,s){return Object(v.a)(Object(v.a)({},e),{},{userAnswer:t.payload.index===s?t.payload.answer:e.userAnswer})}));case Y:return JSON.parse(JSON.stringify(t.payload.quizzes));default:return e}}}),G=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)("button",{className:"buttonsFormat",onClick:this.props.click,disabled:this.props.shutdown,style:{cursor:this.props.shutdown?"not-allowed":"pointer"},children:this.props.Name})}}]),s}(i.a.Component),V=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"actionBarContainer",children:Object(l.jsxs)("div",{className:"buttons",style:{display:this.props.isFinished?"none":"flex"},children:[Object(l.jsx)(G,{click:this.props.reset,Name:Object(l.jsx)(u.a,{id:"quiz.reset",defaultMessage:"Reset"})}),Object(l.jsx)(G,{Name:Object(l.jsx)(u.a,{id:"quiz.back",defaultMessage:"Anterior"}),shutdown:this.props.q0,click:function(){e.props.onChangeQuiz(e.props.currentQuiz-1)}}),Object(l.jsx)(G,{Name:Object(l.jsx)(u.a,{id:"quiz.next",defaultMessage:"Siguiente"}),shutdown:this.props.q9,click:function(){e.props.onChangeQuiz(e.props.currentQuiz+1)}}),Object(l.jsx)(G,{click:this.props.submit,Name:Object(l.jsx)(u.a,{id:"quiz.submit",defaultMessage:"Terminar"}),shutdown:!1})]})})}}]),s}(i.a.Component),W=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"scoreContainer",style:{display:this.props.isFinished?"flex":"none"},children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:[this.props.score>4?Object(l.jsx)(u.a,{id:"quiz.congrat1",default:"Enhorabuena"}):Object(l.jsx)(u.a,{id:"quiz.congrat2",default:"Otra vez ser\xe1"}),",",Object(l.jsx)(u.a,{id:"quiz.notification",default:"has acertado"})," ",this.props.score," quizzes"]}),this.props.quizzes.map((function(e,t){return Object(l.jsxs)("div",{className:"listContainer",children:[Object(l.jsx)(u.a,{id:"quiz.question",default:"Pregunta"})," ",t+1,": ",e.question," - ",void 0===e.userAnswer?Object(l.jsx)("span",{style:{color:"yellow"},children:Object(l.jsx)(u.a,{id:"quiz.no.answer",default:"Sin responder"})}):e.answer.toLowerCase()===e.userAnswer.toLowerCase()?Object(l.jsx)("span",{style:{color:"green"},children:Object(l.jsx)(u.a,{id:"quiz.correct",default:"Correcta"})}):Object(l.jsx)("span",{style:{color:"red"},children:Object(l.jsx)(u.a,{id:"quiz.incorrect",default:"Sin responder"})})]},t)}))]})})}}]),s}(i.a.Component),$=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return null===this.props.att?Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",alt:this.props.question})}):Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:this.props.att.url,alt:this.props.question})})}}]),s}(i.a.Component),ee=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)("h1",{className:"question",children:this.props.question})}}]),s}(i.a.Component),te=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidUpdate",value:function(){document.getElementById("answerUser").focus()}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)(u.a,{id:"quiz.answer",defaultMessage:"Respuesta: "}),Object(l.jsx)("input",{autoFocus:!0,id:"answerUser",type:"text",value:this.props.userAnswer||"",onChange:function(t){e.props.onQuestionAnswer(t.target.value)}})]})}}]),s}(i.a.Component),se=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"authorContainer",style:{display:this.props.isFinished?"none":"flex"},children:null!==this.props.author?Object(l.jsxs)("div",{className:"authorBox",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)(u.a,{id:"quiz.create",defaultMessage:"Creado por"})," ",null!==this.props.author.username?this.props.author.username:this.props.author.profileName]}),Object(l.jsx)("img",{title:"autor",src:null!==this.props.author.photo.url?this.props.author.photo.url:"https://static.diariosur.es/www/pre2017/multimedia/RC/201501/12/media/cortadas/avatar--320x378.jpg",alt:""})]}):Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"authorName",children:Object(l.jsx)(u.a,{id:"quiz.anonymous",defaultMessage:"\xc1nonimo"})})})})}}]),s}(i.a.Component),ne=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsx)("li",{children:Object(l.jsx)("ul",{children:Object(l.jsx)("button",{className:"buttonsFormat",onClick:function(){e.props.onChangeQuiz(e.props.num-1)},children:this.props.num})})})}}]),s}(i.a.Component),ie=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"buttonShortcut",children:this.props.quizzes.map((function(t,s){return Object(l.jsx)(ne,{onChangeQuiz:e.props.onChangeQuiz,num:s+1,currentQuiz:e.props.currentQuiz,quizzes:e.props.quizzes,icon:s+1})}))})}}]),s}(i.a.Component),re=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return this.props.finished?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(W,{score:this.props.score,isFinished:this.props.finished,quizzes:this.props.quizzes})}),Object(l.jsx)("div",{className:"buttonReplay",children:Object(l.jsx)(G,{click:this.props.reset,Name:Object(l.jsx)(u.a,{id:"quiz.restart",defaultMessage:"Vuelve a jugar"})})})]}):Object(l.jsxs)("div",{className:"gameContainer",children:[Object(l.jsx)("div",{className:"numquizController",children:Object(l.jsx)(ie,{quizzes:this.props.quizzes,currentQuiz:this.props.currentQuiz,onChangeQuiz:this.props.onChangeQuiz,isFinished:this.props.finished})}),Object(l.jsx)(W,{quizzes:this.props.quizzes,score:this.props.score,isFinished:this.props.finished}),Object(l.jsx)("div",{className:"quizContainer",children:Object(l.jsxs)("div",{className:"imgqaaControler",children:[Object(l.jsx)("div",{className:"imageContainer",children:Object(l.jsx)($,{att:this.props.quizzes[this.props.currentQuiz].attachment,question:this.props.quizzes[this.props.currentQuiz].question})}),Object(l.jsxs)("div",{className:"qaaControler",children:[Object(l.jsx)(ee,{question:this.props.quizzes[this.props.currentQuiz].question}),Object(l.jsx)(te,{userAnswer:this.props.quizzes[this.props.currentQuiz].userAnswer,onQuestionAnswer:this.props.onQuestionAnswer}),Object(l.jsx)(se,{author:this.props.quizzes[this.props.currentQuiz].author,isFinished:this.props.finished}),Object(l.jsx)(V,{className:"actionbarControler",currentQuiz:this.props.currentQuiz,onChangeQuiz:this.props.onChangeQuiz,q9:this.props.q9,q0:this.props.q0,submit:this.props.submit,reset:this.props.reset,isFinished:this.props.finished})]})]})})]})}}]),s}(i.a.Component);var ae=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).quizzes=[],n.download=n.download.bind(Object(x.a)(n)),n.submit=n.submit.bind(Object(x.a)(n)),n.reset=n.reset.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"download",value:function(e){var t=this;fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=72dfbad36c2571dae715").then((function(e){return e.json()})).then((function(s){s.map((function(t){return t.question&&e.push(t),-1})),t.props.dispatch(function(e){return{type:Y,payload:{quizzes:e}}}(e))}))}},{key:"componentDidMount",value:function(){this.download(this.quizzes)}},{key:"submit",value:function(){var e;this.props.dispatch((e=this.props.quizzes,{type:H,payload:{quizzes:e}}))}},{key:"reset",value:function(){this.quizzes=[],this.download(this.quizzes)}},{key:"render",value:function(){var e=this,t=this.props.currentQuiz,s=!1,n=!1;return this.props.quizzes.length<=0?Object(l.jsx)("div",{className:"quiz",children:Object(l.jsx)("h1",{children:"Cargando preguntas"})}):(0===t&&(n=!0),9===t&&(s=!0),Object(l.jsxs)("div",{className:"quiz",children:[Object(l.jsx)("h2",{children:"Quiz"}),Object(l.jsx)("div",{className:"mainContainer",children:Object(l.jsx)(re,{quizzes:this.props.quizzes,currentQuiz:this.props.currentQuiz,onQuestionAnswer:function(t){e.props.dispatch(function(e,t){return{type:K,payload:{index:e,answer:t}}}(e.props.currentQuiz,t))},onChangeQuiz:function(t){e.props.dispatch({type:X,payload:{index:t}})},reset:this.reset,submit:this.submit,q9:s,q0:n,score:this.props.score,finished:this.props.finished})})]}))}}]),s}(i.a.Component);var ce=Object(O.b)((function(e){return Object(v.a)({},e)}))(ae),oe=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).initialState={score:0,finished:false,currentQuiz:0,quizzes:D},n.store=n.configureStore(),n}return Object(h.a)(s,[{key:"render",value:function(){return Object(l.jsx)(O.a,{store:this.store,children:Object(l.jsx)("div",{style:{height:"100%"},children:Object(l.jsx)(ce,{store:this.store})})})}},{key:"configureStore",value:function(){return Object(m.b)(Z,this.initialState)}}]),s}(i.a.Component);function ue(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{className:"mainTitle",children:[Object(l.jsx)(u.a,{id:"app.title",defaultMessage:"Mis Juegos"}),Object(l.jsx)("div",{className:"langSelector",children:Object(l.jsx)(J,{})})]})}),Object(l.jsx)("div",{className:"navBar",children:Object(l.jsx)("nav",{style:{paddingBottom:"1rem"},children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/",children:Object(l.jsx)(u.a,{id:"app.home",defaultMessage:"Inicio"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/tictactoe",children:Object(l.jsx)(u.a,{id:"menu.tictactoe"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/quiz",children:"Quiz"})})]})})}),Object(l.jsx)("div",{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:"tictactoe",element:Object(l.jsx)(M,{})}),Object(l.jsx)(o.a,{path:"quiz",element:Object(l.jsx)(oe,{})})]})})]})}var le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a,{children:Object(l.jsx)(B,{children:Object(l.jsx)(ue,{})})}),document.getElementById("root")),le()}},[[55,1,2]]]);
//# sourceMappingURL=main.0a51cc1b.chunk.js.map