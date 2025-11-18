'use client'

import { CheckCircle2, Clock, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {Link as ScrollLink} from "react-scroll";


interface PricingTier {
  participants: string
  price: string
  discountHost: string
}

interface TrainingCourseCardProps {
  level: string
  title: string
  duration: string
  description: string
  pricePerPerson: number
  pricingTiers: PricingTier[]
  includes: string[]
  certification: string
  certificationType: 'standard' | 'official',
}

export function TrainingCourseCard({
  level,
  title,
  duration,
  description,
  pricePerPerson,
  pricingTiers,
  includes,
  certification,
  certificationType,
}: TrainingCourseCardProps) {
  const isOfficial = certificationType === 'official'

  return (
    <div className="relative bg-card border-8 border-[#5DB3B6] w-82 border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mt-24 bg-white">
      {/* Header with level badge */}
      <div className={`px-6 py-4 ${isOfficial ? 'bg-white' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-background tracking-wider text-black text-bold">{level}</span>
          {isOfficial && (
            <Award className="w-5 h-5 text-background" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-background text-balance text-left text-black">{title}</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 bg-white text-black">
        {/* Description */}
        <p className="text-muted-foreground mb-6 text-balance text-left">{description}</p>

        {/* Key info badges */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 bg-gray-300 rounded-lg p-3">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-300 rounded-lg p-3">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Groupes</span>
          </div>
        </div>

        {/* Pricing section */}
        <div className="bg-background rounded-lg p-4 mb-6 border border-border">
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider text-left">Tarification</h3>
          <div className="space-y-2 text-left">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-start text-sm">
                <div>
                  <p className="font-medium text-foreground">{tier.participants} personnes</p>
                  {tier.discountHost && (
                    <p className="text-xs text-muted-foreground text-gray-700">{tier.discountHost}</p>
                  )}
                </div>
                <p className="font-bold text-primary text-lg">{tier.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Includes section */}
        <div className={`mb-6`}>
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider text-left">Contenu inclus</h3>
          <ul className="space-y-2">
            {includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certification */}
        <div className={`bg-gray-300 rounded-lg p-4 mb-6 border border-primary/20 text-left`}>
          <div className="flex items-start gap-3">
            <Award className={`w-5 h-5 flex-shrink-0 ${isOfficial ? 'text-accent' : 'text-primary'}`} />
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Certification</p>
              <p className="font-medium text-foreground text-sm">{certification}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <ScrollLink
          to="contact"       // ID de ta section
          smooth={true}
          duration={500}
          offset={-100}      // ajuste si tu veux
        >
          <Button
            className="w-full py-6 text-base font-semibold rounded-lg cursor-pointer"
            variant={isOfficial ? 'default' : 'default'}
          >
            S&apos;inscrire à cette formation
          </Button>
        </ScrollLink>

      </div>
    </div>
  )
}
