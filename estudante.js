nomeAluno = "John Doe"
nota1 = 7
nota2 = 8.5
nota3 = 6.9
idadeAluno = 20

mediaAluno = (nota1*4 + nota2*3 + nota3*3)/(4+3+3)

console.log(nomeAluno)
console.log(idadeAluno)
console.log(mediaAluno)

if (mediaAluno >= 7) {
    console.log("Aluno aprovado")
} else if (mediaAluno >= 1) {
    console.log("Aluno reprovado")
} else if (mediaAluno === 0) {
    console.log("Aluno zerou")
}
