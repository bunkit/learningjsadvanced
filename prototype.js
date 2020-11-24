class Tabungan {
    constructor(akun, saldo) {
        this.akun = akun;
        this.saldo = saldo;
    }
    currency(numb) {
       return new Intl.NumberFormat().format(numb)
    }
    simpan(dana) {
        this.saldo += dana;
        return `Halo ${this.akun}, Anda baru saja menyimpan dana sejumlah ${this.currency(dana)}`;
    }
    
    tarik(dana) {
        this.saldo += dana;
        return `Halo ${this.akun}, Anda baru saja menarik dana sejumlah ${this.currency(dana)}`;
    }
    
    total() {
        return `Halo ${this.akun}, Saldo anda adalah ${this.currency(this.saldo)}`;
    }
}


// let rozaq = new Tabungan('Rozaq', 7000);
// console.log(rozaq.simpan(80000));
// console.log(rozaq.total())

( an  => {
    console.log('sasd');
})()
