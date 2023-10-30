let search= document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {

    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu= document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {

    menu.classList.toggle('active');
    search.classList.remove('active');
}
//hide menu and search box while scrolling

window.onscroll= () =>{
    
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll',()=> {
    header.classList.toggle('shadow',window.scrollY > 0 );
});


        const names=document.getElementById('name');
        const email=document.getElementById('email');
        const number = document.getElementById('number');
        const feedback = document.getElementById('feedback');
        const result = document.getElementById('insert');
        insert.addEventListener('click',()=>{
            var data ={
                Name : names.value,
                Email : email.value,
                Number : parseInt(number.value),
                Feedback : feedback.value,
            }
            fetch ('http://localhost:2424/api/feedback',{
                method :'POST',
                headers:{
                    'Content-type':'application/json;charset=UTF-8'
                },
                body : JSON.stringify(data)
            })
            .then(res =>{return res.json()})
            .then(res => { result.innerText=JSON.stringify(res)})
        })
    