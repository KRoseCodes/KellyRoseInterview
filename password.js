var strength = {
0: "Worst",
1: "Bad",
2: "Weak",
3: "Good",
4: "Strong"
};

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
var crack = document.getElementById('crack-time-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

// Update the password strength meter
  meter.value = result.score;

// Update the text indicator
  if (val !== "") {
   text.innerHTML = "<b>Feedback: </b>" + result.feedback.warning; 
  } else {
    text.innerHTML = "";
  }

// We updatin in here
  if (val !== "") {
  	crack.innerHTML = "<b>Criminals Can Crack Your Password In: </b>" + result.crack_times_display.offline_slow_hashing_1e4_per_second;
  } else {

  	crack.innerHTML = "";
  }

});