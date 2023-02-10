const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "UnisuamNotas";

const datasource = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.unisuam.edu.br/wp-content/uploads/2020/07/outras_unidades_polos_Bonsucesso.jpg",
            "titleText": "Suas notas deste semestre",
            "primaryText": "",
            "choices": [
                "AC:",
                "AI:",
                "Média semestral:"
            ],
            "choiceListType": "alphabet",
            "headerAttributionImage": "https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg",
            "footerHintText": ""
        }
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
    exports.telaNotas = function(handlerInput) {
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