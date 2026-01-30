import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background orbs */}
      <div className="fixed w-[600px] h-[600px] -top-48 -left-48 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="fixed w-[400px] h-[400px] bottom-0 right-0 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Vero Market" width={32} height={32} className="rounded-md" />
              <span className="text-xl font-bold">Vero Market</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Vero Market Terms of Service</h1>
          
          <div className="flex gap-4 text-sm text-muted-foreground mb-8">
            <p><strong className="text-foreground">Effective Date:</strong> January 29, 2026</p>
            <p><strong className="text-foreground">Last Updated:</strong> January 29, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of Vero Market, including any related websites, mobile applications, APIs, and services (collectively, the &quot;Platform&quot;). The Platform is operated by Codevero LLC (&quot;Codevero,&quot; &quot;Vero Market,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By accessing or using the Platform in any manner, including by connecting a digital wallet or interacting with any markets, you agree to be bound by these Terms. If you do not agree, you must not access or use the Platform.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Nature of the Platform</h2>
              
              <h3 className="text-xl font-medium mb-3 text-foreground/90">1.1 UI-Only Service</h3>
              <p className="text-muted-foreground mb-3">
                Vero Market is a non-custodial software interface that enables users to discover and interact with prediction markets and related on-chain instruments made available by third-party protocols and market operators.
              </p>
              <p className="text-muted-foreground mb-3">Vero Market:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Does not operate an exchange or market</li>
                <li>Does not create, list, or settle contracts</li>
                <li>Does not execute trades on behalf of users</li>
                <li>Does not hold or custody user assets</li>
                <li>Is not a broker, dealer, advisor, intermediary, or financial institution</li>
              </ul>
              <p className="text-muted-foreground">All transactions are initiated and executed directly by users through their own wallets and through third-party services.</p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Third-Party Services and Providers</h2>
              
              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.1 dFlow</h3>
              <p className="text-muted-foreground mb-6">
                The Platform integrates with dFlow, which provides protocol-level infrastructure and routing that enables interaction with underlying markets. dFlow is an independent third party. Vero Market does not control, operate, or assume responsibility for dFlow, its protocol, or its availability.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.2 Kalshi</h3>
              <p className="text-muted-foreground mb-4">
                Certain markets accessible through the Platform are operated by Kalshi, a regulated prediction market exchange. Trading on Kalshi-operated markets is governed exclusively by the Kalshi Member Agreement, Kalshi&apos;s Rulebook, and applicable law.
              </p>
              <p className="text-muted-foreground mb-6">
                Your participation in any Kalshi market constitutes your agreement with Kalshi under its Member Agreement. Vero Market is not a party to that agreement and does not assume any obligations under it.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.3 Priority of Third-Party Terms</h3>
              <p className="text-muted-foreground">
                If there is any conflict between these Terms and the terms of a third-party provider (including dFlow or Kalshi), the third-party provider&apos;s terms will govern with respect to that provider&apos;s services.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground mb-3">You represent and warrant that:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>You are at least 18 years old (or the age of majority in your jurisdiction)</li>
                <li>You have the legal capacity to enter into binding agreements</li>
                <li>You are not prohibited from accessing the Platform or underlying markets under applicable law</li>
                <li>You comply with all jurisdictional restrictions applicable to you</li>
              </ul>
              <p className="text-muted-foreground">Access to certain markets may be restricted based on geography, regulatory requirements, or third-party rules.</p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. No Advice; No Fiduciary Relationship</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nothing on the Platform constitutes legal, financial, tax, or investment advice.</li>
                <li>Vero Market does not recommend or endorse any market, position, or outcome.</li>
                <li>No fiduciary, advisory, or agency relationship exists between you and Codevero, dFlow, or Kalshi.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Wallets and Custody</h2>
              <p className="text-muted-foreground mb-3">You are solely responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Your digital wallet(s)</li>
                <li>Your private keys and credentials</li>
                <li>All transactions you initiate</li>
              </ul>
              <p className="text-muted-foreground">Vero Market cannot access, recover, reverse, or control your assets or transactions. Loss of access to your wallet may result in permanent loss of funds.</p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Risks</h2>
              <p className="text-muted-foreground mb-3">You acknowledge and accept all risks associated with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Prediction markets and speculative trading</li>
                <li>Blockchain technology and smart contracts</li>
                <li>Market volatility and pricing uncertainty</li>
                <li>Technical failures, outages, or delays</li>
                <li>Regulatory changes or enforcement actions</li>
                <li>Third-party service interruptions or failures</li>
              </ul>
              <p className="text-muted-foreground">You understand that you may lose some or all of the value of assets used through the Platform.</p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Fees</h2>
              
              <h3 className="text-xl font-medium mb-3 text-foreground/90">7.1 Third-Party Fees</h3>
              <p className="text-muted-foreground mb-6">
                Third-party providers (including Kalshi) may charge fees related to trading, settlement, or access. These fees are set and collected independently of Vero Market.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">7.2 Platform Fees</h3>
              <p className="text-muted-foreground">
                Vero Market may charge platform or interface fees, which will be disclosed within the Platform prior to use.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Prohibited Use</h2>
              <p className="text-muted-foreground mb-3">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Violate any applicable law or regulation</li>
                <li>Circumvent geographic or regulatory restrictions</li>
                <li>Interfere with Platform security or integrity</li>
                <li>Use the Platform for fraudulent or manipulative purposes</li>
                <li>Misrepresent your identity or eligibility</li>
              </ul>
              <p className="text-muted-foreground">We reserve the right to restrict or terminate access for violations.</p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All Platform content, software, and trademarks are owned by Codevero LLC or its licensors. You are granted a limited, revocable, non-exclusive license to access and use the Platform for its intended purpose.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
              <p className="text-muted-foreground mb-4 font-medium uppercase text-sm">
                THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-muted-foreground">
                We do not guarantee uninterrupted access, accuracy, or availability of any market or service.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Codevero LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or trading losses, arising out of or related to your use of the Platform or third-party services.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Codevero LLC and its affiliates from any claims, damages, losses, or expenses (including attorneys&apos; fees) arising from your use of the Platform, violation of these Terms, or breach of applicable law.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution and Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of Delaware, USA, without regard to conflict-of-law principles.
              </p>
              <p className="text-muted-foreground">
                Disputes shall be resolved through binding arbitration or other agreed dispute resolution mechanisms, unless prohibited by law.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms at any time. Updated Terms will be posted with a revised &quot;Last Updated&quot; date. Continued use of the Platform constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms, together with any incorporated policies and applicable third-party agreements, constitute the entire agreement between you and Codevero LLC regarding use of the Platform.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">Codevero LLC</p>
                <p>Email: <a href="mailto:support@veromarket.xyz" className="text-primary hover:underline">support@veromarket.xyz</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
