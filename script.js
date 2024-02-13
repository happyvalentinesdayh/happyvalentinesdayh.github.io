window.onload=function(){

const no_button = document.getElementById('no'); // select the button element
const yes_button = document.getElementById('yes');
const hidden_text = document.getElementById('hidden-text')
if(no_button){
  no_button.addEventListener('mouseover', () => { 
    const myArray = ['Are you sure?', 'Are you absolutely, positively, unequivocally sure?','Really?', 'Think again!', 'Come onnnnnn', 'Just say Yes','Et tu Brute?','How dare you?'];
    const randomElement = myArray[Math. floor(Math. random() * myArray. length)];

    
    no_button.style.top = (Math.random())*100+"%";
    no_button.style.left = (Math.random())*100+"%";
    no_button.textContent=randomElement;
    hidden_text.style.display = "block";
  });
  no_button.addEventListener('click', () => { 
    no_button.style.visibility="hidden";
    yes_button.style.width = "100%";
  });
}
}
