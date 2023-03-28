/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const parTelaAula = require('./telaAula.js');
const exibirTelaNota = require('./telaNotas.js');
const parTelaCoordenador = require('./telaCoordenador.js');
const parTelaHome = require ('./telaHome.js');
const parTelaPosGraduacao = require ('./telaPosGraduacao.js');
const parTelaMestrado = require ('./telaMestrado.js');
const parTelaInscricao = require ('./telaInscricao.js');

const fs = require('fs');
const data = fs.readFileSync('./dados.json');
const usuarios = JSON.parse(data).usuarios;

const filtrarUsuario = require('./filterUser.js');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        
        const speakOutput = "Universidade Augusto Mota. Compromisso para a vida toda. Aqui você poderá acessar o seu calendário de aulas, o boletim de notas, horário do seu coordenador e mais. O que você gostaria ?";
        parTelaHome.ExibirTelaHome(handlerInput);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const AulaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AulaIntent';
    },
    handle(handlerInput) {
        
        const parDiaSemana =handlerInput.requestEnvelope.request.intent.slots.diaSemana.value;
        let speakOutput = 'não entendi. pode repitir?';
       
        switch(parDiaSemana){
            
            case "hoje":
                speakOutput = "Hoje você tem aula de Orientação a Objeto, das 18:30 às 22:10";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "amanhã":
                speakOutput = "Amanhã você terá aula de arquitetura e infraestrutura em núvem";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;

            case "2ª": case "2.ª": case"2.ª feira": case"segunda": case"segunda feira":
                speakOutput = "Segunda você terá aula de matemática das 18 às 22 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "3ª": case "3.ª": case "3.ª feira": case "terça": case "terça feira":
                 speakOutput = "terça você terá aula de web design das 19 às 22 horas";
                 parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "4ª": case "4.ª": case "4.ª feira": case "quarta": case "quarta feira":
                speakOutput = "quarta você terá aula de infraestrutura de rede das 17 ás 20 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
                
            case "5ª": case "5.ª": case "5.ª feira": case "quinta": case "quinta feira":
                speakOutput = "quinta você terá aula de excel das 18 às 20:30 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
                
            case "6ª": case "6.ª": case "6.ª feira": case "sexta": case "sexta feira":
                speakOutput="sexta você terá aula de lógica das 15 às 19 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "sábado": case "domingo":
                speakOutput = "você não possue aulas marcadas neste dia";
                parTelaAula.ExibirTelaAula(handlerInput);
            break; 
        }
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AulaPassadoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AulaPassadoIntent';
    },
    
    handle(handlerInput) {
       
        const parDiaSemana =handlerInput.requestEnvelope.request.intent.slots.diaSemanaPas.value;
        let speakOutput = 'não entendi. pode repitir?';
       
        switch(parDiaSemana){
            
            case "hoje":
                speakOutput = "Hoje você teve aula de Orientação a Objeto, das 18:30 às 22:10";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "ontem": 
                speakOutput = "Ontem você teve aula de gerênciaamento de software, das 18:45 às 22 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;

            case "2ª": case "2.ª": case"2.ª feira" : case"segunda": case"segunda feira":
                speakOutput = "Segunda você teve aula de matemática das 18 às 22 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "3ª": case "3.ª": case "3.ª feira": case "terça": case "terça feira":
                 speakOutput = "terça você teve aula de web design das 19 às 22 horas";
                 parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "4ª": case "4.ª": case "4.ª feira": case "quarta": case "quarta feira":
                speakOutput = "quarta você teve aula de infraestrutura de rede das 17 ás 20 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
                
            case "5ª": case "5.ª": case "5.ª feira": case "quinta": case "quinta feira":
                speakOutput = "quinta você teve aula de excel das 18 às 20:30 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
                
            case "6ª": case "6.ª": case "6.ª feira": case "sexta": case "sexta feira":
                speakOutput="sexta você teve aula de lógica das 15 às 19 horas";
                parTelaAula.ExibirTelaAula(handlerInput);
            break;
            
            case "sábado": case "domingo":
                speakOutput="você não teve aulas marcadas neste dia";
                parTelaAula.ExibirTelaAula(handlerInput);
            break; 
        }
    
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const HorarioCoordenadorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HorarioCoordenadorIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Seu coordenador está disponível segunda e sexta, das 14:30 às 18:30 horas na unidade Maracanã';
        parTelaCoordenador.ExibirTelaCoordenador(handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PosGraduacaoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PosGraduacaoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A universidade fornece os seguintes cursos de Pós Graduação. Análises Clínicas e Patológicas, Engenharia Estrutural, Planejamento Tributário e Produção de Conteúdo Digital.';
        parTelaPosGraduacao.ExibirTelaPosGraduacao(handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MestradoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MestradoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A universidade fornece os seguintes cursos de Mestrado. Mestrado Acadêmico em Ciências da Reabilitação, Mestrado Profissional em Desenvolvimento Local.';
        parTelaMestrado.ExibirTelaMestrado(handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InscricaoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InscricaoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Você precisa ter concluído o ensino médio para realizar a inscrição. Tendo atendido estes requisitos, inscreva-se pelo site www.unisuam.edu.br, ou ligue para o telefone 21 3882-9797. Ainda também é possível inscrever se pelo Whatsapp através da operação coruja no número 21 996-807-990.';
         parTelaInscricao.ExibirTelaInscricao(handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const notasMateriasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'notasMateriasIntent';
    },
    
    handle(handlerInput) {
        
        const notas = filtrarUsuario(usuarios, handlerInput);
        
        let speakOutput = `Suas notas são, na A1 nota ${notas.notas.a1}, na A2 nota ${notas.notas.a2}, na A3 nota ${notas.notas.a3} e sua média final é ${notas.notas.media}.`;
        exibirTelaNota(handlerInput);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};





const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Tchau!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Desculpe, eu não entendi. Pode repetir?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AulaIntentHandler,
        AulaPassadoIntentHandler,
        HorarioCoordenadorIntentHandler,
        PosGraduacaoIntentHandler,
        MestradoIntentHandler,
        InscricaoIntentHandler,
        notasMateriasIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();