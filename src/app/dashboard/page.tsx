"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Brain, Calendar, FileText, TrendingUp, Users, Shield, Search, 
  Menu, X, Home, Settings, LogOut, Bell, Plus, ChevronRight,
  Activity, DollarSign, Clock, AlertCircle
} from "lucide-react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Vet<span className="text-vetinvest-green">invest</span>
              </span>
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <NavItem icon={Home} label="Dashboard" active />
            <NavItem icon={Calendar} label="Agenda" />
            <NavItem icon={FileText} label="Prontuários" />
            <NavItem icon={TrendingUp} label="Financeiro" />
            <NavItem icon={Brain} label="DeepVet AI" badge="Novo" />
            <NavItem icon={Search} label="Pesquisa" />
            <NavItem icon={Users} label="Comunidades" />
            <NavItem icon={Shield} label="Segurança" />
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">DV</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Dr. Veterinário</p>
                <p className="text-xs text-gray-400 truncate">CRMV 12345</p>
              </div>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              Configurações
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-gray-400">Bem-vindo de volta!</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25">
                <Plus className="w-4 h-4" />
                Nova Consulta
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <StatCard 
              icon={Calendar}
              label="Consultas Hoje"
              value="12"
              change="+3"
              color="emerald"
            />
            <StatCard 
              icon={DollarSign}
              label="Receita Mensal"
              value="R$ 45.2k"
              change="+12%"
              color="amber"
            />
            <StatCard 
              icon={FileText}
              label="Prontuários"
              value="248"
              change="+8"
              color="blue"
            />
            <StatCard 
              icon={Activity}
              label="Taxa de Ocupação"
              value="87%"
              change="+5%"
              color="purple"
            />
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Agenda do Dia */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Agenda do Dia</h2>
                <button className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  Ver todas
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {appointments.map((apt, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{apt.pet}</p>
                      <p className="text-sm text-gray-400 truncate">{apt.owner}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-400">{apt.time}</p>
                      <p className="text-xs text-gray-400">{apt.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Ações Rápidas</h2>
              <div className="space-y-3">
                <QuickAction 
                  icon={Plus}
                  label="Nova Consulta"
                  color="emerald"
                />
                <QuickAction 
                  icon={FileText}
                  label="Novo Prontuário"
                  color="blue"
                />
                <QuickAction 
                  icon={Brain}
                  label="Consultar DeepVet"
                  color="amber"
                />
                <QuickAction 
                  icon={Search}
                  label="Pesquisar Medicamento"
                  color="purple"
                />
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-400 mb-1">Lembretes Importantes</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Você tem 3 consultas de retorno agendadas para esta semana e 2 vacinas pendentes.
                </p>
                <button className="text-sm text-amber-400 hover:text-amber-300 font-semibold">
                  Ver detalhes →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon: Icon, label, active, badge }: { 
  icon: any, 
  label: string, 
  active?: boolean,
  badge?: string 
}) {
  return (
    <button className={`
      w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
      ${active 
        ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
      }
    `}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="flex-1 text-left font-medium">{label}</span>
      {badge && (
        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">
          {badge}
        </span>
      )}
    </button>
  )
}

function StatCard({ icon: Icon, label, value, change, color }: {
  icon: any,
  label: string,
  value: string,
  change: string,
  color: string
}) {
  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-600/20 text-emerald-400',
    amber: 'from-amber-500/20 to-amber-600/20 text-amber-400',
    blue: 'from-blue-500/20 to-blue-600/20 text-blue-400',
    purple: 'from-purple-500/20 to-purple-600/20 text-purple-400'
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-sm text-emerald-400 font-semibold">{change}</span>
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  )
}

function QuickAction({ icon: Icon, label, color }: {
  icon: any,
  label: string,
  color: string
}) {
  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-emerald-500/25',
    amber: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-500/25',
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-500/25'
  }

  return (
    <button className={`
      w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}
      text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg
    `}>
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-left">{label}</span>
      <ChevronRight className="w-5 h-5" />
    </button>
  )
}

const appointments = [
  { pet: "Rex", owner: "João Silva", time: "09:00", type: "Consulta" },
  { pet: "Mimi", owner: "Maria Santos", time: "10:30", type: "Vacina" },
  { pet: "Thor", owner: "Pedro Costa", time: "11:00", type: "Retorno" },
  { pet: "Luna", owner: "Ana Oliveira", time: "14:00", type: "Emergência" },
]
