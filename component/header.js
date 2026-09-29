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

            /* Container & Glassmorphism Backdrop */
            .header-nav-container {
                background: rgba(15, 23, 42, 0.96);
                backdrop-filter: blur(14px);
                -webkit-backdrop-filter: blur(14px);
                border-bottom: 1px solid #1e293b;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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

            /* --- ROW 1: TOP BRAND ROW --- */
            .top-brand-row {
                max-width: 1400px;
                margin: 0 auto;
                padding: 12px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .logo-group {
                display: flex;
                align-items: center;
                gap: 14px;
            }

            .brand-logo {
                text-decoration: none;
                font-weight: 800;
                font-size: 24px;
                color: #ffffff;
                letter-spacing: -0.5px;
                display: inline-flex;
                align-items: center;
                transition: transform 0.25s ease;
            }

            .brand-logo:hover {
                transform: scale(1.03);
            }

            .brand-logo span {
                color: #38bdf8;
                text-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
            }

            /* Pulsing Tech Status Badge */
            .tech-badge {
                font-size: 12px;
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.08);
                border: 1px solid rgba(56, 189, 248, 0.25);
                padding: 5px 14px;
                border-radius: 20px;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }

            .badge-dot {
                height: 8px;
                width: 8px;
                background-color: #22c55e;
                border-radius: 50%;
                box-shadow: 0 0 8px #22c55e;
                animation: pulseGlow 1.8s infinite ease-in-out;
            }

            @keyframes pulseGlow {
                0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
                100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }

            /* Mobile Toggle Button */
            .menu-toggle {
                display: none;
                background: #1e293b;
                border: 1px solid #334155;
                color: #38bdf8;
                border-radius: 6px;
                padding: 6px 14px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                transition: all 0.2s ease;
            }

            .menu-toggle:hover {
                background: #334155;
            }

            /* --- ROW 2: CATEGORIES NAVIGATION BAR (NICHE WALI ROW) --- */
            .categories-bar {
                background: #090d16;
                border-top: 1px solid rgba(30, 41, 59, 0.7);
                padding: 2px 2px;
                width: 100%;
                box-sizing: border-box;
            }

            .categories-inner {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                gap: 6px;
                overflow-x: auto;
                white-space: nowrap;
                scrollbar-width: none;
                padding: 2px 0;
            }

            .categories-inner::-webkit-scrollbar {
                display: none;
            }

            /* Fantastic Animated Navigation Item Styling */
            .categories-inner a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 13.5px;
                font-weight: 600;
                padding: 7px 14px;
                border-radius: 8px;
                transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                display: inline-block;
                border: 1px solid transparent;
            }

            .categories-inner a:hover {
                color: #ffffff;
                background: rgba(56, 189, 248, 0.12);
                border-color: rgba(56, 189, 248, 0.3);
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(56, 189, 248, 0.2);
            }

            .categories-inner a.active {
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.15);
                border-color: rgba(56, 189, 248, 0.4);
                box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
            }

            /* RESPONSIVE DESIGN */
            @media (max-width: 850px) {
                .tech-badge {
                    display: none;
                }
                .menu-toggle {
                    display: block;
                }
                .categories-bar {
                    display: none;
                }
                .categories-bar.mobile-open {
                    display: block;
                    background: #020617;
                    padding: 12px 16px;
                }
                .categories-inner {
                    flex-direction: column;
                    align-items: stretch;
                    white-space: normal;
                    gap: 2px;
                }
                .categories-inner a {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px 14px;
                }
            }
        </style>

        <header class="header-nav-container">
            <!-- Row 1: Logo & Status Badge -->
            <div class="top-brand-row">
                <div class="logo-group">
                    <a class="brand-logo" href="/">
                        Ashokka<span>.com</span>
                    </a>
                    <span class="tech-badge">
                        <span class="badge-dot"></span>
                        Java • Microservices • AWS • Kafka
                    </span>
                </div>

                <button class="menu-toggle" id="mobile-toggle-btn" aria-label="Toggle Navigation">☰ Topics Menu</button>
            </div>

            <!-- Row 2: Full Nav Items Exactly Under Logo Row -->
            <nav class="categories-bar" id="categories-nav">
                <div class="categories-inner">
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
                    <a href="/interview-questions/">Interview Question</a>
                    <a href="/java8/">Java 8 Feature</a>
                    <a href="/">Coding Question</a>
                    <a href="/">Daily Blog</a>
                </div>
            </nav>
        </header>
        `;

        // Mobile Menu Button Functionality
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