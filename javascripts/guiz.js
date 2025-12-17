function checkAnswer(inputId, correctAnswer, feedbackId) {
    // Kullanıcının girdiği cevabı al
    var input = document.getElementById(inputId);
    var feedback = document.getElementById(feedbackId);
    var userVal = input.value.trim(); // Boşlukları temizle

    // Cevabı kontrol et
    if (userVal == correctAnswer) {
        feedback.innerHTML = "✅ <b>Doğru!</b> Harika gidiyorsun.";
        feedback.style.color = "#00c853"; // Yeşil renk
        feedback.style.fontWeight = "bold";
    } else {
        feedback.innerHTML = "❌ <b>Yanlış.</b> Aşağıdaki 'Çözümü Göster' butonuna tıklayarak adımları incele.";
        feedback.style.color = "#d50000"; // Kırmızı renk
    }
}