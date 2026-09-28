class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="langs" aria-label="Languages">
    <!-- Core Languages -->
    <a href="/java/">Java</a>
    <a href="/java-concurrency/">Concurrency</a>
    <a href="/python/">Python</a>

    <!-- Spring Framework Suite -->
    <a href="/spring/">Spring Core</a>
    <a href="/spring-boot/">Spring Boot</a>
    <a href="/spring-security/">Spring Security</a>
    <a href="/spring-jpa/">Spring JPA</a>

    <!-- Distributed Systems & Cloud -->
    <a href="/microservices/">Microservices</a>
    <a href="/kafka/">Kafka</a>
    <a href="/aws/">AWS</a>
    <a href="/design-pattern/">Design Pattern</a>
</nav>
        `;
    }
}
customElements.define('app-header', CustomHeader);