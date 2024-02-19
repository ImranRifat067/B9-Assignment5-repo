count = 0 ;
const allBtn = document.getElementsByClassName('ticket-btn');

for(const btn of allBtn){

   btn.addEventListener('click',function(event){

    if(count==4){
        alert('you can book only 4');
        event.preventDefault();
        return;
    }

    count = count+1;
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
    p2.innerText = '500';
    appendedPrice.appendChild(p2);
    
    // appendChild('appended-class');
    // add selected seat
    const selectedSeatNumber = document.getElementById('selected-seat');
    const selectedSeatNumberText = parseInt (selectedSeatNumber.innerText);
    const updatedSeat = selectedSeatNumberText + 1;
    document.getElementById('selected-seat').innerText = updatedSeat;

    console.log(selectedSeatNumberText);
    console.log(event.target.innerText);
    const innerElement = event.target

   })

}

