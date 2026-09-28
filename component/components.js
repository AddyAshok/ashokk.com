class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer style="background: linear-gradient(180deg, #0f172a 0%, #020617 100%); color: #94a3b8; padding: 50px 20px 20px; font-family: system-ui, sans-serif; border-top: 1px solid #1e293b;">
            <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                <div>
                    <h3 style="color: #f8fafc; margin: 0;">Ashokka <span style="color: #38bdf8;">Tech</span></h3>
                    <p style="font-size: 14px; margin-top: 8px;">Senior Backend Engineer (5+ YOE) | Java, AWS, Microservices</p>
                </div>
                <div>
                    <p style="margin: 0; font-size: 13px;">© 2026 Ashokka Tech. All rights reserved.</p>
                    <p style="margin: 5px 0 0; font-size: 12px; color: #38bdf8;">📧 contact@ashokka.com</p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('app-footer', CustomFooter);