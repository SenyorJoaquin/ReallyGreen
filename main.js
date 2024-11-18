window.onscroll = function () { toggleStickyHeader() };

function toggleStickyHeader() {
    const header = document.querySelector('.sticky-header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active-menu-toggle');
});

// Dropdown toggle clilck on mobile
const dropdownIcon = document.querySelector("span.dropdown-icon");
const submenu = document.querySelector('.sub-menu');
dropdownIcon.addEventListener('click', () => {
    submenu.classList.toggle("active-submenu");
});




// Three Topics Content
const articles = [
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
    { title: "-Name", description: "" },
  
];

const pageSize = 6;
let currentPage = 1;

function renderContent(page) {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const content = document.getElementById('content');
    content.innerHTML = articles.slice(start, end).map(article => `
        <div class="article">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        </div>
    `).join('');
}
function renderPagination() {
    const pagination = document.getElementById('page-numbers');
    const pageCount = Math.ceil(articles.length / pageSize);

    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('span');
        pageLink.className = 'page-link';
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', () => {
            currentPage = i;
            renderContent(currentPage);
            renderPagination();
        });
        pagination.appendChild(pageLink);
    }
}

// document.getElementById('prev').addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderContent(currentPage);
//         renderPagination();
//     }
// });

// document.getElementById('next').addEventListener('click', () => {
//     const pageCount = Math.ceil(articles.length / pageSize);
//     if (currentPage < pageCount) {
//         currentPage++;
//         renderContent(currentPage);
//         renderPagination();
//     }
// });

renderContent(currentPage);
renderPagination();