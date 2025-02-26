const toysRange = document.getElementById('toys__range');
const toysCountShow = document.getElementById('toys__count_show');
toysRange.addEventListener('change', function () {
    toysCountShow.textContent = toysRange.value;
});
