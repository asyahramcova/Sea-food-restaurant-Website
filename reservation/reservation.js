const reserve = document.querySelector("#reserve-btn");
reserve.addEventListener("click", reservation);

function reservation(e){
   e.preventDefault();

   const date = document.querySelector("#date").value;
   const number = document.querySelector("#number").value;
   const time = document.querySelector("#time").value;

   if( date === "" || number === ""|| number < 1){
         Swal.fire({
            icon: 'error',
            title: 'Oooops!',
            text: 'Please enter the whole information!',
         })
      }  
      else if(number > 50){
         Swal.fire({
            icon: 'error',
            text: 'Sorry, but we only have 50 seats. Please enter a lower number.',
         })
      }
else{

 Swal.fire({
         
            text: 'Great!  seats are reserved for you',
         })
}

}