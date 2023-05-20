const wage = 100000;
function tinhTienLuong() {
    var workDay = document.getElementById('workDay').value*1,
        income = 0;

        income = workDay * wage;
        document.getElementById('outcome-1').innerHTML = 'Tiền lương nhân viên: ' + income.toLocaleString();
        
}

document.querySelector('.income button').onclick = function() {tinhTienLuong()};

function averageCalc() {
var realNumber1 = document.getElementById('realNum1').value*1,
    realNumber2 = document.getElementById('realNum2').value*1,
    realNumber3 = document.getElementById('realNum3').value*1,
    realNumber4 = document.getElementById('realNum4').value*1,
    realNumber5 = document.getElementById('realNum5').value*1,
    average = 0;

    average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5)/5;

    document.getElementById('outcome-2').innerHTML = 'Giá trị trung bình: ' + average;
}

document.querySelector('.average button').onclick = function() {averageCalc()}

const vndPrice = 23500;
function transferMoney() {
    var USD = document.getElementById('USD').value*1,
        convVND = 0;

        convVND = USD * vndPrice;
    
    document.getElementById('VND').value = convVND;
}

document.querySelector('.transfer button').onclick = function() {transferMoney()}

function rectangleCalc() {
var longs = document.getElementById('longs').value*1,
    width = document.getElementById('width').value*1,
    acreage = 0,
    perimeter = 0;

    acreage = longs * width;
    perimeter = (longs + width)*2;

    document.getElementById('acreage').innerHTML = 'Diện tích hình chữ nhật là: ' + acreage;
    document.getElementById('perimeter').innerHTML = 'Chu vi hình chữ nhật là: ' + perimeter;
}

document.querySelector('.rectangle button').onclick = function() {rectangleCalc()}

function sumCalc() {
var number = document.getElementById('number').value*1,
    tens = 0,
    ones = 0,
    sum = 0;

    tens = Math.floor(number/10);
    ones = number%10;
    sum = tens + ones;

    document.getElementById('outcome-5').innerHTML = 'Tổng 2 ký số là: ' + sum;
}

document.querySelector('.sum-num button').onclick = function() {sumCalc()}

