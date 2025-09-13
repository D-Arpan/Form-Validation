let form = document.querySelector("form");
let nameInp = document.querySelector("#name");
let emailInp = document.querySelector("#email");
let passInp = document.querySelector("#password");
let genderInp = document.querySelector("#gender");



form.addEventListener("submit", function (dets) {
    

    if (nameInp.value.length <= 2) {
        document.querySelector("#alertName").style.display = "initial";
        dets.preventDefault();
    } else {
        document.querySelector("#alertName").style.display = "none";
    };



    const emailPattern = /^(?!.*\.\.)([a-zA-Z0-9]+[a-zA-Z0-9._%+-]*)@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    if (!emailPattern.test(emailInp.value)) {
        document.querySelector("#alertEmail").style.display = "initial";
        dets.preventDefault();
    } else {
        document.querySelector("#alertEmail").style.display = "none";
    };



    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(passInp.value)) {
        document.querySelector("#alertPass").style.display = "initial";
        dets.preventDefault();
    } else {
        document.querySelector("#alertPass").style.display = "none";
    };
});

