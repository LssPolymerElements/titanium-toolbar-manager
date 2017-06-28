var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitanimToolbarManager = class TitanimToolbarManager extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.toolbarNames = ["main", "search", "selected", "detail"];
    }
    onToolbarTapped(e) {
        let action = e.detail.sourceEvent.target.action
            || e.detail.sourceEvent.target.getAttribute("action")
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.action)
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.getAttribute("action"));
        if (!action) {
            return;
        }
        this.dispatchEvent(new CustomEvent(`${action}Tap`, { bubbles: true, composed: true }));
    }
    addIcon(toolbarName, icon, position) {
        var icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.addIcon(icon, position);
        }
        else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }
    removeIcon(toolbarName, name) {
        var icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.removeIcon(name);
        }
        else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }
    getToolbarIcons(toolbarName) {
        if (!this.querySelector(`[name='${toolbarName}']`)) {
            console.warn(`no ${toolbarName} toolbar found`);
            return null;
        }
        var toolbar = this.querySelector(`[name='${toolbarName}']`);
        var icons = toolbar.querySelector("titanium-toolbar-icons");
        return icons;
    }
    showToolbar(name) {
        this.activeToolbarName = name;
        if (name === "search") {
            this.dispatchEvent(new CustomEvent('searchActivated'));
        }
    }
    reset() {
        //this.showToolbar('main');
        this.searchTerm = "";
    }
};
__decorate([
    property(),
    __metadata("design:type", Element)
], TitanimToolbarManager.prototype, "mainToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitanimToolbarManager.prototype, "searchToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitanimToolbarManager.prototype, "selectedToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitanimToolbarManager.prototype, "detailToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitanimToolbarManager.prototype, "activeToolbarName", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitanimToolbarManager.prototype, "searchTerm", void 0);
__decorate([
    property({ readOnly: true }),
    __metadata("design:type", Array)
], TitanimToolbarManager.prototype, "toolbarNames", void 0);
__decorate([
    listen('pages', 'tap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TitanimToolbarManager.prototype, "onToolbarTapped", null);
TitanimToolbarManager = __decorate([
    customElement("titanium-toolbar-manager")
], TitanimToolbarManager);
