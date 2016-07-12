(function(){
	var  img= this
	var newImageService = new ImageService()
	
	newImageService.getImage(function(res){
		$('#body').css({
			background:  'url('+res.large_url + ')',
			color: 'black',
			'background-size': 'cover'
		});
	
	})
}())
