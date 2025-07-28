import React from 'react';
import Select from 'react-select';
import './Navbar.css';
import { FaMoon, FaSun } from 'react-icons/fa'
import { FaCode } from "react-icons/fa6";;

const Navbar = ({ userLang, setUserLang, userTheme, setUserTheme, fontSize, setFontSize }) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];

    return (
        <div className={`navbar ${userTheme === 'vs-dark' ? 'dark' : 'light'}`}>
            <div className='titlename'>
                <h1>Code.it</h1><FaCode/>
            </div>
            <Select 
                options={languages} 
                value={languages.find(lang => lang.value === userLang)}
                onChange={(e) => setUserLang(e.value)}
                placeholder="Select Language"
                className="custom-select"
            />
            <div className="theme-toggle">
                <FaSun className="sun-icon" />
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={userTheme === 'vs-dark'} 
                        onChange={() => setUserTheme(userTheme === 'vs-dark' ? 'light' : 'vs-dark')} 
                    />
                    <span className="slider round"></span>
                </label>
                <FaMoon className="moon-icon" />
            </div>
            {/* <div className="font-slider">
                <label>Font Size</label>
                <input 
                    type="range" 
                    min="14" 
                    max="30" 
                    value={fontSize} 
                    step="2"
                    onChange={(e) => setFontSize(e.target.value)} 
                />
                <span>{fontSize}px</span>
            </div> */}
        </div>
    );
}

export default Navbar;