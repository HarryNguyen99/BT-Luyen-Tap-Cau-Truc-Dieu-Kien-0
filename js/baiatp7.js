let a = parseInt(prompt('nhap a'));
let b = parseInt(prompt('nhap b'));
let c = parseInt(prompt('nhap c'));
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh vo so nghiem');
        } else {
            alert('Phuong trinh vo nghiem');
        }
    } else {
        let x = -c / b;
        alert('Phuong trinh co nghiem la: ' + x);
    }
} else {
    delta = b * b - 4 * a * c
    if (delta < 0) {
        alert('Phuong trinh vo nghiem');
    } else {
        if (delta == 0) {
            let x = -b / (2 * a);
            alert('Phuong trinh co 2 nghiem trung nhau:' + x)
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (b + Math.sqrt(delta)) / (2 * a);
            alert('Phuong trinh co 2 nghiem la: ' + "x1 = " + x1 + '; x2 = ' + x2);
        }
    }
}