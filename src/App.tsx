import { useState } from 'react';
import { Code2, User, Briefcase, GraduationCap, Github, Linkedin, Mail, ArrowLeft, Youtube } from 'lucide-react';

type Tab = 'projects' | 'about' | 'skills';
type View = 'main' | 'project-details';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [view, setView] = useState<View>('main');

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 }
  ] as const;

  const ProjectDetails = () => (
    <div className="space-y-8">
      <button 
        onClick={() => setView('main')}
        className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Projects
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80" 
          alt="VR Project Hero" 
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Exploring Endless Worlds in VR</h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {['VR', 'Unity', 'C#', 'HCI', 'Research'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Dive into the fun intuitive, and nausea-free ways to move around in virtual reality! 
              Are you ready for the adventure?
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Project Impact</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Reduced VR motion sickness by 75%</li>
                  <li>Increased user engagement time by 3x</li>
                  <li>Published in leading VR conferences</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Adaptive movement system</li>
                  <li>Dynamic comfort settings</li>
                  <li>Multi-user support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p>
              This research project explores novel approaches to VR locomotion, addressing one of the biggest 
              challenges in virtual reality: comfortable movement. Through innovative interaction design and 
              extensive user studies, we've developed a system that makes VR exploration more accessible and 
              enjoyable for everyone.
            </p>

            <div className="my-8">
              <h2 className="text-2xl font-bold mb-4">Research Demo</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[400px] rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Project Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Research Methodology</h2>
            <p>
              Our approach combined quantitative and qualitative research methods to understand and address 
              VR motion sickness. We conducted:
            </p>
            <ul>
              <li>User studies with 200+ participants</li>
              <li>Biometric data analysis during VR sessions</li>
              <li>Long-term engagement tracking</li>
              <li>Comparative analysis with existing solutions</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <img 
                src="https://images.unsplash.com/photo-1626387346567-68d0c05f3b54?auto=format&fit=crop&q=80" 
                alt="User Testing" 
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80" 
                alt="Data Analysis" 
                className="rounded-lg"
              />
            </div>

            <div className="bg-indigo-50 rounded-xl p-6 my-8">
              <h2 className="text-2xl font-bold mb-4">Publications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">IEEE VR 2024</h3>
                  <p className="text-gray-600">
                    "Novel Approaches to VR Locomotion: Reducing Motion Sickness Through Adaptive Systems"
                  </p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">Read Paper →</a>
                </div>
                <div>
                  <h3 className="font-semibold">CHI 2024</h3>
                  <p className="text-gray-600">
                    "User Experience in Virtual Reality: A New Framework for Movement Design"
                  </p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">Read Paper →</a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} className="mr-2" />
                View on GitHub
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube size={20} className="mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ashu Adhikari</h1>
              <p className="text-gray-600">HCI Researcher & Software Developer</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
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
                    className={`
                      flex items-center px-4 py-2 rounded-lg transition-colors
                      ${activeTab === id 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {view === 'project-details' ? (
          <ProjectDetails />
        ) : (
          <>
            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80" 
                    alt="VR Project" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-indigo-600 mr-2" />
                      <h3 className="text-xl font-semibold">Exploring Endless Worlds in VR</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Dive into the fun intuitive, and nausea-free ways to move around in virtual reality! 
                      Are you ready for the adventure?
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['VR', 'Unity', 'Research', 'HCI'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => setView('project-details')}
                      className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
                    >
                      View Project Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80" 
                    alt="Software Project" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Code2 className="text-indigo-600 mr-2" />
                      <h3 className="text-xl font-semibold">Adaptive Learning Platform</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Developed an AI-powered learning platform that adapts to individual student needs.
                      Improved learning outcomes by 40%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Node.js', 'ML', 'TypeScript'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
                      View Project Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <img 
                    src="/info/Potrait.jpeg" 
                    alt="Ashu Adhikari" 
                    className="w-64 h-64 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-600 mb-6">
                      As an HCI researcher and software developer based in Waterloo, Ontario, I focus on creating 
                      intuitive and efficient interfaces that bridge the gap between humans and technology. With 
                      a background in both research and practical development, I bring a unique perspective to 
                      solving complex interaction challenges.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900">Location</h3>
                        <p className="text-gray-600">Waterloo, Ontario</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900">Focus Areas</h3>
                        <p className="text-gray-600">HCI, Software Development</p>
                      </div>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-semibold mb-2">Research Interests</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Human-AI Interaction Patterns</li>
                        <li>Adaptive User Interfaces</li>
                        <li>Cognitive Load in Software Interfaces</li>
                        <li>Accessibility in Digital Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      { name: 'Research Methods', level: 'Expert' },
                      { name: 'React', level: 'Advanced' },
                      { name: 'TypeScript', level: 'Advanced' },
                      { name: 'Python', level: 'Expert' },
                      { name: 'Data Analysis', level: 'Advanced' },
                      { name: 'UI/UX Design', level: 'Advanced' },
                      { name: 'Node.js', level: 'Intermediate' },
                      { name: 'Machine Learning', level: 'Intermediate' }
                    ].map((skill) => (
                      <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-gray-600 text-sm">{skill.level}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications & Certifications</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="font-semibold">CHI 2024 Conference Paper</h3>
                      <p className="text-gray-600">Novel Approaches in Human-AI Interaction Design</p>
                    </div>
                    <div className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="font-semibold">IEEE Transactions on HCI</h3>
                      <p className="text-gray-600">Adaptive Interfaces for Cognitive Load Reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;