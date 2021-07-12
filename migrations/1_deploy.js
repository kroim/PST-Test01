
let PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function(deployer) {
    // bsctestnet
    let _feeToSetter = "0x27D9D39eE3a82A11Dd5105FEaac63E01b8aEDD41";
    deployer.deploy(PancakeFactory, _feeToSetter);
}


