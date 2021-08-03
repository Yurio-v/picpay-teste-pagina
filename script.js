
function myFunction() {

    //variaveis
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    const nascimento = document.getElementById("nascimento").value;
    var anos
    var dt = new Date()

    //dia, mês e ano de aniversário
    const[ano, mes, dia] = nascimento.split('-')

    //dia, mês e ano atual
    var dia_atual = dt.getDate()
    var mes_atual = dt.getMonth() +1
    var ano_atual = dt.getFullYear()
    
   // calculadora

    var anos = ano_atual - ano
    
    
    if(mes_atual < mes || mes_atual == mes && dia_atual < dia){
       anos --
    }


    var mais = anos >=18?'maior de idade':'menor de idade'

    text = `<strong>Nome completo:</strong> ${nome} ${sobrenome} <br> <br>  
    <strong>Data de nascimento:</strong> ${nascimento}<br> <br>
   
    <strong>Idade:</strong> ${anos} e você é ${mais}`
    document.getElementById("resultado").innerHTML = text;
  }