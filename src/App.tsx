import { useState } from 'react';
import { Briefcase, User, Code2, Github, Linkedin, Mail } from 'lucide-react';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import ProjectDetails from './components/ProjectDetails';

type Tab = 'projects' | 'about' | 'skills';
type View = 'main' | 'project-details';

function App() {
    const [activeTab, setActiveTab] = useState<Tab>('projects');
    const [view, setView] = useState<View>('main');

    const tabs = [
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code2 }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Ashu Adhikari</h1>
                            <p className="text-gray-600">HCI Researcher & Software Developer</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-indigo-600">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {view === 'main' && (
                        <nav className="mt-6">
                            <div className="flex space-x-4">
                                {tabs.map(({ id, label, icon: Icon }) => (
                                    <button
                                        key={id}
                                        onClick={() => setActiveTab(id)}
                                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeTab === id ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        <Icon size={18} className="mr-2" />
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {view === 'project-details' ? (
                    <ProjectDetails goBack={() => setView('main')} />
                ) : (
                    <>
                        {activeTab === 'projects' && <Projects openProject={() => setView('project-details')} />}
                        {activeTab === 'about' && <About />}
                        {activeTab === 'skills' && <Skills />}
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
