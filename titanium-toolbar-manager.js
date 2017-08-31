var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumToolbarManager = class TitaniumToolbarManager extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.toolbarNames = ['main', 'search', 'selected', 'detail'];
    }
    onToolbarTapped(e) {
        let action = e.detail.sourceEvent.target.action
            || e.detail.sourceEvent.target.getAttribute('action')
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.action)
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.getAttribute('action'));
        if (!action) {
            return;
        }
        let options = { bubbles: true, composed: true };
        this.dispatchEvent(new CustomEvent(`${action}Tap`, options));
    }
    addIcon(toolbarName, icon, position) {
        let icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.addIcon(icon, position);
        }
        else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }
    removeIcon(toolbarName, name) {
        let icons = this.getToolbarIcons(toolbarName);
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
        let toolbar = this.querySelector(`[name='${toolbarName}']`);
        let icons = toolbar.querySelector('titanium-toolbar-icons');
        return icons;
    }
    showToolbar(name) {
        this.activeToolbarName = name;
        if (name === 'search') {
            let options = { bubbles: true, composed: true };
            this.dispatchEvent(new CustomEvent('searchActivated', options));
        }
    }
    reset() {
        //this.showToolbar('main');
        this.searchTerm = '';
    }
};
__decorate([
    property(),
    __metadata("design:type", Element)
], TitaniumToolbarManager.prototype, "mainToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitaniumToolbarManager.prototype, "searchToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitaniumToolbarManager.prototype, "selectedToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", Element)
], TitaniumToolbarManager.prototype, "detailToolbar", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumToolbarManager.prototype, "activeToolbarName", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumToolbarManager.prototype, "searchTerm", void 0);
__decorate([
    property({ readOnly: true }),
    __metadata("design:type", Array)
], TitaniumToolbarManager.prototype, "toolbarNames", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", Number)
], TitaniumToolbarManager.prototype, "selectedCount", void 0);
__decorate([
    listen('tap', 'pages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TitaniumToolbarManager.prototype, "onToolbarTapped", null);
TitaniumToolbarManager = __decorate([
    customElement('titanium-toolbar-manager')
], TitaniumToolbarManager);
