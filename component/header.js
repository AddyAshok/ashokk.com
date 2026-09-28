class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Base Header Styling */
            .header-nav-container {
                background: rgba(15, 23, 42, 0.95);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid #1e293b;
                padding: 14px 20px;
                position: relative;
                z-index: 1000;
            }

            /* Neon Glow Animated Border at Top */
            .header-nav-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent);
                animation: scanline 3.5s ease-in-out infinite;
            }

            @keyframes scanline {
                0% { left: -100%; }
                50% { left: 0%; }
                100% { left: 100%; }
            }

            .header-inner {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            /* Brand Logo */
            .brand-logo {
                color: #f8fafc;
                font-size: 18px;
                font-weight: 800;
                text-decoration: none;
                letter-spacing: -0.5px;
            }
            .brand-logo span {
                color: #38bdf8;
            }

            /* Desktop Navigation */
            .langs {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
            }

            /* Typography & Links */
            .langs a {
                color: #cbd5e1;
                text-decoration: none;
                font-size: 13.5px;
                font-weight: 700; /* BOLD TEXT */
                padding: 7px 14px;
                border-radius: 8px;
                border: 1px solid transparent;
                transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }

            /* Classy Hover Animation (Shine + Rise) */
            .langs a:hover {
                color: #ffffff;
                background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
                border-color: rgba(56, 189, 248, 0.35);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2);
            }

            /* Three Dots Toggle Button (Mobile Only) */
            .menu-toggle {
                display: none;
                background: #1e293b;
                border: 1px solid #334155;
                color: #38bdf8;
                border-radius: 8px;
                padding: 6px 12px;
                cursor: pointer;
                font-size: 18px;
                font-weight: bold;
                transition: all 0.2s;
            }
            .menu-toggle:hover {
                background: #334155;
                color: #ffffff;
            }

            /* Responsive Mobile View (< 868px) */
            @media (max-width: 868px) {
                .menu-toggle {
                    display: block; /* Shows Three-Dots button */
                }

                .langs {
                    display: none; /* Hidden by default on mobile */
                    flex-direction: column;
                    width: 100%;
                    gap: 6px;
                    padding-top: 15px;
                    border-top: 1px solid #1e293b;
                    margin-top: 12px;
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                /* Active Menu Toggle State */
                .langs.active {
                    display: flex;
                    opacity: 1;
                    transform: translateY(0);
                }

                .langs a {
                    width: 100%;
                    text-align: left;
                    box-sizing: border-box;
                    padding: 10px 16px;
                }
            }
        </style>
         <header><a class="logo" href="/"><b>A</b>shokka.com</a>
        <div class="header-nav-container">
            <div class="header-inner">
                <!-- Three Dots Menu Icon for Mobile -->
                <button class="menu-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">⋮ Topic</button>
            </div>

            <!-- Navigation Links -->
            <nav class="langs" id="nav-links" aria-label="Languages">
                <a href="/java/">Java</a>
                <a href="/">Concurrency</a>
                <a href="/python/">Python</a>
                <a href="/">Spring Core</a>
                <a href="/">Spring Boot</a>
                <a href="/">Spring Security</a>
                <a href="/">Spring JPA</a>
                <a href="/">Microservices</a>
                <a href="/">Kafka</a>
                <a href="/">AWS</a>
                <a href="/design-pattern/">Design Pattern</a>
            </nav>
        </div></header>
        `;

        // Mobile Menu Toggle Script
        const toggleBtn = this.querySelector('#mobile-menu-btn');
        const navLinks = this.querySelector('#nav-links');

        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}
customElements.define('app-header', CustomHeader);