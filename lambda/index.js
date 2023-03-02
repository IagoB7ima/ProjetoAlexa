/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const tela = require('./tela.js');

const telaNotas = require('./telaNotas.js');

const telaCoordenacao = require('./telaCoordenacao');

const telaAlexa = require('./unisuamAlexa.js');


const LaunchRequestHandler = {

    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
         if (sessionAttributes['mensagem-exibida']) {
            // A mensagem já foi exibida antes, retorna uma resposta sem a mensagem
            return handlerInput.responseBuilder
            .speak('Bem-vindo de volta, em que posso ajudá lo!.')
            .getResponse();
        }else{
            // A mensagem ainda não foi exibida, define o atributo de sessão como verdadeiro e exibe a mensagem
            sessionAttributes['mensagem-exibida'] = true;
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            const speakOutput = 'Centro Universitário Augusto Motta. compromisso para a vida toda. Você poderá acessar o seu calendário de aulas, o boletim de notas, horário do seu coordenador e mais. O que você gostaria?';
            telaAlexa.telaAlexa(handlerInput);
            return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
            
        }
    }
};


const NotasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NotasIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Você tirou 9.3 na AC, e 9.1 na AI. totalizando assim 9.2 na sua média semestral.`;
        telaNotas.telaNotas(handlerInput);
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
        const parDiaDaSemana = handlerInput
        .requestEnvelope
        .request
        .intent
        .slots
        .diaSemana
        .value;
        
        
        let speakOutput = 'Não entendi. Pode repetir?';
        
        
            
       switch (parDiaDaSemana){
            
            case 'hoje': 
                speakOutput = 'Hoje, você terá aula de álgebra linear';
                tela.telaUni(handlerInput);
                
            break;
            
            case 'amanhã': 
                speakOutput = 'amanhã, você terá aula de matrizes e de vetores';
                tela.telaUni(handlerInput);
            break;
        
            case '2.ª feira':
            case '2ª': 
                speakOutput = 'você terá aula de estatística e de probabilidade';
                tela.telaUni(handlerInput);
            break;
            
            case 'terça':
            case 'terça-feira':
            case '3.ª feira':
            case '3ª':
                speakOutput = 'você terá aula de gestão de projetos';
                tela.telaUni(handlerInput);
            break;
            
            case '4.ª feira':
            case '4ª':
                speakOutput = 'você terá aula de orientação a ojetos';
                tela.telaUni(handlerInput);
            break;

            case '5.ª feira':
            case '5ª':
                speakOutput = 'Você terá aula de ética';
                tela.telaUni(handlerInput);
            break;
            
            case '6ª':
            case '6.ª feira':
            case '6.ª':
                speakOutput = 'você terá aula de filosofia';
                tela.telaUni(handlerInput);
            break;
            
            case 'sábado': 
                speakOutput = 'você terá aula de geografia e de história';
                tela.telaUni(handlerInput);
            break;
            case 'domingo': 
                speakOutput = 'Você não tem aula neste dia';
                tela.telaUni(handlerInput);
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
        const parDiaDaSemanaPassado = handlerInput
        .requestEnvelope
        .request
        .intent
        .slots
        .diaSemanaPassado
        .value;
        
        
        let speakOutput = 'Não entendi. Pode repetir?';
        
        
            
       switch (parDiaDaSemanaPassado){
            case 'ontem':
                speakOutput = 'ontem, você teve aula de álgebra linear';
                tela.telaUni(handlerInput);
            break;  
            case 'hoje':
                speakOutput = 'hoje, você teve aula de álgebra linear';
                tela.telaUni(handlerInput);
            break;
        
            case '2.ª feira':
            case '2ª': 
                speakOutput = 'você teve aula de estatística e de probabilidade';
                tela.telaUni(handlerInput);
            break;
            
            case 'terça':
            case 'terça-feira':
            case '3.ª feira':
            case '3ª':
                speakOutput = 'você teve aula de gestão de projetos';
                tela.telaUni(handlerInput);
            break;
            
            case '4.ª feira':
            case '4ª':
                speakOutput = 'você teve aula de orientação a ojetos';
                tela.telaUni(handlerInput);
            break;

            case '5.ª feira':
            case '5ª':
                speakOutput = 'Você teve aula de ética';
                tela.telaUni(handlerInput);
            break;
            
            case '6ª':
            case '6.ª feira':
            case '6.ª':
                speakOutput = 'você teve aula de filosofia';
                tela.telaUni(handlerInput);
            break;
            
            case 'sábado': 
                speakOutput = 'você teve aula de geografia e de história';
                tela.telaUni(handlerInput);
            break;
            case 'domingo': 
                speakOutput = 'Você não teve aula neste dia';
                tela.telaUni(handlerInput);
            break;
        }
        
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();

  }
};

const HorarioCoordenadorIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HorarioCoordenadorIntent';
    },
    handle(handlerInput) {

        const speakOutput = 'Seu coordenador está disponível de segunda a sexta, a partir das 14:30 até às 18:30 na unidade de Bonsucesso';
        telaCoordenacao.telaCoordenacao(handlerInput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
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
        const speakOutput = 'Adeus, espero ter te ajudado!';

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
        const speakOutput = 'Desculpe não entendi, pode repetir!';

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
        HelloWorldIntentHandler,
        AulaIntentHandler,
        AulaPassadoIntentHandler,
        NotasIntentHandler,
        HorarioCoordenadorIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();