const categoryList = document.querySelector("ul#categories");

const categoryItems = categoryList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});