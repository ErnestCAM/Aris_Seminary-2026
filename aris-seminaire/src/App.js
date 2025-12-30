import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, Clock, MapPin, Users, BookOpen, Award, Mail, Phone, 
  CheckCircle, Sun, Moon, Sunset, ChevronDown, Star, ClipboardCheck 
} from 'lucide-react';

export default function ARISSeminaires() {
  // Thème par défaut réglé sur 'light'
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const themes = {
    light: {
      name: 'Clair',
      icon: <Sun className="w-4 h-4" />,
      bg: 'bg-gray-50',
      card: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-100'
    },
    dark: {
      name: 'Sombre',
      icon: <Moon className="w-4 h-4" />,
      bg: 'bg-gray-900',
      card: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700',
      hover: 'hover:bg-gray-700'
    },
    dim: {
      name: 'Tamisé',
      icon: <Sunset className="w-4 h-4" />,
      bg: 'bg-slate-800',
      card: 'bg-slate-700',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      border: 'border-slate-600',
      hover: 'hover:bg-slate-600'
    }
  };

  const currentTheme = themes[theme];

  // Fermer le menu si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen ${currentTheme.bg} transition-colors duration-300`}>
      {/* Header avec Menu Déroulant */}
      <header className={`${currentTheme.card} shadow-lg sticky top-0 z-50 border-b ${currentTheme.border}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${currentTheme.card} rounded-xl p-3 shadow-md border ${currentTheme.border}`}>
                <h1 className="text-3xl md:text-4xl font-black text-blue-600 tracking-tight">ARIS</h1>
              </div>
              <div className="hidden lg:block">
                <p className={`text-sm ${currentTheme.textSecondary} font-medium`}>
                  Recherche collaborative, innovations partagées, santé améliorée.
                </p>
              </div>
            </div>

            {/* Sélecteur de Thème (Menu Déroulant) */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`px-4 py-2 rounded-lg ${currentTheme.card} border ${currentTheme.border} ${currentTheme.hover} transition-all flex items-center gap-2 ${currentTheme.text} shadow-sm`}
              >
                {currentTheme.icon}
                <span className="font-medium hidden sm:inline">{currentTheme.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMenuOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-2xl border ${currentTheme.border} ${currentTheme.card} overflow-hidden animate-in fade-in zoom-in duration-200`}>
                  {Object.keys(themes).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${theme === t ? 'bg-blue-600 text-white' : `${currentTheme.text} ${currentTheme.hover}`}`}
                    >
                      {themes[t].icon}
                      <span className="font-medium">{themes[t].name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`${currentTheme.card} rounded-3xl shadow-2xl overflow-hidden border ${currentTheme.border}`}>
              <div className="bg-gray-200 flex justify-center items-center overflow-hidden">
                <img 
                  src="/Maquette Aris.jpeg" 
                  alt="Maquette Aris" 
                  className="w-full h-auto object-contain max-h-[800px]"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/1200x600?text=Maquette+Aris.jpeg+non+trouvée";
                  }}
                />
              </div>
              
              <div className={`text-center py-10 px-6 ${currentTheme.text}`}>
                <h2 className="text-3xl font-bold mb-6">Informations du Séminaire</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className={`${currentTheme.bg} rounded-2xl p-6 border ${currentTheme.border} shadow-sm`}>
                    <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Dates</h3>
                    <p className="text-2xl font-black text-orange-600">24 & 31 janvier 2026</p>
                  </div>
                  <div className={`${currentTheme.bg} rounded-2xl p-6 border ${currentTheme.border} shadow-sm`}>
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Horaires</h3>
                    <p className="text-xl font-semibold">9h00 - 15h00</p>
                  </div>
                  <div className={`${currentTheme.bg} rounded-2xl p-6 border ${currentTheme.border} shadow-sm`}>
                    <MapPin className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Lieu</h3>
                    <p className={`text-sm ${currentTheme.textSecondary}`}>ESS-UCAC, Campus de Douala, Ndokoti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positionnement du projet */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-5xl mx-auto ${currentTheme.card} rounded-2xl p-8 md:p-12 shadow-xl border ${currentTheme.border}`}>
            <h2 className={`text-4xl font-black mb-6 ${currentTheme.text} flex items-center gap-3`}>
              <BookOpen className="w-10 h-10 text-blue-600" />
              Positionnement du Projet
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-green-600 rounded mb-8"></div>
            <p className={`text-lg leading-relaxed ${currentTheme.text}`}>
              Le faible accès aux bases payantes et l'utilisation rudimentaire des moteurs gratuits limitent la production de travaux de recherche locaux. « ARIS » vise à former des étudiants et professionnels de la santé à des techniques avancées en recherche documentaire.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-black text-center mb-12 ${currentTheme.text}`}>Modalités de Participation</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`${currentTheme.card} rounded-3xl p-8 border-2 border-blue-500 shadow-xl relative overflow-hidden text-center`}>
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-xl font-bold">Étudiant</div>
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="mb-6">
                <span className={`text-4xl font-black ${currentTheme.text}`}>10 000</span>
                <span className={`text-xl font-bold ${currentTheme.textSecondary}`}> FCFA</span>
              </div>
              <p className={`text-sm ${currentTheme.textSecondary}`}>Paiement via Orange Money (657 776 709)</p>
            </div>
            <div className={`${currentTheme.card} rounded-3xl p-8 border-2 border-green-500 shadow-xl relative overflow-hidden text-center`}>
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-xl font-bold">Professionnel</div>
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="mb-6">
                <span className={`text-4xl font-black ${currentTheme.text}`}>20 000</span>
                <span className={`text-xl font-bold ${currentTheme.textSecondary}`}> FCFA</span>
              </div>
              <p className={`text-sm ${currentTheme.textSecondary}`}>Paiement via MTN MoMo (682 732 242)</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : FORMULAIRE D'INSCRIPTION */}
      <section id="inscription" className={`py-20 ${currentTheme.bg}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <ClipboardCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className={`text-4xl font-black mb-4 ${currentTheme.text}`}>Formulaire d'Inscription</h2>
            <p className={`${currentTheme.textSecondary} text-lg italic`}>
              Veuillez remplir les informations ci-dessous pour réserver votre place.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white border-4 border-blue-600">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfvvUDLX-3pupB9L8TBYCmqFguFifE0k9kVNnT6w6pp7N6bNA/viewform?embedded=true"              width="100%" 
              height="500" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Formulaire d'inscription ARIS"
            >
              Chargement du formulaire…
            </iframe>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className={`${currentTheme.card} py-12 border-t ${currentTheme.border}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-blue-600 font-bold">
            <span className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> 695 970 183</span>
            <span className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> rkillanga@gmail.com</span>
          </div>
          <p className={`${currentTheme.textSecondary} text-sm`}>
            © 2026 ARIS - ESS-UCAC Douala. Recherche collaborative, innovations partagées, santé améliorée.
          </p>
        </div>
      </footer>
    </div>
  );
}