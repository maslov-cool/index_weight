
btn.addEventListener('click',()=>{
  const wet=document.getElementById('weight').value;
  const het=((document.getElementById('height').value)/100)
  const action =wet/Math.pow(het,2);
  console.log(action)
  document.getElementById('p').innerHTML=action
  const as=document.getElementById('as')
  if (16>=action) {
    as.innerText='У вас'+' выраженный дефицит массы тела'
  }  else  if (18,5>action) {
    as.innerText='У вас'+' недостаточная масса тела (дефицит)'
  }   else if (25>action) {
    as.innerText='У вас '+'нормальный вес'
  } else  if (30>action) {
    as.innerText='У вас '+'избыточная масса тела (состояние, предшествующее ожирению)'
  } else if (35>action) {
    as.innerText='У вас '+'ожирение 1-й степени'
  } else if (40>action) {
    as.innerText='У вас '+'ожирение 2-й степени'
  } else if (action>=40) {
    as.innerText='У вас '+'ожирение 3-й степени'
  }
}
)


