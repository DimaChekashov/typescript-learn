"use strict";
var MPaymentStatus;
(function (MPaymentStatus) {
    MPaymentStatus[MPaymentStatus["Holder"] = 0] = "Holder";
    MPaymentStatus[MPaymentStatus["Processed"] = 1] = "Processed";
    MPaymentStatus[MPaymentStatus["Reversed"] = 2] = "Reversed";
})(MPaymentStatus || (MPaymentStatus = {}));
var MPayment = /** @class */ (function () {
    function MPayment(id) {
        this.status = MPaymentStatus.Holder;
        this.createdAt = new Date();
        this.id = id;
    }
    MPayment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    MPayment.prototype.unholdPayment = function () {
        if (this.status == MPaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = MPaymentStatus.Reversed;
        this.updatedAt = new Date();
    };
    return MPayment;
}());
var mpayment = new MPayment(1);
mpayment.unholdPayment();
console.log(mpayment);
var time = mpayment.getPaymentLifeTime();
console.log(time);
