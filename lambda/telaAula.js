const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "telaAula";

const fs = require('fs');
const data = fs.readFileSync('./dados.json');
const usuario = JSON.parse(data).usuarios;
const aulas = JSON.parse(data);
const returnInfoAulas = require('./returnInfoAulas.js');

function exibirTelaAula(handlerInput, materiasComAulasNoDia){
   
  let datasource;
  if (materiasComAulasNoDia.length === 1) {
    datasource = {
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
        "title": "Aula do dia",
        "listItems": [
            {
                "primaryText": `Aula: ${materiasComAulasNoDia[0].nome}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[0].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Professor: ${materiasComAulasNoDia[0].professor}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[1].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Data e hora: ${materiasComAulasNoDia[0].dia_semana} das ${materiasComAulasNoDia[0].horario}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[2].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Sala: ${materiasComAulasNoDia[0].sala}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[3].primaryText}"
                    }
                ]
            },
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
      }
    }
  } else if (materiasComAulasNoDia.length === 2) {
     datasource = {
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
        "title": "Aula do dia",
        "listItems": [
            {
                "primaryText": `Aula: ${materiasComAulasNoDia[0].nome}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[0].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Professor: ${materiasComAulasNoDia[0].professor}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[1].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Data e hora: ${materiasComAulasNoDia[0].dia_semana} das ${materiasComAulasNoDia[0].horario}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[2].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Sala: ${materiasComAulasNoDia[0].sala}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[3].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Aula: ${materiasComAulasNoDia[1].nome}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[0].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Professor: ${materiasComAulasNoDia[1].professor}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[1].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Data e hora: ${materiasComAulasNoDia[1].dia_semana} das ${materiasComAulasNoDia[1].horario}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[2].primaryText}"
                    }
                ]
            },
            {
                "primaryText": `Sala: ${materiasComAulasNoDia[1].sala}`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[3].primaryText}"
                    }
                ]
            },
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
      }
    }
  } else {
     datasource = {
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
        "title": "Aula do dia",
        "listItems": [
            {
                "primaryText": `você não tem aulas marcadas neste dia`,
                "primaryAction": [
                    {
                        "value": "${payload.textListData.listItems[0].primaryText}"
                    }
                ]
            },
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
      }
    }
  }

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

  if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
    // generate the APL RenderDocument directive that will be returned from your skill
    const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
    // add the RenderDocument directive to the responseBuilder
    handlerInput.responseBuilder.addDirective(aplDirective);
  }
}

module.exports = exibirTelaAula;
