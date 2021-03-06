const extend = require('js-base/core/extend');
const PgBeforeGameDesign = require('ui/ui_pgBeforeGame');
const Router = require("sf-core/ui/router");

const PgBeforeGame = extend(PgBeforeGameDesign)(
  function(_super) {
    _super(this);
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    this.btnGo.onPress = () => {
      Router.go("pgWait");
    };
  });

function onShow(superOnShow) {
  superOnShow();
}

function onLoad(superOnLoad) {
  superOnLoad();
}

module && (module.exports = PgBeforeGame);
