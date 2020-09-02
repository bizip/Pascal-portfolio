// Google map
var initMap = () => {
    var options = {
        zoom: 15,
        center: {
            // lat: -1.935114,
            // lng: 30.082111
            lat: -2.00391,
            lng: 30.14696

        }

    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
        position: {
            lat: -2.00391,
            lng: 30.14696

        },
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({
        content: "<h2>Eng. Bizimungu Pascal<sup>'s</sup> Office</h2>"
    });
    marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
    })
}



// My web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBTiSjAs-wgFG5S0_-6-DVigzG1xl2u2I",
    authDomain: "capstone-d4be5.firebaseapp.com",
    databaseURL: "https://capstone-d4be5.firebaseio.com",
    projectId: "capstone-d4be5",
    storageBucket: "capstone-d4be5.appspot.com",
    messagingSenderId: "22977705906",
    appId: "1:22977705906:web:dd555d518b695d944b96ab",
    measurementId: "G-157R635TZE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//riference message collection
// var messagesRef = firebase.database().ref('messages');
const db = firebase.firestore();

// validate login form
// let validateLoginForm = () => {
//     var loginEmail = document.forms["LoginForm"]["loginEmail"].value;
//     var loginPassword = document.forms["LoginForm"]["loginPassword"].value;
//     if (loginEmail === "" || loginEmail === null) {
//         let errorName = document.getElementById("errorLoginMessage");
//         errorName.innerHTML = "Your email is required";
//         errorName.classList.add("error__message");
//         return false;
//     }
//     if (loginPassword <= 3 || loginPassword > 8) {
//         let errorName = document.getElementById("errorLoginMessage");
//         errorName.innerHTML = "Password should not be less than three or greater than eight";
//         errorName.classList.add("error__message");
//         return false;
//     }
// }

// //validate signUp form
// let validateSignUpForm = () => {
//     var SignUpFullName = document.forms["signUpForm"]["signUpFullName"].value;
//     var SignUpEmail = document.forms["signUpForm"]["signUpEmail"].value;
//     var SignUpPassword = document.forms["signUpForm"]["signUpPassword"].value;
//     var SignUpConfirmPassword = document.forms["signUpForm"]["confirmPassword"].value;
//     if (SignUpFullName === "" || SignUpFullName === null) {
//         let errorName = document.getElementById("errorSignUpMessage");
//         errorName.innerHTML = "Your Full name is required";
//         errorName.classList.add("error__message");
//         return false;
//     }
//     if (SignUpEmail === "" || SignUpEmail === null) {
//         let errorName = document.getElementById("errorSignUpMessage");
//         errorName.innerHTML = "Your Email is required is required";
//         errorName.classList.add("error__message");
//         return false;
//     }
//     if (SignUpPassword.length <= 3 || SignUpPassword.length > 8) {
//         let errorName = document.getElementById("errorSignUpMessage");
//         errorName.innerHTML = "Password should not be less than three or greater than eight characters";
//         errorName.classList.add("error__message");
//         return false;
//     }
//     if (SignUpConfirmPassword !== SignUpPassword) {
//         let errorName = document.getElementById("errorSignUpMessage");
//         errorName.innerHTML = "Password not match";
//         errorName.classList.add("error__message");

//         return false;
//     }
//     // //signUp with fire base
//     // var signUpForm = document.querySelector('#form__input');
//     // signUpForm.addEventListener("submit", submitSignUpForm);
//     // let submitSignUpForm = (e) => {
//     //     e.priventDefault();
//     // }


// }

// //save the message to firebase
// function saveMessage(name, email, subject, message) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//     });

// }