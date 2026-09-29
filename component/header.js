class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            app-header {
                display: block;
                width: 100%;
                max-width: 100%;
                position: sticky;
                top: 0;
                z-index: 99999 !important;
            }

            /* Main Header Bar - Ultra Compact Single Row */
            .header-nav-container {
                background: rgba(15, 23, 42, 0.98);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-bottom: 1px solid #1e293b;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                padding: 0 12px;
                animation: headerSlideDown 0.3s ease-out forwards;
            }

            @keyframes headerSlideDown {
                from { opacity: 0; transform: translateY(-8px); }
                to { opacity: 1; transform: translateY(0); }
            }

            /* Animated Gradient Border at Top */
            .header-nav-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc, #38bdf8);
                background-size: 300% 100%;
                animation: gradientMove 4s linear infinite;
            }

            @keyframes gradientMove {
                0% { background-position: 0% 0%; }
                100% { background-position: 300% 0%; }
            }

            /* Ultra-Slim Single Flex Row Layout */
            .single-row-nav {
                max-width: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                min-height: 44px;
            }

            .logo-group {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-shrink: 0;
            }

            .brand-logo {
                text-decoration: none;
                font-weight: 800;
                font-size: 18px;
                color: #ffffff;
                letter-spacing: -0.5px;
                display: inline-flex;
                align-items: center;
                white-space: nowrap;
                transition: transform 0.2s ease;
            }

            .brand-logo:hover {
                transform: scale(1.02);
            }

            .brand-logo span {
                color: #38bdf8;
                text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
            }

            /* Mini Tech Badge */
            .tech-badge {
                font-size: 10.5px;
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.08);
                border: 1px solid rgba(56, 189, 248, 0.2);
                padding: 2px 7px;
                border-radius: 12px;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 5px;
                white-space: nowrap;
            }

            .badge-dot {
                height: 6px;
                width: 6px;
                background-color: #22c55e;
                border-radius: 50%;
                box-shadow: 0 0 6px #22c55e;
                animation: pulseGlow 1.8s infinite ease-in-out;
            }

            @keyframes pulseGlow {
                0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                70% { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0); }
                100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }

            /* Inline Navigation Container */
            .categories-nav {
                display: flex;
                align-items: center;
                gap: 2px;
                overflow-x: auto;
                white-space: nowrap;
                scrollbar-width: none;
                flex-grow: 1;
                justify-content: flex-end;
            }

            .categories-nav::-webkit-scrollbar {
                display: none;
            }

            /* Ultra Compact Animated Links */
            .categories-nav a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 11.5px;
                font-weight: 600;
                padding: 4px 7px;
                border-radius: 5px;
                transition: all 0.2s ease;
                position: relative;
                display: inline-block;
                border: 1px solid transparent;
                flex-shrink: 0;
            }

            .categories-nav a:hover {
                color: #ffffff;
                background: rgba(56, 189, 248, 0.12);
                border-color: rgba(56, 189, 248, 0.25);
                transform: translateY(-1px);
            }

            .categories-nav a.active {
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.15);
                border-color: rgba(56, 189, 248, 0.35);
            }

            /* Bottom Line Animation */
            .categories-nav a::after {
                content: '';
                position: absolute;
                bottom: 0px;
                left: 50%;
                width: 0;
                height: 2px;
                background: #38bdf8;
                transition: all 0.2s ease;
                transform: translateX(-50%);
                border-radius: 2px;
            }

            .categories-nav a:hover::after,
            .categories-nav a.active::after {
                width: 65%;
            }

            /* Mobile Menu Button */
            .menu-toggle {
                display: none;
                background: #1e293b;
                border: 1px solid #334155;
                color: #38bdf8;
                border-radius: 4px;
                padding: 4px 10px;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
            }

            /* RESPONSIVE DESIGN */
            @media (max-width: 1024px) {
                .tech-badge {
                    display: none;
                }
            }

            @media (max-width: 850px) {
                .menu-toggle {
                    display: block;
                }
                .categories-nav {
                    display: none;
                }
                .categories-nav.mobile-open {
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #020617;
                    padding: 8px;
                    border-bottom: 1px solid #1e293b;
                    align-items: stretch;
                    gap: 3px;
                }
                .categories-nav a {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 8px 10px;
                }
                .categories-nav a::after {
                    display: none;
                }
            }
        </style>

        <header class="header-nav-container">
            <div class="single-row-nav">
                <!-- Brand Logo & Badge -->
                <div class="logo-group">
                    <a class="brand-logo" href="/">
                        Ashokka<span>.com</span>
                    </a>
                    <span class="tech-badge">
                        <span class="badge-dot"></span>
                        Java • AWS • Kafka
                    </span>
                </div>

                <!-- All 15 Nav Items in Single Line -->
                <nav class="categories-nav" id="categories-nav">
                    <a href="/java/" class="active">Java</a>
                    <a href="/">Spring Boot</a>
                    <a href="/">Spring Security</a>
                    <a href="/">Spring JPA</a>
                    <a href="/">Microservices</a>
                    <a href="/">Kafka</a>
                    <a href="/">AWS Cloud</a>
                    <a href="/">Redis & Caching</a>
                    <a href="/design-pattern/">Design Pattern</a>
                    <a href="/">System Design</a>
                    <a href="/">SQL</a>
                    <a href="/">Interview Question</a>
                    <a href="/java8/">Java 8 Feature</a>
                    <a href="/">Coding Question</a>
                    <a href="/">Daily Blog</a>
                </nav>

                <button class="menu-toggle" id="mobile-toggle-btn" aria-label="Toggle Navigation">☰ Menu</button>
            </div>
        </header>
        `;

        // Mobile Menu Button Logic
        const toggleBtn = this.querySelector('#mobile-toggle-btn');
        const categoriesNav = this.querySelector('#categories-nav');
        if (toggleBtn && categoriesNav) {
            toggleBtn.addEventListener('click', () => {
                categoriesNav.classList.toggle('mobile-open');
            });
        }
    }
}
customElements.define('app-header', CustomHeader);