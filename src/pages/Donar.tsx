import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Gift, Star, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import danceClassImage from "@/assets/dance-class.jpg";
import { useState } from "react";

const Donar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(20);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState(1);
  const [showUpsell, setShowUpsell] = useState(false);
  const [dedicateInHonor, setDedicateInHonor] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [showOnWall, setShowOnWall] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Venezuela",
    address: "",
    address2: "",
    anonymous: false,
  });

  const impactAreas = [
    {
      icon: Users,
      title: "Becas para Familias",
      description: "Tu donación permite que familias sin recursos accedan a nuestros programas de forma gratuita o con descuento.",
      amount: "$50/mes",
      color: "text-primary",
    },
    {
      icon: Gift,
      title: "Materiales y Equipos",
      description: "Ayuda a mantener y mejorar nuestros espacios, equipos de sonido, vestuario y materiales educativos.",
      amount: "$100/mes",
      color: "text-secondary",
    },
    {
      icon: Star,
      title: "Eventos Especiales",
      description: "Financia presentaciones, celebraciones y actividades que crean momentos inolvidables para los niños.",
      amount: "$75/mes",
      color: "text-accent",
    },
  ];

  const donationOptions = [
    {
      amount: 20,
      description: "Terapia Ocupacional: contribuye a mejorar la independencia, la comunicación, y las habilidades sociales, así como en el abordaje de sus desafíos sensoriales y motores.",
    },
    {
      amount: 40,
      description: "Bailoterapia: apoya sesiones que promueven la expresión corporal, el ritmo y la coordinación.",
    },
    {
      amount: 60,
      description: "Programa Integral: financia múltiples terapias para un niño durante un mes.",
    },
  ];

  const handleContinue = () => {
    if (step === 1 && donationType === "once" && !showUpsell) {
      setShowUpsell(true);
    } else {
      setShowUpsell(false);
      setStep(2);
    }
  };

  const handlePayExpress = () => {
    console.log("Pago exprés iniciado");
    // Aquí iría la integración de pago
  };

  const handleSubmit = () => {
    console.log("Donación procesada", {
      type: donationType,
      amount: selectedAmount || customAmount,
      ...formData,
    });
    setIsModalOpen(false);
    setStep(1);
    setShowUpsell(false);
  };

  const stats = {
    raised: 19854.63,
    donations: 255,
    goal: 50000,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section con estadísticas */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#1e4ea3]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e4ea3] to-[#0d2d5e]" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  <span className="text-[#FFD700]">Completa</span>
                  <br />
                  un sueño
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 font-medium">
                  Tú eres <span className="text-[#FFD700]">una pieza especial</span> en su vida.
                </p>
              </div>

              {/* Card con estadísticas y botón donar */}
              <Card className="max-w-4xl mx-auto shadow-2xl">
                <CardContent className="p-0">
                  <div className="border-b">
                    <div className="flex gap-6 p-4">
                      <button className="px-4 py-2 text-sm font-semibold border-b-2 border-[#1e4ea3] text-[#1e4ea3]">
                        Detalles
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                        Novedades <span className="text-xs">0</span>
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                        Pared de donantes <span className="text-xs">9</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Estadísticas */}
                      <div className="flex-1 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            ${stats.raised.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase">Recaudado</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{stats.donations}</div>
                          <div className="text-xs text-muted-foreground uppercase">Donaciones</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            ${stats.goal.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase">Objetivo</div>
                        </div>
                      </div>

                      {/* Botón Donar */}
                      <Button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e4ea3] hover:bg-[#1a4289] text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg"
                      >
                        Donar
                      </Button>
                    </div>

                    {/* Barra de progreso */}
                    <div className="mt-6">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#1e4ea3] rounded-full transition-all"
                          style={{ width: `${(stats.raised / stats.goal) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modal de Donación */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white">
            {!showUpsell && step === 1 && (
              <>
                <DialogHeader className="bg-[#1e4ea3] text-white -mx-6 -mt-6 px-6 py-4 mb-6">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-lg font-semibold">Elija la cantidad</DialogTitle>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot === 1 ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </DialogHeader>

                {/* Imagen de beneficiarios */}
                <div className="mb-4 -mx-6">
                  <img 
                    src={danceClassImage} 
                    alt="Niños beneficiarios" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-[#1e4ea3] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Acompañamos con tu aporte mensual
                  </div>
                </div>

                <div className="mt-8">
                  {/* Toggle Una sola vez / Mensual */}
                  <div className="flex gap-2 mb-6">
                    <Button
                      type="button"
                      onClick={() => setDonationType("once")}
                      className={`flex-1 rounded-full ${
                        donationType === "once"
                          ? "bg-[#1e4ea3] text-white"
                          : "bg-white text-[#1e4ea3] border-2 border-[#1e4ea3]"
                      }`}
                    >
                      Una sola vez
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setDonationType("monthly")}
                      className={`flex-1 rounded-full ${
                        donationType === "monthly"
                          ? "bg-[#1e4ea3] text-white"
                          : "bg-white text-[#1e4ea3] border-2 border-[#1e4ea3]"
                      }`}
                    >
                      Mensual
                    </Button>
                  </div>

                  {/* Opciones de donación */}
                  <RadioGroup value={selectedAmount?.toString() || "custom"} className="space-y-3">
                    {donationOptions.map((option) => (
                      <div
                        key={option.amount}
                        onClick={() => {
                          setSelectedAmount(option.amount);
                          setCustomAmount("");
                        }}
                        className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedAmount === option.amount
                            ? "border-[#1e4ea3] bg-[#1e4ea3]/5"
                            : "border-border hover:border-[#1e4ea3]/50"
                        }`}
                      >
                        <RadioGroupItem value={option.amount.toString()} className="mt-1" />
                        <div className="flex-1">
                          <div className="text-xl font-bold text-[#1e4ea3] mb-1">
                            ${option.amount}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Otra cantidad */}
                    <div
                      onClick={() => setSelectedAmount(null)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedAmount === null
                          ? "border-[#1e4ea3] bg-[#1e4ea3]/5"
                          : "border-border hover:border-[#1e4ea3]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <RadioGroupItem value="custom" />
                        <span className="font-semibold">$ Otra cantidad</span>
                      </div>
                      {selectedAmount === null && (
                        <Input
                          type="number"
                          placeholder="Introduzca una otra cantidad"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="mt-2"
                        />
                      )}
                    </div>
                  </RadioGroup>

                  {/* Checkboxes adicionales */}
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="dedicate"
                        checked={dedicateInHonor}
                        onCheckedChange={(checked) => setDedicateInHonor(checked as boolean)}
                      />
                      <label htmlFor="dedicate" className="text-sm cursor-pointer">
                        Dedica mi donación en honor a o en memoria de alguien
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="comment"
                        checked={addComment}
                        onCheckedChange={(checked) => setAddComment(checked as boolean)}
                      />
                      <label htmlFor="comment" className="text-sm cursor-pointer">
                        Escribenos un comentario
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="wall"
                        checked={showOnWall}
                        onCheckedChange={(checked) => setShowOnWall(checked as boolean)}
                      />
                      <label htmlFor="wall" className="text-sm cursor-pointer">
                        Muestra tu donación y comenta en el muro de donantes
                      </label>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="mt-8 space-y-3">
                    <div className="text-center text-sm text-muted-foreground mb-2">
                      Pago exprés
                    </div>
                    <Button
                      onClick={handlePayExpress}
                      className="w-full bg-[#00d924] hover:bg-[#00c021] text-white font-semibold py-6 rounded-lg text-base"
                    >
                      Pagar con <span className="ml-2 font-bold">link</span>
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-muted-foreground">O</span>
                      </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground mb-2">
                      Pago estándar
                    </div>
                    <Button
                      onClick={handleContinue}
                      className="w-full bg-[#1e4ea3] hover:bg-[#1a4289] text-white font-semibold py-6 rounded-lg text-base"
                    >
                      Continuar <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {showUpsell && (
              <>
                <DialogHeader className="bg-[#1e4ea3] text-white -mx-6 -mt-6 px-6 py-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowUpsell(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <DialogTitle className="text-lg font-semibold">Venta adicional</DialogTitle>
                  </div>
                </DialogHeader>

                <div className="py-8 px-2 text-center">
                  <h3 className="text-2xl font-bold mb-6">
                    ¿Mejorar a una donación<br />recurrente mensual?
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Plantéate convertirte en una parte funcional de nuestra visión mejorando tu
                    donación de {selectedAmount || customAmount},00 $ original a una donación
                    recurrente mensualmente de {((selectedAmount || Number(customAmount)) / 2).toFixed(2)} $.
                  </p>

                  <div className="space-y-3">
                    <Button
                      onClick={() => {
                        setDonationType("monthly");
                        setStep(2);
                        setShowUpsell(false);
                      }}
                      className="w-full bg-[#1e4ea3] hover:bg-[#1a4289] text-white font-semibold py-6 rounded-full text-base"
                    >
                      Mejorar a {((selectedAmount || Number(customAmount)) / 2).toFixed(2)} $ mensualmente
                    </Button>
                    <Button
                      onClick={() => {
                        setStep(2);
                        setShowUpsell(false);
                      }}
                      variant="outline"
                      className="w-full font-semibold py-6 rounded-full text-base"
                    >
                      Continuar con la donación de {selectedAmount || customAmount},00 $
                    </Button>
                  </div>
                </div>
              </>
            )}

            {step === 2 && !showUpsell && (
              <>
                <DialogHeader className="bg-[#1e4ea3] text-white -mx-6 -mt-6 px-6 py-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setStep(1)}
                        className="text-white hover:bg-white/20"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </Button>
                      <DialogTitle className="text-lg font-semibold">Información</DialogTitle>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot === 4 ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium mb-1">
                        Nombre
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Nombre de pila"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium mb-1">
                        Apellidos
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Apellidos"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="anonymous"
                      checked={formData.anonymous}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, anonymous: checked as boolean })
                      }
                    />
                    <label htmlFor="anonymous" className="text-sm cursor-pointer">
                      Hacer la donación de forma anónima ⓘ
                    </label>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-1">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nombre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium mb-1">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-sm font-medium mb-1">
                      País
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-sm font-medium mb-1">
                      Dirección Línea 1
                    </Label>
                    <Input
                      id="address"
                      placeholder="Dirección de la calle"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address2" className="text-sm font-medium mb-1">
                      Línea de dirección 2 <span className="text-muted-foreground">(opcional)</span>
                    </Label>
                    <Input
                      id="address2"
                      value={formData.address2}
                      onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-[#1e4ea3] hover:bg-[#1a4289] text-white font-semibold py-6 rounded-lg text-base mt-6"
                  >
                    Completar Donación <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Impact Areas */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Tu Impacto</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Así es como tu donación hace la diferencia en la vida de nuestros niños y familias.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="card-hover border-t-4 border-t-primary">
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-muted flex items-center justify-center ${area.color}`}>
                      <area.icon className="w-8 h-8" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4">
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

        {/* Impact Stats */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="mb-4">Nuestro Impacto en 2025</h2>
              <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
                Gracias a la generosidad de nuestros donantes, hemos logrado:
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Niños Atendidos" },
                { number: "80", label: "Familias Beneficiadas" },
                { number: "500+", label: "Horas de Clases" },
                { number: "20", label: "Eventos Realizados" },
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in">
                  <div className="text-5xl font-heading font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-primary-foreground/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="mb-4">Transparencia Total</h2>
                <p className="text-lg text-muted-foreground">
                  Así es como usamos tus donaciones de manera responsable.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Programas y Servicios</span>
                        <span className="font-bold text-primary">75%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Operaciones y Administración</span>
                        <span className="font-bold text-accent">15%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: "15%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Recaudación de Fondos</span>
                        <span className="font-bold text-secondary">10%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: "10%" }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-8">
                    Auditoría anual realizada por firma contable independiente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-secondary-foreground mb-6">
                ¿Listo para Hacer la Diferencia?
              </h2>
              <p className="text-xl text-secondary-foreground/90 mb-10 leading-relaxed">
                Tu donación hoy crea oportunidades de alegría, desarrollo e inclusión para niños que lo necesitan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  variant="default" 
                  size="lg" 
                  className="text-lg"
                >
                  Donar Ahora <Heart className="ml-2" fill="currentColor" />
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-lg border-2 border-secondary-foreground bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground hover:text-background"
                >
                  <a href="/contacto">Más Información <ArrowRight className="ml-2" /></a>
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

export default Donar;