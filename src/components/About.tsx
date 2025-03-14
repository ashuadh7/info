const About = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                    src="/info/Potrait.jpeg"
                    alt="Ashu Adhikari"
                    className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-600">
                        As an HCI researcher and software developer, I focus on creating
                        intuitive and efficient interfaces that bridge the gap between humans and technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
