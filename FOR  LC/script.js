let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

const tg = new telegram.init("5588375038:AAEWokqgU9iHU6Rimw7WCQGPAOgGpDyp3is", "1941561372", "html");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const phoneNumber = e.target[1].value;
    const courseName = e.target[2].value;
    const result = `<b> Ism Familya:</b> <code>${fullName}</code>\n<b>Telefon nomer:</b> <code>${phoneNumber}</code>\n<b>Kurs nomi:</b> <code> ${courseName} </code>`
    // tg.sendMessage(result);
    if(fullName == "" , fullName.length < 4 || phoneNumber == "" || courseName == "" ){
        // console.log("Xaato");
        alert("Malumot to'liq emas!");
        // confirm("salom")
    }else{
        console.log(true);
        tg.sendMessage(result);
        form.style.display="none"
    }
});

// tg.sendMessage("Bu test")

// tg.getUpdates()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));