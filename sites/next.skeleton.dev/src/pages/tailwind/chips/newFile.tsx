import LayoutDocs from "@lib/layouts/LayoutDocs.astro";
import { layoutProps } from "./index.astro";

<Fragment>
  <LayoutDocs {...layoutProps}>
    {/** Preview */}
    <Fragment slot="preview">
      <div class="flex items-center gap-4">
        <button type="button" class="chip-icon preset-filled">
          💀
        </button>
        <button type="button" class="chip preset-filled">
          Chip
        </button>
        <button type="button" class="badge preset-filled">
          <span>💀</span>
          <span>Badge</span>
        </button>
      </div>
    </Fragment>
    {/** Presets */}
    <section class="space-y-4">
      <h2 class="h2">Presets</h2>
      <div class="docs-card-outlined-centered p-8">
        <div class="space-y-4">
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-primary-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-primary">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-primary-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-secondary-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-secondary">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-secondary-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-tertiary-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-tertiary">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-tertiary-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-success-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-success">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-success-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-warning-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-warning">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-warning-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-error-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-error">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-error-500">
              Chip
            </button>
          </div>
          <div class="flex gap-4">
            <button type="button" class="chip preset-filled-surface-500">
              Chip
            </button>
            <button type="button" class="chip preset-tonal-surface">
              Chip
            </button>
            <button type="button" class="chip preset-outlined-surface-500">
              Chip
            </button>
          </div>
        </div>
      </div>
    </section>
    {/** Disabled */}
    <section class="space-y-4">
      <h2 class="h2">Disabled</h2>
      <div class="docs-card-outlined-centered p-8">
        <button type="button" class="chip preset-filled" disabled>
          Chip
        </button>
      </div>
    </section>
    {/** Single Selection */}
    <section class="space-y-4">
      <h2 class="h2">Single Selection</h2>
      <div class="docs-card-outlined-centered p-8">
        <PreviewChipSelect />
      </div>
    </section>
  </LayoutDocs>
</Fragment>;
