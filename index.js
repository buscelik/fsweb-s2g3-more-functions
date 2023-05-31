// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  if (path.includes("/")) {
    const parts = path.split("/");
    return parts[parts.length - 1];
  } else {
    return path;
  }
}

console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3")); // "Beethoven_5.mp3"
console.log(dosyaAdiniBul("Beethoven_5.mp3")); // "Beethoven_5.mp3"
console.log(dosyaAdiniBul("")); // ""

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(arr) {
  if (arr.length === 0) {
    return null;
  }

  const ortalama = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;

  return ortalama;
}

console.log(ortalamaBul([])); // null
console.log(ortalamaBul([4])); // 4
console.log(ortalamaBul([50, -26, 153, 7])); // 46
console.log(ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5])); // 104

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arr) {
  const ortalama = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;

  const buyukElemanlar = arr.reduce((accumulator, currentValue) => {
    if (currentValue >= ortalama) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return buyukElemanlar.length === 0 ? null : buyukElemanlar;
}

console.log(ortalamadanBuyukleriBul([])); // null
console.log(ortalamadanBuyukleriBul([4])); // [4]
console.log(ortalamadanBuyukleriBul([50, -26, 153, 7])); // [50, 153]
console.log(ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5])); // [109, 216, 288, 143, 185, 194]


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
