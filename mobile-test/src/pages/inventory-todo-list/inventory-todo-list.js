"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var InventoryTodoListPage = (function () {
    function InventoryTodoListPage(navCtrl, translateService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        // The initial root pages for our tabs (remove if not using tabs)
        this.tabUnassignedRoot = 'UnAssignedTodoListPage';
        this.tabAssignedRoot = 'AssignedTodoListPage';
        translateService.get(['TAB_INVENTORY_TODO_LIST_UNASSIGNED', 'TAB_INVENTORY_TODO_LIST_ASSIGNED']).subscribe(function (values) {
            _this.tabUnassigned = values['TAB_INVENTORY_TODO_LIST_UNASSIGNED'];
            _this.tabAssigned = values['TAB_INVENTORY_TODO_LIST_ASSIGNED'];
        });
    }
    /**
     * The view loaded, let's query our items for the list
     */
    InventoryTodoListPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * handle the search functionality
     */
    InventoryTodoListPage.prototype.showSearch = function () {
        // this.navCtrl.push('TodoPickListPage', {
        //   inventoryTodo: inventoryTodo
        // });
    };
    InventoryTodoListPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-inventory-todo-list',
            templateUrl: 'inventory-todo-list.html'
        })
    ], InventoryTodoListPage);
    return InventoryTodoListPage;
}());
exports.InventoryTodoListPage = InventoryTodoListPage;
