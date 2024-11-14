import './index.scss';


/**
 * Letters will appear one by one with a spawn effect.
 */
function SpawnEffect({ children, reverse } : { children: React.ReactNode, reverse?: boolean }) {
    const text = typeof children === 'string' ? children.split('') : [];

    return (
        <div className={"spawn-effect" + (reverse ? "-reverse" : "")}>
            {text.map((char, index) => (
                <span key={index} className={char === ' ' ? 'space' : ''}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
}


export default SpawnEffect;