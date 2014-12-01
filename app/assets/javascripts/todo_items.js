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

 	// var page = "/edit.html.erb"

// 	$(".modal-dreaming").on('click', function(){
// 		$(this).dialog({ modal: true })
// 	})
	// $("#somediv").on("click", function(){
	// 	opendialog("#{edit_list_todo_item_path}");
	// })
// 	$("#somediv").click(function() {
//   		opendialog("http://localhost:3000/todo_items/edit");
// });

	

	// function opendialog(page) {
	//   var $dialog = $('#somediv')
	//   .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
	//   .dialog({
	//     title: "Page",
	//     autoOpen: false,
	//     dialogClass: 'dialog_fixed,ui-widget-header',
	//     modal: true,
	//     height: 500,
	//     minWidth: 400,
	//     minHeight: 400,
	//     draggable:true,
	//     /*close: function () { $(this).remove(); },*/
	//     buttons: { "Ok": function () {         $(this).dialog("close"); } }
	//   });
	//   $dialog.dialog('open');
	// }

	$("#notice").fadeOut(4000, function(){
		$(this).remove();
	});


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

