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
                z-index: 1000;
            }

            /* Main Header Styling - Modern Dark Tech Theme */
            .header-nav-container {
                background: #0f172a; /* Clean Deep Slate */
                border-bottom: 1px solid #1e293b;
                padding: 10px 20px;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                overflow: hidden;
            }

            /* Neon Glow Animated Top Border */
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

            /* Inner Wrapper - Flex Row Layout */
            .header-inner {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                width: 100%;
            }

            /* Brand Logo & Tech Badges */
            .logo-group {
                display: flex;
                align-items: center;
                gap: 12px;
                white-space: nowrap;
            }

            .brand-logo {
                text-decoration: none;
                font-weight: 800;
                font-size: 22px;
                color: #ffffff;
                letter-spacing: -0.5px;
            }
            .brand-logo span {
                color: #38bdf8;
            }

            .tech-badge {
                font-size: 11px;
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.1);
                border: 1px solid rgba(56, 189, 248, 0.25);
                padding: 4px 10px;
                border-radius: 20px;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }

            .badge-dot {
                height: 6px;
                width: 6px;
                background-color: #22c55e;
                border-radius: 50%;
                box-shadow: 0 0 6px #22c55e;
            }

            /* Desktop Navigation Links - No Gap / Spacing Bug */
            .langs {
                display: flex;
                align-items: center;
                gap: 4px;
                margin: 0;
                padding: 0;
                overflow-x: auto;
                scrollbar-width: none; /* Hide scrollbar for clean UI */
            }

            .langs::-webkit-scrollbar {
                display: none;
            }

            /* Sleek Pill Nav Links */
            .langs a, .dropdown-btn {
                color: #94a3b8;
                text-decoration: none;
                font-size: 13.5px;
                font-weight: 600;
                padding: 6px 12px;
                border-radius: 6px;
                transition: all 0.2s ease;
                white-space: nowrap;
                background: transparent;
                border: none;
                cursor: pointer;
            }

            .langs a:hover, .dropdown-btn:hover {
                color: #ffffff;
                background: #1e293b;
            }

            .langs a.active {
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.1);
            }

            /* Mobile Toggle Button */
            .menu-toggle {
                display: none;
                background: #1e293b;
                border: 1px solid #334155;
                color: #38bdf8;
                border-radius: 6px;
                padding: 6px 12px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
            }

            /* DESKTOP VIEW */
            @media (min-width: 900px) {
                #java-dropdown {
                    display: none !important;
                }
                #desktop-java-link {
                    display: inline-flex !important;
                }
            }

            /* MOBILE VIEW */
            @media (max-width: 899px) {
                #desktop-java-link {
                    display: none !important;
                }

                .tech-badge {
                    display: none;
                }

                .menu-toggle {
                    display: block;
                }

                .langs {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    gap: 6px;
                    padding-top: 12px;
                    margin-top: 10px;
                    border-top: 1px solid #1e293b;
                }

                .langs.active {
                    display: flex;
                }

                .langs a, .dropdown-container {
                    width: 100%;
                }

                .dropdown-btn {
                    width: 100%;
                    justify-content: space-between;
                }

                .dropdown-menu {
                    display: none;
                    background: #020617;
                    border-left: 2px solid #38bdf8;
                    margin-left: 10px;
                    padding-left: 6px;
                }

                .dropdown-menu a {
                    display: block;
                    padding: 8px 12px;
                    color: #94a3b8;
                }

                .dropdown-container.open .dropdown-menu {
                    display: block !important;
                }
            }
        </style>

        <header class="header-nav-container">
            <div class="header-inner">
                <!-- Left: Brand Logo & Sub-Badge -->
                <div class="logo-group">
                    <a class="brand-logo" href="/">
                        Ashokka<span>.com</span>
                    </a>
                    <span class="tech-badge">
                        <span class="badge-dot"></span>
                        Java • Microservices • AWS • Kafka
                    </span>
                </div>

                <!-- Right: Desktop Navigation Bar -->
                <nav class="langs" id="nav-links" aria-label="Main Navigation">
                    <a href="/java/" id="desktop-java-link">Java</a>

                    <div class="dropdown-container" id="java-dropdown">
                        <button class="dropdown-btn" type="button">Java ▾</button>
                        <div class="dropdown-menu">
                            <a href="/java/">Java Overview</a>
                            <a href="/">OOPs Concepts</a>
                            <a href="/">Exception Handling</a>
                            <a href="/">Multithreading & Concurrency</a>
                            <a href="/">Collections Framework</a>
                            <a href="/">JVM & Memory Management</a>
                        </div>
                    </div>

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
                    <a href="/java8">Java 8 Feature</a>
                    <a href="/">Coding Question</a>
                    <a href="/">Daily Blog</a>
                </nav>

                <!-- Mobile Menu Button -->
                <button class="menu-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">☰ Menu</button>
            </div>
        </header>
        `;

        // Mobile Menu Toggle
        const toggleBtn = this.querySelector('#mobile-menu-btn');
        const navLinks = this.querySelector('#nav-links');
        if (toggleBtn && navLinks) {
            toggleBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Mobile Accordion Toggle
        const javaDropdown = this.querySelector('#java-dropdown');
        if (javaDropdown) {
            const javaBtn = javaDropdown.querySelector('.dropdown-btn');
            if (javaBtn) {
                javaBtn.addEventListener('click', (e) => {
                    if (window.innerWidth <= 899) {
                        e.preventDefault();
                        javaDropdown.classList.toggle('open');
                    }
                });
            }
        }
    }
}
customElements.define('app-header', CustomHeader);