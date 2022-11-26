function ClearBg()
{
    document.getElementById("good").classList.remove("good");
    document.getElementById("bad").classList.remove("bad");
    document.getElementById("fallow-up").classList.remove("fallow-up");
}

document.getElementById("good").addEventListener("click", function(){
    ClearBg();
    document.getElementById("good").classList.add('good');
    document.getElementById("status").value = "good";
});

document.getElementById("bad").addEventListener("click", function(){
    ClearBg();
    document.getElementById("bad").classList.add('bad');
    document.getElementById("status").value = "bad";
});

document.getElementById("fallow-up").addEventListener("click", function(){
    ClearBg();
    document.getElementById("fallow-up").classList.add('fallow-up');
    document.getElementById("status").value = "fallow-up";
});