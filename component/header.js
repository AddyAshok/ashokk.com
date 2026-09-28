class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Base Header Styling - Full Width */
            .header-nav-container {
                background: rgba(120, 215, 199, 0.94);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid #1e293b;
                padding: 5px 5px;
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
                background: linear-gradient(90deg, transparent, #38bdf8, #7c85d7, transparent);
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
                gap: 1px;
                width: 100%;
            }

            /* Logo & Technical Badge Group */
            .logo-group {
                display: flex;
                align-items: center;
                gap: 1px;
                flex-wrap: wrap;
            }

            .brand-logo {
                text-decoration: none;
                font-weight: 800;
                font-size: 20px;
                color: #0e33eb;
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
                gap: 2px;
                align-items: center;
                max-width: 1400px;
                margin: 1px auto 0;
                padding-top: 1px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }

            /* Main Links Styling */
            .langs a, .dropdown-btn {
                color: #cbd5e1;
                text-decoration: none;
                font-size: 13.5px;
                font-weight: 700;
                padding: 2px 2px;
                border-radius: 8px;
                border: 1px solid transparent;
                transition: all 0.25s ease;
                background: transparent;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 2px;
            }

            .langs a:hover, .dropdown-btn:hover {
                color: #ffffff;
                background: rgba(56, 189, 248, 0.12);
                border-color: rgba(56, 189, 248, 0.3);
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

            /* DESKTOP VIEW (Laptop/PC) Rules */
            @media (min-width: 869px) {
                #java-dropdown {
                    display: none !important; /* Hide dropdown container on laptop */
                }
                #desktop-java-link {
                    display: inline-flex !important; /* Show simple Java link on laptop */
                }
            }

            /* MOBILE VIEW (< 868px) Rules */
            @media (max-width: 868px) {
                #desktop-java-link {
                    display: none !important; /* Hide simple Java link on mobile */
                }

                #java-dropdown {
                    display: block; /* Show dropdown container on mobile */
                }

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
                    display: none;
                    position: static;
                    box-shadow: none;
                    background: #020617;
                    border: none;
                    border-left: 2px solid #38bdf8;
                    margin-left: 12px;
                    margin-top: 4px;
                    padding-left: 8px;
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

            <!-- Navigation Bar -->
            <nav class="langs" id="nav-links" aria-label="Languages">
                
                <!-- Simple Java Link (Laptop/Desktop View) -->
                <a href="/java/" id="desktop-java-link">Java</a>

                <!-- Java Accordion Dropdown (Mobile View Only) -->
                <div class="dropdown-container" id="java-dropdown">
                    <button class="dropdown-btn" type="button">
                        Java ▾
                    </button>
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

        // Mobile Accordion Toggle for Sub-Topics
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