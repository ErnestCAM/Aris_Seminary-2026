import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, Clock, MapPin, Users, BookOpen, Award, Mail, Phone, 
  CheckCircle, Sun, Moon, Sunset, ChevronDown, Star, ClipboardCheck, 
  Wallet, Wifi, Coffee, GraduationCap, ArrowRight, BrainCircuit, Search
} from 'lucide-react';

export default function ARISSeminaires() {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const themes = {
    light: {
      name: 'Clair', icon: <Sun className="w-4 h-4" />, bg: 'bg-gray-50', card: 'bg-white',
      text: 'text-gray-900', textSecondary: 'text-gray-600', border: 'border-gray-200', hover: 'hover:bg-gray-100'
    },
    dark: {
      name: 'Sombre', icon: <Moon className="w-4 h-4" />, bg: 'bg-gray-900', card: 'bg-gray-800',
      text: 'text-white', textSecondary: 'text-gray-300', border: 'border-gray-700', hover: 'hover:bg-gray-700'
    },
    dim: {
      name: 'Tamisé', icon: <Sunset className="w-4 h-4" />, bg: 'bg-slate-800', card: 'bg-slate-700',
      text: 'text-slate-100', textSecondary: 'text-slate-300', border: 'border-slate-600', hover: 'hover:bg-slate-600'
    }
  };

  const currentTheme = themes[theme];

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
    <div className={`min-h-screen ${currentTheme.bg} transition-colors duration-300 font-sans`}>
      {/* Header */}
      <header className={`${currentTheme.card} shadow-lg sticky top-0 z-50 border-b ${currentTheme.border}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 rounded-xl p-2 shadow-lg">
              <h1 className="text-2xl font-black text-white tracking-tighter">ARIS</h1>
            </div>
            <p className={`hidden md:block text-xs ${currentTheme.textSecondary} font-bold uppercase tracking-widest`}>
              Association pour la Recherche et l'Innovation en Santé
            </p>
          </div>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`px-4 py-2 rounded-lg ${currentTheme.card} border ${currentTheme.border} ${currentTheme.hover} flex items-center gap-2 ${currentTheme.text} shadow-sm transition-all`}
            >
              {currentTheme.icon}
              <span className="font-medium hidden sm:inline">{currentTheme.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMenuOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-2xl border ${currentTheme.border} ${currentTheme.card} overflow-hidden`}>
                {Object.keys(themes).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTheme(t); setIsMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left ${theme === t ? 'bg-blue-600 text-white' : `${currentTheme.text} ${currentTheme.hover}`}`}
                  >
                    {themes[t].icon} <span className="font-medium">{themes[t].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-6xl font-black mb-6 ${currentTheme.text} leading-tight`}>
              Boostez votre <span className="text-blue-600">Productivité Scientifique</span>
            </h2>
            <p className={`text-xl ${currentTheme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Maîtrisez la Recherche Documentaire et l'IA avec ARIS. Ne laissez plus la bibliographie freiner vos ambitions académiques.
            </p>
          </div>

          <div className={`${currentTheme.card} rounded-[2.5rem] shadow-2xl overflow-hidden border ${currentTheme.border}`}>
            <div className="bg-gray-100 flex justify-center items-center">
              <img 
                src={`${process.env.PUBLIC_URL}/Maquette_Aris.jpeg`} 
                alt="Affiche Officielle ARIS" 
                className="w-full h-auto object-contain max-h-[700px]"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/1200x600?text=Affiche+ARIS+2026";
                }}
              />
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-t border-gray-200">
              <div className="p-8 text-center">
                <Calendar className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <p className={`font-bold ${currentTheme.text}`}>24 & 31 Janvier 2026</p>
                <p className={`text-xs ${currentTheme.textSecondary}`}>Deux journées d'immersion</p>
              </div>
              <div className="p-8 text-center">
                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className={`font-bold ${currentTheme.text}`}>ESS-UCAC, Douala</p>
                <p className={`text-xs ${currentTheme.textSecondary}`}>Campus Ndokoti, face ENEO</p>
              </div>
              <div className="p-8 text-center">
                <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className={`font-bold ${currentTheme.text}`}>Certificat Inclus</p>
                <p className={`text-xs ${currentTheme.textSecondary}`}>Valorisez votre CV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi participer */}
      <section className={`py-20 ${theme === 'light' ? 'bg-blue-50' : 'bg-opacity-10 bg-blue-900'}`}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className={`text-3xl font-black mb-12 text-center ${currentTheme.text}`}>Pourquoi participer à ce séminaire ?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${currentTheme.card} p-8 rounded-3xl shadow-md border ${currentTheme.border}`}>
              <Search className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Bases de données d'élite</h4>
              <p className={currentTheme.textSecondary}>Construisez des requêtes complexes sur PubMed, Google Scholar et HINARI pour accéder aux meilleures ressources.</p>
            </div>
            <div className={`${currentTheme.card} p-8 rounded-3xl shadow-md border ${currentTheme.border}`}>
              <BrainCircuit className="w-12 h-12 text-purple-600 mb-4" />
              <h4 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Intelligence Artificielle</h4>
              <p className={currentTheme.textSecondary}>Utilisez le prompt-engineering pour générer des résumés ciblés et des mind-maps de la littérature médicale.</p>
            </div>
            <div className={`${currentTheme.card} p-8 rounded-3xl shadow-md border ${currentTheme.border}`}>
              <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
              <h4 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Automatisation Zotero</h4>
              <p className={currentTheme.textSecondary}>Maîtrisez Zotero pour citer vos sources en un clic au format APA 7e édition.</p>
            </div>
            <div className={`${currentTheme.card} p-8 rounded-3xl shadow-md border ${currentTheme.border}`}>
              <ArrowRight className="w-12 h-12 text-orange-600 mb-4" />
              <h4 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Passage à l'action</h4>
              <p className={currentTheme.textSecondary}>Repartez avec un mini-article scientifique produit durant l'atelier. Garantie de résultat à 100%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Intensif (Tableau issu de la capture) */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="p-3 bg-white shadow-md rounded-lg">📅</div>
            <h3 className={`text-3xl font-black ${currentTheme.text}`}>Un Programme Intensif et Pratique</h3>
          </div>
          <div className={`${currentTheme.card} rounded-3xl overflow-hidden border ${currentTheme.border} shadow-xl`}>
            <div className="p-6 bg-blue-600 text-white">
              <p className="font-bold">Deux journées non consécutives (09h00 - 15h00)</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b ${currentTheme.border} bg-opacity-50 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
                    <th className={`p-6 font-bold ${currentTheme.text}`}>Journée</th>
                    <th className={`p-6 font-bold ${currentTheme.text}`}>Thématique</th>
                    <th className={`p-6 font-bold ${currentTheme.text}`}>Points Clés</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b ${currentTheme.border}`}>
                    <td className={`p-6 font-black text-blue-600`}>Jour 1</td>
                    <td className={`p-6 font-bold ${currentTheme.text}`}>Foundations & Search Accelerator</td>
                    <td className={`p-6 ${currentTheme.textSecondary}`}>Modèle PICO, requêtes booléennes, installation et premiers pas sur Zotero.</td>
                  </tr>
                  <tr>
                    <td className={`p-6 font-black text-blue-600`}>Jour 2</td>
                    <td className={`p-6 font-bold ${currentTheme.text}`}>Write, Cite & Share</td>
                    <td className={`p-6 ${currentTheme.textSecondary}`}>IA générative pour la veille automatisée, plugin Word/Google Docs, synchronisation cloud.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs avec Majorations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className={`text-3xl font-black text-center mb-12 ${currentTheme.text}`}>Modalités & Tarifs</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Étudiant */}
            <div className={`${currentTheme.card} p-8 rounded-3xl border-2 border-blue-500 shadow-xl relative`}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Étudiant</div>
              <div className="text-center">
                <p className={`text-sm ${currentTheme.textSecondary} mb-2`}>Avant le 18/01</p>
                <p className={`text-4xl font-black ${currentTheme.text} mb-4`}>10 000 <span className="text-lg">FCFA</span></p>
                <div className={`h-px w-full bg-gray-100 my-4`}></div>
                <p className={`text-sm text-red-500 font-bold uppercase`}>Après le 18/01</p>
                <p className={`text-2xl font-bold ${currentTheme.text}`}>15 000 FCFA</p>
              </div>
            </div>
            {/* Professionnel */}
            <div className={`${currentTheme.card} p-8 rounded-3xl border-2 border-green-500 shadow-xl relative`}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">Professionnel</div>
              <div className="text-center">
                <p className={`text-sm ${currentTheme.textSecondary} mb-2`}>Avant le 18/01</p>
                <p className={`text-4xl font-black ${currentTheme.text} mb-4`}>20 000 <span className="text-lg">FCFA</span></p>
                <div className={`h-px w-full bg-gray-100 my-4`}></div>
                <p className={`text-sm text-red-500 font-bold uppercase`}>Après le 18/01</p>
                <p className={`text-2xl font-bold ${currentTheme.text}`}>25 000 FCFA</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Avantages & Inscription */}
      <section className={`py-20 ${currentTheme.card} border-y ${currentTheme.border}`}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-3xl font-black mb-8 ${currentTheme.text}`}>Ce qui est inclus :</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Wifi className="text-blue-600"/>, text: "Internet Haut Débit gratuit sur place" },
                  { icon: <Coffee className="text-orange-600"/>, text: "Pauses café et déjeuner offerts" },
                  { icon: <CheckCircle className="text-green-600"/>, text: "Accompagnement par des experts dédiés" },
                  { icon: <GraduationCap className="text-purple-600"/>, text: "Prérequis : Apporter son ordinateur" }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-4 text-lg ${currentTheme.text}`}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white shadow-2xl">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2"><Wallet /> Comment s'inscrire ?</h4>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>Remplissez le formulaire en ligne ci-contre.</li>
                  <li>Réglez via Orange (657 776 709) ou MTN (682 732 242).</li>
                  <li>Paiement en espèces possible sur le campus de l'ESS-UCAC, sis à Ndokoti</li>
                </ol>
              </div>
            </div>

            <div id="inscription" className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] blur-xl opacity-20"></div>
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-blue-600">
                <div className="p-4 bg-blue-600 text-white text-center font-bold">RESERVER MA PLACE</div>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfvvUDLX-3pupB9L8TBYCmqFguFifE0k9kVNnT6w6pp7N6bNA/viewform?embedded=true" 
                  width="100%" height="550" frameBorder="0" title="Form">Chargement…</iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h4 className={`text-xl font-bold mb-6 ${currentTheme.text}`}>Une question ? Contactez-nous</h4>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a href="tel:695970183" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              <Phone className="w-5 h-5" /> 695 970 183
            </a>
            <a href="mailto:rkillanga@gmail.com" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              <Mail className="w-5 h-5" /> rkillanga@gmail.com
            </a>
          </div>
          <div className={`h-px w-24 bg-gray-300 mx-auto mb-6`}></div>
          <p className={`${currentTheme.textSecondary} text-sm`}>
            © 2026 ARIS - Association pour la Recherche et l'Innovation en Santé
          </p>
        </div>
      </footer>
    </div>
  );
}