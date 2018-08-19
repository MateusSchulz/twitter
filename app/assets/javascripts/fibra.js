$(function() {

	var bolean = true;

	$("#b-fibra").on('click', function(){
		if(bolean){
			$(".img-fibra").css('display', 'block');
			bolean = false;
		} else{
			$(".img-fibra").css('display', 'none');
			bolean = true;
		}
	});

	$("#add-fibra").on('click', function(){

		var text = $(".fibra strong").text();
		var number = parseInt(text);
		number++;
		var text = $(".fibra strong").text(number);

	});

});