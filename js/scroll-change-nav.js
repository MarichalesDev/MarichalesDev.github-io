window.onscroll = function() {
    scrollFunction()
  };

function scrollFunction() {

  let headerTop = document.querySelectorAll(".navbar-brand"),
  header = document.querySelector(".header")
  navBackground = document.querySelector(".navbar")

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    for (let i = 0; i < headerTop.length; i++) {
      headerTop[i].style.color = "#fff";
    }

    navBackground.style.backgroundColor = "#0B4565"
    header.style.backgroundColor = "#0B4565"

  } else {

    for (let i = 0; i < headerTop.length; i++) {
      headerTop[i].style.color = "#0B4565"
    }

    navBackground.style.backgroundColor = "#fff";
    header.style.backgroundColor = "#ffffff00"

  }
}




