require(['jquery', 'knockout', 'bootstrap'], function($, ko) {





    function init() {
        $(".pagination li").click(function() {

            $(this).siblings('li').removeClass('active'); // 删除其他兄弟元素的样式

            $(this).addClass('active'); // 添加当前元素的样式

        });
    };

    init();

});