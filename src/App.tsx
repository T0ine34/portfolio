import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './pages/Projects';
import Project from './components/Project';

import { PageContext}  from './context';
import { useState } from 'react';


function App() {

    const [current, setCurrent] = useState('home');

    return (
        <div className="App">

            <PageContext.Provider value={{ current, setCurrent }}>
                <Header />
                <Projects>
                    <Project title="Project 1">
                        <p>Project 1 description</p>
                    </Project>
                    <Project title="Project 2">
                        <p>Project 2 description</p>
                    </Project>
                </Projects>
                <Footer />
            </PageContext.Provider>
        </div>
    );
}

export default App;
