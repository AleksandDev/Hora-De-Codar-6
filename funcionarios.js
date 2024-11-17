    var funcionarios = [];

    function inicio() {
        var opcaoEscolha = parseInt(prompt("Escolha uma opção:\n1 - Cadastrar Funcionário\n2 - Pesquisar Funcionário\n3 - Ver funcionários c/ salário acima de R$1.000\n4 - Ver funcionários c/ salário abaixo de R$1.000\n5 - Ver funcionários c/ salário igual de R$1.000\n6- Sair"))

        switch (opcaoEscolha) {
            case 1:
                cadastrarFuncionario();
                break;

            case 2:
                pesquisarFuncionario();
                break;

            case 3:
                exibirFuncionarioAcimaMil();
                break;

            case 4:
                exibirFuncionarioAbaixoMil();
                break;

            case 5:
                exibirFuncionarioIgualMil();
                break;

            case 6:
                sair();
                break;

            default:
                break;
        }
    }

    function cadastrarFuncionario() {
        var pararCadastro = false;
        while (pararCadastro == false) {
            var matriculaFuncionario = parseInt(prompt("Digite o número de matricula do funcionario:"))
            var nomeFuncionario = prompt("Digite o nome do funcionário:")
            var salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"))
            var funcionario = { matricula: matriculaFuncionario, nome: nomeFuncionario, salario: salarioFuncionario }
            funcionarios.push(funcionario);
            var escolherOpcao = parseInt(prompt("Deseja cadastrar outro funcionario?\n1 - Sim\n2 - Não"))
            if (escolherOpcao == 2) {
                pararCadastro = true;
            }
        }
        funcionarios.sort(function (a, b) {
            return a.matricula - b.matricula;
        });
        inicio();
    }

    function pesquisarFuncionario() {
        var BuscaMatriculaFuncionario = parseInt(prompt("Digite a matrícula do funcionário para pesquisar:"));
        var buscaFuncionario = funcionarios.find(funcionario => funcionario.matricula == BuscaMatriculaFuncionario)
        if (buscaFuncionario) {
            alert(`Funcionário encontrado\nMatrícula:${buscaFuncionario.matricula}\nNome:${buscaFuncionario.nome}\nSalário: R$${buscaFuncionario.salario}`)
        } else {
            alert("Funcionário não encontrado")
        }
        inicio();
    }

    function exibirFuncionarioAcimaMil() {
        var funcionariosAcimaMil = funcionarios.filter(f => f.salario > 1000);
        for (i = 0; i < funcionariosAcimaMil.length; i++) {
            alert(`Matrícula:${funcionariosAcimaMil[i].matricula}\nNome:${funcionariosAcimaMil[i].nome}\nSalário: R$${funcionariosAcimaMil[i].salario}`)
        }
        inicio();
    }

    function exibirFuncionarioAbaixoMil() {
        var exibirFuncionarioAbaixoMil = funcionarios.filter(f => f.salario < 1000);
        for (i = 0; i < exibirFuncionarioAbaixoMil.length; i++) {
            alert(`Matrícula:${exibirFuncionarioAbaixoMil[i].matricula}\nNome:${exibirFuncionarioAbaixoMil[i].nome}\nSalário: R$${exibirFuncionarioAbaixoMil[i].salario}`)
        }
        inicio();
    }

    function exibirFuncionarioIgualMil(){
        var exibirFuncionarioIgualMil = funcionarios.filter(f => f.salario == 1000);
        for (i = 0; i < exibirFuncionarioIgualMil.length; i++) {
            alert(`Matrícula:${exibirFuncionarioIgualMil[i].matricula}\nNome:${exibirFuncionarioIgualMil[i].nome}\nSalário: R$${exibirFuncionarioIgualMil[i].salario}`)
        }
        inicio();
    }

    function sair(){
        alert("Até a próxima...")
    }
    inicio();