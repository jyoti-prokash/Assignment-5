
// Blog button to go blog page
    document.getElementById('blog').addEventListener("click", function(){
    window.location.href='blog.html';
});

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
    const donateAmount = donateInput('donate-input');
    const totalAmount = parseFloat(document.getElementById('total-Amount').innerText);
    const donationAmountNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);

    if(donateAmount <= 0 || isNaN(donateAmount) == true || donateAmount > totalAmount){
        return alert("invalid Amount number.");
    }

    document.getElementById('donate-amount-noakhali').innerText=donationAmountNoakhali+donateAmount;
    document.getElementById('total-Amount').innerText=totalAmount-donateAmount;

    document.getElementById("my_modal_1").showModal();

    // history container
    const date = new Date();
    const p1 = document.createElement('p');
    p1.style.border='2px solid blue'
    p1.style.borderRadius='10px'
    p1.style.padding='15px'
    p1.style.margin='10px 0px'
    p1.innerText=`${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh.
    ${date}`
    document.getElementById('donation-container').appendChild(p1);
})










