# Logo assets

The Bright & Shine monogram is currently rendered as an inline SVG in
`components/ui/Logo.tsx` so it stays crisp on any background.

To use the client's final artwork instead:

1. Drop the files here, e.g. `logo-light.svg` (white, for dark backgrounds) and
   `logo-dark.svg` (black, for light backgrounds), plus a transparent PNG.
2. Update `components/ui/Logo.tsx` to render a `next/image` pointing at these
   files, keeping the `variant` prop to switch between light/dark versions.
