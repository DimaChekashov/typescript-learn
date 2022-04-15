"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegExecutor = void 0;
var child_process_1 = require("child_process");
var command_executor_1 = require("../../core/executor/command.executor");
var file_service_1 = require("../../core/files/file.service");
var stream_handler_1 = require("../../core/handlers/stream.handler");
var prompt_service_1 = require("../../core/prompt/prompt.service");
var ffmpeg_builder_1 = require("./ffmpeg.builder");
var FfmpegExecutor = /** @class */ (function (_super) {
    __extends(FfmpegExecutor, _super);
    function FfmpegExecutor(logger) {
        var _this = _super.call(this, logger) || this;
        _this.fileService = new file_service_1.FileService();
        _this.promptService = new prompt_service_1.PromptService();
        return _this;
    }
    FfmpegExecutor.prototype.prompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var width, height, path, name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.promptService.input('Ширина', 'number')];
                    case 1:
                        width = _a.sent();
                        return [4 /*yield*/, this.promptService.input('Высота', 'number')];
                    case 2:
                        height = _a.sent();
                        return [4 /*yield*/, this.promptService.input('Путь до файла', 'input')];
                    case 3:
                        path = _a.sent();
                        return [4 /*yield*/, this.promptService.input('Имя', 'input')];
                    case 4:
                        name = _a.sent();
                        return [2 /*return*/, { width: width, height: height, path: path, name: name }];
                }
            });
        });
    };
    FfmpegExecutor.prototype.build = function (_a) {
        var width = _a.width, height = _a.height, path = _a.path, name = _a.name;
        var output = this.fileService.getFilePath(path, name, 'mp4');
        var args = (new ffmpeg_builder_1.FfmpegBuilder)
            .input(path)
            .setVideoSize(width, height)
            .output(output);
        return { command: 'ffmpeg', args: args, output: output };
    };
    FfmpegExecutor.prototype.spawn = function (_a) {
        var output = _a.output, command = _a.command, args = _a.args;
        this.fileService.deleteFileIfExists(output);
        return (0, child_process_1.spawn)(command, args);
    };
    FfmpegExecutor.prototype.processStream = function (stream, logger) {
        var handler = new stream_handler_1.StreamHandler(logger);
        handler.processOutput(stream);
    };
    return FfmpegExecutor;
}(command_executor_1.CommandExecutor));
exports.FfmpegExecutor = FfmpegExecutor;