document.getElementById("submit").addEventListener("click", function () {
  let score = 0;

  // Question 1
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  let message1 = document.getElementById("message1");
  if (answer1 == "singapore" || answer1 == "singapura") {
    message1.textContent = "Correct! Great job!";
    document.getElementById("answer1").style.border = "2px solid green";
    message1.style.color = "green";
    score++;
  } else if (answer1 == "") {
    message1.textContent = "Please answer this question!!";
  } else {
    message1.textContent = "Incorrect. The correct answer is Singapore.";
    document.getElementById("answer1").style.border = "2px solid red";
    message1.style.color = "red";
  }

  // document.getElementById("password").classList.add("red");

  // Question 2
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  let message2 = document.getElementById("message2");
  if (answer2 == "civil ensign") {
    message2.textContent = "Correct! Incredible job!";
    document.getElementById("answer2").style.border = "2px solid green";
    message2.style.color = "green";
    score++;
  } else if (answer2 == "") {
    message2.textContent = "Please answer this question!!";
  } else {
    message2.textContent = "Incorrect. The correct answer is the Civil Ensign.";
    document.getElementById("answer2").style.border = "2px solid red";
    message2.style.color = "red";
  }

  // Question 3
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  let message3 = document.getElementById("message3");
  if (answer3 == "c") {
    message3.textContent = "Correct! You really know your dates!";
    document.getElementById("answer3").style.border = "2px solid green";
    message3.style.color = "green";
    score++;
  } else if (answer3 == "") {
    message3.textContent = "Please answer this question!!";
  } else {
    message3.textContent =
      "Incorrect. Singapore was expelled from Malaysia in 1965.";
    document.getElementById("answer3").style.border = "2px solid red";
    message3.style.color = "red";
  }

  // Question 4
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  let message4 = document.getElementById("message4");
  if (answer4 === "2:3" || answer4 === "2 to 3" || answer4 === "2 3") {
    message4.textContent = "Correct! Immaculate work!";
    document.getElementById("answer4").style.border = "2px solid green";
    message4.style.color = "green";
    score++;
  } else if (answer4 == "") {
    message4.textContent = "Please answer this question!!";
  } else {
    message4.textContent = "Incorrect. The correct answer is 2:3.";
    document.getElementById("answer4").style.border = "2px solid red";
    message4.style.color = "red";
  }

  // Question 5
  let answer5 = document.getElementById("answer5").value.toLowerCase();
  let message5 = document.getElementById("message5");
  if (
    answer5 === "d" ||
    answer5 === "hokkien chinese" ||
    answer5 === "hokkien"
  ) {
    message5.textContent = "Correct! Amazing!";
    document.getElementById("answer5").style.border = "2px solid green";
    message5.style.color = "green";
    score++;
  } else if (answer5 == "") {
    message5.textContent = "Please answer this question!!";
  } else {
    message5.textContent =
      "Incorrect. Hokkien Chinese is not an official language of Singapore.";
    document.getElementById("answer5").style.border = "2px solid red";
    message5.style.color = "red";
  }

  // Question 6
  let answer6 = document.getElementById("answer6").value.toLowerCase();
  let message6 = document.getElementById("message6");
  if (answer6 === "lion city") {
    message6.textContent = "Correct! Do you speak Malay?";
    document.getElementById("answer6").style.border = "2px solid green";
    message6.style.color = "green";
    score++;
  } else if (answer6 == "") {
    message6.textContent = "Please answer this question!!";
  } else {
    message6.textContent =
      'Incorrect. The name Singapura comes from the Sanskrit words "simha", meaning lion, and "pura", meaning city.';
    document.getElementById("answer6").style.border = "2px solid red";
    message6.style.color = "red";
  }

  // Question 7
  let answer7 = document.getElementById("answer7").value.toLowerCase();
  let message7 = document.getElementById("message7");
  if (answer7 === "b") {
    message7.textContent =
      "Correct! Are you the Singapore demographics master?";
    document.getElementById("answer7").style.border = "2px solid green";
    message7.style.color = "green";
    score++;
  } else if (answer7 == "") {
    message7.textContent = "Please answer this question!!";
  } else {
    message7.textContent =
      "Incorrect. Han Chinese makes up 74.3% of Singapore's population. Within the Han Chinese, there are 1.1 million Hokkien chinese, followed by Teochew and Cantonese at a population 580 000 and 430 000 respectively.";
    document.getElementById("answer7").style.border = "2px solid red";
    message7.style.color = "red";
  }

  // Question 8
  let answer8 = document.getElementById("answer8").value.toLowerCase();
  let message8 = document.getElementById("message8");
  if (answer8 === "marilah") {
    message8.textContent = "Correct! You must really know the national anthem!";
    document.getElementById("answer8").style.border = "2px solid green";
    message8.style.color = "green";
    score++;
  } else if (answer8 == "") {
    message8.textContent = "Please answer this question!!";
  } else {
    message8.textContent =
      "Incorrect. The correct answer is Marilah (Marilah kita berseru).";
    document.getElementById("answer8").style.border = "2px solid red";
    message8.style.color = "red";
  }

  // Question 9
  let answer9 = document.getElementById("answer9").value.toLowerCase();
  let message9 = document.getElementById("message9");
  if (answer9 === "c") {
    message9.textContent = "Correct! You are the Singaporean geography master!";
    document.getElementById("answer9").style.border = "2px solid green";
    message9.style.color = "green";
    score++;
  } else if (answer9 == "") {
    message9.textContent = "Please answer this question!!";
  } else {
    message9.textContent = "Incorrect. There are 64 islands in Singapore.";
    document.getElementById("answer9").style.border = "2px solid red";
    message9.style.color = "red";
  }

  // Question 10
  let answer10 = document.getElementById("answer10").value.toLowerCase();
  let message10 = document.getElementById("message10");
  if (
    answer10 === "singaporean dollar" ||
    answer10 === "dollar" ||
    answer10 === "singapore dollar" ||
    answer10 === "sgd" ||
    answer10 === "singaporean dollar" ||
    answer10 === "s$"
  ) {
    message10.textContent = "Correct! Great job!";
    ("Correct! You must really know the national anthem!");
    document.getElementById("answer10").style.border = "2px solid green";
    message10.style.color = "green";
    score++;
  } else if (answer10 == "") {
    message10.textContent = "Please answer this question!!";
  } else {
    message10.textContent =
      "Incorrect. The correct answer is Marilah (Marilah kita berseru).";
    document.getElementById("answer10").style.border = "2px solid red";
    message10.style.color = "red";
  }

  // Calculate percentage
  let percentage = (score / 10) * 100;

  // Display result
  let result = document.getElementById("result");
  result.textContent = `You got ${score}/10 (${percentage}%) `;

  // Provide appropriate response
  if (percentage === 100) {
    result.textContent +=
      "Perfect score! You must've mastered in Singaporology.";
  } else if (percentage >= 75) {
    result.textContent +=
      "Well done! You're on your way to become a Singaporean citizen!";
  } else if (percentage >= 50) {
    result.textContent += "Keep practicing! You will become Singaporean soon!";
  } else if (percentage >= 25) {
    result.textContent += "Please study on your Singaporology.";
  } else if (percentage > 0) {
    result.textContent +=
      "Lee Kuan Yew would like to have a chat in your home tonight.";
  } else {
    result.textContent += "Are you Malaysian?";
  }
});
