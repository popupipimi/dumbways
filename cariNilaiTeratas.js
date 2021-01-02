function cariNilaiTeratas(arr){
	let hilangkanDuplikat = new Set(arr)
	let jadikanArray = [...hilangkanDuplikat]
	let sortirArray = jadikanArray.sort(function(a, b){return a - b})
	let hasil = ''
	let pertama = 'pertama'
	for(let i = sortirArray.length - 1; i >= sortirArray.length - 3; i--){
		if(i === sortirArray.length - 1){
			hasil += `Nilai tertinggi pertama : ${sortirArray[i]}\n`
		} else if(i === sortirArray.length - 2){
			hasil += `Nilai tertinggi kedua : ${sortirArray[i]}\n`
		} else if(i === sortirArray.length - 3){
			hasil += `Nilai tertinggi ketiga : ${sortirArray[i]}\n`
		}
	}
	return console.log(hasil)
}
cariNilaiTeratas([1,4,6,2,6,8,9,21,20,14,3,6,11,1,1,2,3,4,6,8,9,2,1,5,2,5,6,8,3,2])
