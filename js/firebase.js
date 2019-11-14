var firebaseConfig = {
    apiKey: "AIzaSyDRX8dagZpDeFW5BI77F6QR4xt2hi7WgPo",
    authDomain: "codereview8-3ff92.firebaseapp.com",
    databaseURL: "https://codereview8-3ff92.firebaseio.com",
    projectId: "codereview8-3ff92",
    storageBucket: "codereview8-3ff92.appspot.com",
    messagingSenderId: "368700908762",
    appId: "1:368700908762:web:b478d8440f0d991a8331e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked).userListUI.append($li);
});


function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val().userDetailUI.append($p);
    });
}