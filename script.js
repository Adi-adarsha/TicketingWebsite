let adults, children; 

if(adults < 0){
    adults = 0;
}

if(children < 0){
    children = 0;
}

window.onload = function() {
    let btn = document.getElementById("buybtn");
    btn.onclick = function() {
        let adults = document.getElementById("adult").value;
        let children = document.getElementById("child").value;
        let price = calc(adults, children);
        alert("Price: "+price);
        for(let i=1; i<=adults; i++) {
            console.log("A_Ticket #"+i);
        };
        for(let i=1; i<=children; i++) {
            console.log("C_Ticket #"+i);
        };
    };
};

function calc(adults, children){
    return (adults*12)+(children*5);
}
