import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


const saveData = {};
setInput();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput,500));


function onTextareaInput(event){
    saveData[event.target.name]=event.targer.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
}


function setInput(){
    let getInput = localStorage.getItem(STORAGE_KEY);
    if (getInput){
        getInput = JSON.parse(getInput);
        Object.entries(getInput).forEach(([name,value])=>{
            saveData[name] = value;
            form.elements[name].value = value;  
        });  
    
    }
}
function onFormSubmit (event){
    event.preventDefault();
    const formData = new FormData (form);
    formData.forEach((value, name) =>
    console.log(`${name}:`, value));
    event.targer.reset();
    localStorage.removeItem(STORAGE_KEY);
}
