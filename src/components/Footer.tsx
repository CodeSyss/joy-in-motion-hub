import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-colored">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-foreground">Cromosomas de</h3>
                <p className="text-xs text-muted-foreground">Pasión, Amor y Ritmo</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Escuela de baile inclusiva promoviendo la alegría y el desarrollo de jóvenes super especiales con discapacidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Quiénes Somos", path: "/quienes-somos" },
                { name: "Programas", path: "/programas" },
                { name: "Eventos", path: "/eventos" },
                { name: "Artículos", path: "/articulos" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participa */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Participa</h4>
            <ul className="space-y-2">
              {[
                { name: "Voluntariado", path: "/voluntariado" },
                { name: "Donaciones", path: "/donar" },
                { name: "Testimonios", path: "/#testimonios" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>info@fundacion.org</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>123 Calle Principal, Ciudad</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-scale"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all hover-scale"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fundación Cromosomas de Pasión, Amor y Ritmo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
