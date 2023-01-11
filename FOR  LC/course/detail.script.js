let contactContainer = document.querySelector('.contact-container');

let courseDetail = document.querySelector('.courses-detail-container');

let contentt = document.querySelector('.contentt');

let imgContent = document.querySelector('.img-content');

let mentor = document.querySelectorAll('.mentor');

document.querySelector('#btn-join').addEventListener('click', () => {
    contactContainer.classList.toggle('active');
    courseDetail.classList.toggle('active');
    imgContent.classList.toggle('active');
    contentt.classList.toggle('active');
    mentor.value="Abror";
}
)

document.querySelector('#close-btn').addEventListener('click' , () => {
    contactContainer.classList.remove('active');
    courseDetail.classList.remove('active');
    imgContent.classList.remove('active');
    contentt.classList.remove('active');
})
// if()