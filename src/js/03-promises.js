
const form=document.querySelector(`.form`)
form.addEventListener(`submit`,onButton);

function createPromise(position, delay) {
return new Promise ((resolve,reject)=>{
const shouldResolve = Math.random() > 0.3;
setTimeout(() => {if(shouldResolve){  resolve({position,delay})}
else{  reject({position,delay})}

}, delay); 

})
}


function onButton(event){
  event.preventDefault();
  const formEl=event.currentTarget.elements;
  let delay=Number(formEl.delay.value)
  const delayStep=Number(formEl.step.value)
  const amount=Number(formEl.amount.value);
  
  
  for (let i=1; i<=amount;i+=1){delay+=delayStep;
    createPromise(i,delay).then(({ position, delay })=> {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    
  }}
  
  







