
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here
  fields: {
    pais:'//*[@id="ddlPais"]',
    usuario: 'CodigoUsuario',
    clave: 'ClaveSecreta',
  },
  submitButton: {css:'#btnLogin'},

  sendForm(pais,usuario,clave){
    I.amOnPage('/');
    I.see('¡Bienvenida');
    I.selectOption(this.fields.pais, pais);
    I.wait(2);
    I.fillField(this.fields.usuario,usuario);
    I.fillField(this.fields.clave,clave);
    I.wait(2);
    I.click(this.submitButton);
    I.wait(2);
    I.amOnPage('/Bienvenida');
    I.click('//*[@id="PopShowroomVenta"]/div/a/img');
    I.see('MI ESTADO DE CUENTA');
    I.wait('2');
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
  },
   sendForm1(pais,usuario,clave){
    I.amOnPage('/');
    I.resizeWindow(1920,1080);
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption(this.fields.pais, pais);
    I.wait(2);
    I.fillField(this.fields.usuario,usuario);
    I.fillField(this.fields.clave,clave);
    I.click(this.submitButton);
    I.wait(2);
    I.amOnPage('/Bienvenida');
    I.wait(1);
    I.click({css: 'a.cerrar-popup'});
    I.wait(1);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
  },

  loginPlanit(usuario,clave){

    I.say('Deseo loguearme como administrador');
    I.amOnPage('/');
    I.fillField('//*[@id="txtUsuario"]',usuario);
    I.fillField('//*[@id="txtContrasena"]',clave);
    I.click('//*[@id="imgIngresar"]');
    I.wait('3')
    I.see('Hola '+usuario);
    I.click('//*[@id="spanExpandir"]')
  },

  setParametrosVistaPanel(region,marca,año,nomVista){
    I.selectOption('//*[@id="slcRegionMenu"]',region)
    I.selectOption('//*[@id="slcMarcaMenu"]',marca)
    I.selectOption('//*[@id="slcAnioMenu"]',año)

    //Abrir menu Matriz
    I.click('//*[@id="divMenu"]/ul/li[1]')

    //Entrar a Matriz
    I.click('//*[@id="divMenu"]/ul/li[1]/div/ul/li[1]/span/a')
    I.waitForNavigation()
    I.see('Matriz')

    //Esperar y cerrar cuadro de diálogo
    I.wait('28')
    I.retry('5').click('//*[@id="button-1215-btnIconEl"]')
    
    //Seleccionar Vista
    I.retry('3').click('//*[@id="ext-gen1056"]')

    
    I.click("//li[contains(text(),'" + nomVista + "')]")
    I.wait('3')
  },

  setProductoOfertaMultiple(nomVinculada,producto,pup){
    I.fillField('//*[@id="NombreVinculacion"]',nomVinculada)

    I.doubleClick('//*[@id="GrillaOferta"]/div[1]/div/div/div/table/tbody/tr[6]/td[2]')
    I.fillField('//*[@id="GrillaOferta"]/div[4]/textarea',producto)
    I.wait('1')
    
    
    I.pressKey('ArrowDown')
    I.pressKey('Enter')
    I.wait('8')

    I.doubleClick('//*[@id="GrillaOferta"]/div[1]/div/div/div/table/tbody/tr[1]/td[6]')
    I.fillField('//*[@id="GrillaOferta"]/div[5]/textarea',pup)
    I.pressKey('Enter')
  },

  
  agregarSetSimple(nomSetSimple,prod1,prod2){
    I.click('//*[@id="btnSetSimple"]')    
    I.wait('5')
    I.fillField('//*[@id="NombreSet"]',nomSetSimple)
    I.wait('1')
    I.doubleClick('//*[@id="divGrillaPanel"]/div[1]/div/div/div/table/tbody/tr/td[10]')
    I.fillField('//*[@id="divGrillaPanel"]/div[5]/textarea',prod1)
    I.wait('5')
    I.pressKey('ArrowDown')
    I.pressKey('Enter')
    I.wait('12')
    I.doubleClick('//*[@id="divGrillaPanel"]/div[1]/div/div/div/table/tbody/tr[2]/td[10]')
    I.fillField('//*[@id="divGrillaPanel"]/div[5]/textarea',prod2)
    I.wait('5')
    I.pressKey('ArrowDown')
    I.pressKey('Enter')
    I.wait('12')
    I.click('//*[@id="btnGuardar"]')
    I.wait('10')
    I.click('//*[@id="btnCerrar"]')
    I.wait('2')
  },

  setParametrosPromocionSet(marca,campaign){
    //Seleccionar Marca
    I.click('//*[@id="divComboMarca"]')
    //I.click('//*[@id="ext-gen1536"]');
    I.click("//li[contains(text(),'" + marca + "')]");
    // LBEL     ESIKA      CYZONE

    I.click('//*[@id="divComboVinculaciones"]');
    I.click("//span[contains(text(),'Seleccionar todos')]");

    I.click('//*[@id="divComboCampania"]');
    I.click("//li[contains(text(),'"+campaign+"')]");

    I.click('//*[@id="imgProcesar"]');

    I.wait('3');

    I.click('//*[@id="lnkCrearPromoSet"]/span[2]');

    I.wait('3')
  },

  setParametrosOfertaMultiple(marca,campaign){
    //Seleccionar Marca
    I.click('//*[@id="divComboMarca"]')
    //I.click('//*[@id="ext-gen1536"]');
    I.click("//li[contains(text(),'" + marca + "')]");
    // LBEL     ESIKA      CYZONE

    I.click('//*[@id="divComboVinculaciones"]');
    I.click("//span[contains(text(),'Seleccionar todos')]");

    I.click('//*[@id="divComboCampania"]');
    I.click("//li[contains(text(),'"+campaign+"')]");

    I.click('//*[@id="imgProcesar"]');

    I.wait('3');

    //Crear Oferta Múltiple
    I.click('//*[@id="lnkCrearRangoDeUnidadesOValores"]')
    I.wait('4')
  },

  generarPromocionSet(resultado){
    I.selectOption('//*[@id="Condicion"]','160')
    I.fillField('//*[@id="CondicionUU"]','1')

    I.click('//*[@id="btnBuscarTacticas"]')
    I.wait('5')

    I.selectOption('//*[@id="slcAnioBuscador"]','2019')
    I.selectOption('//*[@id="slcCampaniaBuscador"]','3')
    I.wait('2')
  
    I.wait('1')
    I.click('//*[@id="lnkObtenerBuscador"]')
    I.wait('1')
    I.click('//*[contains(@class,"x-column-header x-column-header-checkbox x-column-header-align-left x-box-item x-column-header-default x-unselectable x-column-header-first")]')
 //*[@id="gridview-1511-record-ext-record-847"]
    I.scrollTo('#imgAceptarBuscador')
    I.click('//*[@id="imgAceptarBuscador"]')
    //I.click('//*[@id="imgAceptarBuscador"]')
    
    I.wait('15')
    
    I.saveScreenshot(resultado,true)
    I.click('//*[@id="btnGuardarPromocion"]')
    I.wait('15')
    I.click('//*[@id="btnCerrarPromocion"]')
  },

  generarOfertaMultiple(resultado){
    I.wait('2')

    I.click('//*[@id="lnkAgregarNivel"]')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[5]/td[11]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','0.3')
    I.pressKey('Enter')

    I.wait('2')

    I.click('//*[@id="lnkAgregarNivel"]')
    I.click('//*[@id="lnkAgregarNivel"]')

    I.wait('2')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[6]/td[2]')
    I.wait('1')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','3')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[6]/td[4]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','130900')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[6]/td[11]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','0.25')
    I.pressKey('Enter')

    

    I.click('//*[@id="lnkAgregarNivel"]')
    I.click('//*[@id="lnkAgregarNivel"]')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[7]/td[2]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','5')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[7]/td[4]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','189900')
    I.doubleClick('//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[7]/td[11]')
    I.fillField('//*[@id="GrillaNiveles"]/div[5]/textarea','0.3')
    I.pressKey('Enter')

    I.click('//*[@id="lnkGuardarPanel"]')
    I.wait('8')
    I.saveScreenshot(resultado,true)
    I.click('//*[@id="btnCerrar"]')
    I.wait('8')

    //I.see("TEST OFERTAS MULTIPLES")
  }


     
}
