//베이스URL가져오기
const baseURL = "http://likelion12thtoy.kro.kr:8000/guestbook/";
//자식요소 넣을 돔 가져오기(나누다보니,,,많아짐)
const container = document.getElementById('container');
const GuestList = document.getElementById('GuestList');
const newGuest = document.getElementById('newGuest');
const GList = document.getElementById('GList');
const newG = document.getElementById('newG');

//방명록 리스트 조회(시간순 정렬)
async function getData() {
    //const url= `${baseURL}/`;
    const fetchData = await fetch(baseURL);
    //console.log(fetchData);
    const toJson = await fetchData.json();
    //console.log(toJson);
    //지금까지 패치데이터를 toJson에 담았음.
    
    

    //불러온 기록 정렬하기(GuestListdksdp Glist박스들 쌓이게, 한 기록이 한 GList)
    toJson.map((data)=> {
        const list = document.createElement('div');
        list.id = "list";
        //list내 데이터 나타내기
        list.innerHTML = `
            <p>${data.title}</p>
            <p>${data.content}</p>
            <p>${data.writer} <p style="color:gray">${data.created_at}</p> </p>
            <input type="password" placeholder="비밀번호 입력">
            <button type="button" id="delBtn">삭제하기</button>
        `
        //list를 div박스를 만들어 innerHtml을 통해 내부에 데이터 내용 가져오기
        //delBtn클릭시 delData함수 호출
        const delBtn = document.querySelector("delBtn");
        delBtn.addEventListener("click",delData);

    })

}


//방명록 생성(작성)
function newData() {
    //input안에 입력된 변수들의 값 저장
    const submitBtn = document.querySelector("#submitBtn");
    const newtitle = document.getElementById("title").value;
    const newwriter = document.getElementById("writer").value;
    const newcontent = document.getElementById("content").value;
    const newpassword = document.getElementById("password").value;


    //입력받은 값들을 post해주기
    //입력되지 않은 칸이 있다면 경고창 띄워주기->html에서 required로 대체
    submitBtn.onclick = () => {
        fetch(baseURL, {
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body : JSON.stringify({
                title:newtitle,
                writer:newwriter,
                content:newcontent,
                password:newpassword
            })
        })
        .then((response)=>response.json())
        .then((response) => {
            console.log(response);
            getData();
        //.catch((error)=>console.log(error));
        })
    }

    //입력칸 비워주기?는 보고


}





//방명록 삭제(비번입력시 삭제될 수 있게)
function delData() {
    //삭제하고자하는 List의 비번과 입력된 비번값 일치불일치 확인
    //비밀번호 일치 시 삭제
    const newpassword = document.getElementById("password").value;
    if (password != newpassword) {
        alert("비밀번호를 다시 입력해주세요."); //비밀번호 일치하지않을시 알람창 띄우기
        return false;
    } else {
        return del(); //비번이 일치한다면 del함수 실행
    }

    function del(){
        fetch(baseURL, {
            method: "DELETE",
        })
    }



}
