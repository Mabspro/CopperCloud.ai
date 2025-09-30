<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CopperCloud - Africa's Sovereign AI Infrastructure</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            background: #0A0A0B;
            min-height: 100vh;
            color: #fff;
            overflow-x: hidden;
        }
        
        /* Animated background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(ellipse at 20% 50%, rgba(243, 130, 24, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 20%, rgba(184, 134, 11, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 40% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
        }
        
        .bg-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(90deg, transparent 0%, rgba(243, 130, 24, 0.03) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, rgba(184, 134, 11, 0.03) 50%, transparent 100%);
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
        }
        
        .header {
            padding: 1.5rem 0;
            position: relative;
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(243, 130, 24, 0.1);
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #F38218 0%, #B8860B 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .logo-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        .company-name {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #F38218 0%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .nav-links a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;
        }
        
        .nav-links a:hover {
            color: #F38218;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: #F38218;
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .hero-section {
            padding: 8rem 0 4rem;
            text-align: center;
            position: relative;
        }
        
        .hero-badge {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            background: rgba(243, 130, 24, 0.1);
            border: 1px solid rgba(243, 130, 24, 0.3);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #F38218;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
        }
        
        .hero-title {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #FFFFFF 0%, #F38218 50%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
            color: rgba(255,255,255,0.8);
            max-width: 700px;
            margin: 0 auto 3rem;
            line-height: 1.6;
            font-weight: 400;
        }
        
        .hero-cta {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 4rem;
        }
        
        .btn {
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            font-size: 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #F38218 0%, #FFD700 100%);
            color: #000;
            box-shadow: 0 4px 20px rgba(243, 130, 24, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(243, 130, 24, 0.4);
        }
        
        .btn-secondary {
            background: rgba(255,255,255,0.05);
            color: #fff;
            border: 1px solid rgba(243, 130, 24, 0.3);
            backdrop-filter: blur(20px);
        }
        
        .btn-secondary:hover {
            background: rgba(243, 130, 24, 0.1);
            border-color: #F38218;
            transform: translateY(-2px);
        }
        
        /* Sophisticated metrics display */
        .metrics-section {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 20px;
            padding: 3rem 2rem;
            margin: 4rem 0;
            backdrop-filter: blur(20px);
            position: relative;
            overflow: hidden;
        }
        
        .metrics-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #F38218, transparent);
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        
        .metric-item {
            text-align: center;
            padding: 1.5rem;
            position: relative;
        }
        
        .metric-value {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #F38218 0%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            line-height: 1;
        }
        
        .metric-label {
            font-size: 0.9rem;
            color: rgba(255,255,255,0.7);
            margin-top: 0.5rem;
            font-weight: 500;
        }
        
        .metric-sublabel {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.5);
            margin-top: 0.25rem;
        }
        
        /* Premium card system */
        .section {
            padding: 5rem 0;
            position: relative;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #FFFFFF 0%, #F38218 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .section-subtitle {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.7);
            max-width: 600px;
            margin: 0 auto;
        }
        
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }
        
        .premium-card {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 2.5rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            position: relative;
            overflow: hidden;
        }
        
        .premium-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(243, 130, 24, 0.5), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .premium-card:hover {
            transform: translateY(-5px);
            border-color: rgba(243, 130, 24, 0.2);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .premium-card:hover::before {
            opacity: 1;
        }
        
        .card-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, rgba(243, 130, 24, 0.2), rgba(255, 215, 0, 0.2));
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .card-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #fff;
        }
        
        .card-description {
            color: rgba(255,255,255,0.7);
            line-height: 1.6;
            font-size: 0.95rem;
        }
        
        /* Impact visualization */
        .impact-section {
            background: rgba(243, 130, 24, 0.03);
            border-radius: 30px;
            padding: 4rem 2rem;
            margin: 4rem 0;
            border: 1px solid rgba(243, 130, 24, 0.1);
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .impact-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(243, 130, 24, 0.05) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .impact-content {
            position: relative;
            z-index: 1;
        }
        
        .impact-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #FFD700 0%, #F38218 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .impact-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .impact-stat {
            background: rgba(255,255,255,0.05);
            padding: 2rem 1.5rem;
            border-radius: 16px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .impact-stat-value {
            font-size: 2rem;
            font-weight: 800;
            color: #F38218;
            display: block;
        }
        
        .impact-stat-label {
            font-size: 0.9rem;
            color: rgba(255,255,255,0.8);
            margin-top: 0.5rem;
        }
        
        .footer {
            padding: 3rem 0 2rem;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .footer-brand {
            font-size: 1.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, #F38218 0%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        
        .footer-tagline {
            color: rgba(255,255,255,0.6);
            margin-bottom: 2rem;
            font-style: italic;
        }
        
        .footer-disclaimer {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.5);
            line-height: 1.5;
        }
        
        @media (max-width: 768px) {
            .hero-section {
                padding: 4rem 0 3rem;
            }
            
            .hero-cta {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 280px;
            }
            
            .nav-links {
                display: none;
            }
            
            .cards-grid {
                grid-template-columns: 1fr;
            }
            
            .metrics-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 480px) {
            .metrics-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="bg-animation"></div>
    
    <div class="container">
        <header class="header">
            <nav class="nav">
                <div class="logo">
                    <div class="logo-icon">CC</div>
                    <div class="company-name">CopperCloud</div>
                </div>
                <div class="nav-links">
                    <a href="#infrastructure">Infrastructure</a>
                    <a href="#impact">Impact</a>
                    <a href="#partners">Partners</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
        
        <section class="hero-section">
            <div class="hero-badge">🚀 Now Building: Africa's First Sovereign AI Nation</div>
            
            <h1 class="hero-title">From Copper to Cloud</h1>
            
            <p class="hero-subtitle">
                Transforming Africa's abundant renewable energy into sovereign AI infrastructure. 
                We're building the intelligent grid that keeps African data, intelligence, and economic value in African hands.
            </p>
            
            <div class="hero-cta">
                <a href="#" class="btn btn-primary">Schedule Strategic Call</a>
                <a href="#" class="btn btn-secondary">View Investor Deck</a>
            </div>
        </section>
        
        <section class="metrics-section">
            <div class="metrics-grid">
                <div class="metric-item">
                    <span class="metric-value">$500B</span>
                    <div class="metric-label">African AI Market</div>
                    <div class="metric-sublabel">by 2030</div>
                </div>
                <div class="metric-item">
                    <span class="metric-value">99%</span>
                    <div class="metric-label">Data Processed Offshore</div>
                    <div class="metric-sublabel">$50B+ annual value drain</div>
                </div>
                <div class="metric-item">
                    <span class="metric-value">200MW</span>
                    <div class="metric-label">AI Infrastructure</div>
                    <div class="metric-sublabel">Phase 1 deployment</div>
                </div>
                <div class="metric-item">
                    <span class="metric-value">150M</span>
                    <div class="metric-label">People Served</div>
                    <div class="metric-sublabel">across SADC region</div>
                </div>
            </div>
        </section>
        
        <section class="section" id="infrastructure">
            <div class="section-header">
                <h2 class="section-title">Sovereign AI Infrastructure</h2>
                <p class="section-subtitle">Distributed compute nodes powered by renewable energy, processing data locally while contributing to continental intelligence networks.</p>
            </div>
            
            <div class="cards-grid">
                <div class="premium-card">
                    <div class="card-icon">⚡</div>
                    <h3 class="card-title">Energy-Optimized Design</h3>
                    <p class="card-description">Proprietary silicon delivering 5x cost savings and ultra-low latency, directly integrated with solar microgrids and battery storage for 99.9% uptime.</p>
                </div>
                
                <div class="premium-card">
                    <div class="card-icon">🏛️</div>
                    <h3 class="card-title">Government Partnership Model</h3>
                    <p class="card-description">Strategic alignment with Zambia's Digital Transformation Policy, creating Special Economic Zones and regulatory frameworks for AI innovation.</p>
                </div>
                
                <div class="premium-card">
                    <div class="card-icon">🌍</div>
                    <h3 class="card-title">Continental Scale Strategy</h3>
                    <p class="card-description">Hub-and-spoke expansion across 8 African countries, positioning Zambia as the continental leader in sovereign AI infrastructure.</p>
                </div>
                
                <div class="premium-card">
                    <div class="card-icon">🔒</div>
                    <h3 class="card-title">Data Sovereignty First</h3>
                    <p class="card-description">Your data should serve your community, not foreign corporations. Process sensitive information locally with full regulatory compliance and algorithmic justice.</p>
                </div>
            </div>
        </section>
        
        <section class="impact-section" id="impact">
            <div class="impact-content">
                <h2 class="impact-title">Economic Transformation</h2>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto;">
                    Africa supplies 60% of the minerals powering the global AI revolution but captures less than 1% of the value. CopperCloud changes that.
                </p>
                
                <div class="impact-stats">
                    <div class="impact-stat">
                        <span class="impact-stat-value">10,000+</span>
                        <div class="impact-stat-label">AI-Skilled Jobs Created</div>
                    </div>
                    <div class="impact-stat">
                        <span class="impact-stat-value">$500M+</span>
                        <div class="impact-stat-label">Annual Economic Impact</div>
                    </div>
                    <div class="impact-stat">
                        <span class="impact-stat-value">70%</span>
                        <div class="impact-stat-label">Cost Reduction vs Hyperscalers</div>
                    </div>
                    <div class="impact-stat">
                        <span class="impact-stat-value">8</span>
                        <div class="impact-stat-label">Countries in Regional Network</div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section" id="partners">
            <div class="section-header">
                <h2 class="section-title">Strategic Partnerships</h2>
                <p class="section-subtitle">Building with proven technology partners, development finance institutions, and government alignment for sustainable growth.</p>
            </div>
            
            <div class="cards-grid">
                <div class="premium-card">
                    <div class="card-icon">🇿🇲</div>
                    <h3 class="card-title">Zambia Development Agency</h3>
                    <p class="card-description">Strategic partnership for Special Economic Zone development and regulatory framework creation.</p>
                </div>
                
                <div class="premium-card">
                    <div class="card-icon">🇺🇸</div>
                    <h3 class="card-title">Lucid Circuit Technology</h3>
                    <p class="card-description">Licensed proprietary silicon and proven deployment methodologies from successful Iowa agricultural AI implementation.</p>
                </div>
                
                <div class="premium-card">
                    <div class="card-icon">🏦</div>
                    <h3 class="card-title">Development Finance Partners</h3>
                    <p class="card-description">African Development Bank, World Bank, and blended finance structures supporting infrastructure development.</p>
                </div>
            </div>
        </section>
        
        <footer class="footer" id="contact">
            <div class="footer-content">
                <div class="footer-brand">CopperCloud</div>
                <p class="footer-tagline">"From minerals to intelligence. From power to sovereignty."</p>
                
                <div style="margin: 2rem 0;">
                    <a href="mailto:hello@coppercloud.ai" class="btn btn-primary">Contact Us</a>
                </div>
                
                <div class="footer-disclaimer">
                    All information is confidential and for informational purposes only.<br>
                    CopperCloud is in early-stage formation. Materials available upon NDA.<br><br>
                    © 2025 CopperCloud. Building Africa's sovereign digital future.
                </div>
            </div>
        </footer>
    </div>
</body>
</html>