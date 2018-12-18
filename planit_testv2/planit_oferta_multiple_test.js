/// <reference path="./steps.d.ts"/>

Feature('Login')
let ofertaMultipleData = new DataTable(['nombreOfertaMultiple','producto']);
ofertaMultipleData.add(['OferMultAuto1','LB LE TEMPO EDT'])
ofertaMultipleData.add(['OferMultAuto2','LB MITHYKA'])
ofertaMultipleData.add(['OferMultAuto3','LB SATIN'])
ofertaMultipleData.add(['OferMultAuto4','LB BLENIGHT EDT'])
ofertaMultipleData.add(['OferMultAuto5','LB BLEU INT'])
ofertaMultipleData.add(['OferMultAuto6','LB CONCENTRE'])
ofertaMultipleData.add(['OferMultAuto7','LB DERMOCLARITE DIA'])


Data(ofertaMultipleData).Scenario('Login Administrador Oferta Multiple', (I, generalPage,current) => {    
    generalPage.loginPlanit('User','Password')
    generalPage.setParametrosVistaPanel('5','1','2019','Oferta Múltiple')
    generalPage.setParametrosOfertaMultiple('LBEL','201903')
    generalPage.setProductoOfertaMultiple(current.nombreOfertaMultiple,current.producto,'0.8')
    generalPage.generarOfertaMultiple(current.producto+'resultado.png');
})
  
