require.config({
	baseUrl: "/assets/lib/",
	waitSeconds: 0,
	paths: {
		jquery: "jquery/jquery.min",
		bootstrap: 'bootstrap/bootstrap.min',
		knockout: "knockout/knockout.min",
		text:"require/text",
		css:"require/css"
	},
	shim: {
		 bootstrap: {
            deps: [
                'jquery',
                // 'css!../lib/bootstrap/bootstrap.min.css'
            ]
        }
	}


});

