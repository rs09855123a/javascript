/*const PI = 3.1415926;
        let radius = prompt('輸入半徑:')
        console.log(radius + 10);
        let area = radius ** 2 * PI;
        console.log(typeof (radius), area)*/
/*email = 'jerry@gmail.com';
for (let i = 0; i < email.length; i++) {
    console.log(email[i])
}
console.log(email[email.length - 1]);
console.log(email.toUpperCase());
console.log('A' > 'a');  //ascii 10進制 65>97 false
console.log('25' == 25);  // 值一致
console.log('25' === 25);  // 值跟型態一致  */
/*x = 20
y = 30
z = 10
if (x > y && x > z) {
    console.log(1)
}
if (x > y || x > z) {
    console.log(2)
}
if (!(x > y) && x > z) {
    console.log(3)
}*/
/*console.log(Math);
console.log(Math.random());  //0~0.9999...
console.log(Math.random() * 10);  //0~9.99999...
console.log(Math.floor(Math.random() * 10));  //0~9
console.log(Math.floor(Math.random() * 10) + 1);  //1~10
while (true) {
    let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    console.log(number);
    if (number == 100) {
        break;
    }
}*/
/*const start = 1;
const end = 49;

for (let i = 0; i < 10; i++) {
    console.log(`第${i + 1}次開獎:`);
    let lotto_str = '';
    for (let j = 0; j < 6; j++) {
        let number = Math.floor(Math.random() * (end - start + 1)) + start;
        let lotto = `第${j + 1}個號碼:${number}`;
        console.log(lotto)
        document.write(`<h2>第${j + 1}個號碼:${number}</h2>`)
        lotto_str += number + ' ';

    } console.log(lotto_str);
}*/
// const start = 1;
// const end = 49;
// let lotto_str = '<ul>';
// for (let i = 0; i < 5; i++) {
//     //console.log(`第${i + 1}次開獎:`);
//     let lotto = '';
//     for (let j = 0; j < 6; j++) {
//         let number = Math.floor(Math.random() * (end - start + 1)) + start;
//         //let lotto = `第${j + 1}個號碼:${number}`;
//         console.log(lotto)
//         //document.write(`<h2>第${j + 1}個號碼:${number}</h2>`)
//         lotto += number + ' ';

//     } //document.write(lotto);
//     lotto_str += `<li>${lotto}</li>`;
// }
// lotto_str += '</ul>';
// document.write(lotto_str);
// 20
// let students = [
//     ['jerry', 78, 67, 89],
//     ['mary', 100, 99, 88],
//     ['kevin', 77, 99, 77],
// ];
//for (i = 0; i < students.length; i++) {
//const scores = students[i].slice(1, students[i].length);
//console.log(scores);
//let total = [];
//for (j = 0; j = students[i].length; j++) {
//total.join(scores);
//console.log(total);
//}
/*for (j = 0; j < students[i].length; j++) {
    document.write(students[i][j] + '  ');

}*/
//}

const title = document.querySelector('h1');
title.innerText = '大樂透號碼';
const subtitle = document.querySelector('h3');
subtitle.innerHTML = `<h2>${subtitle.innerText}即將開獎</h2>`
const text = document.querySelector('.text')
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
    console.log('click')
    const start = 1;
    const end = 49;
    text.innerText = getLottoNumber(start, end, 6, true);
})

const get_lotto_number = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
function getLottoNumber(start, end, count, special = false) {
    lotto = [];
    let counts = 0;
    do {
        let number = get_lotto_number(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            counts++;
        }

    } while (lotto.length < count);


    // for (i = 0; i < count; i++) {
    //     let number = Math.floor(Math.random() * (end - start + 1)) + start;
    //     lotto.push(number);
    // }
    let specialnumber = Math.floor(Math.random() * (end - start + 1)) + start;
    lotto.push(specialnumber);

    return lotto;
}
// const start = 1;
// const end = 49;
// document.write(getLottoNumber(start, end, 6, true));

// function getbmi(height, weight, point = 2) {
//     let bmi = (weight / ((height / 100) ** 2)).toFixed(point);
//     return bmi;
// }
// console.log(getbmi(178, 78, 3))

// const get_bmi = (height, weight, point = 2) => (weight / ((height / 100) ** 2)).toFixed(point);
// console.log(get_bmi(178, 78))
