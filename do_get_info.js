// Get the input field
var input = document.getElementById("inMaSV");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btnDoSV").click();
}
});

function stepGetSinhVien() {
    var masv = $.trim($("input[name='txtMaSV']").val());
    if(masv == ''){
        alert("VUI LÒNG NHẬP MÃ SINH VIÊN");
        return false;
    }
    doLoading()
    .then(doGetSinhVien)
    .then(doComplete);
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

function openUpdateThongTin() {
    // body...
    document.querySelector('.js-showupdate').classList.remove('is-hidden');
    document.querySelector('.js-showReport').classList.add('is-hidden');
    document.querySelector('.js-success-message').classList.add('is-hidden');
}

function openBaoCaoThucTap() {
    // body...
    document.querySelector('.js-showReport').classList.remove('is-hidden');
    document.querySelector('.js-showupdate').classList.add('is-hidden');
     document.querySelector('.js-success-message').classList.add('is-hidden');
    
}

function sinhVienGet() {
	$("#InfoSV").html('');
	
    var masv = $.trim($("input[name='txtMaSV']").val()).replace(/ /g,'');
    
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
                            if (name == 'sv-email')
                                $("input[name=EMAIL]").val(row[name]);
                            if (name == 'sv-sdt')
                                $("input[name=DIENTHOAI]").val(row[name]);
                            //debugger;

                            $("input[name="+name.toUpperCase()+"]").val(row[name]);

                            if (name == 'sotc' || name == 'tt' || name == 'mand' || name == 'mamh' || name == 'nhom' || name ==='congty' || name === 'diachi' || name === 'ngaybatdau' || name === 'dienthoaiquanly' || name ==='chucvu' || name === 'vitricongviec' || name.match(/tuan.*/))
                                return;                           
                            var val = [].concat(row[name]).join(' / ');
                            strText += "<td>" + val + "</td>";
                        });
                        strText += "</tr>";
                    }
                    return;
                });
                if (count == 0)
                {
                    $("#InfoSV").html('Không tìm thấy thông tin sinh viên');
                    document.querySelector('.js-showupdate').classList.add('is-hidden');
                }
                else {
                    $("#InfoSV").html(strText);
                    $("input[name=MASV]").val(masv);
                    $("input[name=MASVREPORT]").val(masv);
					//document.querySelector('.js-showupdate').classList.remove('is-hidden');
                    document.querySelector('.js-showuAction').classList.remove('is-hidden');
                    getTime();
                }
            })
            .fail(function (err) {
                console.log('error!', err);
            });
        });
    }

    //form cap nhat thong tin sinh vien
    const scriptURLCapNhatThongTin = 'https://script.google.com/macros/s/AKfycby_UEQn0LNrCEMAp1z1EoWGqCvfJvn8i9qVX9s2vsgdlZY_Me4/exec';
    const formCapNhatThongTin = document.forms['submit-to-google-sheet'];
    //form cap nhat bao cao thuc tap
    const scriptURLBaoCao = 'https://script.google.com/macros/s/AKfycbzgL12d13EvS7Hz-zjgu4BSmQ6ALMKJb0dej-uwpqf6EA50GAE/exec';
    const formBaoCao = document.forms['submit-form-report'];
    
    const loading = document.querySelector('.js-loading');
    const successMessage = document.querySelector('.js-success-message');
    const errorMessage = document.querySelector('.js-error-message');

    formCapNhatThongTin.addEventListener('submit', e => {
        e.preventDefault();
        if ($("input[name=MASV]").val() == '') {
            alert('BẠN CẦN NHẬP MÃ SV TRA CỨU THÔNG TIN TRƯỚC KHI THỰC HIỆN THAO TÁC NÀY');
            return false;
        }

        showLoadingIndicatorFormCapNhatThongTin();
        fetch(scriptURLCapNhatThongTin, { method: 'POST', body: new FormData(formCapNhatThongTin) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
    })

    formBaoCao.addEventListener('submit', e => {
        e.preventDefault();
        if ($("input[name=MASVREPORT]").val() == '') {
            alert('BẠN CẦN NHẬP MÃ SV TRA CỨU THÔNG TIN TRƯỚC KHI THỰC HIỆN THAO TÁC NÀY');
            return false;
        }

        showLoadingIndicatorBaoCao();
        debugger;
        fetch(scriptURLBaoCao, { method: 'POST', body: new FormData(formBaoCao) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
    })

    function showLoadingIndicatorFormCapNhatThongTin() {
        formCapNhatThongTin.classList.add('is-hidden');
        loading.classList.remove('is-hidden');
    }

    function showLoadingIndicatorBaoCao() {
        formBaoCao.classList.add('is-hidden');
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


    function getTime() {
        $("#getTime_").html('');
        var worksheets = [
        'Sheet3', // defaults to first worksheet without id
        '3'
        ];

        worksheets.forEach(function (worksheet) {
            $.googleSheetToJSON('1nO2nV65Vi3dZWGlaIOXLEc-_JWEZK16XFbjQVH_3Q0U', worksheet)
            .done(function (rows) {
                var ngayBatDau, soTuan, um4y;
                
                //var strText = "<table border=1>";
                var count = 0;
                rows.forEach(function (row) {
                    count++;
                    Object.getOwnPropertyNames(row).forEach(function (name) {

                        
                        if(name == 'ngaybatdau')
                            ngayBatDau = row[name];
                        else if(name == 'sotuanthuchien')
                            soTuan = row[name];
                        else if(name == 'um4y')
                            um4y = row[name];
                    });
                    return;
                });
                if (count == 0) {
                    $("#getTime_").html('Lỗi');
                } else {
                    addcontent(ngayBatDau, soTuan, um4y);
                }
            })
            .fail(function (err) {
                console.log('error!', err);
            });
        });
    }


    function addcontent(ngayBatDau, soTuan, um4y){
        var thoiGianBatDau, thoiGianKetThuc;
        var thongTinTuan;
        var danhSachTuan = [];

        var parts = ngayBatDau.split('/');
        var ngayBatDau = new Date(parts[2], parts[1] - 1, parts[0]); 
        ngayBatDau = new Date(ngayBatDau.setDate(ngayBatDau.getDate()  - 7));
        for (var i = 0; i < soTuan; i++) {
            thongTinTuan = [];
            thongTinTuan.push("Tuần " + (i + 1));
            thoiGianBatDau = new Date(ngayBatDau.setDate(ngayBatDau.getDate() + 7));
            thongTinTuan.push("Từ "+thoiGianBatDau.toLocaleDateString('vi-VN'));
            var temBD = new Date(thoiGianBatDau);
            thoiGianKetThuc = new Date(thoiGianBatDau.setDate(thoiGianBatDau.getDate() + 6));
            thongTinTuan.push("Đến "+thoiGianKetThuc.toLocaleDateString('vi-VN'));
            //them nut bam vao mang thong tin tuan
            //logic theo thoi gian hien tai
            //lay thoi gian hien tai
            //neu thoiGianBatDau <= thoi gian hien tai <= Thoi Gian Ket Thuc --> Enable, Else Disabled
            var partsTD = um4y.split('/');
            var today = new Date(partsTD[2], partsTD[1] - 1, partsTD[0]);          
            var strButton;
            if(today >= temBD && today <= thoiGianKetThuc)
            {
                strButton = "<button onclick='baocaotuan("+(i+1)+")' class='report_' >Báo cáo</button>";
                
            }
            else
                strButton = "CHƯA TỚI THỜI GIAN BÁO CÁO HOẶC ĐÃ QUÁ HẠN BÁO CÁO";
            thongTinTuan.push(strButton);
            danhSachTuan.push(thongTinTuan);
    }
    table = document.getElementById("time-report-tuan");
    table.innerHTML = "";
    for(var i = 0; i < danhSachTuan.length; i++)
    {
      var newRow = table.insertRow(table.length);
      for(var j = 0; j < danhSachTuan[i].length; j++)
      {
          var cell = newRow.insertCell(j);
          cell.innerHTML = danhSachTuan[i][j];
      }
  }
}

function baocaotuan(tuan){
        document.querySelector('.js-showNavReports').classList.remove('is-hidden');
        //them thuoc tinh tuan cho form
        $("#form-report").append("<input type='hidden' name='TUANBAOCAO' value="+tuan+" >");
        $("input[name=MSSVTUAN]").val($("input[name=MASVREPORT]").val()+"-"+tuan;
  }

  function resizeTextarea (id) {
  var a = document.getElementById(id);
  a.style.height = '110px';
  a.style.height = a.scrollHeight+'px';
}

function init() {
  var a = document.getElementsByTagName('textarea');
  for(var i=0,inb=a.length;i<inb;i++) {
     if(a[i].getAttribute('data-resizable')=='true')
      resizeTextarea(a[i].id);
  }
}

addEventListener('DOMContentLoaded', init);


//Clear contents
function clearContents(element) {
  element.value = '';
}