const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "UnisuamCoordenacao";

const datasource = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://www.unisuam.edu.br/wp-content/uploads/2020/07/outras_unidades_polos_Bonsucesso.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "Coordenação",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Tony Stark"
            },
            "locationText": {
                "type": "PlainText",
                "text": "COORDENADOR TI - UNISUAM  / CONTATOS: (21) 9 9999-9999  tonyStark@unisuam.edu.br"
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "Disponibilidade: segunda a sexta, das 14:30h às 18:30h"
            }
        },
        "logoUrl": "https://seeklogo.com/images/U/unisuam-logo-F9DC14A346-seeklogo.com.png"
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

/*const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },*/
    exports.telaCoordenacao = function(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        //return handlerInput.responseBuilder.getResponse();
    }
//};

/*exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();*/