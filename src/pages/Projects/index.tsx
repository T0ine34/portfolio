import './index.scss';

import { PageContext } from '../../context';
import React, { useContext } from 'react';

function Projects({ children }: { children: React.ReactNode }) {
        const { current, setCurrent } = useContext(PageContext);
    
        if (current !== 'projects') {
            return null;
        }
    
        return (
            <section className="Projects">
                {children}
            </section>
        );
}

export default Projects;