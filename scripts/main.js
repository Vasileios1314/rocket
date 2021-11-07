
const collapsibles = document.querySelectorAll(".collapsible")



  for (let i = 0; i < collapsibles.length; i++) {
      const collapsible = collapsibles[i];

      collapsible.addEventListener("click", function() {
        const collapsibleContent = collapsible.nextElementSibling;
        collapsibleContent.classList.toggle("visible")
      });

  }