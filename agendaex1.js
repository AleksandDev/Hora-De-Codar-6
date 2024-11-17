    var agenda = [];

    function inicio() {
        var opcaoEscolha = parseInt(prompt("Escolha uma opção:\n1 - Cadastrar Contato(s)\n2 - Pesquisar Contato(s)\n3 - Classificação de Contato(s)\n4 - Exibição de Contato(s)\n5 - Sair"));
        switch (opcaoEscolha) {
            case 1:
                cadastrarContato();
                break;

            case 2:
                pesquisarContato();
                break;

            case 3:
                classificarContatos();
                break;

            case 4:
                exibirContatos();
                break;

            case 5:
                sair();
                break;

            default:
                break;
        }
    }

    function cadastrarContato() {
        var cadastrarUmContato = true;
        while (cadastrarUmContato == true) {
            var nomeContato = prompt("Digite o nome do contato");
            var enderecoContato = prompt("Digite o endereço do contato");
            var telefoneContato = parseInt(prompt("Digite o número do contato"));
            var contato = { nome: nomeContato, endereco: enderecoContato, telefone: telefoneContato }
            agenda.push(contato);

            var escolher = parseInt(prompt("Deseja cadastrar outro contato?\n1 - Sim\n2 - Não"))
            while (escolher != 1 && escolha != 2) {
                escolher = parseInt(prompt("Opção inválida.\nDeseja cadastrar outro contato?\n1 - Sim\n2 - Não"))
            }
            if (escolher == 1 && agenda.length > 10) {
                alert("Limite máximo de cadastros atingido.")
            } else if (escolher == 1) {
                cadastrarUmContato = true;
            } else if (escolher == 2) {
                cadastrarUmContato = false;
            }
        }
        alert("Redirecionando para a tela inicial...")
        inicio();
    }

    function pesquisarContato() {
        var pesquisaPorNome = prompt("Digite o nome do contato que você deseja buscar:")
        var pararBusca = false;
        while (pararBusca == false) {
            for (i = 0; i < agenda.length; i++) {
                if (agenda[i].nome == pesquisaPorNome) {
                    alert(`Contato encontrado.\nNome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
                }
            }
            var escolha = parseInt(prompt("Deseja pesquisar outro contato?\n1 - Sim\n2 - Não"))
            if (escolha == 2) {
                pararBusca = true;
            }
        }
        inicio();
    }

    function classificarContatos() {
        agenda.sort((a, b) => a.nome.localeCompare(b.nome));
        alert("Aqui estão todos os contatos cadastrados classificados por ordem de nome")
        for (i=0; i < agenda.length; i++){
            alert(`Nome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
        }
        inicio();
    }

    function exibirContatos(){
        alert("Aqui estão todos os contatos")
        for (i=0; i < agenda.length; i++){
            alert(`Nome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
        }
        inicio();
    }

    function sair(){
    alert("Até a próxima...")
    }
    inicio();