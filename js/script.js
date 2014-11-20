/*	$(document).on("ready", inicio);

	function inicio()
	{
		$(".nav a").click(function(e){
			e.preventDefault();

			$(".nav a").each(function(){
				$(this).removeClass("active");

			});
			$(this).addClass("active");
	var menu = $(this).attr("id");

			switch(menu)
			{
				case "index":
				document.location.href("Index.html");
					break;
				case "front":
				console.log("asfjasfadsljfhdsj")
 			   document.location.href("frontend.html");
					break;
				case "back":
					break;
				case "contacto":
					$("#cuerpo").load("contacto.html");
					break;
			}
		});
	}*/

	 $(document).ready(function(){
      if ((localStorage.usuario !=undefined) && 
        (localStorage.contrasena !=undefined)){
      	$("#datosa").text("Salir:" + localStorage.usuario);
                           }else{
                           	document.location.href="login.html"
                           }
    });     

  

    function borrarDatos(){
      localStorage.removeItem("usuario");
      localStorage.removeItem("contrasena");
      document.location.href="Index.html";
    }
	    