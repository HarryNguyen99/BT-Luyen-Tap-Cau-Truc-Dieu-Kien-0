let kw = parseInt(prompt('Nhap so kw tieu thu trong thang'));
if (kw <= 50) {
    money = kw * 1678;
} else {
    if (kw <= 100) {
        money = 50 * 1678 + (kw - 100) * 1734;
    } else {
        if (kw <= 200) {
            money = 50 * 1678 + 50 * 1734 + (kw * 2014);
        } else {
            if (kw <= 300) {
                money = 50 - 1678 + 50 * 1734 + 100 * 2014 + (kw - 200) * 2536;
            } else {
                if (kw <= 400) {
                    money = 50 - 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kw - 300) * 2834;
                } else {
                    money = 50 - 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kw - 400) * 2461;
                }
            }
        }
    }
}
alert('so tien dien phai tra la: ' + money);