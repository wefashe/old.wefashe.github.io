require(['jquery', 'knockout', 'bootstrap'], function($, ko) {


    function getCount() {
        Icarus.request({
            api: 'hk.page.get',
            v: '1.0',
            data: { // <---
                pages: [ // <---
                    { url: 'http://test.com/1' } // <---
                ] // <---
            }, // <---
            success: function(results) {},
            failure: function(code, err) {}
        });
    }


    function init() {
        getCount()；
    };

    init();

});