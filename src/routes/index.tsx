import { createFileRoute } from "@tanstack/react-router";
import { Scale, Gavel, Users, Shield, Phone, MessageCircle, Star, Quote, Check, Clock, MapPin, Award } from "lucide-react";
import claudioImg from "@/assets/claudio-goes.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cláudio Góes — Advogado Criminal, Família e Civil" },
      { name: "description", content: "Advocacia Criminal, Família e Civil. Prisão em flagrante, Audiência de Custódia e Defesa em Tribunais. Atendimento nacional." },
      { property: "og:title", content: "Cláudio Góes — Advogado" },
      { property: "og:description", content: "Defesa criminal, família e civil com atendimento nacional. Agende uma consulta." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "5545998304426";
const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function CTAButton({ children, message, variant = "primary", className = "" }: { children: React.ReactNode; message: string; variant?: "primary" | "outline"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles = variant === "primary"
    ? "bg-[var(--gradient-gold)] text-primary-foreground shadow-gold hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.13_82_/_0.5)]"
    : "border border-primary/40 text-primary hover:bg-primary/10";
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`} style={variant === "primary" ? { background: "var(--gradient-gold)" } : undefined}>
      <MessageCircle className="w-4 h-4" />
      {children}
    </a>
  );
}

function Landing() {
  const services = [
    { icon: Gavel, title: "Direito Criminal", desc: "Defesa em prisão em flagrante, audiência de custódia e atuação em todas as instâncias dos Tribunais.", items: ["Prisão em flagrante", "Audiência de custódia", "Habeas corpus", "Júri popular"] },
    { icon: Users, title: "Direito de Família", desc: "Atuação humanizada em questões familiares delicadas, com discrição e estratégia jurídica sólida.", items: ["Divórcio e separação", "Guarda e pensão", "Inventário e partilha", "União estável"] },
    { icon: Scale, title: "Direito Civil", desc: "Soluções consultivas e contenciosas para resguardar seus direitos patrimoniais e contratuais.", items: ["Contratos", "Indenizações", "Direito do consumidor", "Responsabilidade civil"] },
  ];

  const testimonials = [
    { name: "Mariana R.", text: "Profissional excepcional. Conduziu meu caso com seriedade absoluta e me trouxe tranquilidade num momento muito difícil.", role: "Cliente — Área Criminal" },
    { name: "Roberto S.", text: "Atendimento ágil, técnico e humano. Resolveu uma questão familiar complexa com elegância e firmeza.", role: "Cliente — Família" },
    { name: "Juliana M.", text: "Dr. Cláudio é a definição de advogado competente. Estratégico, presente e absolutamente confiável.", role: "Cliente — Civil" },
    { name: "Eduardo P.", text: "Atuou em uma audiência de custódia urgente com brilhantismo. Recomendo sem qualquer hesitação.", role: "Cliente — Criminal" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wide text-gradient-gold">Cláudio Góes</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.3em] text-muted-foreground border-l border-primary/30 pl-2 ml-1">ADVOGADO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#areas" className="hover:text-primary transition">Áreas</a>
            <a href="#depoimentos" className="hover:text-primary transition">Depoimentos</a>
            <a href="#contato" className="hover:text-primary transition">Contato</a>
          </nav>
          <CTAButton message="Olá, gostaria de agendar uma consulta." className="!py-2.5 !px-5 text-xs">Agendar</CTAButton>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0%, transparent 40%)" }} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-primary uppercase">Atendimento Nacional</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Defesa <span className="text-gradient-gold italic">técnica</span>,<br />
              postura <span className="text-gradient-gold italic">estratégica</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Advocacia Criminal, Família e Civil com atuação em prisão em flagrante, audiência de custódia e defesa em todos os Tribunais.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <CTAButton message="Olá Dr. Cláudio, preciso de uma consulta jurídica urgente.">Falar no WhatsApp</CTAButton>
              <CTAButton variant="outline" message="Olá, gostaria de saber mais sobre os serviços.">Conhecer serviços</CTAButton>
            </div>
            <div className="flex gap-8 pt-8 border-t border-border/50">
              {[{n:"24h", l:"Atendimento urgente"},{n:"100%", l:"Sigilo profissional"},{n:"BR", l:"Atuação nacional"}].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-primary/20">
              <img src={claudioImg} alt="Dr. Cláudio Matheus P. G. Góes — Advogado" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="font-serif text-xl text-gradient-gold">Cláudio Matheus P. G. Góes</div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mt-1">Advogado · OAB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Sobre o escritório</div>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Compromisso com a <span className="text-gradient-gold italic">justiça</span> e com cada cliente.</h2>
          <div className="gold-divider w-32 mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Atuação pautada por excelência técnica, ética e dedicação integral às causas confiadas. Cada caso recebe estudo aprofundado, estratégia personalizada e acompanhamento próximo — porque por trás de cada processo existe uma vida, uma família, um direito a ser defendido.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {[{i:Award,t:"Excelência técnica"},{i:Shield,t:"Sigilo absoluto"},{i:Clock,t:"Disponibilidade 24h"}].map(({i:Icon,t}) => (
              <div key={t} className="p-6 rounded-xl border border-border bg-card/50">
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-sm tracking-wide">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="py-24 bg-gradient-dark border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Áreas de atuação</div>
            <h2 className="text-4xl md:text-5xl leading-tight">Especialidades <span className="text-gradient-gold italic">jurídicas</span></h2>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-elegant">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 border border-primary/30" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-gradient-gold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />{it}
                    </li>
                  ))}
                </ul>
                <CTAButton variant="outline" message={`Olá, gostaria de uma consulta sobre ${s.title}.`} className="!py-2.5 w-full">Consultar</CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA / FLAGRANTE */}
      <section className="py-20 border-y border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "var(--gradient-gold)" }} />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Atendimento Urgente</div>
          <h2 className="text-3xl md:text-4xl mb-6">Prisão em flagrante ou audiência de custódia?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Tempo é decisivo. Entre em contato imediatamente para atendimento prioritário 24 horas.</p>
          <CTAButton message="URGENTE: preciso de atendimento imediato para prisão em flagrante.">Atendimento 24h</CTAButton>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Reputação construída</div>
            <h2 className="text-4xl md:text-5xl leading-tight">O que dizem os <span className="text-gradient-gold italic">clientes</span></h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-xl border border-border bg-card relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-serif text-lg text-gradient-gold">{t.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section id="contato" className="py-24 bg-gradient-dark border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Agende sua consulta</div>
          <h2 className="text-4xl md:text-6xl mb-6 leading-tight">Sua defesa começa com uma <span className="text-gradient-gold italic">conversa</span>.</h2>
          <div className="gold-divider w-32 mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">Atendimento sigiloso, técnico e direto ao ponto. Fale agora pelo WhatsApp.</p>
          <CTAButton message="Olá Dr. Cláudio, gostaria de agendar uma consulta.">Agendar pelo WhatsApp</CTAButton>
          <div className="grid sm:grid-cols-2 gap-6 mt-16 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/50">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">WhatsApp</div>
                <div className="text-foreground">+55 (45) 99830-4426</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/50">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">Atuação</div>
                <div className="text-foreground">Em todo território nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl text-gradient-gold">Cláudio Góes <span className="text-xs tracking-[0.3em] text-muted-foreground ml-2">ADVOGADO</span></div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cláudio Matheus P. G. Góes. Todos os direitos reservados.</div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={waLink("Olá Dr. Cláudio, gostaria de uma consulta.")} target="_blank" rel="noopener noreferrer"
         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
         style={{ background: "var(--gradient-gold)" }} aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
}
