import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Eye, Users, Trophy, Award, Globe } from "lucide-react";
import communityImage from "@/assets/community.jpg";
import premioMariaLionza1 from "@/assets/premio-maria-lionza-1.jpg";
import premioMariaLionzaPlaca from "@/assets/premio-maria-lionza-placa.jpg";
import premioMusaOro from "@/assets/premio-musa-oro.jpg";
import premioMariaLionza2023 from "@/assets/premio-maria-lionza-2023.jpg";
import premioExcelencia2023 from "@/assets/premio-excelencia-2023.jpg";

const QuienesSomos = () => {
  const team = [
    {
      name: "Carmen Millán",
      role: "Presidenta y Coreógrafa Principal",
      bio: "Fundadora de Cromosomas de Pasión Amor y Ritmo. Líder visionaria con pasión por la inclusión a través del baile.",
    },
    {
      name: "Equipo Legal",
      role: "Área Legal",
      bio: "Gestión de documentación y procesos legales de la fundación.",
    },
    {
      name: "Equipo de Tecnología",
      role: "Área de Tecnología y Medios",
      bio: "Manejo de redes sociales, grabación de videos y coordinación de actividades virtuales.",
    },
    {
      name: "Equipo Administrativo",
      role: "Administración y Coordinación",
      bio: "Gestión de recursos, planificación de eventos y apoyo operativo.",
    },
    {
      name: "Equipo de Voluntariado",
      role: "Secretariado y Voluntarios",
      bio: "Coordinación de voluntarios y apoyo continuo en todas las actividades de la fundación.",
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
                Somos una escuela de baile inclusiva comprometida con transformar vidas a través del baile, la inclusión y el apoyo comunitario para jóvenes super especiales con discapacidad.
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
                  Fundada en noviembre de 2019 y constituida legalmente en junio de 2022, nuestra fundación nació como una oportunidad de desarrollo artístico mediante la creación de una Escuela de Baile para personas con distintas discapacidades: Síndrome de Down, Autismo, Asperger, Discapacidad Intelectual y TDAH.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ofrecemos un espacio de crecimiento personal donde jóvenes y adultos con discapacidad pueden ser felices, desarrollar y mostrar sus talentos en el baile. Con 35 jóvenes en nuestro cuerpo de baile, trabajamos en el Gimnasio Vertical de Chacao todos los sábados de 3 a 5 pm.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Realizamos bailoterapias en áreas abiertas de la Gran Caracas con el apoyo del Movimiento Venezolano de la Actividad Física, llevando un mensaje sensibilizador, motivador y positivo de inclusión social con el apoyo de representantes, colaboradores y aliados que continuamente hacen posibles nuestras actividades.
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
                  Soñamos con un mundo donde cada persona con discapacidad tenga acceso a oportunidades de desarrollo, expresión y alegría sin barreras ni limitaciones.
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

        {/* Recognition Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Premios y Reconocimientos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestros jóvenes super especiales han ganado prestigiosos premios que reconocen su talento, dedicación y el impacto positivo de nuestra escuela de baile inclusiva.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Trophy,
                  title: "Años de Impacto",
                  stat: "5+",
                  description: "Desde 2019 transformando vidas",
                },
                {
                  icon: Users,
                  title: "Jóvenes Super Especiales",
                  stat: "35",
                  description: "Participantes activos en nuestro cuerpo de baile",
                },
                {
                  icon: Award,
                  title: "Reconocimientos",
                  stat: "15+",
                  description: "Certificados y reconocimientos oficiales",
                },
              ].map((stat, index) => (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-warm flex items-center justify-center shadow-colored">
                      <stat.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {stat.stat}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-3">{stat.title}</h3>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Galería de Premios */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Galería de Premios</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { image: premioMariaLionza1, alt: "Premio María Lionza de Oro 2024", caption: "María Lionza Revelación del Año 2024" },
                  { image: premioMusaOro, alt: "Premio Musa de Oro 2025", caption: "Legados de la Danza 2025" },
                  { image: premioMariaLionza2023, alt: "Premio María Lionza 2023", caption: "María Lionza de Oro 2023" },
                  { image: premioExcelencia2023, alt: "Premio Excelencia 2023", caption: "Danzas del Año con Proyección" },
                  { image: premioMariaLionzaPlaca, alt: "Placa Reconocimiento 2024", caption: "Premiando lo Mejor de la Excelencia" },
                ].map((premio, index) => (
                  <Card key={index} className="card-hover overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img 
                          src={premio.image} 
                          alt={premio.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-center font-semibold text-muted-foreground">{premio.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Premios Principales</h3>
              <div className="space-y-6 max-w-4xl mx-auto mb-12">
                {[
                  {
                    year: "2025",
                    achievement: "Premios Musa de Oro - 'Legados de la Danza'",
                    description: "Reconocimiento por 5 años de excelente trayectoria y destacada participación en el homenaje a la Bailarina del pueblo Venezolano, la Maestra 'Yolanda Moreno'",
                    location: "Teatro INCRET, Caracas - 26 de Abril de 2025",
                  },
                  {
                    year: "2024",
                    achievement: "Premio María Lionza de Oro - 'Revelación del Año'",
                    description: "Premiando lo mejor entre los mejores de la excelencia. Rescate estratégico en jóvenes con condición integral",
                    location: "Fundación Cultural María Lionza de Oro - 04 de Diciembre 2024",
                  },
                  {
                    year: "2023",
                    achievement: "Premios María Lionza de Oro - Edición Especial",
                    description: "Reconocimiento a Cromosomas por excelencia en danza inclusiva",
                    location: "Fundación María Lionza de Oro - 30 de Septiembre 2023",
                  },
                  {
                    year: "2023",
                    achievement: "Academia Cromosomas - Danzas de Jóvenes Especiales del Año con Proyección",
                    description: "Premiando lo mejor de lo mejor de la excelencia",
                    location: "30 de Septiembre 2023",
                  },
                ].map((premio, index) => (
                  <Card key={index} className="border-l-4 border-l-accent">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center shadow-colored">
                            <Award className="w-10 h-10 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-2">
                            {premio.year}
                          </div>
                          <h4 className="font-heading font-bold text-lg mb-2">{premio.achievement}</h4>
                          <p className="text-muted-foreground mb-2">{premio.description}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            {premio.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-heading font-bold text-center mb-8">Certificados y Reconocimientos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    year: "2024",
                    achievement: "Destacada labor aportando bienestar, inclusión y oportunidades",
                    location: "Concejo Municipal de Chacao - Comisión de Bienestar e Innovación",
                  },
                  {
                    year: "2024",
                    achievement: "Compromiso y creatividad en desarrollo de Actividad Física",
                    location: "Concejo del Municipio Bolivariano Libertador",
                  },
                  {
                    year: "2024",
                    achievement: "Participación en Exposición Colectiva Eco de Picasso",
                    location: "Museo de Arte Contemporáneo de Caracas Armando Reverón",
                  },
                  {
                    year: "2023",
                    achievement: "Reconocimiento categoría Inclusión - Hacemos Ciudad",
                    location: "Mi Convive",
                  },
                  {
                    year: "2023",
                    achievement: "Labor para construir la ciudad de la convivencia",
                    location: "Mi Convive",
                  },
                  {
                    year: "2023",
                    achievement: "Valioso aporte en Pro de la Actividad Física en Caracas",
                    location: "Gobierno de Caracas y Alcaldía de Caracas",
                  },
                  {
                    year: "2023",
                    achievement: "Colaboración exposición Color Sin Límite - Homenaje a Carlos Cruz Diez",
                    location: "Ministerio de Cultura - Fundación Museos Nacionales",
                  },
                  {
                    year: "2023",
                    achievement: "Apoyo en 15vo Aniversario de Abriendo Horizontes A.C.",
                    location: "Abriendo Horizontes A.C.",
                  },
                  {
                    year: "2023",
                    achievement: "Fomentar Inclusión físico-corporal, social, deportiva y educativa",
                    location: "Gimnasio Inclusivo ASOGIN",
                  },
                  {
                    year: "2020",
                    achievement: "Programa Emprendedoras en Cadena",
                    location: "Aliadas en Cadena A.C.",
                  },
                ].map((achievement, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-soft hover:shadow-md transition-all">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">{achievement.year}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">{achievement.achievement}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {achievement.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
