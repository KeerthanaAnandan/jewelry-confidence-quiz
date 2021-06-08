let questions = [
  {
    id: 1,
    question: "How do you handle any uncomfortable situation?",
  
    options: ["With comfort and ease",
    "I procrastinate to deal with situations",
    "I usually tend to run away from situation",],
  },
  {
    id: 2,
    question:
      "How do you feel when faced with difficulty?",

    options: ["Strong and confident",
    "Scared and fearful",
    "Hopeless and negative"],
  },
  {
    id: 3,
    question: "What you most likely to think after overcoming an obstacle?",

    options: ["I think about the lessons I have learned",
    "I regret about the things that I should’ve done",
    "I worry about the embarrassments that I have experienced"],
  },
  {
    id: 4,
    question: "How much do you believe in your goals and dreams?",
   
    options: ["My goals are achievable and I will reach there soon",
    "I believe that if I work hard, I will achieve my goals",
    "It’s scary and I believe that it will take time to reach my goals",],
  },
  {
    id: 5,
    question: "Are you afraid to express yourself?",
  
    options: ["Not at all",
    "Sometimes","Yes"],
  },
  {
    id: 6,
    question:
      "Do you frequently compare yourself with others?",
   
    options: ["Never","Often/occasionally","Constantly"],
  },
  {
    id: 7,
    question: "How much do you agree with this sentence “I am concerned with other people’s opinions about me?”",
    
    options: ["Disagree",
  	"Neutral",
    "Agree"],
  },
  {
    id: 8,
    question: "3)	How do you feel when you enter into the room full of people? ",
  
    options: ["a)	I feel confident and empowered",
    "Nothing",
    "I feel awkward"],
  },
  {
    id: 9,
    question: "Do you struggle to make decisions or stand by them?",
  
    options: ["Never ","Sometimes ",
     "yes, all the time",],
  },
  {
    id: 10,
    question: "Do you feel anxious or uncomfortable in social situations?",
   
    options: ["Never  ","Maybe sometimes","All the time"],
  },
  {
    id: 11,
    question: "Do suspect that people gossip about me behind my back? ",
   
    options: ["Yes, but I don’t care much","I don’t know","Yes, and it does concerns me a lot"],
  },
  {
    id: 12,
    question: "What piece of jewellery you mostly likely to notice first/mostly attracted to?",
   
    options: ["Rings" ,  "Earrings" , "Necklace" , "Bracelets",    "Anklets"],
  },
 
];

let question_count = 0;
//let points = 0;
Max_Questions = 12;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;


window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  for (let i = 0; i < 11; i++) {
    if (user_answer == questions[i].options[0]){
      //console.log("hana")
      firstPoints += 1;
    }
  }
    for (let i = 0; i < 11; i++) {
      if (user_answer == questions[i].options[1]){
        //console.log("hana")
        secondPoints += 1;
      }
    }
      for (let i = 0; i < 11; i++) {
        if (user_answer == questions[i].options[2]){
          //console.log("hana")
          thirdPoints += 1;
        }
      }

  if (question_count == 11) {
  
   sessionStorage.setItem("Mwoyeyo" , user_answer)
   console.log(user_answer);
   
  }
  
  // //trust(0)
  // if (user_answer === "I have a hard time gaining weight." || user_answer === "Mostly straight" || user_answer === "The same as your hips" || user_answer === "Bones" || user_answer === "Overlap" || user_answer === "Normal, Light" || user_answer === "Leg workouts are not my favorites." || user_answer === "No fat") {
  //   firstPoints += 1;
  // }
  // //neglect(1)
  // else if (user_answer === "I both gain and lose weight without too much effort." || user_answer === "Hourglass" || user_answer === "Wider than your hips" || user_answer === "Muscles" || user_answer === "Touch" || user_answer==="Feel full and satisfied" || user_answer==="I am good with all type of workouts." || user_answer === "Upper body/equally stored in all body parts") {
  //   secondPoints += 1;
  // }
  // //guilt(2)
  // else if (user_answer === "I gain weight easily." || user_answer === "Pear (narrow shoulders, wide hips)" || user_answer === "Narrower than your hips" || user_answer=== "Body fat" || user_answer === "Don't Touch" || user_answer === "Tired, bloated, lethargic" || user_answer === "I am really good with leg exercises comparing to other workouts." || user_answer === "Belly, hips, and thighs") {
  //   thirdPoints += 1;
  // }
 

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
 
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 50 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second , third] = questions[count].options;
  ///////no of questions

 question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
 
</ul> 
  `; 

 /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

  if(question_count == 11 ){
    let [first, second , third , fourth , fifth] = questions[count].options;
    question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
  <li ><span class="option">${fifth}</span></li>
 
</ul> 
  `; 
  }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
