
let PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function(deployer) {
    // bsctestnet
    let factory = "0x1e023F6A222894a27E31c8ed92A3C16FA1C21B8b";
    let WETH = "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e";
    deployer.deploy(PancakeRouter, factory, WETH);
}


