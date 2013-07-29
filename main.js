YUI().use('node','io-form','node-base','json','get', 'event-mouseenter', function(Y) {
    
    Y.on("load", function(){
        Y.log("Main: load is called");

		function sendMesage(character){
			var resultDiv = Y.one('#resultDiv');
            var postURL = "signal.php";
            cfg = {
                    method: 'POST',
                    on: {
                        success: function(id, o, args){
                                    var responseData = o.responseText;
					resultDiv.setContent(responseData);
                            } 
                        },
                data: "msg="+character
            };
            Y.io(postURL,cfg);
		}

        Y.on('click', function(){sendMesage('U');}, '#moveUp');
        Y.on('click', function(){sendMesage('D');}, '#moveDown');
        Y.on('click', function(){sendMesage('L');}, '#moveLeft');
        Y.on('click', function(){sendMesage('R');}, '#moveRight');
        Y.on('click', function(){sendMesage('S');}, '#stop');
    });
});
