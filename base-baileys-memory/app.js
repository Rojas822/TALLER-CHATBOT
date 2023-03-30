const { createBot,
     createProvider,
     createFlow, 
     addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const WsProvider = require('@bot-whatsapp/provider/baileys')
const DBProvider = require('@bot-whatsapp/database/mock')

const perro = addKeyword('perro').addAnswer('Que servicio deseas para tu perro',{
    buttons:[{
        body:'corte de pelo'
    },{
        body:'vacunacion'
    },{
        body:'esterilizacion'
    },{
        body:'otro'
    }
    ]   

})

const gato = addKeyword('gato').addAnswer('Que servicio deseas para tu gato',{
    buttons:[{
        body:'vacunacion'
    },{
        body:'esterilizacion'
    },{
        body:'otro'
    }
        ]
})
const inicio = addKeyword('hola').addAnswer('Hola, bienvenido a la veterinaria')
.addAnswer('Que mascota tienes',{
    buttons:[{
        body:'perro'
    },{
        body:'gato'
    },{
        body:'otro'
    }
    ]
}, null,null,[perro,gato])

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
QRPortalWeb()
main()