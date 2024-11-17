    var alunos = [];

    function inicio() {
        var opcaoEscolha = parseInt(prompt("Escolha uma opção:\n1 - Fazer cadastro\n2 - Pesquisar cadastro\n3 - Exibir todos os cadastros\n4 - Sair"))
        switch (opcaoEscolha) {
            case 1:
                fazerCadastro();
                break;

            case 2:
                pesquisarCadastro();
                break;

            case 3:
                exibirCadastros();
                break;

            case 4:
                sair();
                break;

            default:
                break;
        }
    }

    function fazerCadastro() {
        if (alunos.length >= 20){
            alert("Limite máximo de cadastros atingido.")
        }
        var pararRegistro = false;
        while (pararRegistro == false && alunos.length < 20) {
            var nomeDoAluno = prompt("Digite o nome do aluno")
            var n1 = parseFloat(prompt("Digite a nota Nota 1 do aluno:"))
            var n2 = parseFloat(prompt("Digite a nota Nota 2 do aluno:"))
            alert("Aluno registrado")
            var mediaDoAluno = (n1 + n2) / 2;
            var statusDoAluno = "";
            if (mediaDoAluno >= 5) {
                statusDoAluno = "Aprovado"
            } else {
                statusDoAluno = "Reprovado"
            }

            var aluno = { nome: nomeDoAluno, n1: n1, n2: n2, media: mediaDoAluno, status: statusDoAluno }
            alunos.push(aluno);
            var escolherOpcao = parseInt(prompt("Deseja cadastrar outro aluno?\n1 - Sim\n2 - Não"))
            while (escolherOpcao != 1 && escolherOpcao != 2) {
                escolherOpcao = parseInt(prompt("Opção inválida\nDeseja cadastrar outro aluno?\n1 - Sim\n2 - Não"))
            }
            if (escolherOpcao == 2) {
                pararRegistro = true
            }
        }
        alunos.sort((a,b) => a.nome.localeCompare(b.nome));
        inicio();
    }

    function pesquisarCadastro(){
        var buscaNomeAluno = prompt("Digite o nome do aluno que você deseja procurar")
        var buscarAluno = alunos.find(aluno => aluno.nome == buscaNomeAluno)
        var pararBusca = false

        while(pararBusca == false){
        if(buscarAluno){
            alert(`Nome: ${buscarAluno.nome}\nN1: ${buscarAluno.av1}\nN2: ${buscarAluno.av2}\nMédia: ${buscarAluno.media}\nStatus: ${buscarAluno.status}`)
        } else {
            alert("Aluno não encontrado.")
        }

        let escolherOpcao = parseInt(prompt("Deseja buscar outro aluno?\n 1 - Sim\n 2 - Não"))
        if (escolherOpcao == 2){
            pararBusca = true;
        }
    }
        inicio();
    }

    function exibirContatos(){
        for(i=0; i < alunos.length; i++){
            alert(`Nome:${alunos[i].nome}\nN1: ${alunos[i].n1}\nN2: ${alunos[i].n2}\nMédia: ${alunos[i].media}\nStatus: ${alunos[i].status}`)
        }
        alert("Fim.")
        inicio();
    }

    function sair(){
        alert("Até a próxima...")
    }
    inicio();