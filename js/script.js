function login() {
    console.log($("#login").val());
    console.log($("#password").val());
    if($("#login").val() === "user") {
        window.location.href = "./html/main-menu.html";
    } else {
        $("#wrong-pass").show();
    }
}

function reportNextButtonClicked() {
    $("#report-info").hide();
    // console.log($("#report-info"));
    // console.log($("#report-additional-info"));
    $("#report-additional-info").show();
    $("#report-next-button").attr('disabled', true);
    $("#report-previous-button").attr('disabled', false);
}

function reportPerviousButtonClicked() {
    $("#report-info").show();
    $("#report-additional-info").hide();
    $("#report-next-button").attr('disabled', false);
    $("#report-previous-button").attr('disabled', true);
}

function redirectToIndex() {
    window.location.href = "../index.html";
}

