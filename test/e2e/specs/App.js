const config = require('../nightwatch.conf');

module.exports = {
  // Debe cargar el mavegador una URL
  'test app structure': (browser) => {
    const devServer = browser.globals.devServerURL;

    // Comprobamos cosas de la carga de la web
    browser
      .url(devServer)
      .waitForElementVisible('.codit', 5000)
      .assert.elementPresent('.content__header')
      .assert.containsText('h1', 'Codit')
      .saveScreenshot(`${config.output_folder}/codit.png`)
      .end();
  },
  // Comprobamos cosas del estilo
  'test app style': (browser) => {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementPresent('.developer__name', 5000);

    browser.expect.element('.developer__name').to.have.css('font-weight').which.equal('bold');
    browser.end();
  },
};
