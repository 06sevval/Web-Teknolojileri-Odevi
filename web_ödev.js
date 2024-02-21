function addTosepet() {
    // Burada sepete ekleme işlemleri gerçekleştirilebilir
    console.log('Ürün sepete eklendi!');
    // Eklemek istediğiniz işlevselliği buraya yazabilirsiniz
}

function removeFromsepet() {
    // Burada sepete ekleme işlemleri gerçekleştirilebilir
    console.log('Ürün sepetten kaldırıldı');
    // Eklemek istediğiniz işlevselliği buraya yazabilirsiniz
}

/*TARAYICIYA SAAT EKLEME */
const clock=document.querySelector('.clock');


const tick = () =>{
    const now =new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();

   // console.log(hours,minutes,seconds);

   const html =
   `
   <span>${hours}</span> :
   <span>${minutes}</span> :
   <span>${seconds}</span> 
   `
   clock.innerHTML=html;


};
setInterval(tick, 10);


/*POPUP EKRANI*/
const button=document.querySelector('.popupbutton');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');



button.addEventListener('click',()=>{
	
    mainPopup.style.display='block';
})


close.addEventListener('click',()=>{
    mainPopup.style.display='none';
})
/*ÖDEME EKRANI*/ 
function tamamla(){
    alert("Siparişiniz Onaylanmıştır. Yeniden bekleriz. İletişim Sayfamızdan Anketimize Katılmayı Unutmayın!");

}


function anket(){
    alert("Değerlendirmeniz için teşekkür ederiz!");
}


