import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Calendar, Gift, CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import communityImage from "@/assets/community.jpg";

const Voluntariado = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    availability: [] as string[],
    interests: [] as string[],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud Enviada",
      description: "Gracias por tu interés. Te contactaremos pronto.",
    });
  };

  const opportunities = [
    {
      icon: Users,
      title: "Asistente de Clase",
      description: "Apoya a los instructores durante las sesiones de baile, ayudando a los niños con los movimientos y creando un ambiente positivo.",
      time: "4-6 horas/semana",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Coordinador de Eventos",
      description: "Ayuda a organizar y ejecutar eventos especiales, desde presentaciones hasta actividades comunitarias.",
      time: "Flexible",
      color: "text-secondary",
    },
    {
      icon: Gift,
      title: "Recaudación de Fondos",
      description: "Participa en campañas de recaudación, eventos benéficos y búsqueda de patrocinadores para apoyar nuestros programas.",
      time: "5-10 horas/mes",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Mentor Familiar",
      description: "Acompaña y apoya a familias nuevas en su proceso de integración a nuestra comunidad.",
      time: "2-3 horas/semana",
      color: "text-sunshine-foreground",
    },
  ];

  const benefits = [
    "Experiencia significativa trabajando con niños especiales",
    "Capacitación y talleres gratuitos",
    "Certificados de voluntariado",
    "Comunidad de apoyo y networking",
    "Eventos exclusivos para voluntarios",
    "Desarrollo de habilidades personales y profesionales",
  ];

  const requirements = [
    "Ser mayor de 18 años (o 16+ con permiso parental)",
    "Completar verificación de antecedentes",
    "Asistir a sesión de orientación obligatoria",
    "Compromiso mínimo de 3 meses",
    "Actitud positiva y amor por la comunidad",
  ];

  const availabilityOptions = ["Lunes-Viernes (Mañanas)", "Lunes-Viernes (Tardes)", "Sábados", "Domingos", "Eventos Especiales"];
  const interestOptions = ["Asistente de Clase", "Eventos", "Recaudación", "Mentoring", "Administrativo"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Voluntariado</h1>
              <p className="text-xl leading-relaxed">
                Únete a nuestro equipo de voluntarios y ayuda a crear momentos especiales que transforman vidas.
              </p>
            </div>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-up">
                <h2 className="mb-6">¿Por Qué Ser Voluntario?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ser voluntario en nuestra fundación es más que donar tiempo: es formar parte de una familia que celebra la diversidad, promueve la inclusión y crea momentos de alegría pura.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cada voluntario es esencial para el éxito de nuestros programas. Ya sea ayudando en clases, organizando eventos, o simplemente compartiendo una sonrisa, tu contribución marca la diferencia.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img 
                  src={communityImage} 
                  alt="Voluntarios con niños" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Oportunidades de Voluntariado</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra la manera perfecta de contribuir según tus intereses y disponibilidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="card-hover border-t-4 border-t-primary">
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-14 h-14 mb-6 rounded-full bg-muted flex items-center justify-center ${opportunity.color}`}>
                      <opportunity.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{opportunity.title}</h3>
                    <p className="text-sm font-semibold text-accent mb-4">Tiempo: {opportunity.time}</p>
                    <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="mb-4">Requisitos</h2>
                <p className="text-lg text-muted-foreground">
                  Todo lo que necesitas saber antes de aplicar.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <ul className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="mb-4">Aplica Ahora</h2>
                <p className="text-lg text-muted-foreground">
                  Completa el formulario y comenzaremos el proceso juntos.
                </p>
              </div>

              <Card>
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Tu nombre"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="tu@email.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 123-4567"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Experiencia Relevante</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Cuéntanos sobre tu experiencia trabajando con niños, en educación, eventos, etc."
                        className="min-h-[100px] resize-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Disponibilidad *</Label>
                      <div className="space-y-2">
                        {availabilityOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <Checkbox id={option} />
                            <label htmlFor={option} className="text-sm cursor-pointer">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Áreas de Interés *</Label>
                      <div className="space-y-2">
                        {interestOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <Checkbox id={option} />
                            <label htmlFor={option} className="text-sm cursor-pointer">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">¿Por Qué Quieres Ser Voluntario? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Cuéntanos tu motivación para unirte a nuestro equipo..."
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full">
                      Enviar Solicitud <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
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
                ¿Tienes Preguntas?
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Estamos aquí para ayudarte. Contáctanos para más información sobre el programa de voluntariado.
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

export default Voluntariado;
