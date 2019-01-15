function tellTime() {
    var now = new Date();
    console.log(now);
    alert(now);
}

document.getElementById("myBtn").addEventListener("click",  tellTime);