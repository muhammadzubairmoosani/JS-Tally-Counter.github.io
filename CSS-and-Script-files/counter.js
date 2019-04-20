count = 0;
function counter() {
    count += 1;
    document.getElementById('counting').innerHTML = count;
}
function reset() {
    count = 0;
    document.getElementById('counting').innerHTML = count;
}
