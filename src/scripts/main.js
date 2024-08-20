document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-calculadora').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let nota1 = document.getElementById('nota-1').value;
        let nota2 = document.getElementById('nota-2').value;
        let nota3 = document.getElementById('nota-3').value;

        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        nota3 = parseFloat(nota3);

        console.log(nota1);
        console.log(nota2);
        console.log(nota3);

        let soma = (nota1 + nota2 + nota3);
        console.log(soma);

        let media = (nota1 + nota2 + nota3)/3;
        console.log(media);

        document.getElementById('resultado-valor').innerText = media;

        document.querySelector('.resultado').style.display = "block"
    })
})