/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("//베이스URL가져오기\r\nconst baseURL = \"http://likelion12thtoy.kro.kr:8000/guestbook/\";\r\n//자식요소 넣을 돔 가져오기(나누다보니,,,많아짐)\r\nconst container = document.getElementById('container');\r\nconst GuestList = document.getElementById('GuestList');\r\nconst newGuest = document.getElementById('newGuest');\r\nconst GList = document.getElementById('GList');\r\nconst newG = document.getElementById('newG');\r\n\r\n//방명록 리스트 조회(시간순 정렬)\r\nasync function getData() {\r\n    //const url= `${baseURL}/`;\r\n    const fetchData = await fetch(baseURL);\r\n    //console.log(fetchData);\r\n    const toJson = await fetchData.json();\r\n    //console.log(toJson);\r\n    //지금까지 패치데이터를 toJson에 담았음.\r\n    \r\n    \r\n\r\n    //불러온 기록 정렬하기(GuestListdksdp Glist박스들 쌓이게, 한 기록이 한 GList)\r\n    toJson.map((data)=> {\r\n        const list = document.createElement('div');\r\n        list.id = \"list\";\r\n        //list내 데이터 나타내기\r\n        list.innerHTML = `\r\n            <p>${data.title}</p>\r\n            <p>${data.content}</p>\r\n            <p>${data.writer} <p style=\"color:gray\">${data.created_at}</p> </p>\r\n            <input type=\"password\" placeholder=\"비밀번호 입력\">\r\n            <button type=\"button\" id=\"delBtn\">삭제하기</button>\r\n        `\r\n        //list를 div박스를 만들어 innerHtml을 통해 내부에 데이터 내용 가져오기\r\n        //delBtn클릭시 delData함수 호출\r\n        const delBtn = document.querySelector(\"delBtn\");\r\n        delBtn.addEventListener(\"click\",delData);\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\n//방명록 생성(작성)\r\nfunction newData() {\r\n    //input안에 입력된 변수들의 값 저장\r\n    const submitBtn = document.querySelector(\"#submitBtn\");\r\n    const newtitle = document.getElementById(\"title\").value;\r\n    const newwriter = document.getElementById(\"writer\").value;\r\n    const newcontent = document.getElementById(\"content\").value;\r\n    const newpassword = document.getElementById(\"password\").value;\r\n\r\n\r\n    //입력받은 값들을 post해주기\r\n    //입력되지 않은 칸이 있다면 경고창 띄워주기->html에서 required로 대체\r\n    submitBtn.onclick = () => {\r\n        fetch(baseURL, {\r\n            method:\"POST\",\r\n            headers : {\r\n                \"Content-Type\":\"application/json\",\r\n            },\r\n            body : JSON.stringify({\r\n                title:newtitle,\r\n                writer:newwriter,\r\n                content:newcontent,\r\n                password:newpassword\r\n            })\r\n        })\r\n        .then((response)=>response.json())\r\n        .then((response) => {\r\n            console.log(response);\r\n            getData();\r\n        //.catch((error)=>console.log(error));\r\n        })\r\n    }\r\n\r\n    //입력칸 비워주기?는 보고\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n//방명록 삭제(비번입력시 삭제될 수 있게)\r\nfunction delData() {\r\n    //삭제하고자하는 List의 비번과 입력된 비번값 일치불일치 확인\r\n    //비밀번호 일치 시 삭제\r\n    const newpassword = document.getElementById(\"password\").value;\r\n    if (password != newpassword) {\r\n        alert(\"비밀번호를 다시 입력해주세요.\"); //비밀번호 일치하지않을시 알람창 띄우기\r\n        return false;\r\n    } else {\r\n        return del(); //비번이 일치한다면 del함수 실행\r\n    }\r\n\r\n    function del(){\r\n        fetch(baseURL, {\r\n            method: \"DELETE\",\r\n        })\r\n    }\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;