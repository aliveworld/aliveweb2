<script type="text/javascript">
//<a href="javascript:Enviar('pagina','capa')">ACCION</a>
//cargar sin recargar
function ajaxFunction() {
  var xmlHttp;
  
  try {
   
    xmlHttp=new XMLHttpRequest();
    return xmlHttp;
  } catch (e) {
    
    try {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      return xmlHttp;
    } catch (e) {
      
	  try {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        return xmlHttp;
      } catch (e) {
        alert("Tu navegador no soporta AJAX!");
        return false;
      }}}
}




function Enviar(_pagina,capa) {
	document.getElementById(capa).innerHTML = "<div align='center'><img src='loader.gif'></div>";
    var ajax;
    ajax = ajaxFunction();
    ajax.open("POST", _pagina, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = function() {
		if (ajax.readyState==1){
			document.getElementById(capa).innerHTML = "<div align='center'><img src='loader.gif'></div>";
			     }
		if (ajax.readyState == 4) {
		   
                document.getElementById(capa).innerHTML=ajax.responseText; 
               
		     }}
			 
	ajax.send(null);
} 

 //jquery
 $(document).ready(function(){
				//Aca va todo nuestro codigo
				/*
				$("#lenguaje").click(function () { 
					  $("#cuerpo").css({ color: "#FFFFFF", background: "#FF0000" });
				});
				$("#cuerpo").mouseenter(function(){
						$("#cuerpo").css({'background-image':'url(img/logo.png)'});
						
				});		
				$("#cuerpo").mouseleave(function(){
						$("#cuerpo").css({'background-image':'url(img/alive.png)'});
				});
				$("#lenguaje").dblclick(function(){
						$("#cuerpo").css({color: "#BDBDBD", background: "#000000"});
				});	
				*/
				$(".tr").mouseenter(function(){
						$(".tr").css({'background':'#000000'});
						
				});		
				$(".tr").mouseleave(function(){
						$("#imagen").css({'background-image':'url(img/alive.png)'});
				});
						
});

</script>