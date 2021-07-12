
let BananaToken = artifacts.require("BananaToken");

module.exports = function(deployer) {
    // bsctestnet
    let factory = "0x1e023F6A222894a27E31c8ed92A3C16FA1C21B8b";
    // let WETH = "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e";
    let WETH = "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f";
    deployer.deploy(BananaToken);
}