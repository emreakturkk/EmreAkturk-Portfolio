// Fonksiyonu tanımladık, butona basınca bu çalışacak
function rollDice() {
    
    // 1. Zarları Seç
    var dice1 = document.querySelectorAll("img")[0];
    var dice2 = document.querySelectorAll("img")[1];

    // 2. Animasyon Sınıfını Ekle (Sallanmaya başlasın)
    dice1.classList.add("shake");
    dice2.classList.add("shake");

    // 3. Yarım Saniye (500ms) Bekle, Sonra Sonucu Göster
    setTimeout(function() {
        
        // --- 1. ZAR HESAPLAMA ---
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource = "images/dice" + randomNumber1 + ".png";
        dice1.setAttribute("src", randomImageSource);

        // --- 2. ZAR HESAPLAMA ---
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        dice2.setAttribute("src", randomImageSource2);

        // --- KAZANANI BELİRLE ---
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        }
        else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        }
        else {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        // 4. Animasyon Sınıfını Kaldır (Ki tekrar basınca çalışsın)
        dice1.classList.remove("shake");
        dice2.classList.remove("shake");

    }, 500); // 500 milisaniye gecikme
}