document.getElementById("defaultOpen").click();

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openRedirect(url) {
    window.location.href = url;
}

function calcNum() {

    var operandOne;
    var operandTwo;
    var oneFp;
    var twoFp;
    var addResult;
    var subtractResult;
    var multiplyResult;
    var divideResult;

    operandOne = document.getElementById("numOne").value;
    operandTwo = document.getElementById("numTwo").value;

    oneFp = parseFloat(operandOne);
    twoFp = parseFloat(operandTwo);

    if ($("#calcForm").validate()) {
        if (document.getElementById("rdAdd").checked) {
            addResult = oneFp + twoFp;
            document.getElementById("calcValue").innerHTML = addResult.toString();
        }
        else if (document.getElementById("rdSubtract").checked) {
            subtractResult = oneFp - twoFp;
            document.getElementById("calcValue").innerHTML = subtractResult.toString();
        }
        else if (document.getElementById("rdMultiply").checked) {
            multiplyResult = oneFp * twoFp;
            document.getElementById("calcValue").innerHTML = multiplyResult.toString();
        }
        else if (document.getElementById("rdDivide").checked) {
            divideResult = oneFp / twoFp;
            document.getElementById("calcValue").innerHTML = divideResult.toString();
        }
    }
}

function clearform() {

    document.getElementById("numOne").value = '';
    $(".radioSelect").prop("checked", false);
    document.getElementById("numTwo").value = '';
    document.getElementById("calcValue").innerHTML = "";

}

$(function() {
    $("#calcForm").validate({
        rules: {
            numOne: {
                required: true,
            },
            rdMath: {
                required: true,
            },
            numTwo: {
                required: true,
            }
        }
    });
});

function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#UnitConverter" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Form Value or input value
        var fromValue = document.getElementById("FromValue").value;

        // From Unit
        // Get the value associated with the from unit that was checked (cm, m, km, in, ft, yd or mi)
        var fromUnit;
        if (document.getElementById("FromCentimeters").checked) {
            fromUnit = document.getElementById("FromCentimeters").value;
        }
        if (document.getElementById("FromMeters").checked) {
            fromUnit = document.getElementById("FromMeters").value;
        }
        if (document.getElementById("FromKilometers").checked) {
            fromUnit = document.getElementById("FromKilometers").value;
        }
        if (document.getElementById("FromInches").checked) {
            fromUnit = document.getElementById("FromInches").value;
        }
        if (document.getElementById("FromFeet").checked) {
            fromUnit = document.getElementById("FromFeet").value;
        }
				if (document.getElementById("FromYards").checked) {
            fromUnit = document.getElementById("FromYards").value;
        }
				if (document.getElementById("FromMiles").checked) {
            fromUnit = document.getElementById("FromMiles").value;
        }

        // To Unit
				var toUnit;
        if (document.getElementById("ToCentimeters").checked) {
            toUnit = document.getElementById("ToCentimeters").value;
        }
        if (document.getElementById("ToMeters").checked) {
            toUnit = document.getElementById("ToMeters").value;
        }
        if (document.getElementById("ToKilometers").checked) {
            toUnit = document.getElementById("Tokilometers").value;
        }
        if (document.getElementById("ToInches").checked) {
            toUnit = document.getElementById("ToInches").value;
        }
        if (document.getElementById("ToFeet").checked) {
            toUnit = document.getElementById("ToFeet").value;
        }
				if (document.getElementById("ToYards").checked) {
            toUnit = document.getElementById("ToYards").value;
        }
				if (document.getElementById("ToMiles").checked) {
            toUnit = document.getElementById("ToMiles").value;
        }
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = fromValue;
        myData.FromUnit = fromUnit;
        myData.ToUnit = toUnit;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("ToValue").innerHTML = msg;
            });
        });
    }
}

function clearForm() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    
		document.getElementById("FromCentimeters").checked = false;
    document.getElementById("FromMeters").checked = false;
    document.getElementById("FromKilometers").checked = false;
    document.getElementById("FromInches").checked = false;
    document.getElementById("FromFeet").checked = false;
    document.getElementById("FromYards").checked = false;
		document.getElementById("FromMiles").checked = false;
    
    document.getElementById("ToCentimeters").checked = false;
    document.getElementById("ToMeters").checked = false;
    document.getElementById("ToKilometers").checked = false;
    document.getElementById("ToInches").checked = false;
    document.getElementById("ToFeet").checked = false;
    document.getElementById("ToYards").checked = false;
		document.getElementById("ToMiles").checked = false;
    document.getElementById("ToValue").innerHTML = "";
		document.getElementById("FromValueMsg").innerHTML = "";
		document.getElementById("FromUnitMsg").innerHTML = "";;
    document.getElementById("ToUnitMsg").innerHTML = "";;
    
}

$( "#myform" ).validate({

});