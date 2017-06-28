@customElement("titanium-toolbar-icons")
class TitaniumToolbarIcons extends Polymer.Element {
    @property()
    icons: Array<IToolbarIcon>;

    @property()
    page: string;

    reset() {
        this.icons = [];
    }

    filterIcons(icon: IToolbarIcon) {
        return icon.pageName === this.page;
    }

    @observe('page')
    pageChanged() {
        this.$.list.render();
    }

    addIcon(icon: IToolbarIcon, position?: number) {
        if (!this.icons) {
            this.icons = [];
        }
        let isIconAlreadyAdded = this.icons.some(o => { return o.action === icon.action && o.pageName === icon.pageName });
        if (isIconAlreadyAdded)
            return;

        if (typeof position !== "undefined") {
            this.splice('icons', position, 0, icon)
            return;
        }
        this.push('icons', icon);
    }

    removeIcon(name: string) {
        if (!this.icons) {
            this.icons = [];
        }
        var icon = this.icons.filter(o => { return o.name === name })[0];
        if (icon) {
            var index = this.icons.indexOf(icon);
            this.splice('icons', index, 1);
        }
    }
}

interface IToolbarIcon {
    name: string,
    action: string,
    pageName: string,
    description?: string
}

class ToolbarIcon implements IToolbarIcon {

    constructor(name: string, action: string, pageName: string, description?: string) {
        this.name = name;
        this.action = action;
        this.pageName = pageName;
        this.description = description || "";
    }

    name: string;
    action: string;
    pageName: string;
    description: string;
}
