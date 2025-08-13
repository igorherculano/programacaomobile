interface Usuario {
    nome: string;
    email: string;
    idade: number;
    status: boolean;
}

const listaDeUsuarios: Usuario[] = [];

function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario);
}

function listarUsuarios(): void {
    if (listaDeUsuarios.length === 0) {
        console.log("A lista de usuários está vazia.");
        return;
    }

    console.log("--- Lista de Usuários Cadastrados ---");
    listaDeUsuarios.forEach(usuario => {
        console.log(`
        ------------------------------------
        Nome: ${usuario.nome}
        Email: ${usuario.email}
        Idade: ${usuario.idade}
        Status: ${usuario.status ? 'Ativo' : 'Inativo'}
        ------------------------------------`);
    });
}

cadastrarUsuario({ nome: "João Silva", email: "joao.silva@email.com", idade: 20, status: true });
cadastrarUsuario({ nome: "Maria Oliveira", email: "maria.o@email.com", idade: 23, status: false });
cadastrarUsuario({ nome: "Carlos Pereira", email: "carlos.p@email.com", idade: 21, status: false });

listarUsuarios();