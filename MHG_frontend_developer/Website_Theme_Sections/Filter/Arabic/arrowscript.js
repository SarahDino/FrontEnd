function changeIcon(button) {
    var svg = button.querySelector('svg');
    if (button.classList.contains('active')) {
        svg.innerHTML = '<path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7L86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>';
    } else {
        svg.innerHTML = '<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3L86.6 342c-12 .1 -22 -17 -22 -39s10 -40,22 -40z"/>';
    }
    button.classList.toggle('active');
}

