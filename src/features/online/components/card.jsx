export function Card({ children, className = '', style = {} }) {
    return (
        <div
            className={`w-100 position-relative ${className}`}
            style={{
                background: 'white',
                border: '1px solid #E7E6F2',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(47, 28, 106, 0.06)',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
