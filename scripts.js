document.addEventListener("DOMContentLoaded", function() {
    // Footer spacing aanpassen
    const footer = document.querySelector('footer');
    if (footer) {
        document.body.style.paddingBottom = footer.offsetHeight + 'px';
    }

    // Modal elementen
    const modal = document.getElementById("myModal");
    const images = document.querySelectorAll('.painting img');
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector('.close');

    // Klik op afbeelding = toon in modal
    images.forEach(img => {
        img.addEventListener('click', function() {
            if (this.src && this.src !== '') {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                document.body.style.overflow = 'hidden'; // Voorkom scrollen
            }
        });
    });

    // Sluit modal met X knop
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; // Herstel scrollen
        });
    }

    // Sluit modal door buiten afbeelding te klikken
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });

    // Sluit modal met Escape toets
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
});
