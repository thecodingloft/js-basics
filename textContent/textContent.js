const myContent = document.querySelector('.my-content');
const myOutput = document.querySelector('.my-output');
const myList = document.querySelector('.my-list');
const allHeadings = document.querySelectorAll('.form-heading');

const myTextContent = myContent.textContent;
const myInnerText = myContent.innerText;
const myInnerHTML = myContent.innerHTML;

// add headings event listener
allHeadings.forEach(heading => {
    heading.addEventListener('click', () => {
        
    })
})

// FORM 1 - RETURNING TEXT

// FORM 2 - INJECTING TEXT
const inputFieldTwo = document.querySelector('#form1 .text-input');
const submitButtonTwo = document.querySelector('#form1 .submit-btn');

console.log(inputFieldTwo, submitButtonTwo)

submitButtonTwo.addEventListener('click', (e) => {
    e.preventDefault();
    const inputRadioOne = document.querySelector('#form1 input[name="formOneRadio"]:checked');
    sendText(inputRadioOne.value);
})

function sendText(value) {
    switch(value) {
        case 'innerHTML':
            console.log('inner: ', value)
            myOutput.innerHTML = inputFieldTwo.value;
            break;
        case 'textContent':
            myOutput.textContent = inputFieldTwo.value;
            break;
        default:
            break;

    }
    // myOutput.textContent = inputFieldTwo.value
}

// FORM 3 - APPENDING LISTS
const inputFieldThree = document.querySelector('#form2 .text-input');
const submitButtonThree = document.querySelector('#form2 .submit-btn');

submitButtonThree.addEventListener('click', (e) => {
    e.preventDefault();
    appendList();
})

function appendList() {
    console.log(inputFieldThree)
    const newText = `<li>${inputFieldThree.value}</li>`
    myList.innerHTML += newText
}


// toggle function
function toggleView() {

}
