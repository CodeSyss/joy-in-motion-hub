import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Heart, Users, Calendar, Clock, MapPin } from "lucide-react";
import grupoComunidad from "@/assets/grupo-comunidad.jpg";

const Programas = () => {
  const programs = [
    {
      title: "Escuela de Baile Coreográfico",
      age: "Jóvenes y Adultos con Discapacidad",
      day: "Sábados",
      time: "3:00 PM - 5:00 PM",
      description: "Clases presenciales de baile coreográfico en el Gimnasio Vertical de Chacao. Con 35 participantes activos, trabajamos coreografías para presentaciones en diversos eventos.",
      instructor: "Carmen Millán",
      capacity: "35 jóvenes super especiales",
      icon: Music,
    },
    {
      title: "Bailoterapias en Áreas Abiertas",
      age: "Todas las edades",
      day: "Varios días",
      time: "Horarios variados",
      description: "Bailoterapias realizadas en áreas abiertas de la Gran Caracas con el apoyo del Movimiento Venezolano de la Actividad Física. Llevamos mensajes de inclusión social a toda la comunidad.",
      instructor: "Equipo Cromosomas",
      capacity: "Abierto a la comunidad",
      icon: Heart,
    },
    {
      title: "Sesiones Virtuales de Apoyo",
      age: "Participantes de la escuela",
      day: "Durante la semana",
      time: "Disponible online",
      description: "Videos de apoyo para practicar coreografías desde casa, ayudando al proceso cognitivo y preparación para presentaciones.",
      instructor: "Carmen Millán",
      capacity: "Todos los participantes",
      icon: Users,
    },
  ];

  const locations = [
    "Caricuao UD-2D 2 Boulevard casa cultural Cumbe, A.C.Jesús Chucho García",
    "Centro Comercial Paseo El Hatillo",
    "Plaza Brión de Chacaíto",
    "La Pastora Plaza La Pastora",
    "Altagracia Plaza Juan Pedro López (BCV)",
    "La Candelaria Plaza de la Candelaria",
    "Paseo Los Ilustres en los Próceres 2023 Día del Desafío",
    "Plaza Venezuela Clase parroquial",
    "Centro Comercial Galería Ávila",
    "Parque Generalísimo Francisco de Miranda",
    "Petare Casco Colonial Plaza Sucre",
    "Paseo Los Ilustres en los Próceres 2024 Día de Caracas",
    "Hotel Playa Grande Hotel Caribe",
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
                    src={grupoComunidad} 
                    alt="Grupo de la comunidad celebrando juntos" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Lugares Donde Bailamos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Realizamos bailoterapias y presentaciones en diversos espacios públicos de Caracas, llevando nuestro mensaje de inclusión a toda la comunidad.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-accent/10 border-accent">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Ubicación Principal</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Nuestras clases semanales se realizan en:
                      </p>
                      <p className="font-semibold">Gimnasio Vertical de Chacao</p>
                      <p className="text-sm text-muted-foreground">Bello Campo, Municipio Chacao, Caracas</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Sábados de 3:00 PM a 5:00 PM · Instalaciones completamente accesibles
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
