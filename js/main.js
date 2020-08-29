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
firebase.analytics();

//riference message collection
var messagesRef = firebase.database().ref('messages');


//Validating All the form
let validateForm = () => {
    var name = document.forms["myForm"]["name1"].value;
    var email = document.forms["myForm"]["email1"].value;
    var subject = document.forms["myForm"]["subject1"].value;
    var message = document.forms["myForm"]["textarea"].value;
    if (name === "") {
        let errorName = document.getElementById("error__message");
        errorName.innerHTML = "Your full name is required";
        errorName.classList.add("error__message");
        return false;
    }
    if (email === "") {
        let errorEmail = document.getElementById("error__message");
        errorEmail.innerHTML = "Your email is required";
        errorEmail.classList.add("error__message");
        return false;
    }
    if (subject === "") {
        let errorSub = document.getElementById("error__message");
        errorSub.innerHTML = "You need to write subject for your message";
        errorSub.classList.add("error__message");
        return false;
    }
    if (message === "" || message === "Write your message here...") {
        let errorMessage = document.getElementById("error__message");
        errorMessage.innerHTML = "Please type your message";
        errorMessage.classList.add("error__message");
        return false;
    }
    if ((name !== "" || name !== null) && (email !== "" || email !== null) && (subject !== "" || subject !== null) &&
        (message !== "" || message !== null)) {
        document.addEventListener("submit", submitMyForm);

        function submitMyForm(e) {
            e.preventDefault();
            //save Message
            saveMessage(name, email, subject, message);
            //show alert message in 3 second
            document.querySelector(".alert__message").style.display = "block";
            setTimeout(() => {
                document.querySelector(".alert__message").style.display = "none";
            }, 3000);
            //Reset a form after send a message
            document.getElementById("form__contact").reset();


        }
    }


}


// validate login form
let validateLoginForm = () => {
    var loginEmail = document.forms["LoginForm"]["loginEmail"].value;
    var loginPassword = document.forms["LoginForm"]["loginPassword"].value;
    if (loginEmail === "" || loginEmail === null) {
        let errorName = document.getElementById("errorLoginMessage");
        errorName.innerHTML = "Your email is required";
        errorName.classList.add("error__message");
        return false;
    }
    if (loginPassword <= 3 || loginPassword > 8) {
        let errorName = document.getElementById("errorLoginMessage");
        errorName.innerHTML = "Password should not be less than three or greater than eight";
        errorName.classList.add("error__message");
        return false;
    }
}

//validate signUp form
let validateSignUpForm = () => {
    var SignUpFullName = document.forms["signUpForm"]["signUpFullName"].value;
    var SignUpEmail = document.forms["signUpForm"]["signUpEmail"].value;
    var SignUpPassword = document.forms["signUpForm"]["signUpPassword"].value;
    var SignUpConfirmPassword = document.forms["signUpForm"]["confirmPassword"].value;
    if (SignUpFullName === "" || SignUpFullName === null) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Your Full name is required";
        errorName.classList.add("error__message");
        return false;
    }
    if (SignUpEmail === "" || SignUpEmail === null) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Your Email is required is required";
        errorName.classList.add("error__message");
        return false;
    }
    if (SignUpPassword.length <= 3 || SignUpPassword.length > 8) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Password should not be less than three or greater than eight";
        errorName.classList.add("error__message");
        return false;
    }
    if (SignUpConfirmPassword !== SignUpPassword) {
        let errorName = document.getElementById("errorSignUpMessage");
        errorName.innerHTML = "Password not match";
        errorName.classList.add("error__message");
        return false;
    }

}

// // listrn for subit event
// document.getElementById("form__contact").addEventListener("submit", submitForm(e));

// function submitForm(e) {
//     e.preventDefault();
//     console.log(1234);
// }

//save the message to firebase
function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });

}