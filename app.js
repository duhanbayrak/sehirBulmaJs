
var startBtn = document.getElementById("startBtn");
var city = document.getElementById("city");
const element = document.querySelector("#svg-turkiye-haritasi");
const mapPath = document.querySelectorAll("#svg-turkiye-haritasi path");
const trueScore = document.getElementById("dogruSayisi");
const counter = document.getElementById("counter");

var cities = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];

var randomArray = cities.sort(() => Math.random() - 0.5);

var index = 0;

function changeCity() {
    index++;
    city.textContent = `${randomArray[index]}`;
}

function startGame() {
    
    element.style.display = "block";
    
    city.textContent = `${randomArray[index]}`;
    
    var dogru = 0, Puan, remaining = 15;

    counter.textContent = remaining;

    element.addEventListener("click", (event) => {
        

        if (event.target.tagName === "path") {
            const parent = event.target.parentNode;


            if (parent.getAttribute("data-iladi") === randomArray[index]) {
                dogru++;
                
                event.target.style.fill = "#57837B";
                trueScore.innerText = `${dogru}`;
               
                changeCity();
            }
            else {
                remaining--;
                counter.textContent = remaining;
                
            }

            if (dogru >= 81) {
                counter.textContent = "Tebrikler! Bütün Şehirleri Doğru Bildiniz.";
                element.style.display = "none";
                city.textContent = ""
            }
            puan = (dogru * 10);

            if (puan < 0) {
                puan = 0;

            }
        }
        if (remaining <= 0) {
            counter.innerHTML = "Puan: " + puan;
            dogru = 0;
            remaining = 0;
            trueScore.innerText = `${dogru}`;
            startBtn.textContent = "Tekrar Başla";
            element.style.display = "none";

            startBtn.onclick = function() {
                element.style.display = "block";
                remaining = 15;

                mapPath.forEach((el) => {
                    el.attributeStyleMap.clear();
                    
                });

                counter.innerHTML = remaining;
                changeCity();

            };
        }
    });
};







