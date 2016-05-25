//I dont know Main Conference's meaning even if I use google translation.
//I am afraid it will influence me at the "Activity Registration" section, so I write down this comment.

//Target the name input after page loaded
$('#name').focus();
//Hide Color Option by default
$('#color').hide();
$('label[for="color"]').hide();

//Append text input into fieldset
var $otherJobLabel = $('<label for="other_job">What\'s your job role?</label>');
var $otherJobInput = $('<input type="text" id="other_job" name="user_title_other">');
$('form fieldset').first().append($otherJobLabel);
$('form fieldset').first().append($otherJobInput);
//Hide otherJob text input by default
$otherJobLabel.hide();
$otherJobInput.hide();

//Show text input when "Your Job Role" is "Other"
$('#title').on('input', function() {
    if ($(this).val() === 'other') {
        $otherJobLabel.slideDown('fast');
        $otherJobInput.slideDown('fast');
    } else {
        $otherJobLabel.slideUp('fast');
        $otherJobInput.slideUp('fast');
    }
});

//Hide the "Color:" label and drop down menu until a T-Shirt design is selected.
$('#design').on('input', function() {
    if ($('#design').val() === 'Select Theme') {
        $('#color').fadeOut();
        $('label[for="color"]').fadeOut();
    } else {
        $('#color').fadeIn();
        $('label[for="color"]').fadeIn();
        //Refresh the color option if user isn't choose the "Select Theme"
        refreshColor();
    }
});

//T-shirt color options are revealed based on the design selected.
var $colorOpt = $('#color').children('option');

function refreshColor() {
    $('#color').empty();
    if ($('#design').val() === 'js puns') {
        $colorOpt.each(function() {
            if ($(this).text().indexOf('JS Puns') >= 0) {
                $('#color').append($(this));
            }
        });
    } else {
        $colorOpt.each(function() {
            if ($(this).text().indexOf('I ♥ JS') >= 0) {
                $('#color').append($(this));
            }
        });
    }
}

//User cannot select two activities that are at the same time
$('input[type="checkbox"]').change(checkCBox);

function checkCBox() {
    var labelText = $(this).parent().text();
    //Main Conference wont influence other checkbox
    if (labelText.indexOf('Main Conference') < 0) {
        if ($(this).prop('checked', 'true')) {
            //被選取
        } else {
            //被取消選取
        }
    }
}
