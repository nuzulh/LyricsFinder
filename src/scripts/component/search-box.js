class SearchBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type="text" id="search-input" placeholder="search song here...">
            <button id="search-btn"><i class="fas fa-search"></i></button>
        `;
    }
}

customElements.define("search-box", SearchBox);