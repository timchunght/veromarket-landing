"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Sparkles,
  Target,
  Wallet,
  LineChart,
  Activity,
} from "lucide-react";
import Image from "next/image";

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
    description: "Settle immediately when markets resolve. No waiting, no delays, no intermediaries.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world. 24/7 markets on topics that matter to you.",
  },
  {
    icon: BarChart3,
    title: "Deep Liquidity",
    description: "Automated market makers ensure you can always trade at fair prices.",
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
    description: "Your wallet is auto-generated after you sign up so you're good to go.",
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
  { value: "10+", label: "Event Categories" },
  { value: "50+", label: "Active Events" },
  { value: "350+", label: "Total Markets" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] -top-48 -left-48 fixed" />
      <div className="orb orb-pink w-[400px] h-[400px] top-1/3 -right-32 fixed" />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-0 left-1/3 fixed" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Vero Market" width={32} height={32} className="rounded-md" />
              <span className="text-xl font-bold">Vero Market</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#markets" className="text-muted-foreground hover:text-primary transition-colors">Markets</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        {/* Background effects */}
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Prediction Markets Trading</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Predict the Future,{" "}
              <span className="gradient-text">Own the Outcome</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Trade on real-world events. Leverage collective intelligence. 
              The most accurate forecasts come from those with skin in the game.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href="https://apps.apple.com/app/veromarket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Image 
                  src="/app-store.svg" 
                  alt="Download on the App Store" 
                  width={150} 
                  height={50}
                  className="h-14 w-auto"
                />
              </a>
            </div>

            {/* Live stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white stat-value">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
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
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Live Markets</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Example Markets</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredMarkets.map((market) => (
              <div 
                key={market.id} 
                className="trading-card rounded-xl p-5 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-medium">
                      {market.category}
                    </span>
                    {market.trending && (
                      <span className="px-2.5 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {market.endDate}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-white/90">
                  {market.question}
                </h3>
                
                {/* Probability bar */}
                <div className="probability-bar h-2 mb-4">
                  <div className="flex h-full">
                    <div 
                      className="probability-yes transition-all duration-500"
                      style={{ width: `${market.yesPrice}%` }}
                    />
                    <div 
                      className="probability-no transition-all duration-500"
                      style={{ width: `${market.noPrice}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-400 font-mono font-semibold">YES {market.yesPrice}¢</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-red-400 font-mono font-semibold">NO {market.noPrice}¢</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5" />
                      ${market.volume}
                    </span>
                    <span className={`flex items-center gap-0.5 font-mono font-medium ${market.change > 0 ? 'price-up' : 'price-down'}`}>
                      {market.change > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {market.change > 0 ? '+' : ''}{market.change}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 radial-glow-bottom" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Why Vero Market?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for{" "}
              <span className="gradient-text">Everyone!</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A new paradigm for information discovery through market mechanisms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="trading-card rounded-xl p-6 hover-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/10 flex items-center justify-center mb-4 border border-purple-500/20">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <Target className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Getting Started</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Trading in{" "}
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
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center glow-purple">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple-500 border-2 border-background flex items-center justify-center text-xs font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative py-16 sm:py-24 px-6 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                  <Users className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-purple-200">Join traders worldwide</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Ready to Trade on{" "}
                  <span className="gradient-text">What You Know?</span>
                </h2>
                
                <p className="text-purple-200/80 text-lg mb-10 max-w-xl mx-auto">
                  Be the first to access new markets.
                </p>

                <a 
                  href="https://apps.apple.com/app/veromarket" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <Image 
                    src="/app-store.svg" 
                    alt="Download on the App Store" 
                    width={150} 
                    height={50}
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Vero Market" width={32} height={32} className="rounded-md" />
                <span className="text-xl font-bold">Vero Market</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The next generation prediction market platform. Trade the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/support" className="hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8 bg-purple-500/10" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Vero Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
