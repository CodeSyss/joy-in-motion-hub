import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, BookOpen, ArrowRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dance.jpg";
import communityImage from "@/assets/community.jpg";
import danceClassImage from "@/assets/dance-class.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Inclusión Total",
      description: "Creamos un espacio seguro y acogedor donde cada niño es valorado y celebrado.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Comunidad Fuerte",
      description: "Familias, voluntarios e instructores unidos por una misión común de apoyo.",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Programas Regulares",
      description: "Clases de baile, eventos especiales y actividades diseñadas para todos.",
      color: "text-accent",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content: "Esta fundación ha transformado la vida de mi hijo. Ver su sonrisa cada vez que baila no tiene precio.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      role: "Voluntario",
      content: "Ser parte de esta comunidad me ha enseñado el verdadero significado de la alegría y la inclusión.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Madre de familia",
      content: "Los instructores son increíbles. Mi hija ha ganado confianza y ha hecho amigos maravillosos.",
      rating: 5,
    },
  ];

  const upcomingEvents = [
    {
      title: "Clase de Baile Familiar",
      date: "15 de Noviembre",
      time: "10:00 AM - 12:00 PM",
      description: "Únete a nosotros para una mañana de baile y diversión en familia.",
    },
    {
      title: "Presentación de Fin de Año",
      date: "20 de Diciembre",
      time: "6:00 PM - 8:00 PM",
      description: "Celebra con nosotros los logros de nuestros increíbles bailarines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Niños bailando con alegría en la fundación" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-primary-foreground mb-6 text-balance">
                Bailamos Juntos, Crecemos Juntos
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed font-body">
                Una fundación dedicada a niños y jóvenes con necesidades especiales, donde el baile, la alegría y la comunidad se unen para crear momentos inolvidables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="warm" size="lg">
                  <Link to="/programas">
                    Conoce Nuestros Programas <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/voluntariado">Únete como Voluntario</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">¿Por Qué Somos Especiales?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestra fundación se basa en tres pilares fundamentales que nos hacen únicos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="mb-6">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Promovemos la inclusión, la alegría y el desarrollo de niños y jóvenes con necesidades especiales a través del poder transformador del baile y las actividades comunitarias.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Creemos que cada niño merece un lugar donde pueda expresarse, hacer amigos y sentirse valorado. Nuestro equipo de instructores especializados crea experiencias únicas adaptadas a las necesidades de cada participante.
                </p>
                <Button asChild variant="default" size="lg">
                  <Link to="/quienes-somos">
                    Conoce Más Sobre Nosotros <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative animate-fade-in">
                <img 
                  src={communityImage} 
                  alt="Comunidad unida en la fundación" 
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-warm rounded-full blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Testimonios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escucha las historias de las familias que forman parte de nuestra comunidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-sunshine text-sunshine" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events Preview Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Próximos Eventos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Únete a nuestras actividades y forma parte de momentos especiales.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="card-hover border-l-4 border-l-primary">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-bold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                        <p className="text-sm text-muted-foreground mb-3">{event.time}</p>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="default" size="lg">
                <Link to="/eventos">
                  Ver Todos los Eventos <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src={danceClassImage} 
              alt="Clase de baile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-primary-foreground mb-6">
                Sé Parte del Cambio
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Tu apoyo puede transformar vidas. Ya sea como voluntario o donante, cada contribución nos ayuda a crear más momentos de alegría e inclusión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="warm" size="lg" className="text-lg">
                  <Link to="/donar">
                    Donar Ahora <Heart className="ml-2" fill="currentColor" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/voluntariado">
                    Ser Voluntario <Users className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Preview */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Artículos de Interés</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recursos y contenido útil para familias y la comunidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Beneficios del Baile para Niños Especiales",
                  excerpt: "Descubre cómo el movimiento y la música pueden mejorar el desarrollo físico y emocional.",
                  category: "Salud",
                },
                {
                  title: "Consejos para Padres Nuevos",
                  excerpt: "Guía práctica para familias que se unen por primera vez a nuestra comunidad.",
                  category: "Familias",
                },
                {
                  title: "Historia de Éxito: El Viaje de Sofía",
                  excerpt: "Conoce la inspiradora historia de una de nuestras bailarinas más dedicadas.",
                  category: "Testimonios",
                },
              ].map((article, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                    <Link 
                      to="/articulos" 
                      className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Leer Más <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="default" size="lg">
                <Link to="/articulos">
                  Ver Todos los Artículos <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
