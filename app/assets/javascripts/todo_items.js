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

	// $("#the_box").on('click', function(){
	// 	if(this.checked){
	// 	  $(this).closest('tr').fadeOut();
	// 	}
	// })

 	var page = "/edit.html.erb"

// 	$(".modal-dreaming").on('click', function(){
// 		$(this).dialog({ modal: true })
// 	})
	$("#somediv").on("click", function(){
		opendialog("http://localhost:3000/todo_items/edit");
	});
// 	$("#somediv").click(function() {
//   		opendialog("http://localhost:3000/todo_items/edit");
// });
	$("#notice").hide(5000, function(){
		$(this).remove();
	});

	// $('#myModal').on("click", function(){
	// 	$(this).modal('show');
	// });
});

