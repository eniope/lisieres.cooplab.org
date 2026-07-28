import { QuartzComponent, QuartzComponentProps } from "./types"
// @ts-ignore — import JSON (supporté par esbuild/Quartz)
import eventsData from "../../data/events.json"

/**
 * UpcomingEvents — utopia.cooplab.org
 * Affiche les prochaines rencontres CARe depuis data/events.json
 *
 * Placement : colonne droite du layout utopia (right[])
 *
 * Structure data/events.json :
 *   { titre_section, lien_toutes, events: [{ id, date_affichee, statut,
 *     titre, description, avec, lien }] }
 *
 * Statuts :
 *   "ouvert"  → date en vert, lien actif
 *   "annonce" → date en gris, pas de lien détaillé
 *   "passé"   → masqué automatiquement
 */

interface Event {
  id: string
  date_affichee: string
  statut: "ouvert" | "annonce" | "passe"
  titre: string
  description: string
  avec: string
  lien: string
}

interface EventsData {
  titre_section: string
  lien_toutes: string
  events: Event[]
}

const data = eventsData as EventsData

const UpcomingEvents: QuartzComponent = (_props: QuartzComponentProps) => {
  const visibles = data.events.filter((e) => e.statut !== "passe")

  if (visibles.length === 0) return null

  return (
    <div class="upcoming-events">
      <h3>{data.titre_section}</h3>

      {visibles.map((event) => (
        <div class={`event-item event-${event.statut}`} key={event.id}>
          <span class="event-date">{event.date_affichee}</span>
          <div class="event-body">
            {event.statut === "ouvert" && event.lien ? (
              <a href={event.lien}><strong>{event.titre}</strong></a>
            ) : (
              <strong>{event.titre}</strong>
            )}
            <span>{event.description}</span>
            {event.avec && (
              <em class="event-avec">Avec {event.avec}</em>
            )}
          </div>
        </div>
      ))}

      <a class="event-voir-tout" href={data.lien_toutes}>
        Toutes les rencontres →
      </a>
    </div>
  )
}

UpcomingEvents.css = `
.upcoming-events {
  margin-top: 1.5rem;
}

.upcoming-events h3 {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 0.75rem;
}

.event-item {
  display: flex;
  gap: 0.65rem;
  padding: 0.6rem 0;
  border-top: 1px solid var(--lightgray);
}

.event-item:first-of-type {
  border-top: none;
}

.event-date {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 600;
  width: 72px;
  line-height: 1.4;
  padding-top: 0.1rem;
}

.event-ouvert .event-date {
  color: var(--secondary);
}

.event-annonce .event-date {
  color: var(--gray);
}

.event-body {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--darkgray);
  min-width: 0;
}

.event-body strong {
  font-weight: 600;
  color: var(--dark);
  font-size: 0.82rem;
}

.event-body a {
  text-decoration: none;
  color: inherit;
}

.event-body a strong:hover {
  color: var(--secondary);
}

.event-avec {
  font-size: 0.74rem;
  color: var(--gray);
  font-style: italic;
}

.event-voir-tout {
  display: inline-block;
  margin-top: 0.85rem;
  font-size: 0.78rem;
  color: var(--secondary);
  text-decoration: none;
  opacity: 0.8;
}

.event-voir-tout:hover {
  opacity: 1;
}
`

export default (() => UpcomingEvents)
