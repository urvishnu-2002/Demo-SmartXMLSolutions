import { useState, useEffect } from "react";

function AccessibilityWidget({ isVisible }) {
    const [isOpen, setIsOpen] = useState(false);

    // Use localStorage to persist settings
    const [theme, setTheme] = useState(() => localStorage.getItem("accessibility-theme") || "default");
    const [fontSize, setFontSize] = useState(() => parseInt(localStorage.getItem("accessibility-font-size")) || 100);
    const [lineHeight, setLineHeight] = useState(() => parseFloat(localStorage.getItem("accessibility-line-height")) || 1.5);

    // Apply changes to the DOM
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        // Theme
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("accessibility-theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("accessibility-theme", "default");
        }

        // Font Size
        root.style.fontSize = `${fontSize}%`;
        localStorage.setItem("accessibility-font-size", fontSize.toString());

        // Line Height
        body.style.lineHeight = lineHeight;
        localStorage.setItem("accessibility-line-height", lineHeight.toString());

    }, [theme, fontSize, lineHeight]);

    const resetSettings = (e) => {
        e.stopPropagation();
        setTheme("default");
        setFontSize(100);
        setLineHeight(1.5);
    };

    const increaseFont = (e) => {
        e.stopPropagation();
        if (fontSize < 200) setFontSize(prev => prev + 10);
    };

    const decreaseFont = (e) => {
        e.stopPropagation();
        if (fontSize > 100) setFontSize(prev => prev - 10);
    };

    const increaseLineHeight = (e) => {
        e.stopPropagation();
        if (lineHeight < 3.0) setLineHeight(prev => parseFloat((prev + 0.1).toFixed(1)));
    };

    const decreaseLineHeight = (e) => {
        e.stopPropagation();
        if (lineHeight > 1.0) setLineHeight(prev => parseFloat((prev - 0.1).toFixed(1)));
    };

    const toggleWidget = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`fixed bottom-10 left-10 z-[10000] transition-all duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}>

                {/* Widget Button */}
                <button
                    onClick={toggleWidget}
                    className={`w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-95 ${isOpen ? 'rotate-90' : 'animate-fadeUp'}`}
                    aria-label="Accessibility Menu"
                >
                    {isOpen ? (
                        <i className="fa-solid fa-xmark text-2xl"></i>
                    ) : (
                        <i className="fa-solid fa-universal-access text-2xl"></i>
                    )}
                </button>

                {/* Panel */}
                {isOpen && (
                    <div
                        className="absolute bottom-16 left-0 bg-[#1e1e1e] text-white w-[350px] rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-zoomInPanel"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >

                        {/* Header */}
                        <div className="bg-blue-700 p-4 flex justify-between items-center text-white">
                            <h3 className="font-bold text-lg">Accessibility Adjustments</h3>
                        </div>

                        {/* Top Quick Actions */}
                        <div className="bg-blue-600 px-4 pb-4 flex justify-between gap-4">
                            <button
                                onClick={resetSettings}
                                className="flex-1 py-1.5 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-blue-600 transition-all"
                            >
                                Reset settings
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex-1 py-1.5 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-blue-600 transition-all"
                            >
                                Hide Widget
                            </button>
                        </div>

                        {/* Controls */}
                        <div className="p-5 space-y-6">

                            {/* Theme Toggle */}
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-200">Theme</span>
                                <div className="bg-gray-800 p-1 rounded-full flex gap-1">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setTheme("default"); }}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${theme === 'default' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        DEFAULT
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setTheme("dark"); }}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${theme === 'dark' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        DARK
                                    </button>
                                </div>
                            </div>

                            <hr className="border-gray-700" />

                            {/* Font Size Selector */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-white">
                                    <span className="font-medium text-gray-200">Font size</span>
                                    <div className="bg-gray-800 p-1 rounded-full flex items-center gap-2">
                                        <span className="text-xs text-gray-400 pl-3">A</span>
                                        <button onClick={decreaseFont} className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition-colors">
                                            <i className="fa-solid fa-minus text-xs"></i>
                                        </button>
                                        <span className="text-xs font-bold px-1 w-12 text-center">
                                            {fontSize}%
                                        </span>
                                        <button onClick={increaseFont} className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition-colors">
                                            <i className="fa-solid fa-plus text-xs"></i>
                                        </button>
                                        <span className="text-lg text-gray-200 pr-3">A</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-700" />

                            {/* Line Height Selector */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-white">
                                    <span className="font-medium text-gray-200">Line height</span>
                                    <div className="bg-gray-800 p-1 rounded-full flex items-center gap-2">
                                        <span className="pl-3 text-gray-400"><i className="fa-solid fa-arrows-up-down text-xs"></i></span>
                                        <button onClick={decreaseLineHeight} className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition-colors">
                                            <i className="fa-solid fa-minus text-xs"></i>
                                        </button>
                                        <span className="text-xs font-bold px-1 w-12 text-center">
                                            {lineHeight}
                                        </span>
                                        <button onClick={increaseLineHeight} className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition-colors">
                                            <i className="fa-solid fa-plus text-xs"></i>
                                        </button>
                                        <span className="pr-3 text-gray-200"><i className="fa-solid fa-arrows-up-down"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default AccessibilityWidget;
