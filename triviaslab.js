window.onload = function() {

    document.getElementById("button-name").addEventListener("click", mostrartrivia);
    document.getElementById("pa").addEventListener("click", mostrarpa);
    document.getElementById("pb").addEventListener("click", mostrarpb);
    document.getElementById("resultadosm").addEventListener("click", resultado);
    document.getElementById("resultadosg").addEventListener("click", resultadodos);
    document.getElementById("regresarm").addEventListener("click", regresar);
    document.getElementById("regresarg").addEventListener("click", regresar2);
    document.getElementById("input-name");
    document.getElementById("resultado");




    function mostrartrivia() {
        div = document.getElementById('segundaseccion');
        div.style.display = '';
        let name = document.getElementById("input-name").value;
        document.getElementById("saludo").innerHTML = "Hola! " + name;
    }

    function mostrarpa() {
        div = document.getElementById('preguntasm');
        div.style.display = '';
    }

    function mostrarpb() {
        div = document.getElementById('preguntasg');
        div.style.display = '';
    }

    function resultado() {
        var p1, p2, p3, nota;

        //primer pregunta
        if (document.getElementById('cmdos').checked == true) { p1 = 1 } else { p1 = 0 }
        //<!-- 2ª pregunta -->
        if (document.getElementById('cmuno').checked == true) { p2 = 1 } else { p2 = 0 }
        //<!-- 3ª pregunta -->
        if (document.getElementById('cmtres').checked == true) { p3 = 1 } else { p3 = 0 }
        nota = p1 + p2 + p3;
        document.getElementById('resultadosm').innerHTML = "Tus Resultados Son: " + nota;

        let userResult = document.getElementById('resultado');

        // alert(" Aciertos: " + nota);
        //location.reload();

    }

    function resultadodos() {
        var pg1, pg2, pg3, notag;

        //primer pregunta
        if (document.getElementById('cgdos').checked == true) { pg1 = 1 } else { pg1 = 0 }
        //<!-- 2ª pregunta -->
        if (document.getElementById('cguno').checked == true) { pg2 = 1 } else { pg2 = 0 }
        //<!-- 3ª pregunta -->
        if (document.getElementById('cgtres').checked == true) { pg3 = 1 } else { p3g = 0 }

        notag = pg1 + pg2 + pg3;

        document.getElementById('resultadosg').innerHTML = "Tus Resultados Son: " + notag;
        let userResult = document.getElementById('resultadodos');
        userResult.innerHTML = notag;
        //location.reload();
    }

    function regresar() {
        var x = document.getElementById("preguntasm");
        if (x.style.display === "none") {
            x.style.display = "block";

        } else {
            x.style.display = "none";
        }

    }

    function regresar2() {
        var x = document.getElementById("preguntasg");
        if (x.style.display === "none") {
            x.style.display = "block";

        } else {
            x.style.display = "none";
        }


    }

}
