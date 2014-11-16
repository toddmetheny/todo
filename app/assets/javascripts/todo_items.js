// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $(".checkbox").change(function(){
    if(this.checked){
      $('#'+this.id).closest('tr').fadeOut()
    }
  });
});