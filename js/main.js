var countDownDate = new Date("Apr 28, 2019 23:59:59").getTime();
var tuan = 7 * 1000 * 60 * 60 * 24;


// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceTuan1 = countDownDate - now;
  var distanceTuan2 = countDownDate + tuan  - now;
  var distanceTuan3 = countDownDate + tuan*2 - now;
  var distanceTuan4 = countDownDate + tuan*3 - now;
  var distanceTuan5 = countDownDate + tuan*4 - now;
  var distanceTuan6 = countDownDate + tuan*5 - now;
  var distanceTuan7 = countDownDate + tuan*6 - now;
  var distanceTuan8 = countDownDate + tuan*7 - now;
  var distanceTuan9 = countDownDate + tuan*8 - now;
  var distanceTuan10 = countDownDate + tuan*9 - now;
  
  var cactuan = ["tuan1","tuan2","tuan3","tuan4","tuan5","tuan6","tuan7","tuan8","tuan9","tuan10"]
  if (distanceTuan1 < 0) {
    clearInterval(x);
    document.getElementById("tuan1").disabled  = true;
    document.getElementById("tuan1").innerHTML  = "Hết hạn";
  }
  else
  { 
    // if(distanceTuan1 < now)
    // {
    //   document.getElementById("tuan1").disabled  = false;         
    //   document.getElementById("tuan1").innerHTML  = "Chưa mở";

    // }
      for(var i = 0; i<cactuan.length ; i++)
      {
        document.getElementById(cactuan[i+1]).disabled = true;
        document.getElementById(cactuan[i+1]).innerHTML = "Chưa mở";
      }
  }
  
  if (distanceTuan2 < 0) {
    clearInterval(x);
    document.getElementById("tuan2").disabled  = true;
    document.getElementById("tuan2").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan2").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+2]).disabled = true;
      document.getElementById(cactuan[i+2]).innerHTML = "Chưa mở";

    }
  }
  
  if (distanceTuan3 < 0) {
    clearInterval(x);
    document.getElementById("tuan3").disabled  = true;
    document.getElementById("tuan3").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan3").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+3]).disabled = true;
      document.getElementById(cactuan[i+3]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan4 < 0) {
    clearInterval(x);
    document.getElementById("tuan4").disabled  = true;
    document.getElementById("tuan4").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan4").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+4]).disabled = true;
      document.getElementById(cactuan[i+4]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan5 < 0) {
    clearInterval(x);
    document.getElementById("tuan5").disabled  = true;
    document.getElementById("tuan5").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan5").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+5]).disabled = true;
      document.getElementById(cactuan[i+5]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan6 < 0) {
    clearInterval(x);
    document.getElementById("tuan6").disabled  = true;
    document.getElementById("tuan6").innerHTML  = "Hết hạn";

  }
  else
  {   
     document.getElementById("tuan6").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+6]).disabled = true;
      document.getElementById(cactuan[i+6]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan7 < 0) {
    clearInterval(x);
    document.getElementById("tuan7").disabled  = true;
    document.getElementById("tuan7").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan7").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+7]).disabled = true;
      document.getElementById(cactuan[i+7]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan8 < 0) {
    clearInterval(x);
    document.getElementById("tuan8").disabled  = true;
    document.getElementById("tuan8").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan8").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+8]).disabled = true;
      document.getElementById(cactuan[i+8]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan9 < 0) {
    clearInterval(x);
    document.getElementById("tuan9").disabled  = true;
    document.getElementById("tuan9").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById("tuan9").disabled  = false;

    for(var i = 0; i<cactuan.length ; i++)
    {
      document.getElementById(cactuan[i+9]).disabled = true;
      document.getElementById(cactuan[i+9]).innerHTML = "Chưa mở";

    }
  }
  if (distanceTuan10 < 0) {
    clearInterval(x);
    document.getElementById("tuan10").disabled  = true;
    document.getElementById("tuan10").innerHTML  = "Hết hạn";

  }
  else
  {
    document.getElementById(cactuan[i+9]).disabled = false;
  }
}, 1000);

// Report base on week 
function baocaotuan(){
  document.querySelector('.js-showNavReports').classList.remove('is-hidden');


}
window.onload = addcontent();
function addcontent(){
  var array = [["Tuần 1 ","Thời gian: <strong>Ngày 22/04 -> 28/04 23:59:59</strong>"],
  ["Tuần 2 ","Thời gian: <strong>Ngày 29/04 -> 05/05 23:59:59</strong>"],
  ["Tuần 3 ","Thời gian: <strong>Ngày 06/05 -> 12/05 23:59:59</strong>"],
  ["Tuần 4","Thời gian: <strong>Ngày 13/05 ->  19/05 23:59:59</strong>"],
  ["Tuần 5","Thời gian: <strong>Ngày 20/05 -> 26/05 23:59:59</strong>"],
  ["Tuần 6","Thời gian: <strong>Ngày 27/05 -> 02/06 23:59:59</strong>"],
  ["Tuần 7","Thời gian: <strong>Ngày 03/06 -> 06/06 23:59:59</strong>"],
  ["Tuần 8","Thời gian: <strong>Ngày 07/06 -> 13/06 23:59:59</strong>"],
  ["Tuần 9","Thời gian: <strong>Ngày 14/06 -> 20/06 23:59:59</strong>"],
  ["Tuần 10","Thời gian: <strong>Ngày 21/06 -> 27/06 23:59:59</strong>"]],
  table = document.getElementById("time-report-tuan");
  for(var i = 0; i < array.length; i++)
  {
      // create a new row
      var newRow = table.insertRow(table.length);
      for(var j = 0; j < array[i].length; j++)
      {
          // create a new cell
          var cell = newRow.insertCell(j);
          
          // add value to the cell
          cell.innerHTML = array[i][j];
      }
  }
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

