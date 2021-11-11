const correctAnsers = ["A", "A", "B", "A"];

const form = document.querySelector('.quiz-form')
const displaydoc = document.querySelector('.result')
const spanvalue = document.querySelector('.sauter')
console.log(spanvalue.textContent);
form.addEventListener('submit', e=>{
    e.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ]

    //check answers

    userAnswers.forEach((userAnswer, index)=>{
        if(userAnswer===correctAnsers[index]){
 score+=25
        }
        console.log(score);
        
        displaydoc.classList.remove('d-none')
        spanvalue.textContent = `${score}%`
    })
})