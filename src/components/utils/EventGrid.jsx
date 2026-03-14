import { EventCourseCard } from './EventCourseCard'

export function EventGrid() {
  return (
    <div className="max-w-[700px] mx-auto text-white">
      <EventCourseCard
        level="Formule Standard — 1 MNS"
        title="Formule Standard — 1 MNS"
        duration="1 jour - 4h30"
        description="La sécurité invisible qui préserve la sérénité de vos invités."
        pricePerPerson={85}
        pricingTiers={[
          { participants: '2 heures', price: '130€', discountHost: '' },
          { participants: '4 heures', price: '240€', discountHost: '' },
          { participants: '6 heures', price: '340€', discountHost: '' },
          { participants: 'Journée 8 heures', price: '430€', discountHost: 'Une majoration est appliquée pour les interventions réalisées en soirée : toute prestation débutant ou se poursuivant après 21h entraîne une majoration de 20 %. Par ailleurs, des frais de déplacement peuvent être ajoutés lorsque le lieu de l’événement se situe à plus de 20 km, au tarif de 0,45 € par kilomètre supplémentaire.' },
        ]}
        include2days={null}
        includes={[
          'Analyse du bassin et du lieu',
          'Identification des zones à risque',
          'Surveillance active, discrète et continue',
          'Matériel professionnel de secours sur place',
          'Briefing sécurité express avant la baignade'
        ]}
        certification="Certificat de l'Académie Ekilibre Sécurité Piscine"
        certificationType="standard"
      />
      <EventCourseCard
        level="Formule Duo Sécurité — 2 MNS"
        title="Formule Duo Sécurité — 2 MNS"
        duration="1 jour - 4h30"
        description="Pour événements de grande ampleur ou à fort enjeu"
        pricePerPerson={85}
        pricingTiers={[
          { participants: '2 heures', price: '240€', discountHost: '' },
          { participants: '4 heures', price: '420€', discountHost: '' },
          { participants: '6 heures', price: '600€', discountHost: '' },
          { participants: 'Journée 8 heures', price: '780€', discountHost: 'Une majoration est appliquée pour les interventions réalisées en soirée : toute prestation débutant ou se poursuivant après 21h entraîne une majoration de 20 %. Par ailleurs, des frais de déplacement peuvent être ajoutés lorsque le lieu de l’événement se situe à plus de 20 km, au tarif de 0,45 € par kilomètre supplémentaire.' },
        ]}
        include2days={null}
        includes={[
          'Analyse du bassin et du lieu',
          'Identification des zones à risque',
          'Surveillance active, discrète et continue',
          'Matériel professionnel de secours sur place',
          'Briefing sécurité express avant la baignade'
        ]}
        certification="Certificat de l'Académie Ekilibre Sécurité Piscine"
        certificationType="standard"
      />
    </div>
  )
}
