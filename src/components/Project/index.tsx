import './index.scss';

function Project({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="Project">
            <h3>{title}</h3>
            {children}
        </section>
    );
}

export default Project;