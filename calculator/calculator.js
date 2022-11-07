//this line of code gets the worksheet in which all the buttons are
const calcButtons = document.querySelector('.worksheet');

//this line of code gets to the display part.
const displayCalculations = document.queryCommandValue('.displayscreen');

//this line of code is supposed to get the buutons
const buutons = document.querySelectorAll('btnn');
 console.log(buutons.innerText);


//this action/function is to be used for eventually displaying workings 
const displayResults = actionn =>{
    const html = `<p>${actionn}</p>`;
    displayCalculations.innerhtml += html;
};



//this section of code was to get the calculator buttons to work
calcButtons.addEventListener('click', (a)=>{
    
    if(a.target.classList.contains('btnn')){
        //console.log('you clicked me');
        
       
    }
});

