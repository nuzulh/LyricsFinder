class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <i class="fas fa-music"></i>
                <h2>LyricsFinder</h2>
            </div>
            <search-box></search-box>
            `;
    }
}

customElements.define("app-bar", AppBar);