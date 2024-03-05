function showMenu(){
    const menu = document.getElementById("menu_header")
    menu.style.display = "block"
}

function hideMenu(){
    const menu = document.getElementById("menu_header")
    menu.style.display = "none"
}

function displayGallery(imageClicked){
    const gallery = document.getElementById("gallery_header")
    gallery.style.display = "block"
    
    const clickedImage = document.getElementById(document.getElementById(imageClicked).innerHTML.substring(9,12))
    const displayImage = document.getElementById("clicked_image")

    displayImage.src = clickedImage.getAttribute('src')
}

function hideGallery(){
    const gallery = document.getElementById("gallery_header")
    gallery.style.display = "none"
}