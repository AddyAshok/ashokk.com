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

            /* Container & Backdrop */
            .header-nav-container {
                background: rgba(15, 23, 42, 0.98);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-bottom: 1px solid #1e293b;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                padding: 0 8px;
            }

            /* Animated Top Gradient Line */
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

            /* Main Header Row */
            .single-row-nav {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
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
            }

            /* Scroll Wrapper & Buttons */
            .nav-scroll-wrapper {
                display: flex;
                align-items: center;
                gap: 4px;
                flex-grow: 1;
                min-width: 0; /* Prevents flex overflow issue */
                justify-content: flex-end;
            }

            .scroll-btn {
                background: rgba(30, 41, 59, 0.8);
                border: 1px solid rgba(56, 189, 248, 0.3);
                color: #38bdf8;
                font-size: 14px;
                font-weight: bold;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                transition: all 0.2s ease;
                user-select: none;
            }

            .scroll-btn:hover {
                background: #38bdf8;
                color: #0f172a;
                box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
            }

            /* Scrollable Navigation Bar */
            .categories-nav {
                display: flex;
                align-items: center;
                gap: 3px;
                overflow-x: auto;
                white-space: nowrap;
                scrollbar-width: none;
                scroll-behavior: smooth;
            }

            .categories-nav::-webkit-scrollbar {
                display: none;
            }

            .categories-nav a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 11.5px;
                font-weight: 600;
                padding: 4px 8px;
                border-radius: 5px;
                transition: all 0.2s ease;
                display: inline-block;
                border: 1px solid transparent;
                flex-shrink: 0;
            }

            .categories-nav a:hover {
                color: #ffffff;
                background: rgba(56, 189, 248, 0.12);
                border-color: rgba(56, 189, 248, 0.25);
            }

            .categories-nav a.active {
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.15);
                border-color: rgba(56, 189, 248, 0.35);
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

            @media (max-width: 1024px) {
                .tech-badge {
                    display: none;
                }
            }

            @media (max-width: 768px) {
                .scroll-btn {
                    display: none;
                }
                .menu-toggle {
                    display: block;
                }
                .nav-scroll-wrapper {
                    display: none;
                }
                .nav-scroll-wrapper.mobile-open {
                    display: flex;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #020617;
                    padding: 8px;
                    border-bottom: 1px solid #1e293b;
                }
                .categories-nav {
                    flex-direction: column;
                    width: 100%;
                    align-items: stretch;
                }
                .categories-nav a {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 8px 10px;
                }
            }
        </style>

        <header class="header-nav-container">
            <div class="single-row-nav">
                <!-- Brand Logo & Status -->
                <div class="logo-group">
                    <a class="brand-logo" href="/">
                        Ashokka<span>.com</span>
                    </a>
                    <span class="tech-badge">
                        <span class="badge-dot"></span>
                        Java • AWS • Kafka
                    </span>
                </div>

                <!-- Nav Items with Left/Right Buttons -->
                <div class="nav-scroll-wrapper" id="nav-wrapper">
                    <button class="scroll-btn" id="scroll-left" aria-label="Scroll Left">❮</button>
                    
                    <nav class="categories-nav" id="categories-nav">
                        <a href="/java/" class="active">Java</a>
                        <a href="/springboot/">Spring Boot</a>
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

                    <button class="scroll-btn" id="scroll-right" aria-label="Scroll Right">❯</button>
                </div>

                <button class="menu-toggle" id="mobile-toggle-btn" aria-label="Toggle Navigation">☰ Menu</button>
            </div>
        </header>
        `;

        // Scroll Buttons Logic
        const navContainer = this.querySelector('#categories-nav');
        const leftBtn = this.querySelector('#scroll-left');
        const rightBtn = this.querySelector('#scroll-right');

        if (navContainer && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                navContainer.scrollBy({ left: -200, behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', () => {
                navContainer.scrollBy({ left: 200, behavior: 'smooth' });
            });
        }

        // Mobile Menu Logic
        const toggleBtn = this.querySelector('#mobile-toggle-btn');
        const navWrapper = this.querySelector('#nav-wrapper');
        if (toggleBtn && navWrapper) {
            toggleBtn.addEventListener('click', () => {
                navWrapper.classList.toggle('mobile-open');
            });
        }
    }
}
customElements.define('app-header', CustomHeader);