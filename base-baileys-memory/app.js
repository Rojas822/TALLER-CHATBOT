const { createBot,
     createProvider,
     createFlow, 
     addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const WsProvider = require('@bot-whatsapp/provider/baileys')
const DBProvider = require('@bot-whatsapp/database/mock')

const inicio = addKeyword('hola').addAnswer('Hola, bienvenido a la veterinaria')

const main = async () => {
    const adapterDB = new DBProvider()
    const adapterFlow = new createFlow([inicio])
    const adapterProvider = new createProvider(WsProvider) 

    createbot(
        {
        flow:adapterFlow,
        provider: adapterProvider,
        database : adapterDB,
        }
    )
}

main()