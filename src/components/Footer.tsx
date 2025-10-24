import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Fundación Cromosomas" 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-heading font-bold text-base leading-tight">
                Fundación Cromosomas<br />
                <span className="text-[#E91E8C]">Pasión</span> · <span className="text-[#4FB3D9]">Amor</span> · <span className="text-[#7FBF3F]">Ritmo</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Escuela de Baile Coreográfico para jóvenes super especiales con discapacidad. Fundada en 2019.
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
                <a href="mailto:fundacpasionamoryritmo@gmail.com" className="hover:text-primary transition-colors">
                  fundacpasionamoryritmo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+584241068714" className="hover:text-primary transition-colors">
                  +58 424-1068714
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Gimnasio Vertical de Chacao<br />Bello Campo, Caracas</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/fundacpasionamoryritmo"
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
