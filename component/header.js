class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Base Header Styling - Full Width */
            .header-nav-container {
                background: rgba(15, 23, 42, 0.98);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid #1e293b;
                padding: 12px 24px;
                position: relative;
                z-index: 1000;
                width: 100%;
                box-sizing: border-box;
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

            /* Inner Wrapper - Max Laptop Screen Spacing */
            .header-inner {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                width: 100%;
            }

            /* Logo & Technical Badge Group */
            .logo-group {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
            }

            .brand-logo {
                text-decoration: none;
                font-weight: 800;
                font-size: 20px;
                color: #f8fafc;
                letter-spacing: -0.5px;
            }
            .brand-logo b {
                color: #38bdf8;
            }

            .tech-badge {
                font-size: 11.5px;
                color: #38bdf8;
                background: rgba(56, 189, 248, 0.1);
                border: 1px solid rgba(56, 189, 248, 0.25);
                padding: 4px 10px;
                border-radius: 20px;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                white-space: nowrap;
            }

            .badge-dot {
                height: 6px;
                width: 6px;
                background-color: #22c55e;
                border-radius: 50%;
                box-shadow: 0 0 6px #22c55e;
            }

            /* Desktop Navigation Bar */
            .langs {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
                max-width: 1400px;
                margin: 10px auto 0;
                padding-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }

            /* Main Links Styling */
            .langs a, .dropdown-btn {
                color: #cbd5e1;
                text-decoration: none;
                font-size: 13.5px;
                font-weight: 700;
                padding: 7px 12px;
                border-radius: 8px;
                border: 1px solid transparent;
                transition: all 0.25s ease;
                background: transparent;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 4px;
            }

            .langs a:hover, .dropdown-btn:hover {
                color: #ffffff;
                background: rgba(56, 189, 248, 0.12);
                border-color: rgba(56, 189, 248, 0.3);
            }

            /* Sub-topics Dropdown Styling */
            .dropdown-container {
                position: relative;
                display: inline-block;
            }

            .dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: #0f172a;
                border: 1px solid #334155;
                border-radius: 8px;
                min-width: 220px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.5);
                z-index: 1001;
                padding: 6px 0;
                margin-top: 4px;
            }

            .dropdown-menu a {
                display: block;
                padding: 8px 16px;
                font-size: 13px;
                color: #94a3b8;
                border-radius: 0;
            }

            .dropdown-menu a:hover {
                color: #38bdf8;
                background: #1e293b;
            }

            /* LAPTOP/DESKTOP HOVER CLASSIC SHOW */
            @media (min-width: 869px) {
                .dropdown-container:hover .dropdown-menu {
                    display: block !important;
                }
            }

            /* Three Dots Toggle Button (Right Aligned on Mobile) */
            .menu-toggle {
                display: none;
                background: #1e293b;
                border: 1px solid #334155;
                color: #38bdf8;
                border-radius: 8px;
                padding: 6px 12px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 700;
                transition: all 0.2s;
            }

            /* Responsive Mobile View (< 868px) */
            @media (max-width: 868px) {
                .menu-toggle {
                    display: block;
                }

                .tech-badge {
                    display: none;
                }

                .langs {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    gap: 4px;
                    padding-top: 15px;
                    border-top: 1px solid #1e293b;
                    margin-top: 12px;
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
                    position: static;
                    box-shadow: none;
                    background: #020617;
                    border: none;
                    border-left: 2px solid #38bdf8;
                    margin-left: 12px;
                    margin-top: 4px;
                    padding-left: 8px;
                }

                .dropdown-container.open .dropdown-menu {
                    display: block !important;
                }
            }
        </style>

        <header class="header-nav-container">
            <div class="header-inner">
                <!-- Left: Logo & Technical Badge -->
                <div class="logo-group">
                    <a class="brand-logo" href="/">
                        <b>A</b>shokka.com
                    </a>
                    <span class="tech-badge">
                        <span class="badge-dot"></span>
                        Java • Microservices • AWS • Kafka
                    </span>
                </div>

                <!-- Right: Mobile Menu Toggle Button -->
                <button class="menu-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">⋮ Topic</button>
            </div>

            <!-- Navigation Bar with Nested Sub-Topics -->
            <nav class="langs" id="nav-links" aria-label="Languages">
                
                <!-- Java Dropdown with Sub-Topics -->
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

                <!-- Core Technical Topics -->
                <a href="/">Spring Boot</a>
                <a href="/">Spring Security</a>
                <a href="/">Spring JPA</a>
                <a href="/">Microservices</a>
                <a href="/">Kafka</a>
                <a href="/">AWS Cloud</a>
                <a href="/design-pattern/">Design Pattern</a>
                <a href="/">System Design</a>
                <a href="/">SQL</a>
                <a href="/">Interview Question</a>
                <a href="/python/">Python</a>
            </nav>
        </header>
        `;

        // Mobile Menu Toggle Logic
        const toggleBtn = this.querySelector('#mobile-menu-btn');
        const navLinks = this.querySelector('#nav-links');

        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Sub-Topics Click Handler for Mobile + Hover Safeguard for Desktop
        const javaDropdown = this.querySelector('#java-dropdown');
        const javaBtn = javaDropdown.querySelector('.dropdown-btn');

        javaBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 868) {
                e.preventDefault();
                javaDropdown.classList.toggle('open');
            }
        });
    }
}
customElements.define('app-header', CustomHeader);