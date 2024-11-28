let students = [ { id: 1, name: "Ali Rıza", lastname: "Çinibulak", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 2, name: "Berk", lastname: "Kalkan", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 3, name: "Bora", lastname: "Kalaycıoğlu", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 4, name: "Elif", lastname: "Yiğit", gender: "Kadın", section: "Frontend", role: "Öğrenci", }, { id: 5, name: "Emre", lastname: "Çelik", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 6, name: "Kerem", lastname: "Özsobacı", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 7, name: "Muhammed", lastname: "Aslan", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 8, name: "Mücahit", lastname: "Yıldız", gender: "Erkek", section: "Frontend", role: "Öğrenci", }, { id: 9, name: "Sude", lastname: "Çakır", gender: "Kadın", section: "Frontend", role: "Öğrenci", }, { id: 10, name: "Zennur", lastname: "Gömek", gender: "Kadın", section: "Frontend", role: "Öğrenci", }, { id: 11, name: "İrem", lastname: "Çoban", gender: "Kadın", section: "Frontend", role: "Öğrenci", }, { id: 12, name: "Şura", lastname: "Dede", gender: "Kadın", section: "Frontend", role: "Öğrenci", }, ];

let maleList = document.querySelector(".male-list")
let femaleList =document.querySelector(".female-list")

function render() {
    for (const student of students) {
        if (student.gender === "Erkek") {
            maleList.innerHTML += `<div class="list">ogrenci no: ${student.id} <br> ogrenci adi: ${student.name} ${student.lastname} <br> bölümü: ${student.section} <bt> durumu: ${student.role} </div>`
        }else {
            femaleList.innerHTML += `<div class="list">ogrenci no: ${student.id} <br> ogrenci adi: ${student.name} ${student.lastname} <br> bölümü: ${student.section} <bt> durumu: ${student.role} </div>`
        }
    }
}

render();