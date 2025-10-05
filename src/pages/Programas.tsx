import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Heart, Users, Calendar, Clock, MapPin } from "lucide-react";
import danceClassImage from "@/assets/dance-class.jpg";

const Programas = () => {
  const programs = [
    {
      title: "Baile Expresivo",
      age: "5-10 años",
      day: "Lunes y Miércoles",
      time: "4:00 PM - 5:30 PM",
      description: "Clases diseñadas para niños más pequeños donde exploran el movimiento y la música de forma lúdica.",
      instructor: "Sofía Méndez",
      capacity: "12 niños por clase",
      icon: Music,
    },
    {
      title: "Danza Inclusiva",
      age: "11-16 años",
      day: "Martes y Jueves",
      time: "5:00 PM - 6:30 PM",
      description: "Programa para adolescentes que combina técnicas de danza contemporánea con expresión personal.",
      instructor: "Miguel Ángel Torres",
      capacity: "15 jóvenes por clase",
      icon: Heart,
    },
    {
      title: "Baile Familiar",
      age: "Todas las edades",
      day: "Sábados",
      time: "10:00 AM - 12:00 PM",
      description: "Sesiones especiales donde familias enteras participan juntas en actividades de baile y movimiento.",
      instructor: "Elena Rodríguez",
      capacity: "10 familias por sesión",
      icon: Users,
    },
  ];

  const schedule = [
    { day: "Lunes", morning: "Preparación y Planificación", afternoon: "Baile Expresivo (4:00-5:30 PM)" },
    { day: "Martes", morning: "Actividades Individuales", afternoon: "Danza Inclusiva (5:00-6:30 PM)" },
    { day: "Miércoles", morning: "Preparación y Planificación", afternoon: "Baile Expresivo (4:00-5:30 PM)" },
    { day: "Jueves", morning: "Actividades Individuales", afternoon: "Danza Inclusiva (5:00-6:30 PM)" },
    { day: "Viernes", morning: "Talleres Especiales", afternoon: "Tiempo Libre y Juegos" },
    { day: "Sábado", morning: "Baile Familiar (10:00 AM-12:00 PM)", afternoon: "Eventos Comunitarios" },
    { day: "Domingo", morning: "Descanso", afternoon: "Descanso" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Nuestros Programas</h1>
              <p className="text-xl leading-relaxed">
                Ofrecemos una variedad de clases y actividades diseñadas para niños y jóvenes de todas las edades y habilidades, donde cada uno puede brillar a su manera.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Clases de Baile</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Programas adaptados a diferentes grupos de edad y necesidades específicas.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <Card key={index} className="card-hover border-t-4 border-t-primary">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{program.title}</h3>
                    <p className="text-sm font-semibold text-accent mb-4">{program.age}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{program.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{program.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{program.capacity}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Instructor:</span> {program.instructor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-soft rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">¿Cómo Inscribirse?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">1</div>
                      <span>Completa el formulario de contacto o llámanos directamente.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">2</div>
                      <span>Agenda una visita para conocer nuestras instalaciones y al equipo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">3</div>
                      <span>Recibe orientación personalizada sobre el programa más adecuado.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">4</div>
                      <span>¡Comienza a disfrutar de las clases y forma parte de nuestra familia!</span>
                    </li>
                  </ul>
                  <Button asChild variant="default" size="lg" className="mt-6">
                    <a href="/contacto">Inscríbete Ahora</a>
                  </Button>
                </div>
                <div>
                  <img 
                    src={danceClassImage} 
                    alt="Clase de baile en acción" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Horario Semanal</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestro cronograma completo de actividades durante la semana.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-heading font-bold border border-border">Día</th>
                      <th className="p-4 text-left font-heading font-bold border border-border">Mañana</th>
                      <th className="p-4 text-left font-heading font-bold border border-border">Tarde</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, index) => (
                      <tr key={index} className="bg-card hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-semibold border border-border">{item.day}</td>
                        <td className="p-4 text-muted-foreground border border-border">{item.morning}</td>
                        <td className="p-4 text-muted-foreground border border-border">{item.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-accent/10 border-accent">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Ubicación</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Todas nuestras clases se llevan a cabo en nuestro centro comunitario ubicado en:
                      </p>
                      <p className="font-semibold">123 Calle Principal, Ciudad</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Instalaciones accesibles con estacionamiento disponible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-primary-foreground mb-6">
                ¿Listo para Comenzar?
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Únete a nuestros programas y descubre cómo el baile puede transformar la vida de tu hijo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="warm" size="lg" className="text-lg">
                  <a href="/contacto">Contactar</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="/eventos">Ver Eventos</a>
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

export default Programas;
