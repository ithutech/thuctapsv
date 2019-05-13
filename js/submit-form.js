
const reportUrl = 'https://script.google.com/macros/s/AKfycbz8FjlnuxfiBhAMrGZOVWuH_QCRsSQfnUcLi9eDJjQ_omd1Kp0f/exec';
const formReport = document.forms['submit-form-report'];
const loading1 = document.querySelector('.js-loading');
const successMessage1 = document.querySelector('.js-success-message');
const errorMessage1 = document.querySelector('.js-error-message');
const hideformReport = document.querySelector('.js-showNavReports');

var form1 = document.getElementById('form-report');
form1.addEventListener('submit', e => {
    e.preventDefault();
    if ($("input[name=MASV]").val() == '') {
        alert('BẠN CẦN NHẬP MÃ SV TRA CỨU THÔNG TIN TRƯỚC KHI THỰC HIỆN THAO TÁC NÀY');
        return false;
    }
    if ($("textarea[name=noidung-congviec]").val().length < 50 ) {
        alert('Nội dung báo cáo tối thiểu 50 kí tự');
        return false;
    }
    showLoadingIndicator();
    fetch(reportUrl, { method: 'POST', body: new FormData(formReport) })
        .then(response => showSuccessMessageReport(response))
        .catch(error => showErrorMessageReport(error));
})
function showLoadingIndicator() {
    hideformReport.classList.add('is-hidden');
    loading1.classList.remove('is-hidden');
}

function showSuccessMessageReport(response) {
    console.log('Success!', response);
    setTimeout(() => {
        successMessage1.classList.remove('is-hidden');
        loading1.classList.add('is-hidden');
        hideformReport.classList.add('is-hidden');

    },1000);
    setTimeout(() => {
        successMessage1.classList.add('is-hidden');
    },5000)
}

function showErrorMessageReport(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        errorMessage1.classList.remove('is-hidden');
        loading1.classList.add('is-hidden');
    },1000);
}


const editscriptURL = 'https://script.google.com/macros/s/AKfycby_UEQn0LNrCEMAp1z1EoWGqCvfJvn8i9qVX9s2vsgdlZY_Me4/exec';
const form_edit_SV  = document.forms['submit-to-google-sheet'];
const loading_edit_SV  = document.querySelector('.js-loading');
const successMessage_edit_SV  = document.querySelector('.js-success-message-edit');
const errorMessage_edit_SV  = document.querySelector('.js-error-message-edit');
const id_getInfo_profile = document.querySelector('.js-showupdate');

var get_form_sv = document.getElementById('getInfo_profile');
get_form_sv.addEventListener('submit', e => {
    e.preventDefault();
    var value_input = $("input[name=MASV]").val().length;
    if (value_input == 0) {
        alert('BẠN CẦN NHẬP MÃ SV TRA CỨU THÔNG TIN TRƯỚC KHI THỰC HIỆN THAO TÁC NÀY');
        return false;
    }
    showLoadingIndicator();
    fetch(editscriptURL, { method: 'POST', body: new FormData(form_edit_SV) })
        .then(response => showSuccessMessage_edit_SV(response))
        .catch(error => showRrrorMessage_edit_SV(error));
})

function showLoadingIndicator() {
    form_edit_SV.classList.add('is-hidden');
    loading_edit_SV.classList.remove('is-hidden');
}

function showSuccessMessage_edit_SV(response) {
    console.log('Success!', response);
    setTimeout(() => {
        successMessage_edit_SV.classList.remove('is-hidden');
        loading_edit_SV.classList.add('is-hidden');
        id_getInfo_profile.classList.add('is-hidden');

    },1000);
    setTimeout(() => {
        successMessage_edit_SV.classList.add('is-hidden');
    },5000)
}

function showRrrorMessage_edit_SV(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        errorMessage_edit_SV.classList.remove('is-hidden');
        loading_edit_SV.classList.add('is-hidden');
    },1000);
}
