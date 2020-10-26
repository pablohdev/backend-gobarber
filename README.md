# Recuperação de senha

    **RF**

    - O usuário deve poder recuperar sua senha informando seu email;
    - O usuário deve receber um email com instruções de recuperação de senha;
    - O usuário deve poder resetar sua senha;


    **RNF**

    - Utilizar Mailtrap para testar envio em ambiente de dev;
    - Utilizar Amazon SES para envios em produção;
    - O envio de emails devem acontecer em segundo plano (background Jobs);
    -


    **RN**

    -  O link enviado por email para resetar senha, deve expirar em 2h;
    -  O usuário precisa confirmar a nova senha ao resetar sua senha ;


# Atualização de perfil

    **RF**

    - O usuário pode atualizar seu perfil (nome,email,senha)

    **RNF**

    -

    **RN**

    - O usuário não pode alterar seu email para um email já utilizado
    - Para atualizar sua senha, o usuário deve informar sua senha antiga
    - Para atualizar sua senha, o usuário precisa confirmar a nova senha  nova senha


# Painel do prestador


     **RF**

    - O prestador deve poder listar seus agendamentos de um dia especifico;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;

    **RNF**

    - Os agendamentos do prestador no dia, devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no mongoDB;
    - As notificações do prestador devem ser enviadas em tempo-real  utilizando socket.io

    **RN**

    - A notificação deve ter um status de lida ou não lida, para que o prestador possa controlar





# Agendamento de serviços

     **RF**

    - O usuário deve poder listar todos prestadores de serviços cadastrados;
    - O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
    - O usuário deve poder listar horarios disponiveis em um dia especifico de um prestador;
    - O usuário deve poder listar um novo agendamento com um prestador;



    **RNF**

    - Listagem de prestadores devem ser armazenadas em cache;
    -

    **RN**

    - Cada agendamento deve durar 1h exatamente;
    - Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro horário as 8h, ultimo as 17h);
    - O usuário não pode agendar em um horário já ocupado ;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar horário consigo mesmo ;

