import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "Lun-Vie: 9:00 AM - 6:00 PM"],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@fundacion.org", "Respuesta en 24-48 horas"],
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["123 Calle Principal", "Ciudad, Estado 12345"],
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Horario",
      details: ["Lun-Vie: 9:00 AM - 6:00 PM", "Sáb: 10:00 AM - 2:00 PM"],
      color: "text-sunshine-foreground",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo puedo inscribir a mi hijo?",
      answer: "Puedes inscribirte contactándonos a través de este formulario, por teléfono, o visitando nuestras instalaciones.",
    },
    {
      question: "¿Cuál es el costo de las clases?",
      answer: "Ofrecemos diferentes opciones de pago y becas. Contáctanos para discutir la mejor opción para tu familia.",
    },
    {
      question: "¿Necesito experiencia previa en baile?",
      answer: "No se requiere experiencia previa. Nuestras clases están diseñadas para todos los niveles.",
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
              <h1 className="mb-6">Contáctanos</h1>
              <p className="text-xl leading-relaxed">
                Estamos aquí para responder tus preguntas y ayudarte a ser parte de nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-bold mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-sm ${idx === 0 ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="animate-slide-up">
                <h2 className="mb-6">Envíanos un Mensaje</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿En qué podemos ayudarte?"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntanos más sobre tu consulta..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Enviar Mensaje <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>

              <div className="space-y-8 animate-fade-in">
                <Card className="bg-gradient-soft border-none">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-xl font-heading font-bold mb-6">Preguntas Frecuentes</h3>
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-xl font-heading font-bold mb-4">¿Prefieres Visitarnos?</h3>
                    <p className="leading-relaxed mb-6">
                      Nos encantaría conocerte en persona. Ven a ver nuestras instalaciones y conoce al equipo.
                    </p>
                    <Button variant="outline" size="lg" className="w-full border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Agendar Visita
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-xl font-heading font-bold mb-4">Ubicación</h3>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Estamos ubicados en el corazón de la ciudad con fácil acceso en transporte público y estacionamiento disponible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
