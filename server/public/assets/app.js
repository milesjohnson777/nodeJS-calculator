  //////  //      //  //////  //    //  /////////
//        //      //  //      // /  //     //
//        //      //  //////  //  / //     //
//        //      //  //      //   ///     //
  //////  //////  //  //////  //    //     //

// VARS
// var mathOp;
var values = {};

//when page is ready
$(document).ready(function(){
    initEvents();

    //FUNCTIONS

    function calculate(object){
        var screenSteal = $('.text-scroll').text();
        object.nextNumber = screenSteal;
        $('.text-scroll').empty();
        $.ajax({
            type: "POST",
            url:'/math/' + object.operand,
            data: object,
            success: function(res){
                appendDom(res);
                console.log(res);
            }
        });
    }

    function calculateWrapper(){
        calculate(values);
    }

    function appendDom(data){
        $('.text-scroll').append(data);
        console.log('result from server: ', data);
    }

    function assignOperand(dataOperand){
        values.operand = dataOperand;
    }


function initEvents(){
//  EVENT LISTENERS
$('.one').on('click', function(){$('.text-scroll').append('1');});
$('.two').on('click', function(){$('.text-scroll').append('2');});
$('.three').on('click', function(){$('.text-scroll').append('3');});
$('.four').on('click', function(){$('.text-scroll').append('4');});
$('.five').on('click', function(){$('.text-scroll').append('5');});
$('.six').on('click', function(){$('.text-scroll').append('6');});
$('.seven').on('click', function(){$('.text-scroll').append('7');});
$('.eight').on('click', function(){$('.text-scroll').append('8');});
$('.nine').on('click', function(){$('.text-scroll').append('9');});
$('.zero').on('click', function(){$('.text-scroll').append('0');});
$('.float-point').on('click', function(){$('.text-scroll').append('.');});

$('.math').on('click', function(){
    var screenSteal = $('.text-scroll').text();
    values.firstNumber = screenSteal;
    console.log('result before server: ', screenSteal);
    assignOperand($(this).data('id'));
    $('.text-scroll').empty();
});

$('.equals').on('click', calculateWrapper);

$('.clear').on('click', function(){
    values = {};
    $('.text-scroll').empty();
    });
    }  //end of initEvents
}); //end of document ready
