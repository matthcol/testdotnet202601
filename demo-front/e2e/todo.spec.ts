/**
 * ============================================================
 * DEMO 6 : Tests E2E avec Playwright
 * ============================================================
 * Ces tests démarrent l'application réelle (ng serve sur le port 4200)
 * et pilotent un vrai navigateur (Chromium par défaut).
 *
 * Contrairement aux tests unitaires :
 *  - pas de mock : on touche vraiment l'API JSONPlaceholder
 *  - on valide l'intégration complète : composant → façade → service → HTTP
 *
 * Playwright lance/arrête le serveur automatiquement via webServer dans
 * playwright.config.ts.
 */
import { expect, Page, test } from '@playwright/test';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Attend que la liste soit visible et non vide */
async function waitForTodos(page: Page) {
  await expect(page.getByTestId('todo-list')).toBeVisible();
  await expect(page.getByTestId('todo-item').first()).toBeVisible({ timeout: 10_000 });
}

// ── Suite principale ──────────────────────────────────────────────────────────

test.describe('Application Todo — E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // --- Structure de la page ---
  test('affiche le titre de la page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Ma liste de todos');
  });

  test('affiche le formulaire d\'ajout', async ({ page }) => {
    await expect(page.getByTestId('new-todo-input')).toBeVisible();
    await expect(page.getByTestId('add-btn')).toBeVisible();
  });

  test('affiche le bouton "Charger les todos"', async ({ page }) => {
    await expect(page.getByTestId('load-btn')).toBeVisible();
  });

  // --- Chargement des todos ---
  test('charge et affiche la liste de todos au démarrage', async ({ page }) => {
    await waitForTodos(page);
    const items = page.getByTestId('todo-item');
    await expect(items).not.toHaveCount(0);
  });

  test('affiche les statistiques après chargement', async ({ page }) => {
    await waitForTodos(page);
    const stats = page.getByTestId('stats');
    await expect(stats).toBeVisible();
    await expect(stats).toContainText('terminé(s)');
    await expect(stats).toContainText('en attente');
  });

  // --- Ajout d'un todo ---
  test('ajoute un nouveau todo via le formulaire', async ({ page }) => {
    const timestamp = Date.now();
    const newTitle  = `Todo E2E ${timestamp}`;

    const countBefore = await page.getByTestId('todo-item').count();

    await page.getByTestId('new-todo-input').fill(newTitle);
    await page.getByTestId('add-btn').click();

    // L'item doit apparaître dans la liste
    await expect(page.getByTestId('todo-title').filter({ hasText: newTitle }))
      .toBeVisible({ timeout: 5_000 });

    // La liste a grandi
    await expect(page.getByTestId('todo-item')).toHaveCount(countBefore + 1);
  });

  test('vide le champ de saisie après ajout', async ({ page }) => {
    await page.getByTestId('new-todo-input').fill('Test vidage');
    await page.getByTestId('add-btn').click();

    await expect(page.getByTestId('new-todo-input')).toHaveValue('');
  });

  test('n\'ajoute pas un todo si le champ est vide', async ({ page }) => {
    await waitForTodos(page);
    const countBefore = await page.getByTestId('todo-item').count();

    await page.getByTestId('add-btn').click();

    await expect(page.getByTestId('todo-item')).toHaveCount(countBefore);
  });

  // --- Suppression ---
  test('supprime un todo en cliquant sur le bouton Supprimer', async ({ page }) => {
    await waitForTodos(page);
    const countBefore = await page.getByTestId('todo-item').count();

    // Supprime le premier todo
    const firstItem      = page.getByTestId('todo-item').first();
    const firstTitle     = await firstItem.getByTestId('todo-title').textContent();
    const deleteBtn      = firstItem.locator('button');
    await deleteBtn.click();

    // Le todo disparaît
    await expect(page.getByTestId('todo-title').filter({ hasText: firstTitle ?? '' }))
      .toHaveCount(0, { timeout: 5_000 });

    await expect(page.getByTestId('todo-item')).toHaveCount(countBefore - 1);
  });

  // --- Toggle (complétion) ---
  test('bascule l\'état d\'un todo via la checkbox', async ({ page }) => {
    await waitForTodos(page);

    // Trouve un todo non complété
    const uncompleted = page.getByTestId('todo-item').filter({
      hasNot: page.locator('.completed'),
    }).first();

    await expect(uncompleted).toBeVisible();
    const checkbox = uncompleted.locator('input[type="checkbox"]');
    await checkbox.check();

    // Le todo doit maintenant avoir la classe .completed
    await expect(uncompleted).toHaveClass(/completed/, { timeout: 5_000 });
  });

  // --- Rechargement ---
  test('recharge la liste via le bouton "Charger les todos"', async ({ page }) => {
    await waitForTodos(page);
    await page.getByTestId('load-btn').click();

    // La liste se recharge (au moins un item visible)
    await expect(page.getByTestId('todo-item').first()).toBeVisible({ timeout: 10_000 });
  });

  // --- Accessibilité de base ---
  test('le champ de saisie a un placeholder', async ({ page }) => {
    const input = page.getByTestId('new-todo-input');
    await expect(input).toHaveAttribute('placeholder', 'Nouvelle tâche…');
  });
});
