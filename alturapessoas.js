    var pessoas = [];
    var pessoasMenores = [];
    var pessoasMaiores = [];
    var pessoasCompAltura = [];

        function inicio() {
            var opcaoEscolha = parseInt(prompt("Escolha uma opção:\n1 - Cadastrar\n2 - Exibir cadastro de pessoas menores ou iguais a 1.50m\n3 - Exibir cadastro de pessoas maiores que 1.50m\n4 - Exibir cadastro das pessoas maiores que 1.50m e menores que 2.00m\n5 - Exibir média de alturas\n6 - Sair"));
            switch (opcaoEscolha) {
                case 1:
                    cadastrarPessoa();
                    break;

                case 2:
                    exibirPessoasMenores();
                    break;

                case 3:
                    exibirPessoasMaiores();
                    break;

                case 4:
                    exibirPessoasCompAltura();    
                    break;

                case 5:
                    exibirMediaAltura();
                    break;

                case 6:
                    sair();
                    break;

                default:
                    break;
            }
        }

        function cadastrarPessoa() {
            pararCadastro = false;
            while (pararCadastro == false) {
                var nomePessoa = prompt("Digite o nome da pessoa:")
                var alturaPessoa = parseFloat(prompt("Digite a altura da mesma:"))
                var pessoa = { nome: nomePessoa, altura: alturaPessoa }
                pessoas.push(pessoa)
                if (alturaPessoa > 1.50) {
                    pessoasMaiores.push(pessoa)
                }
                if (alturaPessoa <= 1.50) {
                    pessoasMenores.push(pessoa)
                } 
                if (alturaPessoa > 1.50 && alturaPessoa < 2.0) {
                    pessoasEntreAltura.push(pessoa)
                }
                var escolherOpcao = parseInt(prompt("Deseja cadastrar outra pessoa?\n1 - Sim\n2 - Não"))
                if (escolherOpcao == 2) {
                    pararCadastro = true;
                }
            }
            inicio();
        }

        function exibirPessoasMenores() {
            alert("Aqui estão os registros das pessoas menores ou iguais a 1.50m:")
            for (i = 0; i < pessoasMenores.length; i++) {
                alert(`Nome:${pessoasMenores[i].nome}\nAltura:${pessoasMenores[i].altura}`)
            }
            inicio();
        }

        function exibirPessoasMaiores(){
            alert("Aqui estão os registros das pessoas maiores que 1.50m:")
            for (i = 0; i < pessoasMaiores.length; i++) {
                alert(`Nome:${pessoasMaiores[i].nome}\nAltura:${pessoasMaiores[i].altura}`)
            }
            inicio();
        }

        function exibirPessoasCompAltura(){
            alert("Aqui estão os registros das pessoas maiores que 1.50m e menores que 2.00m:")
            for (i = 0; i < pessoasCompAltura.length; i++) {
                alert(`Nome:${pessoasCompAltura[i].nome}\nAltura:${pessoasCompAltura[i].altura}`)
            }
            inicio();
        }

        function exibirMediaAltura(){
            var somaTotal = 0;
            for(i=0; i < pessoas.length; i++){
                somaTotal+= pessoas[i].altura;
            }
            var media = somaTotal / pessoas.length;
            alert(`A média de altura entre as pessoas cadastradas é: ${media}`);
            inicio();
        }

        function sair(){
            alert("Até a próxima...")
        }
        inicio();