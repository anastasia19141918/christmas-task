const toysRange = document.getElementById('toys__range') as HTMLInputElement;

toysRange.addEventListener ('change', function(){
  console.log(toysRange.value);
})