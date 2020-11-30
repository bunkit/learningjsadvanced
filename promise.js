const run = true;
const product = new Promise((resolve, reject) => {
    if (run) {
        setTimeout(() => {
            resolve([{
                name: 'Macbook pro 2022',
                price: 'Rp 32.000.000',
                spec: {
                    ram: '32GB',
                    size: '20 inch',
                    chipset: 'Apple M2'
                }
            }])
        }, 1000)
    }
    else {
        setTimeout(() => {
            reject([{
                status: 'Not Run',
            }])
        }, 100)
    }
})
const productDetail = new Promise((resolve, reject) => {
    if (run) {
        setTimeout(() => {
            resolve([{
                name: 'Macbook pro 2022',
                price: 'Rp 32.000.000',
                desc: "Nostrud dolor sit ullamco ipsum tempor. Lorem excepteur sit labore amet ad elit Lorem aliquip amet consequat cillum eiusmod voluptate adipisicing. Culpa reprehenderit deserunt adipisicing sint officia Lorem proident consequat fugiat reprehenderit nostrud aute culpa elit. Magna eiusmod adipisicing ipsum laboris deserunt. Nostrud velit ea sunt non minim esse labore dolor ut sit culpa nulla occaecat. Do ea ut id sit dolore ad occaecat deserunt ea tempor. Aliqua voluptate magna voluptate magna consequat consequat proident reprehenderit minim. Adipisicing sunt sit incididunt ut ullamco duis veniam Lorem ad. Lorem irure ullamco consequat ea ut voluptate anim elit sint ea consequat incididunt. Id fugiat esse exercitation minim sunt mollit exercitation ad ipsum aliqua aliqua fugiat nostrud pariatur. Nisi nisi labore laborum consequat excepteur dolore minim consequat aliqua commodo adipisicing sint irure Lorem. Eiusmod incididunt id deserunt ut duis id. Labore commodo nisi et minim fugiat sunt est adipisicing in deserunt cupidatat mollit minim. Cillum non labore officia veniam occaecat voluptate aliqua.",
                spec: {
                    ram: '32GB',
                    size: '20 inch',
                    chipset: 'Apple M2'
                }
            }])
        }, 1000)
    }
    else {
        setTimeout(() => {
            reject([{
                status: 'Not Run',
            }])
        }, 100)
    }
})


product
    .then(res => console.log(res))
    .catch(err => console.log(err))

Promise.all([product, productDetail])
    .then(res => {
        const [prod, detail] = res
        console.log(prod)
        console.log(detail)
    })


const tryPromise = (time) => {
    return new Promise((res, rej) => {
        if (time <= 90000) {
            setTimeout(() => {
                res('Complete')
            }, time)
        } else {
            rej('To loong')
        }
    })
}

const tryAsync = async () => {
    try {
        const test = await tryPromise(8000)
        console.log(test)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('tesst')
    }
}
