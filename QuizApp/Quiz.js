//array of objects esme question store rahai ga sare 
const question = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},

{
    'que': 'Which year was Javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},

{
    'que': 'What does CSS stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'hyper hona mat ',
    'correct': 'b'
}

]

let indx = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const quesBox = document.querySelector("#queBox");
const optionInput = document.querySelectorAll(".op input");
const loadQuestion = ()=>{
    if(indx === total){
        return endQuiz();
     }
     else{
         reset();
     }
    const data = question[indx];
    // console.log(data);
    // question 
    quesBox.textContent = `${indx+1}) ${data.que}`;
    // options
    optionInput[0].nextElementSibling.textContent = data.a;
    optionInput[1].nextElementSibling.textContent = data.b;
    optionInput[2].nextElementSibling.textContent = data.c;
    optionInput[3].nextElementSibling.textContent = data.d;

}

const submitQuiz = ()=>{
    
    const data = question[indx];
    const ans = getAnswer();
    if(ans === data.correct){
          right++;
    }
    else{
        wrong++;
    }
    indx++;
    loadQuestion();
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
                // console.log("yes");
            }
            // else{
            //     console.log("no");
            // }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector('.container').innerHTML = `
         <h3> Thank you for playing the quiz </h3>
         <h2> ${right} / ${total} </h2>
    `
}

//initial call
loadQuestion();