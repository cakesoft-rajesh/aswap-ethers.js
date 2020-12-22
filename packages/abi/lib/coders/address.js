"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_address_1 = require("@alayanetwork/ethers-address");
var ethers_bytes_1 = require("@alayanetwork/ethers-bytes");
var web3_utils_1 = require("@alayanetwork/web3-utils");
var abstract_coder_1 = require("./abstract-coder");
var AddressCoder = /** @class */ (function (_super) {
    __extends(AddressCoder, _super);
    function AddressCoder(localName) {
        return _super.call(this, "address", "address", localName, false) || this;
    }
    AddressCoder.prototype.encode = function (writer, value) {
        try {
            ethers_address_1.getAddress(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        if (web3_utils_1.isBech32Address(value)) {
            value = web3_utils_1.decodeBech32Address(value);
        }
        return writer.writeValue(value);
    };
    AddressCoder.prototype.decode = function (reader) {
        return ethers_address_1.getAddress(ethers_bytes_1.hexZeroPad(reader.readValue().toHexString(), 20));
    };
    return AddressCoder;
}(abstract_coder_1.Coder));
exports.AddressCoder = AddressCoder;
