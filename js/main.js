//I dont know Main Conference's meaning even if I use google translation.
//I am afraid it will influence me at the "Activity Registration" section, so I write down this comment.

//Target the name input after page loaded
$('#name').focus();
//Hide Color Option by default
$('#color').hide();
$('label[for="color"]').hide();
//Hide bitcoin and payapl
var $pPaypal  = $('#credit-card').next();
var $pBitcoin = $pPaypal.next();
$pPaypal.hide();
$pBitcoin.hide();

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

//Run if the checkBox been change
function checkCBox() {
    var $changedCBox = $(this);
    var $cBoxLabel   = $changedCBox.parent();
    var labelText    = $cBoxLabel.text();
    var is9_12       = labelText.indexOf('9am-12pm');

    //transform is9_12 to 0 or 1
    if (is9_12 < 0) {
        is9_12 = 0;
    } else {
        is9_12 = 1;
    }

    //Main Conference and Wednesday options wont influence other checkbox
    if (labelText.indexOf('Main Conference') < 0 && labelText.indexOf('Wednesday') < 0) {

        //find siblings label without "main conference"
        $cBoxLabel.siblings('label').not('label:nth-child(2)').each(function() {

            var otherIs9_12 = $(this).text().indexOf('9am-12pm');
            //transform is9_12 to 0 or 1
            if (otherIs9_12 < 0) {
                otherIs9_12 = 0;
            } else {
                otherIs9_12 = 1;
            }

            //Don't choose the Wednesday Options, and able or disable the checkbox
            if ($(this).text().indexOf('Wednesday') < 0) {
                if (otherIs9_12 === is9_12) {
                    if ($changedCBox.prop('checked') === true) {
                        $(this).children('input').prop('disabled', 'true');
                    } else {
                        $(this).children('input').prop('disabled', '');
                    }
                }
            }

        });
    }
}

//If user chooses "PayPal" or "Bitcoin", then hide "Credit Card" and reveal the chosen section.
$('#payment').on('change',function() {
    var paymentVal = $(this).val();
    if( paymentVal === 'select_method' || paymentVal === 'credit card'){
        $('#credit-card').show();
        $pPaypal.hide();
        $pBitcoin.hide();
    } else if ( paymentVal === 'paypal' ) {
        $('#credit-card').hide();
        $pPaypal.show();
        $pBitcoin.hide();
    } else {
        $('#credit-card').hide();
        $pPaypal.hide();
        $pBitcoin.show();
    }
});

//Run checkEmail when user finish the input (blur)
$('#mail').on('blur', checkEmail);
//When user focus in the input, change border-color just like the original css
$('#mail').on('focus', inputFocus);

//Check user's email
function checkEmail() {
    var emailRE = /.+@.+/;
    var email = $('#mail').val();

    if( !email.match(emailRE) ){
        $('#mail').css('border','2px solid red');
    } else {
        $('#mail').css('border','2px solid #c1deeb');
    }

    if( $('#mail').css('border') !== '2px solid rgb(255, 0, 0)' ){
        $('#mail').css('border','2px solid #c1deeb');
    }
}
function inputFocus () {
    $(this).css('border','2px solid #5e97b0');
}

//Validate the credit card
$('#cc-num').on('blur',checkCardNum);
$('#zip').on('blur',checkZip);
$('#cvv').on('blur',checkCVV);

$('#cc-num').on('focus', inputFocus);
$('#zip').on('focus', inputFocus);
$('#cvv').on('focus', inputFocus);

//Validate the number
function checkCardNum () {
    //Use a jquery plugin
    if( !$('#cc-num').validateCreditCard().valid ){
        $('#cc-num').css('border','2px solid red');
    } else {
        $('#cc-num').css('border','2px solid #c1deeb');
    }

    if( $('#cc-num').css('border') !== '2px solid rgb(255, 0, 0)' ){
        $('#cc-num').css('border','2px solid #c1deeb');
    }
}
//Validate the zip
function checkZip () {
    if( $('#zip').val().length === 0 || isNaN($('#zip').val()) ){
        $('#zip').css('border','2px solid red');
    } else {
        $('#zip').css('border','2px solid #c1deeb');
    }

    if( $('#zip').css('border') !== '2px solid rgb(255, 0, 0)' ){
        $('#zip').css('border','2px solid #c1deeb');
    }
}
//Validate the CVV
function checkCVV () {
    if( $('#cvv').val().length !== 3 || isNaN($('#cvv').val()) ){
        $('#cvv').css('border','2px solid red');
    } else {
        $('#cvv').css('border','2px solid #c1deeb');
    }

    if( $('#cvv').css('border') !== '2px solid rgb(255, 0, 0)' ){
        $('#cvv').css('border','2px solid #c1deeb');
    }
}
