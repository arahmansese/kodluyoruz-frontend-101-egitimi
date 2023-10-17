// Yapilacaklar 
//  Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.
// Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.

let addedButton = document.querySelector('.button');
let taskList = document.querySelector('#list');
var items = document.querySelectorAll('li');
const toasts = document.querySelectorAll("#liveToast");

//sayfa yuklediginde locaStorage den veri cekme islemi
document.addEventListener("DOMContentLoaded", function () { 
    showData()
});

 function emptyAlert() {
     var toast = new bootstrap.Toast(document.getElementById('liveToast'));
     toast.show();
}

function showData(){
    var localItems = JSON.parse(localStorage.getItem("localItems")) || [];
    var ul = document.querySelector('#list');

    localItems.forEach( function(data){
        var li = document.createElement("li")
        li.textContent= data;
        ul.appendChild(li);
        
    });
}

function newElement(){
    var taskLine = (document.querySelector('#task').value.trim());
    console.log(taskLine);
    if(!taskLine==""){
        var localItems = JSON.parse(localStorage.getItem('localItems')) || [];
        localItems.push(taskLine);
        localStorage.setItem("localItems",JSON.stringify(localItems));
         const newTask = document.createElement("li");
         newTask.classList.add('li')
         newTask.textContent = taskLine; 
         document.getElementById("list").appendChild(newTask)
        document.getElementById('task').value = ""; 
        $(toasts[0]).toast("show");
        return;

    }else{

        // emptyAlert()// bir bilene sorulacak. yaptim olmadi neden ?
        // // toast body arastrilip bakilacak
        // alert('bos eleman ekleyemezsiniz !!!')
        $(toasts[1]).toast("show");
        return;

    }
    
}


addedButton.addEventListener('onclick' , function(){
    newElement();
});

// amac dongunun surekli calismasi degli veriyi guncel olarak tutarak donmesi.    
document.getElementById("list").addEventListener('click', function(e){
    const clickItem = e.target;
    clickItem.classList.toggle('checked')

})

function deleted(){
    const delspan = document.createElement("span");
delspan.innerHTML = "&times;";
delspan.classList.add("close");
delspan.addEventListener("click", () => {
  removeElement(li);
});
}
