class SocMed extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = "";
        const listSocmed = {
            "instagram":"http://www.instagram.com/nuzulhikam",
            "linkedin":"http://www.linkedin.com/in/nuzulh",
            "github":"http://www.github.com/nuzulh"
        };
        Object.keys(listSocmed).forEach(key => {
            this.innerHTML += `
                <a href="${listSocmed[key]}" target="_blank"><i class="fab fa-${key}"></i></a>
            `;
        });
    }
}

customElements.define("soc-med", SocMed);