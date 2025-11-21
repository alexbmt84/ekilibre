import { TrainingCourseCard } from './TrainingCourseCard'

export function CourseGrid() {
  return (
    <div className="max-w-[700px] mx-auto text-white">
      <TrainingCourseCard
        level="NIVEAU 1"
        title="Formation de l'Académie Ekilibre Sécurité Piscine"
        duration="1 jour - 4h30"
        description="Prévenir, surveiller et réagir efficacement autour d'une piscine"
        pricePerPerson={85}
        pricingTiers={[
          { participants: '4-6', price: '85€/pers', discountHost: '(Hôte -50%)' },
          { participants: '7-8', price: '70€/pers', discountHost: '(Hôte -50% à 7 pers / gratuit à 8 pers)' },
          { participants: '9-15', price: '65€/pers', discountHost: '(Hôte gratuit)' },
        ]}
        include2days={null}
        includes={[
          'Comprendre la réalité des noyades',
          'Gestes adaptés piscine (GQS - 2h)',
          'Analyse vidéo & décryptage',
          'Surveillance active',
          'Protocole Ekilibre de prévention',
          'Exercices pratiques au bord du bassin',
          'Certification de l\'Académie Ekilibre Sécurité Piscine',
        ]}
        certification="Certificat de l'Académie Ekilibre Sécurité Piscine"
        certificationType="standard"
      />

      <TrainingCourseCard
        level="NIVEAU 2"
        title="Formation Complète : Sécurité Piscine + PSC1"
        duration="1 jour supplémentaire - 7h"
        description="Prévention et Secours Civiques niveau 1"
        pricePerPerson={90}
        pricingTiers={[
          { participants: 'À partir de 6', price: 'Tarif niveau 1 + 90€/pers', discountHost: '' },
        ]}
        includes={[
          'Certification officielle PSC1',
          'Formateurs diplômés d\'État',
          'Gestes de secours tous contextes',
          'Plus complet que GQS',
          'Reconnaissance nationale',
        ]}
        include2days={[
          'Comprendre la réalité des noyades',
          'Gestes adaptés piscine (GQS - 2h)',
          'Analyse vidéo & décryptage',
          'Surveillance active',
          'Protocole Ekilibre de prévention',
          'Exercices pratiques au bord du bassin',
          'Certification de l\'Académie Ekilibre Sécurité Piscine',
        ]}
        certification="Diplôme PSC1 officiel"
        certificationType="official"
      />
    </div>
  )
}
