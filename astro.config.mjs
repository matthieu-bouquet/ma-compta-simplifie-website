import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// We keep the marketing homepage at repository root (`/index.html`).
// This Astro project only builds the documentation served under `/docs/`.
export default defineConfig({
  site: 'https://matthieu-bouquet.github.io/ma-compta-simplifie',
  base: '/docs',
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
            { label: 'Édition du bilan', slug: 'editions/bilan' },
            { label: 'Prévisionnel pour l’exercice suivant', slug: 'editions/previsionnel' },
          ],
        },
        { label: 'Sauvegarde & restauration', slug: 'sauvegarde' },
      ],
    }),
  ],
});

