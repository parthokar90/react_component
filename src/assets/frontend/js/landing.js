const { Toast } = require("bootstrap");
const { data } = require("jquery");
const { toSafeInteger } = require("lodash");

function questionToggle(flag) {
    if (flag == 1) {
        document.getElementById("ques1").style.display = "none";
        document.getElementById("ques2").style.display = "inline";
        document.getElementById("ques3").style.display = "inline";

        //document.getElementById("ans1").classList.add('zoomIn');

        document.getElementById("ans1").style.display = "inline";
        document.getElementById("ans2").style.display = "none";
        document.getElementById("ans3").style.display = "none";
    } else if (flag == 2) {
        document.getElementById("ques2").style.display = "none";
        document.getElementById("ques1").style.display = "inline";
        document.getElementById("ques3").style.display = "inline";

        document.getElementById("ans2").style.display = "inline";
        document.getElementById("ans1").style.display = "none";
        document.getElementById("ans3").style.display = "none";
    } else if (flag == 3) {
        document.getElementById("ques3").style.display = "none";
        document.getElementById("ques1").style.display = "inline";
        document.getElementById("ques2").style.display = "inline";

        document.getElementById("ans3").style.display = "inline";
        document.getElementById("ans1").style.display = "none";
        document.getElementById("ans2").style.display = "none";
    }
}

function ansToggle(flag) {
    if (flag == 1) {
        document.getElementById("ques1").style.display = "inline";

        document.getElementById("ans1").style.display = "none";
    } else if (flag == 2) {
        document.getElementById("ques2").style.display = "inline";

        document.getElementById("ans2").style.display = "none";
    } else if (flag == 3) {
        document.getElementById("ques3").style.display = "inline";

        document.getElementById("ans3").style.display = "none";
    }
}

function workToggle(flag) {
    if (flag == 1) {
        document.getElementById("marchant-content").style.display = "flex";
        document.getElementById("order-content").style.display = "none";
        document.getElementById("pickup-content").style.display = "none";
    } else if (flag == 2) {
        document.getElementById("marchant-content").style.display = "none";
        document.getElementById("order-content").style.display = "flex";
        document.getElementById("pickup-content").style.display = "none";
    } else if (flag == 3) {
        document.getElementById("marchant-content").style.display = "none";
        document.getElementById("order-content").style.display = "none";
        document.getElementById("pickup-content").style.display = "flex";
    }
}

function areaToggle(flag) {
    if (flag == 1) {
        document.getElementById("inside-dhaka").style.display = " none";
        document.getElementById("outside-dhaka").style.display = "flex";
    } else {
        document.getElementById("inside-dhaka").style.display = "flex";
        document.getElementById("outside-dhaka").style.display = "none";
    }
}

function signinToggle(flag) {
    var toogleContent1 = document.getElementsByClassName("password-login");
    var toogleContent2 = document.getElementsByClassName("otp-login");
    var i = toogleContent1.length;
    var j = toogleContent2.length;

    if (flag == 1) {
        while (i--) toogleContent1[i].style.display = "block";
        while (j--) toogleContent2[j].style.display = "none";
    } else if (flag == 2) {
        while (i--) toogleContent1[i].style.display = "none";
        while (j--) toogleContent2[j].style.display = "block";

        document.getElementById("phone-code").style.display = "block";
        document.getElementById("withpassword").style.display = "none";
    }
}

function stripTags(original) {
    return original.replace(/(<([^>]+)>)/gi, "");
}

function uniqueEmailMerchant() {
    var email = $("#merchant_email").val();

    axios
        .get("/merchant/unique/check/" + email)
        .then((response) => {
            if (response.data.status == "error") {
                document.getElementById("merchant_email_error").innerHTML =
                    "Email already taken";
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
// check unique phone for personal
function uniquePhonePersonal() {
    var phone = $("#phone_number_personal").val();

    axios
        .get("/personal/unique/check/" + phone)
        .then((response) => {
            if (response.data.status == "error") {
                document.getElementById("personal_phone_error").innerHTML =
                    "Phone number already taken";
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

//merchant function
function merchant_check() {
    let b_name = $("#m_business_name").val();
    let b_type = typeof b_name;
    console.log("abc" + b_name + "dsfdsf");

    // for captcha validation
    // var response = grecaptcha.getResponse();
    // if(response.length == 0){
    // //reCaptcha not verified
    //   }

    // var letters = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/;

    if (document.getElementById("merchant_file").files.length == 0) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please upload your trade license",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#m_business_name").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter business name",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    // if(!$("#m_business_name").val().match(letters))
    //  {
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "error",
    //         title: "Please remove extra space from business name",
    //         showConfirmButton: false,
    //         timer: 3000,
    //     });
    //     return false;
    //  }

    if ($("#m_business_type").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter business type",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    // if(!$("#m_business_type").val().match(letters))
    // {
    //    Swal.fire({
    //        position: "top-end",
    //        icon: "error",
    //        title: "Please remove extra space from business type",
    //        showConfirmButton: false,
    //        timer: 3000,
    //    });
    //    return false;
    // }

    if ($("#m_business_address").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter address",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#merchant_phone").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter phone number",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    // if(!$("#m_business_address").val().match(letters))
    // {
    //    Swal.fire({
    //        position: "top-end",
    //        icon: "error",
    //        title: "Please remove extra wqeqweqwe space from address",
    //        showConfirmButton: false,
    //        timer: 3000,
    //    });
    //    return false;
    // }

    // if($("#m_email_id").val()==""){
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "error",
    //             title: "Please enter valid email address",
    //             showConfirmButton: false,
    //             timer: 3000,
    //         });
    //         return false;
    // }

    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // var em=$("#m_email_id").val();

    // if(!em.match(validRegex)){
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "error",
    //         title: "Email is invalid",
    //         showConfirmButton: false,
    //         timer: 3000,
    //     });
    //     return false;
    // }

    //  uniqueEmail(em);

    if ($("#mer_password").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter password",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#mer_password").val().length < 8) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be at least 8 characters long",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let inputtxt = document.getElementById("mer_password");
    if (!inputtxt.value.match(passw)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be at least 8 characters long with at least one number, one capital letter & one small letter",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#mer_password_c").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter confirm password",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#mer_password_c").val().length < 8) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Confirm password must be at least 8 characters long",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if (
        $("#mer_password").val().length < 8 ||
        $("#mer_password_c").val().length < 8
    ) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Confirm password must be at least 8 characters long with at least one number, one capital letter & one small letter",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    }

    if ($("#mer_password_c").val() != $("#mer_password").val()) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password confirmation does not match",
            showConfirmButton: false,
            timer: 3000,
        });
        return false;
    } else {
        $("#merchant_signup").submit();
        return true;
    }
}

function personal_check() {
    // check otp
    let phone = $("#phone_number_personal").val();
    let otp = $("#personal_otp").val();
    if (phone == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter Phone Number",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if (otp == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter otp code please",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (otp.length > 6 || otp.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter 6 digit otp code please",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#personal_name").val == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter User Name",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    // if ($("#personal_email_id_check").prop("checked")) {
    //     if($("#p_email_id").val()==""){
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "error",
    //             title: "Enter valid email address",
    //             showConfirmButton: false,
    //             timer: 2000,
    //         });
    //         return false;
    //     }
    //  }

    //  if ($("#personal_email_id_check").prop("checked")) {
    //     if($("#p_email_id").val()!=""){
    //         $("#personal_submit").submit();
    //         return true;
    //     }
    //  }

    if ($("#personal_email").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter valid email address",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#personal_password").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter password",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#personal_password_c").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter confirm password",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#personal_password").val().length < 8) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be at least 8 characters long",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#personal_password_c").val().length < 8) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Confirm Password must be at least 8 characters long",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let inputtxt = document.getElementById("personal_password");
    if (!inputtxt.value.match(passw)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be contain at least one number, one capital letter & one small letter",
            showConfirmButton: false,
            timer: 2500,
        });
        return false;
    }

    if ($("#personal_password_c").val() != $("#personal_password").val()) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password confirmation does not match",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    } else {
        $("#personal_signup").submit();
        return true;
    }
}

function personal_check_first() {
    // check otp
    let phone = $("#phone_number_personal").val();
    let otp = $("#otp_personal").val();
    if (phone == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter Phone Number",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if (otp == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter otp code please",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (otp.length > 6 || otp.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter 6 digit otp code please",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    let user_name = $("#personal_user_name").val();

    if (user_name == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter User Name",
            showConfirmButton: false,
            timer: 2000,
        });
        $("#p_details").hide();
        return false;
    }

    axios
        .get("/otp/check/personal/" + otp)
        .then(function (response) {
            if (response.data.status == "success") {
                axios
                    .get("/personal/check/" + phone)
                    .then(function (response) {
                        if (response.data.status == "success") {
                            $("#p_details").show();
                            $("#individual_account").hide();
                        } else {
                            let msg = response.data.message;
                            Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: msg,
                                showConfirmButton: false,
                                timer: 2000,
                            });
                            return false;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                let msg = response.data.message;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: msg,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function personal_second_back() {
    $("#individual_account").show();
    $("#p_details").hide();
}

// this is for merchant
function business_first_next() {
    // check otp
    let email = $("#merchant_email").val();
    let otp = $("#otp").val();
    if (email == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter email address",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if (otp == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter verification code",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (otp.length > 6 || otp.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter 6 digit verification code",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    axios
        .get("/otp/check/merchant/" + otp + "/" + email)
        .then(function (response) {
            if (response.data.status == "success") {
                axios
                    .get("/merchant/check/" + email)
                    .then(function (response) {
                        if (response.data.status == "success") {
                            $("#b1").hide();
                            $("#b2").show();
                        } else {
                            let msg = response.data.message;
                            Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: msg,
                                showConfirmButton: false,
                                timer: 2000,
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                let msg = response.data.message;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: msg,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

// personal_first_next

function personal_first_next() {
    // check otp
    let phone = $("#phone_number_personal").val();
    let otp = $("#personal_otp").val();
    if (phone == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter phone number",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if (otp == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter verification code",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (otp.length > 6 || otp.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter 6 digit verification code",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    axios
        .get("/otp/check/personal/" + otp + "/" + phone)
        .then(function (response) {
            if (response.data.status == "success") {
                axios
                    .get("/personal/check/" + phone)
                    .then(function (response) {
                        if (response.data.status == "success") {
                            $("#p1").hide();
                            $("#p2").show();
                        } else {
                            let msg = response.data.message;
                            Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: msg,
                                showConfirmButton: false,
                                timer: 2000,
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                let msg = response.data.message;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: msg,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

//verify otp
function verifyOtp() {
    let number = document.getElementById("phone_number").value;
    let code = document.getElementById("otp_code").value;
    let userType = document.querySelector(
        'input[name="userType"]:checked'
    ).value;
    if (code == "") {
        Swal.fire({
            icon: "error",
            text: "Please enter Otp Code",
        });
        return false;
    }
    if (number == "") {
        Swal.fire({
            icon: "error",
            text: "Please enter phone number",
        });
        return false;
    }

    axios
        .get(
            "/send-forgot-password-in-otp-verify/" +
                userType +
                "/" +
                number +
                "/" +
                code
        )
        .then(function (response) {
            if (response.data.status == "success") {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                $("#verify_password").show();
                $("#reset_password_button").show();
                $("#verify_otp_button").hide();
            } else {
                // this.hideLoading();
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

// checkUserType in reset password
function checkUserType(value) {
    $(".reset_verify").removeClass("d-none");
    $(".reset_step_2").addClass("d-none");
    if (value == "personal") {
        $("#reset_form").trigger("reset");
        $(".personal_phone").removeClass("d-none");
        $(".merchant_mail").addClass("d-none");
        $("#userType").val("personal");
    } else if (value == "merchant") {
        $("#reset_form").trigger("reset");
        $(".personal_phone").addClass("d-none");
        $(".merchant_mail").removeClass("d-none");
        $("#userType").val("merchant");
    }
}

// verify email phone in reset pass
function verifyEmailPass() {
    if ($("#phone_number").val() == "" && $("#userType").val() == "personal") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number required",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    if ($("#email").val() == "" && $("#userType").val() == "merchant") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email required",
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }

    axios
        .get("/verify-phone-mail-reset-pass", {
            params: {
                phone_number: $("#phone_number").val(),
                email: $("#email").val(),
                userType: $("#userType").val(),
            },
        })
        .then(function (response) {
            console.log(response.data);
            // if (response.data.userType == "personal") {
            if (response.data.message == "PHONE_DOES_NOT_EXIST") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Phone number does not exist",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return false;
            }
            // }
            // if (response.data.userType == "merchant") {
            if (response.data.message == "EMAIL_DOES_NOT_EXIST") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email does not exist",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return false;
            }
            if (response.data.status == "success") {
                $(".reset_verify").addClass("d-none");
                $(".reset_step_2").removeClass("d-none");
            }
            // }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function sendSignupOTP() {
    let email = document.getElementById("merchant_email").value;
    if ($("#merchant_email").val() == "") {
        document.getElementById("merchant_email_error").innerHTML =
            "Please enter valid email address";
        return false;
    }

    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var em = $("#merchant_email").val();

    if (!em.match(validRegex)) {
        document.getElementById("merchant_email_error").innerHTML =
            "Email is invalid";
        return false;
    }

    uniqueEmailMerchant(email);

    this.showLoading();

    axios
        .get("/send-sign-in-otp-merchant/" + email)
        .then(function (response) {
            if (response.data == "merchant_exists") {
                this.hideLoading();
                document.getElementById("merchant_email_error").innerHTML =
                    "This email is already registered as a merchant";
                return false;
            }
            if (response.data == "merchant_error_mail") {
                this.hideLoading();
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong",
                });
                return false;
            } else {
                this.hideLoading();
                $("#merchant_email_error").hide();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "A verification code has been sent to your mail",
                });
                return true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function sendSignupOTPPersonal() {
    let number = document.getElementById("phone_number_personal").value;
    if (number == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter phone number ",
        });
    } else {
        if (number.length < 11 || number.length > 11) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid phone number",
            });
            return false;
        }
        this.showLoading();
        axios
            .get("/send-sign-in-otp-personal/" + number)
            .then(function (response) {
                console.log(response.data);

                if (response.data == "otp_fail") {
                    this.hideLoading();
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Otp already sent to your phone",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    return false;
                }

                if (response.data.message == "failed") {
                    this.hideLoading();
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: response.data.data,
                        showConfirmButton: false,
                        timer: 3000,
                    });
                } else if (response.data == "exceedmaxlength") {
                    this.hideLoading();
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "wrong Input",
                        html:
                            '<i style="color:red;"> Number length error </i> ' +
                            '<p style="font-family:Arial;">Please enter 1 digit number</p>',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    this.hideLoading();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Verification Code sent ",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//this is for first step
function firstStep() {
    let phone = $("#phone_number").val();
    let otp = $("#otp").val();
    if (phone == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter Phone Number",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if (otp == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter otp code please",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (otp.length > 6 || otp.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enter 6 digit otp code please",

            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    axios
        .get("/otp/check/" + otp)
        .then(function (response) {
            if (response.data.status == "success") {
                $("#first_div").hide();
                $("#second_div").show();
            } else {
                let msg = response.data.message;
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: msg,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

//this is for previous step
function previousStep() {
    $("#first_div").show();
    $("#second_div").hide();
}

//this is for radion check for file attachment
function businessUser() {
    let radioValue = $("#radio_id").val();
    if (radioValue == 1) {
        $("#attachment_id").show();
    }
}

function individualUser() {
    $("#attachment_id").hide();
}

//this is for email show or hide div
function emailYes() {
    $("#emailDiv").show();
}

function emailNo() {
    $("#emailDiv").hide();
}

function final_btn() {
    let passValue = $("#pass").val();
    let cpassValue = $("#cpass").val();
    if ($("#radio_id").prop("checked") || $("#radio_id2").prop("checked")) {
        // do something
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please Select Business User or Individual User",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#radio_id").prop("checked")) {
        if (document.getElementById("tradeLicense").files.length == 0) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please upload your trade license",
                showConfirmButton: false,
                timer: 2000,
            });
            return false;
        }
    }

    if ($("#pass").val() == "" || $("#cpass").val() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please enter password",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    if ($("#pass").val().length != 8 || $("#cpass").val().length != 8) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must be at least 8 characters long",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
}

function sendForgetPassOTP() {
    let number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let userType = document.querySelector(
        'input[name="userType"]:checked'
    ).value;

    var query = "";

    if (userType == "personal") {
        if (number == "") {
            Swal.fire({
                icon: "error",
                text: "Please enter phone number",
            });
            return false;
        }
        query = number;
    }

    if (userType == "merchant") {
        if (email == "") {
            Swal.fire({
                icon: "error",
                text: "Please enter email address",
            });
            return false;
        }
        query = email;
    }

    axios
        .get("/send-forgot-password-in-otp/" + userType + "/" + query)
        .then(function (response) {
            console.log(response);
            if (response.data.status == "success") {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                // this.hideLoading();
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function showLoading() {
    document.querySelector("#loading").classList.add("loading");
    document.querySelector("#loading-content").classList.add("loading-content");
}

function hideLoading() {
    document.querySelector("#loading").classList.remove("loading");
    document
        .querySelector("#loading-content")
        .classList.remove("loading-content");
}

// function nextElementSibling(el) {
//     do { el = el.nextSibling } while ( el && el.nodeType !== 1 );
//     return el;
//   }

//   function ifocus(el) {
//     nextElementSibling(el).className= 'active';
//   }

//   function iblur(el) {
//     if(!el.value.trim()) {
//       nextElementSibling(el).className= '';
//     }
//   }

//NID Upload JS

function readFrontURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".image-upload-wrap1").hide();

            $(".file-upload-image1").attr("src", e.target.result);
            $(".file-upload-content1").show();

            $(".image-title1").html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function readBackURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".image-upload-wrap2").hide();

            $(".file-upload-image2").attr("src", e.target.result);
            $(".file-upload-content2").show();

            $(".image-title2").html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function readLogoURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".image-upload-wrap3").hide();

            $(".file-upload-image3").attr("src", e.target.result);
            $(".file-upload-content3").show();

            $(".image-title3").html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function removeUpload($flag) {
    if ($flag == 1) {
        $(".file-upload-input1").replaceWith($(".file-upload-input1").clone());
        $(".file-upload-content1").hide();
        $(".image-upload-wrap1").show();
        $(".image-upload-wrap1").bind("dragover", function () {
            $(".image-upload-wrap1").addClass("image-dropping");
        });
        $(".image-upload-wrap1").bind("dragleave", function () {
            $(".image-upload-wrap1").removeClass("image-dropping");
        });
    }

    if ($flag == 2) {
        $(".file-upload-input2").replaceWith($(".file-upload-input2").clone());
        $(".file-upload-content2").hide();
        $(".image-upload-wrap2").show();
        $(".image-upload-wrap2").bind("dragover", function () {
            $(".image-upload-wrap2").addClass("image-dropping");
        });
        $(".image-upload-wrap2").bind("dragleave", function () {
            $(".image-upload-wrap2").removeClass("image-dropping");
        });
    }

    if ($flag == 3) {
        $(".file-upload-input3").replaceWith($(".file-upload-input3").clone());
        $(".file-upload-content3").hide();
        $(".image-upload-wrap3").show();
        $(".image-upload-wrap3").bind("dragover", function () {
            $(".image-upload-wrap3").addClass("image-dropping");
        });
        $(".image-upload-wrap3").bind("dragleave", function () {
            $(".image-upload-wrap3").removeClass("image-dropping");
        });
    }
}

function addShop() {
    let name = document.getElementById("shop-name").value;
    let shopType = document.getElementById("shop-type").value;
    let shopAddress = document.getElementById("shop-address").value;
    let shopNumber = document.getElementById("shop-number").value;
    let shopStatus = document.getElementById("shop-status").value;
    // let shopLogo = document.getElementById("shop-logo").value;
    // let file = document.getElementById("shop-logo");

    if (name.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Shop name is too long. It should have 100 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopType.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Shop type is too long. It should have 30 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopAddress.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Address is too long. It should have 30 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopNumber.length > 10) {
        return false;
    }
    if (shopStatus == "") {
        return false;
    }

    var instance = $("#addShopForm").parsley();

    if (instance.isValid()) {
        var formData = new FormData();
        formData.append("name", name);
        formData.append("shopType", shopType);
        formData.append("shopAddress", shopAddress);
        formData.append("shopNumber", shopNumber);
        formData.append("shopStatus", shopStatus);
        // formData.append("shopLogo", file.files[0], shopLogo);

        console.log(formData);
        axios
            .post("/merchant/my-shop", formData)
            .then((response) => {
                $("#myModal").modal("hide");
                if (response.data == "validateFail") {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Invalid data",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Shop added successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then((done) => {
                        location.reload();
                    });
                }
            })
            .catch((err) => {});
    }
}

function editShop(data) {
    console.log(data);
    data = JSON.parse(data);
    var str = data.hot_number;
    var phone_no = str.replace("+880", "");
    document.getElementById("feed_id").value = data.id;
    document.getElementById("shop-name1").value = data.name;
    document.getElementById("shop-type1").value = data.shop_type;
    document.getElementById("shop-address1").value = data.address;
    document.getElementById("shop-number1").value = phone_no;
    document.getElementById("shop-status1").value = data.active;
    //document.getElementById("shop-logo1").value;
    $("#editmodals").modal("show");
}

function editShopdata() {
    let id = document.getElementById("feed_id").value;
    let name = document.getElementById("shop-name1").value;
    let shopType = document.getElementById("shop-type1").value;
    let shopAddress = document.getElementById("shop-address1").value;
    let shopNumber = document.getElementById("shop-number1").value;
    let shopStatus = document.getElementById("shop-status1").value;
    // let shopLogo = document.getElementById("shop-logo").value;
    // let file = document.getElementById("shop-logo");

    if (name.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Shop name is too long. It should have 100 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopType.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Shop type is too long. It should have 30 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopAddress.length > 100) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Address is too long. It should have 30 characters or fewer",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    if (shopNumber.toString().length > 10) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Invalid Phone no! its should 10 cherecter long and remove +880",
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }

    var instance = $("#editShopForm").parsley();

    if (instance.isValid()) {
        var formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("shopType", shopType);
        formData.append("shopAddress", shopAddress);
        formData.append("shopNumber", shopNumber);
        formData.append("shopStatus", shopStatus);
        // formData.append("shopLogo", file.files[0], shopLogo);

        console.log(formData);

        axios
            .post("/merchant/my-shop-edit", formData)
            .then((response) => {
                $("#myModal").modal("hide");

                if (response.data == "validateFail") {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Invalid data",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Shop edited successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then((done) => {
                        location.reload();
                    });
                }
            })
            .catch((err) => {});
    }
}

$("input").on("focusin", function () {
    $(this).parent().find("label").addClass("active");
});

$("input").on("focusout", function () {
    if (!this.value) {
        $(this).parent().find("label").removeClass("active");
    }
});

function downloadCsvFormat() {
    console.log("hello");

    axios
        .get("/get-bulk-order-format")
        .then((res) => {
            console.log("success");
        })
        .catch((err) => {});
}

function changePassword() {
    let oldPassword = document.getElementById("old-password").value;
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword == confirmPassword) {
        console.log("am here");
        axios
            .post("/merchant/change-password", {
                oldpassword: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            })
            .then((res) => {
                console.log(res);
                if (res.data == "success") {
                    $("#changePassword").modal("hide");

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Password changed successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    $("#changePassword").modal("hide");

                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: " Old Password is wrong",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((e) => {});
    } else {
        console.log("am here");
        $("#changePassword").modal("hide");

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password didnt match",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

function cancelRequest(id) {
    console.log(id);

    axios
        .get("/cancel-request-accepted/" + id)
        .then((response) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Merchant Product cancalation  Request Succesfully done",
                showConfirmButton: false,
                timer: 1500,
            }).then((done) => {
                location.reload();
            });
        })
        .catch((err) => {});
}

// google map  API code

function initialize() {
    $("form").on("keyup keypress", function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    const locationInputs = document.getElementsByClassName("map-input");
    const autocompletes = [];
    const geocoder = new google.maps.Geocoder();
    for (let i = 0; i < locationInputs.length; i++) {
        const input = locationInputs[i];
        const fieldKey = input.id.replace("-input", "");
        const isEdit =
            document.getElementById(fieldKey + "-latitude").value != "" &&
            document.getElementById(fieldKey + "-longitude").value != "";

        const latitude =
            parseFloat(document.getElementById(fieldKey + "-latitude").value) ||
            23.8103;
        const longitude =
            parseFloat(
                document.getElementById(fieldKey + "-longitude").value
            ) || 90.4125;

        const map = new google.maps.Map(
            document.getElementById(fieldKey + "-map"),
            {
                center: { lat: latitude, lng: longitude },
                zoom: 13,
            }
        );
        const marker = new google.maps.Marker({
            map: map,
            position: { lat: latitude, lng: longitude },
            draggable: true,
        });

        marker.setVisible(isEdit);
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.key = fieldKey;
        autocompletes.push({
            input: input,
            map: map,
            marker: marker,
            autocomplete: autocomplete,
        });
    }

    for (let i = 0; i < autocompletes.length; i++) {
        const input = autocompletes[i].input;
        const autocomplete = autocompletes[i].autocomplete;
        const map = autocompletes[i].map;
        const marker = autocompletes[i].marker;

        google.maps.event.addListener(
            autocomplete,
            "place_changed",
            function () {
                marker.setVisible(false);
                const place = autocomplete.getPlace();

                geocoder.geocode(
                    { placeId: place.place_id },
                    function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            const lat = results[0].geometry.location.lat();
                            const lng = results[0].geometry.location.lng();
                            setLocationCoordinates(autocomplete.key, lat, lng);
                        }
                    }
                );

                if (!place.geometry) {
                    window.alert(
                        "No details available for input: '" + place.name + "'"
                    );
                    input.value = "";
                    return;
                }

                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);
                }
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);
            }
        );
    }
}

function setLocationCoordinates(key, lat, lng) {
    const latitudeField = document.getElementById(key + "-" + "latitude");
    const longitudeField = document.getElementById(key + "-" + "longitude");
    latitudeField.value = lat;
    longitudeField.value = lng;
}

// google map api code ends here

function boxType() {
    var x = document.getElementById("cartoon-box").value;

    if (x == 1) {
        $("#dimension").empty();

        $("#dimension").append(
            `<option value=""> Dimension (Height x width x length) In ft </option>`
        );
        $("#dimension").append(
            `<option value="1">standard (1 x 1 x 1.5) </option>`
        );
        $("#dimension").append(`<option value="2">Mid (1 x 1 x 1.5) </option>`);
    } else if (x == 2) {
        $("#dimension").empty();
        $("#dimension").append(
            `<option value=""> Dimension (Height x width x length) In ft </option>`
        );
        $("#dimension").append(
            `<option value="3">Large (1 x 1 x 1.5) </option>`
        );
        $("#dimension").append(
            `<option value="4">special plus (3 x 3 x 3) </option>`
        );
    } else if (x == "") {
        $("#dimension").empty();
        $("#dimension").append(
            `<option value=""> Dimension (Height x width x length) In ft </option>`
        );
    }
}

// create parcel new moddification JS codes

function parcelBoxType() {
    $(".parcel-extended").show();
    let itemType = document.getElementById("dimension").value;
    if (itemType == 1) {
        document.querySelector(".quanity-alert").innerHTML =
            "Your maximun item quanity for envelope is 6";
    } else if (itemType == 2) {
        document.querySelector(".quanity-alert").innerHTML =
            "Your maximun item quanity for small box is 4";
    } else if (itemType == 3) {
        document.querySelector(".quanity-alert").innerHTML =
            "Your maximun item quanity for large box is 2";
    }
}

function addressbook(flag) {
    let id;
    if (flag == 1) {
        id = document.getElementById("search-adddress").value;
    } else if (flag == 2) {
        id = document.getElementById("search-adddress2").value;
    }

    axios
        .get("/get-address-information/" + id)
        .then((response) => {
            var string = response.data.phone;
            var phone_no = string.replace("+880", "");
            if (flag == 1) {
                document.getElementById("recieverName").value =
                    response.data.name;
                document.getElementById("recieverPhone").value = phone_no;
                document.getElementById("recieverAddress").value =
                    response.data.address;
                $("#recpCity").val(response.data.city);

                $("#recpArea").val(response.data.area);

                $("#recpArea").select2();
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function addressbookpersonal(flag) {
    let id;
    if (flag == 1) {
        id = document.getElementById("search-adddress").value;
    } else if (flag == 2) {
        id = document.getElementById("search-adddress2").value;
    }

    axios
        .get("/personal/get-address-information-personal/" + id)
        .then((response) => {
            var string = response.data.phone;
            var phone_no = string.replace("+880", "");
            if (flag == 1) {
                document.getElementById("recieverName").value =
                    response.data.name;
                document.getElementById("recieverPhone").value = phone_no;
                document.getElementById("recieverAddress").value =
                    response.data.address;
                $("#recpCity").val(response.data.city);

                $("#recpArea").val(response.data.area);

                $("#recpArea").select2();
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function cityArea() {
    let id = document.getElementById("recpCity").value;
    axios
        .get("city/area/" + id)
        .then((response) => {
            console.log(response);
            document.getElementById("recpArea").selectedIndex =
                response.data.area;
        })
        .catch((err) => {
            console.log(err);
        });
}

function first_step_percel() {
    let recieverName = $("#recieverName").val();
    let recieverPhone = $("#recieverPhone").val();
    let recpCity = $("#recpCity").val();
    let recpArea = $("#recpArea").val();
    let recieverAddress = $("#recieverAddress").val();

    if (recieverName == "") {
        let message = "Enter Recipient Name";
        document.getElementById("r_name").innerHTML = message;
        return false;
    } else if (recieverPhone == "") {
        let message = "Enter Recipient Phone";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (!$("#recieverPhone").val().match("[0-9]{10}")) {
        let message = "Please enter 10 digits mobile number";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (recieverPhone.length < 10 || recieverPhone.length > 10) {
        let message = "Please enter 10 digits mobile number";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (recpCity == "") {
        let message = "Select Recipient City";
        document.getElementById("r_city").innerHTML = message;
        return false;
    } else if (recpArea == "") {
        let message = "Select Recipient Area";
        document.getElementById("r_area").innerHTML = message;
        return false;
    } else if (recieverAddress == "") {
        let message = "Enter Recipient Address";
        document.getElementById("r_address").innerHTML = message;
        return false;
    } else {
        $("#first").hide();
        $("#second").show();
        return true;
    }
}

function first_step_percel_personal() {
    let recieverName = $("#recieverName").val();
    let recieverPhone = $("#recieverPhone").val();
    let recpCity = $("#recpCity").val();
    let recpArea = $("#recpArea").val();
    let recieverAddress = $("#recieverAddress").val();

    if (recieverName == "") {
        let message = "Enter Recipient Name";
        document.getElementById("r_name").innerHTML = message;
        return false;
    } else if (recieverPhone == "") {
        let message = "Enter Recipient Phone";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (!$("#recieverPhone").val().match("[0-9]{10}")) {
        let message = "Please enter 10 digits mobile number";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (recieverPhone.length < 10 || recieverPhone.length > 10) {
        let message = "Please enter 10 digits mobile number";
        document.getElementById("r_phone").innerHTML = message;
        return false;
    } else if (recpCity == "") {
        let message = "Select Recipient City";
        document.getElementById("r_city").innerHTML = message;
        return false;
    } else if (recpArea == "") {
        let message = "Select Recipient Area";
        document.getElementById("r_area").innerHTML = message;
        return false;
    } else if (recieverAddress == "") {
        let message = "Enter Recipient Address";
        document.getElementById("r_address").innerHTML = message;
        return false;
    } else {
        $("#final").show();
        $("#first").hide();
        return true;
    }
}

function second_step_percel() {
    let senderName = $("#senderName").val();
    let senderPhone = $("#senderPhone").val();
    let pickCity = $("#pickCity").val();
    let pickArea = $("#pickArea").val();
    let senderAddress = $("#senderAddress").val();

    if (senderName == "") {
        let message = "Enter Sender Name";
        document.getElementById("s_name").innerHTML = message;
        return false;
    } else if (senderPhone == "") {
        let message = "Enter Sender Phone";
        document.getElementById("s_phone").innerHTML = message;
        return false;
    } else if (pickCity == "") {
        let message = "Enter Sender City";
        document.getElementById("s_city").innerHTML = message;
        return false;
    } else if (pickArea == "") {
        let message = "Select Sender Area";
        document.getElementById("s_area").innerHTML = message;
        return false;
    } else if (senderAddress == "") {
        let message = "Enter Sender Address";
        document.getElementById("s_address").innerHTML = message;
        return false;
    } else {
        $("#final").show();
        $("#second").hide();
        return true;
    }
}

function enterAmt(e) {
    // document.getElementById('item-price').value
    $("#price").text(e.value);
}

function printOrder(data) {
    data = JSON.parse(data);

    console.log(data);
    document.getElementById("receipt-invoice-id").innerHTML = data.invoice_no;
    document.getElementById("receipt-charge").innerHTML = data.total_price;
    document.getElementById("receipt-name").innerHTML = data.recp_name;
    document.getElementById("receipt-country").innerHTML = data.city;
    document.getElementById("receipt-phone").innerHTML = data.recp_phone;
    document.getElementById("receipt-time").innerHTML = data.created_at;
}

function printmodal() {
    printElement(document.getElementById("receipt"));
}

document.getElementById("btnPrint").onclick = function () {
    printElement(document.getElementById("printThis"), true, "<hr/>");
    // printElement(document.getElementById("printThisToo"), true, "<hr />");
    window.print();
};

function printElement(elem, append, delimiter) {
    var domClone = elem.cloneNode(true);

    var printSection = document.getElementById("printSection");

    if (!$printSection) {
        var printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }

    if (append !== true) {
        $printSection.innerHTML = "";
    } else if (append === true) {
        if (typeof delimiter === "string") {
            $printSection.innerHTML += delimiter;
        } else if (typeof delimiter === "object") {
            $printSection.appendChlid(delimiter);
        }
    }

    $printSection.appendChild(domClone);
}

function BackToQuotaion() {
    console.log("3123123");
    $("#quotationDiv").show();
    $("#pricingDiv").hide();
}

function getQuotation() {
    var repcity = document.getElementById("recpCity").value;
    var repArea = document.getElementById("recpArea").value;
    var senderCity = document.getElementById("senderCity").value;
    var senderArea = document.getElementById("senderArea").value;

    var dimension = 0;

    var ele = document.getElementsByName("dimension");

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            dimension = ele[i].value;
        }
    }

    // var dimension = document.getElementById("dimension").value;
    var itemQty = document.getElementById("itemQty").value;

    if (isNaN(itemQty)) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Quantity must be number and limit is 5",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    // for qty validation
    if (itemQty == 0) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Quantity must not be 0",
            showConfirmButton: false,
            timer: 1600,
        });
    }

    //for area validation
    if (repArea == "" || senderArea == "") {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Please chose area",
            showConfirmButton: false,
            timer: 1600,
        });
    } else {
        axios
            .post("/get-delivery-cost", {
                rCity: repcity,
                rArea: repArea,
                sCity: senderCity,
                sArea: senderArea,
                dimension: dimension,
                qty: itemQty,
            })
            .then((response) => {
                if (response.data == 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Quantity limit is 5",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    console.log(response);
                    // $("#quotationDiv").hide();
                    $("#pricingDiv").show();
                    document.getElementById("express").innerHTML =
                        "Tk " + response.data.basePrice1;
                    document.getElementById("regular").innerHTML =
                        "Tk " + response.data.basePrice2;

                    document.getElementById("pic_location_id").innerHTML =
                        response.data.b_name;

                    document.getElementById("dis_location_id").innerHTML =
                        response.data.a_name;

                    $("#myModal").modal("show");
                }
            })
            .catch((e) => {});
    }
}

function changeParcelMethod() {
    let method = document.getElementById("method").value;
    let dimension = document.getElementById("dimension").value;
    var repcity = document.getElementById("recpCity").value;
    var repArea = document.getElementById("recpArea").value;
    var senderCity = document.getElementById("pickCity").value;
    var senderArea = document.getElementById("pickArea").value;

    var itemQty = document.getElementById("envelope").value;

    axios
        .post("/get-delivery-cost", {
            rCity: repcity,
            rArea: repArea,
            sCity: senderCity,
            sArea: senderArea,
            dimension: dimension,
            qty: itemQty,
        })
        .then((response) => {
            if (response.data == 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Quantity must be number and limit is 5",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(response);
            } else {
                console.log(response);

                if (method == 2) {
                    var price = document.getElementById("item-price").value;
                    var totalPrice = parseFloat(response.data.basePrice1);
                    document.getElementById("deliveryPrice").value = totalPrice;
                } else {
                    var price = document.getElementById("item-price").value;
                    var totalPrice = parseFloat(response.data.basePrice2);
                    document.getElementById("deliveryPrice").value = totalPrice;
                }
            }
        });
}

// remove first space \
// function inputValidate(input) {
//     input.value.replace(/\s+/g, "");
//     // if (event.keyCode == 32) {
//     //     return false;
//     // }
//     // // }
// }
