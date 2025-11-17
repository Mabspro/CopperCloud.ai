<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CopperCloud One-Pager</title>
    <style>
        @page {
            size: letter;
            margin: 0;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.4;
            color: #1f2937;
            background: white;
        }
        .page {
            width: 8.5in;
            height: 11in;
            padding: 0.5in;
            margin: 0 auto;
            background: white;
        }
        .header {
            background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
            color: white;
            padding: 20px 30px;
            margin: -0.5in -0.5in 20px -0.5in;
            border-bottom: 4px solid #047857;
        }
        .header h1 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
        }
        .header .tagline {
            font-size: 16px;
            opacity: 0.95;
            font-weight: 500;
        }
        .section {
            margin-bottom: 18px;
        }
        .section-title {
            font-size: 14px;
            font-weight: 700;
            color: #059669;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            padding-bottom: 4px;
            border-bottom: 2px solid #059669;
        }
        .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        .stat-box {
            background: #f0fdf4;
            border-left: 4px solid #059669;
            padding: 12px;
            border-radius: 4px;
        }
        .stat-value {
            font-size: 24px;
            font-weight: 800;
            color: #059669;
            line-height: 1;
            margin-bottom: 4px;
        }
        .stat-label {
            font-size: 11px;
            color: #374151;
            font-weight: 500;
        }
        .content-box {
            background: #f9fafb;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .content-box h4 {
            font-size: 12px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 6px;
        }
        ul {
            list-style: none;
            padding-left: 0;
        }
        ul li {
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 4px;
            padding-left: 16px;
            position: relative;
        }
        ul li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #059669;
            font-weight: bold;
        }
        .highlight-box {
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
            color: white;
            padding: 16px;
            border-radius: 6px;
            text-align: center;
            margin: 15px 0;
        }
        .highlight-box .big-text {
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 6px;
        }
        .highlight-box .small-text {
            font-size: 12px;
            opacity: 0.9;
        }
        .cta-box {
            background: #fef3c7;
            border: 2px solid #f59e0b;
            padding: 14px;
            border-radius: 6px;
            margin-top: 15px;
        }
        .cta-box h3 {
            font-size: 13px;
            font-weight: 700;
            color: #92400e;
            margin-bottom: 8px;
        }
        .cta-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            font-size: 10px;
            line-height: 1.4;
        }
        .footer {
            position: fixed;
            bottom: 0.5in;
            left: 0.5in;
            right: 0.5in;
            padding-top: 10px;
            border-top: 2px solid #e5e7eb;
            font-size: 9px;
            color: #6b7280;
            text-align: center;
        }
        .badge {
            display: inline-block;
            background: #dcfce7;
            color: #166534;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 9px;
            font-weight: 700;
            margin-right: 6px;
        }
        @media print {
            .page {
                margin: 0;
                border: none;
                page-break-after: always;
            }
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <h1>CopperCloud</h1>
            <div class="tagline">Zambia's Independent Authority for Data Sovereignty • Policy • Standards • Research</div>
        </div>

        <!-- Value Proposition -->
        <div class="section">
            <div class="section-title">The Opportunity</div>
            <p style="font-size: 12px; margin-bottom: 12px;">
                <strong>CopperCloud</strong> positions Zambia as Africa's data sovereignty leader by defining national standards, stewarding open infrastructure, and piloting sovereign compute—capturing <strong>$301M in 5-year fiscal benefits</strong> while creating <strong>4,000 jobs</strong> and eliminating dependency on foreign cloud providers.
            </p>
            <div class="three-col">
                <div class="stat-box">
                    <div class="stat-value">$65-80M</div>
                    <div class="stat-label">Annual offshore cloud spend (status quo)</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">$1.04B</div>
                    <div class="stat-label">10-year cost of foreign dependency</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">$460M</div>
                    <div class="stat-label">Sovereign infrastructure alternative</div>
                </div>
            </div>
        </div>

        <!-- What We Do -->
        <div class="section">
            <div class="section-title">What CopperCloud Does</div>
            <div class="two-col">
                <div class="content-box">
                    <h4>Policy & Standards Authority</h4>
                    <ul>
                        <li>Define national doctrine for sovereign infrastructure</li>
                        <li>Author "Open-Ported" interoperability standards</li>
                        <li>Steward Government Working Group (GWG) secretariat</li>
                        <li>Produce Green Papers & regulatory frameworks</li>
                    </ul>
                </div>
                <div class="content-box">
                    <h4>Research & Certification</h4>
                    <ul>
                        <li>Comparative sovereignty models (EU, Rwanda, India)</li>
                        <li>Economic analysis & TCO modeling</li>
                        <li>Administer 3-tier "Sovereign-Ready" certification</li>
                        <li>Pilot micro-DCs & validate standards</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- The Doctrine -->
        <div class="section">
            <div class="section-title">Open-Ported Value Stack Doctrine</div>
            <div style="font-size: 11px; margin-bottom: 8px;">Reject siloed build-outs. Provision Layer N for Layer N+1 from day one:</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 10px;">
                <div style="background: #fef3c7; padding: 8px; border-radius: 4px; border-left: 3px solid #f59e0b;">
                    <strong>⚡ Energy</strong><br>Interconnect telemetry, DC footprints, backhaul-ready
                </div>
                <div style="background: #dbeafe; padding: 8px; border-radius: 4px; border-left: 3px solid #3b82f6;">
                    <strong>📡 Telecom</strong><br>Dark fiber policy, IX peering, diverse paths
                </div>
                <div style="background: #e9d5ff; padding: 8px; border-radius: 4px; border-left: 3px solid #a855f7;">
                    <strong>💻 Compute</strong><br>Modular micro-DCs, residency controls, audit trails
                </div>
                <div style="background: #dcfce7; padding: 8px; border-radius: 4px; border-left: 3px solid #059669;">
                    <strong>🔐 Data</strong><br>Classification, portability, CopperCloud certification
                </div>
            </div>
        </div>

        <!-- Mufulira Pilot -->
        <div class="section">
            <div class="section-title">Mufulira Pilot: Proving Sovereign Infrastructure Works</div>
            <div class="two-col">
                <div>
                    <div class="content-box">
                        <h4>Why Mufulira?</h4>
                        <ul style="margin-bottom: 8px;">
                            <li>Border location: DRC cross-border data flows</li>
                            <li>Mining anchor tenant: Mopani + industrial loads</li>
                            <li>Municipal buy-in: Mayor-led convening</li>
                            <li>Infrastructure present: Grid + fiber accessibility</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                        <div style="background: #dcfce7; padding: 10px; border-radius: 4px; text-align: center;">
                            <div style="font-size: 18px; font-weight: 800; color: #059669;">6mo</div>
                            <div style="font-size: 9px; color: #374151;">Micro-DC online</div>
                        </div>
                        <div style="background: #dbeafe; padding: 10px; border-radius: 4px; text-align: center;">
                            <div style="font-size: 18px; font-weight: 800; color: #3b82f6;">12mo</div>
                            <div style="font-size: 9px; color: #374151;">Datasets localized</div>
                        </div>
                        <div style="background: #e9d5ff; padding: 10px; border-radius: 4px; text-align: center;">
                            <div style="font-size: 18px; font-weight: 800; color: #a855f7;">18mo</div>
                            <div style="font-size: 9px; color: #374151;">IX peering live</div>
                        </div>
                    </div>
                    <div style="font-size: 10px; margin-top: 8px; padding: 8px; background: #f0fdf4; border-radius: 4px;">
                        <strong>Use Cases:</strong> Smart-border (ZRA), mining telemetry, municipal e-gov, sovereign workloads
                    </div>
                </div>
            </div>
        </div>

        <!-- Impact Metrics -->
        <div class="section">
            <div class="section-title">5-Year Impact</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
                <div class="stat-box">
                    <div class="stat-value">$301M</div>
                    <div class="stat-label">Total fiscal benefit</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">$250M</div>
                    <div class="stat-label">Import substitution</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">4,000</div>
                    <div class="stat-label">Jobs created</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">$52M</div>
                    <div class="stat-label">Annual GDP contribution</div>
                </div>
            </div>
        </div>

        <!-- Operating Model -->
        <div class="section">
            <div class="section-title">Operating Model & Independence</div>
            <div class="two-col">
                <div class="content-box">
                    <h4>Revenue Streams (Diversified)</h4>
                    <ul>
                        <li><strong>Gov't Advisory:</strong> $250-400K/year (GWG, policy)</li>
                        <li><strong>DFI Grants:</strong> $500K-1M/year (standards, research)</li>
                        <li><strong>Certification:</strong> $850K-1.2M/year by Year 5</li>
                        <li><strong>Limited Consulting:</strong> Implementation oversight</li>
                    </ul>
                </div>
                <div class="content-box">
                    <h4>Independence Safeguards</h4>
                    <ul>
                        <li>No single source >40% of funding</li>
                        <li>Third-party auditors (not CopperCloud staff)</li>
                        <li>Annual transparency reports + public registry</li>
                        <li>Sunset clause if mission institutionalized</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- The Ask -->
        <div class="cta-box">
            <h3>🎯 The Ask: Partner with CopperCloud to Execute Phase 4</h3>
            <div class="cta-items">
                <div>
                    <strong style="color: #92400e;">For Government:</strong><br>
                    • Formalize as independent standards authority<br>
                    • Establish GWG via Cabinet Note<br>
                    • Commit advisory retainer ($250-400K/year)<br>
                    • Approve Mufulira pilot site
                </div>
                <div>
                    <strong style="color: #92400e;">For Development Partners:</strong><br>
                    • Fund Green Paper & standards ($300-500K)<br>
                    • Support capacity building ($200-400K)<br>
                    • Technical assistance for regulatory framework<br>
                    • Co-fund pilot infrastructure
                </div>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="highlight-box" style="margin-top: 15px;">
            <div class="big-text">Data Sovereignty = Economic Sovereignty</div>
            <div class="small-text">Zambia's digital infrastructure decisions made in 2025-2026 will shape its economy for decades</div>
        </div>

        <div style="margin-top: 12px; padding: 10px; background: #f9fafb; border-radius: 4px; font-size: 10px;">
            <strong>12-18 Month Success Metrics:</strong> 
            <span class="badge">GWG Established</span>
            <span class="badge">Green Paper Published</span>
            <span class="badge">Sandbox Launched</span>
            <span class="badge">Standards Adopted</span>
            <span class="badge">1+ Micro-DC Online</span>
            <span class="badge">2+ Datasets Localized</span>
            <span class="badge">100+ Certified Professionals</span>
        </div>

        <div class="footer">
            <strong>CopperCloud Policy & Standards Secretariat</strong> • Independent • Transparent • Impact-Driven<br>
            Contact: Embassy of Zambia (Washington, D.C.) | Ministry of Technology & Science | Lucid Circuit Partnership<br>
            Document Date: Q4 2025 | Version 1.0
        </div>
    </div>
</body>
</html>