"use strict";
var PaymentStatusTwo;
(function (PaymentStatusTwo) {
    PaymentStatusTwo["Success"] = "success";
    PaymentStatusTwo["Failed"] = "failed";
})(PaymentStatusTwo || (PaymentStatusTwo = {}));
function isSuccess(res) {
    if (res.status === PaymentStatusTwo.Success) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
