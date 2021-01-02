const hitungUangKembalian = (param1, param2) => {
	let kembalian = param1 - param2
	if(kembalian <= 1000){
		let seRatus = Math.floor(kembalian / 100)
		return console.log(
			`Uang pecahan Rp. 100 sebanyak ${seRatus} buah.
			Kembalian: ${kembalian}`) 
	} else if(kembalian < 10000){
		let seRibu = Math.floor(kembalian / 1000)
		let seRatus = Math.floor((kembalian - seRibu * 1000) / 100)
		return console.log(
			`Uang pecahan Rp. 1000 sebanyak ${seRibu} lembar.
			Uang pecahan Rp. 100 sebanyak ${seRatus} buah.
			Kembalian: ${kembalian}`)
	} else{
		let sepuluhRibu = Math.floor(kembalian / 10000)
		let seRibu = Math.floor((kembalian - 10000 * sepuluhRibu) / 1000)
		let seRatus = Math.floor((kembalian - (sepuluhRibu * 10000 + seRibu * 1000)) / 100)
		return console.log(
			`Uang pecahan Rp. 10000 sebanyak ${sepuluhRibu} lembar.
			Uang pecahan Rp. 1000 sebanyak ${seRibu} lembar.
			Uang pecahan Rp. 100 sebanyak ${seRatus} buah.
			Kembalian: ${kembalian}`)
	}
}
hitungUangKembalian(15000,11500)
