function theme(){
  const body = document.getElementById("body1");
  const item2 = document.getElementById('item2');

item2.addEventListener('click', () => {
  if (body.classList.contains('bg-black text-white')) {
    body.classList.remove('bg-black text-white');
    body.classList.add('bg-white text-black');
  } else {
    body.classList.remove('bg-white text-black');
    body.classList.add('bg-black text-white');
  }
});
}

