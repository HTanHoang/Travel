const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bar = $(".header__bar-icon");

const barClose = $(".header__bar-closed");

const barMenu = $(".header__bar-menu");

barClose.addEventListener("click", function () {
	$(".header__bar-menu.active").classList.remove("active");
});

bar.addEventListener("click", function () {
	barMenu.classList.add("active");
});

const history = $(".slide__history-search");

const btnSearch = $(".slide-search-btn");

btnSearch.addEventListener("click", function () {
	history.classList.toggle("active");
});

const tabItems = $$(".best-category-item");

tabItems.forEach((tab, index) => {
	tab.onclick = function () {
		$(".best-category-item.active").classList.remove("active");
		this.classList.add("active");
	};
});
