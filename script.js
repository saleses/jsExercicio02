// Média de notas de estudantes

// Função para cálculo de média
function averageCalc(student) { 
    // Cálculo da média
    let average = ((Number(student.test1) + Number(student.test2)) / 2)

    return average
}

// Object: students
let students = [
    {
        name: "João", 
        test1: 7.8,
        test2: 8.4,
    },

    {
        name: "Santana",
        test1: 6.3,
        test2: 5.2,
    },

    {
        name: "Carolina",
        test1: 8.3,
        test2: 9.2,
    },

    {
        name: "Patrícia",
        test1: 6.7,
        test2: 7.5,
    },
]

// Estrutura de repetição
for(let student of students) {
    let average = averageCalc(student)
    // Condicional if - Aprovado ou reprovado
    aprovado = (average >= 7)

    if(aprovado) {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Parabéns ${student.name}! Você foi aprovado no concurso!
        `)
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Não foi dessa vez, ${student.name}! Tente novamente!
        `)
    }
}
