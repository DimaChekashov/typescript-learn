"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function getFullName(userEntity) {
    return userEntity.firstname + " " + userEntity.surname;
}
var user = {
    firstname: 'Dima',
    surname: 'Chekashov',
    city: 'Zainsk',
    age: 23
};
console.log(getFullName(user));
var skills = ["Dev", "DevOps", "Testing"];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    console.log(skill);
}
skills
    .filter(function (skill) { return skill !== "DevOps"; })
    .map(function (skill) { return skill + " Skill"; })
    .reduce(function (a, b) { return a + b; });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
var res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Success');
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
action(3);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
function test(x) {
}
test(Roles);
var skills4 = ["Dev", 15];
var skills5 = ["Dev", "Dev2"];
var skills2 = ["Dev", 15];
var age = skills2[1];
var skillName = skills2[0];
var skillName2 = skills2[0], age2 = skills2[1];
var skills3 = ["Dev", 15, true, false, true];
var info;
var Statuses;
(function (Statuses) {
    Statuses["PUBLISHED"] = "published";
    Statuses["DRAFT"] = "draft";
    Statuses["DELETED"] = "deleted";
})(Statuses || (Statuses = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/faqs', {
                        method: 'POST',
                        body: JSON.stringify(req)
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function fetchWithAuthTwo(url, method) {
    return 1;
}
// type UserWithRole = {
//     user: User,
//     role: Role
// }
var user_2 = {
    name: 'Joe',
    age: 33,
    skills: ['1', '2'],
    id: 1
};
var user_4 = {
    name: 'Dunkan',
    age: 22
};
var user_3 = {
    name: 'Joe',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log: function (id) {
        return '';
    }
};
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('some', 'get');
var a = "qwerty";
var method = 'post';
fetchWithAuth(a, method);
var method_2 = 'post';
fetchWithAuth(a, method_2);
function genereateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) {
    }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            var _ = action;
            throw new Error('Нет такого action!');
    }
}
function isString(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    genereateError('qwerty');
}
var n = null;
var n1 = null;
function getCat() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Вася'
        };
    }
}
var cat = getCat();
if (cat) {
    var n55 = cat.name;
}
var block = {
    login: 'a@a.ru',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(block) {
    var _a;
    var t = (_a = block.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    var t = param !== null && param !== void 0 ? param : multiply(5);
}
var d = 5;
var x = d.toString();
var s = new String(d).valueOf();
var f = new Boolean(d).valueOf();
var z = 'asdasd';
var v = parseInt(z);
var box = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
};
var admin = __assign(__assign({}, box), { role: 1 });
function userToAdmin(box) {
    return {
        name: box.name,
        role: 1
    };
}
var tbox = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
};
function logTId(id) {
    if (isTString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isTString(x) {
    return typeof x === 'string';
}
function isAdmin(tbox) {
    return 'role' in tbox;
}
function isAdminAlternative(tbox) {
    return tbox.role !== undefined;
}
function setRole(tbox) {
    if (isAdmin(tbox)) {
        tbox.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
function logId(id) {
    if (typeof id === "string") {
        console.log(id.toLocaleUpperCase);
    }
    else if (typeof id === "number") {
        console.log(id++);
    }
    else {
        console.log(id ? 'true' : 'false');
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
var input;
input = 3;
input = ['asd', 'asd'];
function run(i) {
    if (typeof i === "number") {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error) {
                        console.log(error_1.message);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function () {
        var error_2, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    e = error_2;
                    console.log(e.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loggId(id) {
    console.log(id);
}
var c = loggId(1);
function multiplyy(f, s) {
    if (!s) {
        return f * f;
    }
}
var f1 = function () {
};
var f2 = function () {
    return true;
};
var b = f2();
var cars = ['BMW', 'Mersedes', 'Lexus'];
var person = {
    s: ['']
};
cars.forEach(function (car) { return person.s.push(car); });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
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
var AController = /** @class */ (function () {
    function AController() {
    }
    AController.prototype.handleWithLogs = function (req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    };
    return AController;
}());
var AUserController = /** @class */ (function (_super) {
    __extends(AUserController, _super);
    function AUserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUserController.prototype.handle = function (req) {
        console.log(req);
    };
    return AUserController;
}(AController));
// new AController() - error
var ac = new AUserController();
ac.handleWithLogs("Request");
var CUser = /** @class */ (function () {
    function CUser(name) {
        this.name = name;
    }
    return CUser;
}());
var cuser = new CUser('Вася');
console.log(cuser);
cuser.name = 'Дима';
console.log(cuser);
var CAdmin = /** @class */ (function () {
    function CAdmin() {
    }
    return CAdmin;
}());
var cadmin = new CAdmin();
cadmin.role = 1;
var CoUser = /** @class */ (function () {
    function CoUser(name) {
        this.name = name;
    }
    return CoUser;
}());
var CoUsers = /** @class */ (function (_super) {
    __extends(CoUsers, _super);
    function CoUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoUsers.prototype.searchByName = function (name) {
        return this.filter(function (u) { return u.name === name; });
    };
    CoUsers.prototype.toString = function () {
        return this.map(function (u) { return u.name; }).join(', ');
    };
    return CoUsers;
}(Array));
var coUsers = new CoUsers();
coUsers.push(new CoUser('Vasya'));
coUsers.push(new CoUser('Dima'));
console.log(coUsers.toString());
var CoUserList = /** @class */ (function () {
    function CoUserList() {
    }
    CoUserList.prototype.push = function (u) {
        this.users.push(u);
    };
    return CoUserList;
}());
var CoPayment = /** @class */ (function () {
    function CoPayment() {
    }
    return CoPayment;
}());
var CoUserWithPayment = /** @class */ (function (_super) {
    __extends(CoUserWithPayment, _super);
    function CoUserWithPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoUserWithPayment;
}(CoPayment));
var CoUserWithPayment2 = /** @class */ (function () {
    function CoUserWithPayment2(user, payment) {
        this.payment = payment;
        this.user = user;
    }
    return CoUserWithPayment2;
}());
var COUser = /** @class */ (function () {
    function COUser(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        else if (typeof age === 'number') {
            this.age = age;
        }
    }
    return COUser;
}());
var couser = new COUser('Вася');
var couser2 = new COUser();
var couser3 = new COUser(23);
var couser4 = new COUser('Вася', 23);
var EPayment = /** @class */ (function () {
    function EPayment(id) {
        this.status = 'new';
        this.id = id;
    }
    EPayment.prototype.pay = function () {
        this.status = 'paid';
    };
    return EPayment;
}());
var ParsistendEPayment = /** @class */ (function (_super) {
    __extends(ParsistendEPayment, _super);
    function ParsistendEPayment() {
        var _this = this;
        var id = Math.random();
        _this = _super.call(this, id) || this;
        return _this;
    }
    ParsistendEPayment.prototype.save = function () {
    };
    ParsistendEPayment.prototype.pay = function (date) {
        _super.prototype.pay.call(this);
        if (date) {
            this.paidAt = date;
        }
    };
    return ParsistendEPayment;
}(EPayment));
new ParsistendEPayment();
/* features of inheritance */
var EUser = /** @class */ (function () {
    function EUser() {
        this.name = 'user';
        console.log(this.name);
    }
    return EUser;
}());
var EAdmin = /** @class */ (function (_super) {
    __extends(EAdmin, _super);
    function EAdmin() {
        var _this = _super.call(this) || this;
        _this.name = 'admin';
        console.log(_this.name);
        return _this;
    }
    return EAdmin;
}(EUser));
new EAdmin();
// new Error('');
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message, code) {
        var _this = _super.call(this, message) || this;
        _this.code = code !== null && code !== void 0 ? code : 500;
        return _this;
    }
    return HttpError;
}(Error));
var GUser = /** @class */ (function () {
    function GUser() {
    }
    Object.defineProperty(GUser.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (l) {
            this._login = 'user-' + l;
            this.createdAt = new Date();
        },
        enumerable: false,
        configurable: true
    });
    GUser.prototype.getPassword = function (p) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return GUser;
}());
var guser = new GUser();
guser.login = 'myLogin';
console.log(guser);
console.log(guser.login);
var Looger = /** @class */ (function () {
    function Looger() {
    }
    Looger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    Looger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log.apply(console, args);
                return [2 /*return*/];
            });
        });
    };
    return Looger;
}());
var ImUser = /** @class */ (function () {
    function ImUser() {
    }
    ImUser.prototype.delete = function () {
        throw new Error("Method not implemented.");
    };
    ImUser.prototype.pay = function (paymentId) {
        ///
    };
    return ImUser;
}());
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
var SUserService = /** @class */ (function () {
    function SUserService(id) {
    }
    SUserService.getUser = function (id) {
        return SUserService.db.findById(id);
    };
    SUserService.prototype.create = function () {
        SUserService.db;
    };
    return SUserService;
}());
(function () {
    SUserService.db = 'sdf';
})();
SUserService.getUser(1);
var inst = new SUserService(1);
inst.create();
var TUserBuilder = /** @class */ (function () {
    function TUserBuilder() {
    }
    TUserBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    TUserBuilder.prototype.isAdmin = function () {
        return this instanceof TAdminBuilder;
    };
    return TUserBuilder;
}());
var TAdminBuilder = /** @class */ (function (_super) {
    __extends(TAdminBuilder, _super);
    function TAdminBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TAdminBuilder;
}(TUserBuilder));
var tres = new TUserBuilder().setName('Vasya');
var tres2 = new TAdminBuilder().setName('Vasya');
var ttuser = new TUserBuilder();
if (ttuser.isAdmin()) {
    console.log(ttuser);
}
else {
    console.log(ttuser);
}
var TPayment = /** @class */ (function () {
    function TPayment() {
        var _this = this;
        this.date = new Date();
        this.getDateArrow = function () {
            return _this.date;
        };
    }
    TPayment.prototype.getDate = function () {
        return this.date;
    };
    return TPayment;
}());
var tp = new TPayment();
var tuser = {
    id: 1,
    paymentDate: tp.getDate.bind(tp),
    paymentDateArrow: tp.getDateArrow
};
console.log(tp.getDate());
console.log(tuser.paymentDate());
console.log(tuser.paymentDateArrow());
var TPaymentPersistent = /** @class */ (function (_super) {
    __extends(TPaymentPersistent, _super);
    function TPaymentPersistent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TPaymentPersistent.prototype.save = function () {
        return this.getDateArrow();
    };
    return TPaymentPersistent;
}(TPayment));
console.log(new TPaymentPersistent().save());
var _VVehicle_price;
var VVehicle = /** @class */ (function () {
    function VVehicle() {
        _VVehicle_price.set(this, void 0);
    }
    Object.defineProperty(VVehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (m) {
            this._model = m;
            __classPrivateFieldSet(this, _VVehicle_price, 100, "f");
        },
        enumerable: false,
        configurable: true
    });
    VVehicle.prototype.isPriceEqual = function (v) {
        return __classPrivateFieldSet(this, _VVehicle_price, __classPrivateFieldGet(v, _VVehicle_price, "f"), "f");
    };
    VVehicle.prototype.addDamage = function (damage) {
        this.damages.push(damage);
    };
    return VVehicle;
}());
_VVehicle_price = new WeakMap();
var EuroTruck = /** @class */ (function (_super) {
    __extends(EuroTruck, _super);
    function EuroTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuroTruck.prototype.setRun = function (km) {
        this.run = km / 0.62;
    };
    return EuroTruck;
}(VVehicle));
new VVehicle().make;
var TUser = /** @class */ (function () {
    function TUser() {
        this.skills = [];
    }
    TUser.prototype.addSkill = function (skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    };
    return TUser;
}());
function run(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return '';
    }
}
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date) {
        this.date = date;
    }
    return Delivery;
}());
var HomeDelivdery = /** @class */ (function (_super) {
    __extends(HomeDelivdery, _super);
    function HomeDelivdery(date, address) {
        var _this = _super.call(this, date) || this;
        _this.address = address;
        return _this;
    }
    return HomeDelivdery;
}(Delivery));
var ShopDelivdery = /** @class */ (function (_super) {
    __extends(ShopDelivdery, _super);
    function ShopDelivdery(shopId) {
        var _this = _super.call(this, new Date()) || this;
        _this.shopId = shopId;
        return _this;
    }
    return ShopDelivdery;
}(Delivery));
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.deleteProduct = function (productId) {
        this.products = this.products.filter(function (p) { return p.id !== productId; });
    };
    Cart.prototype.getSum = function () {
        return this.products
            .map(function (p) { return p.price; })
            .reduce(function (prev, sum) { return sum + prev; });
    };
    Cart.prototype.setDelivery = function (delivery) {
        this.delivery = delivery;
    };
    Cart.prototype.checkOut = function () {
        if (this.products.length === 0) {
            throw new Error("Корзина пустая!");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки!");
        }
        return {
            success: true
        };
    };
    return Cart;
}());
var cart = new Cart();
cart.addProduct(new Product(1, 'Печеньки', 40));
cart.addProduct(new Product(2, 'Торт', 200));
cart.addProduct(new Product(3, 'Шоколад', 100));
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivdery(new Date(), 'Some address'));
console.log(cart.getSum());
console.log(cart.checkOut());
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.printDate = function (date) {
        this.log(date.toString());
    };
    return Logger;
}());
var Weather = /** @class */ (function (_super) {
    __extends(Weather, _super);
    function Weather() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Weather.prototype.log = function (message) {
        console.log(message);
    };
    Weather.prototype.logWithDate = function (message) {
        this.printDate(new Date());
        this.log(message);
    };
    return Weather;
}(Logger));
var weather = new Weather();
weather.logWithDate("Небольшой дождь!");
var ga = [1, 2, 3];
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var gga;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, regect) {
                        resolve(1);
                    })];
                case 1:
                    gga = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var gcheck = {
    drive: true,
    kpp: false
};
function logMiddleware(data) {
    console.log(data);
    return data;
}
var gres = logMiddleware("Hello World!");
function getSplitedHalf(data) {
    var l = data.length / 2;
    return data.splice(0, l);
}
var garr = getSplitedHalf([1, 2, 3, 4, 5, 6]);
var Resp = /** @class */ (function () {
    function Resp(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
    return Resp;
}());
var cres = new Resp('data');
var HTTPResp = /** @class */ (function (_super) {
    __extends(HTTPResp, _super);
    function HTTPResp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTPResp.prototype.setCode = function (code) {
        this.code = code;
    };
    return HTTPResp;
}(Resp));
var cres2 = new HTTPResp();
cres2;
function getSplitedHalf2(data) {
    var l = data.length / 2;
    return data.splice(0, l);
}
var gsplit = getSplitedHalf2;
var gsplit2 = getSplitedHalf2;
var glogLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
var MList = /** @class */ (function () {
    function MList(items) {
        this.items = items;
    }
    return MList;
}());
var MAccordion = /** @class */ (function () {
    function MAccordion() {
    }
    return MAccordion;
}());
var MExtendedListClass = /** @class */ (function (_super) {
    __extends(MExtendedListClass, _super);
    function MExtendedListClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MExtendedListClass.prototype.first = function () {
        return this.items[0];
    };
    return MExtendedListClass;
}(MList));
function MExtendedList(Base) {
    return /** @class */ (function (_super) {
        __extends(MExtendedList, _super);
        function MExtendedList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MExtendedList.prototype.first = function () {
            return this.items[0];
        };
        return MExtendedList;
    }(Base));
}
var MAccordionList = /** @class */ (function () {
    function MAccordionList(items) {
        this.items = items;
    }
    return MAccordionList;
}());
var mlist = MExtendedList(MAccordionList);
var mres = new mlist(['first', 'second']);
console.log(mres.first());
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
// const vehicle = kmToMiles(new RVehicle());
// const lcv = kmToMiles(new LCV());
kmToMiles({ run: 12 });
function rLogId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id: id, data: additionalData };
}
function testToString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(testToString([1, 2, 3]));
console.log(testToString(true));
console.log(testToString(null));
console.log(testToString(12312312));
console.log(testToString({
    id: 1,
    name: 'ban'
}));
// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
var data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sort(data, type) {
    if (type === void 0) { type = 'asc'; }
    return data.sort(function (a, b) {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
var ca = Math.random() > 0.5 ? 1 : 0;
var csuc = {
    code: 200,
    data: 'done'
};
var cerr = {
    code: 200,
    data: new Error()
};
var ConUser = /** @class */ (function () {
    function ConUser() {
    }
    return ConUser;
}());
var ConUserPersistend = /** @class */ (function (_super) {
    __extends(ConUserPersistend, _super);
    function ConUserPersistend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConUserPersistend;
}(ConUser));
function getConUser(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new ConUser();
    }
    else {
        return new ConUserPersistend();
    }
}
function getUser2(id) {
    if (typeof id === 'number') {
        return new ConUser();
    }
    else {
        return new ConUserPersistend();
    }
}
var cores = getUser2(1);
var cores2 = getUser2('qwerty');
var auser = {
    name: "Vasya",
    roles: [],
    permission: {
        endDate: new Date()
    }
};
var anameUser = auser['name'];
// const roleNames = 'roles';
var roleNames = 'roles';
var roles = ['admin', 'user', 'super-user'];
function runTransaction(transaction) {
    console.log(transaction);
}
var transaction = {
    fromTo: ['1', '2']
};
runTransaction(transaction);
var key = 'age';
function getValue(obj, key) {
    return obj[key];
}
var kuser = {
    name: "Vasya",
    age: 30
};
var kuserName = getValue(kuser, 'name');
var ta = {
    result: "httpSuccess"
};
var strOrNum;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = "str";
}
if (typeof strOrNum === 'string') {
    console.log(strOrNum);
}
else {
    console.log(strOrNum);
}
var str2OrNum;
var tyuser = {
    name: "Vasya"
};
var TDirection;
(function (TDirection) {
    TDirection[TDirection["Up"] = 0] = "Up";
    TDirection[TDirection["Down"] = 1] = "Down";
})(TDirection || (TDirection = {}));
// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// ``` js
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// ```
var tdata = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(array, key) {
    return array.reduce(function (map, item) {
        var itemKey = item[key];
        var curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
var ttres = group(tdata, 'group');
console.log(ttres);
var form = {
    name: "Vasya",
    password: "123"
};
var formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: "Должен быть длиннее 5 символов" }
};
function getMenu() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, [{ name: "Аналитика", url: "analitics" }]];
        });
    });
}
function getArray(x) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, x];
                case 1: return [2 /*return*/, [_a.sent()]];
            }
        });
    });
}
var p = {};
var RUser = /** @class */ (function () {
    function RUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return RUser;
}());
function rGetData(id) {
    return new RUser(id, 'Vasya');
}
var UserService7 = /** @class */ (function () {
    function UserService7() {
    }
    Object.defineProperty(UserService7.prototype, "users", {
        get: function () {
            return this._users;
        },
        set: function (num) {
            this._users = num;
        },
        enumerable: false,
        configurable: true
    });
    UserService7.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Log7(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UserService7.prototype, "users", null);
    return UserService7;
}());
function Log7() {
    return function (target, _, descriptor) {
        var set = descriptor.set;
        descriptor.set = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(args);
            set === null || set === void 0 ? void 0 : set.apply(target, args);
        };
    };
}
var userService7 = new UserService7();
userService7.users = 1;
console.log(userService7.users);
// @nullUser2
var UserService2 = /** @class */ (function () {
    function UserService2() {
        this.users = 1000;
    }
    UserService2.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    UserService2 = __decorate([
        threeUserAdvanced,
        nullUser2
    ], UserService2);
    return UserService2;
}());
function nullUser2(target) {
    target.prototype.users = 0;
}
function threeUserAdvanced(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.users = 3;
            return _this;
        }
        return class_1;
    }(constructor));
}
console.log(new UserService2().getUsersInDatabase());
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = 1000;
    }
    UserService.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    return UserService;
}());
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase());
console.log(nullUser(new UserService()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());
// @nullUser3
var UserService3 = /** @class */ (function () {
    // @threeUserAdvanced3
    // @setUserAdvanced3(4)
    function UserService3() {
    }
    UserService3.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    UserService3 = __decorate([
        setUsers(2),
        log()
        // @threeUserAdvanced3
        // @setUserAdvanced3(4)
    ], UserService3);
    return UserService3;
}());
function nullUser3(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    console.log('setUsers init');
    return function (target) {
        console.log('setUsers run');
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return function (target) {
        console.log('log run');
        console.log(target);
    };
}
function setUserAdvanced3(users) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.users = users;
                return _this;
            }
            return class_2;
        }(constructor));
    };
}
function threeUserAdvanced3(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_3, _super);
        function class_3() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.users = 3;
            return _this;
        }
        return class_3;
    }(constructor));
}
console.log(new UserService3().getUsersInDatabase());
define("08-decorators/metadata", ["require", "exports", "reflect-metadata"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
    var UserService9 = /** @class */ (function () {
        function UserService9() {
        }
        UserService9.prototype.getUsersInDatabase = function () {
            return this._users;
        };
        UserService9.prototype.setUsersInDatabase = function (num) {
            this._users = num;
        };
        __decorate([
            Validate9(),
            __param(0, Positive9()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], UserService9.prototype, "setUsersInDatabase", null);
        return UserService9;
    }());
    function Positive9() {
        return function (target, propertyKey, parameterIndex) {
            console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
            console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
            console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
            var existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
            existParams.push(parameterIndex);
            Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
        };
    }
    function Validate9() {
        return function (target, propertyKey, descriptor) {
            var method = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
                if (positiveParams) {
                    for (var _a = 0, positiveParams_1 = positiveParams; _a < positiveParams_1.length; _a++) {
                        var index = positiveParams_1[_a];
                        if (args[index] < 0) {
                            throw new Error('Число должно быть больше нуля');
                        }
                    }
                }
                return method === null || method === void 0 ? void 0 : method.apply(this, args);
            };
        };
    }
    var userService9 = new UserService9();
    console.log(userService9.setUsersInDatabase(10));
    console.log(userService9.setUsersInDatabase(-1));
});
var UserService4 = /** @class */ (function () {
    function UserService4() {
    }
    UserService4.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Log4(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], UserService4.prototype, "getUsersInDatabase", null);
    return UserService4;
}());
function Log4() {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.value = function () {
            console.log('no error');
        };
    };
}
console.log(new UserService4().getUsersInDatabase());
function Uni(name) {
    console.log("\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F: " + name);
    return function () {
        console.log("\u0412\u044B\u0437\u043E\u0432: " + name);
    };
}
var MyClass = /** @class */ (function () {
    function MyClass(_) {
    }
    MyClass.method3 = function (_) { };
    MyClass.prototype.method = function (_) { };
    __decorate([
        Uni('Свойство 3'),
        __metadata("design:type", Object)
    ], MyClass.prototype, "props3", void 0);
    __decorate([
        Uni('Свойство 1'),
        __metadata("design:type", Object)
    ], MyClass.prototype, "props", void 0);
    __decorate([
        Uni('Метод'),
        __param(0, Uni('Параметр метода')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MyClass.prototype, "method", null);
    __decorate([
        Uni('Свойство static'),
        __metadata("design:type", Object)
    ], MyClass, "prop2", void 0);
    __decorate([
        Uni('Метод static'),
        __param(0, Uni('Параметр метода static')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MyClass, "method3", null);
    MyClass = __decorate([
        Uni('Класс1'),
        Uni('Класс2'),
        __param(0, Uni('Параметр конструктора')),
        __metadata("design:paramtypes", [Object])
    ], MyClass);
    return MyClass;
}());
var UserService8 = /** @class */ (function () {
    function UserService8() {
    }
    UserService8.prototype.getUsersInDatabase = function () {
        return this._users;
    };
    UserService8.prototype.setUsersInDatabase = function (num, _) {
        this._users = num;
    };
    __decorate([
        __param(0, Positive8()),
        __param(1, Positive8()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], UserService8.prototype, "setUsersInDatabase", null);
    return UserService8;
}());
function Positive8() {
    return function (target, propertyKey, parameterIndex) {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    };
}
var userService8 = new UserService8();
var UserService6 = /** @class */ (function () {
    function UserService6() {
    }
    UserService6.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Max6(100),
        __metadata("design:type", Number)
    ], UserService6.prototype, "users", void 0);
    return UserService6;
}());
function Max6(max) {
    return function (target, propertyKey) {
        var value;
        var setter = function name(newValue) {
            if (newValue > max) {
                console.log("\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 " + max);
            }
            else {
                value = newValue;
            }
        };
        var getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
var userService6 = new UserService6();
userService6.users = 1;
console.log(userService6.users);
userService6.users = 1000;
console.log(userService6.users);
// @addCreatedAt
var UserServiceT = /** @class */ (function () {
    function UserServiceT() {
        this.users = 1000;
    }
    UserServiceT.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    UserServiceT = __decorate([
        CreatedAt
    ], UserServiceT);
    return UserServiceT;
}());
// My solve
// function addCreatedAt<T extends { new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         createdAt: Date = new Date();
//     }
// }
// console.log(new UserServiceT());
function CreatedAt(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_4, _super);
        function class_4() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.createdAt = new Date();
            return _this;
        }
        return class_4;
    }(constructor));
}
console.log(new UserServiceT().createdAt);
var UserService5 = /** @class */ (function () {
    function UserService5() {
    }
    UserService5.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Catch5({ rethrow: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], UserService5.prototype, "getUsersInDatabase", null);
    return UserService5;
}());
function Catch5(_a) {
    var _b = _a === void 0 ? { rethrow: true } : _a, rethrow = _b.rethrow;
    return function (target, _, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                return method === null || method === void 0 ? void 0 : method.apply(target, args);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        };
    };
}
console.log(new UserService5().getUsersInDatabase());
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
A.a;
/// <reference path="./module/namespaces-and-reference.ts" />
console.log(A.a);
