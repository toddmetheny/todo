// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function(){
  $(".checkbox").change(function(){
    if(this.checked){
      $('#'+this.id).closest('tr').fadeOut();
      // $.ajax("http://localhost:3000/", {
      // 	success: function{
      // 		$(this).checkbox = true
      // 	}
      // });
    }
  });
	$('tr').on('mouseenter', function(){
		$(this).css({'background-color': '#66FF33', 'font-weight': 'bold'});
	}).on('mouseleave', function(){
		$(this).css({'background-color': '#fff', 'font-weight': 'normal'})
	});


	$("#notice").fadeOut(4000, function(){
		$(this).remove();
	});


	// $('#new_link').hide().after('<%= j render("form") %>');

	// $("#new_todo_item > div.actions > input").on("click", function(){
	// 	console.log($(this))
	// 	var valuesToSubmit = $(this).serialize();
	// 	$.post({
	// 		url: $(this).attr('action'),
	// 		data: valuesToSubmit,
	// 		dataType: "JSON"
	// 	}).success(function(json){
	// 		$("table").append(data);
	// 	});
	// 	return false;
	// });
	

});

