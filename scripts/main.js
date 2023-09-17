const myImage = document.querySelector('img');
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'imagens/1.png'){
        myImage.setAttribute('src', 'imagens/2.png');
    } else {
        myImage.setAttribute('src','imagens/1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Por favor digite seu nome: ');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Bom dia ' + myName;
    }

}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Bom dia ' + storedName;
}
myButton.onclick = () =>{
    setUserName();
}
