
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
