const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "telaPosGraduacao";

const datasource = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://i.pinimg.com/originals/6e/cc/ca/6eccca12bec62e72da9cf74162b7c551.png",
                    "size": "large"
                }
            ]
        },
        "title": "Cursos de Pós Graduação",
        "listItems": [
            {
                "primaryText": "Análises Clínicas e Patológicas",
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[0].primaryText}"
                    }
                ]
            },
            {
                "primaryText": "Engenharia Estrutural",
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[1].primaryText}"
                    }
                ]
            },
            {
                "primaryText": "Planejamento Tributário",
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[2].primaryText}"
                    }
                ]
            },
            {
                "primaryText": "Produção de Conteúdo Digital",
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[3].primaryText}"
                    }
                ]
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
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

exports.ExibirTelaPosGraduacao = function(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
};


