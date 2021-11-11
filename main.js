const correctAnsers = ["A", "A", "B", "A"];

const form = document.querySelector('.quiz-form')
const displaydoc = document.querySelector('.result')
const spanvalue = document.querySelector('.sauter')
form.addEventListener('submit', e=>{
    e.preventDefault()
    
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ]

    //check answers

    userAnswers.forEach((userAnswer, index)=>{
        if(userAnswer===correctAnsers[index]){
 score+=25
        }
           
    })

    scrollTo(0,0);

    displaydoc.classList.remove('d-none')
        //Show result
        
        let output = 0
        const timer = setInterval(()=>{
            spanvalue.textContent = `${output}%`

            if (output===score){
                clearInterval(timer)
            }else{
               output++ 
            }


        }, 10)
})