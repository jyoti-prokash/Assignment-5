
// History button
    const historyBtn=document.getElementById('history-btn');
    const donationBtn= document.getElementById('donation-btn');
    historyBtn.addEventListener("click", function(){
    historyBtn.classList.add('bg-[#B4F461]')
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');

    const historyDisplay=document.getElementById('donation-history');
        historyDisplay.classList.remove('hidden');
    // const historyItems=document.createElement("div");
    // historyItems.innerHTML=`
    // <h1>'hello'</h1>
    // <p>${new Date().toLocaleDateString}</p>
    // `
    // const historySection=document.getElementById('history-section');
    // historySection.insertBefore(historyItems,firstChild);
})

// donationButton
donationBtn.addEventListener("click", function(){
    donationBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');
    const historyDisplay=document.getElementById('donation-history');
    historyDisplay.classList.add('hidden');
})



// Noakhali donation section
document.getElementById('donate-now').addEventListener("click",function(){
    const donateNow = donateInput('donate-input');
    if(donateNow<=0){
        return alert('invalid input');
    }
    const totalMoney = parseFloat(document.getElementById('total-money').innerText);
    const donateMoneyNoakhali = parseFloat(document.getElementById('donate-money-noakhali').innerText);
    const totalMoneyUpdate=totalMoney-donateNow;
    const nagativeMoney =document.getElementById('total-money').innerText=totalMoneyUpdate;
    if(nagativeMoney<0){
        return alert('not enough money');
        
    }
    const totalDonationNoakhali = donateMoneyNoakhali + donateNow
    document.getElementById('donate-money-noakhali').innerText=totalDonationNoakhali;
})




// Blog button to go blog page
document.getElementById('blog').addEventListener("click", function(){
    window.location.href='blog.html';
});


