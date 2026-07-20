import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black-pure px-6 text-center">
      <p className="eyebrow-dark">404</p>
      <h1 className="mt-4 font-serif text-5xl font-medium text-white md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
