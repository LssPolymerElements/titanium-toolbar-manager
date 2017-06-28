declare var jwt_decode: any;

@customElement("titanium-toolbar-manager")
class TitanimToolbarManager extends Polymer.Element {
    @property()
    mainToolbar: Element;

    @property()
    searchToolbar: Element;

    @property()
    selectedToolbar: Element;

    @property()
    detailToolbar: Element;

    @property()
    activeToolbarName: string;

    @property()
    searchTerm: string;

    @property({ readOnly: true })
    private toolbarNames: Array<string> = ["main", "search", "selected", "detail"];

    @listen('pages', 'tap')
    onToolbarTapped(e: any) {
        let action = e.detail.sourceEvent.target.action
            || e.detail.sourceEvent.target.getAttribute("action")
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.action)
            || (e.detail.sourceEvent.target.parentElement && e.detail.sourceEvent.target.parentElement.getAttribute("action"));

        if (!action) {
            return;
        }

        this.dispatchEvent(new CustomEvent(`${action}Tap`, { bubbles: true, composed: true }));
    }

    addIcon(toolbarName: string, icon: any, position?: number) {
        var icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.addIcon(icon, position);
        } else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }

    removeIcon(toolbarName: string, name: string) {
        var icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.removeIcon(name);
        } else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }

    private getToolbarIcons(toolbarName: string): any {
        if (!this.querySelector(`[name='${toolbarName}']`)) {
            console.warn(`no ${toolbarName} toolbar found`);
            return null;
        }

        var toolbar: any = this.querySelector(`[name='${toolbarName}']`);
        var icons = toolbar.querySelector("titanium-toolbar-icons");
        return icons

    }

    showToolbar(name: string) {
        this.activeToolbarName = name;
        if (name === "search") {
            this.dispatchEvent(new CustomEvent('searchActivated'));
        }
    }

    reset() {
        //this.showToolbar('main');
        this.searchTerm = "";
    }
}