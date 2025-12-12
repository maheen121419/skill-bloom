import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-pixel text-xs text-primary">PixelLearn</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <Link to="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 PixelLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
