$(function () {
    $("span").click(function () {
        var _this = $(this);
        if (_this.hasClass("bingo")) {
            _this.removeClass("bingo").addClass("no-bingo");
            var num = _this.text();
            _this.text("");
            $("span").each(function () {
                if (parseInt($(this).text()) > num) {
                    $(this).text(parseInt($(this).text()) - 1);
                }
            })
        } else {
            _this.removeClass("no-bingo").addClass("bingo");
            var codes = [];
            $("span").each(function () {
                codes.push($(this).text());
            })
            _this.text(parseInt(Math.max.apply(null, codes)) + 1);
            return false;
        }
    })
})