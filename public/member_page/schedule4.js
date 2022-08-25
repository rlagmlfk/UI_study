let firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
let firebaseDatabase; //파이어베이스 db 모듈 전역변수
let userInfo; //가입한 유저의 정보. object 타입

const firebaseConfig = {
    apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
    authDomain: "terrgym-demo-bac70.firebaseapp.com",
    databaseURL: "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "terrgym-demo-bac70",
    storageBucket: "terrgym-demo-bac70.appspot.com",
    messagingSenderId: "679211028162",
    appId: "1:679211028162:web:d6839267c5c25146ccb55b"
    };

firebase.initializeApp(firebaseConfig);

firebaseEmailAuth = firebase.auth(); //파이어베이스 인증 객체
firebaseDatabase = firebase.database(); //파이어베이스 데이터베이스 객체
userSessionCheck();

const user = firebase.auth().currentUser;
const db = firebase.firestore();
const storage = firebase.storage(); 

// 관리자가 수강 시간표 등록하기 (관리자만 보이기)
document.getElementById("save_class").addEventListener('click',()=>{
    const class_date = $("#recipient-name").val();
    const class_time = $("#class_time").val();
    const class_name = $("#class_name").val();
    db.collection("classtime").add({
        class_date: class_date,
        class_time: class_time,
        class_name: class_name
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});

// 파이어베이스에 등록된 시간표 불러오기
db.collection("classtime")
    .get()
    .then((snapshot) => {
snapshot.forEach((item)=> {
const template = `
            <tr>
                <td>${item.data().class_date}</td>
                <td>${item.data().class_time}</td>
                <td>${item.data().class_name}</td>
                <td><button class='reservation_btn'>예약하기</button></td>
            </tr>`
    $(".reservation_tbody").append(template)
});
document.querySelector('.reservation_btn').addEventListener('click',() => {
    alert('예약되었습니다');
})
});

function userSessionCheck() {
    //로그인이 되어있으면 - 유저가 있으면, user를 인자값으로 넘겨준다.
    firebaseEmailAuth.onAuthStateChanged(function (user) {
        if (user) {
            firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
            //자바스크립트 dom 선택자를 통해서 네비게이션 메뉴의 엘리먼트 변경해주기
            document.getElementById("logout").textContent = "로그아웃";
            // document.getElementById("loginmenu").href = "/logout.html";
            document.getElementById("logout").addEventListener('click',()=>{
            // 로그아웃 기능구현하기
            firebase.auth().signOut().then(()=>{
                alert('로그아웃 되었습니다.');
                window.location = "branch.html";
            }).catch((error) => {
                console.log(error);
            });
        });
            document.getElementById("username").textContent = user.displayName + " 님";

          ////////////////////////정보가져오기 추가///////////////////////////////
            const docRef = db.collection("user").doc(user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                console.log("Document data:", doc.data());
                document.getElementById("user_name").textContent = "이름: "+ doc.data().Name;
                document.getElementById("user_id").textContent = "아이디: "+ doc.data().email;
                document.getElementById("user_phone").textContent = "전화번호: "+ doc.data().phoneNumber;
                document.getElementById("user_pw").textContent = "비밀번호: "+ doc.data().password;
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
          ////////////////////////정보가져오기 추가///////////////////////////////

          loginUserKey = snapshot.key;  //로그인한 유저의 key도 계속 쓸 것이기 때문에 전역변수로 할당
          userInfo = snapshot.val(); //snapshot.val()에 user 테이블에 있는 해당 개체 정보가 넘어온다. userInfo에 대입!
        });
    } else {
        alert('로그인이 필요한 서비스입니다.');
        return false
        }
    });
}