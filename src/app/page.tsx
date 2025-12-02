import Link from "next/link"
import { ArrowRight, Brain, Calendar, FileText, TrendingUp, Users, Shield, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-black" />
        
        {/* Navigation */}
        <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">
                  Vet<span className="text-vetinvest-green">invest</span>
                </span>
              </div>
              <Link 
                href="/dashboard"
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25 text-sm sm:text-base"
              >
                Acessar Plataforma
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs sm:text-sm font-medium">Inteligência Artificial para Veterinários</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Revolucione sua
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Prática Veterinária
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Plataforma completa com IA para diagnósticos, gestão financeira, prontuário eletrônico e muito mais. Tudo que você precisa em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link 
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Funcionalidades <span className="text-vetinvest-green">Premium</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Tudo que você precisa para otimizar sua clínica veterinária
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Section */}
      <div className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                  <Brain className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">DeepVet AI</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Inteligência Artificial
                  <span className="block text-vetinvest-gold">ao seu Alcance</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                  Assistente conversacional avançado para diagnósticos, cálculos de dosagem, avaliação de dor em animais e muito mais.
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {aiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/25"
                >
                  Experimentar DeepVet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <p className="text-sm text-gray-300">Qual a dosagem recomendada de amoxicilina para um cão de 15kg?</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-sm text-gray-300 mb-2">
                        <span className="text-emerald-400 font-semibold">DeepVet AI:</span> Para um cão de 15kg, a dosagem recomendada é de 150-225mg, 2x ao dia...
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Confiança: 95%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900/20 via-black to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Pronto para Transformar sua
              <span className="block text-vetinvest-green">Prática Veterinária?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Junte-se a milhares de veterinários que já estão usando o Vetinvest para otimizar seu trabalho.
            </p>
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Vet<span className="text-vetinvest-green">invest</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © 2024 Vetinvest. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Agendamento de consultas com lembretes automáticos via push, SMS e e-mail."
  },
  {
    icon: TrendingUp,
    title: "Gestão Financeira",
    description: "Controle completo de receitas, despesas e relatórios detalhados."
  },
  {
    icon: FileText,
    title: "Prontuário Eletrônico",
    description: "Registro completo de dados, laudos e histórico clínico dos animais."
  },
  {
    icon: Search,
    title: "Pesquisa Inteligente",
    description: "Busca unificada por doenças, medicamentos e protocolos veterinários."
  },
  {
    icon: Brain,
    title: "IA DeepVet",
    description: "Assistente de IA para diagnósticos e cálculos de dosagem precisos."
  },
  {
    icon: Users,
    title: "Comunidades",
    description: "Conecte-se com outros profissionais e compartilhe conhecimento."
  },
  {
    icon: Shield,
    title: "Segurança LGPD",
    description: "Criptografia de dados e conformidade total com regulamentações."
  },
  {
    icon: FileText,
    title: "Relatórios",
    description: "Geração automática de relatórios e análises financeiras detalhadas."
  }
]

const aiFeatures = [
  "Suporte para diagnósticos com grau de confiança",
  "Cálculos automáticos de dosagem por peso e espécie",
  "Avaliação de dor em múltiplas espécies animais",
  "Elaboração de planos de tratamento personalizados",
  "Análise de imagens para identificação de problemas",
  "Respostas baseadas em literatura veterinária atualizada"
]
