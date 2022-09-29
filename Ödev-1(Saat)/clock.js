let firstName = prompt("İsminiz Nedir?")  // Bu kısımda prompt ile kullanıcı ismini aldık.
let myName = document.querySelector("#myName") // myName değişkeni yaratarak document ile html dosyamızda bulunan #myName id'li elemanımıza ulaştık.
myName.innerHTML = firstName // firstname değişkenimiz ile kullanıcıdan aldığımız ismi myName aktardık

function showTime() {     // setInterval methodu için bütün bu işlemi bir fonksiyon içerine aldık bunun nedeni sn olarak yenilenme yapabilmek.
  const today = new Date();    // yeni bir date formatı oluşturduk.
  let h = today.getHours();    // tarihleri formatlamak için saat, dakika, saniye ve gün değişkenlerini oluşturarak date formatındaki karşılıklarını bu değişkenlere atadık.
  let m = today.getMinutes(); 
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("myClock").innerHTML = h+":"+m+":"+s;
  setTimeout(showTime,1000);   // setInterval methodu kullanarak saatimizin 1sn'de bir yenilenmesini sağladık. //Not : 1000 = 1sn
}

function checkTime(i) {
  if(i < 10) {
    i = "0" + i
  }
  return i;
}
showTime()