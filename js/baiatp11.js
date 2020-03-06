let pv = parseInt(prompt('nhap so tien ban dau muon gui'));
let n = parseInt(prompt('nhap so nam muon gui'));
let i = parseInt(prompt('Nhap lai suat ngan hang theo phan tram'));
let fv = pv * Math.pow((1 + i), n);
alert('So tien nhan duoc sau ' + i + " nam la: " + fv);