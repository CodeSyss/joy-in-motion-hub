import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Gift, Star, CheckCircle, ArrowRight } from "lucide-react";
import danceClassImage from "@/assets/dance-class.jpg";

const Donar = () => {
  const impactAreas = [
    {
      icon: Users,
      title: "Becas para Familias",
      description: "Tu donación permite que familias sin recursos accedan a nuestros programas de forma gratuita o con descuento.",
      amount: "$50/mes",
      color: "text-primary",
    },
    {
      icon: Gift,
      title: "Materiales y Equipos",
      description: "Ayuda a mantener y mejorar nuestros espacios, equipos de sonido, vestuario y materiales educativos.",
      amount: "$100/mes",
      color: "text-secondary",
    },
    {
      icon: Star,
      title: "Eventos Especiales",
      description: "Financia presentaciones, celebraciones y actividades que crean momentos inolvidables para los niños.",
      amount: "$75/mes",
      color: "text-accent",
    },
  ];

  const donationLevels = [
    {
      name: "Amigo",
      amount: "$25",
      benefits: ["Reconocimiento en redes sociales", "Boletín mensual", "Invitación a evento anual"],
    },
    {
      name: "Patrocinador",
      amount: "$100",
      benefits: [
        "Todos los beneficios de Amigo",
        "Reconocimiento en nuestro sitio web",
        "Invitación VIP a presentaciones",
        "Reporte de impacto trimestral",
      ],
      featured: true,
    },
    {
      name: "Benefactor",
      amount: "$250",
      benefits: [
        "Todos los beneficios de Patrocinador",
        "Reunión anual con el equipo directivo",
        "Reconocimiento en materiales impresos",
        "Tour privado de instalaciones",
      ],
    },
  ];

  const ways = [
    {
      title: "Donación Única",
      description: "Aporta la cantidad que desees en cualquier momento. Cada contribución cuenta.",
      icon: Heart,
    },
    {
      title: "Donación Mensual",
      description: "Conviértete en un patrocinador recurrente y apoya de forma constante nuestros programas.",
      icon: Users,
    },
    {
      title: "Donación en Especie",
      description: "Dona materiales, equipos, o servicios profesionales que necesitemos.",
      icon: Gift,
    },
    {
      title: "Donación Corporativa",
      description: "¿Tu empresa quiere hacer la diferencia? Ofrecemos programas para socios corporativos.",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={danceClassImage} 
              alt="Niños en clase de baile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-primary-foreground mb-6">
                Transforma Vidas con Tu Apoyo
              </h1>
              <p className="text-xl text-primary-foreground/95 mb-8 leading-relaxed">
                Tu generosidad hace posible que sigamos ofreciendo programas de calidad que cambian vidas. Cada donación crea oportunidades de alegría, inclusión y desarrollo.
              </p>
              <Button variant="warm" size="lg" className="text-lg">
                Donar Ahora <Heart className="ml-2" fill="currentColor" />
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Tu Impacto</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Así es como tu donación hace la diferencia en la vida de nuestros niños y familias.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="card-hover border-t-4 border-t-primary">
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-muted flex items-center justify-center ${area.color}`}>
                      <area.icon className="w-8 h-8" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4">
                      {area.amount}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Levels */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Niveles de Donación</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige el nivel que mejor se ajuste a tu capacidad de apoyo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {donationLevels.map((level, index) => (
                <Card 
                  key={index} 
                  className={`card-hover ${level.featured ? "border-2 border-primary shadow-lg scale-105" : ""}`}
                >
                  <CardContent className="pt-8 pb-8">
                    {level.featured && (
                      <div className="text-center mb-4">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                          MÁS POPULAR
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-heading font-bold mb-2">{level.name}</h3>
                      <div className="text-4xl font-heading font-bold text-primary">{level.amount}</div>
                      <p className="text-sm text-muted-foreground">por mes</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={level.featured ? "default" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      Seleccionar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Formas de Donar</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige la modalidad que mejor se adapte a ti.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ways.map((way, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <way.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-bold mb-2">{way.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{way.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Nuestro Impacto en 2025</h2>
              <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
                Gracias a la generosidad de nuestros donantes, hemos logrado:
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Niños Atendidos" },
                { number: "80", label: "Familias Beneficiadas" },
                { number: "500+", label: "Horas de Clases" },
                { number: "20", label: "Eventos Realizados" },
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in">
                  <div className="text-5xl font-heading font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-primary-foreground/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="mb-4">Transparencia Total</h2>
                <p className="text-lg text-muted-foreground">
                  Así es como usamos tus donaciones de manera responsable.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Programas y Servicios</span>
                        <span className="font-bold text-primary">75%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Operaciones y Administración</span>
                        <span className="font-bold text-accent">15%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: "15%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Recaudación de Fondos</span>
                        <span className="font-bold text-secondary">10%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: "10%" }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-8">
                    Auditoría anual realizada por firma contable independiente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-secondary-foreground mb-6">
                ¿Listo para Hacer la Diferencia?
              </h2>
              <p className="text-xl text-secondary-foreground/90 mb-10 leading-relaxed">
                Tu donación hoy crea oportunidades de alegría, desarrollo e inclusión para niños que lo necesitan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="text-lg">
                  Donar Ahora <Heart className="ml-2" fill="currentColor" />
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-lg border-2 border-secondary-foreground bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground hover:text-background"
                >
                  <a href="/contacto">Más Información <ArrowRight className="ml-2" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donar;
