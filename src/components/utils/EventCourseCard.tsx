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
  includes: string[],
  certification: string
  certificationType: 'standard' | 'official',
}

export function EventCourseCard({
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
        <h2 className="text-2xl font-bold text-background text-balance text-left text-black">{title}</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-0 bg-white text-black">
        {/* Description */}
        <p className="text-muted-foreground mb-6 text-balance text-left">{description}</p>

        {/* Includes section */}
        <div className={`mb-6`}>
      
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider text-left">
            Contenu inclus
          </h3>
       
          <ul className="space-y-2 text-left">
            {includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>       

        {/* Pricing section */}
        <div className="bg-background rounded-lg p-4 mb-6 border border-border">
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider text-left">Tarification</h3>
          <div className="space-y-2 text-left">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-start text-sm">
                <div>
                  <p className="font-medium text-foreground">{tier.participants}</p>
                  {tier.discountHost && (
                    <p className="text-xs text-muted-foreground text-gray-700 pt-5">{tier.discountHost}</p>
                  )}
                </div>
                <p className="font-bold text-primary text-md">{tier.price}</p>
              </div>
            ))}
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
            className="w-full py-6 text-base font-semibold rounded-lg cursor-pointer mb-6"
            variant={isOfficial ? 'default' : 'default'}
          >
            Réservation
          </Button>
        </ScrollLink>

      </div>
    </div>
  )
}
