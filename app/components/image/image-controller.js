function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
    var imageService = new ImageService();

    function drawImage(image){
        
        document.body.style.backgroundImage = `url('${image.large_url}')`   
    }
        

imageService.getImage(drawImage)
}