$(document).ready(function(){
  $("#hide").click(function(){
    $(".show-hide").hide();
  });
  $("#show").click(function(){
    $(".show-hide").show();
  });
});
function thanhtoan() {
	var Price=document.getElementById("Price").innerHTML;
	var Quantity=document.getElementById("Quantity").value;
	document.getElementById('Subtotal').innerHTML=Price*Quantity;
	document.getElementById('Subtotal_').innerHTML= 'Total: '+ Price*Quantity;
}
