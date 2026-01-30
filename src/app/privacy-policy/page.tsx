import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Vero Market Privacy Policy</h1>
          
          <div className="flex gap-4 text-sm text-muted-foreground mb-8">
            <p><strong className="text-foreground">Effective Date:</strong> January 29, 2026</p>
            <p><strong className="text-foreground">Last Updated:</strong> January 29, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This Privacy Policy (&quot;Policy&quot;) explains how Codevero LLC (&quot;Codevero,&quot; &quot;Vero Market,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects information relating to users (&quot;you,&quot; &quot;your&quot;) of the Vero Market platform, including our website, applications, APIs, and related services (collectively, the &quot;Platform&quot;).
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to this Policy. If you do not agree, you must not use the Platform.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Scope of This Policy</h2>
              <p className="text-muted-foreground mb-4">This Policy applies to information collected through the Platform. It does not apply to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Third-party protocols, blockchains, wallets, or exchanges</li>
                <li>Services provided by dFlow, Kalshi, or any other third party</li>
                <li>Public blockchain data that is not controlled by Codevero</li>
              </ul>
              <p className="text-muted-foreground">You are responsible for reviewing the privacy practices of any third-party services you use.</p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.1 Information You Provide</h3>
              <p className="text-muted-foreground mb-3">You may voluntarily provide information such as:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Contact information (e.g., email address)</li>
                <li>Support communications and inquiries</li>
                <li>Preferences or settings</li>
                <li>Wallet addresses or identifiers you choose to connect</li>
              </ul>
              <p className="text-muted-foreground mb-6">We do not require you to provide personal information to browse the Platform.</p>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.2 Information Collected Automatically</h3>
              <p className="text-muted-foreground mb-3">When you access the Platform, we (or our service providers) may automatically collect:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>IP address</li>
                <li>Device identifiers and browser type</li>
                <li>Operating system and language settings</li>
                <li>Pages viewed, actions taken, timestamps</li>
                <li>Referring URLs and session metadata</li>
              </ul>
              <p className="text-muted-foreground mb-6">This information is used for security, analytics, and operational purposes.</p>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.3 Blockchain Information</h3>
              <p className="text-muted-foreground mb-3">The Platform may display or interact with public blockchain data, including wallet addresses and transaction metadata. This information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Is publicly available by nature</li>
                <li>Is not created or controlled by Codevero</li>
                <li>Is processed solely to enable Platform functionality</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-foreground/90">2.4 Cookies and Similar Technologies</h3>
              <p className="text-muted-foreground mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Enable core functionality</li>
                <li>Improve performance and usability</li>
                <li>Analyze Platform usage</li>
                <li>Support security and fraud prevention</li>
              </ul>
              <p className="text-muted-foreground">You can control cookies through your browser settings, though disabling cookies may impact functionality.</p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Information</h2>
              <p className="text-muted-foreground mb-3">We use information for legitimate business purposes, including to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Operate and maintain the Platform</li>
                <li>Improve features and user experience</li>
                <li>Communicate with users regarding updates or support</li>
                <li>Monitor and secure the Platform</li>
                <li>Detect, prevent, or address fraud, abuse, or technical issues</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
              <p className="text-muted-foreground">We do not use your information to provide financial, investment, or trading advice.</p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-3">We may share information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>With service providers that support our operations (e.g., hosting, analytics, security)</li>
                <li>With affiliates or contractors acting on our behalf</li>
                <li>To comply with legal obligations, court orders, or regulatory requests</li>
                <li>To protect our rights, users, or the integrity of the Platform</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p className="text-muted-foreground">We do not sell personal information for monetary consideration.</p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                The Platform is operated globally. Your information may be processed or stored in jurisdictions outside your country of residence, including jurisdictions with different data protection standards.
              </p>
              <p className="text-muted-foreground">
                By using the Platform, you acknowledge and consent to the international transfer and processing of your information where permitted by law.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-3">We retain information only for as long as reasonably necessary to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Fulfill the purposes described in this Policy</li>
                <li>Comply with legal, regulatory, or accounting obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-muted-foreground">We may retain anonymized or aggregated data indefinitely.</p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
              <p className="text-muted-foreground mb-3">We implement reasonable administrative, technical, and organizational measures to protect information. However:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>No system is completely secure</li>
                <li>We cannot guarantee absolute security</li>
                <li>You use the Platform at your own risk</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Global Privacy Rights</h2>
              <p className="text-muted-foreground mb-3">Depending on your jurisdiction, you may have certain rights regarding your personal information, which may include the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                <li>Request access to information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of certain information</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mb-3">These rights are not absolute and may be limited by legal, regulatory, security, or operational requirements. Requests may be denied where:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fulfillment would violate applicable law</li>
                <li>Data is required for legal compliance or dispute resolution</li>
                <li>Data is anonymized or aggregated</li>
                <li>Identity cannot be reasonably verified</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we learn that such information has been collected, we will take reasonable steps to delete it.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links and Services</h2>
              <p className="text-muted-foreground mb-4">
                The Platform may contain links to third-party websites, protocols, or services. We do not control and are not responsible for their privacy practices, content, or security.
              </p>
              <p className="text-muted-foreground">Use of third-party services is at your own risk.</p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy at any time. Changes become effective upon posting with an updated &quot;Last Updated&quot; date. Continued use of the Platform constitutes acceptance of the revised Policy.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">If you have questions about this Privacy Policy or our data practices, contact:</p>
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
