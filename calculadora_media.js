

function calcularMedia() {

    
    /* pegando os valores do formulário */
    let nota1 = document.getElementById('nota-1').value
    let nota2 = document.getElementById('nota-2').value
    let nota3 = document.getElementById('nota-3').value
    let nota4 = document.getElementById('nota-4').value
    let nota5 = document.getElementById('nota-5').value

    

   /* Caso haja elemento vazio, se tornará zero  */
   nota1 == '' ? nota1 = 0 : nota1 = parseFloat(nota1)
   nota2 == '' ? nota2 = 0 : nota2 = parseFloat(nota2)
   nota3 == '' ? nota3 = 0 : nota3 = parseFloat(nota3)
   nota4 == '' ? nota4 = 0 : nota4 = parseFloat(nota4)
   nota5 == '' ? nota5 = 0 : nota5 = parseFloat(nota5)

  

    /* cálculo das médias */
    let media = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5)

    /* média com apenas duas casas decimais */
    media = media.toFixed(2)

   
  
    /* Limpar números na área do formulário */
    document.getElementById('nota-1').value = ''
    document.getElementById('nota-2').value = ''
    document.getElementById('nota-3').value = ''
    document.getElementById('nota-4').value = ''
    document.getElementById('nota-5').value = ''

    

    return document.getElementById('resultado').innerHTML = `A média de ${nota1}, ${nota2}, ${nota3}, ${nota4} e ${nota5} é:  <strong> ${media} </strong>`
    
}