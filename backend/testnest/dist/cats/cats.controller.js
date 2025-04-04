"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
const create_cat_dto_1 = require("./DTO/create-cat.dto");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const role_guard_1 = require("./guard/role.guard");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    findAll(age, breed) {
        try {
            this.catsService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'This is custom message',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    findOne(id) {
        return this.catsService.findOne(id);
    }
    create(createCatDto) {
        return 'THis action adds a new cats';
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(404),
    (0, common_1.Header)('Cache-Control', 'no-store'),
    __param(0, (0, common_1.Query)('age')),
    __param(1, (0, common_1.Query)('breed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "create", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map