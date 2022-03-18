$(document).ready(function() {
$("button").on("click", function() { 
    $(".container").show();

    $("button").on("click", function() { 
        $(".container").hide();    
});

$.ajax({
    type: "GET",
    url: "https://www.feriadosapp.com/api/holidays.json",
    dataType:"json",
    success: function(datosApi) {
        console.log(datosApi.data)
        var valor = ''
        datosApi.data.forEach(element => {
            valor +=
            `<tr> <td>${element.id}<td>${element.date}</td>
             <td>${element.title}<td>${element.extra}</td>
             <td>${element.law}<td>${element.law_id}</td><tr>`}
             );
            
        $("#table").show();
        $("#hero-2").html(valor);
    },
});
});
});

$(document).ready(function(){
	$("#table").click(function(){
    		$(this).css("backgroundColor", "rgb(253, 203, 203)");
  	});
 
	$("#table").mouseleave(function(){
        $(this).css("backgroundColor", "white");
 	});
});