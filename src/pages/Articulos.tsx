import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Users, Sparkles, ArrowRight } from "lucide-react";

const Articulos = () => {
  const articles = [
    {
      title: "Los Beneficios del Baile para Niños con Necesidades Especiales",
      category: "Salud y Bienestar",
      date: "1 de Noviembre, 2025",
      excerpt: "Descubre cómo el movimiento y la música pueden transformar el desarrollo físico, emocional y social de los niños. Exploramos la ciencia detrás de la danza terapéutica.",
      icon: Heart,
      readTime: "5 min",
    },
    {
      title: "Guía para Padres: Cómo Preparar a tu Hijo para la Primera Clase",
      category: "Consejos para Familias",
      date: "25 de Octubre, 2025",
      excerpt: "Consejos prácticos para que la primera experiencia de tu hijo en nuestras clases sea positiva y sin estrés. Desde qué llevar hasta cómo hablar sobre la actividad.",
      icon: Users,
      readTime: "4 min",
    },
    {
      title: "Historia de Éxito: El Viaje de Sofía",
      category: "Testimonios",
      date: "18 de Octubre, 2025",
      excerpt: "Conoce la inspiradora historia de Sofía, quien comenzó en nuestro programa hace 3 años y ahora es una de nuestras bailarinas más confiadas y dedicadas.",
      icon: Sparkles,
      readTime: "6 min",
    },
    {
      title: "Cómo Crear un Ambiente Inclusivo en Casa",
      category: "Consejos para Familias",
      date: "10 de Octubre, 2025",
      excerpt: "Tips y estrategias para extender los principios de inclusión y aceptación que practicamos en la fundación a tu hogar y vida diaria.",
      icon: Heart,
      readTime: "5 min",
    },
    {
      title: "La Importancia de la Comunidad en el Desarrollo Infantil",
      category: "Salud y Bienestar",
      date: "3 de Octubre, 2025",
      excerpt: "Exploramos cómo el sentido de pertenencia y las conexiones sociales impactan positivamente en el bienestar de niños con necesidades especiales.",
      icon: Users,
      readTime: "7 min",
    },
    {
      title: "Actividades de Baile que Puedes Hacer en Casa",
      category: "Actividades",
      date: "26 de Septiembre, 2025",
      excerpt: "Una colección de ejercicios y juegos de movimiento que puedes practicar con tu hijo entre clases para reforzar lo aprendido.",
      icon: Sparkles,
      readTime: "4 min",
    },
  ];

  const categories = [
    { name: "Todos", count: articles.length },
    { name: "Salud y Bienestar", count: 2 },
    { name: "Consejos para Familias", count: 2 },
    { name: "Testimonios", count: 1 },
    { name: "Actividades", count: 1 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Artículos de Interés</h1>
              <p className="text-xl leading-relaxed">
                Recursos, consejos y contenido valioso para familias, educadores y toda nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="card-hover flex flex-col">
                  <CardContent className="pt-6 pb-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <article.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{article.readTime} lectura</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-3 leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.date}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>

                    <Button variant="ghost" size="sm" className="w-full justify-between group">
                      <span>Leer Artículo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="mb-4">Mantente Informado</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Suscríbete a nuestro boletín para recibir nuevos artículos, consejos y actualizaciones directamente en tu correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-colors"
                />
                <Button variant="default" size="lg" className="sm:w-auto">
                  Suscribirse
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Sin spam. Cancela tu suscripción en cualquier momento.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Recursos Adicionales</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Materiales y enlaces útiles para apoyar tu viaje.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover border-t-4 border-t-primary">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-lg font-heading font-bold mb-3">Guías Descargables</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    PDFs gratuitos con actividades, consejos y recursos para familias.
                  </p>
                  <Button variant="outline" size="default">
                    Ver Guías
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border-t-4 border-t-accent">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-lg font-heading font-bold mb-3">Videos Educativos</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tutoriales y presentaciones sobre temas relevantes para la comunidad.
                  </p>
                  <Button variant="outline" size="default">
                    Ver Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border-t-4 border-t-secondary">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-lg font-heading font-bold mb-3">Enlaces Útiles</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Organizaciones, instituciones y recursos externos recomendados.
                  </p>
                  <Button variant="outline" size="default">
                    Ver Enlaces
                  </Button>
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
                ¿Tienes una Historia que Compartir?
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed">
                Nos encantaría escuchar tu experiencia y compartirla con nuestra comunidad.
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

export default Articulos;
