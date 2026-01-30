import { Mail, UserX, MessageCircle, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-muted-foreground text-lg">
              We&apos;re here to help. Reach out to us with any questions or concerns.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Contact Support */}
            <Card className="glass border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
                    <p className="text-muted-foreground mb-4">
                      Having issues with the platform? Need help with your account or have questions about prediction markets? Our support team is ready to assist you.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For any issues, inquiries, or feedback, please contact us at:
                    </p>
                    <a 
                      href="mailto:support@veromarket.xyz" 
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 hover:underline font-medium text-lg"
                    >
                      <MessageCircle className="w-5 h-5 text-purple-400" />
                      support@veromarket.xyz
                    </a>
                    <p className="text-sm text-muted-foreground mt-4">
                      We typically respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right to be Forgotten */}
            <Card className="glass border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <UserX className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">Right to Be Forgotten</h2>
                    <p className="text-muted-foreground mb-4">
                      We respect your privacy and your right to control your personal data. You have the ability to delete your account and remove your personal information from our platform at any time.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-purple-400" />
                        Account Deletion
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        You can delete your own account directly through your account settings. Upon deletion, your personal data will be permanently removed from our systems in accordance with our{" "}
                        <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      If you need assistance with account deletion or have questions about your data, contact us at{" "}
                      <a href="mailto:support@veromarket.xyz" className="text-purple-400 hover:text-purple-300 hover:underline">
                        support@veromarket.xyz
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="glass border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/privacy-policy">
                    <Button variant="outline" className="w-full justify-start h-auto py-3 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10">
                      <Shield className="w-5 h-5 mr-3 text-purple-400" />
                      <div className="text-left">
                        <div className="font-medium">Privacy Policy</div>
                        <div className="text-xs text-muted-foreground">How we handle your data</div>
                      </div>
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button variant="outline" className="w-full justify-start h-auto py-3 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10">
                      <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
                      <div className="text-left">
                        <div className="font-medium">Terms of Service</div>
                        <div className="text-xs text-muted-foreground">Platform usage guidelines</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
