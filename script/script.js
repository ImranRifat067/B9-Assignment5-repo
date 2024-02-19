let count = 0 ;
const allBtn = document.getElementsByClassName('ticket-btn');

for(const btn of allBtn){

   btn.addEventListener('click',function(event){
    
    

    if(count==4){
        alert('you can book only 4');
        event.preventDefault();
        return ;
    }
    count=count+1;
   
    
    // add background color
    event.target.setAttribute("disabled", true);
    event.target.style.background ="#1DD100";
    // count remaining seat
    const seatsLeft = document.getElementById('seats-left');
    const seatsLeftText = parseInt (seatsLeft.innerText);
    const remainSeat = seatsLeftText - 1;
    document.getElementById('seats-left').innerText = remainSeat;

    
    // append seats
    const appendedSeat = document.getElementById('appended-seat');
    const p = document.createElement('p');
    p.innerText = event.target.innerText;
    appendedSeat.appendChild(p);
    const appendedClass = document.getElementById('appended-class');
    const p1 = document.createElement('p');
    p1.innerText = 'economy';
    appendedClass.appendChild(p1);
    const appendedPrice = document.getElementById('appended-price');
    const p2 = document.createElement('p');
    p2.innerText = '550';
    appendedPrice.appendChild(p2);
    
    // add selected seat
    const selectedSeatNumber = document.getElementById('selected-seat');
    const selectedSeatNumberText = parseInt (selectedSeatNumber.innerText);
    const updatedSeat = selectedSeatNumberText + 1;
    document.getElementById('selected-seat').innerText = updatedSeat;
    
    // total prise
    const perTicketPrize = document.getElementById('per-ticket-prize');
    const perTicketPrizeElement = parseInt(perTicketPrize.innerText);
    const totalPrize = updatedSeat * perTicketPrizeElement;

    
    // console.log(totalPrize); 
    document.getElementById('total-prise').innerText = totalPrize;
    // grand total
    document.getElementById('grand-total').innerText = totalPrize;
    
   if(updatedSeat === 4){
     const couponinput = document.getElementById('coupon');
     couponinput.disabled = false;
     document.getElementById('apply').addEventListener('click',function(){
        const coupon = document.getElementById('coupon').value;
        
        // if(updatedSeat === 4 ){
            if(coupon === 'NEW15'){
                const discount = totalPrize*0.15;
                document.getElementById('discount').innerText = '-' + discount
                const newGrandTotal = totalPrize - discount ;
                document.getElementById('grand-total').innerText =  newGrandTotal;
                hideElement('coupon-div');

            }
            else if(coupon === 'Couple 20'){
                const discount = totalPrize*0.20;
                document.getElementById('discount').innerText = '-' + discount
                const newGrandTotal = totalPrize - discount ;
                document.getElementById('grand-total').innerText =  newGrandTotal;
                
                hideElement('coupon-div');

            }
            else {
                alert('invalid coupon code');
                document.getElementById('coupon').value
                = '';
            }

        // } 

    })


   }
   else{
    document.getElementById('next').addEventListener('click',function(){
        const userNumber = document.getElementById('number').value;
        
        if(userNumber.length !== 0 ){
            hideElement('header');
            hideElement('main');
            hideElement('footer');
            showElement('popping');
        }
        else{
            alert('enter phone number');
        }
    })
   }

   })

}


function hideElement(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function showElement(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}
