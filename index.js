
function toggleBox(box) {

  const allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach(b => {
    if (b !== box) {
      b.classList.remove('expanded');
      const input = b.querySelector('input[type="radio"]');
      if (input) input.checked = false;
    }
  });

  box.classList.toggle('expanded');

  if (box.classList.contains('expanded')) {
    const input = box.querySelector('input[type="radio"]');
    if (input) input.checked = true;
  }

}
