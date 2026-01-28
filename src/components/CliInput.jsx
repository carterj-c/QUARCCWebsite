import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CliInput.css';

const CliInput = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const command = input.trim().toLowerCase();
            const newHistory = [...history, `[user@quarcc ~]$ ${input}`];

            const routes = {
                'home': '/',
                'about': '/about',
                'events': '/events',
                'teams': '/teams',
                'join': '/join',
                'paper-fund': '/paper-fund',
                'paper fund': '/paper-fund'
            };

            if (command === 'help') {
                newHistory.push('Available commands:');
                newHistory.push('  home        - Go to Dashboard');
                newHistory.push('  about       - Club Information');
                newHistory.push('  events      - Upcoming Events');
                newHistory.push('  teams       - Our Structure');
                newHistory.push('  join        - Recruitment');
                newHistory.push('  paper-fund  - Live Portfolios');
                newHistory.push('  clear       - Clear terminal');
            } else if (command === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else if (routes[command]) {
                newHistory.push(`Navigating to ${command}...`);
                navigate(routes[command]);
            } else if (command !== '') {
                newHistory.push(`bash: ${command}: command not found`);
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className="cli-wrapper">
            <div className="cli-history">
                {history.map((line, index) => (
                    <div key={index} className="cli-line">{line}</div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="cli-container">
                <span className="cli-prompt">[user@quarcc ~]$</span>
                <input
                    type="text"
                    className="cli-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    spellCheck={false}
                />
            </div>
        </div>
    );
};

export default CliInput;
