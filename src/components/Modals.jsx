

export default Modals = (e) => {
  console.log(e)
  let img = e.target
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  const span = document.getElementsByClassName("close")[0];
  span.onclick = () => {
      modal.style.display = "none";
  }
}