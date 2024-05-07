document.addEventListener("DOMContentLoaded", function() {
    var footerHeight = document.querySelector('footer').offsetHeight;
    document.body.style.paddingBottom = footerHeight + 'px';

    var modal = document.getElementById("myModal");
    var images = document.querySelectorAll('.painting img');
    var modalImg = document.getElementById("img01");
    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
});