const keyword = 'Macbook';
const price = "Rp 400 000";
const destination = "Bekasi";
const courier = 'JNE';

const search = (string, ...arguments) => {
    return `<div>${string.reduce((result, str, i) => `${result}${str}<span>${arguments[i] || ''}</span>`, '')}</div>`
}
const str = search`You are searching for product ${keyword} start from ${price} ship to ${destination} with courier ${courier}`;

document.body.innerHTML += str


