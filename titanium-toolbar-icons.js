var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumToolbarIcons = class TitaniumToolbarIcons extends Polymer.Element {
    reset() {
        this.icons = [];
    }
    filterIcons(icon) {
        return icon.pageName === this.page;
    }
    pageChanged() {
        this.$.list.render();
    }
    addIcon(icon, position) {
        if (!this.icons) {
            this.icons = [];
        }
        let isIconAlreadyAdded = this.icons.some(o => { return o.action === icon.action && o.pageName === icon.pageName; });
        if (isIconAlreadyAdded)
            return;
        if (typeof position !== 'undefined') {
            this.splice('icons', position, 0, icon);
            return;
        }
        this.push('icons', icon);
    }
    removeIcon(name) {
        if (!this.icons) {
            this.icons = [];
        }
        let icon = this.icons.filter(o => { return o.name === name; })[0];
        if (icon) {
            let index = this.icons.indexOf(icon);
            this.splice('icons', index, 1);
        }
    }
};
__decorate([
    property(),
    __metadata("design:type", Array)
], TitaniumToolbarIcons.prototype, "icons", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumToolbarIcons.prototype, "page", void 0);
__decorate([
    observe('page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TitaniumToolbarIcons.prototype, "pageChanged", null);
TitaniumToolbarIcons = __decorate([
    customElement('titanium-toolbar-icons')
], TitaniumToolbarIcons);
class ToolbarIcon {
    constructor(name, action, pageName, description) {
        this.name = name;
        this.action = action;
        this.pageName = pageName;
        this.description = description || '';
    }
}
