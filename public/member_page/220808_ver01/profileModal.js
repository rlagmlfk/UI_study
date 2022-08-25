const firebaseConfig = {
  apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
  authDomain: "terrgym-demo-bac70.firebaseapp.com",
  databaseURL: "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "terrgym-demo-bac70",
  storageBucket: "terrgym-demo-bac70.appspot.com",
  messagingSenderId: "679211028162",
  appId: "1:679211028162:web:d6839267c5c25146ccb55b",
  // measurementId: "G-5DV4JCJLPE"
};
firebase.initializeApp(firebaseConfig);
firebaseEmailAuth = firebase.auth(); //파이어베이스 인증 객체
firebaseDatabase = firebase.database(); //파이어베이스 데이터베이스 객체
// //////////////////////////////////////// 정보수정창 띄워주기//////////////////////////////////////////
userSessionCheck();

const user = firebase.auth().currentUser;
const db = firebase.firestore();

function userSessionCheck() {
  //로그인이 되어있으면 - 유저가 있으면, user를 인자값으로 넘겨준다.
  firebaseEmailAuth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
        console.log(snapshot.val());
        /////////////////////////////////////////모달창에 값 전달////////////////////////////////
        $(document).ready(function(){
          $("#staticBackdrop").modal("show");
          const readModal = document.getElementById("staticBackdrop")
          readModal.addEventListener('shown.bs.modal', () => {
            /* 내가 원래 가지고 있던 값들 input 태그 안에 넣어주기 */
            const docRef = db.collection("user").doc(user.uid);
            docRef.get().then((result) => {
              console.log("result.data(): "+result.data());
              $('input[name=user_id]').attr('value',result.data().email);
              $('input[name=user_pw]').attr('value',result.data().password);
              $('input[name=user_phone]').attr('value',result.data().phoneNumber);
              $('input[name=user_name]').attr('value',result.data().Name);
            })
            /* 내가 원래 가지고 있던 값들 input 태그 안에 넣어주기 */
            /* ========================저장버튼 눌렀을 때 내가 입력한 값으로 전달하기 시작=================== */
            document.getElementById("save").addEventListener('click', ()=>{
              // 사용자가 입력한 이메일, 비번, 이름, 핸폰번호
              const user_id = $("#user_id").val();
              const user_pw = $("#user_pw").val();
              const user_name = $("#user_name").val();
              const user_phone = $("#user_phone").val();
              
              const docRef = db.collection("user").doc(user.uid);
              return docRef.update({
                Name: user_name,
                password: user_pw,
                email: user_id,
                phoneNumber: user_phone
              })
              .then(() => {
                alert("수정성공!")
                window.location = "mypage.html";
              })
              .catch((error) => {
                alert("수정실패!")
                console.error("Error updating document: ", error);
              });
            
            })
            /* ========================저장버튼 눌렀을 때 내가 입력한 값으로 전달하기  끝=================== */
            })
          });
        /////////////////////////////////////////모달창에 값 전달////////////////////////////////
        return true
      });
    } else {
      alert('로그인이 필요한 서비스입니다.');
      return false
    }
  });
}
// //////////////////////////////////////// 정보수정창 띄워주기//////////////////////////////////////////
