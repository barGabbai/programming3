
$(document).ready(function () {

    $.getJSON("json.json", function (json) {
        $("#h5p1").html(json.h5.inner[0]);
        $("#h5p2").html(json.h5.inner[1]);
        $("#h5p3").html(json.h5.inner[2]);
        $("#h5p4").html(json.h5.inner[3]);
        $("#h5p5").html(json.h5.inner[4]);
        $("#h5p6").html(json.h5.inner[5]);
        $("#h5p7").html(json.h5.inner[6]);
    });

  
    $("#page2").hide();

    $("#btn1").click(function () {
        $("#page1").hide();
        $("#page2").show();
    });

  $("#sortable1").sortable({
        placeholder: 'drop-placeholder'
    });


    $(".slider").slider().slider("pips");


    var levels = ["1", "", "", "", "5"];

    $(".slider")
        .slider({
           
            max: 5,
            min: 1,
            value: 1,
            orientation: "horizontal",
            range: "min",
            animate: true,
            
        })
        .slider("pips", {
            rest: "label",
            labels: levels
        });

  
    
    new Sortable(document.getElementsByClassName('sortable')[0]);

    $('.dropdown-radio').find('input').change(function () {
        var dropdown = $(this).closest('.dropdown');
        var radioname = $(this).attr('name');
        var checked = 'input[name=' + radioname + ']:checked';

        //update the text
        var checkedtext = $(checked).closest('.dropdown-radio').text();
        dropdown.find('button').text(checkedtext);

        //retrieve the checked value, if needed in page 
        var thisvalue = dropdown.find(checked).val();
        alert(thisvalue);
    });

/* 

//If IE8 support is required, add this inside your own IE8 conditional:
//See: http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/

    //Prevent ie8 from closing the dropdown before clicking the checkbox
    $('.dropdown-radio').click( function( event ) {
        event.stopImmediatePropagation(); 
    })
    $(document).on('change', '.dropdown-radio input', function(){
        dropdownRadio();  //all the same functions as above
        $('.dropdown-menu').dropdown('toggle'); 
    })
    
    */
    $(".multipleChoices").click(function () {

        if ($(event.target).hasClass('pressed')) {
            $(event.target).css("background-color", "#3B8686");
            $(event.target).css("color", "white");
            $(event.target).removeClass('pressed')
        }

        else {
            $(event.target).css("background-color", "white");
            $(event.target).css("color", "black");
            $(event.target).addClass('pressed');
        }
        
    });

  
});

