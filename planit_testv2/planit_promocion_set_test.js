/// <reference path="./steps.d.ts" />

Feature('Login');
let promoSetData = new DataTable(['nombrePromoSet','producto1','producto2']);
promoSetData.add(['PromoSetAuto1','LB SATIN RG EDP','LB MITHYKA EDP'])
promoSetData.add(['PromoSetAuto2','LB BLENIGHT EDT','LB SATIN RG MINI'])
promoSetData.add(['PromoSetAuto3','LB DEL LIQ','LB EFP'])
promoSetData.add(['PromoSetAuto4','LB DEL COLOR','LB DELICE'])
promoSetData.add(['PromoSetAuto5','LB LIASSON','LB MITHROSE'])
promoSetData.add(['PromoSetAuto6','LB LL ULTRA','LB MITHROSE'])
promoSetData.add(['PromoSetAuto7','LB DELICE POUR','LB 3RO'])


Data(promoSetData).Scenario('Login Administrador Promo Set',(I,generalPage,current) => {
    generalPage.loginPlanit('ggaraycochea','Belcorp20183')
    generalPage.setParametrosVistaPanel('5','1','2019','Promoción Set')
    generalPage.setParametrosPromocionSet('LBEL','201903')
    generalPage.agregarSetSimple(current.nombrePromoSet,current.producto1,current.producto2)
    generalPage.generarPromocionSet(current.nombrePromoSet+'resultado.png');
})