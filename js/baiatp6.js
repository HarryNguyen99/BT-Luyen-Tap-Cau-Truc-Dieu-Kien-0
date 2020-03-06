let a = parseInt(prompt('nhap a'));
let b = parseInt(prompt('nhap b'));
if (a == 0) {
    if (b == 0) {
        alert('Phuong trinh vo so nghiem')
    } else {
        alert('Phuong trinh vo nghiem');
    }
} else {
    let c = -b / a;
    alert('Phuong trinh co nghiem la: ' + c);
}
;