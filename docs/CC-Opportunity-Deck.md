import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Target, TrendingUp, Users, Award, CheckCircle, AlertCircle } from 'lucide-react';

const OpportunityDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CopperCloud",
      subtitle: "Zambia's Independent Authority for Data Sovereignty",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Shield className="w-32 h-32 text-emerald-600" />
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">CopperCloud</h2>
            <p className="text-2xl text-gray-600">Architecting Zambia's Digital Independence</p>
            <div className="pt-8 text-lg text-gray-500">
              Policy • Standards • Research
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Opportunity",
      subtitle: "From Energy to AI: Zambia's Sovereign Stack",
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Catalyst</h3>
            <p className="text-lg text-gray-700">Stanford Roundtable crystallized Zambia's opportunity to leapfrog traditional infrastructure and build a sovereign energy→telecom→compute ladder as a single national agenda.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600">$65-80M</div>
              <div className="text-sm text-gray-600">Annual foreign cloud spend</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600">$1.04B</div>
              <div className="text-sm text-gray-600">10-year offshore cost</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600">$460M</div>
              <div className="text-sm text-gray-600">Sovereign alternative</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700"><strong>Import Substitution:</strong> $200-250M balance of payments improvement over 5 years</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700"><strong>Job Creation:</strong> 3,500-4,000 direct and indirect jobs by Year 5</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700"><strong>Economic Sovereignty:</strong> Control over strategic data assets under Zambian law</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What CopperCloud Is",
      subtitle: "Positioning & Role Definition",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                What We Are
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Independent policy arm & data sovereignty authority for Zambia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>National orchestrator for interoperability standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Research engine piloting low-risk prototypes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Certification authority for "Sovereign-Ready" designation</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                What We're Not
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Prime systems integrator on government contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>A bidder competing for implementation work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Captured by any single commercial interest</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-red-200">
                <p className="text-sm text-gray-700"><strong>Independence Preserved:</strong> Implementation led by Lucid + partners while CopperCloud advises Government on regulation, interconnect, and open standards.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 text-center italic">"Neutral steward of Zambia's digital independence—not a bidder"</p>
          </div>
        </div>
      )
    },
    {
      title: "The Doctrine",
      subtitle: "Open-Ported Value Stack",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-3">Core Principle</h3>
            <p className="text-lg">Provision at Layer N for Layer N+1 from day one—reject siloed, sequential build-outs</p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
              <h4 className="font-bold text-gray-900">⚡ Energy Layer</h4>
              <p className="text-gray-700 text-sm">New capacity must include interconnect standards, telemetry, and footprint for carrier backhaul + DC tie-ins</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <h4 className="font-bold text-gray-900">📡 Telecom Layer</h4>
              <p className="text-gray-700 text-sm">New backbones must be DC-ready (diverse fiber paths, dark fiber policy, IX peering, timing/sync)</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
              <h4 className="font-bold text-gray-900">💻 Compute Layer</h4>
              <p className="text-gray-700 text-sm">Modular micro-DCs with national orchestration (policy-driven placement, residency controls, auditable workloads)</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50">
              <h4 className="font-bold text-gray-900">🔐 Data Governance</h4>
              <p className="text-gray-700 text-sm">Classification, residency, portability, lawful access codified with CopperCloud-administered certification</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-center font-bold text-gray-900">Result: Zambia leapfrogs incrementalism and builds compounding optionality into every asset</p>
          </div>
        </div>
      )
    },
    {
      title: "Mufulira Pilot",
      subtitle: "Proving Ground for Sovereign Infrastructure",
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Mufulira?</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-900 mb-2">Strategic Location</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Border + DRC corridor demand</li>
                  <li>• Mining/logistics anchor tenants</li>
                  <li>• Municipal buy-in from Mayor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900 mb-2">Infrastructure Ready</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Available land (1.0 hectare)</li>
                  <li>• Grid presence via ZESCO</li>
                  <li>• Fiber accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-emerald-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">6 Months</div>
                <div className="text-sm text-gray-600">Containerized micro-DC deployed</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">12 Months</div>
                <div className="text-sm text-gray-600">2+ anchor datasets localized</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-purple-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">18 Months</div>
                <div className="text-sm text-gray-600">Local IX/edge peering live</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-2">Pilot Use Cases</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Smart-border data processing (ZRA)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Mining telemetry & AI inference</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Municipal e-governance platforms</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Sovereign cloud workloads</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Research Agenda",
      subtitle: "Building the Knowledge Foundation",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Policy Research</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Comparative sovereignty models</li>
                  <li>• Data classification taxonomy</li>
                  <li>• Cross-border flow frameworks</li>
                  <li>• Security & assurance standards</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Technical Standards</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Energy interconnect telemetry</li>
                  <li>• Dark-fiber & open-access policy</li>
                  <li>• Residency-by-design architecture</li>
                  <li>• Attestation & audit trails</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Economic Analysis</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Import-substitution models</li>
                  <li>• Sovereign compute TCO</li>
                  <li>• Blended finance structures</li>
                  <li>• Tariff/wheeling implications</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Capacity Building</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ESG & community baselines</li>
                  <li>• Skills pipelines (TEVETA/CBU)</li>
                  <li>• Certification schemes</li>
                  <li>• Just transition frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-4">Deliverable Timeline</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Green Paper</span>
                <span className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">90 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Draft Standards & Sandbox Rules</span>
                <span className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">180 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Version-1 Framework + Pilot Evaluation</span>
                <span className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">12 Months</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Operating Model",
      subtitle: "Sustainable & Independent",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Core Activities</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Policy research & standards authorship</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Certification program administration</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Government Working Group secretariat</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pilot standards PMO</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Revenue Streams</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-900">Government Advisory Retainer</div>
                  <div className="text-sm text-gray-600">Policy support & GWG facilitation</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Donor/DFI Grants</div>
                  <div className="text-sm text-gray-600">Standards development funding</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certification Fees</div>
                  <div className="text-sm text-gray-600">Bronze/Silver/Gold tier assessments</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Implementation Oversight</div>
                  <div className="text-sm text-gray-600">Limited consulting with clear COI guardrails</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-bold text-gray-900 mb-2">Independence Safeguards</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• No single revenue source >40% of total funding</li>
              <li>• Strict conflict-of-interest policy + annual transparency report</li>
              <li>• Public registry of certified providers</li>
              <li>• Third-party auditors (CopperCloud administers but doesn't audit)</li>
              <li>• Sunset clause: Dissolve if mission institutionalized in government</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "5-Year Financial Projections",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 rounded-lg text-white shadow-lg">
              <div className="text-3xl font-bold">$301M</div>
              <div className="text-sm opacity-90">5-Year Fiscal Benefit</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-lg text-white shadow-lg">
              <div className="text-3xl font-bold">$250M</div>
              <div className="text-sm opacity-90">Import Substitution</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-lg text-white shadow-lg">
              <div className="text-3xl font-bold">4,000</div>
              <div className="text-sm opacity-90">Jobs by Year 5</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-lg text-white shadow-lg">
              <div className="text-3xl font-bold">$52M</div>
              <div className="text-sm opacity-90">Annual GVA (Year 5)</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certification Market Sizing</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Year</th>
                    <th className="text-right p-2">Bronze Certs</th>
                    <th className="text-right p-2">Silver Certs</th>
                    <th className="text-right p-2">Gold Certs</th>
                    <th className="text-right p-2">Annual Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2 font-semibold">Year 1</td>
                    <td className="text-right p-2">3-5</td>
                    <td className="text-right p-2">1-2</td>
                    <td className="text-right p-2">0</td>
                    <td className="text-right p-2 font-bold">$60-100K</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Year 2</td>
                    <td className="text-right p-2">8-12</td>
                    <td className="text-right p-2">3-4</td>
                    <td className="text-right p-2">1</td>
                    <td className="text-right p-2 font-bold">$180-280K</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Year 3</td>
                    <td className="text-right p-2">15-20</td>
                    <td className="text-right p-2">6-8</td>
                    <td className="text-right p-2">2-3</td>
                    <td className="text-right p-2 font-bold">$380-520K</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="p-2 font-bold">Year 5</td>
                    <td className="text-right p-2">30-40</td>
                    <td className="text-right p-2">12-15</td>
                    <td className="text-right p-2">5-7</td>
                    <td className="text-right p-2 font-bold text-emerald-700">$850K-1.2M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Government Advisory</h4>
              <div className="text-2xl font-bold text-blue-700">$250-400K/year</div>
              <div className="text-sm text-gray-600">GWG support, policy development</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-2">DFI Grants</h4>
              <div className="text-2xl font-bold text-purple-700">$500K-1M/year</div>
              <div className="text-sm text-gray-600">Standards, research, capacity building</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Success Metrics",
      subtitle: "12-18 Month Milestones",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                <h4 className="font-bold text-emerald-900 mb-2">Policy & Governance</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-2">1</div>
                    <span>Government Working Group established</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-2">2</div>
                    <span>Green Paper published & circulated</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-2">3</div>
                    <span>Regulatory sandbox launched</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-2">4</div>
                    <span>Open-port standards v1 adopted</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2">Infrastructure</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">1</div>
                    <span>≥1 micro-DC online in Mufulira</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">2</div>
                    <span>Dual-path fiber to pilot site</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">3</div>
                    <span>Local IX/edge peering activated</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-purple-900 mb-2">Adoption & Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-2">1</div>
                    <span>≥2 anchor datasets localized</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-2">2</div>
                    <span>≥2 industrial/municipal use cases live</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-2">3</div>
                    <span>Smart-border platform operational</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-bold text-orange-900 mb-2">Capacity Building</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold mr-2">1</div>
                    <span>100+ professionals certified</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold mr-2">2</div>
                    <span>Training partnerships established</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold mr-2">3</div>
                    <span>Academic collaboration active</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-4 text-center">North Star Metric</h3>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">60%</div>
              <div className="text-lg">Government priority datasets localized by Year 2</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Risk Mitigation",
      subtitle: "Challenges & Solutions",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Perceived Bias/Conflict</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: CopperCloud seen as captured by Lucid</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Codified separation, open RFPs, multi-vendor certification, transparency reports
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Policy Inertia</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: Government delays in decision-making</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Cabinet-mandated GWG, 90-day deliverables, public milestone reporting
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Grid/Infrastructure Delays</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: Power/connectivity unreliable in Mufulira</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Staged micro-DCs near substations, microwave fallbacks, BESS integration
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Talent Gaps</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: Insufficient skilled workforce</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Scholarships, bootcamps, vendor training tied to certification
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ WTO/Trade Compliance</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: Data localization rules challenged at WTO</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Phased implementation, SADC harmonization, exemptions for SMEs
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Security Posture</h4>
              <p className="text-sm text-gray-700 mb-2">Concern: Sovereign infrastructure becomes attack target</p>
              <div className="text-sm text-gray-600">
                <strong>Mitigation:</strong> Mandatory attestation, HSMs under Zambian custody, red-team exercises
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-center text-gray-700 font-semibold">All risks are manageable with proactive stakeholder engagement and phased implementation</p>
          </div>
        </div>
      )
    },
    {
      title: "The Ask",
      subtitle: "Phase 4 Execution",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Partner with CopperCloud</h2>
            <p className="text-xl mb-6">To establish Zambia as Africa's data sovereignty leader</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Government</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Formalize CopperCloud as independent standards authority</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Establish Government Working Group (GWG) via Cabinet Note</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Commit advisory retainer ($250-400K/year)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Approve Mufulira pilot site allocation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Development Partners</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fund Green Paper & standards development ($300-500K)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Support capacity building programs ($200-400K)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Provide technical assistance for regulatory framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Co-fund Mufulira pilot infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Next Steps (Q1 2026)</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Policy Track</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Convert strategy to Whitepaper skeleton</li>
                  <li>• Draft Open-Ported Standards v0.1</li>
                  <li>• Prepare GWG kickoff materials</li>
                  <li>• Brief Ambassador & Cabinet Office</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Implementation Track</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Define Mufulira Pilot Blueprint</li>
                  <li>• Stand up Research Docket (90-day plan)</li>
                  <li>• Engage anchor tenants (Mopani, ZRA)</li>
                  <li>• Launch certification program design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg text-center">
            <p className="text-2xl font-bold mb-2">Data Sovereignty = Economic Sovereignty</p>
            <p className="text-lg opacity-90">The time to act is now. Phase 4 starts today.</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide Content */}
          <div className="p-12 min-h-[600px]">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{slides[currentSlide].title}</h1>
              <p className="text-xl text-gray-600">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="mt-6">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-12 py-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold">Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              <span className="font-semibold">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="bg-emerald-600 text-white px-12 py-3 text-center">
            <span className="font-semibold">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDeck;