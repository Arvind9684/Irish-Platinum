
document.addEventListener("DOMContentLoaded", function () {
    var apartmentsCount = 0; // Starting count
    var targetCount = 570; // Target count
    // Function to update apartmentsCount and display
    function updateApartmentsCount() {
      if (apartmentsCount <= targetCount) {
        document.getElementById("apartmentsvalue").innerHTML = apartmentsCount;
        apartmentsCount++; // Increment count
      }
    }
    // Update count every 100 milliseconds (adjust as needed)
    setInterval(updateApartmentsCount, 1);
    var towerscounts=0;
    var towerstarget=4;
    function updateTowersCount(){
        if(towerscounts<=towerstarget){
        document.getElementById("towersvalue").innerHTML=towerscounts;
        towerscounts++;
        }
    }
    setInterval(updateTowersCount, 100);
    var acrescounts=0;
    var acresvalue=5;
    function updateAcresCount(){
        if(acrescounts<=acresvalue){
            document.getElementById("acresvalue").innerHTML=acrescounts;
            acrescounts++;
        }
    }
    setInterval(updateAcresCount, 100)

  });   


  document.addEventListener('contextmenu', event => event.preventDefault());


 