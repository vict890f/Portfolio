window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("splash");

    setTimeout(splash, 1000);
}

function splash() {
    console.log("splash");
    document.querySelector("#block_1").classList.remove("hidden");

    setTimeout(splash2, 75);
}

function splash2() {
    console.log("splash2");

    document.querySelector("#block_2").classList.remove("hidden");

    setTimeout(splash3, 75);
}

function splash3() {
    console.log("splash3");

    document.querySelector("#block_3").classList.remove("hidden");

    setTimeout(splash4, 75);
}

function splash4() {
    console.log("splash4");

    document.querySelector("#block_4").classList.remove("hidden");

    setTimeout(splash5, 75);
}

function splash5() {
    console.log("splash5");

    document.querySelector("#block_5").classList.remove("hidden");

    setTimeout(splash6, 75);
}

function splash6() {
    console.log("splash6");

    document.querySelector("#block_6").classList.remove("hidden");

    setTimeout(splash7, 75);
}

function splash7() {
    console.log("splash7");

    document.querySelector("#block_7").classList.remove("hidden");

    setTimeout(splash8, 75);
}

function splash8() {
    console.log("splash8");

    document.querySelector("#block_8").classList.remove("hidden");

    setTimeout(splash9, 75);
}

function splash9() {
    console.log("splash9");

    document.querySelector("#block_9").classList.remove("hidden");

    setTimeout(splash10, 75);
}

function splash10() {
    console.log("splash10");

    document.querySelector("#block_10").classList.remove("hidden");

    document.querySelector("#block").classList.add("scroll_up");

}

function splash10() {
    console.log("splash10");

    document.querySelector("#block_10").classList.remove("hidden");

    window.location.href = "forside.html";
}
