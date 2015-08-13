// set price
minprice = localStorage.getItem('minprice');
maxprice = localStorage.getItem('maxprice');

function setPrice(value) {

    if(minprice > value)
        localStorage.setItem('minprice',value);
    if(maxprice < value)
        localStorage.setItem('maxprice',value);

}

function changePriceState(value) {
    
    localStorage.setItem(value,(localStorage.getItem(value)*-1)+1);
    
}

function changeColor(value) {
    if(localStorage.getItem(value) == 1)
    {
        $("." + value).css("background-color","#8c1519");
        $("." + value).css("color","#ffffff");
    }
	else
    {
        $("." + value).css("background-color","#f6f6f6");
        $("." + value).css("color","#000000");
    }
}