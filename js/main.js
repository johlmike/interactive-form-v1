
//Target the name input after page loaded
$(document).ready(function() {
    $('#name').focus();
});

//Append text input into fieldset
var $otherJobLabel = $('<label for="other_job">What\'s your job role?</label>');
var $otherJobInput = $('<input type="text" id="other_job" name="user_title_other">');
$('form fieldset').first().append($otherJobLabel);
$('form fieldset').first().append($otherJobInput);
$otherJobLabel.hide();
$otherJobInput.hide();

//Show text input when "Your Job Role" is "Other"
$('#title').on('input', function() {
    if ( $(this).val() === 'other' ) {
        $otherJobLabel.slideDown('fast');
        $otherJobInput.slideDown('fast');
    } else{
        $otherJobLabel.slideUp('fast');
        $otherJobInput.slideUp('fast');
    }
});

//style the select
$('select').css('font-family', '"Roboto", sans-serif');
$('select').css('width', '100%');
$('select').css('background', '#c1deeb');
$('select').css('border', '2px solid #c1deeb');
$('select').css('font-weight', '500');
$('option').css('font-weight', '500');

//No color options appear in the “Color” menu until the user chooses a T-Shirt theme.
var $originalOpt = $('#color').children();
var $nThemeOpt = $('<option value="noneSelTheme">Please select a T-shirt theme</option>');
$('#color').empty();
$('#color').append($nThemeOpt);
$('#design').on('input', function() {
    if ( $('#design').val() === 'Select Theme' ) {
        $('#color').empty();
        $('#color').append($nThemeOpt);
    } else {
        $('#color').empty();
        $('#color').append($originalOpt);
    }
});
