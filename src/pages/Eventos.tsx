import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const Eventos = () => {
  const upcomingEvents = [
    {
      title: "15vo Aniversario Academia Yenedance",
      date: "21 de Diciembre, 2025",
      time: "Por confirmar",
      location: "Teatro Incret",
      description: "Participación especial en la celebración del 15vo aniversario de la Academia Yenedance. Nuestros jóvenes super especiales presentarán coreografías especialmente preparadas para este evento.",
      attendees: "Cuerpo de baile Cromosomas",
      type: "Presentación Especial",
    },
    {
      title: "Clase de Baile Semanal",
      date: "Todos los Sábados",
      time: "3:00 PM - 5:00 PM",
      location: "Gimnasio Vertical de Chacao, Bello Campo",
      description: "Nuestras clases regulares de baile coreográfico. Sesión presencial donde preparamos coreografías y fortalecemos habilidades físicas, sociales y emocionales.",
      attendees: "35 jóvenes super especiales",
      type: "Clase Regular",
    },
    {
      title: "Bailoterapias Comunitarias",
      date: "Fechas variadas",
      time: "Horarios variados",
      location: "Diversos espacios públicos de Caracas",
      description: "Sesiones de bailoterapia en áreas abiertas de la Gran Caracas con apoyo del Movimiento Venezolano de la Actividad Física. Llevamos mensajes de inclusión a toda la comunidad.",
      attendees: "Abierto a toda la comunidad",
      type: "Actividad Comunitaria",
    },
  ];

  const pastEvents = [
    {
      title: "Aniversario Abriendo Horizontes",
      date: "26 de Octubre, 2025",
      description: "Participación especial en la Concha Acústica del Parque Itagua en el Aniversario de la Asociación Civil Abriendo Horizontes.",
      image: "🎉",
    },
    {
      title: "Conferencia ROTARY Club Chacao",
      date: "25 de Septiembre, 2025",
      description: "Carmen Millán participó como conferencista compartiendo la experiencia y misión de Fundación Cromosomas.",
      image: "🎤",
    },
    {
      title: "1ra Carrera Caminata Abriendo Horizontes 3K Sin Límite",
      date: "26 de Octubre, 2025",
      description: "Carrera y Caminata por la Inclusión y el Deporte Adaptado para personas con discapacidad. Parque Itagua, parroquia La Vega.",
      image: "🏃",
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
              <h1 className="mb-6">Eventos</h1>
              <p className="text-xl leading-relaxed">
                Únete a nuestras actividades especiales, talleres y celebraciones que fortalecen nuestra comunidad y crean momentos inolvidables.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Próximos Eventos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Marca tu calendario y no te pierdas estas experiencias especiales.
              </p>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="card-hover border-l-4 border-l-primary">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                              {event.type}
                            </div>
                            <h3 className="text-2xl font-heading font-bold">{event.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-5 h-5 text-primary" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {event.description}
                        </p>

                        <Button variant="default" size="default">
                          Registrarse <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Eventos Pasados</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recuerda los momentos especiales que hemos compartido como comunidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="text-6xl mb-6">{event.image}</div>
                    <h3 className="text-lg font-heading font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{event.date}</p>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Guidelines */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="mb-4">Información Importante</h2>
                <p className="text-lg text-muted-foreground">
                  Todo lo que necesitas saber antes de asistir a nuestros eventos.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 pb-6">
                    <h4 className="font-heading font-bold mb-3">Registro</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Es necesario registrarse con anticipación para la mayoría de los eventos. Puedes hacerlo a través del botón de registro en cada evento o contactándonos directamente.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 pb-6">
                    <h4 className="font-heading font-bold mb-3">Accesibilidad</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Todas nuestras instalaciones son completamente accesibles. Si tienes necesidades específicas, por favor háznolas saber al momento del registro para poder prepararnos mejor.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 pb-6">
                    <h4 className="font-heading font-bold mb-3">¿Qué Llevar?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Recomendamos ropa cómoda para bailar, zapatos apropiados (o descalzos), y una botella de agua. Para eventos especiales, recibirás información adicional por correo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 pb-6">
                    <h4 className="font-heading font-bold mb-3">Cancelaciones</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      En caso de que necesites cancelar tu asistencia, por favor avísanos con al menos 24 horas de anticipación para poder ofrecer tu lugar a otra familia.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-primary-foreground mb-6">
                ¿Preguntas Sobre un Evento?
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Estamos aquí para ayudarte. Contáctanos para más información sobre cualquier evento.
              </p>
              <Button asChild variant="warm" size="lg" className="text-lg">
                <a href="/contacto">Contáctanos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Eventos;
