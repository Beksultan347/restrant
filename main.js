let backtbtn = document.getElementById("backtbtn");
let nextbtn = document.getElementById("nextbtn");
let sections = document.getElementById("sections");



backtbtn.addEventListener("click", ()=>{
    sections.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"
    });
});

nextbtn.addEventListener("click", ()=>{
    sections.scrollBy({
        left: window.innerWidth,
        behavior: "smooth"
    });
});
/*
setInterval(() =>{
    sections.scrollBy({
        left: window.innerWidth,
        behavior: "smooth"
    });
}, 3700);*/



function showCategory(category) {
    // Скрыть все категории
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        cat.style.display = 'none';
    });

    // Показать выбранную категорию
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'grid';  // Показать как grid для равномерного расположения изображений
        selectedCategory.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}

