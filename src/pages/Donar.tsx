import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Gift, Star } from "lucide-react";
import { useState } from "react";

const Donar = () => {
  const [amount, setAmount] = useState("");

  const impactAreas = [
    {
      icon: Users,
      title: "Becas para Familias",
      description: "Tu donación permite que familias sin recursos accedan a nuestros programas de forma gratuita o con descuento.",
      amount: "$50",
      color: "text-primary",
    },
    {
      icon: Gift,
      title: "Materiales y Equipos",
      description: "Ayuda a mantener y mejorar nuestros espacios, equipos de sonido, vestuario y materiales educativos.",
      amount: "$100",
      color: "text-secondary",
    },
    {
      icon: Star,
      title: "Eventos Especiales",
      description: "Financia presentaciones, celebraciones y actividades que crean momentos inolvidables para los niños.",
      amount: "$75",
      color: "text-accent",
    },
  ];

  const quickAmounts = [20, 50, 100, 200];

  const stats = {
    raised: 0,
    goal: 10000,
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donación de:", amount);
    // Aquí iría la integración con el procesador de pagos
    alert(`¡Gracias por tu donación de $${amount}!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative section-padding bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-primary-foreground mb-6">
                Tu Apoyo Transforma Vidas
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 leading-relaxed">
                Cada donación nos ayuda a crear más momentos de alegría, inclusión y desarrollo para nuestros jóvenes super especiales.
              </p>

              {/* Progreso de recaudación */}
              <Card className="max-w-2xl mx-auto shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${stats.raised.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Recaudado
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-2">
                        ${stats.goal.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Objetivo
                      </div>
                    </div>
                  </div>

                  {/* Barra de progreso */}
                  <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-warm rounded-full transition-all duration-500"
                      style={{ width: `${(stats.raised / stats.goal) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    {((stats.raised / stats.goal) * 100).toFixed(1)}% del objetivo alcanzado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulario de donación simple */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" />
                    <h2 className="text-3xl font-heading font-bold mb-2">Haz tu Donación</h2>
                    <p className="text-muted-foreground">
                      Elige el monto que deseas donar
                    </p>
                  </div>

                  <form onSubmit={handleDonate} className="space-y-6">
                    {/* Montos rápidos */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Montos sugeridos
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {quickAmounts.map((quickAmount) => (
                          <Button
                            key={quickAmount}
                            type="button"
                            variant={amount === quickAmount.toString() ? "default" : "outline"}
                            className="h-16 text-lg font-bold"
                            onClick={() => setAmount(quickAmount.toString())}
                          >
                            ${quickAmount}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Monto personalizado */}
                    <div>
                      <Label htmlFor="custom-amount" className="text-base font-semibold mb-3 block">
                        O ingresa tu monto
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">
                          $
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          min="1"
                          placeholder="0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="text-2xl font-bold pl-10 h-16 text-center"
                          required
                        />
                      </div>
                    </div>

                    {/* Botón de donación */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 text-xl font-bold bg-gradient-warm hover:opacity-90 transition-opacity"
                      disabled={!amount || Number(amount) <= 0}
                    >
                      Donar ${amount || "0"} <Heart className="ml-2" fill="currentColor" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      Tu donación es segura y nos ayuda a continuar con nuestra misión de inclusión y alegría.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">¿Cómo Ayuda tu Donación?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tu contribución tiene un impacto directo en diferentes áreas de nuestra fundación.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-warm flex items-center justify-center shadow-colored`}>
                      <area.icon className={`w-10 h-10 text-primary-foreground`} />
                    </div>
                    <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4">
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

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary-foreground mb-6">
                Cada Aporte Cuenta
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-8 leading-relaxed">
                No importa el tamaño de tu donación, cada contribución nos acerca más a nuestra meta de crear un mundo más inclusivo y lleno de alegría para nuestros jóvenes super especiales.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 text-primary-foreground">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-90">Familias Beneficiadas</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 text-primary-foreground">
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm opacity-90">Clases al Año</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 text-primary-foreground">
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-sm opacity-90">Eventos Especiales</div>
                </div>
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