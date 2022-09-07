import '../assets/css/Wrapper.css';

export default function Tasks ({ children }) { 
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}