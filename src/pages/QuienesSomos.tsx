import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Eye, Users } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const QuienesSomos = () => {
  const team = [
    {
      name: "Elena Rodríguez",
      role: "Directora Fundadora",
      bio: "Con más de 15 años de experiencia en educación especial y danza terapéutica.",
    },
    {
      name: "Miguel Ángel Torres",
      role: "Instructor Principal de Baile",
      bio: "Bailarín profesional especializado en programas de inclusión y movimiento expresivo.",
    },
    {
      name: "Sofía Méndez",
      role: "Coordinadora de Programas",
      bio: "Psicóloga infantil dedicada a crear experiencias significativas para cada niño.",
    },
    {
      name: "Roberto Gutiérrez",
      role: "Coordinador de Voluntarios",
      bio: "Padre de familia y voluntario desde hace 5 años, ahora lidera nuestro equipo de apoyo.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Amor e Inclusión",
      description: "Cada niño es valorado, respetado y celebrado por quien es.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Juntos somos más fuertes. Creamos lazos que duran toda la vida.",
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Nos comprometemos a ofrecer programas de la más alta calidad.",
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Operamos con honestidad y comunicación abierta con todas las familias.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Quiénes Somos</h1>
              <p className="text-xl leading-relaxed">
                Somos una fundación comprometida con transformar vidas a través del baile, la inclusión y el apoyo comunitario para niños y jóvenes con necesidades especiales.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Nuestra Misión</span>
                </div>
                <h2 className="mb-6">Transformar Vidas a Través del Baile</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Nuestra misión es crear un espacio seguro, acogedor e inclusivo donde niños y jóvenes con necesidades especiales puedan expresarse, desarrollar habilidades y formar parte de una comunidad que los ama y apoya.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A través del poder del baile y las actividades comunitarias, promovemos el desarrollo físico, emocional y social de cada participante, celebrando sus logros y fomentando su confianza.
                </p>
              </div>
              <div className="relative animate-fade-in">
                <img 
                  src={communityImage} 
                  alt="Comunidad de la fundación unida" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative animate-fade-in">
                <div className="bg-gradient-soft rounded-2xl p-8 md:p-12 shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Heart className="w-6 h-6 text-accent" fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-2">Inclusión Total</h4>
                        <p className="text-muted-foreground">Un lugar donde todos son bienvenidos sin importar sus capacidades.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-2">Desarrollo Integral</h4>
                        <p className="text-muted-foreground">Promovemos el crecimiento físico, emocional y social.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sunshine/20 flex items-center justify-center shrink-0">
                        <Target className="w-6 h-6 text-sunshine-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-2">Impacto Duradero</h4>
                        <p className="text-muted-foreground">Creamos experiencias que transforman vidas para siempre.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <Eye className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">Nuestra Visión</span>
                </div>
                <h2 className="mb-6">Un Mundo Más Inclusivo</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Soñamos con un mundo donde cada niño con necesidades especiales tenga acceso a oportunidades de desarrollo, expresión y alegría sin barreras ni limitaciones.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aspiramos a ser un modelo de inclusión que inspire a otras comunidades a crear espacios donde la diversidad sea celebrada y cada persona pueda brillar con su luz única.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían cada decisión y acción en nuestra fundación.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce a las personas dedicadas que hacen posible nuestra misión cada día.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-primary-foreground mb-6">
                Únete a Nuestra Misión
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Sé parte de una comunidad que está transformando vidas todos los días.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="warm" size="lg" className="text-lg">
                  <a href="/voluntariado">Ser Voluntario</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="/contacto">Contáctanos</a>
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

export default QuienesSomos;
