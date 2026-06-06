import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// We keep the marketing homepage at repository root (`/index.html`).
// This Astro project only builds the documentation served under `/docs/`.
export default defineConfig({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  // We serve the docs under: https://<user>.github.io/<repo>/docs/
  site: 'https://matthieu-bouquet.github.io/ma-compta-simplifie-website',
  base: '/ma-compta-simplifie-website/docs',
  outDir: './docs',
  integrations: [
    starlight({
      title: 'Ma Compta Simplifié — Documentation',
      description: 'Manuel utilisateur de Ma Compta Simplifié.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Ma Compta Simplifié',
      },
      components: {
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      sidebar: [
        { label: 'Sommaire', slug: 'index' },
        { label: 'Premiers pas', slug: 'premiers-pas' },
        {
          label: 'Configuration',
          items: [
            { label: 'Configuration d’entité', slug: 'configuration/entite' },
            { label: 'Plan comptable', slug: 'configuration/plan-comptable' },
            { label: 'Plan comptable — Association', slug: 'configuration/plan-comptable-association' },
            { label: 'Plan comptable — Entreprise / TPE', slug: 'configuration/plan-comptable-tpe' },
            { label: 'Ajout d’exercice', slug: 'configuration/exercice' },
          ],
        },
        {
          label: 'Saisie & justificatifs',
          items: [
            { label: 'Saisie de lignes comptables', slug: 'saisie/lignes-comptables' },
            { label: 'Ajout de document justificatif', slug: 'saisie/justificatifs' },
            { label: 'Comptabilisation des dons (associations)', slug: 'saisie/dons-associations' },
          ],
        },
        {
          label: 'Éditions & pilotage',
          items: [
            { label: 'Grand livre', slug: 'editions/grand-livre' },
            { label: 'Édition du bilan', slug: 'editions/bilan' },
            { label: 'Prévisionnel pour l’exercice suivant', slug: 'editions/previsionnel' },
          ],
        },
        { label: 'Sauvegarde & restauration', slug: 'sauvegarde' },
      ],
    }),
  ],
});

