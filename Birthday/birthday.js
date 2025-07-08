document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const namaInput = params.get("name");
    const audio = document.getElementById("bgMusic");
    const btn = document.getElementById("tiupLilinBtn");
    
    document.getElementById("birthday-title").innerText = `🎉 Happy Birthday, ${namaInput}! 🎂`;
    document.getElementById("blowCandleBtn").addEventListener("click", tiupLilin);

    const kejutanButton = document.getElementById("kejutanButton");
    const kejutanOutput = document.getElementById("kejutanOutput");
    const cakeContainer = document.getElementById("cakeContainer");
    const birthdayCake = document.getElementById("birthdayCake");
    const fireworksContainer = document.getElementById("fireworksContainer");
    const blowCandleBtn = document.getElementById("blowCandleBtn");

    if (!localStorage.getItem("hasLoaded")) {
        localStorage.setItem("hasLoaded", "true"); // Set ini agar loading tidak muncul lagi
    }    

    function playAudio() {
        audio.play().catch(error => {
            console.log("Autoplay gagal, perlu interaksi pengguna terlebih dahulu.", error);
        });
    }

    playAudio();
    document.body.addEventListener("click", playAudio, { once: true });
    
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    var title = document.getElementById("fromME");
    var textDiv = document.getElementById("fromMe");
    title.addEventListener("click", function () {
        textDiv.classList.toggle("show");

        if (textDiv.classList.contains("show")) {
            textDiv.style.display = "block";
            setTimeout(() => {
                textDiv.style.opacity = "1"; // Animasi fade in
            }, 10);
        } else {
            textDiv.style.opacity = "0"; // Animasi fade out
            setTimeout(() => {
                textDiv.style.display = "none";
            }, 500); // Delay biar efek fade out selesai dulu
        }
    });

    function animateYear() {
        let yearElement = document.getElementById("yearAnimation");
        let startYear = 2005;
        let endYear = 2025;
        let delay = 400;
        let currentYear = startYear;

        function typeYear() {
            if (currentYear <= endYear) {
                yearElement.textContent = currentYear;
                currentYear++;
                setTimeout(typeYear, delay);
            }
        }
        typeYear();
    }

    function checkYearScroll() {
        let yearSection = document.getElementById("yearAnimation").parentElement;
        if (isElementInViewport(yearSection)) {
            animateYear();
            window.removeEventListener("scroll", checkYearScroll);
        }
    }

    window.addEventListener("scroll", checkYearScroll);

    function updateTotalTime() {
        let birthDate = new Date("2005-07-09T00:00:00");

        function calculateTimeDiff() {
            let now = new Date();
            let diff = now - birthDate;

            return {
                detik: Math.floor(diff / 1000),
                menit: Math.floor(diff / (1000 * 60)),
                jam: Math.floor(diff / (1000 * 60 * 60)),
                hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
                minggu: Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
                bulan: Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)),
                tahun: Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
            };
        }

        function animateCount(id, targetValue, duration, callback) {
            let startValue = 0;
            let step = Math.ceil(targetValue / (duration / 10));
            let counter = setInterval(() => {
                startValue += step;
                if (startValue >= targetValue) {
                    startValue = targetValue;
                    clearInterval(counter);
                    if (callback) callback();
                }
                document.getElementById(id).textContent = `${startValue.toLocaleString("id-ID")} ${id}`;

            }, 50);
        }

        let timeData = calculateTimeDiff();
        animateCount("detik", timeData.detik, 5000, startRealTimeUpdate);
        animateCount("menit", timeData.menit, 5000);
        animateCount("jam", timeData.jam, 5000);
        animateCount("hari", timeData.hari, 5000);
        animateCount("minggu", timeData.minggu, 5000);
        animateCount("bulan", timeData.bulan, 50000);
        animateCount("tahun", timeData.tahun, 50000);

        function startRealTimeUpdate() {
            setInterval(() => {
                let updatedTime = calculateTimeDiff();
                document.getElementById("detik").textContent = `${updatedTime.detik.toLocaleString("id-ID")} detik`;
                document.getElementById("menit").textContent = `${updatedTime.menit.toLocaleString("id-ID")} menit`;
                document.getElementById("jam").textContent = `${updatedTime.jam.toLocaleString("id-ID")} jam`;
                document.getElementById("hari").textContent = `${updatedTime.hari.toLocaleString("id-ID")} hari`;
                document.getElementById("minggu").textContent = `${updatedTime.minggu.toLocaleString("id-ID")} minggu`;
                document.getElementById("bulan").textContent = `${updatedTime.bulan.toLocaleString("id-ID")} bulan`;
                document.getElementById("tahun").textContent = `${updatedTime.tahun.toLocaleString("id-ID")} tahun`;
            }, 1000);
        }
    }

    function checkScroll() {
        let timeSection = document.getElementById("timeSection");

        if (isElementInViewport(timeSection)) {
            updateTotalTime();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    //Slideshow otomatis
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
    }

    showSlides();

    window.addEventListener("scroll", checkScroll);

    document.getElementById("funFactButton").addEventListener("click", tampilkanFunFact);
    function tampilkanFunFact() {
        const funFacts = [
            "Argentina mendeklarasikan kemerdekaannya dari Spanyol pada tanggal 9 Juli 1816.",
            "Amerika Serikat secara resmi mencaplok Hawaii pada tanggal 9 Juli 1898, setelah digulingkannya Kerajaan Hawaii.",
            "Pada tanggal 9 Juli 1945, legenda bisbol Amerika Joe DiMaggio mencetak home run-nya yang ke-20 pada musim itu. Ia terus menambah jumlah home run hingga pensiun pada tahun 1951, dengan total 361 home run sepanjang kariernya yang mengagumkan.",
            "Pada tanggal 9 Juli 1981, Donkey Kong dirilis di Jepang. Game populer ini menandai kemunculan pertama karakter video game ikonik Mario dan meluncurkan karier sukses bagi kreator game tersebut, Shigeru Miyamoto, dan Nintendo.",
            "Hari Kue Gula Nasional dirayakan di Amerika Serikat pada tanggal 9 Juli. ",
            "Pada tanggal 9 Juli 1947, pemerintah Inggris mengumumkan pertunangan Putri Elizabeth dan Letnan Philip Mountbatten. Pasangan itu menikah pada bulan November tahun itu, dan mereka menjadi calon Ratu Elizabeth II dari Inggris Raya dan Pangeran Philip, Adipati Edinburgh.",
            "Aktor Amerika terkenal Tom Hanks lahir pada tanggal 9 Juli 1956. Hanks adalah aktor peraih banyak Oscar yang dikenal karena perannya dalam film populer seperti 'Forrest Gump,' 'Philadelphia,' dan 'Saving Private Ryan.",
            "Pada tanggal 9 Juli 1979, Voyager 2, wahana antariksa yang diluncurkan oleh NASA untuk mempelajari planet-planet luar Tata Surya",
            "Di Sudan Selatan, tanggal 9 Juli diperingati sebagai Hari Kemerdekaan.",
            "Penemu dan pengusaha, Nikola Tesla, lahir pada tanggal 9 Juli 1856. anjaayyy ultahnya bareng bang nikol",
            "Tanggal 9 Juli 1948 menandai penggunaan pertama istilah 'rock and roll' yang tercatat oleh DJ berpengaruh Alan Freed.",
            "Hari Nasional Belgia jatuh pada tanggal 9 Juli, untuk memperingati pelantikan Raja Leopold I pada hari ini di tahun 1831.",
        ];
        
        // Ambil fakta acak dari array
        let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        
        // Tampilkan ke elemen
        document.getElementById("funFactOutput").textContent = randomFact;
    }

    document.getElementById("kejutanButton").addEventListener("click", tampilkanKejutan);
    function tampilkanKejutan() {
        const kejutanText = "🎉 Selamat! Kamu menemukan kejutan spesial! 🎁";
        
        // Tampilkan teks kejutan dengan animasi
        let kejutanOutput = document.getElementById("kejutanOutput");
        kejutanOutput.textContent = "";
        
        let i = 0;
        function typeEffect() {
            if (i < kejutanText.length) {
                kejutanOutput.textContent += kejutanText[i];
                i++;
                setTimeout(typeEffect, 50); // Efek mengetik
            } else {
                cakeContainer.classList.remove("hidden"); // Munculkan kue
                blowCandleBtn.classList.remove("hidden"); // Munculkan tombol
            }
        }
        
        typeEffect();
    }

    function tampilkanKejutan() {
        const kejutanText = "🎉 Make a wish and blow the candle! 🎁";
        kejutanOutput.textContent = "";

        let i = 0;
        function typeEffect() {
            if (i < kejutanText.length) {
                kejutanOutput.textContent += kejutanText[i];
                i++;
                setTimeout(typeEffect, 50); // Efek mengetik
            } else {
                cakeContainer.classList.remove("hidden"); // Munculkan kue
                blowCandleBtn.classList.remove("hidden"); // Munculkan tombol
            }
        }

        typeEffect();
        kejutanButton.style.display = "none"; // Sembunyikan tombol setelah diklik
    }

    // Tambahkan event listener ke tombol kejutan
    kejutanButton.addEventListener("click", tampilkanKejutan);

    // Fungsi untuk meniup lilin
    function tiupLilin() {
        const cakeImg = document.getElementById("birthdayCake");
        const blowCandleBtn = document.getElementById("blowCandleBtn");
        
        if (cakeImg) {
            cakeImg.src = "src/cake-light-off-Trim.gif"; // Ganti gambar kue tanpa lilin
        }
        if (blowCandleBtn) {
            blowCandleBtn.style.display = "none"; // Sembunyikan tombol
        }
    
        // Efek Kembang Api
        const fireworksContainer = document.getElementById("fireworksContainer");

        if (fireworksContainer) {
            fireworksContainer.innerHTML = "";
            const FireworksConstructor = window.Fireworks && (window.Fireworks.default || window.Fireworks);
            if (typeof FireworksConstructor === "function") {
                const fireworks = new FireworksConstructor(fireworksContainer, {
                    acceleration: 1.05,
                    intensity: 20,
                    friction: 0.97,
                    gravity: 1.5,
                    particles: 250
                });
                fireworks.start();
                setTimeout(() => {
                    fireworks.stop();
                }, 5);
            } else {
                console.error("Library Fireworks tidak dimuat dengan benar.");
            }
        }        

    
        // Efek popper party (confetti)
        const confettiSettings = {
            particleCount: 250,
            spread: 50,
            origin: { y: 0.7 } // Mulai dari tengah layar
        };
        confetti(confettiSettings);
        confetti({ ...confettiSettings, angle: 60, decay: 0.85 });
        confetti({ ...confettiSettings, angle: 120, decay: 0.85 });
    }    
});
