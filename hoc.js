let parent = document.querySelector(".list-data");

function random(min = 10, max = 60) {
    let numb = Math.random() * (max - min) + min
    return numb.toFixed()
}

for (let i = 1; i <= 20; i++) {
    let duration = `${random()}:${random()}`
    let text = 'JAVASCRIPT LANJUTAN dengan durasi ';
    let arr = [4,5,7,2,5,9,11,3, 19, 15]
    let color = 'red';
    if(!arr.includes(i)) {
        text = 'Video lain dengan durasi '
        color = 'black'
    }
//    parent.innerHTML += `<li style="color:${color}" data-duration="${duration}"> ${text + duration}</li>`;
}

const listData = Array.from(document.querySelectorAll('li'));
let listJSLanjutan = listData.filter(item => item.textContent.includes('JAVASCRIPT'))
.map(jslanjutan => {
    let [menit, detik] = jslanjutan.dataset.duration.split(':');
    let minutesToSecond = +(menit * 60) + +detik;
    return +minutesToSecond
})
.reduce((acc, curr) => acc + curr)
const hours = Math.floor(listJSLanjutan / 3600);
listJSLanjutan = listJSLanjutan - hours * 3600;
const minutes = Math.floor(listJSLanjutan / 60);
listJSLanjutan = listJSLanjutan - minutes * 60;
const seconds = Math.floor(listJSLanjutan);

const totalTime = `${hours} Jam : ${minutes} Menit : ${seconds} Detik`;

document.querySelector('#duration').textContent = totalTime;
document.querySelector('#sumvid').textContent = listData.filter(item => item.textContent.includes('JAVASCRIPT')).length + ' Video';
