let a = parseInt(prompt('nhap a'));
let b = parseInt(prompt('nhap b'));
let c = parseInt(prompt('nhap c'));
if (a > 0 && b > 0 && c > 0 && (a + b) > c && (b + c) > a && (a + c) > b) {
    alert('Ba so tren la canh cua mot tam giac');
} else {
    alert('Ba so tren khong phai la canh cua mot tam giac');
}