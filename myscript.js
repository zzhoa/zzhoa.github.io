console.log('myscript.js here');

f1 = function() {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?APPID=7e180e4edb2eb7b5d57c279041d3e3f8',
        data: { 
        q: 'new york, NY', 
        cnt: '7'
        },
        dataType: 'jsonp',
        success: function(data){
            console.log(data);
        }
    });
};


// send cross site request using jsonp
// f1();


