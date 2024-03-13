document.getElementById('head').style.display = "flex";
document.getElementById('output').style.display = "none";

const onSubmit = document.getElementById("submit");

onSubmit.addEventListener("click", function() {
    document.getElementById('output').style.display = "block";
    document.getElementById('head').style.display = "none";
    var car_name = document.getElementById("car_name").value;
    var year = document.getElementById('first').value;
    var kilo = document.getElementById('second').value;
    var fuel = document.getElementById('fuel').value;
    var sell = document.getElementById('seller').value;
    var trans = document.getElementById('transmission').value;
    var own = document.getElementById('owner').value;
    document.getElementById('yer').innerHTML = year;
    document.getElementById('fuell').innerHTML = fuel;
    document.getElementById('km').innerHTML = kilo;
    document.getElementById('sel').innerHTML = sell;
    document.getElementById('transm').innerHTML = trans;
    document.getElementById('own').innerHTML = own;
    document.getElementById('car-name').innerHTML = car_name;
});



