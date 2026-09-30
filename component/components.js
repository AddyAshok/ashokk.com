class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            app-footer {
                display: block;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
            }

            .site-footer {
                background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
                color: #94a3b8;
                padding: 60px 20px 24px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                border-top: 1px solid #1e293b;
                position: relative;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                overflow: hidden; /* FIX: Prevents absolute positioned top glow from overflowing */
            }

            .footer-grid {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 40px;
                padding-bottom: 40px;
                border-bottom: 1px solid #1e293b;
                width: 100%;
                box-sizing: border-box;
            }

            .footer-bottom {
                max-width: 1200px;
                margin: 0 auto;
                padding-top: 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 16px;
                font-size: 13px;
                width: 100%;
                box-sizing: border-box;
            }

            .footer-social-link {
                color: #f8fafc;
                background: #1e293b;
                padding: 6px 12px;
                border-radius: 6px;
                text-decoration: none;
                font-size: 13px;
                font-weight: 500;
                border: 1px solid #334155;
                transition: all 0.2s ease;
                white-space: nowrap;
            }

            .footer-social-link:hover {
                border-color: #38bdf8;
                color: #38bdf8;
            }

            @media (max-width: 640px) {
                .site-footer {
                    padding: 40px 16px 20px;
                }
                .footer-bottom {
                    flex-direction: column;
                    text-align: center;
                }
            }
        </style>

        <footer class="site-footer">
            <!-- Top Decorative Line -->
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #38bdf8, transparent);"></div>

            <div class="footer-grid">
                
                <!-- Column 1: Brand & Bio -->
                <div>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                        <h3 style="color: #f8fafc; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Ashokka <span style="color: #38bdf8;">Tech</span></h3>
                    </div>
                    
                    <p style="font-size: 14px; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px;">
                        Production-grade backend engineering insights curated by a <strong>Senior Engineer</strong> with 5+ years of experience building high-availability Java, Spring Boot microservices, Kafka, and AWS cloud systems.
                    </p>

                    <!-- Social Links -->
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <a href="https://github.com/your-username" target="_blank" class="footer-social-link">GitHub ↗</a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" class="footer-social-link">LinkedIn ↗</a>
                        <a href="https://youtube.com/@your-channel" target="_blank" class="footer-social-link">YouTube ↗</a>
                    </div>
                </div>

                <!-- Column 2: System Design & Backend Architecture -->
                <div>
                    <h4 style="color: #f8fafc; margin-top: 0; margin-bottom: 16px; font-size: 15px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Architecture & Design</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; line-height: 2.2;">
                        <li><a href="/design-pattern/" style="color: #94a3b8; text-decoration: none;">Low-Level Design (LLD) & Patterns</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">High-Level Design (HLD) & Microservices</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">Apache Kafka & Distributed Systems</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">Spring Security & Rate-Limiting Filters</a></li>
                    </ul>
                </div>

                <!-- Column 3: Cloud & Language Core -->
                <div>
                    <h4 style="color: #f8fafc; margin-top: 0; margin-bottom: 16px; font-size: 15px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Cloud & Core Engineering</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; line-height: 2.2;">
                        <li><a href="/java/" style="color: #94a3b8; text-decoration: none;">Java Core, Memory Model & Concurrency</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">AWS Infrastructure & DevOps</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">1-on-1 Mock Interviews & Resume Review</a></li>
                        <li><a href="/" style="color: #94a3b8; text-decoration: none;">Engineering Journey & Tech Stack</a></li>
                    </ul>
                </div>

            </div>

            <!-- Bottom Metadata & Status Indicator -->
            <div class="footer-bottom">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="height: 8px; width: 8px; background-color: #22c55e; border-radius: 50%; display: inline-block; box-shadow: 0 0 8px #22c55e;"></span>
                    <span style="color: #cbd5e1; font-weight: 500;">All Systems Operational</span>
                </div>

                <div style="text-align: center;">
                    <p style="margin: 0 0 6px 0; color: #64748b;">© 2026 Ashokka Tech. Built with Clean Code & High Availability.</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        📧 <a href="mailto:contact@ashokka.com" style="color: #38bdf8; text-decoration: none;">contact@ashokka.com</a> 
                        <span style="color: #334155; margin: 0 8px;">|</span> 
                        💼 Open for Consulting & Technical Mentorship
                    </p>
                </div>
            </div>
        </footer>
        `;
    }
}
if (!customElements.get('CustomFooter')) {
   }
customElements.define('app-footer', CustomFooter);

