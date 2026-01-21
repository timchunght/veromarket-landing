"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  TrendingDown,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  Clock,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Target,
  Wallet,
  LineChart,
} from "lucide-react";

const featuredMarkets = [
  {
    id: 1,
    question: "Will Bitcoin reach $150K by March 2026?",
    yesPrice: 67,
    noPrice: 33,
    volume: "2.4M",
    change: +5.2,
    category: "Crypto",
    endDate: "Mar 31, 2026",
    trending: true,
  },
  {
    id: 2,
    question: "Will the Fed cut rates in Q1 2026?",
    yesPrice: 42,
    noPrice: 58,
    volume: "1.8M",
    change: -3.1,
    category: "Economics",
    endDate: "Mar 31, 2026",
    trending: false,
  },
  {
    id: 3,
    question: "Will SpaceX land humans on Mars by 2030?",
    yesPrice: 23,
    noPrice: 77,
    volume: "890K",
    change: +1.8,
    category: "Science",
    endDate: "Dec 31, 2030",
    trending: true,
  },
  {
    id: 4,
    question: "Will AI pass the Turing Test by 2027?",
    yesPrice: 78,
    noPrice: 22,
    volume: "1.2M",
    change: +8.4,
    category: "Technology",
    endDate: "Dec 31, 2027",
    trending: true,
  },
];

const features = [
  {
    icon: Shield,
    title: "Fully Decentralized",
    description: "No central authority. Markets are governed by smart contracts with transparent resolution.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Get paid immediately when markets resolve. No waiting, no delays, no intermediaries.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world. 24/7 markets on topics that matter to you.",
  },
  {
    icon: BarChart3,
    title: "Deep Liquidity",
    description: "Automated market makers ensure you can always buy or sell at fair prices.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Discover Markets",
    description: "Browse thousands of markets on politics, crypto, sports, science, and more.",
    icon: Target,
  },
  {
    step: 2,
    title: "Connect Wallet",
    description: "Link your Web3 wallet in seconds. Support for all major wallets.",
    icon: Wallet,
  },
  {
    step: 3,
    title: "Trade Your View",
    description: "Buy YES or NO shares based on your prediction. Prices reflect probability.",
    icon: LineChart,
  },
  {
    step: 4,
    title: "Earn Returns",
    description: "Winning shares pay out $1. Profit from your accurate predictions.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "$847M+", label: "Total Volume" },
  { value: "2.1M+", label: "Active Traders" },
  { value: "15,000+", label: "Markets Created" },
  { value: "99.9%", label: "Uptime" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">VeroMarket</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#markets" className="text-muted-foreground hover:text-foreground transition-colors">Markets</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden sm:flex">Sign In</Button>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold">
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background effects */}
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30 animate-grid" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              The Future of Forecasting
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Predict the Future,{" "}
              <span className="gradient-text">Own the Outcome</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Trade on real-world events. Leverage collective intelligence. 
              The most accurate forecasts come from those with skin in the game.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 h-12 text-base animate-pulse-glow">
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-base border-border/50 hover:bg-secondary">
                Explore Markets
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </div>

            {/* Live stats ticker */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Markets */}
      <section id="markets" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Trending Markets</h2>
              <p className="text-muted-foreground">The most active predictions right now</p>
            </div>
            <Button variant="outline" className="border-border/50">
              View All Markets
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredMarkets.map((market) => (
              <Card key={market.id} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {market.category}
                      </Badge>
                      {market.trending && (
                        <Badge className="bg-primary/20 text-primary border-0 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {market.endDate}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                    {market.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Probability bar */}
                    <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden flex">
                      <div 
                        className="h-full bg-gradient-to-r from-success to-success/80 transition-all duration-500"
                        style={{ width: `${market.yesPrice}%` }}
                      />
                      <div 
                        className="h-full bg-gradient-to-r from-destructive/80 to-destructive transition-all duration-500"
                        style={{ width: `${market.noPrice}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-success font-semibold">YES {market.yesPrice}¢</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-destructive font-semibold">NO {market.noPrice}¢</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3.5 h-3.5" />
                        ${market.volume}
                      </span>
                      <span className={`flex items-center gap-0.5 font-medium ${market.change > 0 ? 'text-success' : 'text-destructive'}`}>
                        {market.change > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                        {Math.abs(market.change)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              Why VeroMarket
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for the Future of{" "}
              <span className="gradient-text">Decentralized Prediction</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A new paradigm for information discovery through market mechanisms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              Getting Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Predicting in{" "}
              <span className="gradient-text">Four Simple Steps</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From discovery to earnings in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-border">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <CardContent className="relative py-12 sm:py-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <CardContent className="relative py-16 sm:py-20 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Join 2.1M+ traders worldwide</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Trade on{" "}
                  <span className="gradient-text">What You Know?</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Be the first to access new markets. Get exclusive updates and early access to features.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-12 bg-input/50 border-border/50 focus:border-primary"
                  />
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold h-12 px-8">
                    Get Early Access
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">VeroMarket</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The next generation prediction market platform. Trade the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Markets</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8 bg-border/50" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 VeroMarket. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
