import { LogoIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <LogoIcon className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">RC Source of the Nile</span>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground md:mt-0">
            &copy; {new Date().getFullYear()} RC Source of the Nile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
