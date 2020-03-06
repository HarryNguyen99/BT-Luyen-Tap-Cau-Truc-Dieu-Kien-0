let age = parseInt(prompt('Nhap so tuoi'));
if (Number.isInteger(age) && age > 0 && age < 120) {
    alert('Day la so tuoi cua mot nguoi');
} else {
    alert('Day khong phai la so tuoi cua mot nguoi');
}
