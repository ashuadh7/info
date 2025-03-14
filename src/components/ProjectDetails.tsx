import { ArrowLeft } from 'lucide-react';

const ProjectDetails = ({ goBack }: { goBack: () => void }) => {
    return (
        <div className="space-y-8">
            <button onClick={goBack} className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-6">
                <ArrowLeft size={20} className="mr-2" />
                Back to Projects
            </button>
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Exploring Endless Worlds in VR</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Dive into the fun, intuitive, and nausea-free ways to move around in virtual reality!
                </p>
            </div>
        </div>
    );
};

export default ProjectDetails;
