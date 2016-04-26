$(document).ready(function(){
	 var actualizado = false;
	 var menspend = [];
	 $(function() {
   		 $( "#tabs" ).tabs();
 	 });

 	 $(function() {
 	 	$("#boton").button();
 	 });
	
 	$.getJSON("update.json").done(function(data){
 		for(var i in data.mensajes){
 			menspend[i] = data.mensajes[i];
 		}
 		$("#menspend").html("quedan "+ menspend.length+" mensajes por mostrar");
 	})
	
	$.getJSON("timeline.json").done(function(data){
		for(var i in data.mensajes){
			$("#mensajes").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#mensajes").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#mensajes").accordion({collapsible: true, active:false, heightStyle: "content"})
	})

	$.getJSON("myline.json").done(function(data){
		for(var i in data.mensajes){
			$("#tab2").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#tab2").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#tab2").accordion({collapsible: true, active:false, heightStyle: "content"})
	})

	$("#boton").click(function(){
		$.getJSON("update.json").done(function(data){
		for(var i in data.mensajes){
			$("#mensajesnuevos").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#mensajesnuevos").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#mensajesnuevos").accordion({collapsible: true, active:false, heightStyle: "content"})
		$("#menspend").html("quedan 0 mensajes por mostrar");
	})
	})


})