function toggleItems() {
  let item1 = document.getElementById("item1");
  let item2 = document.getElementById("item2");

  if (item1.classList.contains("hidden")) {
    // Show item1 and hide item2
    item1.classList.remove("hidden");
    item2.classList.add("hidden");
  } else {
    // Show item2 and hide item1
    item1.classList.add("hidden");
    item2.classList.remove("hidden");
  }
}
