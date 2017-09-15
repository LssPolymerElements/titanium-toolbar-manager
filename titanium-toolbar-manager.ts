declare var jwt_decode: any;

@customElement('titanium-toolbar-manager')
class TitaniumToolbarManager extends Polymer.Element {
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
    private toolbarNames: Array<string> = ['main', 'search', 'selected', 'detail'];

    @property({ notify: true })
    selectedCount: number;

    @listen('tap', 'pages')
    onToolbarTapped(e: any) {
        let action = e.target.action
            || e.target.getAttribute('action')
            || (e.target.parentElement && e.target.parentElement.action)
            || (e.target.parentElement && e.target.parentElement.getAttribute('action'));

        if (!action) {
            return;
        }

        let options: any = { bubbles: true, composed: true };
        this.dispatchEvent(new CustomEvent(`${action}Tap`, options));
    }

    addIcon(toolbarName: string, icon: any, position?: number) {
        let icons = this.getToolbarIcons(toolbarName);
        if (icons) {
            icons.addIcon(icon, position);
        } else {
            console.warn(`no toolbar-icons for ${toolbarName} found`);
        }
    }

    removeIcon(toolbarName: string, name: string) {
        let icons = this.getToolbarIcons(toolbarName);
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

        let toolbar: any = this.querySelector(`[name='${toolbarName}']`);
        let icons = toolbar.querySelector('titanium-toolbar-icons');
        return icons;

    }

    showToolbar(name: string) {
        this.activeToolbarName = name;
        if (name === 'search') {
            let options: any = { bubbles: true, composed: true };
            this.dispatchEvent(new CustomEvent('searchActivated', options));
        }
    }

    reset() {
        //this.showToolbar('main');
        this.searchTerm = '';
    }
}