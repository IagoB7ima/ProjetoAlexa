const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "telaCoordenador";

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
                    "url": "https://img.freepik.com/vetores-gratis/fundo-de-gradiente-de-linhas-azuis-dinamicas_23-2148995756.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "Horários  do Coordenador",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://f.i.uol.com.br/fotografia/2022/06/15/165531966362aa2c6f3f705_1655319663_3x2_md.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Tony Ramos"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": "Disponibilidade: Segunda, Sexta, das 14:30 às 18:30."
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "e-mail: tony@deFerro.com.br                               "
            }
        },
        "buttons": [
            {
                "text": ""
            },
            {
                "text": ""
            }
        ],
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

exports.ExibirTelaCoordenador = function(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
};

