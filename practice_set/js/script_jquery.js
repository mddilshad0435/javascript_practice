//option which selected shown
$('#education_level').change(function(){
    var valueInput = $('#education_level option:selected').text();
    $('#selected_level').html(valueInput);
});


//option which selected shown after button pres
$('#show_option').on({
    click: function(){
        var valueInput = $('#options option:selected').text();
        $('#selected_option').html(valueInput);
    },
    mouseenter: function(){
        $('#show_option').css("background-color", "blue");
    },
    mouseleave: function(){
        $('#show_option').css("background-color", "#27ae61");
    }
});


// $('#show_option').click(function(){
//     var valueInput = $('#options option:selected').text();
//     $('#selected_option').html(valueInput);
    
// });

//radio button display 
$('input[name=gender]').change(function(){
    //var valueChanged = $('input[name=gender]:checked').parent().text();
    var valueChanged = $('input[name=gender]:checked').val();
    $('#selected_radio').html(valueChanged);
    console.log(valueChanged);
});

//checked checkBox showing
$('input[name=interest]').change(function(){
    var valueChanged = $('input[name=interest]:checked');
    var texts = [];
    $.each(valueChanged,function(index,value){
        
        texts.push("<li>"+$(value).val()+"</li>");
        
    });
    $('#selected_check').html(texts);
    
    
});

//showing button after keypress and hide after erase
$('#fullName').on({
    keyup: function(){
        // if($('#fullName').val() == ""){
        //     $('#submit').hide();
        // }else{
        //     $('#submit').show();
        // }
        $('#fullName').val()=="" ? $('#submit').hide(200) : $('#submit').show(200);
    }
});


//toggle bar
$('#toggle-tab').click(function(){
    //$('#tab-content').toggle();
    $('#tab-content').fadeToggle();
    $('#toggle-tab').toggleClass('flip');
});

//hide the button and show hidden text
$('#hide-button').click(function(){
    $('#hide-button').hide("fast",function(){
        $('#hidden-text').show();
    });
    
});

//enlarge the square
$('#animate').click(function(){
    $('#square').animate({
        width: "+=20px",
        height: "+=20px",
        marginLeft: "+=20px",
        marginTop: "+=10px"
    },1000,function(){
        $('#square').css('background-color','yellow');
    });
    // $('#square').animate({
    //     height:"+=20px"
    // },1000);

});