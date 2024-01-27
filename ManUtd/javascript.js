var i = 0;

function highLight() {
	var moreTodayNews = document.getElementsByClassName("nothing");
	var x = moreTodayNews[i]
	x.className = "today-news-more-highlight nothing";
	var y;

	if(i === moreTodayNews.length - 1) {
		y = moreTodayNews[i - 1];
		i = 0;
	} else if(i === 0) {
		y = moreTodayNews[moreTodayNews.length - 1];
		i++;
	} else {
		y = moreTodayNews[i - 1];
		i++;
	}
	y.className = "today-news-more nothing";
};
window.setInterval("highLight()", 3000);