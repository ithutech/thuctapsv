function stepGetSinhVien() {
    var masv = $.trim($("input[name='txtMaSV']").val());
    if(masv == ''){
        alert("VUI LÒNG NHẬP MÃ SINH VIÊN");
        return false;
    }
    doLoading()
        .then(doGetSinhVien)
        .then(doComplete)
        .then(doShowUpdate);
}
function doLoading() {
    return new Promise(function (resolve, reject) {
        document.querySelector('.js-loading').classList.remove('is-hidden');
        resolve();
    });
}
function doGetSinhVien() {
    return new Promise(function (resolve, reject) {
        sinhVienGet()
        resolve();
    });
}

function doComplete() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            document.querySelector('.js-loading').classList.add('is-hidden');
        },1000);
        resolve();
    });
}

function doShowUpdate() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            document.querySelector('.js-showupdate').classList.remove('is-hidden');
        },1000);
        resolve();
    });
}

function sinhVienGet() {
    var masv = $.trim($("input[name='txtMaSV']").val());
    
    var worksheets = [
        '', // defaults to first worksheet without id
        'ouab0ad'];

    worksheets.forEach(function (worksheet) {
        $.googleSheetToJSON('1nO2nV65Vi3dZWGlaIOXLEc-_JWEZK16XFbjQVH_3Q0U', worksheet)
            .done(function (rows) {
                var strText = "<table border=1>";
                var strText = "<table class='dtable'>";
                strText += "<tr> <th>SĐT Giảng Viên</th>  <th>Email GV</th>  <th>Tên GV</th>  <th>Tên SV</th>  <th>Lớp</th> <th>Mã SV</th>  <th>Ngành</th>  <th>Ngày sinh</th>  <th>Email SV</th>  <th>Số ĐT </th>  <th>Môn Học</th> ";
                var count = 0;
                rows.forEach(function (row) {
                    var strMaSV = row['masv'];
                    if (strMaSV == masv) {
                        count++;
                        strText += "<tr>";
                        Object.getOwnPropertyNames(row).forEach(function (name) {
                            if (name == 'sotc' || name == 'tt' || name == 'mand' || name == 'mamh' || name == 'nhom')
                                return;
                            if (name == 'sv-email')
                                $("input[name=EMAIL]").val(row[name]);
                            if (name == 'sv-sdt')
                                $("input[name=DIENTHOAI]").val(row[name]);
                            var val = [].concat(row[name]).join(' / ');
                            strText += "<td>" + val + "</td>";
                        });
                        strText += "</tr>";
                    }
                    return;
                });
                if (count == 0)
                    $("#InfoSV").html('Không tìm thấy thông tin');
                else {
                    $("#InfoSV").html(strText);
                    $("input[name=MASV]").val(masv);
                }
            })
            .fail(function (err) {
                console.log('error!', err);
            });
    });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby_UEQn0LNrCEMAp1z1EoWGqCvfJvn8i9qVX9s2vsgdlZY_Me4/exec';
const form = document.forms['submit-to-google-sheet'];
const loading = document.querySelector('.js-loading');
const successMessage = document.querySelector('.js-success-message');
const errorMessage = document.querySelector('.js-error-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    if ($("input[name=MASV]").val() == '') {
        alert('BẠN CẦN NHẬP MÃ SV TRA CỨU THÔNG TIN TRƯỚC KHI THỰC HIỆN THAO TÁC NÀY');
        return false;
    }

    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
    form.classList.add('is-hidden');
    loading.classList.remove('is-hidden');
}

function showSuccessMessage(response) {
    console.log('Success!', response);
    setTimeout(() => {
        successMessage.classList.remove('is-hidden');
        loading.classList.add('is-hidden');
    },1000);
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        errorMessage.classList.remove('is-hidden');
        loading.classList.add('is-hidden');
    },1000);
}