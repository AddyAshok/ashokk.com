class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Header Animation & Base Styles */
            .header-nav-container {
                background: #0f172a;
                border-bottom: 1px solid #1e293b;
                padding: 12px 20px;
                position: relative;
                overflow: hidden;
            }

            /* Animated Gradient Line at the Top */
            .header-nav-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #38bdf8, transparent);
                animation: scanline 4s linear infinite;
            }

            @keyframes scanline {
                0% { left: -100%; }
                100% { left: 100%; }
            }

            /* Flex Nav Layout */
            .langs {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
            }

            /* Individual Links Styling & Hover Animations */
            .langs a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                padding: 6px 14px;
                border-radius: 6px;
                border: 1px solid transparent;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }

            /* Hover Glow & Lift Effect */
            .langs a:hover {
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.08);
                border-color: rgba(56, 189, 248, 0.25);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);
            }

            /* Active Click Bounce Animation */
            .langs a:active {
                transform: translateY(0);
            }
        </style>

        <div class="header-nav-container">
            <nav class="langs" aria-label="Languages">
                <!-- Core Languages -->
                <a href="/java/">Java</a>
                <a href="/">Concurrency</a>
                <a href="/python/">Python</a>

                <!-- Spring Framework Suite -->
                <a href="/">Spring Core</a>
                <a href="/">Spring Boot</a>
                <a href="/">Spring Security</a>
                <a href="/spring-jpa/">Spring JPA</a>

                <!-- Distributed Systems & Cloud -->
                <a href="/">Microservices</a>
                <a href="/">Kafka</a>
                <a href="/">AWS</a>
                <a href="/design-pattern/">Design Pattern</a>
            </nav>
        </div>
        `;
    }
}
customElements.define('app-header', CustomHeader);